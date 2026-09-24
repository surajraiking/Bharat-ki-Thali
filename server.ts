import express from 'express';
import path from 'path';
import fs from 'fs';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { allDishes } from './src/data/dishes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Google Gemini AI SDK if key is provided
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    aiClient = new GoogleGenAI();
  } catch (err) {
    console.warn('Could not initialize GoogleGenAI client:', err);
  }
}

// Download Android APK endpoint
app.get(['/bharat-ki-thali.apk', '/api/download/apk'], (_req, res) => {
  const apkPath = path.resolve(process.cwd(), 'public', 'bharat-ki-thali.apk');
  if (fs.existsSync(apkPath)) {
    res.setHeader('Content-Type', 'application/vnd.android.package-archive');
    res.setHeader('Content-Disposition', 'attachment; filename="Bharat-Ki-Thali-v2.0.apk"');
    fs.createReadStream(apkPath).pipe(res);
  } else {
    res.status(404).json({ error: 'APK file not found' });
  }
});

// Lightweight, catalog-grounded search used by AI Chef and future clients.
const normalize = (value: unknown) => String(value ?? '').toLowerCase().trim();
const dishSearchText = (dish: typeof allDishes[number]) => [
  dish.id, dish.name, dish.nameHindi, dish.description, dish.descriptionHindi,
  dish.region, dish.state, ...dish.cuisine, ...dish.category, ...dish.mealTypes,
  ...dish.diet, ...dish.tags, ...(dish.festival || []),
  ...dish.ingredients.map(i => i.name)
].map(normalize).join(' ');

const searchCatalog = (query: string, limit = 8) => {
  const terms = normalize(query).split(/\\s+/).filter(Boolean);
  if (!terms.length) return allDishes.slice(0, limit);
  return allDishes
    .map(dish => {
      const haystack = dishSearchText(dish);
      const exact = haystack.includes(normalize(query)) ? 5 : 0;
      const score = exact + terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
      return { dish, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || (b.dish.popularity || 0) - (a.dish.popularity || 0))
    .slice(0, limit)
    .map(item => item.dish);
};

app.get('/api/recipes/search', (req, res) => {
  const query = typeof req.query.q === 'string' ? req.query.q : '';
  const limitRaw = Number(req.query.limit ?? 12);
  const limit = Number.isFinite(limitRaw) ? Math.min(Math.max(Math.floor(limitRaw), 1), 30) : 12;
  const results = searchCatalog(query, limit).map(dish => ({
    id: dish.id, name: dish.name, nameHindi: dish.nameHindi, image: dish.image,
    region: dish.region, state: dish.state, cuisine: dish.cuisine,
    category: dish.category, mealTypes: dish.mealTypes, diet: dish.diet,
    totalTimeMinutes: dish.totalTimeMinutes, difficulty: dish.difficulty,
    tags: dish.tags, popularity: dish.popularity
  }));
  res.json({ query, count: results.length, results });
});

// AI Chef Chat endpoint
app.post('/api/ai/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const catalogMatches = searchCatalog(message, 10);
  const catalogContext = catalogMatches.map(dish => ({
    id: dish.id, name: dish.name, nameHindi: dish.nameHindi, description: dish.description,
    region: dish.region, state: dish.state, cuisine: dish.cuisine, category: dish.category,
    mealTypes: dish.mealTypes, diet: dish.diet, ingredients: dish.ingredients,
    totalTimeMinutes: dish.totalTimeMinutes, servings: dish.servings,
    difficulty: dish.difficulty, spiceLevel: dish.spiceLevel, nutrition: dish.nutrition,
    tags: dish.tags, festival: dish.festival
  }));

  // System instruction is grounded in the real recipe catalog instead of a hand-maintained list.
  const systemInstruction = `You are "AI Chef" inside Bharat Ki Thali 2.0 (भारत की थाली), a helpful Indian culinary assistant.
Tone: warm, practical, knowledgeable; respond naturally in Hindi, English or Hinglish.
Important rules:
- Use the supplied catalog context whenever recommending dishes or discussing exact recipe facts.
- Never invent recipe IDs, catalog dishes, ingredient quantities, nutrition values, or preparation times.
- If the catalog does not contain a requested dish, clearly say it is not in the current catalog and then provide general cooking guidance without pretending it is catalog data.
- Nutrition values are estimates from the catalog, not medical advice. Do not diagnose conditions or promise health outcomes.
- For dietary/medical questions, give general food information and suggest consulting a qualified professional for individualized advice.
- Return concise, useful answers. When recommending catalog dishes, end with a JSON line exactly in this shape: {\"recommendedDishes\":[\"id1\",\"id2\"]}. Only include IDs present in the catalog context.

CATALOG CONTEXT:\n${JSON.stringify(catalogContext)}`;

  // Fallback engine if Gemini API key is missing or call fails
  const getSmartFallback = (query: string) => {
    const q = query.toLowerCase();
    if (q.includes('protein') || q.includes('muscle')) {
      return {
        text: `💪 **हाई-प्रोटीन भारतीय सुझाव:**\n\n1. **Moong Dal Chilla & Paneer Bhurji**: 20g+ शुद्ध शाकाहारी प्रोटीन।\n2. **Rajma Masala / Punjabi Chole**: ब्राउन राइस या ज्वार की रोटी के साथ बेहतरीन कॉम्बो।\n3. **Sattu Sharbat**: प्राकृतिक भारतीय व्हे-प्रोटीन जो पेट को ठंडा और ऊर्जावान रखता है।\n\n💡 *Chef Tip*: दालों को 4-6 घंटे भिगोकर बनाने से पोषक तत्व आसानी से पचते हैं!`,
        recommendedDishes: ['moong-dal-chilla', 'rajma', 'paneer-bhurji', 'sattu-sharbat']
      };
    } else if (q.includes('weight') || q.includes('fat') || q.includes('vajan') || q.includes('diet')) {
      return {
        text: `🥗 **वजन नियंत्रण और लो-कैलोरी स्वादिष्ट व्यंजन:**\n\n1. **Steamed Idli & Sambar**: बिना तेल के भाप में पकी, गट-फ्रेंडली और हल्की।\n2. **Khaman Dhokla**: केवल 140 कैलोरी प्रति प्लेट, प्रोटीन और फाइबर से भरपूर।\n3. **Sprouts Usal Chaat**: अंकुरित मूंग में नींबू, प्याज, टमाटर और भुना जीरा।\n\n💡 *Chef Tip*: रात के खाने में 'खिचड़ी' या 'सूप' लें, जो 8 बजे से पहले समाप्त कर लें।`,
        recommendedDishes: ['idli', 'dhokla', 'sprouts-chaat', 'khichdi']
      };
    } else if (q.includes('breakfast') || q.includes('nashta') || q.includes('subah')) {
      return {
        text: `☀️ **आज सुबह के 3 झटपट और पौष्टिक नाश्ते:**\n\n1. **Kanda Batata Poha**: 15 मिनट में तैयार, मूंगफली और नींबू के साथ शानदार ऊर्जा।\n2. **Methi Thepla**: दही और पुदीने की चटनी के साथ। 2-3 दिन तक ताज़ा रहता है।\n3. **Besan / Moong Chilla**: बिना मैदा, फाइबर और आयरन से भरपूर।`,
        recommendedDishes: ['poha', 'thepla', 'besan-chilla']
      };
    } else if (q.includes('thali') || q.includes('lunch') || q.includes('dopahar')) {
      return {
        text: `🍽️ **संपूर्ण संतुलित थाली की योजना:**\n\n- **दाल**: तड़का दाल या राजमा मसाला\n- **सब्जी**: आलू गोभी या भिंडी मसाला\n- **रोटी/चावल**: 2 गरमा-गरम फुलके या जीरा राइस\n- **सलाद एवं ड्रिंक**: खीरा रायता और ठंडा मसाला छाछ\n- **मीठा**: थोड़ा सा गाजर का हलवा या गुड़ का टुकड़ा`,
        recommendedDishes: ['tadka-dal', 'aloo-gobi', 'cucumber-raita', 'masala-chaas']
      };
    } else {
      return {
        text: `नमस्ते! 🙏 मैं आपका भारत की थाली शेफ हूँ।\n\nआप मुझसे किसी भी रेसिपी की विधि, फ्रिज में बची सब्जियों से क्या बनाएं, या किसी खास क्षेत्र (जैसे पंजाब, महाराष्ट्र, केरल, बंगाल) के पारंपरिक स्वादों के बारे में पूछ सकते हैं!\n\n💡 *उदाहरण के लिए पूछें*:\n• "मेरे पास आलू और टमाटर हैं, क्या बनाऊं?"\n• "संडे स्पेशल पंजाबी लंच बताओ"\n• "डायबिटीज में क्या खाना चाहिए?"`,
        recommendedDishes: ['poha', 'dal-makhani', 'idli']
      };
    }
  };

  // If Gemini API is available, invoke model
  if (aiClient && process.env.GEMINI_API_KEY) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${message}` }] }
        ]
      });

      const replyText = response.text || '';
      return res.json({
        text: replyText,
        source: 'gemini'
      });
    } catch (err: any) {
      console.warn('Gemini API call failed, falling back to local expert engine:', err?.message || err);
      const fallback = getSmartFallback(message);
      return res.json({
        text: fallback.text,
        recommendedDishes: fallback.recommendedDishes,
        source: 'fallback'
      });
    }
  }

  // Fallback response when no key
  const fallback = getSmartFallback(message);
  return res.json({
    text: fallback.text,
    recommendedDishes: fallback.recommendedDishes,
    source: 'fallback'
  });
});

// Vite Middleware for development & static serving for production
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();

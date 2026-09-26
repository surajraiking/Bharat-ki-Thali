import express from 'express';
import path from 'path';
import fs from 'fs';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

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

// AI Chef Chat endpoint
app.post('/api/ai/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // System instruction for the Indian culinary expert
  const systemInstruction = `You are the AI Chef inside Bharat Ki Thali 2.0 (भारत की थाली), focused ONLY on Indian food, recipes, ingredients, cooking methods, regional cuisine, meal planning and food-related questions.

STRICT RELEVANCE RULES:
1. Answer the user's CURRENT question first. Do not reuse a previous answer merely because it was about food.
2. Never answer every question with Poha, Kanda Batata Poha, Rajma or any other default dish.
3. If the user names a dish/ingredient, stay specifically on that item unless they ask for alternatives.
4. If the question is unrelated to food/cooking, politely say that you are the food-focused AI Chef and ask them to ask a food-related question.
5. Use conversation history only to resolve context; the latest user message has priority.
6. Recommend catalog dishes only when they are directly relevant to the current question. If there is no strong match, return no recommendation.
7. Never invent that a dish contains an ingredient or belongs to a region when unsure.

LANGUAGE: Reply in the user's language (Hindi/Hinglish/English).
STYLE: Concise, practical, structured. For recipes give ingredients, steps, cooking time and useful tips when relevant.

Bharat Ki Thali catalog includes dishes such as Kanda Batata Poha, Moong Dal Paneer Chilla, Vegetable Oats Idli, Crispy Ragi Dosa, Gujarati Methi Thepla, Rajma Masala, Punjabi Chole, Dal Makhani, Palak Paneer, Paneer Bhurji, Aloo Gobi, Bhindi Masala, Khichdi, Bajra Roti, Jowar Roti, Veg Pulao, Makhana Chaat, Gajar Halwa, Kheer, Masala Chaas, Litti Chokha, Dal Baati Churma, Misal Pav, Khandvi, Curd Rice, Avial, Bisi Bele Bath, Rosogolla, Vada Pav, Amritsari Kulcha, Chettinad Chicken, Rogan Josh and Veg Dum Biryani.`;

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
        text: `मैं केवल भारत की थाली से जुड़े भोजन, रेसिपी, सामग्री और कुकिंग सवालों में मदद करता हूँ। 🙏\n\nआप किसी खास डिश का नाम लिखकर उसकी रेसिपी, सामग्री, बनाने का तरीका या उससे जुड़ा सवाल पूछ सकते हैं।`,
        recommendedDishes: []
      };
    }
  };

  // If Gemini API is available, invoke model
  if (aiClient && process.env.GEMINI_API_KEY) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nConversation context (may be empty):\n${JSON.stringify(Array.isArray(history) ? history.slice(-8) : [])}\n\nCURRENT USER QUESTION: ${message}` }] }
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

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
  const queryNorm = normalize(message);
  const foodIntentWords = [
    'recipe','dish','food','cook','cooking','ingredient','ingredients','eat','meal','breakfast','lunch','dinner',
    'snack','dessert','sweet','thali','roti','sabzi','dal','rice','chawal','paneer','vegetable','veg','nonveg',
    'protein','calorie','nutrition','spicy','healthy','diet','festival','regional','state','cuisine',
    'नाश्ता','खाना','बनाना','रेसिपी','सामग्री','दाल','सब्जी','रोटी','चावल','थाली','मिठाई','पेय','पनीर','डिनर','लंच'
  ];
  const hasFoodIntent = foodIntentWords.some(word => queryNorm.includes(normalize(word)));

  const catalogContext = catalogMatches.map(dish => ({
    id: dish.id,
    name: dish.name,
    nameHindi: dish.nameHindi,
    description: dish.description,
    region: dish.region,
    state: dish.state,
    cuisine: dish.cuisine,
    category: dish.category,
    mealTypes: dish.mealTypes,
    diet: dish.diet,
    ingredients: dish.ingredients,
    steps: dish.steps,
    totalTimeMinutes: dish.totalTimeMinutes,
    servings: dish.servings,
    difficulty: dish.difficulty,
    spiceLevel: dish.spiceLevel,
    nutrition: dish.nutrition,
    tags: dish.tags,
    festival: dish.festival
  }));

  const scopeResponse = {
    text: 'मैं केवल Bharat Ki Thali के भारतीय भोजन, रेसिपी, सामग्री, थाली, खाना पकाने और उससे जुड़े पोषण/कुकिंग सवालों में मदद करता हूँ। अपना food-related सवाल लिखें।',
    recommendedDishes: []
  };

  // Reject unrelated prompts before they reach the model.
  if (!hasFoodIntent && catalogMatches.length === 0) {
    return res.json({ ...scopeResponse, source: 'scope-guard' });
  }

  const systemInstruction = `You are the AI Chef inside Bharat Ki Thali 2.0.
Your ONLY job is to answer the user's CURRENT food/cooking question.
- Answer only the asked question. Never add unrelated recommendations or filler.
- Use CATALOG CONTEXT for exact recipe facts. Never invent IDs, quantities, nutrition, timings, ingredients, or steps.
- If the user names a dish, answer specifically about that dish.
- If the user names ingredients, focus only on dishes/cooking methods relevant to those ingredients.
- If the user asks for a thali slot/category such as roti, sabzi, dal, rice, sweet or drink, recommend only matching catalog items.
- If the requested dish is absent from the catalog, say so clearly; do not pretend it exists.
- Nutrition values are estimates and are not medical advice.
- Do not diagnose conditions or promise health outcomes.
- Match Hindi/Hinglish/English used by the user.
- Keep the response focused and useful.
- When recommending catalog dishes, finish with JSON: {"recommendedDishes":["id1","id2"]}. Only use IDs in CATALOG CONTEXT.
- If no recommendations are needed, omit that JSON line.

CATALOG CONTEXT:
${JSON.stringify(catalogContext)}`;

  const recentHistory = Array.isArray(history)
    ? history.slice(-6).map((item: any) => ({
        role: item?.sender === 'user' ? 'user' : 'assistant',
        text: String(item?.text || '').slice(0, 1500)
      }))
    : [];

  const getSmartFallback = (query: string) => {
    const matches = searchCatalog(query, 4);
    if (matches.length) {
      return {
        text: `आपके सवाल के अनुसार संबंधित व्यंजन: ${matches.map(d => d.name).join(', ')}। आप इनमें से किसी dish की विधि, सामग्री, समय या nutrition details पूछ सकते हैं।`,
        recommendedDishes: matches.map(d => d.id)
      };
    }
    return {
      text: `“${query}” के लिए वर्तमान recipe catalog में सीधा match नहीं मिला। किसी dish, ingredient, cooking step या Indian food category के बारे में specific सवाल पूछें।`,
      recommendedDishes: []
    };
  };

  if (aiClient && process.env.GEMINI_API_KEY) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          ...recentHistory.map((item: any) => ({
            role: item.role,
            parts: [{ text: item.text }]
          })),
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nCURRENT USER QUESTION: ${message}` }] }
        ]
      });

      const replyText = response.text || '';
      let recommendedDishes: string[] = [];
      const jsonMatch = replyText.match(/\{\s*"recommendedDishes"\s*:\s*\[(.*?)\]\s*\}/s);
      if (jsonMatch) {
        try {
          const parsed = JSON.parse(jsonMatch[0]);
          recommendedDishes = Array.isArray(parsed.recommendedDishes)
            ? parsed.recommendedDishes.filter((id: unknown) => catalogMatches.some(d => d.id === id))
            : [];
        } catch {
          recommendedDishes = [];
        }
      }

      const cleanText = replyText
        .replace(/\n?\{\s*"recommendedDishes"\s*:\s*\[.*?\]\s*\}\s*$/s, '')
        .trim();

      return res.json({ text: cleanText, recommendedDishes, source: 'gemini' });
    } catch (err: any) {
      console.warn('Gemini API call failed, using focused catalog fallback:', err?.message || err);
    }
  }

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

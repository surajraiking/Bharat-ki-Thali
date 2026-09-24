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
  const systemInstruction = `You are "AI Chef" inside Bharat Ki Thali 2.0 (भारत की थाली), a master expert on Indian regional cuisine, traditional recipes, authentic spices, and ayurvedic food wisdom.
Tone: Warm, encouraging, hospitable, knowledgeable, speaks fluent Hindi and English (natural Hinglish or pure Hindi/English depending on user).
Capabilities:
- Recommend dishes based on mood, time, weather, or dietary restrictions (weight loss, high protein, diabetic friendly, satvik, jain).
- Suggest dishes from user's leftover or available fridge ingredients.
- Explain cooking secrets, tempering (chhaunk/tadka) techniques, and ingredient substitutions (e.g., jaggery for sugar, sattu for protein, ragi for gluten-free).
- Recommend thali combinations and festival sweets.

When relevant, mention exact matching dishes from our catalog:
[Kanda Batata Poha, Moong Dal Chilla, Steamed Idli, Crispy Dosa, Upma, Methi Thepla, Besan Chilla, Khaman Dhokla, Palak Dal, Tadka Dal, Sambar, Rasam, Rajma Masala, Punjabi Chole, Kadhi Pakora, Dal Makhani, Palak Paneer, Paneer Bhurji, Baingan Bharta, Aloo Gobi, Surti Undhiyu, Bhindi Masala, Kashmiri Dum Aloo, Khichdi, Bajra Roti, Jowar Roti, Veg Pulao, Makhana Chaat, Sprouts Chaat, Gajar Halwa, Besan Laddu, Kheer, Masala Chaas, Cucumber Raita, Sattu Sharbat, Aam Panna, Litti Chokha, Dal Baati Churma, Misal Pav, Khandvi, Curd Rice, Avial, Bisi Bele Bath, Steamed Momos, Spongy Rosogolla, Mumbai Vada Pav, Amritsari Kulcha, Chettinad Chicken, Rogan Josh, Veg Dum Biryani].

Format response cleanly with appetizing descriptions, bullet points for steps or ingredients, and practical tips.`;

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

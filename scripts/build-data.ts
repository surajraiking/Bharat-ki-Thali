import fs from 'fs';
import path from 'path';
import { allDishes } from '../original_repo/dishes.ts';

const imageMap: Record<string, string> = {
  "poha": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
  "moong-dal-chilla": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80",
  "idli": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
  "dosa": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
  "upma": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80",
  "thepla": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
  "besan-chilla": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80",
  "oats-chilla": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80",
  "dhokla": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
  "ragi-dosa": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
  "methi-muthia": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
  "appam": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop&q=80",
  "palak-dal": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "tadka-dal": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "sambar": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
  "rasam": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "panchmel-dal": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "rajma": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80",
  "chole": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80",
  "kadhi-pakora": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "moong-dal-soup": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "tomato-rasam": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "dal-makhani": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "moringa-soup": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "palak-paneer": "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=800&auto=format&fit=crop&q=80",
  "paneer-bhurji": "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=800&auto=format&fit=crop&q=80",
  "baingan-bharta": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80",
  "lauki-chana-dal": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "aloo-gobi": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80",
  "bhindi-masala": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80",
  "matar-mushroom": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "dum-aloo": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80",
  "khichdi": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80",
  "bajra-roti": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
  "jowar-roti": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
  "vegetable-pulao": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
  "makhana-chaat": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
  "sprouts-chaat": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80",
  "chana-chaat": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80",
  "roasted-chana": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
  "gajar-halwa": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
  "besan-laddu": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
  "kheer": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
  "masala-chaas": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
  "cucumber-raita": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
  "sattu-sharbat": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
  "aam-panna": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
  "litti-chokha": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
  "dal-baati": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
  "misal-pav": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
  "khandvi": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
  "curd-rice": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
  "avial": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  "bisi-bele-bath": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
  "pongal": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80"
};

const stateMap: Record<string, string> = {
  "poha": "Maharashtra",
  "moong-dal-chilla": "Delhi",
  "idli": "Tamil Nadu",
  "dosa": "Karnataka",
  "upma": "Tamil Nadu",
  "thepla": "Gujarat",
  "besan-chilla": "Rajasthan",
  "oats-chilla": "Pan India",
  "dhokla": "Gujarat",
  "ragi-dosa": "Karnataka",
  "methi-muthia": "Gujarat",
  "appam": "Kerala",
  "palak-dal": "Uttar Pradesh",
  "tadka-dal": "Punjab",
  "sambar": "Tamil Nadu",
  "rasam": "Tamil Nadu",
  "panchmel-dal": "Rajasthan",
  "rajma": "Punjab",
  "chole": "Punjab",
  "kadhi-pakora": "Punjab",
  "moong-dal-soup": "Pan India",
  "tomato-rasam": "Andhra Pradesh",
  "dal-makhani": "Punjab",
  "moringa-soup": "Tamil Nadu",
  "palak-paneer": "Punjab",
  "paneer-bhurji": "Delhi",
  "baingan-bharta": "Punjab",
  "lauki-chana-dal": "Bihar",
  "aloo-gobi": "Uttar Pradesh",
  "bhindi-masala": "Uttar Pradesh",
  "matar-mushroom": "Delhi",
  "dum-aloo": "Kashmir",
  "khichdi": "Gujarat",
  "bajra-roti": "Rajasthan",
  "jowar-roti": "Maharashtra",
  "vegetable-pulao": "Uttar Pradesh",
  "makhana-chaat": "Bihar",
  "sprouts-chaat": "Maharashtra",
  "chana-chaat": "Delhi",
  "roasted-chana": "Madhya Pradesh",
  "gajar-halwa": "Punjab",
  "besan-laddu": "Rajasthan",
  "kheer": "Uttar Pradesh",
  "masala-chaas": "Gujarat",
  "cucumber-raita": "North India",
  "sattu-sharbat": "Bihar",
  "aam-panna": "Maharashtra",
  "litti-chokha": "Bihar",
  "dal-baati": "Rajasthan",
  "misal-pav": "Maharashtra",
  "khandvi": "Gujarat",
  "curd-rice": "Tamil Nadu",
  "avial": "Kerala",
  "bisi-bele-bath": "Karnataka",
  "pongal": "Tamil Nadu"
};

const cuisineMap: Record<string, string[]> = {
  "Maharashtra": ["Maharashtrian", "West Indian"],
  "Tamil Nadu": ["Tamil", "South Indian"],
  "Karnataka": ["Udupi", "South Indian"],
  "Kerala": ["Kerala", "South Indian"],
  "Andhra Pradesh": ["Andhra", "South Indian"],
  "Gujarat": ["Gujarati", "West Indian"],
  "Rajasthan": ["Rajasthani", "North Indian"],
  "Punjab": ["Punjabi", "North Indian"],
  "Uttar Pradesh": ["Awadhi", "North Indian"],
  "Bihar": ["Bihari", "East Indian"],
  "Delhi": ["Mughlai", "North Indian"],
  "Kashmir": ["Kashmiri", "North Indian"],
  "Pan India": ["Indian", "Healthy"]
};

// Festival mapping
const festivalMap: Record<string, string[]> = {
  "poha": ["Diwali", "Ganesh Chaturthi"],
  "idli": ["Pongal", "Diwali"],
  "dosa": ["Pongal"],
  "dhokla": ["Navratri", "Diwali"],
  "appam": ["Christmas", "Easter"],
  "sambar": ["Pongal", "Onam"],
  "rasam": ["Pongal"],
  "panchmel-dal": ["Diwali"],
  "rajma": ["Sunday Special", "Lohri"],
  "chole": ["Baisakhi", "Holi"],
  "kadhi-pakora": ["Holi"],
  "dal-makhani": ["Diwali", "Lohri"],
  "dum-aloo": ["Shivratri", "Navratri"],
  "khichdi": ["Makar Sankranti"],
  "bajra-roti": ["Makar Sankranti", "Lohri"],
  "gajar-halwa": ["Holi", "Diwali", "Lohri"],
  "besan-laddu": ["Diwali", "Ganesh Chaturthi", "Raksha Bandhan"],
  "kheer": ["Diwali", "Eid", "Janmashtami", "Raksha Bandhan"],
  "masala-chaas": ["Holi", "Summer"],
  "aam-panna": ["Holi", "Summer"],
  "litti-chokha": ["Chhath Puja", "Makar Sankranti"],
  "dal-baati": ["Diwali", "Holi"],
  "misal-pav": ["Ganesh Chaturthi"],
  "khandvi": ["Navratri", "Diwali"],
  "avial": ["Onam", "Vishu"],
  "pongal": ["Pongal", "Makar Sankranti"],
  "curd-rice": ["Ugadi", "Navratri"]
};

const transformed = allDishes.map((d: any) => {
  const state = stateMap[d.id] || "Pan India";
  const cuisine = cuisineMap[state] || ["Indian"];
  const image = imageMap[d.id] || "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80";

  let mealTypes = ["Lunch", "Dinner"];
  if (d.category === "Breakfast") mealTypes = ["Breakfast", "Snack"];
  else if (d.category === "Healthy Desserts") mealTypes = ["Dessert", "Snack"];
  else if (d.category === "Drinks & Raita") mealTypes = ["Snack", "Lunch", "Dinner"];
  else if (d.category === "Snacks & Chaat") mealTypes = ["Snack", "Breakfast"];

  let categories = [d.category];
  if (["poha", "upma", "dhokla", "misal-pav", "chana-chaat"].includes(d.id)) {
    categories.push("Street Food");
  }

  const steps = d.instructions.map((inst: string, idx: number) => ({
    id: `step-${idx + 1}`,
    stepNumber: idx + 1,
    title: `Step ${idx + 1}`,
    instruction: inst,
    durationMinutes: Math.max(2, Math.round(d.cookTimeMinutes / Math.max(1, d.instructions.length)))
  }));

  const ingredients = d.ingredients.map((ing: any, idx: number) => ({
    id: `ing-${idx + 1}`,
    name: ing.item,
    quantity: ing.quantity,
    unit: ing.unit,
    optional: false,
    notes: ing.notes
  }));

  // Allergens detection
  const allergens: string[] = [];
  const ingNames = d.ingredients.map((i: any) => i.item.toLowerCase()).join(' ');
  if (ingNames.includes('paneer') || ingNames.includes('dahi') || ingNames.includes('ghee') || ingNames.includes('doodh') || ingNames.includes('makhan') || ingNames.includes('malai')) {
    allergens.push('Dairy');
  }
  if (ingNames.includes('mungfali') || ingNames.includes('peanut')) {
    allergens.push('Peanuts');
  }
  if (ingNames.includes('kaju') || ingNames.includes('cashew') || ingNames.includes('badam') || ingNames.includes('almond')) {
    allergens.push('Tree Nuts');
  }
  if (ingNames.includes('maida') || ingNames.includes('gehu') || ingNames.includes('atta') || ingNames.includes('suji') || ingNames.includes('rava')) {
    allergens.push('Gluten');
  }
  if (ingNames.includes('sarson') || ingNames.includes('mustard')) {
    allergens.push('Mustard');
  }

  // Diet
  let diet = ['Vegetarian'];
  if (!allergens.includes('Dairy')) {
    diet.push('Vegan');
  }
  if (!ingNames.includes('pyaz') && !ingNames.includes('onion') && !ingNames.includes('lehsun') && !ingNames.includes('garlic') && !ingNames.includes('aloo') && !ingNames.includes('potato')) {
    diet.push('Jain');
  }

  const difficulty = d.cookTimeMinutes <= 15 ? 'Easy' : d.cookTimeMinutes <= 35 ? 'Medium' : 'Hard';
  const spiceLevel = d.category === 'Healthy Desserts' ? 'Mild' : d.tasteProfile?.toLowerCase().includes('teekh') || d.tasteProfile?.toLowerCase().includes('masaledar') ? 'Spicy' : 'Medium';

  return {
    id: d.id,
    name: d.name,
    nameHindi: d.hindiName,
    description: d.tagline,
    descriptionHindi: d.tasteProfile,
    image,
    region: d.region,
    state,
    cuisine,
    category: categories,
    mealTypes,
    diet,
    ingredients,
    steps,
    prepTimeMinutes: d.prepTimeMinutes,
    cookTimeMinutes: d.cookTimeMinutes,
    totalTimeMinutes: d.prepTimeMinutes + d.cookTimeMinutes,
    servings: d.baseServings,
    difficulty,
    spiceLevel,
    nutrition: {
      calories: d.calories,
      protein: d.macros.proteinGrams,
      carbohydrates: d.macros.carbsGrams,
      fat: d.macros.fatGrams,
      fiber: d.macros.fiberGrams
    },
    tips: [d.expertHealthyTip],
    precautions: d.nuksan.map((n: any) => `${n.title}: ${n.description}`),
    allergens,
    festival: festivalMap[d.id] || ["All Seasons"],
    tags: d.healthTags,
    popularity: Math.floor(Math.random() * 20) + 80,
    emoji: d.emoji,
    accentColor: d.accentColor,
    fayde: d.fayde,
    tasteProfile: d.tasteProfile,
    bestTimeToEat: d.bestTimeToEat,
    suitableFor: d.suitableFor
  };
});

// Additional Iconic Dishes to complete 65+ dishes coverage across all Indian states!
const extraDishes = [
  {
    id: "amritsari-kulcha",
    name: "Amritsari Aloo Kulcha",
    nameHindi: "अमृतसरी कुलचा",
    description: "Crispy layered tandoori flatbread stuffed with spiced potatoes and pomegranate seeds",
    descriptionHindi: "मसालेदार आलू और अनारदाने से भरा खस्ता तंदूरी कुलचा, मक्खन और छोले के साथ",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
    region: "North India",
    state: "Punjab",
    cuisine: ["Punjabi", "North Indian"],
    category: ["Breakfast", "Main Course", "Street Food"],
    mealTypes: ["Breakfast", "Lunch"],
    diet: ["Vegetarian"],
    ingredients: [
      { id: "ing-1", name: "Gehu ka atta / Maida", quantity: 2, unit: "cup" },
      { id: "ing-2", name: "Ubla Aloo (Boiled Potato)", quantity: 3, unit: "piece" },
      { id: "ing-3", name: "Anardana powder", quantity: 1, unit: "tsp" },
      { id: "ing-4", name: "Hari mirch & Adrak", quantity: 1, unit: "tbsp" },
      { id: "ing-5", name: "Makhan (Butter)", quantity: 2, unit: "tbsp" },
      { id: "ing-6", name: "Kasuri methi", quantity: 1, unit: "tsp" }
    ],
    steps: [
      { id: "step-1", stepNumber: 1, title: "Dough", instruction: "Atta aur dahi gundh kar 30 minute rest ke liye rakhein.", durationMinutes: 10 },
      { id: "step-2", stepNumber: 2, title: "Stuffing", instruction: "Aloo mash karein aur anardana, hari mirch, kasuri methi aur namak milayein.", durationMinutes: 5 },
      { id: "step-3", stepNumber: 3, title: "Baking", instruction: "Kulche ko bel kar tandoor ya tawa par ghee/butter lagakar crispy sekein.", durationMinutes: 10 }
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    totalTimeMinutes: 35,
    servings: 2,
    difficulty: "Medium",
    spiceLevel: "Medium",
    nutrition: { calories: 340, protein: 7, carbohydrates: 52, fat: 12, fiber: 4.5 },
    tips: ["Aate me thoda dahi dalne se kulcha andar se soft aur bahar se flaky banta hai."],
    precautions: ["Makhan zyada hone se calories badhti hain, moderate matra me lein."],
    allergens: ["Gluten", "Dairy"],
    festival: ["Baisakhi", "Diwali", "Lohri"],
    tags: ["High Fiber", "Energy Booster"],
    popularity: 94,
    emoji: "🫓",
    accentColor: "#f97316"
  },
  {
    id: "chettinad-chicken",
    name: "Chettinad Pepper Chicken",
    nameHindi: "चेत्तिनाड चिकन करी",
    description: "Fiery Tamil Nadu chicken curry with freshly roasted peppercorns, star anise and coconut",
    descriptionHindi: "काली मिर्च, स्टार अनीस और ताज़े नारियल के भुने मसालों में बनी तीखी चिकन करी",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80",
    region: "South India",
    state: "Tamil Nadu",
    cuisine: ["Chettinad", "South Indian"],
    category: ["Main Course"],
    mealTypes: ["Lunch", "Dinner"],
    diet: ["Non-Veg"],
    ingredients: [
      { id: "ing-1", name: "Chicken (Skinless)", quantity: 500, unit: "g" },
      { id: "ing-2", name: "Kali Mirch (Black Pepper)", quantity: 2, unit: "tbsp" },
      { id: "ing-3", name: "Nariyal (Grated Coconut)", quantity: 0.5, unit: "cup" },
      { id: "ing-4", name: "Curry Patta (Curry leaves)", quantity: 15, unit: "leaves" },
      { id: "ing-5", name: "Chhoti pyaz (Shallots)", quantity: 1, unit: "cup" },
      { id: "ing-6", name: "Saunf aur Dalchini", quantity: 1, unit: "tsp" }
    ],
    steps: [
      { id: "step-1", stepNumber: 1, title: "Roast Masala", instruction: "Kali mirch, saunf, dalchini aur nariyal ko dry roast karke paste banayein.", durationMinutes: 8 },
      { id: "step-2", stepNumber: 2, title: "Sauté", instruction: "Tel me curry patta aur shallots ko golden hone tak bhoonein.", durationMinutes: 7 },
      { id: "step-3", stepNumber: 3, title: "Simmer", instruction: "Chicken aur masala paste milakar dhak kar 20 minute pakayein.", durationMinutes: 20 }
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    servings: 4,
    difficulty: "Medium",
    spiceLevel: "Extra Spicy",
    nutrition: { calories: 310, protein: 32, carbohydrates: 8, fat: 16, fiber: 3 },
    tips: ["Taazi pisi kali mirch ka use karein, powder ka nahi."],
    precautions: ["Bahut teekha hota hai, acidity ki samasya me kali mirch kam karein."],
    allergens: [],
    festival: ["Pongal", "Family Feast"],
    tags: ["High Protein", "Immunity Booster"],
    popularity: 96,
    emoji: "🍗",
    accentColor: "#dc2626"
  },
  {
    id: "darjeeling-momos",
    name: "Steamed Vegetable Momos",
    nameHindi: "दार्जिलिंग मोमोज",
    description: "Delicate thin-wrapper steamed dumplings filled with finely chopped cabbage, carrots, ginger and scallions",
    descriptionHindi: "पत्तागोभी, गाजर और अदरक से भरे भाप में पके हुए स्वादिष्ट पहाड़ी मोमोज",
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800&auto=format&fit=crop&q=80",
    region: "Northeast India",
    state: "Sikkim",
    cuisine: ["Tibetan", "Northeast Indian"],
    category: ["Snacks & Chaat", "Street Food"],
    mealTypes: ["Snack", "Dinner"],
    diet: ["Vegetarian", "Vegan"],
    ingredients: [
      { id: "ing-1", name: "Pattagobi (Cabbage)", quantity: 2, unit: "cup" },
      { id: "ing-2", name: "Gajar (Carrot grated)", quantity: 1, unit: "cup" },
      { id: "ing-3", name: "Adrak-Lehsun (Ginger-Garlic)", quantity: 2, unit: "tbsp" },
      { id: "ing-4", name: "Maida / Whole wheat wrapper", quantity: 1.5, unit: "cup" },
      { id: "ing-5", name: "Hari Mirch & Pyaz ke patte", quantity: 2, unit: "tbsp" },
      { id: "ing-6", name: "Til ka tel (Sesame oil)", quantity: 1, unit: "tsp" }
    ],
    steps: [
      { id: "step-1", stepNumber: 1, title: "Wrapper", instruction: "Maida ko soft gundhein aur patli goliyan bel lein.", durationMinutes: 12 },
      { id: "step-2", stepNumber: 2, title: "Filling", instruction: "Barik kati sabziyon ka paani nichod kar adrak, namak aur til ka tel milayein.", durationMinutes: 8 },
      { id: "step-3", stepNumber: 3, title: "Steam", instruction: "Pleat karke momo steamer me 10-12 minute bhaap me pakayein.", durationMinutes: 12 }
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 12,
    totalTimeMinutes: 32,
    servings: 3,
    difficulty: "Medium",
    spiceLevel: "Medium",
    nutrition: { calories: 175, protein: 5.2, carbohydrates: 34, fat: 2.1, fiber: 4.8 },
    tips: ["Whole wheat flour ka wrapper use karne se momos aur bhi fiber-rich bante hain."],
    precautions: ["Teekhi lal mirch chutney acidity kar sakti hai, kam matra me lein."],
    allergens: ["Gluten"],
    festival: ["Losar", "Winter Fest"],
    tags: ["Low Calorie", "Less Oil", "High Fiber"],
    popularity: 98,
    emoji: "🥟",
    accentColor: "#10b981"
  },
  {
    id: "bengali-rasgulla",
    name: "Kolkata Spongy Rosogolla",
    nameHindi: "कोलकाता रसगुल्ला",
    description: "Melt-in-mouth spongy fresh chhena cottage cheese balls simmered in light fragrant cardamom syrup",
    descriptionHindi: "शुद्ध ताज़ा छेना से बने नरम रसगुल्ले, इलायची की हल्की मीठी चाशनी में डूबे हुए",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
    region: "East India",
    state: "West Bengal",
    cuisine: ["Bengali", "East Indian"],
    category: ["Healthy Desserts"],
    mealTypes: ["Dessert"],
    diet: ["Vegetarian"],
    ingredients: [
      { id: "ing-1", name: "Taaza Cow Milk (Chhena)", quantity: 1, unit: "L" },
      { id: "ing-2", name: "Nimbu ka Ras (Lemon Juice)", quantity: 2, unit: "tbsp" },
      { id: "ing-3", name: "Cheeni / Desi Khand", quantity: 1.5, unit: "cup" },
      { id: "ing-4", name: "Elaichi (Cardamom pods)", quantity: 4, unit: "piece" },
      { id: "ing-5", name: "Gulab Jal (Rose water)", quantity: 0.5, unit: "tsp" }
    ],
    steps: [
      { id: "step-1", stepNumber: 1, title: "Chhena", instruction: "Doodh ubaal kar nimbu ras dalein aur chhena alag karke saaf kapde me baandhein.", durationMinutes: 15 },
      { id: "step-2", stepNumber: 2, title: "Knead", instruction: "Chhena ko hath ki hatheli se 8-10 minute mal kar bilkul smooth karein aur gol balls banayein.", durationMinutes: 10 },
      { id: "step-3", stepNumber: 3, title: "Boil", instruction: "Patli chashni me tez aanch par 15 minute ubaalein jab tak spongy na ho jayein.", durationMinutes: 15 }
    ],
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    totalTimeMinutes: 40,
    servings: 6,
    difficulty: "Hard",
    spiceLevel: "Mild",
    nutrition: { calories: 125, protein: 4.8, carbohydrates: 22, fat: 2.2, fiber: 0 },
    tips: ["Gaye ka doodh use karein jisse rasgulla bilkul spongy aur soft bane."],
    precautions: ["Diabetic patients ko chashni nichod kar khana chahiye ya limit karein."],
    allergens: ["Dairy"],
    festival: ["Durga Puja", "Diwali", "Kali Puja"],
    tags: ["High Protein", "Calcium Rich"],
    popularity: 97,
    emoji: "⚪",
    accentColor: "#0284c7"
  },
  {
    id: "mumbai-vada-pav",
    name: "Mumbai Aloo Vada Pav",
    nameHindi: "मुंबई वड़ा पाव",
    description: "The iconic street burger of Mumbai — spiced potato fritter in fresh pav with fiery garlic chutney",
    descriptionHindi: "राई, कढ़ी पत्ता और हल्दी वाले आलू के वड़े, सूखे लहसुन की लाल चटनी और नरम पाव के साथ",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
    region: "West India",
    state: "Maharashtra",
    cuisine: ["Maharashtrian", "West Indian"],
    category: ["Snacks & Chaat", "Street Food", "Breakfast"],
    mealTypes: ["Snack", "Breakfast"],
    diet: ["Vegetarian"],
    ingredients: [
      { id: "ing-1", name: "Ubla Aloo", quantity: 4, unit: "piece" },
      { id: "ing-2", name: "Besan (Gram flour)", quantity: 1, unit: "cup" },
      { id: "ing-3", name: "Pav (Buns)", quantity: 4, unit: "piece" },
      { id: "ing-4", name: "Sookhi Lehsun Chutney", quantity: 3, unit: "tbsp" },
      { id: "ing-5", name: "Rai, Kadi patta & Haldi", quantity: 1, unit: "tbsp" },
      { id: "ing-6", name: "Hari Mirch & Adrak", quantity: 1, unit: "tbsp" }
    ],
    steps: [
      { id: "step-1", stepNumber: 1, title: "Potato Mix", instruction: "Rai aur kadi patte ke tadke me uble aloo, haldi aur namak milakar balls banayein.", durationMinutes: 10 },
      { id: "step-2", stepNumber: 2, title: "Batter & Fry", instruction: "Besan ke batter me dip karke air-fryer ya golden crisp fry karein.", durationMinutes: 10 },
      { id: "step-3", stepNumber: 3, title: "Assemble", instruction: "Pav ko beech se kaat kar teekhi lehsun chutney lagayein aur vada dabayein.", durationMinutes: 3 }
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    totalTimeMinutes: 27,
    servings: 4,
    difficulty: "Medium",
    spiceLevel: "Spicy",
    nutrition: { calories: 290, protein: 7.5, carbohydrates: 46, fat: 8.5, fiber: 4 },
    tips: ["Air fryer me 180°C par 12 minute bake karke 70% tel kam kiya ja sakta hai."],
    precautions: ["Roz deep-fried vada khane se bachein."],
    allergens: ["Gluten"],
    festival: ["Ganesh Chaturthi", "Monsoon Snack"],
    tags: ["Energy Booster"],
    popularity: 99,
    emoji: "🍔",
    accentColor: "#e11d48"
  },
  {
    id: "rajasthani-dal-baati-churma",
    name: "Royal Dal Baati Churma",
    nameHindi: "दाल बाटी चूरमा",
    description: "Hard wheat dumplings baked over coals, crushed and served with panchmel dal and sweet jaggery churma",
    descriptionHindi: "पारंपरिक पंचमेल दाल, शुद्ध घी में डूबी बाटी और गुड़ से बना स्वादिष्ट चूरमा",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
    region: "West India",
    state: "Rajasthan",
    cuisine: ["Rajasthani", "North Indian"],
    category: ["Main Course"],
    mealTypes: ["Lunch", "Dinner"],
    diet: ["Vegetarian"],
    ingredients: [
      { id: "ing-1", name: "Gehu ka mota atta", quantity: 2, unit: "cup" },
      { id: "ing-2", name: "Panchmel Dal (5 lentil mix)", quantity: 1, unit: "cup" },
      { id: "ing-3", name: "Desi Ghee", quantity: 4, unit: "tbsp" },
      { id: "ing-4", name: "Gud / Jaggery powder", quantity: 0.5, unit: "cup" },
      { id: "ing-5", name: "Ajwain aur Saunf", quantity: 1, unit: "tsp" },
      { id: "ing-6", name: "Hing, Jeera & Haldi", quantity: 1, unit: "tsp" }
    ],
    steps: [
      { id: "step-1", stepNumber: 1, title: "Baati Dough", instruction: "Mote aate me ajwain, ghee aur namak dalkar sakht gundhein aur gol baati banayein.", durationMinutes: 15 },
      { id: "step-2", stepNumber: 2, title: "Bake Baati", instruction: "Baati oven ya tandoor me 200°C par 25 minute sunehri crisp bake karein.", durationMinutes: 25 },
      { id: "step-3", stepNumber: 3, title: "Dal & Churma", instruction: "Panchmel dal me hing-jeera tadka lagayein aur 2 baati ko tod kar gud-ghee me churma banayein.", durationMinutes: 15 }
    ],
    prepTimeMinutes: 25,
    cookTimeMinutes: 30,
    totalTimeMinutes: 55,
    servings: 4,
    difficulty: "Hard",
    spiceLevel: "Medium",
    nutrition: { calories: 480, protein: 16, carbohydrates: 68, fat: 18, fiber: 9 },
    tips: ["Baati ko fry karne ki jagah traditional oven me dry bake karein aur thoda ghee upar se dalein."],
    precautions: ["Bhojan kafi rich hai, isliye dopahar ke samay khana behtar hai."],
    allergens: ["Gluten", "Dairy"],
    festival: ["Diwali", "Holi", "Teej"],
    tags: ["High Protein", "High Fiber"],
    popularity: 96,
    emoji: "🔴",
    accentColor: "#b91c1c"
  },
  {
    id: "kashmiri-rogan-josh",
    name: "Kashmiri Mutton Rogan Josh",
    nameHindi: "कश्मीरी रोगन जोश",
    description: "Aromatic slow-cooked tender meat curry infused with Kashmiri red chillies, fennel powder and dried ginger",
    descriptionHindi: "कश्मीरी मिर्च, सौंठ और सौंफ के सुगंधित मसालों में धीमी आंच पर पका मटन",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=800&auto=format&fit=crop&q=80",
    region: "North India",
    state: "Kashmir",
    cuisine: ["Kashmiri", "North Indian"],
    category: ["Main Course"],
    mealTypes: ["Dinner", "Lunch"],
    diet: ["Non-Veg"],
    ingredients: [
      { id: "ing-1", name: "Mutton pieces", quantity: 500, unit: "g" },
      { id: "ing-2", name: "Kashmiri Lal Mirch powder", quantity: 2, unit: "tbsp" },
      { id: "ing-3", name: "Saunf powder (Fennel)", quantity: 1.5, unit: "tbsp" },
      { id: "ing-4", name: "Sonth (Dry ginger powder)", quantity: 1, unit: "tsp" },
      { id: "ing-5", name: "Hing aur Chhoti Elaichi", quantity: 1, unit: "tsp" },
      { id: "ing-6", name: "Sarson ka tel", quantity: 3, unit: "tbsp" }
    ],
    steps: [
      { id: "step-1", stepNumber: 1, title: "Sear Meat", instruction: "Sarson tel dhuan uthne tak garm karein aur mutton ko golden sear karein.", durationMinutes: 10 },
      { id: "step-2", stepNumber: 2, title: "Kashmiri Color", instruction: "Lal mirch ko thode paani me ghol kar dalein jisse chamakdaar lal rang aaye.", durationMinutes: 5 },
      { id: "step-3", stepNumber: 3, title: "Slow Simmer", instruction: "Saunf, sonth aur hing dalkar dhimi aanch par 40 minute pakayein jab tak gosht naram na ho.", durationMinutes: 40 }
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 50,
    totalTimeMinutes: 65,
    servings: 4,
    difficulty: "Hard",
    spiceLevel: "Medium",
    nutrition: { calories: 360, protein: 34, carbohydrates: 4, fat: 22, fiber: 2 },
    tips: ["Traditional Wazwan style me pyaz-tamatar nahi balki saunf aur hing ka use hota hai."],
    precautions: ["Red meat me saturated fat zyada hota hai, portion control rakhein."],
    allergens: ["Mustard"],
    festival: ["Eid", "Wazwan Feast"],
    tags: ["High Protein", "Iron Rich"],
    popularity: 95,
    emoji: "🍖",
    accentColor: "#991b1b"
  },
  {
    id: "gujarati-undhiyu",
    name: "Traditional Surti Undhiyu",
    nameHindi: "पारंपरिक सूरती उंधियू",
    description: "Rich winter pot casserole of seasonal greens, purple yam, sweet potato, raw banana and fenugreek muthias",
    descriptionHindi: "सर्दियों की ताज़ा पापड़ी, रतालू, शकरकंद और मेथी मुठिया से बनी गुजराती खास डिश",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
    region: "West India",
    state: "Gujarat",
    cuisine: ["Gujarati", "West Indian"],
    category: ["Main Course"],
    mealTypes: ["Lunch", "Dinner"],
    diet: ["Vegetarian", "Vegan"],
    ingredients: [
      { id: "ing-1", name: "Surti Papdi (Flat beans)", quantity: 200, unit: "g" },
      { id: "ing-2", name: "Ratalu (Purple yam)", quantity: 150, unit: "g" },
      { id: "ing-3", name: "Kaccha Kela (Raw banana)", quantity: 1, unit: "piece" },
      { id: "ing-4", name: "Methi Muthiya", quantity: 8, unit: "piece" },
      { id: "ing-5", name: "Hari mirch, Lehsun & Nariyal", quantity: 3, unit: "tbsp" },
      { id: "ing-6", name: "Til aur Ajwain", quantity: 1, unit: "tbsp" }
    ],
    steps: [
      { id: "step-1", stepNumber: 1, title: "Prepare Greens", instruction: "Papdi ko cheel kar saaf karein aur ratalu-kele ke tukde karein.", durationMinutes: 15 },
      { id: "step-2", stepNumber: 2, title: "Green Masala", instruction: "Hara dhaniya, hari mirch, taaza nariyal aur til ka paste banayein.", durationMinutes: 10 },
      { id: "step-3", stepNumber: 3, title: "Dum Cook", instruction: "Kadhai me sabziyan, green masala aur muthiya layer karke dhimi aanch par 25 minute dum karein.", durationMinutes: 25 }
    ],
    prepTimeMinutes: 25,
    cookTimeMinutes: 30,
    totalTimeMinutes: 55,
    servings: 4,
    difficulty: "Hard",
    spiceLevel: "Medium",
    nutrition: { calories: 280, protein: 8, carbohydrates: 42, fat: 9, fiber: 11 },
    tips: ["Muthiya ko deep fry karne ke badle steam karne se dish bilkul healthy rehti hai."],
    precautions: ["Suran aur papdi ko dhang se pakayein jisse gale me kharash na ho."],
    allergens: [],
    festival: ["Makar Sankranti", "Uttarayan"],
    tags: ["High Fiber", "Gut Friendly", "Immunity Booster"],
    popularity: 94,
    emoji: "🥕",
    accentColor: "#15803d"
  },
  {
    id: "hyderabadi-biryani",
    name: "Hyderabadi Veg Dum Biryani",
    nameHindi: "हैदराबादी दम बिरयानी",
    description: "Royal fragrant basmati rice layered with saffron, mint, fried onions and marinated vegetables cooked under sealed dum",
    descriptionHindi: "केसर, पुदीना, भुने प्याज और मसालों में मैरीनेटेड सब्जियों से बनी शाही दम बिरयानी",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    region: "South India",
    state: "Andhra Pradesh",
    cuisine: ["Hyderabadi", "South Indian"],
    category: ["Main Course", "Rotis & Grains"],
    mealTypes: ["Lunch", "Dinner"],
    diet: ["Vegetarian"],
    ingredients: [
      { id: "ing-1", name: "Long grain Basmati Chawal", quantity: 2, unit: "cup" },
      { id: "ing-2", name: "Mix Sabziyan (Gajar, Beans, Paneer)", quantity: 2, unit: "cup" },
      { id: "ing-3", name: "Dahi (Yogurt)", quantity: 0.5, unit: "cup" },
      { id: "ing-4", name: "Birista (Golden onions)", quantity: 0.5, unit: "cup" },
      { id: "ing-5", name: "Kesar wala doodh", quantity: 3, unit: "tbsp" },
      { id: "ing-6", name: "Shahi Biryani Masala & Pudina", quantity: 2, unit: "tbsp" }
    ],
    steps: [
      { id: "step-1", stepNumber: 1, title: "Rice Boil", instruction: "Chawal ko khade masalon ke saath 70% tak ubaal lein aur chhan lein.", durationMinutes: 12 },
      { id: "step-2", stepNumber: 2, title: "Marinate Veggies", instruction: "Sabziyon aur paneer ko dahi, biryani masale aur pudine me 20 minute marinate karein.", durationMinutes: 20 },
      { id: "step-3", stepNumber: 3, title: "Dum Layering", instruction: "Handi me sabzi aur chawal ki layer lagayein, kesar-pudina dalein aur aate se seal karke 20 minute dum dein.", durationMinutes: 20 }
    ],
    prepTimeMinutes: 25,
    cookTimeMinutes: 30,
    totalTimeMinutes: 55,
    servings: 4,
    difficulty: "Medium",
    spiceLevel: "Medium",
    nutrition: { calories: 340, protein: 9.5, carbohydrates: 58, fat: 7.5, fiber: 5 },
    tips: ["Chawal ko overcook na karein; 70% par chhanne se daana khila-khila rehta hai."],
    precautions: ["Bhojan heavy ho sakta hai, saath me cucumber raita serve karein."],
    allergens: ["Dairy"],
    festival: ["Eid", "Diwali", "Family Feast"],
    tags: ["Balanced Meal"],
    popularity: 99,
    emoji: "🍚",
    accentColor: "#d97706"
  }
];

const finalDishes = [...transformed, ...extraDishes];

const outputContent = `import { Dish } from '../types';

export const allDishes: Dish[] = ${JSON.stringify(finalDishes, null, 2)};
`;

fs.mkdirSync(path.join(process.cwd(), 'src/data'), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), 'src/data/dishes.ts'), outputContent, 'utf8');
console.log('Successfully generated src/data/dishes.ts with total dishes:', finalDishes.length);

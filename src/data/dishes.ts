import { Dish } from '../types';

export const allDishes: Dish[] = [
  {
    "id": "poha",
    "name": "Kanda Batata Poha",
    "nameHindi": "कांदा पोहा",
    "description": "Aromatic flattened rice with mustard, turmeric, crunchy peanuts & lemon",
    "descriptionHindi": "Khatta-meetha, halka masaledar, crunchy mungfali aur kadi patte ka swad",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Maharashtra",
    "cuisine": [
      "Maharashtrian",
      "West Indian"
    ],
    "category": [
      "Breakfast",
      "Street Food"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Poha (Mota chivda)",
        "quantity": 1.5,
        "unit": "cup",
        "optional": false,
        "notes": "Wash & drain well"
      },
      {
        "id": "ing-2",
        "name": "Pyaz (Onion)",
        "quantity": 1,
        "unit": "medium",
        "optional": false,
        "notes": "Finely chopped"
      },
      {
        "id": "ing-3",
        "name": "Mungfali (Peanuts)",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false,
        "notes": "Roasted or raw"
      },
      {
        "id": "ing-4",
        "name": "Rai (Mustard seeds)",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Kadi Patta (Curry leaves)",
        "quantity": 8,
        "unit": "leaves",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Hari Mirch (Green chili)",
        "quantity": 2,
        "unit": "finely chopped",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Haldi (Turmeric)",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-8",
        "name": "Nimbu ka Ras (Lemon juice)",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-9",
        "name": "Hara Dhaniya (Fresh cilantro)",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-10",
        "name": "Sarson ka tel ya desi ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-11",
        "name": "Namak (Rock salt)",
        "quantity": 0.75,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Pohe ko chhalni me dalkar 1 baar paani se dho lein aur 5 minute nitharane ke liye rakh dein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Kadhai me 1 chammach tel garm karein aur mungfali ko crispy hone tak bhun lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Usi tel me rai, kadi patta aur hari mirch daal kar chatakne dein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Katta hua pyaz dalein aur halka gulabi hone tak bhoonein.",
        "durationMinutes": 2
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Haldi aur namak milayein, fir bhiga hua poha aur bhuni mungfali dalkar dhimi aanch par 2-3 minute milayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-6",
        "stepNumber": 6,
        "title": "Step 6",
        "instruction": "Aanch band karein, taaza nimbu ka ras aur hara dhaniya dalkar garma-garam serve karein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 180,
      "protein": 4.5,
      "carbohydrates": 32,
      "fat": 4.2,
      "fiber": 3.1
    },
    "tips": [
      "Pohe me uble hue hare matar, gajar ya moong sprouts milane se iska protein aur fiber do guna ho jata hai."
    ],
    "precautions": [
      "Sugar Spike Ka Dhyan: High glycemic index hota hai; diabetes ke mariz isme pyaz, matar aur sprouts zyada milayein.",
      "Tel aur Aloo ki Matra: Zyada tel ya tala hua aloo dalne se calories badh jati hain. Kam tel me banayein."
    ],
    "allergens": [
      "Dairy",
      "Peanuts",
      "Gluten",
      "Mustard"
    ],
    "festival": [
      "Diwali",
      "Ganesh Chaturthi"
    ],
    "tags": [
      "Weight Loss",
      "Easy Digestion",
      "Iron Rich",
      "Low Calorie"
    ],
    "popularity": 85,
    "emoji": "🥣",
    "accentColor": "#eab308",
    "fayde": [
      {
        "title": "Iron Ka Behtareen Srot",
        "description": "Chivda (flaked rice) banate waqt iron rollers se guzarta hai, jisse anemia dur karne me madad milti hai."
      },
      {
        "title": "Halka Aur Pachan Me Aasan",
        "description": "Pet par bilkul halka hota hai, acidity ya heaviness nahi karta."
      },
      {
        "title": "Probiotic Gun",
        "description": "Poha fermentation process se banta hai, jo gut microbiome ke liye faydemand hai."
      },
      {
        "title": "Sustained Energy",
        "description": "Healthy carbohydrates aur peanuts se healthy fats milte hain jo lambe samay tak bhukh nahi lagne dete."
      }
    ],
    "tasteProfile": "Khatta-meetha, halka masaledar, crunchy mungfali aur kadi patte ka swad",
    "bestTimeToEat": "Subah 7 se 9 baje ke beech nashte me.",
    "suitableFor": [
      "Bache",
      "Gym lovers",
      "Weight loss aspirants",
      "Buzurg"
    ]
  },
  {
    "id": "moong-dal-chilla",
    "name": "Moong Dal Paneer Chilla",
    "nameHindi": "मूँग दाल चिल्ला",
    "description": "Golden savory crepe made from yellow moong dal stuffed with grated paneer",
    "descriptionHindi": "Crispy kinare, mulayam center, jeera aur hing ki mast sugandh",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Delhi",
    "cuisine": [
      "Mughlai",
      "North Indian"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Peeli Moong Dal (Soaked 2-3 hrs)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Adrak (Ginger)",
        "quantity": 1,
        "unit": "inch piece",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Hari Mirch (Green chili)",
        "quantity": 1,
        "unit": "piece",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Hing (Asafoetida)",
        "quantity": 1,
        "unit": "pinch",
        "optional": false,
        "notes": "For digestion"
      },
      {
        "id": "ing-5",
        "name": "Jeera (Cumin seeds)",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Taaza Paneer (Grated)",
        "quantity": 50,
        "unit": "grams",
        "optional": false,
        "notes": "For stuffing"
      },
      {
        "id": "ing-7",
        "name": "Ghee ya Olive Oil",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-8",
        "name": "Namak (Sendha namak)",
        "quantity": 0.75,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Bhigoyi hui moong dal ko adrak aur hari mirch ke sath mixer me pees kar smooth batter bana lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Batter me jeera, hing, hara dhaniya aur namak mila kar 5 minute phant lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Non-stick tave ko halka sa ghee laga kar garm karein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Ek karchhi batter tave par dalkar gol dosa ki tarah failayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Dhimi aanch par dono taraf crispy hone tak sekein.",
        "durationMinutes": 2
      },
      {
        "id": "step-6",
        "stepNumber": 6,
        "title": "Step 6",
        "instruction": "Center me grated paneer aur chaat masala dalkar roll karein aur pudina chutney ke sath khayein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 165,
      "protein": 11.5,
      "carbohydrates": 18,
      "fat": 4.8,
      "fiber": 4.2
    },
    "tips": [
      "Dal peeste waqt 1 mutthi palak ya methi dal dein, isse green high-iron chilla ban jayega."
    ],
    "precautions": [
      "Kacha Batter Mat Khayein: Batter ko acche se pakayein, kachi dal se pet me gas ho sakti hai.",
      "Uric Acid Alert: Jinhe high uric acid ki samasya ho, wo rozana dal ka chilla lene se bachein."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Weight Loss",
      "Diabetic Friendly",
      "Easy Digestion"
    ],
    "popularity": 85,
    "emoji": "🥞",
    "accentColor": "#10b981",
    "fayde": [
      {
        "title": "Plant Protein Ka Powerhouse",
        "description": "1 chille me lagbhag 10-12g pure protein milta hai jo muscle repair aur weight loss me best hai."
      },
      {
        "title": "Diabetic Friendly",
        "description": "Low glycemic index hone ke karan blood sugar ko achanak badhne nahi deta."
      },
      {
        "title": "Aasan Pachan",
        "description": "Moong dal sabhi dalo me sabse aasan pachan wali maani jati hai."
      },
      {
        "title": "Skin & Hair Health",
        "description": "Folate, zinc aur B-vitamins baalo aur twacha ko chamakdar banate hain."
      }
    ],
    "tasteProfile": "Crispy kinare, mulayam center, jeera aur hing ki mast sugandh",
    "bestTimeToEat": "Subah ka nashta ya sham ka light dinner.",
    "suitableFor": [
      "Diabetics",
      "Gym goers",
      "Weight loss diet",
      "Vegetarians"
    ]
  },
  {
    "id": "oats-idli",
    "name": "Vegetable Oats Idli",
    "nameHindi": "ओट्स वेजीटेबल इडली",
    "description": "Steamed fluffy cakes of roasted oats, carrots & yogurt tempered with mustard",
    "descriptionHindi": "Soft, spongy, dahi ka halka khatta swad aur gajar-kaju ka crunch",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Rolled Oats (Dry roasted & powdered)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Suji / Rava (Roasted)",
        "quantity": 0.25,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Dahi (Low-fat curd)",
        "quantity": 0.75,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Gajar (Grated carrot)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Rai aur Kadi Patta",
        "quantity": 1,
        "unit": "tsp",
        "optional": false,
        "notes": "For tempering"
      },
      {
        "id": "ing-6",
        "name": "Namak",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Oats ko halka bhun kar mixer me mota pees lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Ek bowl me oats powder, thodi suji, dahi aur namak milakar 10 minute rest dein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Grated gajar aur rai-kadi patta ka tadka milayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Idli stand me batter dalkar 10-12 minute steam karein.",
        "durationMinutes": 2
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Nariyal ya tamatar ki chutney ke sath serve karein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 12,
    "totalTimeMinutes": 22,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 140,
      "protein": 5.2,
      "carbohydrates": 22,
      "fat": 3.1,
      "fiber": 4.8
    },
    "tips": [
      "Idli me roasted flaxseed (alsi) powder milane se Omega-3 fatty acids badh jate hain."
    ],
    "precautions": [
      "Gluten Sensitivity: Jinhe severe celiac disease ho, unhe certified gluten-free oats use karna chahiye.",
      "Baking Soda Ka Seemit Upyog: Zyada eno ya soda na dalein, dahi se hi natural khameer banayein."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Heart Healthy",
      "Weight Loss",
      "Diabetic Friendly",
      "Low Calorie"
    ],
    "popularity": 83,
    "emoji": "🥟",
    "accentColor": "#059669",
    "fayde": [
      {
        "title": "Cholesterol Kam Karta Hai",
        "description": "Oats me Beta-Glucan fiber hota hai jo kharab LDL cholesterol ko tezi se kam karta hai."
      },
      {
        "title": "Zero Oil Steamed Food",
        "description": "Bina tel ke bhaap me pakti hai, isliye dil ke marizo ke liye behtareen hai."
      },
      {
        "title": "High Soluble Fiber",
        "description": "Kabz (constipation) ko dur karta hai aur pet ghanto tak bhara rakhta hai."
      }
    ],
    "tasteProfile": "Soft, spongy, dahi ka halka khatta swad aur gajar-kaju ka crunch",
    "bestTimeToEat": "Subah 8 baje nashte me.",
    "suitableFor": [
      "Heart patients",
      "Weight watchers",
      "Senior citizens"
    ]
  },
  {
    "id": "ragi-dosa",
    "name": "Crispy Ragi Dosa (Finger Millet)",
    "nameHindi": "रागी डोसा",
    "description": "Ancient millet crispy crepe packed with bone-strengthening calcium",
    "descriptionHindi": "Nutty, earth-rich, bahar se bilkul karara aur andar se light",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Karnataka",
    "cuisine": [
      "Udupi",
      "South Indian"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Ragi Atta (Finger millet flour)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Chawal ka atta ya suji",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false,
        "notes": "For crispiness"
      },
      {
        "id": "ing-3",
        "name": "Chaas (Buttermilk)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Pyaz, Hari Mirch, Adrak",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false,
        "notes": "Barik kata hua"
      },
      {
        "id": "ing-5",
        "name": "Jeera aur Kadi Patta",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Namak",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Ragi atta, thoda rice flour, chaas, paani aur namak milakar patla batter banayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Katta pyaz, hari mirch, kadi patta aur jeera batter me milayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Garm tave par bahar se andar ki taraf patla failayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Dono taraf kurkura hone tak sekein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 8,
    "totalTimeMinutes": 18,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 155,
      "protein": 4.8,
      "carbohydrates": 28,
      "fat": 2.5,
      "fiber": 5.2
    },
    "tips": [
      "Ragi batter ko lohe ke tave par pakane se iron absorption aur badh jata hai."
    ],
    "precautions": [
      "Kidney Stone Rogi Savdhan: Ragi me oxalates hote hain, jinhe kidney stone ho wo doctor ki salah par lein.",
      "Sardi me Zyada Thanda: Ragi ki taseer thandi mani jati hai, thand ke mausam me sonth ya adrak dalkar khayein."
    ],
    "allergens": [
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Calcium Rich",
      "Gluten Free",
      "Diabetic Friendly",
      "Weight Loss"
    ],
    "popularity": 87,
    "emoji": "🥞",
    "accentColor": "#92400e",
    "fayde": [
      {
        "title": "Calcium Ka Khazana",
        "description": "Ragi me kisi bhi anya anaj se 3 guna zyada calcium hota hai, jo haddiyo aur daanto ko mazboot karta hai."
      },
      {
        "title": "Natural Weight Loss",
        "description": "Tryptophan amino acid bhukh ko control karta hai aur charbi galane me madad karta hai."
      },
      {
        "title": "Anemia Se Bachav",
        "description": "Ragi natural iron se bharpoor hai jo hemoglobin ko boost karta hai."
      }
    ],
    "tasteProfile": "Nutty, earth-rich, bahar se bilkul karara aur andar se light",
    "bestTimeToEat": "Nashta ya light lunch.",
    "suitableFor": [
      "Women",
      "Kids",
      "Athletes",
      "Diabetics"
    ]
  },
  {
    "id": "methi-thepla",
    "name": "Gujarati Methi Thepla",
    "nameHindi": "मेथी थेपला",
    "description": "Soft spiced whole wheat flatbread layered with fresh fenugreek leaves",
    "descriptionHindi": "Methi ki halki karwahat ke sath til, dahi aur ajwain ka lajawab sangam",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Methi ke Patte (Washed & chopped)",
        "quantity": 1.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Gehun ka Atta (Whole wheat flour)",
        "quantity": 1.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Besan (Gram flour)",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Dahi (Fresh curd)",
        "quantity": 3,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Safed Til (Sesame seeds)",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Ajwain (Carom seeds)",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Haldi, Lal Mirch, Dhaniya Powder",
        "quantity": 1,
        "unit": "tsp combined",
        "optional": false
      },
      {
        "id": "ing-8",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Atte me barik kati methi, besan, dahi, til, ajwain aur masale milayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Dahi ke sath mulayam atta goondein aur 10 minute dhak kar rakhein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Patli-patli rotiyan belein aur tave par halka ghee lagakar dono taraf sekein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Dahi ya nimbu ke aachar ke sath anand lein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 25,
    "servings": 3,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 130,
      "protein": 3.8,
      "carbohydrates": 21,
      "fat": 3.5,
      "fiber": 3.2
    },
    "tips": [
      "Atta goondte waqt paani ki jagah taaza dahi use karein, thepla 2 din tak behad soft rahega."
    ],
    "precautions": [
      "Excess Oil Se Parhez: Traditional tarike se zyada tel na lagayein, halka ghee use karein."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Easy Digestion",
      "Diabetic Friendly",
      "Gut Friendly"
    ],
    "popularity": 92,
    "emoji": "🫓",
    "accentColor": "#15803d",
    "fayde": [
      {
        "title": "Blood Sugar Control",
        "description": "Methi me 4-hydroxyisoleucine hota hai jo insulin secretion ko sudharta hai."
      },
      {
        "title": "Aasan Safar Snack",
        "description": "Bina kharab hue 2-3 din chalta hai aur pet kharab nahi hone deta."
      },
      {
        "title": "Joint Pain Me Rahat",
        "description": "Methi ke anti-inflammatory tatva jodo ke dard me labhdayak hain."
      }
    ],
    "tasteProfile": "Methi ki halki karwahat ke sath til, dahi aur ajwain ka lajawab sangam",
    "bestTimeToEat": "Nashte me ya safar me travel meal ke roop me.",
    "suitableFor": [
      "All family members",
      "Travelers",
      "Diabetics"
    ]
  },
  {
    "id": "vegetable-dalia",
    "name": "Multigrain Vegetable Dalia",
    "nameHindi": "वेजीटेबल दलिया",
    "description": "Wholesome cracked wheat porridge simmered with seasonal veggies and cumin",
    "descriptionHindi": "Garma-garam, jeera-hing ka tadka, sabziyo ka sweet aur crunchy swad",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Roasted Gehun Dalia",
        "quantity": 0.75,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Mix Veggies (Gajar, Matar, Beans)",
        "quantity": 1,
        "unit": "cup chopped",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Pyaz aur Tamatar",
        "quantity": 1,
        "unit": "each finely chopped",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Jeera aur Hing",
        "quantity": 1,
        "unit": "tsp combined",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Paani",
        "quantity": 2.5,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Namak aur Haldi",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Pressure cooker me 1 chammach ghee garm karein aur jeera-hing ka tadka lagayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Pyaz, tamatar aur sabhi katti sabziyan dalkar 2 minute bhoonein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Roasted dalia, haldi aur namak dalein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "2.5 cup paani dalkar cooker band karein aur 2-3 seeti lagwayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Steam nikalne par hara dhaniya dalkar parosein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 175,
      "protein": 6.2,
      "carbohydrates": 32,
      "fat": 2.8,
      "fiber": 5.5
    },
    "tips": [
      "Cooker me pakate waqt 2 chammach moong dal bhi mila dein, complete amino-acid protein ban jayega."
    ],
    "precautions": [
      "Gluten Intolerance: Gehun se banta hai isliye celiac allergy walo ke liye nahi hai."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Weight Loss",
      "Easy Digestion",
      "Heart Healthy",
      "Low Calorie"
    ],
    "popularity": 96,
    "emoji": "🍲",
    "accentColor": "#b45309",
    "fayde": [
      {
        "title": "Fiber Ka Badshah",
        "description": "Broken wheat ka high fiber digestion ko smooth banata hai aur pet saaf rakhta hai."
      },
      {
        "title": "Vajan Ghatane me No. 1",
        "description": "Slow digesting complex carbs hone se ghanto tak bhukh nahi lagti."
      },
      {
        "title": "Heart Protection",
        "description": "Arteries me cholesterol jama hone se rokta hai."
      }
    ],
    "tasteProfile": "Garma-garam, jeera-hing ka tadka, sabziyo ka sweet aur crunchy swad",
    "bestTimeToEat": "Nashta ya halka dinner.",
    "suitableFor": [
      "Weight loss journey",
      "Buzurg",
      "Kids"
    ]
  },
  {
    "id": "sprouts-chaat",
    "name": "Sprouted Moong & Chana Chaat",
    "nameHindi": "अंकुरित मूँग चाट",
    "description": "Live enzyme powerhouse of sprouted lentils tossed with crunchy cucumber & pomegranate",
    "descriptionHindi": "Chatpata, crunchy, nimbu ka teekha-khatta ras aur anar ke meethe daane",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80",
    "region": "Pan India",
    "state": "Maharashtra",
    "cuisine": [
      "Maharashtrian",
      "West Indian"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Ankurit Green Moong",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Ankurit Kala Chana",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Kheera (Cucumber)",
        "quantity": 0.5,
        "unit": "cup finely chopped",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Tamatar aur Pyaz",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Anar ke Daane (Pomegranate)",
        "quantity": 0.25,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Bhuna Jeera Powder & Chaat Masala",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Nimbu ka Ras",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Moong aur chana sprouts ko 2 minute ubalte paani me steam kar lein taaki bacteria khatam ho jayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Ek bade bowl me sprouts, kheera, tamatar, pyaz aur anar milayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Sendha namak, bhuna jeera powder, kaali mirch aur chaat masala dalein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Taaza nimbu nichodein aur hara dhaniya dalkar mix karein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 2,
    "totalTimeMinutes": 12,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 145,
      "protein": 9.8,
      "carbohydrates": 24,
      "fat": 1.5,
      "fiber": 6.2
    },
    "tips": [
      "Sprouts ko hamesha halka sa bhaap lagakar khayein, isse digestion aasan hota hai aur nutrition barqarar rehta hai."
    ],
    "precautions": [
      "Kache Sprouts Se Gas: Jinhe kamzor pachan ho wo 2 minute halka ubaal (steam) kar khayein, kacha na lein."
    ],
    "allergens": [],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Immunity Booster",
      "Weight Loss",
      "Low Calorie"
    ],
    "popularity": 93,
    "emoji": "🥗",
    "accentColor": "#16a34a",
    "fayde": [
      {
        "title": "Live Enzymes aur Vitamin C",
        "description": "Sprouting se vitamins ki matra 800% tak badh jati hai, immunity ko zabardast taqat milti hai."
      },
      {
        "title": "Pure Muscle Food",
        "description": "Zero fat aur maximum bio-available protein body building aur fat burn me madadgar hai."
      },
      {
        "title": "Glow Aata Hai Face Par",
        "description": "Toxins ko bahar nikal kar chehre par natural glow lata hai."
      }
    ],
    "tasteProfile": "Chatpata, crunchy, nimbu ka teekha-khatta ras aur anar ke meethe daane",
    "bestTimeToEat": "Subah nashte me ya workout ke 30 min baad.",
    "suitableFor": [
      "Fitness lovers",
      "Diabetics",
      "Heart patients"
    ]
  },
  {
    "id": "sattu-sharbat",
    "name": "Desi Sattu Energy Drink / Sharbat",
    "nameHindi": "सत्तू नमकीन शरबत",
    "description": "Traditional roasted gram superdrink hailed as India's natural protein shake",
    "descriptionHindi": "Thanda-thanda, bhuna jeera, kala namak aur taaza pudine ka refreshing swad",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
    "region": "East India",
    "state": "Bihar",
    "cuisine": [
      "Bihari",
      "East Indian"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Chana Sattu Powder",
        "quantity": 3,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Thanda Paani",
        "quantity": 1,
        "unit": "glass (250ml)",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Bhuna Jeera Powder",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Kala Namak (Black salt)",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Nimbu ka Ras",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Pudina ke Patte aur Barik Pyaz",
        "quantity": 1,
        "unit": "tbsp optional",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Ek glass me 3 chammach chana sattu dalein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Thoda sa paani dalkar chammach se ghol lein taaki lumps na banein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Bacha hua thanda paani dalein, sath me bhuna jeera, kala namak aur nimbu ka ras milayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Acche se hilayein, upar se pudina ke patte dalein aur gatak lein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "totalTimeMinutes": 5,
    "servings": 1,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 135,
      "protein": 9,
      "carbohydrates": 20,
      "fat": 2.1,
      "fiber": 4.5
    },
    "tips": [
      "Workout ke baad market ke mehnge whey protein ki jagah 4 chammach sattu paani me ghol kar peene se muscle recovery shandar hoti hai."
    ],
    "precautions": [
      "Raat me Na Piyein: Sattu thanda aur bhari hota hai, ise dopahar ke baad ya raat me lene se gas ho sakti hai.",
      "Stones ki Samasya: Jinhe gall bladder stone ho wo adhik matra me na lein."
    ],
    "allergens": [],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Easy Digestion",
      "Weight Loss",
      "Gut Friendly"
    ],
    "popularity": 81,
    "emoji": "🥤",
    "accentColor": "#d97706",
    "fayde": [
      {
        "title": "Kudrati Protein Shake",
        "description": "Bhune hue chane ka sattu bina kisi chemical ke 100% natural plant protein deta hai."
      },
      {
        "title": "Loo aur Garmi Se Bachav",
        "description": "Ayurveda me ise body cooler mana gaya hai jo summer me dehydration aur heat stroke se bachata hai."
      },
      {
        "title": "Low Glycemic Index",
        "description": "Diabetes ke rogiyo ke liye subah ka sabse surakshit drink hai."
      }
    ],
    "tasteProfile": "Thanda-thanda, bhuna jeera, kala namak aur taaza pudine ka refreshing swad",
    "bestTimeToEat": "Subah khali pet ya dhoop me nikalne se pehle.",
    "suitableFor": [
      "Hard workers",
      "Gym athletes",
      "Summers"
    ]
  },
  {
    "id": "vegetable-upma",
    "name": "Vegetable Suji Upma",
    "nameHindi": "वेजीटेबल उपमा",
    "description": "Warm semolina cooked with roasted cashews, ginger, curry leaves & crisp veggies",
    "descriptionHindi": "Ghee ki khushboo, rai-kadi patta ka tadka aur kaju ka royal crunch",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Suji / Rava",
        "quantity": 1,
        "unit": "cup dry roasted",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Mix Veggies (Matar, Gajar, Beans)",
        "quantity": 0.75,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Rai, Urad Dal, Chana Dal",
        "quantity": 1,
        "unit": "tsp for tadka",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Adrak aur Kadi Patta",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Desi Ghee ya Tel",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Ubalta Paani",
        "quantity": 2.5,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Namak aur Nimbu Ras",
        "quantity": 1,
        "unit": "to taste",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Suji ko halki aanch par khushboo aane tak dry roast karein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Kadhai me 1 chammach ghee dalein, rai, urad dal aur kadi patta tadkayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Adrak, hari mirch aur sabziyan dalkar 3-4 minute pakayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "2.5 cup garam paani aur namak dalein aur ubaal aane dein.",
        "durationMinutes": 2
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Bhuni hui suji dhire-dhire dalein aur lagatar hilayein taaki gaanth na pade.",
        "durationMinutes": 2
      },
      {
        "id": "step-6",
        "stepNumber": 6,
        "title": "Step 6",
        "instruction": "2 minute dhak kar dum dein, nimbu nichod kar serve karein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 12,
    "totalTimeMinutes": 22,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 190,
      "protein": 5,
      "carbohydrates": 34,
      "fat": 4.2,
      "fiber": 3.5
    },
    "tips": [
      "Upma me suji se double matra me sabziyan dalein taaki glycemic load kam ho sake."
    ],
    "precautions": [
      "High Refined Wheat Index: Diabetes ke mariz suji ki jagah oats ya dalia upma ko tarjeeh dein."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Weight Loss",
      "Easy Digestion",
      "Low Calorie"
    ],
    "popularity": 93,
    "emoji": "🍲",
    "accentColor": "#eab308",
    "fayde": [
      {
        "title": "Taza Energy Provider",
        "description": "Suji aasan pachan aur quick energy pradan karti hai."
      },
      {
        "title": "Sabziyo Ka Poshan",
        "description": "Gajar, matar, beans milane se vitamins aur dietary fiber bhari matra me milte hain."
      }
    ],
    "tasteProfile": "Ghee ki khushboo, rai-kadi patta ka tadka aur kaju ka royal crunch",
    "bestTimeToEat": "Subah nashte me.",
    "suitableFor": [
      "All age groups"
    ]
  },
  {
    "id": "besan-cheela",
    "name": "Spicy Besan Chilla with Ajwain",
    "nameHindi": "बेसन का चिल्ला",
    "description": "Quick protein-rich gram flour pancake spiked with carom seeds & fresh herbs",
    "descriptionHindi": "Chatpata, ajwain ki garmi aur crispy kinaras with soft tender bite",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Besan (Gram flour)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Pyaz aur Tamatar",
        "quantity": 0.5,
        "unit": "cup barik kata",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Ajwain (Carom seeds)",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Hing (Asafoetida)",
        "quantity": 1,
        "unit": "pinch",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Hari Mirch aur Dhaniya",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Paani",
        "quantity": 0.75,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Namak aur Haldi",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Besan me ajwain, hing, haldi, namak aur paani dalkar smooth batter banayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Katta pyaz, tamatar, hari mirch aur dhaniya batter me milayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Non-stick tave par thoda sa sarson ka tel lagayein aur batter failayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Dono taraf se sunhera aur crispy hone tak sekein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 8,
    "totalTimeMinutes": 16,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 160,
      "protein": 8.5,
      "carbohydrates": 22,
      "fat": 4.5,
      "fiber": 4
    },
    "tips": [
      "Batter me 2 chammach dahi milane se chilla behad soft banta hai aur protein badh jata hai."
    ],
    "precautions": [
      "Bhaari Pet: Bina ajwain ya hing ke khane par kuch logo ko pet phoolne (bloating) ki shikayat ho sakti hai."
    ],
    "allergens": [],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Gluten Free",
      "Diabetic Friendly",
      "Weight Loss"
    ],
    "popularity": 92,
    "emoji": "🥞",
    "accentColor": "#f59e0b",
    "fayde": [
      {
        "title": "Gluten Free Protein",
        "description": "Gehun ki allergy walo ke liye best breakfast option hai."
      },
      {
        "title": "Ajwain Se Gas Mukti",
        "description": "Ajwain aur hing dalne se besan pet me bilkul bhaari nahi hota."
      }
    ],
    "tasteProfile": "Chatpata, ajwain ki garmi aur crispy kinaras with soft tender bite",
    "bestTimeToEat": "Nashta ya evening tea time.",
    "suitableFor": [
      "Weight loss",
      "Students",
      "Quick meals"
    ]
  },
  {
    "id": "palak-paratha",
    "name": "Healthy Spinach Whole Wheat Paratha",
    "nameHindi": "पालक पराठा",
    "description": "Vibrant green whole wheat flatbread kneaded with fresh blanched spinach puree",
    "descriptionHindi": "Mulayam, fresh palak ka swad, lasan aur hari mirch ki dheemi khushboo",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Palak Puree",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Gehun ka Atta",
        "quantity": 1.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Lasan aur Adrak Paste",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Ajwain aur Jeera Powder",
        "quantity": 0.5,
        "unit": "tsp each",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Namak",
        "quantity": 0.75,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Palak ko 1 minute garam paani me daal kar thande paani me dalein aur mixer me pees lein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Gehun ke atte me palak puree, lasan paste, ajwain aur namak milakar aata goondein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Garam tave par dono taraf se acche se sekein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Dahi ya hari chutney ke sath garma garam parosein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 170,
      "protein": 5.5,
      "carbohydrates": 28,
      "fat": 4.2,
      "fiber": 4.8
    },
    "tips": [
      "Palak puree me 2 kali lasan peesne se iron ka absorption body me 40% badh jata hai."
    ],
    "precautions": [
      "Excess Ghee Avoid Karein: Parathe ko talne ki jagah sukha sek kar upar se aadha chammach ghee lagayein."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Iron Rich",
      "Immunity Booster",
      "Gut Friendly"
    ],
    "popularity": 97,
    "emoji": "🫓",
    "accentColor": "#15803d",
    "fayde": [
      {
        "title": "Iron aur Folate Rich",
        "description": "Khoon ki kami dur karne me sabse asardar nashta hai."
      },
      {
        "title": "Eye Sight Booster",
        "description": "Lutein aur Zeaxanthin aankho ki roshni ko swasth rakhte hain."
      }
    ],
    "tasteProfile": "Mulayam, fresh palak ka swad, lasan aur hari mirch ki dheemi khushboo",
    "bestTimeToEat": "Subah ka nashta.",
    "suitableFor": [
      "Children",
      "Expecting mothers",
      "Anemic patients"
    ]
  },
  {
    "id": "sabudana-khichdi-healthy",
    "name": "Low-Oil Sabudana & Peanut Khichdi",
    "nameHindi": "साबूदाना खिचड़ी",
    "description": "Pearl tapioca gently cooked with roasted crushed peanuts, curry leaves & cumin",
    "descriptionHindi": "Moti jaise khile hue daane, jeera aur sendha namak ka pavitra swad",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Sabudana (Bhigoya hua)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Bhuni Mungfali (Crushed)",
        "quantity": 3,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Ubla Aloo (Diced)",
        "quantity": 0.5,
        "unit": "medium",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Jeera, Kadi Patta, Hari Mirch",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Sendha Namak & Nimbu Ras",
        "quantity": 1,
        "unit": "to taste",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Sabudana ko 4-5 ghante kam paani me bhigoyen taaki daane khile rahein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Ghee me jeera, kadi patta aur hari mirch tadkayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Ubla aloo aur crushed mungfali dalkar 1 minute bhoonein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Sabudana aur sendha namak milakar dhimi aanch par daane moti jaise chamakne tak 3-4 minute pakayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Nimbu ras aur dhaniya dalkar serve karein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 220,
      "protein": 4.2,
      "carbohydrates": 42,
      "fat": 4.5,
      "fiber": 2.1
    },
    "tips": [
      "Bhigote waqt paani sabudana ke level se sirf 1 centimeter upar rakhein, khichdi kabhi chipkegi nahi."
    ],
    "precautions": [
      "High Carbohydrate Alert: Diabetics ko sabudana kam khana chahiye kyunki ye blood sugar tezi se badhata hai."
    ],
    "allergens": [
      "Dairy",
      "Peanuts",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Easy Digestion",
      "Gluten Free"
    ],
    "popularity": 94,
    "emoji": "🥣",
    "accentColor": "#0284c7",
    "fayde": [
      {
        "title": "Quick Energy Booster",
        "description": "Vrat ya weakness me turant sharir ko taqat deta hai."
      },
      {
        "title": "Cooling Effect on Stomach",
        "description": "Pet me jalan ya ulcers me rahat deta hai."
      }
    ],
    "tasteProfile": "Moti jaise khile hue daane, jeera aur sendha namak ka pavitra swad",
    "bestTimeToEat": "Vrat me ya energetic morning nashte me.",
    "suitableFor": [
      "Fasting",
      "Gluten sensitive people"
    ]
  },
  {
    "id": "moong-dal-khichdi",
    "name": "Ayurvedic Moong Dal Khichdi",
    "nameHindi": "मूँग दाल खिचड़ी",
    "description": "Ancient Ayurvedic one-pot detox meal of yellow lentils, rice, pure ghee & cumin",
    "descriptionHindi": "Garma-garam, behad comforting, desi ghee aur jeera-hing ka pavitra swad",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "Pan India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Dal & Soups"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Peeli Moong Dal (Washed)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Chawal (Basmati tukda ya Brown rice)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Jeera (Cumin seeds)",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Hing (Asafoetida)",
        "quantity": 1,
        "unit": "pinch",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Haldi Powder",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Adrak (Grated)",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-8",
        "name": "Paani",
        "quantity": 3.5,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-9",
        "name": "Sendha Namak",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Moong dal aur chawal ko dho kar 20 minute ke liye bhigo dein.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Pressure cooker me 1 chammach desi ghee garm karein aur jeera, hing aur grated adrak ka tadka lagayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Bhigoyi hui dal aur chawal dalein, sath me haldi aur namak milayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "3.5 cup paani dalkar cooker band karein aur medium aanch par 3-4 seeti lagwayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Dahi aur papad ke sath garma-garam parosein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 2,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 210,
      "protein": 8.5,
      "carbohydrates": 36,
      "fat": 3.5,
      "fiber": 5
    },
    "tips": [
      "Khichdi me gaajar, matar aur lauki ke tukde milane se ye aur zyada nutritious ban jati hai."
    ],
    "precautions": [
      "Diabetics Ke Liye Savdhani: Safed chawal ki jagah brown rice ya dalia use karein taaki blood sugar control me rahe."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Easy Digestion",
      "Weight Loss",
      "Gut Friendly",
      "Low Calorie"
    ],
    "popularity": 94,
    "emoji": "🍲",
    "accentColor": "#10b981",
    "fayde": [
      {
        "title": "Pet Ke Liye Amrit",
        "description": "Ayurveda ke anusaar Tridosha (Vata, Pitta, Kapha) ko balance karta hai. Bimaari ya pet kharab hone par sabse pehla aahar."
      },
      {
        "title": "Complete Protein Profile",
        "description": "Chawal aur moong dal ka anupaat milkar sharir ko sabhi essential amino acids deta hai."
      },
      {
        "title": "Natural Detoxification",
        "description": "Digestive system ko rest deta hai aur sharir se toxins bahar nikalta hai."
      }
    ],
    "tasteProfile": "Garma-garam, behad comforting, desi ghee aur jeera-hing ka pavitra swad",
    "bestTimeToEat": "Raat ka dinner (light digestion) ya bimaari ke baad.",
    "suitableFor": [
      "Patients",
      "Elderly",
      "Infants",
      "Detox dieters"
    ]
  },
  {
    "id": "palak-paneer-healthy",
    "name": "Home-Style Low Fat Palak Paneer",
    "nameHindi": "पालक पनीर",
    "description": "Silky iron-rich spinach gravy infused with tender cottage cheese cubes & garlic",
    "descriptionHindi": "Makkhan jaisa smooth, palak ki taazgi aur lasan-kasuri methi ki shaandar khushboo",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Palak (Spinach)",
        "quantity": 400,
        "unit": "grams",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Low-Fat Taaza Paneer",
        "quantity": 150,
        "unit": "grams diced",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Pyaz aur Tamatar",
        "quantity": 1,
        "unit": "each",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Lasan (Garlic cloves)",
        "quantity": 6,
        "unit": "chopped",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Adrak aur Hari Mirch",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Kasuri Methi",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Sarson ka Tel / Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-8",
        "name": "Garam Masala & Namak",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Palak ko 2 minute ubalte paani me dalein fir turant baraf wale paani me dalein (isse hara rang barkarar rehta hai).",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Mixer me palak ko adrak-hari mirch ke sath pees kar smooth puree banayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Kadhai me 1 chammach tel garm karein, jeera aur kata lasan bhoonein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Pyaz aur tamatar paste dalkar masale bhun lein.",
        "durationMinutes": 3
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Palak puree aur paneer ke tukde dalein, 5 minute dhimi aanch par pakayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-6",
        "stepNumber": 6,
        "title": "Step 6",
        "instruction": "Upar se kasuri methi crush karke dalein aur serve karein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "servings": 3,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 195,
      "protein": 14,
      "carbohydrates": 9,
      "fat": 11.5,
      "fiber": 4.8
    },
    "tips": [
      "Palak blanch karte waqt 1 pinch cheeni ya soda dalne ki zaroorat nahi hai, ice-water shock se green color bilkul fresh rehta hai."
    ],
    "precautions": [
      "Heavy Cream Mat Dalein: Restaurant style me malai ya cream dali jati hai, home version me low-fat milk ya dahi use karein.",
      "Kidney Stone Rogi Parhez Karein: Palak me oxalates hote hain, jinhe pathri ki shikayat ho wo kam matra me lein."
    ],
    "allergens": [
      "Dairy",
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Iron Rich",
      "Diabetic Friendly",
      "Calcium Rich"
    ],
    "popularity": 93,
    "emoji": "🥘",
    "accentColor": "#15803d",
    "fayde": [
      {
        "title": "Iron aur Calcium Ka Double Dhamaka",
        "description": "Palak se iron aur paneer se calcium milta hai, jo haddiyo aur khoon dono ko taqat deta hai."
      },
      {
        "title": "Low Carb Diet Ke Liye Perfect",
        "description": "Keto aur low-carb diet walo ke liye best sabzi hai jo blood sugar nahi badhati."
      },
      {
        "title": "Muscles Building",
        "description": "Vegetarians ke liye pure natural protein ka bada srot hai."
      }
    ],
    "tasteProfile": "Makkhan jaisa smooth, palak ki taazgi aur lasan-kasuri methi ki shaandar khushboo",
    "bestTimeToEat": "Lunch ya dinner me multigrain roti ke sath.",
    "suitableFor": [
      "Gym goers",
      "Diabetics",
      "Anemic patients"
    ]
  },
  {
    "id": "rajma-masala",
    "name": "Punjabi Slow-Cooked Rajma",
    "nameHindi": "राजमा मसाला",
    "description": "Melt-in-mouth red kidney beans simmered in spiced tomato onion ginger gravy",
    "descriptionHindi": "Ghada, masaledar, tamatar ki khatas aur khade masalo ka rich flavor",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Chitra Rajma (Soaked overnight)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Tamatar Puree",
        "quantity": 1.5,
        "unit": "cup fresh",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Pyaz (Finely chopped)",
        "quantity": 2,
        "unit": "medium",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Adrak-Lasan Paste",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Badi Elaichi, Dalchini, Tejpatta",
        "quantity": 1,
        "unit": "piece each",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Dhaniya, Jeera, Haldi, Lal Mirch",
        "quantity": 2,
        "unit": "tsp combined",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Hing aur Kasuri Methi",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-8",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Rajma ko raat bhar kam se kam 8 ghante paani me bhigoyen.",
        "durationMinutes": 5
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Khade masalo aur namak ke sath cooker me 5-6 seeti aane tak bilkul soft ubaal lein.",
        "durationMinutes": 5
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Kadhai me ghee garm karein, hing, pyaz aur adrak-lasan paste golden hone tak bhoonein.",
        "durationMinutes": 5
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Tamatar puree aur pise masale dalkar tel chhutne tak pakayein.",
        "durationMinutes": 5
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Ubla hua rajma paani samet dalein aur 10-15 minute dhimi aanch par mash karte hue ubaalein.",
        "durationMinutes": 5
      },
      {
        "id": "step-6",
        "stepNumber": 6,
        "title": "Step 6",
        "instruction": "Brown rice ya roti ke sath garma-garam parosein.",
        "durationMinutes": 5
      }
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 30,
    "totalTimeMinutes": 50,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 230,
      "protein": 13.5,
      "carbohydrates": 36,
      "fat": 3.8,
      "fiber": 9.5
    },
    "tips": [
      "Rajma ubaalte waqt 1 tukda adrak aur hing zaroor dalein, isse gas banane wale tatva nasht ho jate hain."
    ],
    "precautions": [
      "Pachan me Bhari: Rajma bina acchi tarah galaye khane se pet dard ya gas ho sakti hai. 8-10 ghante bhigona anivarya hai.",
      "Raat me Late Mat Khayein: Dopahar ke lunch me khana sabse best hota hai."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Heart Healthy",
      "Iron Rich"
    ],
    "popularity": 98,
    "emoji": "🫘",
    "accentColor": "#991b1b",
    "fayde": [
      {
        "title": "Super Plant Protein & Fiber",
        "description": "Rajma me soluble fiber bhari matra me hota hai jo cholesterol aur dil ki bimariyo se bachata hai."
      },
      {
        "title": "Long Lasting Energy",
        "description": "Slow digesting carbohydrates hone se sugar level stable rehta hai."
      },
      {
        "title": "Magnesium & Potassium Rich",
        "description": "Blood pressure ko naturally maintain karta hai."
      }
    ],
    "tasteProfile": "Ghada, masaledar, tamatar ki khatas aur khade masalo ka rich flavor",
    "bestTimeToEat": "Dopahar ka lunch.",
    "suitableFor": [
      "Youth",
      "Athletes",
      "Weight gain/strength diet"
    ]
  },
  {
    "id": "dal-tadka",
    "name": "Yellow Toor Dal Tadka with Hing & Jeera",
    "nameHindi": "दाल तड़का",
    "description": "Golden pigeon pea lentils infused with sizzling garlic, cumin, asafoetida & ghee",
    "descriptionHindi": "Lasan ka karara tadka, desi ghee ki sondhi khushboo aur soothing dal",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Dal & Soups"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Toor Dal (Arhar)",
        "quantity": 1,
        "unit": "cup washed",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Tamatar aur Hari Mirch",
        "quantity": 1,
        "unit": "each chopped",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Haldi aur Namak",
        "quantity": 1,
        "unit": "tsp each",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Lasan (Chopped)",
        "quantity": 5,
        "unit": "cloves",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Jeera aur Hing",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Hara Dhaniya",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Toor dal ko 20 minute bhigoyen aur haldi-namak ke sath cooker me 3 seeti lagakar ubaalein.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Chhote pan me 1 chammach desi ghee garm karein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Jeera, hing, barik kata lasan aur sukhi lal mirch dalein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Lasan gulabi hote hi dal ke upar chhan-chhanata tadka dalein aur dhoongar/dhak dein.",
        "durationMinutes": 4
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Hara dhaniya dalkar roti ya chawal ke sath serve karein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 3,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 165,
      "protein": 8.2,
      "carbohydrates": 26,
      "fat": 3.5,
      "fiber": 4.8
    },
    "tips": [
      "Dal ko hamesha 20 minute bhigo kar ubaalein, isse dal jaldi galti hai aur phytates kam hote hain."
    ],
    "precautions": [
      "Uric Acid Alert: Jinhe gout ya uric acid badha ho unhe arhar dal ki jagah peeli moong dal prefer karni chahiye."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Easy Digestion",
      "Heart Healthy"
    ],
    "popularity": 81,
    "emoji": "🥣",
    "accentColor": "#f59e0b",
    "fayde": [
      {
        "title": "Folic Acid Ka Bada Srot",
        "description": "Toor dal sharir me red blood cells badhane aur pregnancy me bache ke vikas ke liye behad zaroori hai."
      },
      {
        "title": "Hing Ka Pachan Fayda",
        "description": "Hing aur jeere ka tadka pet me gas aur acidity se turant rahat deta hai."
      }
    ],
    "tasteProfile": "Lasan ka karara tadka, desi ghee ki sondhi khushboo aur soothing dal",
    "bestTimeToEat": "Lunch ya dinner.",
    "suitableFor": [
      "Daily Indian diet",
      "Family meal"
    ]
  },
  {
    "id": "chana-masala",
    "name": "Kabuli Chana Masala (Chickpeas)",
    "nameHindi": "चना मसाला",
    "description": "Hearty white chickpeas slow-simmered with amchur, ginger, coriander & cumin",
    "descriptionHindi": "Chatpata, khatta-masaledar, adrak ke lachhe aur anardana ka authentic swad",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Kabuli Chana (Overnight soaked)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Tamatar Puree",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Pyaz Paste",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Chana Masala Powder",
        "quantity": 1.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Anardana Powder ya Amchur",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Adrak ke patle lachhe",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Tel ya Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Chane ko raat bhar bhigoyen aur namak-tejpatta dalkar cooker me 5-6 seeti laga kar ubaalein.",
        "durationMinutes": 5
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Kadhai me tel garm karein, jeera aur pyaz paste bhun kar tamatar puree milayein.",
        "durationMinutes": 5
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Chana masala, anardana aur masale dalkar bhoonein.",
        "durationMinutes": 5
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Uble chane dalkar thode chane chammach se mash karein taaki gravy ghadhi bane.",
        "durationMinutes": 5
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "10 minute dhimi aanch par pakayein, adrak ke lachhe aur dhaniya se garnish karein.",
        "durationMinutes": 5
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "totalTimeMinutes": 40,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 215,
      "protein": 11.5,
      "carbohydrates": 32,
      "fat": 4.2,
      "fiber": 8.8
    },
    "tips": [
      "Chane ubaalte waqt 1 tea-bag daal dene se authentic dark restaurant color aur antioxidants dono milte hain."
    ],
    "precautions": [
      "Tale Hue Bhature Ke Sath Na Khayein: Healthy chana ko fried bhature ki jagah multigrain kulcha ya roti ke sath khayein."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Diabetic Friendly",
      "Weight Loss"
    ],
    "popularity": 99,
    "emoji": "🧆",
    "accentColor": "#d97706",
    "fayde": [
      {
        "title": "Insulin Sensitivity Sudharta Hai",
        "description": "Chana ka glycemic index behad kam (28) hota hai, blood sugar bilkul spike nahi hota."
      },
      {
        "title": "Gut Microbiome Boost",
        "description": "Iska prebiotic fiber pet ke ache bacteria ko badhata hai."
      }
    ],
    "tasteProfile": "Chatpata, khatta-masaledar, adrak ke lachhe aur anardana ka authentic swad",
    "bestTimeToEat": "Lunch me salad ke sath.",
    "suitableFor": [
      "Diabetics",
      "Gym athletes"
    ]
  },
  {
    "id": "south-indian-sambar",
    "name": "Vegetable Drumstick Sambar",
    "nameHindi": "सांभर",
    "description": "Tangy aromatic lentil broth loaded with drumsticks, pumpkin, shallots & tamarind",
    "descriptionHindi": "Khatta-meetha, imli ki khatas, hing aur roast kiye huye sambar masale ki sugandh",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Dal & Soups"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Toor Dal (Cooked & mashed)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Drumstick (Sahjan ke tukde)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Chhoti Pyaz (Shallots) & Kaddu",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Imli ka Pulp (Tamarind)",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Sambar Powder",
        "quantity": 1.5,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Rai, Methi Dana, Kadi Patta",
        "quantity": 1,
        "unit": "tsp for tadka",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Hing aur Namak",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Drumstick, kaddu aur shallots ko 1 cup paani aur haldi-namak ke sath ubaal lein.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Sabziyan pakne par imli ka pulp aur sambar powder milayein aur 5 minute ubaalein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Ubli hui toor dal dalein aur 5 minute dhimi aanch par pakayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Tadka pan me rai, methi dana, kadi patta aur hing tadkakar sambar me dalein.",
        "durationMinutes": 4
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Idli, dosa ya brown rice ke sath garma garam piyen.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 35,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 140,
      "protein": 6.8,
      "carbohydrates": 22,
      "fat": 2.2,
      "fiber": 5.5
    },
    "tips": [
      "Sambar me drumstick (sehjan) zaroor dalein, drumstick me doodh se 4 guna calcium aur orange se 7 guna vitamin C hota hai."
    ],
    "precautions": [
      "Hyperacidity Alert: Jinhe tez acidity ho wo imli ki matra thodi kam rakhein."
    ],
    "allergens": [
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Easy Digestion",
      "Immunity Booster",
      "Weight Loss",
      "Low Calorie"
    ],
    "popularity": 83,
    "emoji": "🍲",
    "accentColor": "#ea580c",
    "fayde": [
      {
        "title": "Immunity aur Vitamin C",
        "description": "Imli, tamatar, kadi patta aur drumstick milkar sharir ki rog pratirodhak shamta ko buland karte hain."
      },
      {
        "title": "Antioxidant Spices",
        "description": "Methi dana, dhaniya, jeera aur haldi ka authentic masala inflammation dur karta hai."
      }
    ],
    "tasteProfile": "Khatta-meetha, imli ki khatas, hing aur roast kiye huye sambar masale ki sugandh",
    "bestTimeToEat": "Lunch ya dinner me.",
    "suitableFor": [
      "Everyone",
      "Heart & BP care"
    ]
  },
  {
    "id": "tomato-pepper-rasam",
    "name": "Pepper Garlic Tomato Rasam",
    "nameHindi": "टमाटर काली मिर्च रसम",
    "description": "Fiery soothing herbal broth brewed with crushed black pepper, garlic & ripe tomatoes",
    "descriptionHindi": "Gale ko taravt dene wala teekha, kaali mirch ka jhanjhanata swad aur khatta tamatar",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Dal & Soups"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Pake Tamatar (Mashed)",
        "quantity": 2,
        "unit": "medium",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Kaali Mirch (Crushed)",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Jeera (Crushed)",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Lasan (Crushed with skin)",
        "quantity": 6,
        "unit": "cloves",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Imli ka Paani",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Kadi Patta aur Hara Dhaniya",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Ghee",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Tamatar ko hath se mash karein aur usme 2 cup paani, imli ka paani, haldi aur namak dalein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Okhli me kaali mirch, jeera aur lasan ko dar-dara koot lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Tamatar wale paani ko 5 minute ubaalein jab tak kacha pan na nikal jaye.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Koota hua masala milayein aur 2 minute simmer karein (zyada ubalne se khushboo udd jati hai).",
        "durationMinutes": 2
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Desi ghee me rai, hing aur kadi patta ka tadka lagayein aur rasam me daal kar turant dhak dein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 12,
    "totalTimeMinutes": 20,
    "servings": 3,
    "difficulty": "Easy",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 75,
      "protein": 2.5,
      "carbohydrates": 12,
      "fat": 1.8,
      "fiber": 2.2
    },
    "tips": [
      "Thand aur flu ke dauran ise soup ki tarah garam-garam peene se band naak 5 minute me khul jati hai."
    ],
    "precautions": [
      "Pet Me Chhale (Ulcers): Jinhe pet me ulcer ya extreme burning sensation ho wo kaali mirch kam dalein."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Immunity Booster",
      "Easy Digestion",
      "Low Calorie"
    ],
    "popularity": 83,
    "emoji": "🍵",
    "accentColor": "#dc2626",
    "fayde": [
      {
        "title": "Sardi, Khansi aur Gale ki Khich-Khich Me Ram-Baan",
        "description": "Kaali mirch ka piperine aur lasan ka allicin infection ko jad se khatam karta hai."
      },
      {
        "title": "Metabolism Booster",
        "description": "Pachan agni ko pradipt karta hai, pet me gas aur heavy feeling turant gayab hoti hai."
      }
    ],
    "tasteProfile": "Gale ko taravt dene wala teekha, kaali mirch ka jhanjhanata swad aur khatta tamatar",
    "bestTimeToEat": "Meals se pehle starter soup ke roop me ya dinner me.",
    "suitableFor": [
      "Cold/Cough patients",
      "Weight loss",
      "Senior citizens"
    ]
  },
  {
    "id": "panchmel-dal",
    "name": "Rajasthani Panchratna Dal (5 Lentils)",
    "nameHindi": "पंचमेल दाल",
    "description": "Royal blend of five wholesome lentils infused with ginger, cloves & dried spices",
    "descriptionHindi": "Ghada, rich texture, har ek dal ka unique swad aur desi tadke ki mehak",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Rajasthan",
    "cuisine": [
      "Rajasthani",
      "North Indian"
    ],
    "category": [
      "Dal & Soups"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Panchmel Dal Mix (Chana, Toor, Moong, Urad, Masoor)",
        "quantity": 1,
        "unit": "cup equal parts",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Tamatar aur Adrak",
        "quantity": 1,
        "unit": "each",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Laung, Dalchini, Tejpatta",
        "quantity": 1,
        "unit": "piece each",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Hing, Jeera, Haldi, Namak",
        "quantity": 1,
        "unit": "tsp each",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Pancho dalo ko dho kar 30 minute bhigoyen.",
        "durationMinutes": 5
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Pressure cooker me namak aur haldi dalkar 3-4 seeti lagwayein.",
        "durationMinutes": 5
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Kadhai me ghee garm karein, laung, tejpatta, jeera aur hing tadkayein.",
        "durationMinutes": 5
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Adrak aur tamatar paste dalkar masale bhunein.",
        "durationMinutes": 5
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Ubli dal dalkar 5-7 minute dhimi aanch par pakayein.",
        "durationMinutes": 5
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "totalTimeMinutes": 40,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 185,
      "protein": 10.5,
      "carbohydrates": 28,
      "fat": 3.2,
      "fiber": 6
    },
    "tips": [
      "Dal me ghee me bhuna jeera aur adrak zaroor dalein taaki pancho dalo ka pachan saral ho sake."
    ],
    "precautions": [
      "Heavy for Weak Digestion: Jinhe pachan kamzor ho wo urad aur chana dal ki matra thodi kam rakhein."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "Diwali"
    ],
    "tags": [
      "High Protein",
      "Immunity Booster",
      "Heart Healthy"
    ],
    "popularity": 94,
    "emoji": "🥣",
    "accentColor": "#b45309",
    "fayde": [
      {
        "title": "Five-Fold Nutrient Balance",
        "description": "Moong, chana, toor, urad aur masoor milkar sharir ko har tarah ke micronutrients pradan karti hain."
      },
      {
        "title": "Immunity & Strength",
        "description": "Kamzori dur karne aur stamina badhane ke liye shreshth aahar."
      }
    ],
    "tasteProfile": "Ghada, rich texture, har ek dal ka unique swad aur desi tadke ki mehak",
    "bestTimeToEat": "Lunch me jowar ya bajra roti ke sath.",
    "suitableFor": [
      "Growing kids",
      "Workout enthusiasts",
      "Family"
    ]
  },
  {
    "id": "kala-chana-curry",
    "name": "Desi Kala Chana Curry (Black Chickpeas)",
    "nameHindi": "काला चना करी",
    "description": "Nutrient-dense black chickpeas in a rustic ginger-cumin-coriander gravy",
    "descriptionHindi": "Sondha, earthy, masaledar gravy aur chane ka meaty bite",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Dal & Soups"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Desi Kala Chana (Soaked overnight)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Pyaz aur Tamatar Paste",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Adrak-Lasan Paste",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Dhaniya aur Jeera Powder",
        "quantity": 1.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Sarson ka Tel",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Hing, Namak, Kasuri Methi",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Kala chana ko 8 ghante bhigoyen aur namak ke sath 6-7 seeti lagakar ubaalein.",
        "durationMinutes": 5
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Sarson ka tel dhuan uthne tak garm karein aur hing-jeera tadkayein.",
        "durationMinutes": 5
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Pyaz, adrak-lasan paste aur tamatar dalkar masale bhunein.",
        "durationMinutes": 5
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Uble chane dalein aur 10 minute simmer karein.",
        "durationMinutes": 5
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Garma garam serve karein.",
        "durationMinutes": 5
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "totalTimeMinutes": 40,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 195,
      "protein": 10.8,
      "carbohydrates": 30,
      "fat": 3.5,
      "fiber": 8.5
    },
    "tips": [
      "Chana ubaalne ke baad bacha hua paani fekein nahi, usi me sari gravy banayein kyunki usme saare minerals hote hain."
    ],
    "precautions": [
      "Chilka Utarna Mat Bhoolen: Chilke samet khayein taaki fiber mile, lekin 8-10 ghante bhigona zaroori hai."
    ],
    "allergens": [
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Diabetic Friendly",
      "Iron Rich",
      "High Protein",
      "Weight Loss"
    ],
    "popularity": 84,
    "emoji": "🧆",
    "accentColor": "#78350f",
    "fayde": [
      {
        "title": "Diabetics Ke Liye Vardaan",
        "description": "Kala chana ka glycemic index duniya me sabse kam foods me gina jata hai."
      },
      {
        "title": "Anemia Ka Shartiya Ilaj",
        "description": "Iron aur folic acid se bharpoor, blood hemoglobin tezi se badhata hai."
      }
    ],
    "tasteProfile": "Sondha, earthy, masaledar gravy aur chane ka meaty bite",
    "bestTimeToEat": "Lunch.",
    "suitableFor": [
      "Diabetics",
      "Anemic patients",
      "Bodybuilders"
    ]
  },
  {
    "id": "lauki-chana-dal",
    "name": "Bottle Gourd & Bengal Gram Stew (Lauki Chana Dal)",
    "nameHindi": "लौकी चना दाल",
    "description": "Cooling tender bottle gourd cubes stewed with golden split chickpeas and cumin",
    "descriptionHindi": "Mridu, soothing, lauki ki mithaas aur chana dal ka creamy texture",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Bihar",
    "cuisine": [
      "Bihari",
      "East Indian"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Lauki (Chop ki hui)",
        "quantity": 2,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Chana Dal (Soaked 1 hr)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Tamatar aur Adrak",
        "quantity": 1,
        "unit": "each",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Jeera, Hing, Haldi, Namak",
        "quantity": 1,
        "unit": "tsp each",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Pressure cooker me ghee garm karein aur jeera-hing ka tadka lagayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Adrak, tamatar, haldi aur namak dalein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Bhigoyi chana dal aur lauki ke tukde dalkar 1.5 cup paani dalein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Cooker me 3-4 seeti lagwayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Hara dhaniya dalkar roti ke sath serve karein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 3,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 155,
      "protein": 7.2,
      "carbohydrates": 24,
      "fat": 2.8,
      "fiber": 5.5
    },
    "tips": [
      "Lauki ka chilka agar mulayam ho to chilke samet dalein, saara fiber chilke me hota hai."
    ],
    "precautions": [
      "Kadvi Lauki Mat Khayein: Lauki kaatne se pehle chakh lein, agar kadvi ho to zehrili ho sakti hai use fek dein."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Heart Healthy",
      "Easy Digestion",
      "Low Calorie",
      "Weight Loss"
    ],
    "popularity": 91,
    "emoji": "🍲",
    "accentColor": "#16a34a",
    "fayde": [
      {
        "title": "Dil aur Blood Pressure Ke Liye Best",
        "description": "Lauki me 92% paani aur potassium hota hai jo BP aur cholesterol ko kam rakhta hai."
      },
      {
        "title": "Acidity aur Jalan Me Rahat",
        "description": "Sharir ko thandak deta hai aur digestion ko aasan banata hai."
      }
    ],
    "tasteProfile": "Mridu, soothing, lauki ki mithaas aur chana dal ka creamy texture",
    "bestTimeToEat": "Dinner ya lunch.",
    "suitableFor": [
      "Heart patients",
      "Weight loss",
      "Summer meals"
    ]
  },
  {
    "id": "kulthi-dal-soup",
    "name": "Horsegram Soup (Kulthi Dal Shorba)",
    "nameHindi": "कुलथी दाल का सूप",
    "description": "Ancient super-lentil elixir famous in Ayurveda for dissolving kidney stones & blasting fat",
    "descriptionHindi": "Sondha, kaali mirch aur jeere ka pungent kick, warming & restorative",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Dal & Soups"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Kulthi Dal (Horsegram - soaked 8 hrs)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Tamatar",
        "quantity": 1,
        "unit": "chopped",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Kaali Mirch aur Jeera Powder",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Lasan aur Adrak",
        "quantity": 1,
        "unit": "tsp crushed",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Sendha Namak aur Nimbu",
        "quantity": 1,
        "unit": "to taste",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Kulthi dal ko 4 cup paani me cooker me 6 seeti lagakar ubaalein.",
        "durationMinutes": 5
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Ubalne ke baad dal ka paani chhaan lein.",
        "durationMinutes": 5
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Pan me halka ghee dalkar lasan, adrak, tamatar aur jeera-kaali mirch bhoonein.",
        "durationMinutes": 5
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Dal ka paani dalein aur 5 minute ubaalein.",
        "durationMinutes": 5
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Garam-garam soup ki tarah nimbu nichod kar piyen.",
        "durationMinutes": 5
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "totalTimeMinutes": 40,
    "servings": 2,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 120,
      "protein": 7.5,
      "carbohydrates": 18,
      "fat": 1.5,
      "fiber": 6.2
    },
    "tips": [
      "Subah khali pet kulthi ka paani peene se kidney ki functioning behtar hoti hai aur uric acid kam hota hai."
    ],
    "precautions": [
      "Garam Taseer: Iski taseer behad garam hoti hai, garmiyo me kam matra me lein aur pregnancy me lene se bachein."
    ],
    "allergens": [],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Weight Loss",
      "Heart Healthy",
      "Low Calorie"
    ],
    "popularity": 81,
    "emoji": "🍵",
    "accentColor": "#78350f",
    "fayde": [
      {
        "title": "Kidney Stone Galane Me Shreshth",
        "description": "Ayurveda me kulthi dal ko ashmarighna (stone dissolving) mana gaya hai jo calcium oxalate stones ko todti hai."
      },
      {
        "title": "Ziddi Charbi Galaye",
        "description": "Thermogenic gun hone ke karan vajan tezi se kam karne me sahayak hai."
      }
    ],
    "tasteProfile": "Sondha, kaali mirch aur jeere ka pungent kick, warming & restorative",
    "bestTimeToEat": "Subah khali pet ya evening soup.",
    "suitableFor": [
      "Kidney stone patients",
      "Weight loss aspirants"
    ]
  },
  {
    "id": "dal-palak",
    "name": "Home-Style Dal Palak (Moong Dal & Spinach)",
    "nameHindi": "दाल पालक",
    "description": "Heartwarming yellow lentils stewed with farm-fresh spinach leaves & garlic tempering",
    "descriptionHindi": "Fresh, halka masaledar, palak aur dal ka perfectly balanced comforting taste",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "Pan India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Dal & Soups"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Dhuli Moong Dal",
        "quantity": 0.75,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Taaza Palak (Barik kati)",
        "quantity": 2,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Tamatar aur Hari Mirch",
        "quantity": 1,
        "unit": "each",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Lasan (Garlic)",
        "quantity": 5,
        "unit": "cloves",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Ghee, Jeera, Hing",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Moong dal ko haldi-namak ke sath cooker me ubaal lein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Kadhai me ghee garm karein, jeera, hing aur lasan bhoonein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Kati palak aur tamatar dalkar 3 minute pakayein jab tak palak soft na ho jaye.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Ubli dal milayein aur 2 minute ubaalein.",
        "durationMinutes": 3
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Phulka ya chawal ke sath serve karein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 3,
    "difficulty": "Easy",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 150,
      "protein": 8,
      "carbohydrates": 22,
      "fat": 2.8,
      "fiber": 4.5
    },
    "tips": [
      "Dal banne ke baad aanch band karke aadha nimbu nichodein, Vitamin C palak ke iron ko body me sokhne me madad karega."
    ],
    "precautions": [
      "Basi Mat Khayein: Palak wali dal ko hamesha taaza hi khayein, baar-baar garam karne se nitrates badhte hain."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Iron Rich",
      "High Protein",
      "Easy Digestion",
      "Low Calorie"
    ],
    "popularity": 92,
    "emoji": "🥣",
    "accentColor": "#16a34a",
    "fayde": [
      {
        "title": "Daily Iron & Protein Booster",
        "description": "Har roz khane ke liye sabse behtareen aur santulit aahar."
      },
      {
        "title": "Gut Friendly",
        "description": "Pet ko thanda rakhta hai aur constipation nahi hone deta."
      }
    ],
    "tasteProfile": "Fresh, halka masaledar, palak aur dal ka perfectly balanced comforting taste",
    "bestTimeToEat": "Lunch ya dinner.",
    "suitableFor": [
      "All age groups",
      "Children",
      "Pregnant women"
    ]
  },
  {
    "id": "baingan-bharta",
    "name": "Smoky Roasted Baingan Bharta",
    "nameHindi": "बैंगन का भर्ता",
    "description": "Fire-roasted mashed eggplant tossed with aromatic garlic, ginger, green peas & tomatoes",
    "descriptionHindi": "Dhuyen ki sondhi khushboo, juicy tamatar, meethi matar aur lasan ka teekha swad",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Punjab",
    "cuisine": [
      "Punjabi",
      "North Indian"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Bada Bharta Baingan",
        "quantity": 1,
        "unit": "piece (500g)",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Tamatar (Barik kata)",
        "quantity": 2,
        "unit": "medium",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Pyaz aur Hare Matar",
        "quantity": 0.5,
        "unit": "cup each",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Lasan (Garlic)",
        "quantity": 8,
        "unit": "cloves",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Adrak aur Hari Mirch",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Sarson ka Tel",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Namak, Haldi, Lal Mirch",
        "quantity": 1,
        "unit": "tsp each",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Baingan me cut lagakar lasan ki kaliyan andar daal dein aur gas ki aanch par chaaron taraf se kala hone tak bhunein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Thanda hone par chhilka utarein aur fork se mash karein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Kadhai me sarson ka tel garm karein, jeera, adrak aur pyaz golden hone tak bhoonein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Tamatar, hare matar aur masale dalkar tel chhutne tak pakayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Mashed baingan dalein aur 5-7 minute medium aanch par bhoonein taaki smoky swad ghul jaye.",
        "durationMinutes": 3
      },
      {
        "id": "step-6",
        "stepNumber": 6,
        "title": "Step 6",
        "instruction": "Hara dhaniya dalkar bajra roti ke sath enjoy karein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 35,
    "servings": 3,
    "difficulty": "Medium",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 135,
      "protein": 3.8,
      "carbohydrates": 16,
      "fat": 4,
      "fiber": 5.5
    },
    "tips": [
      "Baingan ko bhunte waqt uske cut ke andar lasan bhar dein, isse lasan roasted hokar makkhan jaisa swadisht ban jata hai."
    ],
    "precautions": [
      "Skin Allergies Alert: Jinhe twacha par khujli ya urticaria allergy ho wo baingan se parhez karein.",
      "Acidity & Pitta: Baingan pitta vardhak mana jata hai, ise bina zyada tel-masale ke banayein."
    ],
    "allergens": [
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Weight Loss",
      "Heart Healthy",
      "Diabetic Friendly",
      "Low Calorie"
    ],
    "popularity": 90,
    "emoji": "🍆",
    "accentColor": "#6b21a8",
    "fayde": [
      {
        "title": "Nasunin Antioxidant",
        "description": "Baingan ke chhilke me Nasunin hota hai jo brain cells aur heart ko free radicals se bachata hai."
      },
      {
        "title": "Weight Loss Friendly",
        "description": "Behad kam calories aur high water/fiber content pet ko jaldi bharta hai."
      },
      {
        "title": "Cholesterol Control",
        "description": "Khoon me lipid level ko sudharne me sahayak."
      }
    ],
    "tasteProfile": "Dhuyen ki sondhi khushboo, juicy tamatar, meethi matar aur lasan ka teekha swad",
    "bestTimeToEat": "Lunch ya dinner.",
    "suitableFor": [
      "Diabetics",
      "Weight watchers"
    ]
  },
  {
    "id": "bhindi-masala",
    "name": "Crispy Non-Sticky Bhindi Masala (Okra)",
    "nameHindi": "भिंडी मसाला",
    "description": "Fresh tender okra pan-roasted with cumin, dry mango powder, fennel & onions",
    "descriptionHindi": "Kurkuri, halki chatpati, saunf aur amchur ki khushboo se bhari hui",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Uttar Pradesh",
    "cuisine": [
      "Awadhi",
      "North Indian"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Bhindi (Sukhi hui & kati)",
        "quantity": 350,
        "unit": "grams",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Pyaz (Lachhe me kati)",
        "quantity": 1,
        "unit": "medium",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Saunf Powder (Fennel)",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Amchur Powder (Dry mango)",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Dhaniya, Haldi, Lal Mirch",
        "quantity": 1.5,
        "unit": "tsp combined",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Sarson ka Tel",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Ajwain aur Namak",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Bhindi ko dho kar kapde se acche se sukha lein (paani hone se chipchipi banti hai) aur 1 inch ke tukdo me kaatein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Kadhai me 1 chammach tel garm karein aur ajwain tadkayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Bhindi dalkar bina dhake tez aanch par 5 minute saute karein jab tak chipchipahat khatam na ho.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Pyaz aur saare sukhe masale dalein.",
        "durationMinutes": 3
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Dhimi aanch par 5 minute pakayein aur aakhir me amchur powder milayein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 30,
    "servings": 3,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 125,
      "protein": 3.2,
      "carbohydrates": 14,
      "fat": 3.8,
      "fiber": 5
    },
    "tips": [
      "Bhindi me namak hamesha pakne ke aakhir me dalein, pehle dalne se bhindi paani chhod deti hai aur chipchipi ho jati hai."
    ],
    "precautions": [
      "Kidney Stone Rogi Parhez Karein: Bhindi me oxalates hote hain, pathri ke mariz kam matra me khayein."
    ],
    "allergens": [
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Diabetic Friendly",
      "Gut Friendly",
      "Weight Loss"
    ],
    "popularity": 98,
    "emoji": "🥒",
    "accentColor": "#16a34a",
    "fayde": [
      {
        "title": "Insulin Production Booster",
        "description": "Bhindi me maujood myricetin tatva blood sugar levels ko naturally control karta hai."
      },
      {
        "title": "Gut Mucilage Healer",
        "description": "Bhindi ka natural chipchipa ras aanto (intestines) ki lining ko repair karta hai aur constipation dur karta hai."
      }
    ],
    "tasteProfile": "Kurkuri, halki chatpati, saunf aur amchur ki khushboo se bhari hui",
    "bestTimeToEat": "Lunch me phulka ke sath.",
    "suitableFor": [
      "Diabetics",
      "Digestive issues",
      "Family"
    ]
  },
  {
    "id": "karela-sabzi",
    "name": "Bitter Gourd Stir-Fry with Onions (Karela Sabzi)",
    "nameHindi": "करेला प्याज की सब्जी",
    "description": "Sliced bitter gourd caramelized with lots of onions, fennel seeds & raw mango",
    "descriptionHindi": "Khatta, halka meetha pyaz ka flavor aur karele ki swasthya-vardhak karwahat",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Karela (Gol kata)",
        "quantity": 300,
        "unit": "grams",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Pyaz (Zyada matra me lachhedar)",
        "quantity": 2,
        "unit": "large",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Saunf (Moti fennel seeds)",
        "quantity": 1.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Kachi Kairi (Raw mango grated)",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Sarson ka Tel",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Haldi, Dhaniya, Lal Mirch, Namak",
        "quantity": 1.5,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Karele par thoda namak lagakar 15 minute rakhein aur halka nichod lein taaki teekhi karwahat kam ho.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Sarson ka tel garm karke saunf aur hing ka tadka lagayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Karela dalkar 8-10 minute dhimi aanch par brown hone tak bhunein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Kati pyaz milayein aur translucent hone tak pakayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Sukhe masale aur kachi kairi dalkar 5 minute aur bhoonein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 40,
    "servings": 3,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 110,
      "protein": 2.8,
      "carbohydrates": 15,
      "fat": 3.2,
      "fiber": 4.8
    },
    "tips": [
      "Karele ka chilka kabhi na chheelein, 80% medicated nutrients aur charantin uske bahari chilke me hi hote hain."
    ],
    "precautions": [
      "Garbhavastha Me Parhez: Pregnant aur breastfeeding mahilayein karela zyada na khayein.",
      "Hypoglycemia Risk: Agar sugar ki dava le rahe hain to regular check karein kyunki karela sugar bahut tezi se girata hai."
    ],
    "allergens": [
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Diabetic Friendly",
      "Weight Loss",
      "Immunity Booster"
    ],
    "popularity": 98,
    "emoji": "🥒",
    "accentColor": "#15803d",
    "fayde": [
      {
        "title": "Natural Plant Insulin (Polypeptide-p)",
        "description": "Karela pancreas ko stimulate karke blood sugar ko 30-40% tak naturally kam karta hai."
      },
      {
        "title": "Khoon Saaf Karta Hai",
        "description": "Charantin aur momordicin khoon ke vishakt tatva nikaal kar acne aur daag-dhabbe dur karte hain."
      },
      {
        "title": "Liver Detox",
        "description": "Fatty liver aur pachan vikaar me amrit tulya hai."
      }
    ],
    "tasteProfile": "Khatta, halka meetha pyaz ka flavor aur karele ki swasthya-vardhak karwahat",
    "bestTimeToEat": "Lunch me dahi aur roti ke sath.",
    "suitableFor": [
      "Diabetics",
      "Skin problems",
      "Weight loss"
    ]
  },
  {
    "id": "sarson-ka-saag",
    "name": "Traditional Punjabi Sarson Ka Saag",
    "nameHindi": "सरसों का साग",
    "description": "Slow-simmered winter greens (mustard, bathua & spinach) pureed with maize flour",
    "descriptionHindi": "Earthy, sarson ka pungent swad, adrak-lasan ki garmi aur makki atte ki soni texture",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Sarson ke Patte (Mustard greens)",
        "quantity": 500,
        "unit": "grams",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Bathua aur Palak",
        "quantity": 250,
        "unit": "grams combined",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Makki ka Atta (Cornmeal)",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Adrak aur Lasan (Barik kata)",
        "quantity": 2,
        "unit": "tbsp each",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Hari Mirch",
        "quantity": 3,
        "unit": "pieces",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Namak",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Teeno saag ko 3-4 baar saaf paani se dho kar barik kaat lein.",
        "durationMinutes": 8
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Cooker me adrak, lasan, hari mirch aur namak ke sath 1 cup paani dalkar 4-5 seeti lagayein.",
        "durationMinutes": 8
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Hand blender ya mathani se mash karein, thoda-thoda makki ka atta milate hue chalaayein.",
        "durationMinutes": 8
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Pan me desi ghee garm karein, barik kata lasan aur sukhi lal mirch bhunein.",
        "durationMinutes": 8
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Saag dalein aur 10-15 minute dhimi aanch par paka kar makki ki roti ke sath serve karein.",
        "durationMinutes": 8
      }
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 40,
    "totalTimeMinutes": 60,
    "servings": 4,
    "difficulty": "Hard",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 160,
      "protein": 6.5,
      "carbohydrates": 18,
      "fat": 4.8,
      "fiber": 7.2
    },
    "tips": [
      "Saag me Bathua zaroor milayein, Bathua sarson ki teekhi karwahat ko natural tarike se neutralize karta hai."
    ],
    "precautions": [
      "Thyroid (Goitrogens): Kacha sarson thyroid ko affect kar sakta hai, lekin acche se ubalne par goitrogens nasht ho jate hain."
    ],
    "allergens": [
      "Dairy",
      "Gluten",
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Iron Rich",
      "Immunity Booster",
      "Heart Healthy"
    ],
    "popularity": 96,
    "emoji": "🥬",
    "accentColor": "#166534",
    "fayde": [
      {
        "title": "Winter Immunity & Warmth",
        "description": "Sarson ke patte sharir me internal warmth paida karte hain aur thand se bachate hain."
      },
      {
        "title": "Vitamins K, A & C Powerhouse",
        "description": "Haddiyo ki mazbooti aur immunity ke liye behtareen."
      },
      {
        "title": "Cholesterol Lowering Fiber",
        "description": "Bile binding fiber dil ko block hone se bachata hai."
      }
    ],
    "tasteProfile": "Earthy, sarson ka pungent swad, adrak-lasan ki garmi aur makki atte ki soni texture",
    "bestTimeToEat": "Sardiyo ke mausam me lunch ya dinner.",
    "suitableFor": [
      "Families",
      "Elderly",
      "Athletes in winter"
    ]
  },
  {
    "id": "gobi-gajar-matar",
    "name": "Winter Gobi Gajar Matar Dry Sabzi",
    "nameHindi": "गोभी गाजर मटर",
    "description": "Vibrant medley of fresh cauliflower florets, red carrots & sweet green peas",
    "descriptionHindi": "Sabziyo ki natural mithaas, adrak aur hing-jeere ka balanced home-style swad",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Phool Gobi (Florets)",
        "quantity": 1.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Laal Gaajar (Sliced)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Hare Matar (Fresh peas)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Adrak (Julienned)",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Jeera, Hing, Haldi, Dhaniya",
        "quantity": 1.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Sarson ka Tel / Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Namak & Amchur",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Gobi ko gungune namak wale paani me 5 minute bhigo kar saaf karein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Kadhai me tel garm karke jeera aur hing tadkayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Gobi, gaajar aur matar dalein, sath me haldi, namak aur adrak milayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Bina paani daale dhak kar dhimi aanch par 10-12 minute bhaap me pakne dein.",
        "durationMinutes": 3
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Pakne par dhaniya powder, amchur aur garam masala milakar 2 minute bhoonein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 27,
    "servings": 3,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 115,
      "protein": 4.2,
      "carbohydrates": 16,
      "fat": 3,
      "fiber": 4.8
    },
    "tips": [
      "Sabzi me paani na dalein, sabzi ke apne natural ras me bhaap me pakne se vitamins paani me ghul kar nasht nahi hote."
    ],
    "precautions": [
      "Gobi Se Gas: Gobi me raffinose hota hai; adrak aur hing zaroor dalein taaki gas na bane."
    ],
    "allergens": [
      "Dairy",
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Low Calorie",
      "Weight Loss",
      "Immunity Booster"
    ],
    "popularity": 82,
    "emoji": "🥕",
    "accentColor": "#ea580c",
    "fayde": [
      {
        "title": "Vitamin A & C Boost",
        "description": "Laal gaajar ka beta-carotene aankho ke liye aur gobi ka Vitamin C skin aur immunity ke liye shandar hai."
      },
      {
        "title": "Low Calorie Everyday Meal",
        "description": "Pet bhar ke khayein tab bhi vajan badhne ka koi darr nahi rehta."
      }
    ],
    "tasteProfile": "Sabziyo ki natural mithaas, adrak aur hing-jeere ka balanced home-style swad",
    "bestTimeToEat": "Lunch ya dinner me daal ke sath side dish.",
    "suitableFor": [
      "All age groups",
      "Weight loss"
    ]
  },
  {
    "id": "lauki-ki-sukhi-sabzi",
    "name": "Simple Jeera Lauki (Bottle Gourd)",
    "nameHindi": "जीरा लौकी की सब्जी",
    "description": "Delicate bottle gourd simmered with cumin seeds, turmeric, green chili & fresh coriander",
    "descriptionHindi": "Halka, meetha-namkeen, bilkul shant pet ko thandak dene wala swad",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "Pan India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Naram Lauki (Chhoti cubes)",
        "quantity": 3,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Jeera (Cumin)",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Hari Mirch (Slit)",
        "quantity": 1,
        "unit": "piece",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Haldi aur Sendha Namak",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Desi Ghee",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Hara Dhaniya & Nimbu Ras",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Chhote cooker ya pan me aadha chammach ghee garm karein aur jeera chatkayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Hari mirch aur lauki ke tukde dalein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Haldi aur sendha namak milayein, cooker me 1 seeti lagwayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Cooker kholkar hara dhaniya aur nimbu nichodein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 12,
    "totalTimeMinutes": 22,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 85,
      "protein": 1.8,
      "carbohydrates": 10,
      "fat": 2.2,
      "fiber": 3.5
    },
    "tips": [
      "Agar aapko vajan kam karna hai to hafte me 3 din dinner me sirf 1 katori jeera lauki aur 1 phulka khayein."
    ],
    "precautions": [
      "Taste Plain Lag Sakta Hai: Kayi logo ko boring lagti hai, isme nimbu aur bhuna jeera milakar swadisht banayein."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Weight Loss",
      "Heart Healthy",
      "Easy Digestion",
      "Low Calorie"
    ],
    "popularity": 95,
    "emoji": "🥣",
    "accentColor": "#22c55e",
    "fayde": [
      {
        "title": "Zero Fat Natural Hydration",
        "description": "Lauki me 96% paani hota hai, ye sharir ke dehydration aur bloating ko jad se mitati hai."
      },
      {
        "title": "Bile Acid Sequestrant",
        "description": "Fat metabolism ko tezi se badhati hai."
      }
    ],
    "tasteProfile": "Halka, meetha-namkeen, bilkul shant pet ko thandak dene wala swad",
    "bestTimeToEat": "Light dinner.",
    "suitableFor": [
      "Post-surgery",
      "Hypertension",
      "Dieting"
    ]
  },
  {
    "id": "mushroom-matar-masala",
    "name": "Home-Style Mushroom Matar Curry",
    "nameHindi": "मशरूम मटर मसाला",
    "description": "Juicy white button mushrooms and tender green peas in an onion-tomato-garlic curry",
    "descriptionHindi": "Umami, juicy mushroom bite, creamy bina cream ki rich home gravy",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "White Button Mushroom",
        "quantity": 250,
        "unit": "grams sliced",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Taaza Matar (Peas)",
        "quantity": 0.75,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Pyaz aur Tamatar Puree",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Adrak-Lasan Paste",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Dhaniya, Jeera, Kasuri Methi",
        "quantity": 1.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Sarson ka Tel / Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Mushroom ko dho kar 4 hisson me kaatein.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Kadhai me tel garm karein, jeera aur pyaz paste bhunein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Adrak-lasan aur tamatar puree dalkar masale bhunein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Matar aur mushroom dalein, mushroom apna paani chhodegi.",
        "durationMinutes": 4
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Dhak kar 8-10 minute dhimi aanch par pakayein, kasuri methi dalein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 12,
    "cookTimeMinutes": 18,
    "totalTimeMinutes": 30,
    "servings": 3,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 145,
      "protein": 7,
      "carbohydrates": 15,
      "fat": 4.2,
      "fiber": 4.2
    },
    "tips": [
      "Mushroom ko kaatne ke baad 15 minute dhoop me rakhne se unka Vitamin D level 200% tak badh jata hai."
    ],
    "precautions": [
      "Thorough Cleaning Required: Mushroom ko aate aur gungune paani se acche se dho kar hi banayein."
    ],
    "allergens": [
      "Dairy",
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Immunity Booster",
      "Low Calorie",
      "Diabetic Friendly"
    ],
    "popularity": 83,
    "emoji": "🍄",
    "accentColor": "#78350f",
    "fayde": [
      {
        "title": "Natural Vitamin D & Selenium",
        "description": "Mushroom un gine-chune vegetarian foods me se hai jo natural Vitamin D pradan karte hain."
      },
      {
        "title": "Immunity White Blood Cells Boost",
        "description": "Beta-glucans immune system ko active rakhte hain."
      }
    ],
    "tasteProfile": "Umami, juicy mushroom bite, creamy bina cream ki rich home gravy",
    "bestTimeToEat": "Lunch ya dinner.",
    "suitableFor": [
      "Diabetics",
      "Low-calorie dieters",
      "Vegetarians"
    ]
  },
  {
    "id": "parwal-aloo-healthy",
    "name": "Pointed Gourd Stir Fry (Parwal Ki Sabzi)",
    "nameHindi": "परवल की सब्जी",
    "description": "Tender pointed gourd sauteed with pan-roasted cumin, turmeric & aromatic panch phoron",
    "descriptionHindi": "Crunchy outer skin, juicy soft flesh, panch phoron ki anokhi mehak",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "East India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Parwal (Pointed gourd)",
        "quantity": 250,
        "unit": "grams",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Panch Phoron (Paanch masale)",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Haldi, Lal Mirch, Dhaniya Powder",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Sarson ka Tel",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Sendha Namak",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Parwal ko chaku se halka kurech lein aur 4 lambe tukdo me kaat lein.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Kadhai me sarson ka tel garm karein aur panch phoron tadkayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Parwal dalkar dhimi aanch par sunehra hone tak 8-10 minute bhunein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Masale aur namak milayein aur 2 minute aur pakayein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 95,
      "protein": 2.2,
      "carbohydrates": 12,
      "fat": 3,
      "fiber": 3.8
    },
    "tips": [
      "Parwal ko chilne ki bajay sirf kurchiye, uska green skin pet ke digestion ke liye sabse best hota hai."
    ],
    "precautions": [
      "Kade Beej Nikal Lein: Agar parwal ke andar beej peele ya sakht ho gaye hon to unhe nikaal kar hi pakayein."
    ],
    "allergens": [
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Easy Digestion",
      "Weight Loss",
      "Heart Healthy"
    ],
    "popularity": 98,
    "emoji": "🥒",
    "accentColor": "#16a34a",
    "fayde": [
      {
        "title": "Ayurvedic Blood Purifier",
        "description": "Parwal khoon ko saaf karta hai aur seasonal flu/fever se bachata hai."
      },
      {
        "title": "Jaundice & Liver Health",
        "description": "Liver ke enzymes ko normal karne me sahayak."
      }
    ],
    "tasteProfile": "Crunchy outer skin, juicy soft flesh, panch phoron ki anokhi mehak",
    "bestTimeToEat": "Lunch me dal-chawal ke sath.",
    "suitableFor": [
      "Liver patients",
      "All adults"
    ]
  },
  {
    "id": "bajra-roti",
    "name": "Desi Bajra Roti (Pearl Millet Flatbread)",
    "nameHindi": "बाजरे की रोटी",
    "description": "Rustic gluten-free pearl millet bread roasted over direct flame with white butter or ghee",
    "descriptionHindi": "Sondhi, khushbudar, mitti ke tave ki mehak aur halka crunchy crust with soft heart",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Rajasthan",
    "cuisine": [
      "Rajasthani",
      "North Indian"
    ],
    "category": [
      "Rotis & Grains"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Bajra Atta",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Garam Paani (Warm water)",
        "quantity": 0.5,
        "unit": "cup for kneading",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Sendha Namak",
        "quantity": 1,
        "unit": "pinch",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Desi Ghee ya Safed Makkhan",
        "quantity": 0.5,
        "unit": "tsp per roti",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Bajre ke aate me namak milakar gungune garam paani se hatheli ki madad se 5-7 minute ragad kar mulayam goondein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Loi banayein aur haatho par thoda paani ya sookha atta lagakar thap-thapakar gol roti banayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Mitti ya lohe ke tave par daal kar upar se paani ka haath lagayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Palt kar gas ki aanch par phoolaayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Garma-garam sarson ke saag ya jaggery (gud) aur ghee ke sath khayein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 145,
      "protein": 4.2,
      "carbohydrates": 28,
      "fat": 2.2,
      "fiber": 4.5
    },
    "tips": [
      "Atta goondte waqt hamesha garm paani use karein, isse bajre ki roti fategi nahi aur behad naram banegi."
    ],
    "precautions": [
      "Pani Zyada Piyein: Bajra sharir ka paani sokhta hai, bajra roti khane ke baad paani acchi matra me piyein.",
      "Garmiyo Me Kam Khayein: Extreme summer me bajra lene se sharir me garmi badh sakti hai, dahi ya chaas ke sath lein."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "Makar Sankranti",
      "Lohri"
    ],
    "tags": [
      "Gluten Free",
      "Iron Rich",
      "Diabetic Friendly",
      "Heart Healthy"
    ],
    "popularity": 94,
    "emoji": "🫓",
    "accentColor": "#78350f",
    "fayde": [
      {
        "title": "Gluten-Free Grain Superfood",
        "description": "Celiac allergy aur wheat sensitivity walo ke liye gehun ka sabse takatwar vikalp."
      },
      {
        "title": "Iron aur Zinc Se Labrez",
        "description": "Hemoglobin boost karta hai aur baalo ko jhadne se rokta hai."
      },
      {
        "title": "Sardi Me Sharir Ko Garam Rakhe",
        "description": "Iski taseer garam hoti hai jo winter me jodo ke dard aur sardi se bachati hai."
      }
    ],
    "tasteProfile": "Sondhi, khushbudar, mitti ke tave ki mehak aur halka crunchy crust with soft heart",
    "bestTimeToEat": "Lunch ya dinner sardiyo me.",
    "suitableFor": [
      "Diabetics",
      "Gluten allergic patients",
      "Strength builders"
    ]
  },
  {
    "id": "jowar-bhakri",
    "name": "Jowar Bhakri (Sorghum Flatbread)",
    "nameHindi": "ज्वार की भाकरी",
    "description": "Delicate round flatbread crafted from ancient white sorghum grain, eaten with pitla",
    "descriptionHindi": "Mridu, earthy sweet grain note, bilkul light aur pet ko halka rakhne wali",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Rotis & Grains"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Jowar Atta",
        "quantity": 1,
        "unit": "cup fine milled",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Garam Paani",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Namak",
        "quantity": 1,
        "unit": "pinch",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Garam paani ke sath jowar ke aate ko acche se mash karke naram loi banayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Chakle par sukha atta chhidak kar haatho se thapak kar patli bhakri banayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Garam tave par dalein, upar thoda paani lagayein aur dono taraf sunehra sek lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Pitla ya thecha ke sath serve karein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 8,
    "totalTimeMinutes": 18,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 130,
      "protein": 3.8,
      "carbohydrates": 27,
      "fat": 1.5,
      "fiber": 4.2
    },
    "tips": [
      "Gehun ki jagah hafte me 4 din jowar khane se 1 mahine me 2-3 kilo vajan natural tarike se kam hota hai."
    ],
    "precautions": [
      "Taaza Goondna Padta Hai: Jowar ka atta pehle se goond kar nahi rakha ja sakta, turant banakar khana padta hai."
    ],
    "allergens": [
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Gluten Free",
      "Heart Healthy",
      "Weight Loss",
      "Diabetic Friendly"
    ],
    "popularity": 94,
    "emoji": "🫓",
    "accentColor": "#ca8a04",
    "fayde": [
      {
        "title": "Pachan Me Sarvottam",
        "description": "Jowar ki taseer shant aur thandi hoti hai, ye har mausam me khayi ja sakti hai."
      },
      {
        "title": "Low Glycemic Index",
        "description": "Complex carbs aur dietary fiber blood glucose ko badhne nahi dete."
      },
      {
        "title": "Cardiac Protection",
        "description": "Polyphenols aur antioxidants arteries ko swasth rakhte hain."
      }
    ],
    "tasteProfile": "Mridu, earthy sweet grain note, bilkul light aur pet ko halka rakhne wali",
    "bestTimeToEat": "Lunch aur dinner.",
    "suitableFor": [
      "Weight loss",
      "Diabetics",
      "Heart care"
    ]
  },
  {
    "id": "curd-rice",
    "name": "South Indian Curd Rice (Thayir Sadam)",
    "nameHindi": "कर्ड राइस (दही चावल)",
    "description": "Cooling probiotic comfort food: soft mashed rice whipped with homemade yogurt & mustard tadka",
    "descriptionHindi": "Thanda, creamy, dahi ki mridu khatas, kadi patta aur rai ka crunchy tadka",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Tamil Nadu",
    "cuisine": [
      "Tamil",
      "South Indian"
    ],
    "category": [
      "Rotis & Grains"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Cooked Soft Rice (Mash kiya)",
        "quantity": 1.5,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Taaza Dahi (Fresh curd)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Doodh (Milk)",
        "quantity": 0.25,
        "unit": "cup",
        "optional": false,
        "notes": "To prevent souring"
      },
      {
        "id": "ing-4",
        "name": "Adrak & Hari Mirch",
        "quantity": 1,
        "unit": "tsp finely chopped",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Rai, Urad Dal, Kadi Patta",
        "quantity": 1,
        "unit": "tsp for tadka",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Anar ke Daane & Hara Dhaniya",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Sendha Namak",
        "quantity": 0.75,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Garam ubale chawal ko thoda sa mash karein aur thanda hone dein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Chawal me dahi, thoda doodh aur namak mila kar creamy banayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Tadka pan me thoda ghee/tel garm karein, rai, urad dal, kadi patta, hing aur adrak bhoonein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Tadka curd rice me milayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Anar ke daane aur hara dhaniya dalkar thanda serve karein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 190,
      "protein": 6.5,
      "carbohydrates": 30,
      "fat": 4.8,
      "fiber": 1.8
    },
    "tips": [
      "Curd rice me 2 chammach doodh milane se dahi dopahar se shaam tak bilkul khatta nahi hota."
    ],
    "precautions": [
      "Khatta Dahi Mat Use Karein: Hamesha taaza dahi use karein, purana ya behad khatta dahi Pitta aur throat infection badha sakta hai."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "Ugadi",
      "Navratri"
    ],
    "tags": [
      "Gut Friendly",
      "Easy Digestion",
      "Calcium Rich",
      "Heart Healthy"
    ],
    "popularity": 87,
    "emoji": "🍚",
    "accentColor": "#0284c7",
    "fayde": [
      {
        "title": "Gut Microbiome Ka Amrit",
        "description": "Dahi me lakho live Lactobacillus bacteria hote hain jo pet ke infection, IBS aur indigestion ko theek karte hain."
      },
      {
        "title": "Body Temperature Normalizer",
        "description": "Tez garmi me sharir ki aantarik garmi ko shaant karta hai."
      },
      {
        "title": "Instant Stress Relief",
        "description": "Tryptophan dahi me hota hai jo dimaag ko shaanti aur achhi neend deta hai."
      }
    ],
    "tasteProfile": "Thanda, creamy, dahi ki mridu khatas, kadi patta aur rai ka crunchy tadka",
    "bestTimeToEat": "Dopahar ka lunch garmiyo me.",
    "suitableFor": [
      "Gut issues",
      "Kids",
      "Elderly",
      "Acidity sufferers"
    ]
  },
  {
    "id": "lemon-rice",
    "name": "Turmeric Lemon Rice (Chitranna)",
    "nameHindi": "लेमन राइस",
    "description": "Bright yellow aromatic rice infused with fresh lemon juice, crunchy peanuts & curry leaves",
    "descriptionHindi": "Khatta, zesty, haldi ki sondhi mehak aur mungfali-chana dal ka karara crunch",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Rotis & Grains"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Ubla Chawal (Cooked basmati)",
        "quantity": 2,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Taaza Nimbu ka Ras",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Mungfali (Peanuts)",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Rai, Chana Dal, Urad Dal",
        "quantity": 1,
        "unit": "tsp combined",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Kadi Patta aur Hari Mirch",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Haldi Powder & Hing",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Tel ya Ghee & Namak",
        "quantity": 1,
        "unit": "tsp each",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Pan me tel garm karke mungfali, rai, chana dal aur urad dal ko golden hone tak bhunein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Kadi patta, hari mirch, hing aur haldi powder dalein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Aanch dhimi karke ubla chawal aur namak milayein aur 2 minute halke haath se toss karein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Aanch band karein aur taaza nimbu ka ras milayein (nimbu ubalne se kadva ho jata hai).",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 210,
      "protein": 4.8,
      "carbohydrates": 36,
      "fat": 5.2,
      "fiber": 2.5
    },
    "tips": [
      "Nimbu ka ras hamesha gas band karne ke baad hi dalein, ubalte chawal me dalne se Vitamin C nasht ho jata hai."
    ],
    "precautions": [
      "Diabetics Portion Control: Safed chawal ki jagah brown rice ya millets use karein."
    ],
    "allergens": [
      "Dairy",
      "Peanuts",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Immunity Booster",
      "Easy Digestion",
      "Low Calorie"
    ],
    "popularity": 93,
    "emoji": "🍋",
    "accentColor": "#eab308",
    "fayde": [
      {
        "title": "Vitamin C & Turmeric Curcumin",
        "description": "Taaza nimbu ka Vitamin C aur haldi ka Curcumin milkar immunity aur digestion ko boost karte hain."
      },
      {
        "title": "Quick Travel Friendly Meal",
        "description": "Khatta hone ke karan jaldi kharab nahi hota."
      }
    ],
    "tasteProfile": "Khatta, zesty, haldi ki sondhi mehak aur mungfali-chana dal ka karara crunch",
    "bestTimeToEat": "Lunch ya tiffin.",
    "suitableFor": [
      "Office lunchbox",
      "Light food lovers"
    ]
  },
  {
    "id": "khaman-dhokla",
    "name": "Steamed Gujrati Khaman Dhokla",
    "nameHindi": "खमन ढोकला",
    "description": "Light-as-air steamed golden savory sponge made of fermented gram flour",
    "descriptionHindi": "Juicy, spongy, khatta-meetha aur sarson-hari mirch ke tadke ka jhanjhanata swad",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Snacks & Chaat"
    ],
    "mealTypes": [
      "Snack",
      "Breakfast"
    ],
    "diet": [
      "Vegetarian",
      "Vegan",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Besan (Chhana hua)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Nimbu ka Sat ya Ras",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Adrak-Hari Mirch Paste",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Haldi (Sirf 1 pinch)",
        "quantity": 1,
        "unit": "pinch",
        "optional": false,
        "notes": "Zyada dalne se laal ho jata hai"
      },
      {
        "id": "ing-5",
        "name": "Fruit Salt (Eno) ya Baking Soda",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Tadke ke liye: Rai, Kadi Patta, Hari Mirch",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Namak",
        "quantity": 0.75,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Besan me paani, namak, nimbu ras aur adrak-mirch milakar lumpy free batter banayein aur 10 min rakhein.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Steamer me paani garm karein aur plate ko grease karein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Batter me Eno dalein aur 1 disha me 30 second phantein jab tak jhaag na ban jaye.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Turant plate me dalkar 15-18 minute tez aanch par steam karein.",
        "durationMinutes": 4
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Tadka pan me rai, kadi patta aur mirch tadka kar aadha cup paani dalein aur dhokle par failayein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 18,
    "totalTimeMinutes": 28,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 120,
      "protein": 5.5,
      "carbohydrates": 20,
      "fat": 2.2,
      "fiber": 3.5
    },
    "tips": [
      "Tadke ke paani me cheeni ki jagah thoda sa stevia ya kewal nimbu dalein, 100% diabetic friendly rahega."
    ],
    "precautions": [
      "Tadke Me Cheeni Ki Matra: Tadke ke paani me cheeni na dalein, bina cheeni ke nimbu aur hari mirch ka tadka lagayein."
    ],
    "allergens": [
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Low Calorie",
      "Easy Digestion",
      "High Protein",
      "Weight Loss"
    ],
    "popularity": 95,
    "emoji": "🧽",
    "accentColor": "#facc15",
    "fayde": [
      {
        "title": "Zero Oil Steamed Super Snack",
        "description": "Poori tarah bhaap me banta hai, zero cholesterol aur minimum calories."
      },
      {
        "title": "Fermented Gut Goodness",
        "description": "Besan ke khameer se digestive enzymes activate hote hain jo pachan ko aasan banate hain."
      }
    ],
    "tasteProfile": "Juicy, spongy, khatta-meetha aur sarson-hari mirch ke tadke ka jhanjhanata swad",
    "bestTimeToEat": "Sham ki chai ke sath ya subah nashte me.",
    "suitableFor": [
      "Weight watchers",
      "Heart patients",
      "Elderly"
    ]
  },
  {
    "id": "roasted-makhana",
    "name": "Turmeric Ghee Roasted Foxnuts (Makhana)",
    "nameHindi": "रोस्टेड मखाना",
    "description": "Crunchy roasted lotus seeds tossed in golden turmeric, rock salt & black pepper",
    "descriptionHindi": "Super crunchy, makhani, chaat masale ka halka chatpata flavor",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "East India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Snacks & Chaat"
    ],
    "mealTypes": [
      "Snack",
      "Breakfast"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Phool Makhana (Foxnuts)",
        "quantity": 2,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Desi Ghee",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Haldi Powder",
        "quantity": 0.25,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Sendha Namak (Rock salt)",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Pisi Kaali Mirch & Chaat Masala",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Bhari tale ki kadhai me aadha chammach ghee dalein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Makhana dalkar bilkul dhimi aanch par 6-8 minute lagatar chalate hue bhoonein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Ek makhana ungli se dabakar dekhein, agar aasaani se crush ho jaye to crispy ho gaya hai.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Aanch band karein, haldi, kaali mirch, chaat masala aur sendha namak milakar mix karein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 2,
    "cookTimeMinutes": 8,
    "totalTimeMinutes": 10,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 95,
      "protein": 3.5,
      "carbohydrates": 18,
      "fat": 1.2,
      "fiber": 3.2
    },
    "tips": [
      "Masale hamesha aanch band karne ke baad dalein taaki sukhe masale ghee me jalein nahi."
    ],
    "precautions": [
      "Overeating Se Kabz: Ek baar me 1-2 katori se zyada na khayein, varna dry hone ke karan kabz ho sakti hai."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Weight Loss",
      "Heart Healthy",
      "Low Calorie",
      "Calcium Rich"
    ],
    "popularity": 93,
    "emoji": "🍿",
    "accentColor": "#fbbf24",
    "fayde": [
      {
        "title": "Super Low Calorie Miracle Snack",
        "description": "Chips ya biscuit ki jagah makhana khane se craving shaant hoti hai aur vajan nahi badhta."
      },
      {
        "title": "Anti-Aging Flavonoids",
        "description": "Kaempferol antioxidant wrinkles aur cell damage ko rokta hai."
      },
      {
        "title": "Blood Pressure & Heart",
        "description": "High magnesium aur low sodium dil ki dhadkan aur BP ko control me rakhte hain."
      }
    ],
    "tasteProfile": "Super crunchy, makhani, chaat masale ka halka chatpata flavor",
    "bestTimeToEat": "Sham 4 se 6 baje ki bhookh ke liye best snack.",
    "suitableFor": [
      "Diabetics",
      "Late night snackers",
      "Weight loss aspirants"
    ]
  },
  {
    "id": "shakarkandi-chaat",
    "name": "Roasted Sweet Potato Chaat (Shakarkandi)",
    "nameHindi": "शकरकंदी की चाट",
    "description": "Warm fire-roasted sweet potato cubes dressed with lemon juice, mint chutney & cumin",
    "descriptionHindi": "Khatta-meetha, roasted caramel notes, teekhi hari chutney aur amchur ka kick",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Snacks & Chaat"
    ],
    "mealTypes": [
      "Snack",
      "Breakfast"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Shakarkandi (Sweet potato - roasted or boiled)",
        "quantity": 2,
        "unit": "medium",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Bhuna Jeera Powder",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Kala Namak & Chaat Masala",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Nimbu ka Ras",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Taaza Hara Dhaniya",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Shakarkandi ko tawe par dhak kar ya oven me roast karein (ya ubaal lein).",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Chhilka utaar kar bite-sized tukdo me kaat lein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Bowl me shakarkandi dalein, upar se bhuna jeera, kala namak, chaat masala dalein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Garma-garam nimbu ka ras nichodein aur hara dhaniya milakar parosein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 140,
      "protein": 2.2,
      "carbohydrates": 32,
      "fat": 0.5,
      "fiber": 4.5
    },
    "tips": [
      "Shakarkandi ko ubalne ki bajay sukhe tawe par dhak kar sekne se uski natural sweetness caramelize hokar lajawab banti hai."
    ],
    "precautions": [
      "Diabetics Limit Karein: Sugar ke mariz isko boil karke khayein, roast karne se sugar concentration thoda badh jata hai."
    ],
    "allergens": [],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Immunity Booster",
      "Weight Loss",
      "Heart Healthy"
    ],
    "popularity": 90,
    "emoji": "🍠",
    "accentColor": "#c2410c",
    "fayde": [
      {
        "title": "Vitamin A (Beta-Carotene) Champion",
        "description": "Aankho ki roshni aur skin glow ke liye kudrat ka sabse sasta superfood."
      },
      {
        "title": "Complex Smart Carbs",
        "description": "Normal aloo ke mukable low glycemic index hota hai jo slow energy release karta hai."
      }
    ],
    "tasteProfile": "Khatta-meetha, roasted caramel notes, teekhi hari chutney aur amchur ka kick",
    "bestTimeToEat": "Winter evening snack.",
    "suitableFor": [
      "Athletes",
      "Children",
      "Dieting"
    ]
  },
  {
    "id": "peanut-sundal",
    "name": "South Indian Boiled Peanut Sundal",
    "nameHindi": "मूंगफली सुंडल",
    "description": "Steamed tender peanuts tossed with fresh grated coconut, mustard, curry leaves & asafoetida",
    "descriptionHindi": "Nutty, juicy, nariyal ki mehak aur rai-hing ka shandar tadka",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Snacks & Chaat"
    ],
    "mealTypes": [
      "Snack",
      "Breakfast"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Kachi Mungfali (Boiled with salt)",
        "quantity": 1.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Taaza Grated Nariyal (Coconut)",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Rai, Urad Dal, Hing",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Kadi Patta aur Hari Mirch",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Nariyal Tel ya Ghee",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Mungfali ko namak dalkar cooker me 2-3 seeti aane tak naram ubaal lein.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Pan me aadha chammach nariyal tel garm karein, rai, urad dal, hing aur kadi patta tadkayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Ubli mungfali dalein aur 2 minute toss karein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Grated nariyal aur nimbu ras dalkar serve karein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 3,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 175,
      "protein": 7.8,
      "carbohydrates": 12,
      "fat": 9.8,
      "fiber": 3.8
    },
    "tips": [
      "Ubalne ke baad bacha hua paani poodhon me daal dein, minerals se bharpoor hota hai."
    ],
    "precautions": [
      "Nut Allergy: Jinhe peanut allergy ho wo ise bilkul na khayein."
    ],
    "allergens": [
      "Dairy",
      "Peanuts",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Heart Healthy",
      "Gluten Free"
    ],
    "popularity": 84,
    "emoji": "🥜",
    "accentColor": "#b45309",
    "fayde": [
      {
        "title": "Healthy Fats & Vitamin E",
        "description": "Mungfali me good fats (MUFA/PUFA) hote hain jo cholesterol ko control karte hain."
      },
      {
        "title": "Bina Tale Pure Protein",
        "description": "Ubal kar khane se mungfali ki calories tel me tali mungfali se aadhi ho jati hain."
      }
    ],
    "tasteProfile": "Nutty, juicy, nariyal ki mehak aur rai-hing ka shandar tadka",
    "bestTimeToEat": "Post-workout ya evening snack.",
    "suitableFor": [
      "Fitness lovers",
      "Kids"
    ]
  },
  {
    "id": "healthy-gajar-halwa",
    "name": "Sugar-Free Date-Sweetened Gajar Ka Halwa",
    "nameHindi": "गाजर का हलवा (बिना चीनी)",
    "description": "Grated red winter carrots slow-simmered in low-fat milk, sweetened with Medjool dates & cardamom",
    "descriptionHindi": "Mitha, gajar aur elaichi ki shandar mehak, roasted badam ka shahi crunch",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Healthy Desserts"
    ],
    "mealTypes": [
      "Dessert",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Laal Gaajar (Grated)",
        "quantity": 500,
        "unit": "grams",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Low-Fat Doodh (Skimmed milk)",
        "quantity": 2,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Khajoor Paste (Dates puree)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Hari Elaichi Powder",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Kaju aur Badam (Sliced)",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Bhari tale ki kadhai me 1 chammach ghee garm karein aur grated gajar ko 5-7 minute bhoonein.",
        "durationMinutes": 6
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Doodh dalein aur dhimi aanch par doodh ke sokhne tak lagatar chalate hue pakayein.",
        "durationMinutes": 6
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Jab doodh sukh jaye, tab khajoor ka paste aur elaichi powder milayein.",
        "durationMinutes": 6
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "5 minute aur bhoonein jab tak halwa kadhai na chhodne lage.",
        "durationMinutes": 6
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Roasted nuts se sajayein aur gunguna serve karein.",
        "durationMinutes": 6
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 30,
    "totalTimeMinutes": 45,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Mild",
    "nutrition": {
      "calories": 165,
      "protein": 5.2,
      "carbohydrates": 26,
      "fat": 4.8,
      "fiber": 4
    },
    "tips": [
      "Khajoor ko 15 minute gungune doodh me bhigo kar mixer me pees lein, halwe me mawa jaisa swad aur rang aata hai."
    ],
    "precautions": [
      "Diabetics Portion Control: Bina chini ke hone par bhi khajoor aur gajar me natural carbs hote hain, isliye 1 chhota bowl hi khayein."
    ],
    "allergens": [
      "Dairy",
      "Tree Nuts"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Immunity Booster",
      "Heart Healthy",
      "Calcium Rich"
    ],
    "popularity": 96,
    "emoji": "🥕",
    "accentColor": "#dc2626",
    "fayde": [
      {
        "title": "Bina Refined Sugar Ke Mithas",
        "description": "Khajoor (dates) aur gajar ki natural mithaas se banta hai, zero processed white sugar."
      },
      {
        "title": "Eye Health & Vitamin A",
        "description": "Beta-carotene ka sabse swadisht winter source jo vision aur dry eyes me faydemand hai."
      },
      {
        "title": "Heart Safe",
        "description": "Khoa/Mawa ki jagah low-fat milk aur limited desi ghee ka istemaal kiya jata hai."
      }
    ],
    "tasteProfile": "Mitha, gajar aur elaichi ki shandar mehak, roasted badam ka shahi crunch",
    "bestTimeToEat": "Meals ke baad healthy dessert ya winter evening treat.",
    "suitableFor": [
      "Families",
      "Fitness conscious sweet lovers"
    ]
  },
  {
    "id": "makhana-kheer",
    "name": "Royal Cardamom Makhana Kheer",
    "nameHindi": "मखाना खीर",
    "description": "Crisp lotus seeds crushed and steeped in saffron infused almond milk with natural jaggery",
    "descriptionHindi": "Creamy, kesar aur elaichi ki shahi sugandh, naram makhana aur pista ka crunch",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Healthy Desserts"
    ],
    "mealTypes": [
      "Dessert",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Phool Makhana",
        "quantity": 1.5,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Toned Doodh",
        "quantity": 3,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Gud Powder ya Dates Puree",
        "quantity": 0.3,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Kesar ke Reshe (Saffron)",
        "quantity": 8,
        "unit": "strands",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Elaichi Powder",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Pista aur Badam",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Aadhe chammach ghee me makhana ko crispy hone tak dry roast karein.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Aadhe makhano ko mixer me dar-dara pees lein aur aadhe sabut rakhein.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Doodh ko ubaal kar kesar dalein aur 5 minute ghadha hone dein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Pisa aur sabut makhana doodh me dalkar 8-10 minute dhimi aanch par pakayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Aanch band karein, thoda gunguna hone par gud powder aur elaichi milayein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 3,
    "difficulty": "Medium",
    "spiceLevel": "Mild",
    "nutrition": {
      "calories": 145,
      "protein": 4.8,
      "carbohydrates": 22,
      "fat": 3.8,
      "fiber": 2.5
    },
    "tips": [
      "Aadhe makhano ko dar-dara pees kar dalne se kheer bina mawa ya condensed milk ke bhi rabdi jaisi ghadi ban jati hai."
    ],
    "precautions": [
      "Gud Ko Ubalte Doodh Me Na Dalein: Gud dalte samay aanch band kar dein, varna doodh phat sakta hai."
    ],
    "allergens": [
      "Dairy",
      "Tree Nuts"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Calcium Rich",
      "Heart Healthy",
      "Low Calorie"
    ],
    "popularity": 89,
    "emoji": "🥣",
    "accentColor": "#f59e0b",
    "fayde": [
      {
        "title": "Haddiyo Ko Mazboot Banaye",
        "description": "Makhana aur doodh milkar sharir ko bharpoor calcium aur phosphorus dete hain."
      },
      {
        "title": "Chawal Ki Kheer Se Aadhi Calories",
        "description": "Chawal ke mukable makhana kheer me calories kam aur antioxidants zyada hote hain."
      }
    ],
    "tasteProfile": "Creamy, kesar aur elaichi ki shahi sugandh, naram makhana aur pista ka crunch",
    "bestTimeToEat": "Vrat me ya dinner ke baad.",
    "suitableFor": [
      "Vrat / Fasting",
      "Senior citizens",
      "Kids"
    ]
  },
  {
    "id": "masala-chaas",
    "name": "Ayurvedic Masala Buttermilk (Chaas)",
    "nameHindi": "मसाला छाछ",
    "description": "Whisked probiotic buttermilk spiced with roasted cumin, rock salt, ginger & fresh mint",
    "descriptionHindi": "Thanda-thanda, bhuna jeera aur kala namak ka chatpata swad, pet ko shant karne wala",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
    "region": "Pan India",
    "state": "Gujarat",
    "cuisine": [
      "Gujarati",
      "West Indian"
    ],
    "category": [
      "Drinks & Raita"
    ],
    "mealTypes": [
      "Snack",
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Dahi (Curd)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Thanda Paani",
        "quantity": 1.5,
        "unit": "cups",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Bhuna Jeera Powder",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Kala Namak (Black salt)",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Adrak ka Ras",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Pudina aur Dhaniya ke Patte",
        "quantity": 2,
        "unit": "tbsp finely crushed",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Hing",
        "quantity": 1,
        "unit": "pinch",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Dahi ko mathani (whisk) se acche se phent lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Thanda paani milakar patla karein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Bhuna jeera, kala namak, hing, adrak ka ras aur barik kata pudina dalein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Glasses me dalkar upar se thoda sa bhuna jeera powder chhidak kar thanda piyen.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "totalTimeMinutes": 5,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 45,
      "protein": 2.8,
      "carbohydrates": 4.5,
      "fat": 1.2,
      "fiber": 0.5
    },
    "tips": [
      "Chaas me 1 chutki hing aur adrak ka ras milana gas aur bloat ko jad se gayab kar deta hai."
    ],
    "precautions": [
      "Raat Me Parhez Karein: Chaas ki taseer thandi hoti hai, ise suraj dhalne ke baad peene se kaf/jukaam ho sakta hai."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "Holi",
      "Summer"
    ],
    "tags": [
      "Gut Friendly",
      "Easy Digestion",
      "Weight Loss",
      "Low Calorie"
    ],
    "popularity": 96,
    "emoji": "🥛",
    "accentColor": "#10b981",
    "fayde": [
      {
        "title": "Instant Digestion Booster",
        "description": "Khana khane ke baad chaas peene se pet me gas, acidity aur bhari-pan 10 minute me shant hota hai."
      },
      {
        "title": "Kudrati Probiotic",
        "description": "Aanto ke good bacteria ko badhata hai aur dehydration dur karta hai."
      },
      {
        "title": "Behad Low Calorie",
        "description": "Cold drink ya juice ki jagah chaas peene se roz 200 calories bachti hain."
      }
    ],
    "tasteProfile": "Thanda-thanda, bhuna jeera aur kala namak ka chatpata swad, pet ko shant karne wala",
    "bestTimeToEat": "Lunch ke turant baad.",
    "suitableFor": [
      "All adults",
      "Acidity & IBS patients",
      "Summer heat"
    ]
  },
  {
    "id": "cucumber-mint-raita",
    "name": "Cooling Cucumber Mint Raita",
    "nameHindi": "खीरा पुदीना रायता",
    "description": "Chilled whipped yogurt folded with grated crisp cucumber, fresh mint & roasted cumin",
    "descriptionHindi": "Creamy, refreshing, pudine ki thandak aur kheere ka juicy crunch",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Drinks & Raita"
    ],
    "mealTypes": [
      "Snack",
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Dahi (Phenti hui)",
        "quantity": 1.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Taaza Kheera (Grated)",
        "quantity": 1,
        "unit": "medium",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Pudina ke Patte (Crushed)",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Bhuna Jeera & Kala Namak",
        "quantity": 1,
        "unit": "tsp combined",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Hari Mirch (Optional)",
        "quantity": 0.5,
        "unit": "chopped",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Dahi ko chammach se smooth hone tak phent lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Grated kheera (halka nichod kar) dahi me milayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Pudina, bhuna jeera aur kala namak dalein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Thanda karke biryani ya parathe ke sath serve karein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 8,
    "cookTimeMinutes": 0,
    "totalTimeMinutes": 8,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 70,
      "protein": 3.5,
      "carbohydrates": 6,
      "fat": 2.2,
      "fiber": 1.2
    },
    "tips": [
      "Kheera chhilke samet grate karein, kheere ke chilke me fiber aur antioxidants ka khazana hota hai."
    ],
    "precautions": [
      "Pehle Se Namak Mat Dalein: Kheer me namak dalne se kheera paani chhod deta hai, khate samay hi namak milayein."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Gut Friendly",
      "Low Calorie",
      "Heart Healthy"
    ],
    "popularity": 86,
    "emoji": "🥒",
    "accentColor": "#059669",
    "fayde": [
      {
        "title": "Stomach Acid Buffer",
        "description": "Teekhe masaledar khane ke baad pet me hone wali jalan aur pitta ko turant shaant karta hai."
      },
      {
        "title": "Hydration & Skin Glow",
        "description": "Kheere ka silica aur paani twacha ko hydrate rakhta hai."
      }
    ],
    "tasteProfile": "Creamy, refreshing, pudine ki thandak aur kheere ka juicy crunch",
    "bestTimeToEat": "Lunch meal ke sath.",
    "suitableFor": [
      "All age groups",
      "Summer cooler"
    ]
  },
  {
    "id": "haldi-doodh",
    "name": "Golden Turmeric Latte (Haldi Doodh)",
    "nameHindi": "हल्दी वाला दूध",
    "description": "Ancient immunity healer: warm milk infused with organic turmeric, black pepper & cinnamon",
    "descriptionHindi": "Garma-garam, comforting, dalchini ki mithaas aur haldi ka healing earthy taste",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "Pan India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Drinks & Raita"
    ],
    "mealTypes": [
      "Snack",
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Toned Doodh",
        "quantity": 1,
        "unit": "glass",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Kacchi Haldi (Grated) ya Haldi Powder",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Taaza Pisi Kaali Mirch",
        "quantity": 1,
        "unit": "pinch",
        "optional": false,
        "notes": "Essential for absorption"
      },
      {
        "id": "ing-4",
        "name": "Dalchini Powder",
        "quantity": 1,
        "unit": "pinch",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Shahad (Honey) ya Gud",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Pan me doodh dalein, haldi, kaali mirch aur dalchini dalkar 3-4 minute dhimi aanch par ubaalein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Cup me chhaan lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Halka gunguna hone par shahad ya gud milakar raat ko sone se pehle piyen.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 3,
    "cookTimeMinutes": 5,
    "totalTimeMinutes": 8,
    "servings": 1,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 110,
      "protein": 4.5,
      "carbohydrates": 10,
      "fat": 3.5,
      "fiber": 0.5
    },
    "tips": [
      "Kacchi gaanth wali haldi use karein to result powder se 5 guna behtar milte hain."
    ],
    "precautions": [
      "Kaali Mirch Bina Na Piyein: Kaali mirch ke bina haldi ka curcumin sharir me sirf 2% absorb hota hai, kaali mirch ise 2000% badha deti hai."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Immunity Booster",
      "Heart Healthy"
    ],
    "popularity": 95,
    "emoji": "🥛",
    "accentColor": "#eab308",
    "fayde": [
      {
        "title": "Anti-Inflammatory Wonder (Curcumin)",
        "description": "Chot, jodo ka dard, infection aur sardi ko raat bhar me theek karne me asardar."
      },
      {
        "title": "Deep Sound Sleep",
        "description": "Raat ko peene se nervous system shaant hota hai aur gahri neend aati hai."
      }
    ],
    "tasteProfile": "Garma-garam, comforting, dalchini ki mithaas aur haldi ka healing earthy taste",
    "bestTimeToEat": "Raat ko sone se 30 minute pehle.",
    "suitableFor": [
      "Cold/Flu patients",
      "Joint pain",
      "Insomnia"
    ]
  },
  {
    "id": "beetroot-raita",
    "name": "Pink Antioxidant Beetroot Raita",
    "nameHindi": "चुकंदर का रायता",
    "description": "Vibrant ruby pink curd infused with steamed grated beetroot, mustard tempering & curry leaves",
    "descriptionHindi": "Halka meetha-namkeen, crunchy rai tadka aur dahi ki soothing thandak",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Drinks & Raita"
    ],
    "mealTypes": [
      "Snack",
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Ubla & Grated Chukandar (Beetroot)",
        "quantity": 1,
        "unit": "medium",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Taaza Dahi",
        "quantity": 1.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Rai, Kadi Patta, Hari Mirch",
        "quantity": 1,
        "unit": "tsp for tadka",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Kala Namak & Bhuna Jeera",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Nariyal Tel ya Ghee",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Chukandar ko ubaal kar chilka utarein aur barik grate kar lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Dahi ko phent kar usme grated chukandar milayein (pyara gulabi rang aayega).",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Kala namak aur bhuna jeera powder milayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Chhote pan me nariyal tel me rai, kadi patta aur hari mirch tadka kar rayte par dalein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 5,
    "totalTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 85,
      "protein": 3.8,
      "carbohydrates": 10,
      "fat": 2.2,
      "fiber": 2
    },
    "tips": [
      "Chukandar ko ubaal kar use karne se uska kacha-pan nikal jata hai aur pachan bilkul aasan ho jata hai."
    ],
    "precautions": [
      "Kidney Stone Rogi Parhez: Beetroot me oxalates hote hain, jinhe stone problem ho wo kam lein."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Iron Rich",
      "Heart Healthy",
      "Gut Friendly"
    ],
    "popularity": 99,
    "emoji": "🥣",
    "accentColor": "#be185d",
    "fayde": [
      {
        "title": "Nitric Oxide & Blood Pressure",
        "description": "Chukandar ka dietary nitrate blood vessels ko relax karke high BP ko tezi se normal karta hai."
      },
      {
        "title": "Stamina & Hemoglobin",
        "description": "Iron aur folate se bharpoor, thakan ko dur bhagata hai."
      }
    ],
    "tasteProfile": "Halka meetha-namkeen, crunchy rai tadka aur dahi ki soothing thandak",
    "bestTimeToEat": "Lunch.",
    "suitableFor": [
      "Anemic patients",
      "High BP patients",
      "Kids"
    ]
  },
  {
    "id": "ragi-dates-ladoo",
    "name": "No-Sugar Ragi & Peanut Energy Ladoo",
    "nameHindi": "रागी खजूर लड्डू",
    "description": "Wholesome guilt-free power balls made from roasted finger millet, roasted peanuts & dates",
    "descriptionHindi": "Nutty, khajoor ki natural mithaas aur desi ghee ki rich sondhi sugandh",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Healthy Desserts"
    ],
    "mealTypes": [
      "Dessert",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Ragi Atta",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Naram Khajoor (Seedless dates)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Bhuni Mungfali (Crushed)",
        "quantity": 0.25,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Safed Til (Sesame seeds)",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Elaichi Powder",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Kadhai me 1 chammach ghee garm karein aur ragi aate ko 6-8 minute dhimi aanch par khushboo aane tak bhoonein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Khajoor ko mixer me pees kar paste bana lein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Bhune ragi me khajoor paste, bhuni mungfali, til aur elaichi milakar gunguna rehte hi gol ladoo baandh lein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Hawa-band dabbe me 20 din tak rakhein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 20,
    "servings": 6,
    "difficulty": "Easy",
    "spiceLevel": "Mild",
    "nutrition": {
      "calories": 110,
      "protein": 3.5,
      "carbohydrates": 18,
      "fat": 3.2,
      "fiber": 3.5
    },
    "tips": [
      "Ise banate waqt til zaroor dalein, til aur ragi ka combination haddiyo ke dard ko 1 hafte me theek kar sakta hai."
    ],
    "precautions": [
      "Portion Control: Swadisht hone ki wajah se zyada na khayein, 1-2 ladoo rozana paryapt hain."
    ],
    "allergens": [
      "Dairy",
      "Peanuts",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Calcium Rich",
      "Iron Rich",
      "Weight Loss"
    ],
    "popularity": 83,
    "emoji": "🧆",
    "accentColor": "#78350f",
    "fayde": [
      {
        "title": "Zero Sugar & 100% Nutritious",
        "description": "Bachho aur buzurgon ke liye calcium aur iron ka daily supplement."
      },
      {
        "title": "Post-Workout Stamina Ball",
        "description": "Ek ladoo khate hi sustained energy milti hai."
      }
    ],
    "tasteProfile": "Nutty, khajoor ki natural mithaas aur desi ghee ki rich sondhi sugandh",
    "bestTimeToEat": "Subah nashte ke baad ya shaam ko chai ke waqt.",
    "suitableFor": [
      "Elderly",
      "Women",
      "Growing children"
    ]
  },
  {
    "id": "gujarati-handvo",
    "name": "Gujarati Mixed Lentil Handvo",
    "nameHindi": "गुजराती हांडवो",
    "description": "Savory baked lentil & rice cake packed with grated bottle gourd, sesame & mustard",
    "descriptionHindi": "Crispy til-rai crust, andar se soft aur spongy, lauki aur khameer ki lajawab mithaas",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Snacks & Chaat"
    ],
    "mealTypes": [
      "Snack",
      "Breakfast"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Handvo Dal Mix (Chana, Toor, Urad & Chawal soaked & ground)",
        "quantity": 1.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Grated Lauki (Bottle gourd)",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Taaza Dahi",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Safed Til (Sesame)",
        "quantity": 1.5,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Rai, Hing, Kadi Patta",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Adrak-Hari Mirch Paste",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Haldi, Namak, Eno",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Pise batter me grated lauki, dahi, adrak-mirch, haldi aur namak milayein.",
        "durationMinutes": 5
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Baking se pehle 1 chammach Eno dalkar milayein.",
        "durationMinutes": 5
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Pan me 1 chammach tel garm karke safed til, rai aur kadi patta tadkayein.",
        "durationMinutes": 5
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Batter ko 1 inch mota failayein aur dhak kar dhimi aanch par 15 minute ek taraf se golden sek lein.",
        "durationMinutes": 5
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Palt kar doosri taraf se 5-7 minute crispy hone tak sekein aur pieces kaat kar hari chutney ke sath khayein.",
        "durationMinutes": 5
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "totalTimeMinutes": 40,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 165,
      "protein": 7.2,
      "carbohydrates": 24,
      "fat": 4.5,
      "fiber": 4.8
    },
    "tips": [
      "Batter me gajar aur palak bhi mila sakte hain, ye ek poora balance meal ban jata hai."
    ],
    "precautions": [
      "Zyada Tel Me Na Talen: Non-stick pan me kam tel me dhak kar sekna hi ise healthy banata hai."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Gluten Free",
      "Gut Friendly",
      "Weight Loss"
    ],
    "popularity": 81,
    "emoji": "🥧",
    "accentColor": "#ca8a04",
    "fayde": [
      {
        "title": "Sabhi Dalo Ka Poshan",
        "description": "Chana dal, toor dal, urad dal aur chawal ko dahi ke sath ferment karke banta hai, complete protein deta hai."
      },
      {
        "title": "Lauki Ka Chhupa Fayda",
        "description": "Bache jo lauki nahi khate, wo handvo me shauq se khate hain."
      },
      {
        "title": "Gut Healing Fermentation",
        "description": "Probiotics aur enzymes gut health ko behtar banate hain."
      }
    ],
    "tasteProfile": "Crispy til-rai crust, andar se soft aur spongy, lauki aur khameer ki lajawab mithaas",
    "bestTimeToEat": "Nashta ya evening high-protein snack.",
    "suitableFor": [
      "Families",
      "Vegetarians",
      "Diabetics"
    ]
  },
  {
    "id": "kerala-avial",
    "name": "Kerala Mixed Veg Avial",
    "nameHindi": "केरल अवियल",
    "description": "Traditional Kerala celebration stew of 8 indigenous vegetables simmered in coconut yogurt gravy",
    "descriptionHindi": "Mridu, soothing, kachha nariyal tel aur kadi patte ki dilchasp sugandh",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Mix Veggies (Kacha Kela, Sahjan, Gajar, Beans, Kaddu)",
        "quantity": 3,
        "unit": "cups cut in batons",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Kacha Nariyal (Grated)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Jeera aur Hari Mirch",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Taaza Dahi (Whisked)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Kacha Nariyal Tel (Virgin coconut oil)",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Kadi Patta, Haldi, Namak",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Sabhi sabziyo ko lambe tukdo me kaatein aur thode paani, haldi aur namak ke sath 80% naram ubaal lein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Nariyal, jeera aur hari mirch ko dar-dara pees lein bina paani ke.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Ubli sabziyo me nariyal paste dalein aur 2-3 minute simmer karein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Aanch band karein aur phenti hui dahi milayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Upar se 1 chammach kacha nariyal tel aur taaza kadi patta dalkar dhak dein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 35,
    "servings": 4,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 140,
      "protein": 3.5,
      "carbohydrates": 16,
      "fat": 6.8,
      "fiber": 5.5
    },
    "tips": [
      "Raw virgin coconut oil upar se dalne se lauric acid milta hai jo body ki immunity badhata hai."
    ],
    "precautions": [
      "Dahi Ko Ubaalein Nahi: Dahi milane ke baad tez aanch par na ubaalein varna dahi phat sakta hai."
    ],
    "allergens": [
      "Dairy",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Heart Healthy",
      "Easy Digestion",
      "Immunity Booster"
    ],
    "popularity": 92,
    "emoji": "🥥",
    "accentColor": "#059669",
    "fayde": [
      {
        "title": "Sabhi Rang Ki Sabziyo Ka Blend",
        "description": "Sahjan, kela, kaddu, gajar, beans, yam milkar har tarah ke phytonutrients pradan karte hain."
      },
      {
        "title": "Zero Fry Healthy Curry",
        "description": "Sabziyan bhaap me paka kar kache pise nariyal aur dahi me banayi jati hain, bina kisi tel me bhune."
      }
    ],
    "tasteProfile": "Mridu, soothing, kachha nariyal tel aur kadi patte ki dilchasp sugandh",
    "bestTimeToEat": "Lunch me brown rice ke sath.",
    "suitableFor": [
      "All age groups",
      "Heart care",
      "Digestive issues"
    ]
  },
  {
    "id": "ven-pongal",
    "name": "South Indian Ven Pongal",
    "nameHindi": "वेन पोंगल",
    "description": "Silky comfort porridge of short-grain rice and roasted yellow moong dal tempered with whole black pepper & ginger",
    "descriptionHindi": "Pighalta hua makkhan jaisa, desi ghee, sabut kaali mirch ka pop aur adrak ki garmi",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Breakfast"
    ],
    "mealTypes": [
      "Breakfast",
      "Snack"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Chawal (Raw rice)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Peeli Moong Dal (Bhuni hui)",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Sabut Kaali Mirch & Jeera",
        "quantity": 1,
        "unit": "tsp each",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Barik Kata Adrak",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Kaju ke Tukde",
        "quantity": 6,
        "unit": "pieces",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Kadi Patta & Hing",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-7",
        "name": "Desi Ghee",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Moong dal ko dry roast karein aur chawal ke sath dho lein.",
        "durationMinutes": 4
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Cooker me 4 cup paani aur namak dalkar 4-5 seeti lagwayein taaki bilkul naram mash ho sake.",
        "durationMinutes": 4
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Tadka pan me ghee garm karein, kaju, jeera, sabut kaali mirch, adrak, hing aur kadi patta bhoonein.",
        "durationMinutes": 4
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Tadke ko ubale hue pongal me dalkar acchi tarah milayein.",
        "durationMinutes": 4
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Nariyal chutney aur sambar ke sath garma-garam parosein.",
        "durationMinutes": 4
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 30,
    "servings": 3,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 215,
      "protein": 7.8,
      "carbohydrates": 34,
      "fat": 5.5,
      "fiber": 3.5
    },
    "tips": [
      "Pongal me moong dal ki matra chawal ke barabar rakhein, isse ye high-protein aur low-carb ban jata hai."
    ],
    "precautions": [
      "Ghee Ka Dhyan Rakhein: Traditional recipe me ghee zyada hota hai, healthy version me 1-2 chammach ghee hi lagayein."
    ],
    "allergens": [
      "Dairy",
      "Tree Nuts",
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Easy Digestion",
      "Gut Friendly",
      "High Protein"
    ],
    "popularity": 95,
    "emoji": "🍚",
    "accentColor": "#eab308",
    "fayde": [
      {
        "title": "Ayurvedic Comfort Food",
        "description": "Moong dal aur chawal ka balance pet ko sukoon deta hai aur thakan mitata hai."
      },
      {
        "title": "Sabut Kaali Mirch Ka Fayda",
        "description": "Kaali mirch ke daane chew karne se pachan ras active hote hain aur gas nahi banti."
      }
    ],
    "tasteProfile": "Pighalta hua makkhan jaisa, desi ghee, sabut kaali mirch ka pop aur adrak ki garmi",
    "bestTimeToEat": "Subah nashte me.",
    "suitableFor": [
      "Post-illness recovery",
      "Elderly",
      "Students"
    ]
  },
  {
    "id": "bihari-baingan-chokha",
    "name": "Bihari Smoked Baingan Tamatar Chokha",
    "nameHindi": "बैंगन टमाटर चोखा",
    "description": "Charcoal-grilled eggplant, tomatoes & garlic mashed with cold-pressed mustard oil, green chilies & onions",
    "descriptionHindi": "Smoky, kache sarson tel ka jhanjhanata pungency, teekhi hari mirch aur roasted mithaas",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "East India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Bharta Baingan",
        "quantity": 1,
        "unit": "large roasted",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Pake Tamatar",
        "quantity": 2,
        "unit": "roasted on flame",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Lasan aur Hari Mirch (Flame roasted)",
        "quantity": 4,
        "unit": "cloves",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Barik Kata Pyaz",
        "quantity": 0.5,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Kacha Kachi Ghani Sarson Tel",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Sendha Namak & Hara Dhaniya",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Baingan, tamatar aur lasan ko gas ki aanch par chaaron taraf se chhilka kala hone tak bhun lein.",
        "durationMinutes": 3
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Thanda hone par chhilka utarein aur bowl me hath ya fork se mash karein.",
        "durationMinutes": 3
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Barik kata pyaz, hari mirch aur sendha namak milayein.",
        "durationMinutes": 3
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Upar se 1 chammach kacha sarson ka tel aur hara dhaniya dalkar mix karein.",
        "durationMinutes": 3
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Sattu paratha ya roti ke sath anand lein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 25,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 90,
      "protein": 2.5,
      "carbohydrates": 12,
      "fat": 3.5,
      "fiber": 4.5
    },
    "tips": [
      "Lasan ko baingan ke sath aag par bhunne se lasan ki acidity khatam ho jati hai aur swad meethi garlic jaisa ho jata hai."
    ],
    "precautions": [
      "Kache Tel Ka Teekha Pan: Jinhe kacha sarson tel na pasand ho wo thoda kam dalein ya halka garm kar ke dalein."
    ],
    "allergens": [
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Low Calorie",
      "Heart Healthy",
      "Weight Loss"
    ],
    "popularity": 92,
    "emoji": "🍆",
    "accentColor": "#581c87",
    "fayde": [
      {
        "title": "Zero Fry Traditional Food",
        "description": "Poora khana aag par bhun kar banta hai, koi processed oil ya frying nahi."
      },
      {
        "title": "Kacha Sarson Tel (MUFA)",
        "description": "Cold-pressed raw mustard oil me ALA omega-3 fatty acid hota hai jo dil ko bachata hai."
      }
    ],
    "tasteProfile": "Smoky, kache sarson tel ka jhanjhanata pungency, teekhi hari mirch aur roasted mithaas",
    "bestTimeToEat": "Lunch ya dinner.",
    "suitableFor": [
      "All age groups",
      "Weight loss"
    ]
  },
  {
    "id": "punjabi-missi-roti",
    "name": "Spiced Besan Missi Roti",
    "nameHindi": "पंजाबी मिस्सी रोटी",
    "description": "Nutritious flatbread combining Bengal gram flour and whole wheat seasoned with ajwain, onions & kasuri methi",
    "descriptionHindi": "Sondhi, kurkuri, ajwain aur kasuri methi ki dhamaakedar khushboo",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Rotis & Grains"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Besan (Gram flour)",
        "quantity": 0.75,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Gehun ka Atta",
        "quantity": 0.75,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Barik Kata Pyaz",
        "quantity": 0.25,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Ajwain, Kasuri Methi, Anardana",
        "quantity": 1,
        "unit": "tsp each",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Hari Mirch aur Hara Dhaniya",
        "quantity": 2,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Hing, Haldi, Namak",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Dono atte, pyaz, ajwain, kasuri methi aur masale milayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Gungune paani se thoda sakht aata goondein aur 10 minute rest dein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Roti belein aur lohe ke tave par sunehra sek lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Halka desi ghee lagayein aur dahi ya dal ke sath serve karein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 10,
    "cookTimeMinutes": 8,
    "totalTimeMinutes": 18,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 155,
      "protein": 6.8,
      "carbohydrates": 24,
      "fat": 3.2,
      "fiber": 4.8
    },
    "tips": [
      "Atta goondte samay 1 chammach dahi aur anardana powder dalne se missi roti behad khasta aur swadisht banti hai."
    ],
    "precautions": [
      "Sukhi Ban Sakti Hai: Bina acche se goonde roti sakht ho sakti hai, thoda dahi milakar goondein."
    ],
    "allergens": [
      "Gluten"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Diabetic Friendly",
      "Weight Loss"
    ],
    "popularity": 96,
    "emoji": "🫓",
    "accentColor": "#d97706",
    "fayde": [
      {
        "title": "Normal Roti Se Double Protein",
        "description": "Besan aur gehun ka 50-50 mix roti ko protein rich banata hai."
      },
      {
        "title": "Sugar Spike Control",
        "description": "Chane ka atta carbohydrates ke absorption ko dheema kar deta hai."
      }
    ],
    "tasteProfile": "Sondhi, kurkuri, ajwain aur kasuri methi ki dhamaakedar khushboo",
    "bestTimeToEat": "Lunch.",
    "suitableFor": [
      "Diabetics",
      "Bodybuilders",
      "Daily meal"
    ]
  },
  {
    "id": "maharashtrian-pithla",
    "name": "Zunka / Maharashtrian Pithla",
    "nameHindi": "झुणका / पिठलं",
    "description": "Quick rustic gram flour porridge tempered with mustard, garlic, green chilies & curry leaves",
    "descriptionHindi": "Gadha, masaledar, kache lasan aur rai-jeere ka authentic village flavor",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Besan",
        "quantity": 0.75,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Lasan (Koota hua)",
        "quantity": 8,
        "unit": "cloves",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Hari Mirch aur Kadi Patta",
        "quantity": 1,
        "unit": "tbsp",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Rai, Jeera, Hing, Haldi",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Sarson ka Tel ya Ghee",
        "quantity": 1,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Paani",
        "quantity": 2,
        "unit": "cups",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Besan ko 2 cup paani me haldi aur namak ke sath bina lumps ke ghol lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Kadhai me tel garm karke rai, jeera, koota lasan aur hari mirch tadkayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Besan ka ghol dalkar lagatar hilate rahein jab tak gadha na ho jaye.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Dhak kar 5 minute dhimi aanch par bhaap me pakayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-5",
        "stepNumber": 5,
        "title": "Step 5",
        "instruction": "Bhakri aur pyaz ke sath parosein.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 10,
    "totalTimeMinutes": 15,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 160,
      "protein": 8.2,
      "carbohydrates": 20,
      "fat": 4.8,
      "fiber": 4.5
    },
    "tips": [
      "Lasan ko peesne ki bajay okhli me koot kar dalein, isse Zunka ka traditional rustic swad 10 guna badh jata hai."
    ],
    "precautions": [
      "Lumps Na Banne Dein: Besan ko paani me pehle ghol kar dalein taaki gaanth na pade."
    ],
    "allergens": [
      "Dairy",
      "Gluten",
      "Mustard"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Gluten Free",
      "Easy Digestion"
    ],
    "popularity": 86,
    "emoji": "🍲",
    "accentColor": "#ea580c",
    "fayde": [
      {
        "title": "Jab Ghar Me Koi Sabzi Na Ho",
        "description": "5 minute me banne wala sabse takatwar protein aahar jo pachan me halka hota hai."
      },
      {
        "title": "Bhakri Ka Best Sathi",
        "description": "Jowar ya bajra roti ke sath complete amino-acid protein banata hai."
      }
    ],
    "tasteProfile": "Gadha, masaledar, kache lasan aur rai-jeere ka authentic village flavor",
    "bestTimeToEat": "Lunch ya dinner.",
    "suitableFor": [
      "Gluten free dieters",
      "Quick meals"
    ]
  },
  {
    "id": "gatte-ki-sabzi",
    "name": "Rajasthani Steamed Gatte Ki Sabzi",
    "nameHindi": "गट्टे की सब्जी",
    "description": "Steamed spiced gram flour dumplings simmered in a light probiotic curd gravy",
    "descriptionHindi": "Mulayam gatte, dahi ki khatas, saunf aur kasuri methi ki royal khushboo",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Besan",
        "quantity": 1,
        "unit": "cup",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Ajwain, Saunf, Kasuri Methi",
        "quantity": 1,
        "unit": "tsp each",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Taaza Dahi (Gravy ke liye)",
        "quantity": 1,
        "unit": "cup whisked",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Ghee",
        "quantity": 1,
        "unit": "tsp for dough moyan",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Dhaniya, Haldi, Lal Mirch, Namak",
        "quantity": 1.5,
        "unit": "tsp",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Besan me ajwain, namak, 1 chammach dahi aur 1 chammach ghee dalkar naram aata goondein.",
        "durationMinutes": 5
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Rolls banakar ubalte paani me 10 minute ubaalein (bubbles aane par nikaal kar kaat lein).",
        "durationMinutes": 5
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Kadhai me ghee garm karein, jeera aur hing tadkakar dahi aur masale dalein aur lagatar hilayein jab tak ubaal na aaye.",
        "durationMinutes": 5
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Katte hue gatte dalein aur 5-7 minute gravy me pakayein.",
        "durationMinutes": 5
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 20,
    "totalTimeMinutes": 35,
    "servings": 3,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 185,
      "protein": 8.5,
      "carbohydrates": 22,
      "fat": 6.2,
      "fiber": 4.2
    },
    "tips": [
      "Gatte ubalne ke baad bache hue paani ko fekein nahi, usi se dahi ki gravy banayein, gravy lajawab banegi."
    ],
    "precautions": [
      "Dahi Fatne Ka Risk: Dahi ki gravy me jab tak ubaal na aaye, lagatar chalana padta hai."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "High Protein",
      "Gluten Free",
      "Gut Friendly"
    ],
    "popularity": 80,
    "emoji": "🥘",
    "accentColor": "#d97706",
    "fayde": [
      {
        "title": "Zero Vegetable High Protein Curry",
        "description": "Desert climate ki anokhi sabzi jisme bina sabziyo ke bhi behtareen poshan milta hai."
      },
      {
        "title": "Steamed Dumplings",
        "description": "Gatte tale nahi jate, ubaale jate hain isliye calories control me rehti hain."
      }
    ],
    "tasteProfile": "Mulayam gatte, dahi ki khatas, saunf aur kasuri methi ki royal khushboo",
    "bestTimeToEat": "Lunch.",
    "suitableFor": [
      "Vegetarians",
      "Desert/Winter food lovers"
    ]
  },
  {
    "id": "amla-ginger-shot",
    "name": "Fresh Amla & Ginger Immunity Shorba",
    "nameHindi": "आँवला अदरक इम्युनिटी शॉट",
    "description": "Pure liquid sunshine: fresh Indian gooseberry juice crushed with spicy ginger, mint & honey",
    "descriptionHindi": "Khatta, astringent, peene ke baad gale me meetha ehsas aur taazgi",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    "region": "Pan India",
    "state": "Pan India",
    "cuisine": [
      "Indian",
      "Healthy"
    ],
    "category": [
      "Drinks & Raita"
    ],
    "mealTypes": [
      "Snack",
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan",
      "Jain"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Amla (Gooseberry)",
        "quantity": 3,
        "unit": "pieces chopped",
        "optional": false
      },
      {
        "id": "ing-2",
        "name": "Taaza Adrak",
        "quantity": 1,
        "unit": "inch piece",
        "optional": false
      },
      {
        "id": "ing-3",
        "name": "Pudina ke Patte",
        "quantity": 10,
        "unit": "leaves",
        "optional": false
      },
      {
        "id": "ing-4",
        "name": "Sendha Namak & Kala Namak",
        "quantity": 0.5,
        "unit": "tsp",
        "optional": false
      },
      {
        "id": "ing-5",
        "name": "Paani",
        "quantity": 1,
        "unit": "glass",
        "optional": false
      },
      {
        "id": "ing-6",
        "name": "Shahad (Honey)",
        "quantity": 1,
        "unit": "tsp optional",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Step 1",
        "instruction": "Amla ke beej nikaal kar tukde karein.",
        "durationMinutes": 2
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Step 2",
        "instruction": "Mixer me amla, adrak, pudina aur aadha glass paani dalkar pees lein.",
        "durationMinutes": 2
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Step 3",
        "instruction": "Chhalni se chhaan lein aur thoda aur paani milayein.",
        "durationMinutes": 2
      },
      {
        "id": "step-4",
        "stepNumber": 4,
        "title": "Step 4",
        "instruction": "Kala namak aur shahad dalkar subah fresh piyen.",
        "durationMinutes": 2
      }
    ],
    "prepTimeMinutes": 5,
    "cookTimeMinutes": 0,
    "totalTimeMinutes": 5,
    "servings": 2,
    "difficulty": "Easy",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 35,
      "protein": 0.8,
      "carbohydrates": 8,
      "fat": 0.2,
      "fiber": 1.5
    },
    "tips": [
      "Amla ka ras nikaal kar turant piyein, 30 minute se zyada rakhne par Vitamin C oxidize hone lagta hai."
    ],
    "precautions": [
      "Hyperacidity Alert: Extreme acidity walo ko khali pet lene ki jagah khane ke sath ya paani mila kar lena chahiye."
    ],
    "allergens": [],
    "festival": [
      "All Seasons"
    ],
    "tags": [
      "Immunity Booster",
      "Iron Rich",
      "Low Calorie",
      "Heart Healthy"
    ],
    "popularity": 86,
    "emoji": "🫒",
    "accentColor": "#16a34a",
    "fayde": [
      {
        "title": "Duniya Ka Sabse Bada Vitamin C Source",
        "description": "1 amla me 20 santro (oranges) ke barabar Vitamin C hota hai jo baalo, aankhon aur immunity ko naya janam deta hai."
      },
      {
        "title": "Anti-Aging & Collagen Builder",
        "description": "Twacha ki jhurriyan mitane aur liver ko clean karne me no. 1."
      }
    ],
    "tasteProfile": "Khatta, astringent, peene ke baad gale me meetha ehsas aur taazgi",
    "bestTimeToEat": "Subah khali pet.",
    "suitableFor": [
      "Immunity improvement",
      "Hair fall prevention",
      "Skin glow"
    ]
  },
  {
    "id": "amritsari-kulcha",
    "name": "Amritsari Aloo Kulcha",
    "nameHindi": "अमृतसरी कुलचा",
    "description": "Crispy layered tandoori flatbread stuffed with spiced potatoes and pomegranate seeds",
    "descriptionHindi": "मसालेदार आलू और अनारदाने से भरा खस्ता तंदूरी कुलचा, मक्खन और छोले के साथ",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Punjab",
    "cuisine": [
      "Punjabi",
      "North Indian"
    ],
    "category": [
      "Breakfast",
      "Main Course",
      "Street Food"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Gehu ka atta / Maida",
        "quantity": 2,
        "unit": "cup"
      },
      {
        "id": "ing-2",
        "name": "Ubla Aloo (Boiled Potato)",
        "quantity": 3,
        "unit": "piece"
      },
      {
        "id": "ing-3",
        "name": "Anardana powder",
        "quantity": 1,
        "unit": "tsp"
      },
      {
        "id": "ing-4",
        "name": "Hari mirch & Adrak",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "id": "ing-5",
        "name": "Makhan (Butter)",
        "quantity": 2,
        "unit": "tbsp"
      },
      {
        "id": "ing-6",
        "name": "Kasuri methi",
        "quantity": 1,
        "unit": "tsp"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Dough",
        "instruction": "Atta aur dahi gundh kar 30 minute rest ke liye rakhein.",
        "durationMinutes": 10
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Stuffing",
        "instruction": "Aloo mash karein aur anardana, hari mirch, kasuri methi aur namak milayein.",
        "durationMinutes": 5
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Baking",
        "instruction": "Kulche ko bel kar tandoor ya tawa par ghee/butter lagakar crispy sekein.",
        "durationMinutes": 10
      }
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 35,
    "servings": 2,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 340,
      "protein": 7,
      "carbohydrates": 52,
      "fat": 12,
      "fiber": 4.5
    },
    "tips": [
      "Aate me thoda dahi dalne se kulcha andar se soft aur bahar se flaky banta hai."
    ],
    "precautions": [
      "Makhan zyada hone se calories badhti hain, moderate matra me lein."
    ],
    "allergens": [
      "Gluten",
      "Dairy"
    ],
    "festival": [
      "Baisakhi",
      "Diwali",
      "Lohri"
    ],
    "tags": [
      "High Fiber",
      "Energy Booster"
    ],
    "popularity": 94,
    "emoji": "🫓",
    "accentColor": "#f97316"
  },
  {
    "id": "chettinad-chicken",
    "name": "Chettinad Pepper Chicken",
    "nameHindi": "चेत्तिनाड चिकन करी",
    "description": "Fiery Tamil Nadu chicken curry with freshly roasted peppercorns, star anise and coconut",
    "descriptionHindi": "काली मिर्च, स्टार अनीस और ताज़े नारियल के भुने मसालों में बनी तीखी चिकन करी",
    "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Tamil Nadu",
    "cuisine": [
      "Chettinad",
      "South Indian"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Non-Veg"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Chicken (Skinless)",
        "quantity": 500,
        "unit": "g"
      },
      {
        "id": "ing-2",
        "name": "Kali Mirch (Black Pepper)",
        "quantity": 2,
        "unit": "tbsp"
      },
      {
        "id": "ing-3",
        "name": "Nariyal (Grated Coconut)",
        "quantity": 0.5,
        "unit": "cup"
      },
      {
        "id": "ing-4",
        "name": "Curry Patta (Curry leaves)",
        "quantity": 15,
        "unit": "leaves"
      },
      {
        "id": "ing-5",
        "name": "Chhoti pyaz (Shallots)",
        "quantity": 1,
        "unit": "cup"
      },
      {
        "id": "ing-6",
        "name": "Saunf aur Dalchini",
        "quantity": 1,
        "unit": "tsp"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Roast Masala",
        "instruction": "Kali mirch, saunf, dalchini aur nariyal ko dry roast karke paste banayein.",
        "durationMinutes": 8
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Sauté",
        "instruction": "Tel me curry patta aur shallots ko golden hone tak bhoonein.",
        "durationMinutes": 7
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Simmer",
        "instruction": "Chicken aur masala paste milakar dhak kar 20 minute pakayein.",
        "durationMinutes": 20
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 25,
    "totalTimeMinutes": 40,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Extra Spicy",
    "nutrition": {
      "calories": 310,
      "protein": 32,
      "carbohydrates": 8,
      "fat": 16,
      "fiber": 3
    },
    "tips": [
      "Taazi pisi kali mirch ka use karein, powder ka nahi."
    ],
    "precautions": [
      "Bahut teekha hota hai, acidity ki samasya me kali mirch kam karein."
    ],
    "allergens": [],
    "festival": [
      "Pongal",
      "Family Feast"
    ],
    "tags": [
      "High Protein",
      "Immunity Booster"
    ],
    "popularity": 96,
    "emoji": "🍗",
    "accentColor": "#dc2626"
  },
  {
    "id": "darjeeling-momos",
    "name": "Steamed Vegetable Momos",
    "nameHindi": "दार्जिलिंग मोमोज",
    "description": "Delicate thin-wrapper steamed dumplings filled with finely chopped cabbage, carrots, ginger and scallions",
    "descriptionHindi": "पत्तागोभी, गाजर और अदरक से भरे भाप में पके हुए स्वादिष्ट पहाड़ी मोमोज",
    "image": "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800&auto=format&fit=crop&q=80",
    "region": "Northeast India",
    "state": "Sikkim",
    "cuisine": [
      "Tibetan",
      "Northeast Indian"
    ],
    "category": [
      "Snacks & Chaat",
      "Street Food"
    ],
    "mealTypes": [
      "Snack",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Pattagobi (Cabbage)",
        "quantity": 2,
        "unit": "cup"
      },
      {
        "id": "ing-2",
        "name": "Gajar (Carrot grated)",
        "quantity": 1,
        "unit": "cup"
      },
      {
        "id": "ing-3",
        "name": "Adrak-Lehsun (Ginger-Garlic)",
        "quantity": 2,
        "unit": "tbsp"
      },
      {
        "id": "ing-4",
        "name": "Maida / Whole wheat wrapper",
        "quantity": 1.5,
        "unit": "cup"
      },
      {
        "id": "ing-5",
        "name": "Hari Mirch & Pyaz ke patte",
        "quantity": 2,
        "unit": "tbsp"
      },
      {
        "id": "ing-6",
        "name": "Til ka tel (Sesame oil)",
        "quantity": 1,
        "unit": "tsp"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Wrapper",
        "instruction": "Maida ko soft gundhein aur patli goliyan bel lein.",
        "durationMinutes": 12
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Filling",
        "instruction": "Barik kati sabziyon ka paani nichod kar adrak, namak aur til ka tel milayein.",
        "durationMinutes": 8
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Steam",
        "instruction": "Pleat karke momo steamer me 10-12 minute bhaap me pakayein.",
        "durationMinutes": 12
      }
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 12,
    "totalTimeMinutes": 32,
    "servings": 3,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 175,
      "protein": 5.2,
      "carbohydrates": 34,
      "fat": 2.1,
      "fiber": 4.8
    },
    "tips": [
      "Whole wheat flour ka wrapper use karne se momos aur bhi fiber-rich bante hain."
    ],
    "precautions": [
      "Teekhi lal mirch chutney acidity kar sakti hai, kam matra me lein."
    ],
    "allergens": [
      "Gluten"
    ],
    "festival": [
      "Losar",
      "Winter Fest"
    ],
    "tags": [
      "Low Calorie",
      "Less Oil",
      "High Fiber"
    ],
    "popularity": 98,
    "emoji": "🥟",
    "accentColor": "#10b981"
  },
  {
    "id": "bengali-rasgulla",
    "name": "Kolkata Spongy Rosogolla",
    "nameHindi": "कोलकाता रसगुल्ला",
    "description": "Melt-in-mouth spongy fresh chhena cottage cheese balls simmered in light fragrant cardamom syrup",
    "descriptionHindi": "शुद्ध ताज़ा छेना से बने नरम रसगुल्ले, इलायची की हल्की मीठी चाशनी में डूबे हुए",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
    "region": "East India",
    "state": "West Bengal",
    "cuisine": [
      "Bengali",
      "East Indian"
    ],
    "category": [
      "Healthy Desserts"
    ],
    "mealTypes": [
      "Dessert"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Taaza Cow Milk (Chhena)",
        "quantity": 1,
        "unit": "L"
      },
      {
        "id": "ing-2",
        "name": "Nimbu ka Ras (Lemon Juice)",
        "quantity": 2,
        "unit": "tbsp"
      },
      {
        "id": "ing-3",
        "name": "Cheeni / Desi Khand",
        "quantity": 1.5,
        "unit": "cup"
      },
      {
        "id": "ing-4",
        "name": "Elaichi (Cardamom pods)",
        "quantity": 4,
        "unit": "piece"
      },
      {
        "id": "ing-5",
        "name": "Gulab Jal (Rose water)",
        "quantity": 0.5,
        "unit": "tsp"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Chhena",
        "instruction": "Doodh ubaal kar nimbu ras dalein aur chhena alag karke saaf kapde me baandhein.",
        "durationMinutes": 15
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Knead",
        "instruction": "Chhena ko hath ki hatheli se 8-10 minute mal kar bilkul smooth karein aur gol balls banayein.",
        "durationMinutes": 10
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Boil",
        "instruction": "Patli chashni me tez aanch par 15 minute ubaalein jab tak spongy na ho jayein.",
        "durationMinutes": 15
      }
    ],
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 15,
    "totalTimeMinutes": 40,
    "servings": 6,
    "difficulty": "Hard",
    "spiceLevel": "Mild",
    "nutrition": {
      "calories": 125,
      "protein": 4.8,
      "carbohydrates": 22,
      "fat": 2.2,
      "fiber": 0
    },
    "tips": [
      "Gaye ka doodh use karein jisse rasgulla bilkul spongy aur soft bane."
    ],
    "precautions": [
      "Diabetic patients ko chashni nichod kar khana chahiye ya limit karein."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "Durga Puja",
      "Diwali",
      "Kali Puja"
    ],
    "tags": [
      "High Protein",
      "Calcium Rich"
    ],
    "popularity": 97,
    "emoji": "⚪",
    "accentColor": "#0284c7"
  },
  {
    "id": "mumbai-vada-pav",
    "name": "Mumbai Aloo Vada Pav",
    "nameHindi": "मुंबई वड़ा पाव",
    "description": "The iconic street burger of Mumbai — spiced potato fritter in fresh pav with fiery garlic chutney",
    "descriptionHindi": "राई, कढ़ी पत्ता और हल्दी वाले आलू के वड़े, सूखे लहसुन की लाल चटनी और नरम पाव के साथ",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Maharashtra",
    "cuisine": [
      "Maharashtrian",
      "West Indian"
    ],
    "category": [
      "Snacks & Chaat",
      "Street Food",
      "Breakfast"
    ],
    "mealTypes": [
      "Snack",
      "Breakfast"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Ubla Aloo",
        "quantity": 4,
        "unit": "piece"
      },
      {
        "id": "ing-2",
        "name": "Besan (Gram flour)",
        "quantity": 1,
        "unit": "cup"
      },
      {
        "id": "ing-3",
        "name": "Pav (Buns)",
        "quantity": 4,
        "unit": "piece"
      },
      {
        "id": "ing-4",
        "name": "Sookhi Lehsun Chutney",
        "quantity": 3,
        "unit": "tbsp"
      },
      {
        "id": "ing-5",
        "name": "Rai, Kadi patta & Haldi",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "id": "ing-6",
        "name": "Hari Mirch & Adrak",
        "quantity": 1,
        "unit": "tbsp"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Potato Mix",
        "instruction": "Rai aur kadi patte ke tadke me uble aloo, haldi aur namak milakar balls banayein.",
        "durationMinutes": 10
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Batter & Fry",
        "instruction": "Besan ke batter me dip karke air-fryer ya golden crisp fry karein.",
        "durationMinutes": 10
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Assemble",
        "instruction": "Pav ko beech se kaat kar teekhi lehsun chutney lagayein aur vada dabayein.",
        "durationMinutes": 3
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 12,
    "totalTimeMinutes": 27,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Spicy",
    "nutrition": {
      "calories": 290,
      "protein": 7.5,
      "carbohydrates": 46,
      "fat": 8.5,
      "fiber": 4
    },
    "tips": [
      "Air fryer me 180°C par 12 minute bake karke 70% tel kam kiya ja sakta hai."
    ],
    "precautions": [
      "Roz deep-fried vada khane se bachein."
    ],
    "allergens": [
      "Gluten"
    ],
    "festival": [
      "Ganesh Chaturthi",
      "Monsoon Snack"
    ],
    "tags": [
      "Energy Booster"
    ],
    "popularity": 99,
    "emoji": "🍔",
    "accentColor": "#e11d48"
  },
  {
    "id": "rajasthani-dal-baati-churma",
    "name": "Royal Dal Baati Churma",
    "nameHindi": "दाल बाटी चूरमा",
    "description": "Hard wheat dumplings baked over coals, crushed and served with panchmel dal and sweet jaggery churma",
    "descriptionHindi": "पारंपरिक पंचमेल दाल, शुद्ध घी में डूबी बाटी और गुड़ से बना स्वादिष्ट चूरमा",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Rajasthan",
    "cuisine": [
      "Rajasthani",
      "North Indian"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Gehu ka mota atta",
        "quantity": 2,
        "unit": "cup"
      },
      {
        "id": "ing-2",
        "name": "Panchmel Dal (5 lentil mix)",
        "quantity": 1,
        "unit": "cup"
      },
      {
        "id": "ing-3",
        "name": "Desi Ghee",
        "quantity": 4,
        "unit": "tbsp"
      },
      {
        "id": "ing-4",
        "name": "Gud / Jaggery powder",
        "quantity": 0.5,
        "unit": "cup"
      },
      {
        "id": "ing-5",
        "name": "Ajwain aur Saunf",
        "quantity": 1,
        "unit": "tsp"
      },
      {
        "id": "ing-6",
        "name": "Hing, Jeera & Haldi",
        "quantity": 1,
        "unit": "tsp"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Baati Dough",
        "instruction": "Mote aate me ajwain, ghee aur namak dalkar sakht gundhein aur gol baati banayein.",
        "durationMinutes": 15
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Bake Baati",
        "instruction": "Baati oven ya tandoor me 200°C par 25 minute sunehri crisp bake karein.",
        "durationMinutes": 25
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Dal & Churma",
        "instruction": "Panchmel dal me hing-jeera tadka lagayein aur 2 baati ko tod kar gud-ghee me churma banayein.",
        "durationMinutes": 15
      }
    ],
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 30,
    "totalTimeMinutes": 55,
    "servings": 4,
    "difficulty": "Hard",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 480,
      "protein": 16,
      "carbohydrates": 68,
      "fat": 18,
      "fiber": 9
    },
    "tips": [
      "Baati ko fry karne ki jagah traditional oven me dry bake karein aur thoda ghee upar se dalein."
    ],
    "precautions": [
      "Bhojan kafi rich hai, isliye dopahar ke samay khana behtar hai."
    ],
    "allergens": [
      "Gluten",
      "Dairy"
    ],
    "festival": [
      "Diwali",
      "Holi",
      "Teej"
    ],
    "tags": [
      "High Protein",
      "High Fiber"
    ],
    "popularity": 96,
    "emoji": "🔴",
    "accentColor": "#b91c1c"
  },
  {
    "id": "kashmiri-rogan-josh",
    "name": "Kashmiri Mutton Rogan Josh",
    "nameHindi": "कश्मीरी रोगन जोश",
    "description": "Aromatic slow-cooked tender meat curry infused with Kashmiri red chillies, fennel powder and dried ginger",
    "descriptionHindi": "कश्मीरी मिर्च, सौंठ और सौंफ के सुगंधित मसालों में धीमी आंच पर पका मटन",
    "image": "https://images.unsplash.com/photo-1545247181-516773cae754?w=800&auto=format&fit=crop&q=80",
    "region": "North India",
    "state": "Kashmir",
    "cuisine": [
      "Kashmiri",
      "North Indian"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Dinner",
      "Lunch"
    ],
    "diet": [
      "Non-Veg"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Mutton pieces",
        "quantity": 500,
        "unit": "g"
      },
      {
        "id": "ing-2",
        "name": "Kashmiri Lal Mirch powder",
        "quantity": 2,
        "unit": "tbsp"
      },
      {
        "id": "ing-3",
        "name": "Saunf powder (Fennel)",
        "quantity": 1.5,
        "unit": "tbsp"
      },
      {
        "id": "ing-4",
        "name": "Sonth (Dry ginger powder)",
        "quantity": 1,
        "unit": "tsp"
      },
      {
        "id": "ing-5",
        "name": "Hing aur Chhoti Elaichi",
        "quantity": 1,
        "unit": "tsp"
      },
      {
        "id": "ing-6",
        "name": "Sarson ka tel",
        "quantity": 3,
        "unit": "tbsp"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Sear Meat",
        "instruction": "Sarson tel dhuan uthne tak garm karein aur mutton ko golden sear karein.",
        "durationMinutes": 10
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Kashmiri Color",
        "instruction": "Lal mirch ko thode paani me ghol kar dalein jisse chamakdaar lal rang aaye.",
        "durationMinutes": 5
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Slow Simmer",
        "instruction": "Saunf, sonth aur hing dalkar dhimi aanch par 40 minute pakayein jab tak gosht naram na ho.",
        "durationMinutes": 40
      }
    ],
    "prepTimeMinutes": 15,
    "cookTimeMinutes": 50,
    "totalTimeMinutes": 65,
    "servings": 4,
    "difficulty": "Hard",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 360,
      "protein": 34,
      "carbohydrates": 4,
      "fat": 22,
      "fiber": 2
    },
    "tips": [
      "Traditional Wazwan style me pyaz-tamatar nahi balki saunf aur hing ka use hota hai."
    ],
    "precautions": [
      "Red meat me saturated fat zyada hota hai, portion control rakhein."
    ],
    "allergens": [
      "Mustard"
    ],
    "festival": [
      "Eid",
      "Wazwan Feast"
    ],
    "tags": [
      "High Protein",
      "Iron Rich"
    ],
    "popularity": 95,
    "emoji": "🍖",
    "accentColor": "#991b1b"
  },
  {
    "id": "gujarati-undhiyu",
    "name": "Traditional Surti Undhiyu",
    "nameHindi": "पारंपरिक सूरती उंधियू",
    "description": "Rich winter pot casserole of seasonal greens, purple yam, sweet potato, raw banana and fenugreek muthias",
    "descriptionHindi": "सर्दियों की ताज़ा पापड़ी, रतालू, शकरकंद और मेथी मुठिया से बनी गुजराती खास डिश",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
    "region": "West India",
    "state": "Gujarat",
    "cuisine": [
      "Gujarati",
      "West Indian"
    ],
    "category": [
      "Main Course"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian",
      "Vegan"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Surti Papdi (Flat beans)",
        "quantity": 200,
        "unit": "g"
      },
      {
        "id": "ing-2",
        "name": "Ratalu (Purple yam)",
        "quantity": 150,
        "unit": "g"
      },
      {
        "id": "ing-3",
        "name": "Kaccha Kela (Raw banana)",
        "quantity": 1,
        "unit": "piece"
      },
      {
        "id": "ing-4",
        "name": "Methi Muthiya",
        "quantity": 8,
        "unit": "piece"
      },
      {
        "id": "ing-5",
        "name": "Hari mirch, Lehsun & Nariyal",
        "quantity": 3,
        "unit": "tbsp"
      },
      {
        "id": "ing-6",
        "name": "Til aur Ajwain",
        "quantity": 1,
        "unit": "tbsp"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Prepare Greens",
        "instruction": "Papdi ko cheel kar saaf karein aur ratalu-kele ke tukde karein.",
        "durationMinutes": 15
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Green Masala",
        "instruction": "Hara dhaniya, hari mirch, taaza nariyal aur til ka paste banayein.",
        "durationMinutes": 10
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Dum Cook",
        "instruction": "Kadhai me sabziyan, green masala aur muthiya layer karke dhimi aanch par 25 minute dum karein.",
        "durationMinutes": 25
      }
    ],
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 30,
    "totalTimeMinutes": 55,
    "servings": 4,
    "difficulty": "Hard",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 280,
      "protein": 8,
      "carbohydrates": 42,
      "fat": 9,
      "fiber": 11
    },
    "tips": [
      "Muthiya ko deep fry karne ke badle steam karne se dish bilkul healthy rehti hai."
    ],
    "precautions": [
      "Suran aur papdi ko dhang se pakayein jisse gale me kharash na ho."
    ],
    "allergens": [],
    "festival": [
      "Makar Sankranti",
      "Uttarayan"
    ],
    "tags": [
      "High Fiber",
      "Gut Friendly",
      "Immunity Booster"
    ],
    "popularity": 94,
    "emoji": "🥕",
    "accentColor": "#15803d"
  },
  {
    "id": "hyderabadi-biryani",
    "name": "Hyderabadi Veg Dum Biryani",
    "nameHindi": "हैदराबादी दम बिरयानी",
    "description": "Royal fragrant basmati rice layered with saffron, mint, fried onions and marinated vegetables cooked under sealed dum",
    "descriptionHindi": "केसर, पुदीना, भुने प्याज और मसालों में मैरीनेटेड सब्जियों से बनी शाही दम बिरयानी",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    "region": "South India",
    "state": "Andhra Pradesh",
    "cuisine": [
      "Hyderabadi",
      "South Indian"
    ],
    "category": [
      "Main Course",
      "Rotis & Grains"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "diet": [
      "Vegetarian"
    ],
    "ingredients": [
      {
        "id": "ing-1",
        "name": "Long grain Basmati Chawal",
        "quantity": 2,
        "unit": "cup"
      },
      {
        "id": "ing-2",
        "name": "Mix Sabziyan (Gajar, Beans, Paneer)",
        "quantity": 2,
        "unit": "cup"
      },
      {
        "id": "ing-3",
        "name": "Dahi (Yogurt)",
        "quantity": 0.5,
        "unit": "cup"
      },
      {
        "id": "ing-4",
        "name": "Birista (Golden onions)",
        "quantity": 0.5,
        "unit": "cup"
      },
      {
        "id": "ing-5",
        "name": "Kesar wala doodh",
        "quantity": 3,
        "unit": "tbsp"
      },
      {
        "id": "ing-6",
        "name": "Shahi Biryani Masala & Pudina",
        "quantity": 2,
        "unit": "tbsp"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "stepNumber": 1,
        "title": "Rice Boil",
        "instruction": "Chawal ko khade masalon ke saath 70% tak ubaal lein aur chhan lein.",
        "durationMinutes": 12
      },
      {
        "id": "step-2",
        "stepNumber": 2,
        "title": "Marinate Veggies",
        "instruction": "Sabziyon aur paneer ko dahi, biryani masale aur pudine me 20 minute marinate karein.",
        "durationMinutes": 20
      },
      {
        "id": "step-3",
        "stepNumber": 3,
        "title": "Dum Layering",
        "instruction": "Handi me sabzi aur chawal ki layer lagayein, kesar-pudina dalein aur aate se seal karke 20 minute dum dein.",
        "durationMinutes": 20
      }
    ],
    "prepTimeMinutes": 25,
    "cookTimeMinutes": 30,
    "totalTimeMinutes": 55,
    "servings": 4,
    "difficulty": "Medium",
    "spiceLevel": "Medium",
    "nutrition": {
      "calories": 340,
      "protein": 9.5,
      "carbohydrates": 58,
      "fat": 7.5,
      "fiber": 5
    },
    "tips": [
      "Chawal ko overcook na karein; 70% par chhanne se daana khila-khila rehta hai."
    ],
    "precautions": [
      "Bhojan heavy ho sakta hai, saath me cucumber raita serve karein."
    ],
    "allergens": [
      "Dairy"
    ],
    "festival": [
      "Eid",
      "Diwali",
      "Family Feast"
    ],
    "tags": [
      "Balanced Meal"
    ],
    "popularity": 99,
    "emoji": "🍚",
    "accentColor": "#d97706"
  }
];

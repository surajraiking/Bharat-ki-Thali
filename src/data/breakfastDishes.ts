import { Dish } from '../types';

export const breakfastDishes: Dish[] = [
  {
    id: 'poha',
    name: 'Kanda Batata Poha',
    hindiName: 'कांदा पोहा',
    category: 'Breakfast',
    region: 'West India',
    tagline: 'Aromatic flattened rice with mustard, turmeric, crunchy peanuts & lemon',
    tasteProfile: 'Khatta-meetha, halka masaledar, crunchy mungfali aur kadi patte ka swad',
    healthTags: ['Weight Loss', 'Easy Digestion', 'Iron Rich', 'Low Calorie'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    baseServings: 2,
    calories: 180,
    macros: { proteinGrams: 4.5, carbsGrams: 32, fatGrams: 4.2, fiberGrams: 3.1 },
    fayde: [
      { title: 'Iron Ka Behtareen Srot', description: 'Chivda (flaked rice) banate waqt iron rollers se guzarta hai, jisse anemia dur karne me madad milti hai.' },
      { title: 'Halka Aur Pachan Me Aasan', description: 'Pet par bilkul halka hota hai, acidity ya heaviness nahi karta.' },
      { title: 'Probiotic Gun', description: 'Poha fermentation process se banta hai, jo gut microbiome ke liye faydemand hai.' },
      { title: 'Sustained Energy', description: 'Healthy carbohydrates aur peanuts se healthy fats milte hain jo lambe samay tak bhukh nahi lagne dete.' }
    ],
    nuksan: [
      { title: 'Sugar Spike Ka Dhyan', description: 'High glycemic index hota hai; diabetes ke mariz isme pyaz, matar aur sprouts zyada milayein.' },
      { title: 'Tel aur Aloo ki Matra', description: 'Zyada tel ya tala hua aloo dalne se calories badh jati hain. Kam tel me banayein.' }
    ],
    ingredients: [
      { item: 'Poha (Mota chivda)', quantity: 1.5, unit: 'cup', notes: 'Wash & drain well' },
      { item: 'Pyaz (Onion)', quantity: 1, unit: 'medium', notes: 'Finely chopped' },
      { item: 'Mungfali (Peanuts)', quantity: 2, unit: 'tbsp', notes: 'Roasted or raw' },
      { item: 'Rai (Mustard seeds)', quantity: 0.5, unit: 'tsp' },
      { item: 'Kadi Patta (Curry leaves)', quantity: 8, unit: 'leaves' },
      { item: 'Hari Mirch (Green chili)', quantity: 2, unit: 'finely chopped' },
      { item: 'Haldi (Turmeric)', quantity: 0.5, unit: 'tsp' },
      { item: 'Nimbu ka Ras (Lemon juice)', quantity: 1, unit: 'tbsp' },
      { item: 'Hara Dhaniya (Fresh cilantro)', quantity: 2, unit: 'tbsp' },
      { item: 'Sarson ka tel ya desi ghee', quantity: 1, unit: 'tsp' },
      { item: 'Namak (Rock salt)', quantity: 0.75, unit: 'tsp' }
    ],
    instructions: [
      'Pohe ko chhalni me dalkar 1 baar paani se dho lein aur 5 minute nitharane ke liye rakh dein.',
      'Kadhai me 1 chammach tel garm karein aur mungfali ko crispy hone tak bhun lein.',
      'Usi tel me rai, kadi patta aur hari mirch daal kar chatakne dein.',
      'Katta hua pyaz dalein aur halka gulabi hone tak bhoonein.',
      'Haldi aur namak milayein, fir bhiga hua poha aur bhuni mungfali dalkar dhimi aanch par 2-3 minute milayein.',
      'Aanch band karein, taaza nimbu ka ras aur hara dhaniya dalkar garma-garam serve karein.'
    ],
    expertHealthyTip: 'Pohe me uble hue hare matar, gajar ya moong sprouts milane se iska protein aur fiber do guna ho jata hai.',
    bestTimeToEat: 'Subah 7 se 9 baje ke beech nashte me.',
    suitableFor: ['Bache', 'Gym lovers', 'Weight loss aspirants', 'Buzurg'],
    emoji: '🥣',
    accentColor: '#eab308'
  },
  {
    id: 'moong-dal-chilla',
    name: 'Moong Dal Paneer Chilla',
    hindiName: 'मूँग दाल चिल्ला',
    category: 'Breakfast',
    region: 'North India',
    tagline: 'Golden savory crepe made from yellow moong dal stuffed with grated paneer',
    tasteProfile: 'Crispy kinare, mulayam center, jeera aur hing ki mast sugandh',
    healthTags: ['High Protein', 'Weight Loss', 'Diabetic Friendly', 'Easy Digestion'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    baseServings: 2,
    calories: 165,
    macros: { proteinGrams: 11.5, carbsGrams: 18, fatGrams: 4.8, fiberGrams: 4.2 },
    fayde: [
      { title: 'Plant Protein Ka Powerhouse', description: '1 chille me lagbhag 10-12g pure protein milta hai jo muscle repair aur weight loss me best hai.' },
      { title: 'Diabetic Friendly', description: 'Low glycemic index hone ke karan blood sugar ko achanak badhne nahi deta.' },
      { title: 'Aasan Pachan', description: 'Moong dal sabhi dalo me sabse aasan pachan wali maani jati hai.' },
      { title: 'Skin & Hair Health', description: 'Folate, zinc aur B-vitamins baalo aur twacha ko chamakdar banate hain.' }
    ],
    nuksan: [
      { title: 'Kacha Batter Mat Khayein', description: 'Batter ko acche se pakayein, kachi dal se pet me gas ho sakti hai.' },
      { title: 'Uric Acid Alert', description: 'Jinhe high uric acid ki samasya ho, wo rozana dal ka chilla lene se bachein.' }
    ],
    ingredients: [
      { item: 'Peeli Moong Dal (Soaked 2-3 hrs)', quantity: 1, unit: 'cup' },
      { item: 'Adrak (Ginger)', quantity: 1, unit: 'inch piece' },
      { item: 'Hari Mirch (Green chili)', quantity: 1, unit: 'piece' },
      { item: 'Hing (Asafoetida)', quantity: 1, unit: 'pinch', notes: 'For digestion' },
      { item: 'Jeera (Cumin seeds)', quantity: 0.5, unit: 'tsp' },
      { item: 'Taaza Paneer (Grated)', quantity: 50, unit: 'grams', notes: 'For stuffing' },
      { item: 'Ghee ya Olive Oil', quantity: 0.5, unit: 'tsp' },
      { item: 'Namak (Sendha namak)', quantity: 0.75, unit: 'tsp' }
    ],
    instructions: [
      'Bhigoyi hui moong dal ko adrak aur hari mirch ke sath mixer me pees kar smooth batter bana lein.',
      'Batter me jeera, hing, hara dhaniya aur namak mila kar 5 minute phant lein.',
      'Non-stick tave ko halka sa ghee laga kar garm karein.',
      'Ek karchhi batter tave par dalkar gol dosa ki tarah failayein.',
      'Dhimi aanch par dono taraf crispy hone tak sekein.',
      'Center me grated paneer aur chaat masala dalkar roll karein aur pudina chutney ke sath khayein.'
    ],
    expertHealthyTip: 'Dal peeste waqt 1 mutthi palak ya methi dal dein, isse green high-iron chilla ban jayega.',
    bestTimeToEat: 'Subah ka nashta ya sham ka light dinner.',
    suitableFor: ['Diabetics', 'Gym goers', 'Weight loss diet', 'Vegetarians'],
    emoji: '🥞',
    accentColor: '#10b981'
  },
  {
    id: 'oats-idli',
    name: 'Vegetable Oats Idli',
    hindiName: 'ओट्स वेजीटेबल इडली',
    category: 'Breakfast',
    region: 'South India',
    tagline: 'Steamed fluffy cakes of roasted oats, carrots & yogurt tempered with mustard',
    tasteProfile: 'Soft, spongy, dahi ka halka khatta swad aur gajar-kaju ka crunch',
    healthTags: ['Heart Healthy', 'Weight Loss', 'Diabetic Friendly', 'Low Calorie'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    baseServings: 2,
    calories: 140,
    macros: { proteinGrams: 5.2, carbsGrams: 22, fatGrams: 3.1, fiberGrams: 4.8 },
    fayde: [
      { title: 'Cholesterol Kam Karta Hai', description: 'Oats me Beta-Glucan fiber hota hai jo kharab LDL cholesterol ko tezi se kam karta hai.' },
      { title: 'Zero Oil Steamed Food', description: 'Bina tel ke bhaap me pakti hai, isliye dil ke marizo ke liye behtareen hai.' },
      { title: 'High Soluble Fiber', description: 'Kabz (constipation) ko dur karta hai aur pet ghanto tak bhara rakhta hai.' }
    ],
    nuksan: [
      { title: 'Gluten Sensitivity', description: 'Jinhe severe celiac disease ho, unhe certified gluten-free oats use karna chahiye.' },
      { title: 'Baking Soda Ka Seemit Upyog', description: 'Zyada eno ya soda na dalein, dahi se hi natural khameer banayein.' }
    ],
    ingredients: [
      { item: 'Rolled Oats (Dry roasted & powdered)', quantity: 1, unit: 'cup' },
      { item: 'Suji / Rava (Roasted)', quantity: 0.25, unit: 'cup' },
      { item: 'Dahi (Low-fat curd)', quantity: 0.75, unit: 'cup' },
      { item: 'Gajar (Grated carrot)', quantity: 0.5, unit: 'cup' },
      { item: 'Rai aur Kadi Patta', quantity: 1, unit: 'tsp', notes: 'For tempering' },
      { item: 'Namak', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Oats ko halka bhun kar mixer me mota pees lein.',
      'Ek bowl me oats powder, thodi suji, dahi aur namak milakar 10 minute rest dein.',
      'Grated gajar aur rai-kadi patta ka tadka milayein.',
      'Idli stand me batter dalkar 10-12 minute steam karein.',
      'Nariyal ya tamatar ki chutney ke sath serve karein.'
    ],
    expertHealthyTip: 'Idli me roasted flaxseed (alsi) powder milane se Omega-3 fatty acids badh jate hain.',
    bestTimeToEat: 'Subah 8 baje nashte me.',
    suitableFor: ['Heart patients', 'Weight watchers', 'Senior citizens'],
    emoji: '🥟',
    accentColor: '#059669'
  },
  {
    id: 'ragi-dosa',
    name: 'Crispy Ragi Dosa (Finger Millet)',
    hindiName: 'रागी डोसा',
    category: 'Breakfast',
    region: 'South India',
    tagline: 'Ancient millet crispy crepe packed with bone-strengthening calcium',
    tasteProfile: 'Nutty, earth-rich, bahar se bilkul karara aur andar se light',
    healthTags: ['Calcium Rich', 'Gluten Free', 'Diabetic Friendly', 'Weight Loss'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    baseServings: 2,
    calories: 155,
    macros: { proteinGrams: 4.8, carbsGrams: 28, fatGrams: 2.5, fiberGrams: 5.2 },
    fayde: [
      { title: 'Calcium Ka Khazana', description: 'Ragi me kisi bhi anya anaj se 3 guna zyada calcium hota hai, jo haddiyo aur daanto ko mazboot karta hai.' },
      { title: 'Natural Weight Loss', description: 'Tryptophan amino acid bhukh ko control karta hai aur charbi galane me madad karta hai.' },
      { title: 'Anemia Se Bachav', description: 'Ragi natural iron se bharpoor hai jo hemoglobin ko boost karta hai.' }
    ],
    nuksan: [
      { title: 'Kidney Stone Rogi Savdhan', description: 'Ragi me oxalates hote hain, jinhe kidney stone ho wo doctor ki salah par lein.' },
      { title: 'Sardi me Zyada Thanda', description: 'Ragi ki taseer thandi mani jati hai, thand ke mausam me sonth ya adrak dalkar khayein.' }
    ],
    ingredients: [
      { item: 'Ragi Atta (Finger millet flour)', quantity: 1, unit: 'cup' },
      { item: 'Chawal ka atta ya suji', quantity: 2, unit: 'tbsp', notes: 'For crispiness' },
      { item: 'Chaas (Buttermilk)', quantity: 1, unit: 'cup' },
      { item: 'Pyaz, Hari Mirch, Adrak', quantity: 2, unit: 'tbsp', notes: 'Barik kata hua' },
      { item: 'Jeera aur Kadi Patta', quantity: 1, unit: 'tsp' },
      { item: 'Namak', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Ragi atta, thoda rice flour, chaas, paani aur namak milakar patla batter banayein.',
      'Katta pyaz, hari mirch, kadi patta aur jeera batter me milayein.',
      'Garm tave par bahar se andar ki taraf patla failayein.',
      'Dono taraf kurkura hone tak sekein.'
    ],
    expertHealthyTip: 'Ragi batter ko lohe ke tave par pakane se iron absorption aur badh jata hai.',
    bestTimeToEat: 'Nashta ya light lunch.',
    suitableFor: ['Women', 'Kids', 'Athletes', 'Diabetics'],
    emoji: '🥞',
    accentColor: '#92400e'
  },
  {
    id: 'methi-thepla',
    name: 'Gujarati Methi Thepla',
    hindiName: 'मेथी थेपला',
    category: 'Breakfast',
    region: 'West India',
    tagline: 'Soft spiced whole wheat flatbread layered with fresh fenugreek leaves',
    tasteProfile: 'Methi ki halki karwahat ke sath til, dahi aur ajwain ka lajawab sangam',
    healthTags: ['Easy Digestion', 'Diabetic Friendly', 'Gut Friendly'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    baseServings: 3,
    calories: 130,
    macros: { proteinGrams: 3.8, carbsGrams: 21, fatGrams: 3.5, fiberGrams: 3.2 },
    fayde: [
      { title: 'Blood Sugar Control', description: 'Methi me 4-hydroxyisoleucine hota hai jo insulin secretion ko sudharta hai.' },
      { title: 'Aasan Safar Snack', description: 'Bina kharab hue 2-3 din chalta hai aur pet kharab nahi hone deta.' },
      { title: 'Joint Pain Me Rahat', description: 'Methi ke anti-inflammatory tatva jodo ke dard me labhdayak hain.' }
    ],
    nuksan: [
      { title: 'Excess Oil Se Parhez', description: 'Traditional tarike se zyada tel na lagayein, halka ghee use karein.' }
    ],
    ingredients: [
      { item: 'Taaza Methi ke Patte (Washed & chopped)', quantity: 1.5, unit: 'cup' },
      { item: 'Gehun ka Atta (Whole wheat flour)', quantity: 1.5, unit: 'cup' },
      { item: 'Besan (Gram flour)', quantity: 2, unit: 'tbsp' },
      { item: 'Dahi (Fresh curd)', quantity: 3, unit: 'tbsp' },
      { item: 'Safed Til (Sesame seeds)', quantity: 1, unit: 'tsp' },
      { item: 'Ajwain (Carom seeds)', quantity: 0.5, unit: 'tsp' },
      { item: 'Haldi, Lal Mirch, Dhaniya Powder', quantity: 1, unit: 'tsp combined' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Atte me barik kati methi, besan, dahi, til, ajwain aur masale milayein.',
      'Dahi ke sath mulayam atta goondein aur 10 minute dhak kar rakhein.',
      'Patli-patli rotiyan belein aur tave par halka ghee lagakar dono taraf sekein.',
      'Dahi ya nimbu ke aachar ke sath anand lein.'
    ],
    expertHealthyTip: 'Atta goondte waqt paani ki jagah taaza dahi use karein, thepla 2 din tak behad soft rahega.',
    bestTimeToEat: 'Nashte me ya safar me travel meal ke roop me.',
    suitableFor: ['All family members', 'Travelers', 'Diabetics'],
    emoji: '🫓',
    accentColor: '#15803d'
  },
  {
    id: 'vegetable-dalia',
    name: 'Multigrain Vegetable Dalia',
    hindiName: 'वेजीटेबल दलिया',
    category: 'Breakfast',
    region: 'North India',
    tagline: 'Wholesome cracked wheat porridge simmered with seasonal veggies and cumin',
    tasteProfile: 'Garma-garam, jeera-hing ka tadka, sabziyo ka sweet aur crunchy swad',
    healthTags: ['Weight Loss', 'Easy Digestion', 'Heart Healthy', 'Low Calorie'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    baseServings: 2,
    calories: 175,
    macros: { proteinGrams: 6.2, carbsGrams: 32, fatGrams: 2.8, fiberGrams: 5.5 },
    fayde: [
      { title: 'Fiber Ka Badshah', description: 'Broken wheat ka high fiber digestion ko smooth banata hai aur pet saaf rakhta hai.' },
      { title: 'Vajan Ghatane me No. 1', description: 'Slow digesting complex carbs hone se ghanto tak bhukh nahi lagti.' },
      { title: 'Heart Protection', description: 'Arteries me cholesterol jama hone se rokta hai.' }
    ],
    nuksan: [
      { title: 'Gluten Intolerance', description: 'Gehun se banta hai isliye celiac allergy walo ke liye nahi hai.' }
    ],
    ingredients: [
      { item: 'Roasted Gehun Dalia', quantity: 0.75, unit: 'cup' },
      { item: 'Mix Veggies (Gajar, Matar, Beans)', quantity: 1, unit: 'cup chopped' },
      { item: 'Pyaz aur Tamatar', quantity: 1, unit: 'each finely chopped' },
      { item: 'Jeera aur Hing', quantity: 1, unit: 'tsp combined' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tsp' },
      { item: 'Paani', quantity: 2.5, unit: 'cups' },
      { item: 'Namak aur Haldi', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Pressure cooker me 1 chammach ghee garm karein aur jeera-hing ka tadka lagayein.',
      'Pyaz, tamatar aur sabhi katti sabziyan dalkar 2 minute bhoonein.',
      'Roasted dalia, haldi aur namak dalein.',
      '2.5 cup paani dalkar cooker band karein aur 2-3 seeti lagwayein.',
      'Steam nikalne par hara dhaniya dalkar parosein.'
    ],
    expertHealthyTip: 'Cooker me pakate waqt 2 chammach moong dal bhi mila dein, complete amino-acid protein ban jayega.',
    bestTimeToEat: 'Nashta ya halka dinner.',
    suitableFor: ['Weight loss journey', 'Buzurg', 'Kids'],
    emoji: '🍲',
    accentColor: '#b45309'
  },
  {
    id: 'sprouts-chaat',
    name: 'Sprouted Moong & Chana Chaat',
    hindiName: 'अंकुरित मूँग चाट',
    category: 'Breakfast',
    region: 'Pan India',
    tagline: 'Live enzyme powerhouse of sprouted lentils tossed with crunchy cucumber & pomegranate',
    tasteProfile: 'Chatpata, crunchy, nimbu ka teekha-khatta ras aur anar ke meethe daane',
    healthTags: ['High Protein', 'Immunity Booster', 'Weight Loss', 'Low Calorie'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 2,
    baseServings: 2,
    calories: 145,
    macros: { proteinGrams: 9.8, carbsGrams: 24, fatGrams: 1.5, fiberGrams: 6.2 },
    fayde: [
      { title: 'Live Enzymes aur Vitamin C', description: 'Sprouting se vitamins ki matra 800% tak badh jati hai, immunity ko zabardast taqat milti hai.' },
      { title: 'Pure Muscle Food', description: 'Zero fat aur maximum bio-available protein body building aur fat burn me madadgar hai.' },
      { title: 'Glow Aata Hai Face Par', description: 'Toxins ko bahar nikal kar chehre par natural glow lata hai.' }
    ],
    nuksan: [
      { title: 'Kache Sprouts Se Gas', description: 'Jinhe kamzor pachan ho wo 2 minute halka ubaal (steam) kar khayein, kacha na lein.' }
    ],
    ingredients: [
      { item: 'Ankurit Green Moong', quantity: 1, unit: 'cup' },
      { item: 'Ankurit Kala Chana', quantity: 0.5, unit: 'cup' },
      { item: 'Kheera (Cucumber)', quantity: 0.5, unit: 'cup finely chopped' },
      { item: 'Tamatar aur Pyaz', quantity: 0.5, unit: 'cup' },
      { item: 'Anar ke Daane (Pomegranate)', quantity: 0.25, unit: 'cup' },
      { item: 'Bhuna Jeera Powder & Chaat Masala', quantity: 1, unit: 'tsp' },
      { item: 'Nimbu ka Ras', quantity: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Moong aur chana sprouts ko 2 minute ubalte paani me steam kar lein taaki bacteria khatam ho jayein.',
      'Ek bade bowl me sprouts, kheera, tamatar, pyaz aur anar milayein.',
      'Sendha namak, bhuna jeera powder, kaali mirch aur chaat masala dalein.',
      'Taaza nimbu nichodein aur hara dhaniya dalkar mix karein.'
    ],
    expertHealthyTip: 'Sprouts ko hamesha halka sa bhaap lagakar khayein, isse digestion aasan hota hai aur nutrition barqarar rehta hai.',
    bestTimeToEat: 'Subah nashte me ya workout ke 30 min baad.',
    suitableFor: ['Fitness lovers', 'Diabetics', 'Heart patients'],
    emoji: '🥗',
    accentColor: '#16a34a'
  },
  {
    id: 'sattu-sharbat',
    name: 'Desi Sattu Energy Drink / Sharbat',
    hindiName: 'सत्तू नमकीन शरबत',
    category: 'Breakfast',
    region: 'East India',
    tagline: 'Traditional roasted gram superdrink hailed as India\'s natural protein shake',
    tasteProfile: 'Thanda-thanda, bhuna jeera, kala namak aur taaza pudine ka refreshing swad',
    healthTags: ['High Protein', 'Easy Digestion', 'Weight Loss', 'Gut Friendly'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    baseServings: 1,
    calories: 135,
    macros: { proteinGrams: 9.0, carbsGrams: 20, fatGrams: 2.1, fiberGrams: 4.5 },
    fayde: [
      { title: 'Kudrati Protein Shake', description: 'Bhune hue chane ka sattu bina kisi chemical ke 100% natural plant protein deta hai.' },
      { title: 'Loo aur Garmi Se Bachav', description: 'Ayurveda me ise body cooler mana gaya hai jo summer me dehydration aur heat stroke se bachata hai.' },
      { title: 'Low Glycemic Index', description: 'Diabetes ke rogiyo ke liye subah ka sabse surakshit drink hai.' }
    ],
    nuksan: [
      { title: 'Raat me Na Piyein', description: 'Sattu thanda aur bhari hota hai, ise dopahar ke baad ya raat me lene se gas ho sakti hai.' },
      { title: 'Stones ki Samasya', description: 'Jinhe gall bladder stone ho wo adhik matra me na lein.' }
    ],
    ingredients: [
      { item: 'Chana Sattu Powder', quantity: 3, unit: 'tbsp' },
      { item: 'Thanda Paani', quantity: 1, unit: 'glass (250ml)' },
      { item: 'Bhuna Jeera Powder', quantity: 0.5, unit: 'tsp' },
      { item: 'Kala Namak (Black salt)', quantity: 0.5, unit: 'tsp' },
      { item: 'Nimbu ka Ras', quantity: 1, unit: 'tbsp' },
      { item: 'Pudina ke Patte aur Barik Pyaz', quantity: 1, unit: 'tbsp optional' }
    ],
    instructions: [
      'Ek glass me 3 chammach chana sattu dalein.',
      'Thoda sa paani dalkar chammach se ghol lein taaki lumps na banein.',
      'Bacha hua thanda paani dalein, sath me bhuna jeera, kala namak aur nimbu ka ras milayein.',
      'Acche se hilayein, upar se pudina ke patte dalein aur gatak lein.'
    ],
    expertHealthyTip: 'Workout ke baad market ke mehnge whey protein ki jagah 4 chammach sattu paani me ghol kar peene se muscle recovery shandar hoti hai.',
    bestTimeToEat: 'Subah khali pet ya dhoop me nikalne se pehle.',
    suitableFor: ['Hard workers', 'Gym athletes', 'Summers'],
    emoji: '🥤',
    accentColor: '#d97706'
  },
  {
    id: 'vegetable-upma',
    name: 'Vegetable Suji Upma',
    hindiName: 'वेजीटेबल उपमा',
    category: 'Breakfast',
    region: 'South India',
    tagline: 'Warm semolina cooked with roasted cashews, ginger, curry leaves & crisp veggies',
    tasteProfile: 'Ghee ki khushboo, rai-kadi patta ka tadka aur kaju ka royal crunch',
    healthTags: ['Weight Loss', 'Easy Digestion', 'Low Calorie'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    baseServings: 2,
    calories: 190,
    macros: { proteinGrams: 5.0, carbsGrams: 34, fatGrams: 4.2, fiberGrams: 3.5 },
    fayde: [
      { title: 'Taza Energy Provider', description: 'Suji aasan pachan aur quick energy pradan karti hai.' },
      { title: 'Sabziyo Ka Poshan', description: 'Gajar, matar, beans milane se vitamins aur dietary fiber bhari matra me milte hain.' }
    ],
    nuksan: [
      { title: 'High Refined Wheat Index', description: 'Diabetes ke mariz suji ki jagah oats ya dalia upma ko tarjeeh dein.' }
    ],
    ingredients: [
      { item: 'Suji / Rava', quantity: 1, unit: 'cup dry roasted' },
      { item: 'Mix Veggies (Matar, Gajar, Beans)', quantity: 0.75, unit: 'cup' },
      { item: 'Rai, Urad Dal, Chana Dal', quantity: 1, unit: 'tsp for tadka' },
      { item: 'Adrak aur Kadi Patta', quantity: 1, unit: 'tbsp' },
      { item: 'Desi Ghee ya Tel', quantity: 1, unit: 'tsp' },
      { item: 'Ubalta Paani', quantity: 2.5, unit: 'cups' },
      { item: 'Namak aur Nimbu Ras', quantity: 1, unit: 'to taste' }
    ],
    instructions: [
      'Suji ko halki aanch par khushboo aane tak dry roast karein.',
      'Kadhai me 1 chammach ghee dalein, rai, urad dal aur kadi patta tadkayein.',
      'Adrak, hari mirch aur sabziyan dalkar 3-4 minute pakayein.',
      '2.5 cup garam paani aur namak dalein aur ubaal aane dein.',
      'Bhuni hui suji dhire-dhire dalein aur lagatar hilayein taaki gaanth na pade.',
      '2 minute dhak kar dum dein, nimbu nichod kar serve karein.'
    ],
    expertHealthyTip: 'Upma me suji se double matra me sabziyan dalein taaki glycemic load kam ho sake.',
    bestTimeToEat: 'Subah nashte me.',
    suitableFor: ['All age groups'],
    emoji: '🍲',
    accentColor: '#eab308'
  },
  {
    id: 'besan-cheela',
    name: 'Spicy Besan Chilla with Ajwain',
    hindiName: 'बेसन का चिल्ला',
    category: 'Breakfast',
    region: 'North India',
    tagline: 'Quick protein-rich gram flour pancake spiked with carom seeds & fresh herbs',
    tasteProfile: 'Chatpata, ajwain ki garmi aur crispy kinaras with soft tender bite',
    healthTags: ['High Protein', 'Gluten Free', 'Diabetic Friendly', 'Weight Loss'],
    prepTimeMinutes: 8,
    cookTimeMinutes: 8,
    baseServings: 2,
    calories: 160,
    macros: { proteinGrams: 8.5, carbsGrams: 22, fatGrams: 4.5, fiberGrams: 4.0 },
    fayde: [
      { title: 'Gluten Free Protein', description: 'Gehun ki allergy walo ke liye best breakfast option hai.' },
      { title: 'Ajwain Se Gas Mukti', description: 'Ajwain aur hing dalne se besan pet me bilkul bhaari nahi hota.' }
    ],
    nuksan: [
      { title: 'Bhaari Pet', description: 'Bina ajwain ya hing ke khane par kuch logo ko pet phoolne (bloating) ki shikayat ho sakti hai.' }
    ],
    ingredients: [
      { item: 'Besan (Gram flour)', quantity: 1, unit: 'cup' },
      { item: 'Pyaz aur Tamatar', quantity: 0.5, unit: 'cup barik kata' },
      { item: 'Ajwain (Carom seeds)', quantity: 0.5, unit: 'tsp' },
      { item: 'Hing (Asafoetida)', quantity: 1, unit: 'pinch' },
      { item: 'Hari Mirch aur Dhaniya', quantity: 2, unit: 'tbsp' },
      { item: 'Paani', quantity: 0.75, unit: 'cup' },
      { item: 'Namak aur Haldi', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Besan me ajwain, hing, haldi, namak aur paani dalkar smooth batter banayein.',
      'Katta pyaz, tamatar, hari mirch aur dhaniya batter me milayein.',
      'Non-stick tave par thoda sa sarson ka tel lagayein aur batter failayein.',
      'Dono taraf se sunhera aur crispy hone tak sekein.'
    ],
    expertHealthyTip: 'Batter me 2 chammach dahi milane se chilla behad soft banta hai aur protein badh jata hai.',
    bestTimeToEat: 'Nashta ya evening tea time.',
    suitableFor: ['Weight loss', 'Students', 'Quick meals'],
    emoji: '🥞',
    accentColor: '#f59e0b'
  },
  {
    id: 'palak-paratha',
    name: 'Healthy Spinach Whole Wheat Paratha',
    hindiName: 'पालक पराठा',
    category: 'Breakfast',
    region: 'North India',
    tagline: 'Vibrant green whole wheat flatbread kneaded with fresh blanched spinach puree',
    tasteProfile: 'Mulayam, fresh palak ka swad, lasan aur hari mirch ki dheemi khushboo',
    healthTags: ['Iron Rich', 'Immunity Booster', 'Gut Friendly'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    baseServings: 2,
    calories: 170,
    macros: { proteinGrams: 5.5, carbsGrams: 28, fatGrams: 4.2, fiberGrams: 4.8 },
    fayde: [
      { title: 'Iron aur Folate Rich', description: 'Khoon ki kami dur karne me sabse asardar nashta hai.' },
      { title: 'Eye Sight Booster', description: 'Lutein aur Zeaxanthin aankho ki roshni ko swasth rakhte hain.' }
    ],
    nuksan: [
      { title: 'Excess Ghee Avoid Karein', description: 'Parathe ko talne ki jagah sukha sek kar upar se aadha chammach ghee lagayein.' }
    ],
    ingredients: [
      { item: 'Taaza Palak Puree', quantity: 1, unit: 'cup' },
      { item: 'Gehun ka Atta', quantity: 1.5, unit: 'cup' },
      { item: 'Lasan aur Adrak Paste', quantity: 1, unit: 'tsp' },
      { item: 'Ajwain aur Jeera Powder', quantity: 0.5, unit: 'tsp each' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tsp' },
      { item: 'Namak', quantity: 0.75, unit: 'tsp' }
    ],
    instructions: [
      'Palak ko 1 minute garam paani me daal kar thande paani me dalein aur mixer me pees lein.',
      'Gehun ke atte me palak puree, lasan paste, ajwain aur namak milakar aata goondein.',
      'Garam tave par dono taraf se acche se sekein.',
      'Dahi ya hari chutney ke sath garma garam parosein.'
    ],
    expertHealthyTip: 'Palak puree me 2 kali lasan peesne se iron ka absorption body me 40% badh jata hai.',
    bestTimeToEat: 'Subah ka nashta.',
    suitableFor: ['Children', 'Expecting mothers', 'Anemic patients'],
    emoji: '🫓',
    accentColor: '#15803d'
  },
  {
    id: 'sabudana-khichdi-healthy',
    name: 'Low-Oil Sabudana & Peanut Khichdi',
    hindiName: 'साबूदाना खिचड़ी',
    category: 'Breakfast',
    region: 'West India',
    tagline: 'Pearl tapioca gently cooked with roasted crushed peanuts, curry leaves & cumin',
    tasteProfile: 'Moti jaise khile hue daane, jeera aur sendha namak ka pavitra swad',
    healthTags: ['Easy Digestion', 'Gluten Free'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    baseServings: 2,
    calories: 220,
    macros: { proteinGrams: 4.2, carbsGrams: 42, fatGrams: 4.5, fiberGrams: 2.1 },
    fayde: [
      { title: 'Quick Energy Booster', description: 'Vrat ya weakness me turant sharir ko taqat deta hai.' },
      { title: 'Cooling Effect on Stomach', description: 'Pet me jalan ya ulcers me rahat deta hai.' }
    ],
    nuksan: [
      { title: 'High Carbohydrate Alert', description: 'Diabetics ko sabudana kam khana chahiye kyunki ye blood sugar tezi se badhata hai.' }
    ],
    ingredients: [
      { item: 'Sabudana (Bhigoya hua)', quantity: 1, unit: 'cup' },
      { item: 'Bhuni Mungfali (Crushed)', quantity: 3, unit: 'tbsp' },
      { item: 'Ubla Aloo (Diced)', quantity: 0.5, unit: 'medium' },
      { item: 'Jeera, Kadi Patta, Hari Mirch', quantity: 1, unit: 'tbsp' },
      { item: 'Ghee', quantity: 1, unit: 'tsp' },
      { item: 'Sendha Namak & Nimbu Ras', quantity: 1, unit: 'to taste' }
    ],
    instructions: [
      'Sabudana ko 4-5 ghante kam paani me bhigoyen taaki daane khile rahein.',
      'Ghee me jeera, kadi patta aur hari mirch tadkayein.',
      'Ubla aloo aur crushed mungfali dalkar 1 minute bhoonein.',
      'Sabudana aur sendha namak milakar dhimi aanch par daane moti jaise chamakne tak 3-4 minute pakayein.',
      'Nimbu ras aur dhaniya dalkar serve karein.'
    ],
    expertHealthyTip: 'Bhigote waqt paani sabudana ke level se sirf 1 centimeter upar rakhein, khichdi kabhi chipkegi nahi.',
    bestTimeToEat: 'Vrat me ya energetic morning nashte me.',
    suitableFor: ['Fasting', 'Gluten sensitive people'],
    emoji: '🥣',
    accentColor: '#0284c7'
  }
];

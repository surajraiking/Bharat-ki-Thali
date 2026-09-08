import { Dish } from '../types';

export const dessertsAndDrinksDishes: Dish[] = [
  {
    id: 'healthy-gajar-halwa',
    name: 'Sugar-Free Date-Sweetened Gajar Ka Halwa',
    hindiName: 'गाजर का हलवा (बिना चीनी)',
    category: 'Healthy Desserts',
    region: 'North India',
    tagline: 'Grated red winter carrots slow-simmered in low-fat milk, sweetened with Medjool dates & cardamom',
    tasteProfile: 'Mitha, gajar aur elaichi ki shandar mehak, roasted badam ka shahi crunch',
    healthTags: ['Immunity Booster', 'Heart Healthy', 'Calcium Rich'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    baseServings: 4,
    calories: 165,
    macros: { proteinGrams: 5.2, carbsGrams: 26, fatGrams: 4.8, fiberGrams: 4.0 },
    fayde: [
      { title: 'Bina Refined Sugar Ke Mithas', description: 'Khajoor (dates) aur gajar ki natural mithaas se banta hai, zero processed white sugar.' },
      { title: 'Eye Health & Vitamin A', description: 'Beta-carotene ka sabse swadisht winter source jo vision aur dry eyes me faydemand hai.' },
      { title: 'Heart Safe', description: 'Khoa/Mawa ki jagah low-fat milk aur limited desi ghee ka istemaal kiya jata hai.' }
    ],
    nuksan: [
      { title: 'Diabetics Portion Control', description: 'Bina chini ke hone par bhi khajoor aur gajar me natural carbs hote hain, isliye 1 chhota bowl hi khayein.' }
    ],
    ingredients: [
      { item: 'Laal Gaajar (Grated)', quantity: 500, unit: 'grams' },
      { item: 'Low-Fat Doodh (Skimmed milk)', quantity: 2, unit: 'cups' },
      { item: 'Khajoor Paste (Dates puree)', quantity: 0.5, unit: 'cup' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tbsp' },
      { item: 'Hari Elaichi Powder', quantity: 0.5, unit: 'tsp' },
      { item: 'Kaju aur Badam (Sliced)', quantity: 2, unit: 'tbsp' }
    ],
    instructions: [
      'Bhari tale ki kadhai me 1 chammach ghee garm karein aur grated gajar ko 5-7 minute bhoonein.',
      'Doodh dalein aur dhimi aanch par doodh ke sokhne tak lagatar chalate hue pakayein.',
      'Jab doodh sukh jaye, tab khajoor ka paste aur elaichi powder milayein.',
      '5 minute aur bhoonein jab tak halwa kadhai na chhodne lage.',
      'Roasted nuts se sajayein aur gunguna serve karein.'
    ],
    expertHealthyTip: 'Khajoor ko 15 minute gungune doodh me bhigo kar mixer me pees lein, halwe me mawa jaisa swad aur rang aata hai.',
    bestTimeToEat: 'Meals ke baad healthy dessert ya winter evening treat.',
    suitableFor: ['Families', 'Fitness conscious sweet lovers'],
    emoji: '🥕',
    accentColor: '#dc2626'
  },
  {
    id: 'makhana-kheer',
    name: 'Royal Cardamom Makhana Kheer',
    hindiName: 'मखाना खीर',
    category: 'Healthy Desserts',
    region: 'North India',
    tagline: 'Crisp lotus seeds crushed and steeped in saffron infused almond milk with natural jaggery',
    tasteProfile: 'Creamy, kesar aur elaichi ki shahi sugandh, naram makhana aur pista ka crunch',
    healthTags: ['Calcium Rich', 'Heart Healthy', 'Low Calorie'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    baseServings: 3,
    calories: 145,
    macros: { proteinGrams: 4.8, carbsGrams: 22, fatGrams: 3.8, fiberGrams: 2.5 },
    fayde: [
      { title: 'Haddiyo Ko Mazboot Banaye', description: 'Makhana aur doodh milkar sharir ko bharpoor calcium aur phosphorus dete hain.' },
      { title: 'Chawal Ki Kheer Se Aadhi Calories', description: 'Chawal ke mukable makhana kheer me calories kam aur antioxidants zyada hote hain.' }
    ],
    nuksan: [
      { title: 'Gud Ko Ubalte Doodh Me Na Dalein', description: 'Gud dalte samay aanch band kar dein, varna doodh phat sakta hai.' }
    ],
    ingredients: [
      { item: 'Phool Makhana', quantity: 1.5, unit: 'cups' },
      { item: 'Toned Doodh', quantity: 3, unit: 'cups' },
      { item: 'Gud Powder ya Dates Puree', quantity: 0.3, unit: 'cup' },
      { item: 'Kesar ke Reshe (Saffron)', quantity: 8, unit: 'strands' },
      { item: 'Elaichi Powder', quantity: 0.5, unit: 'tsp' },
      { item: 'Pista aur Badam', quantity: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Aadhe chammach ghee me makhana ko crispy hone tak dry roast karein.',
      'Aadhe makhano ko mixer me dar-dara pees lein aur aadhe sabut rakhein.',
      'Doodh ko ubaal kar kesar dalein aur 5 minute ghadha hone dein.',
      'Pisa aur sabut makhana doodh me dalkar 8-10 minute dhimi aanch par pakayein.',
      'Aanch band karein, thoda gunguna hone par gud powder aur elaichi milayein.'
    ],
    expertHealthyTip: 'Aadhe makhano ko dar-dara pees kar dalne se kheer bina mawa ya condensed milk ke bhi rabdi jaisi ghadi ban jati hai.',
    bestTimeToEat: 'Vrat me ya dinner ke baad.',
    suitableFor: ['Vrat / Fasting', 'Senior citizens', 'Kids'],
    emoji: '🥣',
    accentColor: '#f59e0b'
  },
  {
    id: 'masala-chaas',
    name: 'Ayurvedic Masala Buttermilk (Chaas)',
    hindiName: 'मसाला छाछ',
    category: 'Drinks & Raita',
    region: 'Pan India',
    tagline: 'Whisked probiotic buttermilk spiced with roasted cumin, rock salt, ginger & fresh mint',
    tasteProfile: 'Thanda-thanda, bhuna jeera aur kala namak ka chatpata swad, pet ko shant karne wala',
    healthTags: ['Gut Friendly', 'Easy Digestion', 'Weight Loss', 'Low Calorie'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    baseServings: 2,
    calories: 45,
    macros: { proteinGrams: 2.8, carbsGrams: 4.5, fatGrams: 1.2, fiberGrams: 0.5 },
    fayde: [
      { title: 'Instant Digestion Booster', description: 'Khana khane ke baad chaas peene se pet me gas, acidity aur bhari-pan 10 minute me shant hota hai.' },
      { title: 'Kudrati Probiotic', description: 'Aanto ke good bacteria ko badhata hai aur dehydration dur karta hai.' },
      { title: 'Behad Low Calorie', description: 'Cold drink ya juice ki jagah chaas peene se roz 200 calories bachti hain.' }
    ],
    nuksan: [
      { title: 'Raat Me Parhez Karein', description: 'Chaas ki taseer thandi hoti hai, ise suraj dhalne ke baad peene se kaf/jukaam ho sakta hai.' }
    ],
    ingredients: [
      { item: 'Taaza Dahi (Curd)', quantity: 1, unit: 'cup' },
      { item: 'Thanda Paani', quantity: 1.5, unit: 'cups' },
      { item: 'Bhuna Jeera Powder', quantity: 1, unit: 'tsp' },
      { item: 'Kala Namak (Black salt)', quantity: 0.5, unit: 'tsp' },
      { item: 'Adrak ka Ras', quantity: 0.5, unit: 'tsp' },
      { item: 'Pudina aur Dhaniya ke Patte', quantity: 2, unit: 'tbsp finely crushed' },
      { item: 'Hing', quantity: 1, unit: 'pinch' }
    ],
    instructions: [
      'Dahi ko mathani (whisk) se acche se phent lein.',
      'Thanda paani milakar patla karein.',
      'Bhuna jeera, kala namak, hing, adrak ka ras aur barik kata pudina dalein.',
      'Glasses me dalkar upar se thoda sa bhuna jeera powder chhidak kar thanda piyen.'
    ],
    expertHealthyTip: 'Chaas me 1 chutki hing aur adrak ka ras milana gas aur bloat ko jad se gayab kar deta hai.',
    bestTimeToEat: 'Lunch ke turant baad.',
    suitableFor: ['All adults', 'Acidity & IBS patients', 'Summer heat'],
    emoji: '🥛',
    accentColor: '#10b981'
  },
  {
    id: 'cucumber-mint-raita',
    name: 'Cooling Cucumber Mint Raita',
    hindiName: 'खीरा पुदीना रायता',
    category: 'Drinks & Raita',
    region: 'North India',
    tagline: 'Chilled whipped yogurt folded with grated crisp cucumber, fresh mint & roasted cumin',
    tasteProfile: 'Creamy, refreshing, pudine ki thandak aur kheere ka juicy crunch',
    healthTags: ['Gut Friendly', 'Low Calorie', 'Heart Healthy'],
    prepTimeMinutes: 8,
    cookTimeMinutes: 0,
    baseServings: 2,
    calories: 70,
    macros: { proteinGrams: 3.5, carbsGrams: 6.0, fatGrams: 2.2, fiberGrams: 1.2 },
    fayde: [
      { title: 'Stomach Acid Buffer', description: 'Teekhe masaledar khane ke baad pet me hone wali jalan aur pitta ko turant shaant karta hai.' },
      { title: 'Hydration & Skin Glow', description: 'Kheere ka silica aur paani twacha ko hydrate rakhta hai.' }
    ],
    nuksan: [
      { title: 'Pehle Se Namak Mat Dalein', description: 'Kheer me namak dalne se kheera paani chhod deta hai, khate samay hi namak milayein.' }
    ],
    ingredients: [
      { item: 'Taaza Dahi (Phenti hui)', quantity: 1.5, unit: 'cup' },
      { item: 'Taaza Kheera (Grated)', quantity: 1, unit: 'medium' },
      { item: 'Pudina ke Patte (Crushed)', quantity: 1, unit: 'tbsp' },
      { item: 'Bhuna Jeera & Kala Namak', quantity: 1, unit: 'tsp combined' },
      { item: 'Hari Mirch (Optional)', quantity: 0.5, unit: 'chopped' }
    ],
    instructions: [
      'Dahi ko chammach se smooth hone tak phent lein.',
      'Grated kheera (halka nichod kar) dahi me milayein.',
      'Pudina, bhuna jeera aur kala namak dalein.',
      'Thanda karke biryani ya parathe ke sath serve karein.'
    ],
    expertHealthyTip: 'Kheera chhilke samet grate karein, kheere ke chilke me fiber aur antioxidants ka khazana hota hai.',
    bestTimeToEat: 'Lunch meal ke sath.',
    suitableFor: ['All age groups', 'Summer cooler'],
    emoji: '🥒',
    accentColor: '#059669'
  },
  {
    id: 'haldi-doodh',
    name: 'Golden Turmeric Latte (Haldi Doodh)',
    hindiName: 'हल्दी वाला दूध',
    category: 'Drinks & Raita',
    region: 'Pan India',
    tagline: 'Ancient immunity healer: warm milk infused with organic turmeric, black pepper & cinnamon',
    tasteProfile: 'Garma-garam, comforting, dalchini ki mithaas aur haldi ka healing earthy taste',
    healthTags: ['Immunity Booster', 'Heart Healthy'],
    prepTimeMinutes: 3,
    cookTimeMinutes: 5,
    baseServings: 1,
    calories: 110,
    macros: { proteinGrams: 4.5, carbsGrams: 10, fatGrams: 3.5, fiberGrams: 0.5 },
    fayde: [
      { title: 'Anti-Inflammatory Wonder (Curcumin)', description: 'Chot, jodo ka dard, infection aur sardi ko raat bhar me theek karne me asardar.' },
      { title: 'Deep Sound Sleep', description: 'Raat ko peene se nervous system shaant hota hai aur gahri neend aati hai.' }
    ],
    nuksan: [
      { title: 'Kaali Mirch Bina Na Piyein', description: 'Kaali mirch ke bina haldi ka curcumin sharir me sirf 2% absorb hota hai, kaali mirch ise 2000% badha deti hai.' }
    ],
    ingredients: [
      { item: 'Toned Doodh', quantity: 1, unit: 'glass' },
      { item: 'Kacchi Haldi (Grated) ya Haldi Powder', quantity: 0.5, unit: 'tsp' },
      { item: 'Taaza Pisi Kaali Mirch', quantity: 1, unit: 'pinch', notes: 'Essential for absorption' },
      { item: 'Dalchini Powder', quantity: 1, unit: 'pinch' },
      { item: 'Shahad (Honey) ya Gud', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Pan me doodh dalein, haldi, kaali mirch aur dalchini dalkar 3-4 minute dhimi aanch par ubaalein.',
      'Cup me chhaan lein.',
      'Halka gunguna hone par shahad ya gud milakar raat ko sone se pehle piyen.'
    ],
    expertHealthyTip: 'Kacchi gaanth wali haldi use karein to result powder se 5 guna behtar milte hain.',
    bestTimeToEat: 'Raat ko sone se 30 minute pehle.',
    suitableFor: ['Cold/Flu patients', 'Joint pain', 'Insomnia'],
    emoji: '🥛',
    accentColor: '#eab308'
  },
  {
    id: 'beetroot-raita',
    name: 'Pink Antioxidant Beetroot Raita',
    hindiName: 'चुकंदर का रायता',
    category: 'Drinks & Raita',
    region: 'South India',
    tagline: 'Vibrant ruby pink curd infused with steamed grated beetroot, mustard tempering & curry leaves',
    tasteProfile: 'Halka meetha-namkeen, crunchy rai tadka aur dahi ki soothing thandak',
    healthTags: ['Iron Rich', 'Heart Healthy', 'Gut Friendly'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    baseServings: 2,
    calories: 85,
    macros: { proteinGrams: 3.8, carbsGrams: 10, fatGrams: 2.2, fiberGrams: 2.0 },
    fayde: [
      { title: 'Nitric Oxide & Blood Pressure', description: 'Chukandar ka dietary nitrate blood vessels ko relax karke high BP ko tezi se normal karta hai.' },
      { title: 'Stamina & Hemoglobin', description: 'Iron aur folate se bharpoor, thakan ko dur bhagata hai.' }
    ],
    nuksan: [
      { title: 'Kidney Stone Rogi Parhez', description: 'Beetroot me oxalates hote hain, jinhe stone problem ho wo kam lein.' }
    ],
    ingredients: [
      { item: 'Ubla & Grated Chukandar (Beetroot)', quantity: 1, unit: 'medium' },
      { item: 'Taaza Dahi', quantity: 1.5, unit: 'cup' },
      { item: 'Rai, Kadi Patta, Hari Mirch', quantity: 1, unit: 'tsp for tadka' },
      { item: 'Kala Namak & Bhuna Jeera', quantity: 1, unit: 'tsp' },
      { item: 'Nariyal Tel ya Ghee', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Chukandar ko ubaal kar chilka utarein aur barik grate kar lein.',
      'Dahi ko phent kar usme grated chukandar milayein (pyara gulabi rang aayega).',
      'Kala namak aur bhuna jeera powder milayein.',
      'Chhote pan me nariyal tel me rai, kadi patta aur hari mirch tadka kar rayte par dalein.'
    ],
    expertHealthyTip: 'Chukandar ko ubaal kar use karne se uska kacha-pan nikal jata hai aur pachan bilkul aasan ho jata hai.',
    bestTimeToEat: 'Lunch.',
    suitableFor: ['Anemic patients', 'High BP patients', 'Kids'],
    emoji: '🥣',
    accentColor: '#be185d'
  },
  {
    id: 'ragi-dates-ladoo',
    name: 'No-Sugar Ragi & Peanut Energy Ladoo',
    hindiName: 'रागी खजूर लड्डू',
    category: 'Healthy Desserts',
    region: 'South India',
    tagline: 'Wholesome guilt-free power balls made from roasted finger millet, roasted peanuts & dates',
    tasteProfile: 'Nutty, khajoor ki natural mithaas aur desi ghee ki rich sondhi sugandh',
    healthTags: ['Calcium Rich', 'Iron Rich', 'Weight Loss'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    baseServings: 6,
    calories: 110,
    macros: { proteinGrams: 3.5, carbsGrams: 18, fatGrams: 3.2, fiberGrams: 3.5 },
    fayde: [
      { title: 'Zero Sugar & 100% Nutritious', description: 'Bachho aur buzurgon ke liye calcium aur iron ka daily supplement.' },
      { title: 'Post-Workout Stamina Ball', description: 'Ek ladoo khate hi sustained energy milti hai.' }
    ],
    nuksan: [
      { title: 'Portion Control', description: 'Swadisht hone ki wajah se zyada na khayein, 1-2 ladoo rozana paryapt hain.' }
    ],
    ingredients: [
      { item: 'Ragi Atta', quantity: 1, unit: 'cup' },
      { item: 'Naram Khajoor (Seedless dates)', quantity: 1, unit: 'cup' },
      { item: 'Bhuni Mungfali (Crushed)', quantity: 0.25, unit: 'cup' },
      { item: 'Safed Til (Sesame seeds)', quantity: 2, unit: 'tbsp' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tbsp' },
      { item: 'Elaichi Powder', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Kadhai me 1 chammach ghee garm karein aur ragi aate ko 6-8 minute dhimi aanch par khushboo aane tak bhoonein.',
      'Khajoor ko mixer me pees kar paste bana lein.',
      'Bhune ragi me khajoor paste, bhuni mungfali, til aur elaichi milakar gunguna rehte hi gol ladoo baandh lein.',
      'Hawa-band dabbe me 20 din tak rakhein.'
    ],
    expertHealthyTip: 'Ise banate waqt til zaroor dalein, til aur ragi ka combination haddiyo ke dard ko 1 hafte me theek kar sakta hai.',
    bestTimeToEat: 'Subah nashte ke baad ya shaam ko chai ke waqt.',
    suitableFor: ['Elderly', 'Women', 'Growing children'],
    emoji: '🧆',
    accentColor: '#78350f'
  }
];

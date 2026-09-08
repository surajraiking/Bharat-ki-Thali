import { Dish } from '../types';

export const grainsAndSnacksDishes: Dish[] = [
  {
    id: 'bajra-roti',
    name: 'Desi Bajra Roti (Pearl Millet Flatbread)',
    hindiName: 'बाजरे की रोटी',
    category: 'Rotis & Grains',
    region: 'West India',
    tagline: 'Rustic gluten-free pearl millet bread roasted over direct flame with white butter or ghee',
    tasteProfile: 'Sondhi, khushbudar, mitti ke tave ki mehak aur halka crunchy crust with soft heart',
    healthTags: ['Gluten Free', 'Iron Rich', 'Diabetic Friendly', 'Heart Healthy'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    baseServings: 2,
    calories: 145,
    macros: { proteinGrams: 4.2, carbsGrams: 28, fatGrams: 2.2, fiberGrams: 4.5 },
    fayde: [
      { title: 'Gluten-Free Grain Superfood', description: 'Celiac allergy aur wheat sensitivity walo ke liye gehun ka sabse takatwar vikalp.' },
      { title: 'Iron aur Zinc Se Labrez', description: 'Hemoglobin boost karta hai aur baalo ko jhadne se rokta hai.' },
      { title: 'Sardi Me Sharir Ko Garam Rakhe', description: 'Iski taseer garam hoti hai jo winter me jodo ke dard aur sardi se bachati hai.' }
    ],
    nuksan: [
      { title: 'Pani Zyada Piyein', description: 'Bajra sharir ka paani sokhta hai, bajra roti khane ke baad paani acchi matra me piyein.' },
      { title: 'Garmiyo Me Kam Khayein', description: 'Extreme summer me bajra lene se sharir me garmi badh sakti hai, dahi ya chaas ke sath lein.' }
    ],
    ingredients: [
      { item: 'Taaza Bajra Atta', quantity: 1, unit: 'cup' },
      { item: 'Garam Paani (Warm water)', quantity: 0.5, unit: 'cup for kneading' },
      { item: 'Sendha Namak', quantity: 1, unit: 'pinch' },
      { item: 'Desi Ghee ya Safed Makkhan', quantity: 0.5, unit: 'tsp per roti' }
    ],
    instructions: [
      'Bajre ke aate me namak milakar gungune garam paani se hatheli ki madad se 5-7 minute ragad kar mulayam goondein.',
      'Loi banayein aur haatho par thoda paani ya sookha atta lagakar thap-thapakar gol roti banayein.',
      'Mitti ya lohe ke tave par daal kar upar se paani ka haath lagayein.',
      'Palt kar gas ki aanch par phoolaayein.',
      'Garma-garam sarson ke saag ya jaggery (gud) aur ghee ke sath khayein.'
    ],
    expertHealthyTip: 'Atta goondte waqt hamesha garm paani use karein, isse bajre ki roti fategi nahi aur behad naram banegi.',
    bestTimeToEat: 'Lunch ya dinner sardiyo me.',
    suitableFor: ['Diabetics', 'Gluten allergic patients', 'Strength builders'],
    emoji: '🫓',
    accentColor: '#78350f'
  },
  {
    id: 'jowar-bhakri',
    name: 'Jowar Bhakri (Sorghum Flatbread)',
    hindiName: 'ज्वार की भाकरी',
    category: 'Rotis & Grains',
    region: 'West India',
    tagline: 'Delicate round flatbread crafted from ancient white sorghum grain, eaten with pitla',
    tasteProfile: 'Mridu, earthy sweet grain note, bilkul light aur pet ko halka rakhne wali',
    healthTags: ['Gluten Free', 'Heart Healthy', 'Weight Loss', 'Diabetic Friendly'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    baseServings: 2,
    calories: 130,
    macros: { proteinGrams: 3.8, carbsGrams: 27, fatGrams: 1.5, fiberGrams: 4.2 },
    fayde: [
      { title: 'Pachan Me Sarvottam', description: 'Jowar ki taseer shant aur thandi hoti hai, ye har mausam me khayi ja sakti hai.' },
      { title: 'Low Glycemic Index', description: 'Complex carbs aur dietary fiber blood glucose ko badhne nahi dete.' },
      { title: 'Cardiac Protection', description: 'Polyphenols aur antioxidants arteries ko swasth rakhte hain.' }
    ],
    nuksan: [
      { title: 'Taaza Goondna Padta Hai', description: 'Jowar ka atta pehle se goond kar nahi rakha ja sakta, turant banakar khana padta hai.' }
    ],
    ingredients: [
      { item: 'Jowar Atta', quantity: 1, unit: 'cup fine milled' },
      { item: 'Garam Paani', quantity: 0.5, unit: 'cup' },
      { item: 'Namak', quantity: 1, unit: 'pinch' }
    ],
    instructions: [
      'Garam paani ke sath jowar ke aate ko acche se mash karke naram loi banayein.',
      'Chakle par sukha atta chhidak kar haatho se thapak kar patli bhakri banayein.',
      'Garam tave par dalein, upar thoda paani lagayein aur dono taraf sunehra sek lein.',
      'Pitla ya thecha ke sath serve karein.'
    ],
    expertHealthyTip: 'Gehun ki jagah hafte me 4 din jowar khane se 1 mahine me 2-3 kilo vajan natural tarike se kam hota hai.',
    bestTimeToEat: 'Lunch aur dinner.',
    suitableFor: ['Weight loss', 'Diabetics', 'Heart care'],
    emoji: '🫓',
    accentColor: '#ca8a04'
  },
  {
    id: 'curd-rice',
    name: 'South Indian Curd Rice (Thayir Sadam)',
    hindiName: 'कर्ड राइस (दही चावल)',
    category: 'Rotis & Grains',
    region: 'South India',
    tagline: 'Cooling probiotic comfort food: soft mashed rice whipped with homemade yogurt & mustard tadka',
    tasteProfile: 'Thanda, creamy, dahi ki mridu khatas, kadi patta aur rai ka crunchy tadka',
    healthTags: ['Gut Friendly', 'Easy Digestion', 'Calcium Rich', 'Heart Healthy'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    baseServings: 2,
    calories: 190,
    macros: { proteinGrams: 6.5, carbsGrams: 30, fatGrams: 4.8, fiberGrams: 1.8 },
    fayde: [
      { title: 'Gut Microbiome Ka Amrit', description: 'Dahi me lakho live Lactobacillus bacteria hote hain jo pet ke infection, IBS aur indigestion ko theek karte hain.' },
      { title: 'Body Temperature Normalizer', description: 'Tez garmi me sharir ki aantarik garmi ko shaant karta hai.' },
      { title: 'Instant Stress Relief', description: 'Tryptophan dahi me hota hai jo dimaag ko shaanti aur achhi neend deta hai.' }
    ],
    nuksan: [
      { title: 'Khatta Dahi Mat Use Karein', description: 'Hamesha taaza dahi use karein, purana ya behad khatta dahi Pitta aur throat infection badha sakta hai.' }
    ],
    ingredients: [
      { item: 'Cooked Soft Rice (Mash kiya)', quantity: 1.5, unit: 'cups' },
      { item: 'Taaza Dahi (Fresh curd)', quantity: 1, unit: 'cup' },
      { item: 'Doodh (Milk)', quantity: 0.25, unit: 'cup', notes: 'To prevent souring' },
      { item: 'Adrak & Hari Mirch', quantity: 1, unit: 'tsp finely chopped' },
      { item: 'Rai, Urad Dal, Kadi Patta', quantity: 1, unit: 'tsp for tadka' },
      { item: 'Anar ke Daane & Hara Dhaniya', quantity: 2, unit: 'tbsp' },
      { item: 'Sendha Namak', quantity: 0.75, unit: 'tsp' }
    ],
    instructions: [
      'Garam ubale chawal ko thoda sa mash karein aur thanda hone dein.',
      'Chawal me dahi, thoda doodh aur namak mila kar creamy banayein.',
      'Tadka pan me thoda ghee/tel garm karein, rai, urad dal, kadi patta, hing aur adrak bhoonein.',
      'Tadka curd rice me milayein.',
      'Anar ke daane aur hara dhaniya dalkar thanda serve karein.'
    ],
    expertHealthyTip: 'Curd rice me 2 chammach doodh milane se dahi dopahar se shaam tak bilkul khatta nahi hota.',
    bestTimeToEat: 'Dopahar ka lunch garmiyo me.',
    suitableFor: ['Gut issues', 'Kids', 'Elderly', 'Acidity sufferers'],
    emoji: '🍚',
    accentColor: '#0284c7'
  },
  {
    id: 'lemon-rice',
    name: 'Turmeric Lemon Rice (Chitranna)',
    hindiName: 'लेमन राइस',
    category: 'Rotis & Grains',
    region: 'South India',
    tagline: 'Bright yellow aromatic rice infused with fresh lemon juice, crunchy peanuts & curry leaves',
    tasteProfile: 'Khatta, zesty, haldi ki sondhi mehak aur mungfali-chana dal ka karara crunch',
    healthTags: ['Immunity Booster', 'Easy Digestion', 'Low Calorie'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    baseServings: 2,
    calories: 210,
    macros: { proteinGrams: 4.8, carbsGrams: 36, fatGrams: 5.2, fiberGrams: 2.5 },
    fayde: [
      { title: 'Vitamin C & Turmeric Curcumin', description: 'Taaza nimbu ka Vitamin C aur haldi ka Curcumin milkar immunity aur digestion ko boost karte hain.' },
      { title: 'Quick Travel Friendly Meal', description: 'Khatta hone ke karan jaldi kharab nahi hota.' }
    ],
    nuksan: [
      { title: 'Diabetics Portion Control', description: 'Safed chawal ki jagah brown rice ya millets use karein.' }
    ],
    ingredients: [
      { item: 'Ubla Chawal (Cooked basmati)', quantity: 2, unit: 'cups' },
      { item: 'Taaza Nimbu ka Ras', quantity: 2, unit: 'tbsp' },
      { item: 'Mungfali (Peanuts)', quantity: 2, unit: 'tbsp' },
      { item: 'Rai, Chana Dal, Urad Dal', quantity: 1, unit: 'tsp combined' },
      { item: 'Kadi Patta aur Hari Mirch', quantity: 1, unit: 'tbsp' },
      { item: 'Haldi Powder & Hing', quantity: 0.5, unit: 'tsp' },
      { item: 'Tel ya Ghee & Namak', quantity: 1, unit: 'tsp each' }
    ],
    instructions: [
      'Pan me tel garm karke mungfali, rai, chana dal aur urad dal ko golden hone tak bhunein.',
      'Kadi patta, hari mirch, hing aur haldi powder dalein.',
      'Aanch dhimi karke ubla chawal aur namak milayein aur 2 minute halke haath se toss karein.',
      'Aanch band karein aur taaza nimbu ka ras milayein (nimbu ubalne se kadva ho jata hai).'
    ],
    expertHealthyTip: 'Nimbu ka ras hamesha gas band karne ke baad hi dalein, ubalte chawal me dalne se Vitamin C nasht ho jata hai.',
    bestTimeToEat: 'Lunch ya tiffin.',
    suitableFor: ['Office lunchbox', 'Light food lovers'],
    emoji: '🍋',
    accentColor: '#eab308'
  },
  {
    id: 'khaman-dhokla',
    name: 'Steamed Gujrati Khaman Dhokla',
    hindiName: 'खमन ढोकला',
    category: 'Snacks & Chaat',
    region: 'West India',
    tagline: 'Light-as-air steamed golden savory sponge made of fermented gram flour',
    tasteProfile: 'Juicy, spongy, khatta-meetha aur sarson-hari mirch ke tadke ka jhanjhanata swad',
    healthTags: ['Low Calorie', 'Easy Digestion', 'High Protein', 'Weight Loss'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 18,
    baseServings: 4,
    calories: 120,
    macros: { proteinGrams: 5.5, carbsGrams: 20, fatGrams: 2.2, fiberGrams: 3.5 },
    fayde: [
      { title: 'Zero Oil Steamed Super Snack', description: 'Poori tarah bhaap me banta hai, zero cholesterol aur minimum calories.' },
      { title: 'Fermented Gut Goodness', description: 'Besan ke khameer se digestive enzymes activate hote hain jo pachan ko aasan banate hain.' }
    ],
    nuksan: [
      { title: 'Tadke Me Cheeni Ki Matra', description: 'Tadke ke paani me cheeni na dalein, bina cheeni ke nimbu aur hari mirch ka tadka lagayein.' }
    ],
    ingredients: [
      { item: 'Besan (Chhana hua)', quantity: 1, unit: 'cup' },
      { item: 'Nimbu ka Sat ya Ras', quantity: 1, unit: 'tbsp' },
      { item: 'Adrak-Hari Mirch Paste', quantity: 1, unit: 'tsp' },
      { item: 'Haldi (Sirf 1 pinch)', quantity: 1, unit: 'pinch', notes: 'Zyada dalne se laal ho jata hai' },
      { item: 'Fruit Salt (Eno) ya Baking Soda', quantity: 1, unit: 'tsp' },
      { item: 'Tadke ke liye: Rai, Kadi Patta, Hari Mirch', quantity: 1, unit: 'tbsp' },
      { item: 'Namak', quantity: 0.75, unit: 'tsp' }
    ],
    instructions: [
      'Besan me paani, namak, nimbu ras aur adrak-mirch milakar lumpy free batter banayein aur 10 min rakhein.',
      'Steamer me paani garm karein aur plate ko grease karein.',
      'Batter me Eno dalein aur 1 disha me 30 second phantein jab tak jhaag na ban jaye.',
      'Turant plate me dalkar 15-18 minute tez aanch par steam karein.',
      'Tadka pan me rai, kadi patta aur mirch tadka kar aadha cup paani dalein aur dhokle par failayein.'
    ],
    expertHealthyTip: 'Tadke ke paani me cheeni ki jagah thoda sa stevia ya kewal nimbu dalein, 100% diabetic friendly rahega.',
    bestTimeToEat: 'Sham ki chai ke sath ya subah nashte me.',
    suitableFor: ['Weight watchers', 'Heart patients', 'Elderly'],
    emoji: '🧽',
    accentColor: '#facc15'
  },
  {
    id: 'roasted-makhana',
    name: 'Turmeric Ghee Roasted Foxnuts (Makhana)',
    hindiName: 'रोस्टेड मखाना',
    category: 'Snacks & Chaat',
    region: 'East India',
    tagline: 'Crunchy roasted lotus seeds tossed in golden turmeric, rock salt & black pepper',
    tasteProfile: 'Super crunchy, makhani, chaat masale ka halka chatpata flavor',
    healthTags: ['Weight Loss', 'Heart Healthy', 'Low Calorie', 'Calcium Rich'],
    prepTimeMinutes: 2,
    cookTimeMinutes: 8,
    baseServings: 2,
    calories: 95,
    macros: { proteinGrams: 3.5, carbsGrams: 18, fatGrams: 1.2, fiberGrams: 3.2 },
    fayde: [
      { title: 'Super Low Calorie Miracle Snack', description: 'Chips ya biscuit ki jagah makhana khane se craving shaant hoti hai aur vajan nahi badhta.' },
      { title: 'Anti-Aging Flavonoids', description: 'Kaempferol antioxidant wrinkles aur cell damage ko rokta hai.' },
      { title: 'Blood Pressure & Heart', description: 'High magnesium aur low sodium dil ki dhadkan aur BP ko control me rakhte hain.' }
    ],
    nuksan: [
      { title: 'Overeating Se Kabz', description: 'Ek baar me 1-2 katori se zyada na khayein, varna dry hone ke karan kabz ho sakti hai.' }
    ],
    ingredients: [
      { item: 'Phool Makhana (Foxnuts)', quantity: 2, unit: 'cups' },
      { item: 'Desi Ghee', quantity: 0.5, unit: 'tsp' },
      { item: 'Haldi Powder', quantity: 0.25, unit: 'tsp' },
      { item: 'Sendha Namak (Rock salt)', quantity: 0.5, unit: 'tsp' },
      { item: 'Pisi Kaali Mirch & Chaat Masala', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Bhari tale ki kadhai me aadha chammach ghee dalein.',
      'Makhana dalkar bilkul dhimi aanch par 6-8 minute lagatar chalate hue bhoonein.',
      'Ek makhana ungli se dabakar dekhein, agar aasaani se crush ho jaye to crispy ho gaya hai.',
      'Aanch band karein, haldi, kaali mirch, chaat masala aur sendha namak milakar mix karein.'
    ],
    expertHealthyTip: 'Masale hamesha aanch band karne ke baad dalein taaki sukhe masale ghee me jalein nahi.',
    bestTimeToEat: 'Sham 4 se 6 baje ki bhookh ke liye best snack.',
    suitableFor: ['Diabetics', 'Late night snackers', 'Weight loss aspirants'],
    emoji: '🍿',
    accentColor: '#fbbf24'
  },
  {
    id: 'shakarkandi-chaat',
    name: 'Roasted Sweet Potato Chaat (Shakarkandi)',
    hindiName: 'शकरकंदी की चाट',
    category: 'Snacks & Chaat',
    region: 'North India',
    tagline: 'Warm fire-roasted sweet potato cubes dressed with lemon juice, mint chutney & cumin',
    tasteProfile: 'Khatta-meetha, roasted caramel notes, teekhi hari chutney aur amchur ka kick',
    healthTags: ['Immunity Booster', 'Weight Loss', 'Heart Healthy'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    baseServings: 2,
    calories: 140,
    macros: { proteinGrams: 2.2, carbsGrams: 32, fatGrams: 0.5, fiberGrams: 4.5 },
    fayde: [
      { title: 'Vitamin A (Beta-Carotene) Champion', description: 'Aankho ki roshni aur skin glow ke liye kudrat ka sabse sasta superfood.' },
      { title: 'Complex Smart Carbs', description: 'Normal aloo ke mukable low glycemic index hota hai jo slow energy release karta hai.' }
    ],
    nuksan: [
      { title: 'Diabetics Limit Karein', description: 'Sugar ke mariz isko boil karke khayein, roast karne se sugar concentration thoda badh jata hai.' }
    ],
    ingredients: [
      { item: 'Shakarkandi (Sweet potato - roasted or boiled)', quantity: 2, unit: 'medium' },
      { item: 'Bhuna Jeera Powder', quantity: 1, unit: 'tsp' },
      { item: 'Kala Namak & Chaat Masala', quantity: 1, unit: 'tsp' },
      { item: 'Nimbu ka Ras', quantity: 1, unit: 'tbsp' },
      { item: 'Taaza Hara Dhaniya', quantity: 2, unit: 'tbsp' }
    ],
    instructions: [
      'Shakarkandi ko tawe par dhak kar ya oven me roast karein (ya ubaal lein).',
      'Chhilka utaar kar bite-sized tukdo me kaat lein.',
      'Bowl me shakarkandi dalein, upar se bhuna jeera, kala namak, chaat masala dalein.',
      'Garma-garam nimbu ka ras nichodein aur hara dhaniya milakar parosein.'
    ],
    expertHealthyTip: 'Shakarkandi ko ubalne ki bajay sukhe tawe par dhak kar sekne se uski natural sweetness caramelize hokar lajawab banti hai.',
    bestTimeToEat: 'Winter evening snack.',
    suitableFor: ['Athletes', 'Children', 'Dieting'],
    emoji: '🍠',
    accentColor: '#c2410c'
  },
  {
    id: 'peanut-sundal',
    name: 'South Indian Boiled Peanut Sundal',
    hindiName: 'मूंगफली सुंडल',
    category: 'Snacks & Chaat',
    region: 'South India',
    tagline: 'Steamed tender peanuts tossed with fresh grated coconut, mustard, curry leaves & asafoetida',
    tasteProfile: 'Nutty, juicy, nariyal ki mehak aur rai-hing ka shandar tadka',
    healthTags: ['High Protein', 'Heart Healthy', 'Gluten Free'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    baseServings: 3,
    calories: 175,
    macros: { proteinGrams: 7.8, carbsGrams: 12, fatGrams: 9.8, fiberGrams: 3.8 },
    fayde: [
      { title: 'Healthy Fats & Vitamin E', description: 'Mungfali me good fats (MUFA/PUFA) hote hain jo cholesterol ko control karte hain.' },
      { title: 'Bina Tale Pure Protein', description: 'Ubal kar khane se mungfali ki calories tel me tali mungfali se aadhi ho jati hain.' }
    ],
    nuksan: [
      { title: 'Nut Allergy', description: 'Jinhe peanut allergy ho wo ise bilkul na khayein.' }
    ],
    ingredients: [
      { item: 'Kachi Mungfali (Boiled with salt)', quantity: 1.5, unit: 'cup' },
      { item: 'Taaza Grated Nariyal (Coconut)', quantity: 2, unit: 'tbsp' },
      { item: 'Rai, Urad Dal, Hing', quantity: 1, unit: 'tsp' },
      { item: 'Kadi Patta aur Hari Mirch', quantity: 1, unit: 'tbsp' },
      { item: 'Nariyal Tel ya Ghee', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Mungfali ko namak dalkar cooker me 2-3 seeti aane tak naram ubaal lein.',
      'Pan me aadha chammach nariyal tel garm karein, rai, urad dal, hing aur kadi patta tadkayein.',
      'Ubli mungfali dalein aur 2 minute toss karein.',
      'Grated nariyal aur nimbu ras dalkar serve karein.'
    ],
    expertHealthyTip: 'Ubalne ke baad bacha hua paani poodhon me daal dein, minerals se bharpoor hota hai.',
    bestTimeToEat: 'Post-workout ya evening snack.',
    suitableFor: ['Fitness lovers', 'Kids'],
    emoji: '🥜',
    accentColor: '#b45309'
  }
];

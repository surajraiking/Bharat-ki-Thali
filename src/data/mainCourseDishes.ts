import { Dish } from '../types';

export const mainCourseDishes: Dish[] = [
  {
    id: 'baingan-bharta',
    name: 'Smoky Roasted Baingan Bharta',
    hindiName: 'बैंगन का भर्ता',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Fire-roasted mashed eggplant tossed with aromatic garlic, ginger, green peas & tomatoes',
    tasteProfile: 'Dhuyen ki sondhi khushboo, juicy tamatar, meethi matar aur lasan ka teekha swad',
    healthTags: ['Weight Loss', 'Heart Healthy', 'Diabetic Friendly', 'Low Calorie'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    baseServings: 3,
    calories: 135,
    macros: { proteinGrams: 3.8, carbsGrams: 16, fatGrams: 4.0, fiberGrams: 5.5 },
    fayde: [
      { title: 'Nasunin Antioxidant', description: 'Baingan ke chhilke me Nasunin hota hai jo brain cells aur heart ko free radicals se bachata hai.' },
      { title: 'Weight Loss Friendly', description: 'Behad kam calories aur high water/fiber content pet ko jaldi bharta hai.' },
      { title: 'Cholesterol Control', description: 'Khoon me lipid level ko sudharne me sahayak.' }
    ],
    nuksan: [
      { title: 'Skin Allergies Alert', description: 'Jinhe twacha par khujli ya urticaria allergy ho wo baingan se parhez karein.' },
      { title: 'Acidity & Pitta', description: 'Baingan pitta vardhak mana jata hai, ise bina zyada tel-masale ke banayein.' }
    ],
    ingredients: [
      { item: 'Bada Bharta Baingan', quantity: 1, unit: 'piece (500g)' },
      { item: 'Tamatar (Barik kata)', quantity: 2, unit: 'medium' },
      { item: 'Pyaz aur Hare Matar', quantity: 0.5, unit: 'cup each' },
      { item: 'Lasan (Garlic)', quantity: 8, unit: 'cloves' },
      { item: 'Adrak aur Hari Mirch', quantity: 1, unit: 'tbsp' },
      { item: 'Sarson ka Tel', quantity: 1, unit: 'tsp' },
      { item: 'Namak, Haldi, Lal Mirch', quantity: 1, unit: 'tsp each' }
    ],
    instructions: [
      'Baingan me cut lagakar lasan ki kaliyan andar daal dein aur gas ki aanch par chaaron taraf se kala hone tak bhunein.',
      'Thanda hone par chhilka utarein aur fork se mash karein.',
      'Kadhai me sarson ka tel garm karein, jeera, adrak aur pyaz golden hone tak bhoonein.',
      'Tamatar, hare matar aur masale dalkar tel chhutne tak pakayein.',
      'Mashed baingan dalein aur 5-7 minute medium aanch par bhoonein taaki smoky swad ghul jaye.',
      'Hara dhaniya dalkar bajra roti ke sath enjoy karein.'
    ],
    expertHealthyTip: 'Baingan ko bhunte waqt uske cut ke andar lasan bhar dein, isse lasan roasted hokar makkhan jaisa swadisht ban jata hai.',
    bestTimeToEat: 'Lunch ya dinner.',
    suitableFor: ['Diabetics', 'Weight watchers'],
    emoji: '🍆',
    accentColor: '#6b21a8'
  },
  {
    id: 'bhindi-masala',
    name: 'Crispy Non-Sticky Bhindi Masala (Okra)',
    hindiName: 'भिंडी मसाला',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Fresh tender okra pan-roasted with cumin, dry mango powder, fennel & onions',
    tasteProfile: 'Kurkuri, halki chatpati, saunf aur amchur ki khushboo se bhari hui',
    healthTags: ['Diabetic Friendly', 'Gut Friendly', 'Weight Loss'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    baseServings: 3,
    calories: 125,
    macros: { proteinGrams: 3.2, carbsGrams: 14, fatGrams: 3.8, fiberGrams: 5.0 },
    fayde: [
      { title: 'Insulin Production Booster', description: 'Bhindi me maujood myricetin tatva blood sugar levels ko naturally control karta hai.' },
      { title: 'Gut Mucilage Healer', description: 'Bhindi ka natural chipchipa ras aanto (intestines) ki lining ko repair karta hai aur constipation dur karta hai.' }
    ],
    nuksan: [
      { title: 'Kidney Stone Rogi Parhez Karein', description: 'Bhindi me oxalates hote hain, pathri ke mariz kam matra me khayein.' }
    ],
    ingredients: [
      { item: 'Taaza Bhindi (Sukhi hui & kati)', quantity: 350, unit: 'grams' },
      { item: 'Pyaz (Lachhe me kati)', quantity: 1, unit: 'medium' },
      { item: 'Saunf Powder (Fennel)', quantity: 1, unit: 'tsp' },
      { item: 'Amchur Powder (Dry mango)', quantity: 1, unit: 'tsp' },
      { item: 'Dhaniya, Haldi, Lal Mirch', quantity: 1.5, unit: 'tsp combined' },
      { item: 'Sarson ka Tel', quantity: 1, unit: 'tsp' },
      { item: 'Ajwain aur Namak', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Bhindi ko dho kar kapde se acche se sukha lein (paani hone se chipchipi banti hai) aur 1 inch ke tukdo me kaatein.',
      'Kadhai me 1 chammach tel garm karein aur ajwain tadkayein.',
      'Bhindi dalkar bina dhake tez aanch par 5 minute saute karein jab tak chipchipahat khatam na ho.',
      'Pyaz aur saare sukhe masale dalein.',
      'Dhimi aanch par 5 minute pakayein aur aakhir me amchur powder milayein.'
    ],
    expertHealthyTip: 'Bhindi me namak hamesha pakne ke aakhir me dalein, pehle dalne se bhindi paani chhod deti hai aur chipchipi ho jati hai.',
    bestTimeToEat: 'Lunch me phulka ke sath.',
    suitableFor: ['Diabetics', 'Digestive issues', 'Family'],
    emoji: '🥒',
    accentColor: '#16a34a'
  },
  {
    id: 'karela-sabzi',
    name: 'Bitter Gourd Stir-Fry with Onions (Karela Sabzi)',
    hindiName: 'करेला प्याज की सब्जी',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Sliced bitter gourd caramelized with lots of onions, fennel seeds & raw mango',
    tasteProfile: 'Khatta, halka meetha pyaz ka flavor aur karele ki swasthya-vardhak karwahat',
    healthTags: ['Diabetic Friendly', 'Weight Loss', 'Immunity Booster'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    baseServings: 3,
    calories: 110,
    macros: { proteinGrams: 2.8, carbsGrams: 15, fatGrams: 3.2, fiberGrams: 4.8 },
    fayde: [
      { title: 'Natural Plant Insulin (Polypeptide-p)', description: 'Karela pancreas ko stimulate karke blood sugar ko 30-40% tak naturally kam karta hai.' },
      { title: 'Khoon Saaf Karta Hai', description: 'Charantin aur momordicin khoon ke vishakt tatva nikaal kar acne aur daag-dhabbe dur karte hain.' },
      { title: 'Liver Detox', description: 'Fatty liver aur pachan vikaar me amrit tulya hai.' }
    ],
    nuksan: [
      { title: 'Garbhavastha Me Parhez', description: 'Pregnant aur breastfeeding mahilayein karela zyada na khayein.' },
      { title: 'Hypoglycemia Risk', description: 'Agar sugar ki dava le rahe hain to regular check karein kyunki karela sugar bahut tezi se girata hai.' }
    ],
    ingredients: [
      { item: 'Taaza Karela (Gol kata)', quantity: 300, unit: 'grams' },
      { item: 'Pyaz (Zyada matra me lachhedar)', quantity: 2, unit: 'large' },
      { item: 'Saunf (Moti fennel seeds)', quantity: 1.5, unit: 'tsp' },
      { item: 'Kachi Kairi (Raw mango grated)', quantity: 2, unit: 'tbsp' },
      { item: 'Sarson ka Tel', quantity: 1, unit: 'tsp' },
      { item: 'Haldi, Dhaniya, Lal Mirch, Namak', quantity: 1.5, unit: 'tsp' }
    ],
    instructions: [
      'Karele par thoda namak lagakar 15 minute rakhein aur halka nichod lein taaki teekhi karwahat kam ho.',
      'Sarson ka tel garm karke saunf aur hing ka tadka lagayein.',
      'Karela dalkar 8-10 minute dhimi aanch par brown hone tak bhunein.',
      'Kati pyaz milayein aur translucent hone tak pakayein.',
      'Sukhe masale aur kachi kairi dalkar 5 minute aur bhoonein.'
    ],
    expertHealthyTip: 'Karele ka chilka kabhi na chheelein, 80% medicated nutrients aur charantin uske bahari chilke me hi hote hain.',
    bestTimeToEat: 'Lunch me dahi aur roti ke sath.',
    suitableFor: ['Diabetics', 'Skin problems', 'Weight loss'],
    emoji: '🥒',
    accentColor: '#15803d'
  },
  {
    id: 'sarson-ka-saag',
    name: 'Traditional Punjabi Sarson Ka Saag',
    hindiName: 'सरसों का साग',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Slow-simmered winter greens (mustard, bathua & spinach) pureed with maize flour',
    tasteProfile: 'Earthy, sarson ka pungent swad, adrak-lasan ki garmi aur makki atte ki soni texture',
    healthTags: ['Iron Rich', 'Immunity Booster', 'Heart Healthy'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    baseServings: 4,
    calories: 160,
    macros: { proteinGrams: 6.5, carbsGrams: 18, fatGrams: 4.8, fiberGrams: 7.2 },
    fayde: [
      { title: 'Winter Immunity & Warmth', description: 'Sarson ke patte sharir me internal warmth paida karte hain aur thand se bachate hain.' },
      { title: 'Vitamins K, A & C Powerhouse', description: 'Haddiyo ki mazbooti aur immunity ke liye behtareen.' },
      { title: 'Cholesterol Lowering Fiber', description: 'Bile binding fiber dil ko block hone se bachata hai.' }
    ],
    nuksan: [
      { title: 'Thyroid (Goitrogens)', description: 'Kacha sarson thyroid ko affect kar sakta hai, lekin acche se ubalne par goitrogens nasht ho jate hain.' }
    ],
    ingredients: [
      { item: 'Sarson ke Patte (Mustard greens)', quantity: 500, unit: 'grams' },
      { item: 'Bathua aur Palak', quantity: 250, unit: 'grams combined' },
      { item: 'Makki ka Atta (Cornmeal)', quantity: 2, unit: 'tbsp' },
      { item: 'Adrak aur Lasan (Barik kata)', quantity: 2, unit: 'tbsp each' },
      { item: 'Hari Mirch', quantity: 3, unit: 'pieces' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tbsp' },
      { item: 'Namak', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Teeno saag ko 3-4 baar saaf paani se dho kar barik kaat lein.',
      'Cooker me adrak, lasan, hari mirch aur namak ke sath 1 cup paani dalkar 4-5 seeti lagayein.',
      'Hand blender ya mathani se mash karein, thoda-thoda makki ka atta milate hue chalaayein.',
      'Pan me desi ghee garm karein, barik kata lasan aur sukhi lal mirch bhunein.',
      'Saag dalein aur 10-15 minute dhimi aanch par paka kar makki ki roti ke sath serve karein.'
    ],
    expertHealthyTip: 'Saag me Bathua zaroor milayein, Bathua sarson ki teekhi karwahat ko natural tarike se neutralize karta hai.',
    bestTimeToEat: 'Sardiyo ke mausam me lunch ya dinner.',
    suitableFor: ['Families', 'Elderly', 'Athletes in winter'],
    emoji: '🥬',
    accentColor: '#166534'
  },
  {
    id: 'gobi-gajar-matar',
    name: 'Winter Gobi Gajar Matar Dry Sabzi',
    hindiName: 'गोभी गाजर मटर',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Vibrant medley of fresh cauliflower florets, red carrots & sweet green peas',
    tasteProfile: 'Sabziyo ki natural mithaas, adrak aur hing-jeere ka balanced home-style swad',
    healthTags: ['Low Calorie', 'Weight Loss', 'Immunity Booster'],
    prepTimeMinutes: 12,
    cookTimeMinutes: 15,
    baseServings: 3,
    calories: 115,
    macros: { proteinGrams: 4.2, carbsGrams: 16, fatGrams: 3.0, fiberGrams: 4.8 },
    fayde: [
      { title: 'Vitamin A & C Boost', description: 'Laal gaajar ka beta-carotene aankho ke liye aur gobi ka Vitamin C skin aur immunity ke liye shandar hai.' },
      { title: 'Low Calorie Everyday Meal', description: 'Pet bhar ke khayein tab bhi vajan badhne ka koi darr nahi rehta.' }
    ],
    nuksan: [
      { title: 'Gobi Se Gas', description: 'Gobi me raffinose hota hai; adrak aur hing zaroor dalein taaki gas na bane.' }
    ],
    ingredients: [
      { item: 'Phool Gobi (Florets)', quantity: 1.5, unit: 'cup' },
      { item: 'Laal Gaajar (Sliced)', quantity: 1, unit: 'cup' },
      { item: 'Hare Matar (Fresh peas)', quantity: 0.5, unit: 'cup' },
      { item: 'Adrak (Julienned)', quantity: 1, unit: 'tbsp' },
      { item: 'Jeera, Hing, Haldi, Dhaniya', quantity: 1.5, unit: 'tsp' },
      { item: 'Sarson ka Tel / Ghee', quantity: 1, unit: 'tsp' },
      { item: 'Namak & Amchur', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Gobi ko gungune namak wale paani me 5 minute bhigo kar saaf karein.',
      'Kadhai me tel garm karke jeera aur hing tadkayein.',
      'Gobi, gaajar aur matar dalein, sath me haldi, namak aur adrak milayein.',
      'Bina paani daale dhak kar dhimi aanch par 10-12 minute bhaap me pakne dein.',
      'Pakne par dhaniya powder, amchur aur garam masala milakar 2 minute bhoonein.'
    ],
    expertHealthyTip: 'Sabzi me paani na dalein, sabzi ke apne natural ras me bhaap me pakne se vitamins paani me ghul kar nasht nahi hote.',
    bestTimeToEat: 'Lunch ya dinner me daal ke sath side dish.',
    suitableFor: ['All age groups', 'Weight loss'],
    emoji: '🥕',
    accentColor: '#ea580c'
  },
  {
    id: 'lauki-ki-sukhi-sabzi',
    name: 'Simple Jeera Lauki (Bottle Gourd)',
    hindiName: 'जीरा लौकी की सब्जी',
    category: 'Main Course',
    region: 'Pan India',
    tagline: 'Delicate bottle gourd simmered with cumin seeds, turmeric, green chili & fresh coriander',
    tasteProfile: 'Halka, meetha-namkeen, bilkul shant pet ko thandak dene wala swad',
    healthTags: ['Weight Loss', 'Heart Healthy', 'Easy Digestion', 'Low Calorie'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    baseServings: 2,
    calories: 85,
    macros: { proteinGrams: 1.8, carbsGrams: 10, fatGrams: 2.2, fiberGrams: 3.5 },
    fayde: [
      { title: 'Zero Fat Natural Hydration', description: 'Lauki me 96% paani hota hai, ye sharir ke dehydration aur bloating ko jad se mitati hai.' },
      { title: 'Bile Acid Sequestrant', description: 'Fat metabolism ko tezi se badhati hai.' }
    ],
    nuksan: [
      { title: 'Taste Plain Lag Sakta Hai', description: 'Kayi logo ko boring lagti hai, isme nimbu aur bhuna jeera milakar swadisht banayein.' }
    ],
    ingredients: [
      { item: 'Naram Lauki (Chhoti cubes)', quantity: 3, unit: 'cups' },
      { item: 'Jeera (Cumin)', quantity: 1, unit: 'tsp' },
      { item: 'Hari Mirch (Slit)', quantity: 1, unit: 'piece' },
      { item: 'Haldi aur Sendha Namak', quantity: 1, unit: 'tsp' },
      { item: 'Desi Ghee', quantity: 0.5, unit: 'tsp' },
      { item: 'Hara Dhaniya & Nimbu Ras', quantity: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Chhote cooker ya pan me aadha chammach ghee garm karein aur jeera chatkayein.',
      'Hari mirch aur lauki ke tukde dalein.',
      'Haldi aur sendha namak milayein, cooker me 1 seeti lagwayein.',
      'Cooker kholkar hara dhaniya aur nimbu nichodein.'
    ],
    expertHealthyTip: 'Agar aapko vajan kam karna hai to hafte me 3 din dinner me sirf 1 katori jeera lauki aur 1 phulka khayein.',
    bestTimeToEat: 'Light dinner.',
    suitableFor: ['Post-surgery', 'Hypertension', 'Dieting'],
    emoji: '🥣',
    accentColor: '#22c55e'
  },
  {
    id: 'mushroom-matar-masala',
    name: 'Home-Style Mushroom Matar Curry',
    hindiName: 'मशरूम मटर मसाला',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Juicy white button mushrooms and tender green peas in an onion-tomato-garlic curry',
    tasteProfile: 'Umami, juicy mushroom bite, creamy bina cream ki rich home gravy',
    healthTags: ['High Protein', 'Immunity Booster', 'Low Calorie', 'Diabetic Friendly'],
    prepTimeMinutes: 12,
    cookTimeMinutes: 18,
    baseServings: 3,
    calories: 145,
    macros: { proteinGrams: 7.0, carbsGrams: 15, fatGrams: 4.2, fiberGrams: 4.2 },
    fayde: [
      { title: 'Natural Vitamin D & Selenium', description: 'Mushroom un gine-chune vegetarian foods me se hai jo natural Vitamin D pradan karte hain.' },
      { title: 'Immunity White Blood Cells Boost', description: 'Beta-glucans immune system ko active rakhte hain.' }
    ],
    nuksan: [
      { title: 'Thorough Cleaning Required', description: 'Mushroom ko aate aur gungune paani se acche se dho kar hi banayein.' }
    ],
    ingredients: [
      { item: 'White Button Mushroom', quantity: 250, unit: 'grams sliced' },
      { item: 'Taaza Matar (Peas)', quantity: 0.75, unit: 'cup' },
      { item: 'Pyaz aur Tamatar Puree', quantity: 1, unit: 'cup' },
      { item: 'Adrak-Lasan Paste', quantity: 1, unit: 'tbsp' },
      { item: 'Dhaniya, Jeera, Kasuri Methi', quantity: 1.5, unit: 'tsp' },
      { item: 'Sarson ka Tel / Ghee', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Mushroom ko dho kar 4 hisson me kaatein.',
      'Kadhai me tel garm karein, jeera aur pyaz paste bhunein.',
      'Adrak-lasan aur tamatar puree dalkar masale bhunein.',
      'Matar aur mushroom dalein, mushroom apna paani chhodegi.',
      'Dhak kar 8-10 minute dhimi aanch par pakayein, kasuri methi dalein.'
    ],
    expertHealthyTip: 'Mushroom ko kaatne ke baad 15 minute dhoop me rakhne se unka Vitamin D level 200% tak badh jata hai.',
    bestTimeToEat: 'Lunch ya dinner.',
    suitableFor: ['Diabetics', 'Low-calorie dieters', 'Vegetarians'],
    emoji: '🍄',
    accentColor: '#78350f'
  },
  {
    id: 'parwal-aloo-healthy',
    name: 'Pointed Gourd Stir Fry (Parwal Ki Sabzi)',
    hindiName: 'परवल की सब्जी',
    category: 'Main Course',
    region: 'East India',
    tagline: 'Tender pointed gourd sauteed with pan-roasted cumin, turmeric & aromatic panch phoron',
    tasteProfile: 'Crunchy outer skin, juicy soft flesh, panch phoron ki anokhi mehak',
    healthTags: ['Easy Digestion', 'Weight Loss', 'Heart Healthy'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    baseServings: 2,
    calories: 95,
    macros: { proteinGrams: 2.2, carbsGrams: 12, fatGrams: 3.0, fiberGrams: 3.8 },
    fayde: [
      { title: 'Ayurvedic Blood Purifier', description: 'Parwal khoon ko saaf karta hai aur seasonal flu/fever se bachata hai.' },
      { title: 'Jaundice & Liver Health', description: 'Liver ke enzymes ko normal karne me sahayak.' }
    ],
    nuksan: [
      { title: 'Kade Beej Nikal Lein', description: 'Agar parwal ke andar beej peele ya sakht ho gaye hon to unhe nikaal kar hi pakayein.' }
    ],
    ingredients: [
      { item: 'Taaza Parwal (Pointed gourd)', quantity: 250, unit: 'grams' },
      { item: 'Panch Phoron (Paanch masale)', quantity: 0.5, unit: 'tsp' },
      { item: 'Haldi, Lal Mirch, Dhaniya Powder', quantity: 1, unit: 'tsp' },
      { item: 'Sarson ka Tel', quantity: 1, unit: 'tsp' },
      { item: 'Sendha Namak', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Parwal ko chaku se halka kurech lein aur 4 lambe tukdo me kaat lein.',
      'Kadhai me sarson ka tel garm karein aur panch phoron tadkayein.',
      'Parwal dalkar dhimi aanch par sunehra hone tak 8-10 minute bhunein.',
      'Masale aur namak milayein aur 2 minute aur pakayein.'
    ],
    expertHealthyTip: 'Parwal ko chilne ki bajay sirf kurchiye, uska green skin pet ke digestion ke liye sabse best hota hai.',
    bestTimeToEat: 'Lunch me dal-chawal ke sath.',
    suitableFor: ['Liver patients', 'All adults'],
    emoji: '🥒',
    accentColor: '#16a34a'
  }
];

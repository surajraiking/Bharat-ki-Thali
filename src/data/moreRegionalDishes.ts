import { Dish } from '../types';

export const moreRegionalDishes: Dish[] = [
  {
    id: 'gujarati-handvo',
    name: 'Gujarati Mixed Lentil Handvo',
    hindiName: 'गुजराती हांडवो',
    category: 'Snacks & Chaat',
    region: 'West India',
    tagline: 'Savory baked lentil & rice cake packed with grated bottle gourd, sesame & mustard',
    tasteProfile: 'Crispy til-rai crust, andar se soft aur spongy, lauki aur khameer ki lajawab mithaas',
    healthTags: ['High Protein', 'Gluten Free', 'Gut Friendly', 'Weight Loss'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    baseServings: 4,
    calories: 165,
    macros: { proteinGrams: 7.2, carbsGrams: 24, fatGrams: 4.5, fiberGrams: 4.8 },
    fayde: [
      { title: 'Sabhi Dalo Ka Poshan', description: 'Chana dal, toor dal, urad dal aur chawal ko dahi ke sath ferment karke banta hai, complete protein deta hai.' },
      { title: 'Lauki Ka Chhupa Fayda', description: 'Bache jo lauki nahi khate, wo handvo me shauq se khate hain.' },
      { title: 'Gut Healing Fermentation', description: 'Probiotics aur enzymes gut health ko behtar banate hain.' }
    ],
    nuksan: [
      { title: 'Zyada Tel Me Na Talen', description: 'Non-stick pan me kam tel me dhak kar sekna hi ise healthy banata hai.' }
    ],
    ingredients: [
      { item: 'Handvo Dal Mix (Chana, Toor, Urad & Chawal soaked & ground)', quantity: 1.5, unit: 'cup' },
      { item: 'Grated Lauki (Bottle gourd)', quantity: 1, unit: 'cup' },
      { item: 'Taaza Dahi', quantity: 0.5, unit: 'cup' },
      { item: 'Safed Til (Sesame)', quantity: 1.5, unit: 'tbsp' },
      { item: 'Rai, Hing, Kadi Patta', quantity: 1, unit: 'tsp' },
      { item: 'Adrak-Hari Mirch Paste', quantity: 1, unit: 'tbsp' },
      { item: 'Haldi, Namak, Eno', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Pise batter me grated lauki, dahi, adrak-mirch, haldi aur namak milayein.',
      'Baking se pehle 1 chammach Eno dalkar milayein.',
      'Pan me 1 chammach tel garm karke safed til, rai aur kadi patta tadkayein.',
      'Batter ko 1 inch mota failayein aur dhak kar dhimi aanch par 15 minute ek taraf se golden sek lein.',
      'Palt kar doosri taraf se 5-7 minute crispy hone tak sekein aur pieces kaat kar hari chutney ke sath khayein.'
    ],
    expertHealthyTip: 'Batter me gajar aur palak bhi mila sakte hain, ye ek poora balance meal ban jata hai.',
    bestTimeToEat: 'Nashta ya evening high-protein snack.',
    suitableFor: ['Families', 'Vegetarians', 'Diabetics'],
    emoji: '🥧',
    accentColor: '#ca8a04'
  },
  {
    id: 'kerala-avial',
    name: 'Kerala Mixed Veg Avial',
    hindiName: 'केरल अवियल',
    category: 'Main Course',
    region: 'South India',
    tagline: 'Traditional Kerala celebration stew of 8 indigenous vegetables simmered in coconut yogurt gravy',
    tasteProfile: 'Mridu, soothing, kachha nariyal tel aur kadi patte ki dilchasp sugandh',
    healthTags: ['Heart Healthy', 'Easy Digestion', 'Immunity Booster'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    baseServings: 4,
    calories: 140,
    macros: { proteinGrams: 3.5, carbsGrams: 16, fatGrams: 6.8, fiberGrams: 5.5 },
    fayde: [
      { title: 'Sabhi Rang Ki Sabziyo Ka Blend', description: 'Sahjan, kela, kaddu, gajar, beans, yam milkar har tarah ke phytonutrients pradan karte hain.' },
      { title: 'Zero Fry Healthy Curry', description: 'Sabziyan bhaap me paka kar kache pise nariyal aur dahi me banayi jati hain, bina kisi tel me bhune.' }
    ],
    nuksan: [
      { title: 'Dahi Ko Ubaalein Nahi', description: 'Dahi milane ke baad tez aanch par na ubaalein varna dahi phat sakta hai.' }
    ],
    ingredients: [
      { item: 'Mix Veggies (Kacha Kela, Sahjan, Gajar, Beans, Kaddu)', quantity: 3, unit: 'cups cut in batons' },
      { item: 'Kacha Nariyal (Grated)', quantity: 0.5, unit: 'cup' },
      { item: 'Jeera aur Hari Mirch', quantity: 1, unit: 'tsp' },
      { item: 'Taaza Dahi (Whisked)', quantity: 0.5, unit: 'cup' },
      { item: 'Kacha Nariyal Tel (Virgin coconut oil)', quantity: 1, unit: 'tsp' },
      { item: 'Kadi Patta, Haldi, Namak', quantity: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Sabhi sabziyo ko lambe tukdo me kaatein aur thode paani, haldi aur namak ke sath 80% naram ubaal lein.',
      'Nariyal, jeera aur hari mirch ko dar-dara pees lein bina paani ke.',
      'Ubli sabziyo me nariyal paste dalein aur 2-3 minute simmer karein.',
      'Aanch band karein aur phenti hui dahi milayein.',
      'Upar se 1 chammach kacha nariyal tel aur taaza kadi patta dalkar dhak dein.'
    ],
    expertHealthyTip: 'Raw virgin coconut oil upar se dalne se lauric acid milta hai jo body ki immunity badhata hai.',
    bestTimeToEat: 'Lunch me brown rice ke sath.',
    suitableFor: ['All age groups', 'Heart care', 'Digestive issues'],
    emoji: '🥥',
    accentColor: '#059669'
  },
  {
    id: 'ven-pongal',
    name: 'South Indian Ven Pongal',
    hindiName: 'वेन पोंगल',
    category: 'Breakfast',
    region: 'South India',
    tagline: 'Silky comfort porridge of short-grain rice and roasted yellow moong dal tempered with whole black pepper & ginger',
    tasteProfile: 'Pighalta hua makkhan jaisa, desi ghee, sabut kaali mirch ka pop aur adrak ki garmi',
    healthTags: ['Easy Digestion', 'Gut Friendly', 'High Protein'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    baseServings: 3,
    calories: 215,
    macros: { proteinGrams: 7.8, carbsGrams: 34, fatGrams: 5.5, fiberGrams: 3.5 },
    fayde: [
      { title: 'Ayurvedic Comfort Food', description: 'Moong dal aur chawal ka balance pet ko sukoon deta hai aur thakan mitata hai.' },
      { title: 'Sabut Kaali Mirch Ka Fayda', description: 'Kaali mirch ke daane chew karne se pachan ras active hote hain aur gas nahi banti.' }
    ],
    nuksan: [
      { title: 'Ghee Ka Dhyan Rakhein', description: 'Traditional recipe me ghee zyada hota hai, healthy version me 1-2 chammach ghee hi lagayein.' }
    ],
    ingredients: [
      { item: 'Chawal (Raw rice)', quantity: 0.5, unit: 'cup' },
      { item: 'Peeli Moong Dal (Bhuni hui)', quantity: 0.5, unit: 'cup' },
      { item: 'Sabut Kaali Mirch & Jeera', quantity: 1, unit: 'tsp each' },
      { item: 'Barik Kata Adrak', quantity: 1, unit: 'tbsp' },
      { item: 'Kaju ke Tukde', quantity: 6, unit: 'pieces' },
      { item: 'Kadi Patta & Hing', quantity: 1, unit: 'tsp' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Moong dal ko dry roast karein aur chawal ke sath dho lein.',
      'Cooker me 4 cup paani aur namak dalkar 4-5 seeti lagwayein taaki bilkul naram mash ho sake.',
      'Tadka pan me ghee garm karein, kaju, jeera, sabut kaali mirch, adrak, hing aur kadi patta bhoonein.',
      'Tadke ko ubale hue pongal me dalkar acchi tarah milayein.',
      'Nariyal chutney aur sambar ke sath garma-garam parosein.'
    ],
    expertHealthyTip: 'Pongal me moong dal ki matra chawal ke barabar rakhein, isse ye high-protein aur low-carb ban jata hai.',
    bestTimeToEat: 'Subah nashte me.',
    suitableFor: ['Post-illness recovery', 'Elderly', 'Students'],
    emoji: '🍚',
    accentColor: '#eab308'
  },
  {
    id: 'bihari-baingan-chokha',
    name: 'Bihari Smoked Baingan Tamatar Chokha',
    hindiName: 'बैंगन टमाटर चोखा',
    category: 'Main Course',
    region: 'East India',
    tagline: 'Charcoal-grilled eggplant, tomatoes & garlic mashed with cold-pressed mustard oil, green chilies & onions',
    tasteProfile: 'Smoky, kache sarson tel ka jhanjhanata pungency, teekhi hari mirch aur roasted mithaas',
    healthTags: ['Low Calorie', 'Heart Healthy', 'Weight Loss'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    baseServings: 2,
    calories: 90,
    macros: { proteinGrams: 2.5, carbsGrams: 12, fatGrams: 3.5, fiberGrams: 4.5 },
    fayde: [
      { title: 'Zero Fry Traditional Food', description: 'Poora khana aag par bhun kar banta hai, koi processed oil ya frying nahi.' },
      { title: 'Kacha Sarson Tel (MUFA)', description: 'Cold-pressed raw mustard oil me ALA omega-3 fatty acid hota hai jo dil ko bachata hai.' }
    ],
    nuksan: [
      { title: 'Kache Tel Ka Teekha Pan', description: 'Jinhe kacha sarson tel na pasand ho wo thoda kam dalein ya halka garm kar ke dalein.' }
    ],
    ingredients: [
      { item: 'Bharta Baingan', quantity: 1, unit: 'large roasted' },
      { item: 'Pake Tamatar', quantity: 2, unit: 'roasted on flame' },
      { item: 'Lasan aur Hari Mirch (Flame roasted)', quantity: 4, unit: 'cloves' },
      { item: 'Barik Kata Pyaz', quantity: 0.5, unit: 'cup' },
      { item: 'Kacha Kachi Ghani Sarson Tel', quantity: 1, unit: 'tsp' },
      { item: 'Sendha Namak & Hara Dhaniya', quantity: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Baingan, tamatar aur lasan ko gas ki aanch par chaaron taraf se chhilka kala hone tak bhun lein.',
      'Thanda hone par chhilka utarein aur bowl me hath ya fork se mash karein.',
      'Barik kata pyaz, hari mirch aur sendha namak milayein.',
      'Upar se 1 chammach kacha sarson ka tel aur hara dhaniya dalkar mix karein.',
      'Sattu paratha ya roti ke sath anand lein.'
    ],
    expertHealthyTip: 'Lasan ko baingan ke sath aag par bhunne se lasan ki acidity khatam ho jati hai aur swad meethi garlic jaisa ho jata hai.',
    bestTimeToEat: 'Lunch ya dinner.',
    suitableFor: ['All age groups', 'Weight loss'],
    emoji: '🍆',
    accentColor: '#581c87'
  },
  {
    id: 'punjabi-missi-roti',
    name: 'Spiced Besan Missi Roti',
    hindiName: 'पंजाबी मिस्सी रोटी',
    category: 'Rotis & Grains',
    region: 'North India',
    tagline: 'Nutritious flatbread combining Bengal gram flour and whole wheat seasoned with ajwain, onions & kasuri methi',
    tasteProfile: 'Sondhi, kurkuri, ajwain aur kasuri methi ki dhamaakedar khushboo',
    healthTags: ['High Protein', 'Diabetic Friendly', 'Weight Loss'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    baseServings: 2,
    calories: 155,
    macros: { proteinGrams: 6.8, carbsGrams: 24, fatGrams: 3.2, fiberGrams: 4.8 },
    fayde: [
      { title: 'Normal Roti Se Double Protein', description: 'Besan aur gehun ka 50-50 mix roti ko protein rich banata hai.' },
      { title: 'Sugar Spike Control', description: 'Chane ka atta carbohydrates ke absorption ko dheema kar deta hai.' }
    ],
    nuksan: [
      { title: 'Sukhi Ban Sakti Hai', description: 'Bina acche se goonde roti sakht ho sakti hai, thoda dahi milakar goondein.' }
    ],
    ingredients: [
      { item: 'Besan (Gram flour)', quantity: 0.75, unit: 'cup' },
      { item: 'Gehun ka Atta', quantity: 0.75, unit: 'cup' },
      { item: 'Barik Kata Pyaz', quantity: 0.25, unit: 'cup' },
      { item: 'Ajwain, Kasuri Methi, Anardana', quantity: 1, unit: 'tsp each' },
      { item: 'Hari Mirch aur Hara Dhaniya', quantity: 2, unit: 'tbsp' },
      { item: 'Hing, Haldi, Namak', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Dono atte, pyaz, ajwain, kasuri methi aur masale milayein.',
      'Gungune paani se thoda sakht aata goondein aur 10 minute rest dein.',
      'Roti belein aur lohe ke tave par sunehra sek lein.',
      'Halka desi ghee lagayein aur dahi ya dal ke sath serve karein.'
    ],
    expertHealthyTip: 'Atta goondte samay 1 chammach dahi aur anardana powder dalne se missi roti behad khasta aur swadisht banti hai.',
    bestTimeToEat: 'Lunch.',
    suitableFor: ['Diabetics', 'Bodybuilders', 'Daily meal'],
    emoji: '🫓',
    accentColor: '#d97706'
  },
  {
    id: 'maharashtrian-pithla',
    name: 'Zunka / Maharashtrian Pithla',
    hindiName: 'झुणका / पिठलं',
    category: 'Main Course',
    region: 'West India',
    tagline: 'Quick rustic gram flour porridge tempered with mustard, garlic, green chilies & curry leaves',
    tasteProfile: 'Gadha, masaledar, kache lasan aur rai-jeere ka authentic village flavor',
    healthTags: ['High Protein', 'Gluten Free', 'Easy Digestion'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    baseServings: 2,
    calories: 160,
    macros: { proteinGrams: 8.2, carbsGrams: 20, fatGrams: 4.8, fiberGrams: 4.5 },
    fayde: [
      { title: 'Jab Ghar Me Koi Sabzi Na Ho', description: '5 minute me banne wala sabse takatwar protein aahar jo pachan me halka hota hai.' },
      { title: 'Bhakri Ka Best Sathi', description: 'Jowar ya bajra roti ke sath complete amino-acid protein banata hai.' }
    ],
    nuksan: [
      { title: 'Lumps Na Banne Dein', description: 'Besan ko paani me pehle ghol kar dalein taaki gaanth na pade.' }
    ],
    ingredients: [
      { item: 'Besan', quantity: 0.75, unit: 'cup' },
      { item: 'Lasan (Koota hua)', quantity: 8, unit: 'cloves' },
      { item: 'Hari Mirch aur Kadi Patta', quantity: 1, unit: 'tbsp' },
      { item: 'Rai, Jeera, Hing, Haldi', quantity: 1, unit: 'tsp' },
      { item: 'Sarson ka Tel ya Ghee', quantity: 1, unit: 'tsp' },
      { item: 'Paani', quantity: 2, unit: 'cups' }
    ],
    instructions: [
      'Besan ko 2 cup paani me haldi aur namak ke sath bina lumps ke ghol lein.',
      'Kadhai me tel garm karke rai, jeera, koota lasan aur hari mirch tadkayein.',
      'Besan ka ghol dalkar lagatar hilate rahein jab tak gadha na ho jaye.',
      'Dhak kar 5 minute dhimi aanch par bhaap me pakayein.',
      'Bhakri aur pyaz ke sath parosein.'
    ],
    expertHealthyTip: 'Lasan ko peesne ki bajay okhli me koot kar dalein, isse Zunka ka traditional rustic swad 10 guna badh jata hai.',
    bestTimeToEat: 'Lunch ya dinner.',
    suitableFor: ['Gluten free dieters', 'Quick meals'],
    emoji: '🍲',
    accentColor: '#ea580c'
  },
  {
    id: 'gatte-ki-sabzi',
    name: 'Rajasthani Steamed Gatte Ki Sabzi',
    hindiName: 'गट्टे की सब्जी',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Steamed spiced gram flour dumplings simmered in a light probiotic curd gravy',
    tasteProfile: 'Mulayam gatte, dahi ki khatas, saunf aur kasuri methi ki royal khushboo',
    healthTags: ['High Protein', 'Gluten Free', 'Gut Friendly'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    baseServings: 3,
    calories: 185,
    macros: { proteinGrams: 8.5, carbsGrams: 22, fatGrams: 6.2, fiberGrams: 4.2 },
    fayde: [
      { title: 'Zero Vegetable High Protein Curry', description: 'Desert climate ki anokhi sabzi jisme bina sabziyo ke bhi behtareen poshan milta hai.' },
      { title: 'Steamed Dumplings', description: 'Gatte tale nahi jate, ubaale jate hain isliye calories control me rehti hain.' }
    ],
    nuksan: [
      { title: 'Dahi Fatne Ka Risk', description: 'Dahi ki gravy me jab tak ubaal na aaye, lagatar chalana padta hai.' }
    ],
    ingredients: [
      { item: 'Besan', quantity: 1, unit: 'cup' },
      { item: 'Ajwain, Saunf, Kasuri Methi', quantity: 1, unit: 'tsp each' },
      { item: 'Taaza Dahi (Gravy ke liye)', quantity: 1, unit: 'cup whisked' },
      { item: 'Ghee', quantity: 1, unit: 'tsp for dough moyan' },
      { item: 'Dhaniya, Haldi, Lal Mirch, Namak', quantity: 1.5, unit: 'tsp' }
    ],
    instructions: [
      'Besan me ajwain, namak, 1 chammach dahi aur 1 chammach ghee dalkar naram aata goondein.',
      'Rolls banakar ubalte paani me 10 minute ubaalein (bubbles aane par nikaal kar kaat lein).',
      'Kadhai me ghee garm karein, jeera aur hing tadkakar dahi aur masale dalein aur lagatar hilayein jab tak ubaal na aaye.',
      'Katte hue gatte dalein aur 5-7 minute gravy me pakayein.'
    ],
    expertHealthyTip: 'Gatte ubalne ke baad bache hue paani ko fekein nahi, usi se dahi ki gravy banayein, gravy lajawab banegi.',
    bestTimeToEat: 'Lunch.',
    suitableFor: ['Vegetarians', 'Desert/Winter food lovers'],
    emoji: '🥘',
    accentColor: '#d97706'
  },
  {
    id: 'amla-ginger-shot',
    name: 'Fresh Amla & Ginger Immunity Shorba',
    hindiName: 'आँवला अदरक इम्युनिटी शॉट',
    category: 'Drinks & Raita',
    region: 'Pan India',
    tagline: 'Pure liquid sunshine: fresh Indian gooseberry juice crushed with spicy ginger, mint & honey',
    tasteProfile: 'Khatta, astringent, peene ke baad gale me meetha ehsas aur taazgi',
    healthTags: ['Immunity Booster', 'Iron Rich', 'Low Calorie', 'Heart Healthy'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    baseServings: 2,
    calories: 35,
    macros: { proteinGrams: 0.8, carbsGrams: 8.0, fatGrams: 0.2, fiberGrams: 1.5 },
    fayde: [
      { title: 'Duniya Ka Sabse Bada Vitamin C Source', description: '1 amla me 20 santro (oranges) ke barabar Vitamin C hota hai jo baalo, aankhon aur immunity ko naya janam deta hai.' },
      { title: 'Anti-Aging & Collagen Builder', description: 'Twacha ki jhurriyan mitane aur liver ko clean karne me no. 1.' }
    ],
    nuksan: [
      { title: 'Hyperacidity Alert', description: 'Extreme acidity walo ko khali pet lene ki jagah khane ke sath ya paani mila kar lena chahiye.' }
    ],
    ingredients: [
      { item: 'Taaza Amla (Gooseberry)', quantity: 3, unit: 'pieces chopped' },
      { item: 'Taaza Adrak', quantity: 1, unit: 'inch piece' },
      { item: 'Pudina ke Patte', quantity: 10, unit: 'leaves' },
      { item: 'Sendha Namak & Kala Namak', quantity: 0.5, unit: 'tsp' },
      { item: 'Paani', quantity: 1, unit: 'glass' },
      { item: 'Shahad (Honey)', quantity: 1, unit: 'tsp optional' }
    ],
    instructions: [
      'Amla ke beej nikaal kar tukde karein.',
      'Mixer me amla, adrak, pudina aur aadha glass paani dalkar pees lein.',
      'Chhalni se chhaan lein aur thoda aur paani milayein.',
      'Kala namak aur shahad dalkar subah fresh piyen.'
    ],
    expertHealthyTip: 'Amla ka ras nikaal kar turant piyein, 30 minute se zyada rakhne par Vitamin C oxidize hone lagta hai.',
    bestTimeToEat: 'Subah khali pet.',
    suitableFor: ['Immunity improvement', 'Hair fall prevention', 'Skin glow'],
    emoji: '🫒',
    accentColor: '#16a34a'
  }
];

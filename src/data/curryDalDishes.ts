import { Dish } from '../types';

export const curryDalDishes: Dish[] = [
  {
    id: 'moong-dal-khichdi',
    name: 'Ayurvedic Moong Dal Khichdi',
    hindiName: 'मूँग दाल खिचड़ी',
    category: 'Dal & Soups',
    region: 'Pan India',
    tagline: 'Ancient Ayurvedic one-pot detox meal of yellow lentils, rice, pure ghee & cumin',
    tasteProfile: 'Garma-garam, behad comforting, desi ghee aur jeera-hing ka pavitra swad',
    healthTags: ['Easy Digestion', 'Weight Loss', 'Gut Friendly', 'Low Calorie'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    baseServings: 2,
    calories: 210,
    macros: { proteinGrams: 8.5, carbsGrams: 36, fatGrams: 3.5, fiberGrams: 5.0 },
    fayde: [
      { title: 'Pet Ke Liye Amrit', description: 'Ayurveda ke anusaar Tridosha (Vata, Pitta, Kapha) ko balance karta hai. Bimaari ya pet kharab hone par sabse pehla aahar.' },
      { title: 'Complete Protein Profile', description: 'Chawal aur moong dal ka anupaat milkar sharir ko sabhi essential amino acids deta hai.' },
      { title: 'Natural Detoxification', description: 'Digestive system ko rest deta hai aur sharir se toxins bahar nikalta hai.' }
    ],
    nuksan: [
      { title: 'Diabetics Ke Liye Savdhani', description: 'Safed chawal ki jagah brown rice ya dalia use karein taaki blood sugar control me rahe.' }
    ],
    ingredients: [
      { item: 'Peeli Moong Dal (Washed)', quantity: 0.5, unit: 'cup' },
      { item: 'Chawal (Basmati tukda ya Brown rice)', quantity: 0.5, unit: 'cup' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tsp' },
      { item: 'Jeera (Cumin seeds)', quantity: 1, unit: 'tsp' },
      { item: 'Hing (Asafoetida)', quantity: 1, unit: 'pinch' },
      { item: 'Haldi Powder', quantity: 0.5, unit: 'tsp' },
      { item: 'Adrak (Grated)', quantity: 1, unit: 'tsp' },
      { item: 'Paani', quantity: 3.5, unit: 'cups' },
      { item: 'Sendha Namak', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Moong dal aur chawal ko dho kar 20 minute ke liye bhigo dein.',
      'Pressure cooker me 1 chammach desi ghee garm karein aur jeera, hing aur grated adrak ka tadka lagayein.',
      'Bhigoyi hui dal aur chawal dalein, sath me haldi aur namak milayein.',
      '3.5 cup paani dalkar cooker band karein aur medium aanch par 3-4 seeti lagwayein.',
      'Dahi aur papad ke sath garma-garam parosein.'
    ],
    expertHealthyTip: 'Khichdi me gaajar, matar aur lauki ke tukde milane se ye aur zyada nutritious ban jati hai.',
    bestTimeToEat: 'Raat ka dinner (light digestion) ya bimaari ke baad.',
    suitableFor: ['Patients', 'Elderly', 'Infants', 'Detox dieters'],
    emoji: '🍲',
    accentColor: '#10b981'
  },
  {
    id: 'palak-paneer-healthy',
    name: 'Home-Style Low Fat Palak Paneer',
    hindiName: 'पालक पनीर',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Silky iron-rich spinach gravy infused with tender cottage cheese cubes & garlic',
    tasteProfile: 'Makkhan jaisa smooth, palak ki taazgi aur lasan-kasuri methi ki shaandar khushboo',
    healthTags: ['High Protein', 'Iron Rich', 'Diabetic Friendly', 'Calcium Rich'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    baseServings: 3,
    calories: 195,
    macros: { proteinGrams: 14.0, carbsGrams: 9.0, fatGrams: 11.5, fiberGrams: 4.8 },
    fayde: [
      { title: 'Iron aur Calcium Ka Double Dhamaka', description: 'Palak se iron aur paneer se calcium milta hai, jo haddiyo aur khoon dono ko taqat deta hai.' },
      { title: 'Low Carb Diet Ke Liye Perfect', description: 'Keto aur low-carb diet walo ke liye best sabzi hai jo blood sugar nahi badhati.' },
      { title: 'Muscles Building', description: 'Vegetarians ke liye pure natural protein ka bada srot hai.' }
    ],
    nuksan: [
      { title: 'Heavy Cream Mat Dalein', description: 'Restaurant style me malai ya cream dali jati hai, home version me low-fat milk ya dahi use karein.' },
      { title: 'Kidney Stone Rogi Parhez Karein', description: 'Palak me oxalates hote hain, jinhe pathri ki shikayat ho wo kam matra me lein.' }
    ],
    ingredients: [
      { item: 'Taaza Palak (Spinach)', quantity: 400, unit: 'grams' },
      { item: 'Low-Fat Taaza Paneer', quantity: 150, unit: 'grams diced' },
      { item: 'Pyaz aur Tamatar', quantity: 1, unit: 'each' },
      { item: 'Lasan (Garlic cloves)', quantity: 6, unit: 'chopped' },
      { item: 'Adrak aur Hari Mirch', quantity: 1, unit: 'tbsp' },
      { item: 'Kasuri Methi', quantity: 1, unit: 'tsp' },
      { item: 'Sarson ka Tel / Ghee', quantity: 1, unit: 'tsp' },
      { item: 'Garam Masala & Namak', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Palak ko 2 minute ubalte paani me dalein fir turant baraf wale paani me dalein (isse hara rang barkarar rehta hai).',
      'Mixer me palak ko adrak-hari mirch ke sath pees kar smooth puree banayein.',
      'Kadhai me 1 chammach tel garm karein, jeera aur kata lasan bhoonein.',
      'Pyaz aur tamatar paste dalkar masale bhun lein.',
      'Palak puree aur paneer ke tukde dalein, 5 minute dhimi aanch par pakayein.',
      'Upar se kasuri methi crush karke dalein aur serve karein.'
    ],
    expertHealthyTip: 'Palak blanch karte waqt 1 pinch cheeni ya soda dalne ki zaroorat nahi hai, ice-water shock se green color bilkul fresh rehta hai.',
    bestTimeToEat: 'Lunch ya dinner me multigrain roti ke sath.',
    suitableFor: ['Gym goers', 'Diabetics', 'Anemic patients'],
    emoji: '🥘',
    accentColor: '#15803d'
  },
  {
    id: 'rajma-masala',
    name: 'Punjabi Slow-Cooked Rajma',
    hindiName: 'राजमा मसाला',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Melt-in-mouth red kidney beans simmered in spiced tomato onion ginger gravy',
    tasteProfile: 'Ghada, masaledar, tamatar ki khatas aur khade masalo ka rich flavor',
    healthTags: ['High Protein', 'Heart Healthy', 'Iron Rich'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    baseServings: 4,
    calories: 230,
    macros: { proteinGrams: 13.5, carbsGrams: 36, fatGrams: 3.8, fiberGrams: 9.5 },
    fayde: [
      { title: 'Super Plant Protein & Fiber', description: 'Rajma me soluble fiber bhari matra me hota hai jo cholesterol aur dil ki bimariyo se bachata hai.' },
      { title: 'Long Lasting Energy', description: 'Slow digesting carbohydrates hone se sugar level stable rehta hai.' },
      { title: 'Magnesium & Potassium Rich', description: 'Blood pressure ko naturally maintain karta hai.' }
    ],
    nuksan: [
      { title: 'Pachan me Bhari', description: 'Rajma bina acchi tarah galaye khane se pet dard ya gas ho sakti hai. 8-10 ghante bhigona anivarya hai.' },
      { title: 'Raat me Late Mat Khayein', description: 'Dopahar ke lunch me khana sabse best hota hai.' }
    ],
    ingredients: [
      { item: 'Chitra Rajma (Soaked overnight)', quantity: 1, unit: 'cup' },
      { item: 'Tamatar Puree', quantity: 1.5, unit: 'cup fresh' },
      { item: 'Pyaz (Finely chopped)', quantity: 2, unit: 'medium' },
      { item: 'Adrak-Lasan Paste', quantity: 1, unit: 'tbsp' },
      { item: 'Badi Elaichi, Dalchini, Tejpatta', quantity: 1, unit: 'piece each' },
      { item: 'Dhaniya, Jeera, Haldi, Lal Mirch', quantity: 2, unit: 'tsp combined' },
      { item: 'Hing aur Kasuri Methi', quantity: 1, unit: 'tsp' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Rajma ko raat bhar kam se kam 8 ghante paani me bhigoyen.',
      'Khade masalo aur namak ke sath cooker me 5-6 seeti aane tak bilkul soft ubaal lein.',
      'Kadhai me ghee garm karein, hing, pyaz aur adrak-lasan paste golden hone tak bhoonein.',
      'Tamatar puree aur pise masale dalkar tel chhutne tak pakayein.',
      'Ubla hua rajma paani samet dalein aur 10-15 minute dhimi aanch par mash karte hue ubaalein.',
      'Brown rice ya roti ke sath garma-garam parosein.'
    ],
    expertHealthyTip: 'Rajma ubaalte waqt 1 tukda adrak aur hing zaroor dalein, isse gas banane wale tatva nasht ho jate hain.',
    bestTimeToEat: 'Dopahar ka lunch.',
    suitableFor: ['Youth', 'Athletes', 'Weight gain/strength diet'],
    emoji: '🫘',
    accentColor: '#991b1b'
  },
  {
    id: 'dal-tadka',
    name: 'Yellow Toor Dal Tadka with Hing & Jeera',
    hindiName: 'दाल तड़का',
    category: 'Dal & Soups',
    region: 'North India',
    tagline: 'Golden pigeon pea lentils infused with sizzling garlic, cumin, asafoetida & ghee',
    tasteProfile: 'Lasan ka karara tadka, desi ghee ki sondhi khushboo aur soothing dal',
    healthTags: ['High Protein', 'Easy Digestion', 'Heart Healthy'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    baseServings: 3,
    calories: 165,
    macros: { proteinGrams: 8.2, carbsGrams: 26, fatGrams: 3.5, fiberGrams: 4.8 },
    fayde: [
      { title: 'Folic Acid Ka Bada Srot', description: 'Toor dal sharir me red blood cells badhane aur pregnancy me bache ke vikas ke liye behad zaroori hai.' },
      { title: 'Hing Ka Pachan Fayda', description: 'Hing aur jeere ka tadka pet me gas aur acidity se turant rahat deta hai.' }
    ],
    nuksan: [
      { title: 'Uric Acid Alert', description: 'Jinhe gout ya uric acid badha ho unhe arhar dal ki jagah peeli moong dal prefer karni chahiye.' }
    ],
    ingredients: [
      { item: 'Toor Dal (Arhar)', quantity: 1, unit: 'cup washed' },
      { item: 'Tamatar aur Hari Mirch', quantity: 1, unit: 'each chopped' },
      { item: 'Haldi aur Namak', quantity: 1, unit: 'tsp each' },
      { item: 'Lasan (Chopped)', quantity: 5, unit: 'cloves' },
      { item: 'Jeera aur Hing', quantity: 1, unit: 'tsp' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tsp' },
      { item: 'Hara Dhaniya', quantity: 2, unit: 'tbsp' }
    ],
    instructions: [
      'Toor dal ko 20 minute bhigoyen aur haldi-namak ke sath cooker me 3 seeti lagakar ubaalein.',
      'Chhote pan me 1 chammach desi ghee garm karein.',
      'Jeera, hing, barik kata lasan aur sukhi lal mirch dalein.',
      'Lasan gulabi hote hi dal ke upar chhan-chhanata tadka dalein aur dhoongar/dhak dein.',
      'Hara dhaniya dalkar roti ya chawal ke sath serve karein.'
    ],
    expertHealthyTip: 'Dal ko hamesha 20 minute bhigo kar ubaalein, isse dal jaldi galti hai aur phytates kam hote hain.',
    bestTimeToEat: 'Lunch ya dinner.',
    suitableFor: ['Daily Indian diet', 'Family meal'],
    emoji: '🥣',
    accentColor: '#f59e0b'
  },
  {
    id: 'chana-masala',
    name: 'Kabuli Chana Masala (Chickpeas)',
    hindiName: 'चना मसाला',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Hearty white chickpeas slow-simmered with amchur, ginger, coriander & cumin',
    tasteProfile: 'Chatpata, khatta-masaledar, adrak ke lachhe aur anardana ka authentic swad',
    healthTags: ['High Protein', 'Diabetic Friendly', 'Weight Loss'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    baseServings: 4,
    calories: 215,
    macros: { proteinGrams: 11.5, carbsGrams: 32, fatGrams: 4.2, fiberGrams: 8.8 },
    fayde: [
      { title: 'Insulin Sensitivity Sudharta Hai', description: 'Chana ka glycemic index behad kam (28) hota hai, blood sugar bilkul spike nahi hota.' },
      { title: 'Gut Microbiome Boost', description: 'Iska prebiotic fiber pet ke ache bacteria ko badhata hai.' }
    ],
    nuksan: [
      { title: 'Tale Hue Bhature Ke Sath Na Khayein', description: 'Healthy chana ko fried bhature ki jagah multigrain kulcha ya roti ke sath khayein.' }
    ],
    ingredients: [
      { item: 'Kabuli Chana (Overnight soaked)', quantity: 1, unit: 'cup' },
      { item: 'Tamatar Puree', quantity: 1, unit: 'cup' },
      { item: 'Pyaz Paste', quantity: 0.5, unit: 'cup' },
      { item: 'Chana Masala Powder', quantity: 1.5, unit: 'tsp' },
      { item: 'Anardana Powder ya Amchur', quantity: 1, unit: 'tsp' },
      { item: 'Adrak ke patle lachhe', quantity: 1, unit: 'tbsp' },
      { item: 'Tel ya Ghee', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Chane ko raat bhar bhigoyen aur namak-tejpatta dalkar cooker me 5-6 seeti laga kar ubaalein.',
      'Kadhai me tel garm karein, jeera aur pyaz paste bhun kar tamatar puree milayein.',
      'Chana masala, anardana aur masale dalkar bhoonein.',
      'Uble chane dalkar thode chane chammach se mash karein taaki gravy ghadhi bane.',
      '10 minute dhimi aanch par pakayein, adrak ke lachhe aur dhaniya se garnish karein.'
    ],
    expertHealthyTip: 'Chane ubaalte waqt 1 tea-bag daal dene se authentic dark restaurant color aur antioxidants dono milte hain.',
    bestTimeToEat: 'Lunch me salad ke sath.',
    suitableFor: ['Diabetics', 'Gym athletes'],
    emoji: '🧆',
    accentColor: '#d97706'
  },
  {
    id: 'south-indian-sambar',
    name: 'Vegetable Drumstick Sambar',
    hindiName: 'सांभर',
    category: 'Dal & Soups',
    region: 'South India',
    tagline: 'Tangy aromatic lentil broth loaded with drumsticks, pumpkin, shallots & tamarind',
    tasteProfile: 'Khatta-meetha, imli ki khatas, hing aur roast kiye huye sambar masale ki sugandh',
    healthTags: ['Easy Digestion', 'Immunity Booster', 'Weight Loss', 'Low Calorie'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    baseServings: 4,
    calories: 140,
    macros: { proteinGrams: 6.8, carbsGrams: 22, fatGrams: 2.2, fiberGrams: 5.5 },
    fayde: [
      { title: 'Immunity aur Vitamin C', description: 'Imli, tamatar, kadi patta aur drumstick milkar sharir ki rog pratirodhak shamta ko buland karte hain.' },
      { title: 'Antioxidant Spices', description: 'Methi dana, dhaniya, jeera aur haldi ka authentic masala inflammation dur karta hai.' }
    ],
    nuksan: [
      { title: 'Hyperacidity Alert', description: 'Jinhe tez acidity ho wo imli ki matra thodi kam rakhein.' }
    ],
    ingredients: [
      { item: 'Toor Dal (Cooked & mashed)', quantity: 1, unit: 'cup' },
      { item: 'Drumstick (Sahjan ke tukde)', quantity: 1, unit: 'cup' },
      { item: 'Chhoti Pyaz (Shallots) & Kaddu', quantity: 1, unit: 'cup' },
      { item: 'Imli ka Pulp (Tamarind)', quantity: 2, unit: 'tbsp' },
      { item: 'Sambar Powder', quantity: 1.5, unit: 'tbsp' },
      { item: 'Rai, Methi Dana, Kadi Patta', quantity: 1, unit: 'tsp for tadka' },
      { item: 'Hing aur Namak', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Drumstick, kaddu aur shallots ko 1 cup paani aur haldi-namak ke sath ubaal lein.',
      'Sabziyan pakne par imli ka pulp aur sambar powder milayein aur 5 minute ubaalein.',
      'Ubli hui toor dal dalein aur 5 minute dhimi aanch par pakayein.',
      'Tadka pan me rai, methi dana, kadi patta aur hing tadkakar sambar me dalein.',
      'Idli, dosa ya brown rice ke sath garma garam piyen.'
    ],
    expertHealthyTip: 'Sambar me drumstick (sehjan) zaroor dalein, drumstick me doodh se 4 guna calcium aur orange se 7 guna vitamin C hota hai.',
    bestTimeToEat: 'Lunch ya dinner me.',
    suitableFor: ['Everyone', 'Heart & BP care'],
    emoji: '🍲',
    accentColor: '#ea580c'
  },
  {
    id: 'tomato-pepper-rasam',
    name: 'Pepper Garlic Tomato Rasam',
    hindiName: 'टमाटर काली मिर्च रसम',
    category: 'Dal & Soups',
    region: 'South India',
    tagline: 'Fiery soothing herbal broth brewed with crushed black pepper, garlic & ripe tomatoes',
    tasteProfile: 'Gale ko taravt dene wala teekha, kaali mirch ka jhanjhanata swad aur khatta tamatar',
    healthTags: ['Immunity Booster', 'Easy Digestion', 'Low Calorie'],
    prepTimeMinutes: 8,
    cookTimeMinutes: 12,
    baseServings: 3,
    calories: 75,
    macros: { proteinGrams: 2.5, carbsGrams: 12, fatGrams: 1.8, fiberGrams: 2.2 },
    fayde: [
      { title: 'Sardi, Khansi aur Gale ki Khich-Khich Me Ram-Baan', description: 'Kaali mirch ka piperine aur lasan ka allicin infection ko jad se khatam karta hai.' },
      { title: 'Metabolism Booster', description: 'Pachan agni ko pradipt karta hai, pet me gas aur heavy feeling turant gayab hoti hai.' }
    ],
    nuksan: [
      { title: 'Pet Me Chhale (Ulcers)', description: 'Jinhe pet me ulcer ya extreme burning sensation ho wo kaali mirch kam dalein.' }
    ],
    ingredients: [
      { item: 'Pake Tamatar (Mashed)', quantity: 2, unit: 'medium' },
      { item: 'Kaali Mirch (Crushed)', quantity: 1, unit: 'tsp' },
      { item: 'Jeera (Crushed)', quantity: 1, unit: 'tsp' },
      { item: 'Lasan (Crushed with skin)', quantity: 6, unit: 'cloves' },
      { item: 'Imli ka Paani', quantity: 2, unit: 'tbsp' },
      { item: 'Kadi Patta aur Hara Dhaniya', quantity: 2, unit: 'tbsp' },
      { item: 'Ghee', quantity: 0.5, unit: 'tsp' }
    ],
    instructions: [
      'Tamatar ko hath se mash karein aur usme 2 cup paani, imli ka paani, haldi aur namak dalein.',
      'Okhli me kaali mirch, jeera aur lasan ko dar-dara koot lein.',
      'Tamatar wale paani ko 5 minute ubaalein jab tak kacha pan na nikal jaye.',
      'Koota hua masala milayein aur 2 minute simmer karein (zyada ubalne se khushboo udd jati hai).',
      'Desi ghee me rai, hing aur kadi patta ka tadka lagayein aur rasam me daal kar turant dhak dein.'
    ],
    expertHealthyTip: 'Thand aur flu ke dauran ise soup ki tarah garam-garam peene se band naak 5 minute me khul jati hai.',
    bestTimeToEat: 'Meals se pehle starter soup ke roop me ya dinner me.',
    suitableFor: ['Cold/Cough patients', 'Weight loss', 'Senior citizens'],
    emoji: '🍵',
    accentColor: '#dc2626'
  },
  {
    id: 'panchmel-dal',
    name: 'Rajasthani Panchratna Dal (5 Lentils)',
    hindiName: 'पंचमेल दाल',
    category: 'Dal & Soups',
    region: 'North India',
    tagline: 'Royal blend of five wholesome lentils infused with ginger, cloves & dried spices',
    tasteProfile: 'Ghada, rich texture, har ek dal ka unique swad aur desi tadke ki mehak',
    healthTags: ['High Protein', 'Immunity Booster', 'Heart Healthy'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    baseServings: 4,
    calories: 185,
    macros: { proteinGrams: 10.5, carbsGrams: 28, fatGrams: 3.2, fiberGrams: 6.0 },
    fayde: [
      { title: 'Five-Fold Nutrient Balance', description: 'Moong, chana, toor, urad aur masoor milkar sharir ko har tarah ke micronutrients pradan karti hain.' },
      { title: 'Immunity & Strength', description: 'Kamzori dur karne aur stamina badhane ke liye shreshth aahar.' }
    ],
    nuksan: [
      { title: 'Heavy for Weak Digestion', description: 'Jinhe pachan kamzor ho wo urad aur chana dal ki matra thodi kam rakhein.' }
    ],
    ingredients: [
      { item: 'Panchmel Dal Mix (Chana, Toor, Moong, Urad, Masoor)', quantity: 1, unit: 'cup equal parts' },
      { item: 'Tamatar aur Adrak', quantity: 1, unit: 'each' },
      { item: 'Laung, Dalchini, Tejpatta', quantity: 1, unit: 'piece each' },
      { item: 'Ghee', quantity: 1, unit: 'tsp' },
      { item: 'Hing, Jeera, Haldi, Namak', quantity: 1, unit: 'tsp each' }
    ],
    instructions: [
      'Pancho dalo ko dho kar 30 minute bhigoyen.',
      'Pressure cooker me namak aur haldi dalkar 3-4 seeti lagwayein.',
      'Kadhai me ghee garm karein, laung, tejpatta, jeera aur hing tadkayein.',
      'Adrak aur tamatar paste dalkar masale bhunein.',
      'Ubli dal dalkar 5-7 minute dhimi aanch par pakayein.'
    ],
    expertHealthyTip: 'Dal me ghee me bhuna jeera aur adrak zaroor dalein taaki pancho dalo ka pachan saral ho sake.',
    bestTimeToEat: 'Lunch me jowar ya bajra roti ke sath.',
    suitableFor: ['Growing kids', 'Workout enthusiasts', 'Family'],
    emoji: '🥣',
    accentColor: '#b45309'
  },
  {
    id: 'kala-chana-curry',
    name: 'Desi Kala Chana Curry (Black Chickpeas)',
    hindiName: 'काला चना करी',
    category: 'Dal & Soups',
    region: 'North India',
    tagline: 'Nutrient-dense black chickpeas in a rustic ginger-cumin-coriander gravy',
    tasteProfile: 'Sondha, earthy, masaledar gravy aur chane ka meaty bite',
    healthTags: ['Diabetic Friendly', 'Iron Rich', 'High Protein', 'Weight Loss'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    baseServings: 4,
    calories: 195,
    macros: { proteinGrams: 10.8, carbsGrams: 30, fatGrams: 3.5, fiberGrams: 8.5 },
    fayde: [
      { title: 'Diabetics Ke Liye Vardaan', description: 'Kala chana ka glycemic index duniya me sabse kam foods me gina jata hai.' },
      { title: 'Anemia Ka Shartiya Ilaj', description: 'Iron aur folic acid se bharpoor, blood hemoglobin tezi se badhata hai.' }
    ],
    nuksan: [
      { title: 'Chilka Utarna Mat Bhoolen', description: 'Chilke samet khayein taaki fiber mile, lekin 8-10 ghante bhigona zaroori hai.' }
    ],
    ingredients: [
      { item: 'Desi Kala Chana (Soaked overnight)', quantity: 1, unit: 'cup' },
      { item: 'Pyaz aur Tamatar Paste', quantity: 1, unit: 'cup' },
      { item: 'Adrak-Lasan Paste', quantity: 1, unit: 'tbsp' },
      { item: 'Dhaniya aur Jeera Powder', quantity: 1.5, unit: 'tsp' },
      { item: 'Sarson ka Tel', quantity: 1, unit: 'tsp' },
      { item: 'Hing, Namak, Kasuri Methi', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Kala chana ko 8 ghante bhigoyen aur namak ke sath 6-7 seeti lagakar ubaalein.',
      'Sarson ka tel dhuan uthne tak garm karein aur hing-jeera tadkayein.',
      'Pyaz, adrak-lasan paste aur tamatar dalkar masale bhunein.',
      'Uble chane dalein aur 10 minute simmer karein.',
      'Garma garam serve karein.'
    ],
    expertHealthyTip: 'Chana ubaalne ke baad bacha hua paani fekein nahi, usi me sari gravy banayein kyunki usme saare minerals hote hain.',
    bestTimeToEat: 'Lunch.',
    suitableFor: ['Diabetics', 'Anemic patients', 'Bodybuilders'],
    emoji: '🧆',
    accentColor: '#78350f'
  },
  {
    id: 'lauki-chana-dal',
    name: 'Bottle Gourd & Bengal Gram Stew (Lauki Chana Dal)',
    hindiName: 'लौकी चना दाल',
    category: 'Main Course',
    region: 'North India',
    tagline: 'Cooling tender bottle gourd cubes stewed with golden split chickpeas and cumin',
    tasteProfile: 'Mridu, soothing, lauki ki mithaas aur chana dal ka creamy texture',
    healthTags: ['Heart Healthy', 'Easy Digestion', 'Low Calorie', 'Weight Loss'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    baseServings: 3,
    calories: 155,
    macros: { proteinGrams: 7.2, carbsGrams: 24, fatGrams: 2.8, fiberGrams: 5.5 },
    fayde: [
      { title: 'Dil aur Blood Pressure Ke Liye Best', description: 'Lauki me 92% paani aur potassium hota hai jo BP aur cholesterol ko kam rakhta hai.' },
      { title: 'Acidity aur Jalan Me Rahat', description: 'Sharir ko thandak deta hai aur digestion ko aasan banata hai.' }
    ],
    nuksan: [
      { title: 'Kadvi Lauki Mat Khayein', description: 'Lauki kaatne se pehle chakh lein, agar kadvi ho to zehrili ho sakti hai use fek dein.' }
    ],
    ingredients: [
      { item: 'Taaza Lauki (Chop ki hui)', quantity: 2, unit: 'cups' },
      { item: 'Chana Dal (Soaked 1 hr)', quantity: 0.5, unit: 'cup' },
      { item: 'Tamatar aur Adrak', quantity: 1, unit: 'each' },
      { item: 'Jeera, Hing, Haldi, Namak', quantity: 1, unit: 'tsp each' },
      { item: 'Desi Ghee', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Pressure cooker me ghee garm karein aur jeera-hing ka tadka lagayein.',
      'Adrak, tamatar, haldi aur namak dalein.',
      'Bhigoyi chana dal aur lauki ke tukde dalkar 1.5 cup paani dalein.',
      'Cooker me 3-4 seeti lagwayein.',
      'Hara dhaniya dalkar roti ke sath serve karein.'
    ],
    expertHealthyTip: 'Lauki ka chilka agar mulayam ho to chilke samet dalein, saara fiber chilke me hota hai.',
    bestTimeToEat: 'Dinner ya lunch.',
    suitableFor: ['Heart patients', 'Weight loss', 'Summer meals'],
    emoji: '🍲',
    accentColor: '#16a34a'
  },
  {
    id: 'kulthi-dal-soup',
    name: 'Horsegram Soup (Kulthi Dal Shorba)',
    hindiName: 'कुलथी दाल का सूप',
    category: 'Dal & Soups',
    region: 'South India',
    tagline: 'Ancient super-lentil elixir famous in Ayurveda for dissolving kidney stones & blasting fat',
    tasteProfile: 'Sondha, kaali mirch aur jeere ka pungent kick, warming & restorative',
    healthTags: ['Weight Loss', 'Heart Healthy', 'Low Calorie'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    baseServings: 2,
    calories: 120,
    macros: { proteinGrams: 7.5, carbsGrams: 18, fatGrams: 1.5, fiberGrams: 6.2 },
    fayde: [
      { title: 'Kidney Stone Galane Me Shreshth', description: 'Ayurveda me kulthi dal ko ashmarighna (stone dissolving) mana gaya hai jo calcium oxalate stones ko todti hai.' },
      { title: 'Ziddi Charbi Galaye', description: 'Thermogenic gun hone ke karan vajan tezi se kam karne me sahayak hai.' }
    ],
    nuksan: [
      { title: 'Garam Taseer', description: 'Iski taseer behad garam hoti hai, garmiyo me kam matra me lein aur pregnancy me lene se bachein.' }
    ],
    ingredients: [
      { item: 'Kulthi Dal (Horsegram - soaked 8 hrs)', quantity: 0.5, unit: 'cup' },
      { item: 'Tamatar', quantity: 1, unit: 'chopped' },
      { item: 'Kaali Mirch aur Jeera Powder', quantity: 1, unit: 'tsp' },
      { item: 'Lasan aur Adrak', quantity: 1, unit: 'tsp crushed' },
      { item: 'Sendha Namak aur Nimbu', quantity: 1, unit: 'to taste' }
    ],
    instructions: [
      'Kulthi dal ko 4 cup paani me cooker me 6 seeti lagakar ubaalein.',
      'Ubalne ke baad dal ka paani chhaan lein.',
      'Pan me halka ghee dalkar lasan, adrak, tamatar aur jeera-kaali mirch bhoonein.',
      'Dal ka paani dalein aur 5 minute ubaalein.',
      'Garam-garam soup ki tarah nimbu nichod kar piyen.'
    ],
    expertHealthyTip: 'Subah khali pet kulthi ka paani peene se kidney ki functioning behtar hoti hai aur uric acid kam hota hai.',
    bestTimeToEat: 'Subah khali pet ya evening soup.',
    suitableFor: ['Kidney stone patients', 'Weight loss aspirants'],
    emoji: '🍵',
    accentColor: '#78350f'
  },
  {
    id: 'dal-palak',
    name: 'Home-Style Dal Palak (Moong Dal & Spinach)',
    hindiName: 'दाल पालक',
    category: 'Dal & Soups',
    region: 'Pan India',
    tagline: 'Heartwarming yellow lentils stewed with farm-fresh spinach leaves & garlic tempering',
    tasteProfile: 'Fresh, halka masaledar, palak aur dal ka perfectly balanced comforting taste',
    healthTags: ['Iron Rich', 'High Protein', 'Easy Digestion', 'Low Calorie'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    baseServings: 3,
    calories: 150,
    macros: { proteinGrams: 8.0, carbsGrams: 22, fatGrams: 2.8, fiberGrams: 4.5 },
    fayde: [
      { title: 'Daily Iron & Protein Booster', description: 'Har roz khane ke liye sabse behtareen aur santulit aahar.' },
      { title: 'Gut Friendly', description: 'Pet ko thanda rakhta hai aur constipation nahi hone deta.' }
    ],
    nuksan: [
      { title: 'Basi Mat Khayein', description: 'Palak wali dal ko hamesha taaza hi khayein, baar-baar garam karne se nitrates badhte hain.' }
    ],
    ingredients: [
      { item: 'Dhuli Moong Dal', quantity: 0.75, unit: 'cup' },
      { item: 'Taaza Palak (Barik kati)', quantity: 2, unit: 'cups' },
      { item: 'Tamatar aur Hari Mirch', quantity: 1, unit: 'each' },
      { item: 'Lasan (Garlic)', quantity: 5, unit: 'cloves' },
      { item: 'Ghee, Jeera, Hing', quantity: 1, unit: 'tsp' }
    ],
    instructions: [
      'Moong dal ko haldi-namak ke sath cooker me ubaal lein.',
      'Kadhai me ghee garm karein, jeera, hing aur lasan bhoonein.',
      'Kati palak aur tamatar dalkar 3 minute pakayein jab tak palak soft na ho jaye.',
      'Ubli dal milayein aur 2 minute ubaalein.',
      'Phulka ya chawal ke sath serve karein.'
    ],
    expertHealthyTip: 'Dal banne ke baad aanch band karke aadha nimbu nichodein, Vitamin C palak ke iron ko body me sokhne me madad karega.',
    bestTimeToEat: 'Lunch ya dinner.',
    suitableFor: ['All age groups', 'Children', 'Pregnant women'],
    emoji: '🥣',
    accentColor: '#16a34a'
  }
];

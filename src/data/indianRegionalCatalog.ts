import { Dish, MealType, ThaliSlotKey } from '../types';

type Seed = Omit<Dish, 'ingredients' | 'steps'> & {
  ingredients: [string, number, string][];
  steps: [string, string, number][];
};

const img = 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&auto=format&fit=crop&q=85';

const make = (s: Seed): Dish => ({
  ...s,
  ingredients: s.ingredients.map(([name, quantity, unit], i) => ({ id: `${s.id}-ing-${i+1}`, name, quantity, unit })),
  steps: s.steps.map(([title, instruction, durationMinutes], i) => ({ id: `${s.id}-step-${i+1}`, stepNumber: i + 1, title, instruction, durationMinutes })),
});

const base = (d: Partial<Seed> & Pick<Seed, 'id'|'name'|'nameHindi'|'description'|'state'|'region'|'cuisine'|'category'|'mealTypes'|'diet'|'ingredients'|'steps'>): Seed => ({
  image: img, country: 'India', prepTimeMinutes: 15, cookTimeMinutes: 25, totalTimeMinutes: 40, servings: 2,
  difficulty: 'Easy', spiceLevel: 'Medium',
  nutrition: { calories: 350, protein: 10, carbohydrates: 45, fat: 13, fiber: 6 },
  tips: ['Use fresh regional ingredients for the closest traditional character.'],
  precautions: [], allergens: [], festival: ['All Seasons'],
  tags: ['Indian Cuisine', 'Regional Food'], popularity: 82, emoji: '🍛',
  ...d,
});

const indianRegionalSeeds: Seed[] = [
  ['Andhra Pradesh','Gongura Pachadi','గోంగూర పచ్చడి','Tangy sorrel-leaf chutney with chilli and spices.','Chutney','chutney'],
  ['Andhra Pradesh','Pesarattu','పెసరట్టు','Green gram crepe traditionally served for breakfast.','Breakfast','roti'],
  ['Andhra Pradesh','Pulihora','పులిహోర','Tamarind-seasoned rice with peanuts and tempering.','Rice','rice'],
  ['Andhra Pradesh','Gutti Vankaya','గుత్తి వంకాయ','Stuffed baby eggplant cooked in a spiced gravy.','Main Course','sabzi'],
  ['Telangana','Hyderabadi Haleem','హైదరాబాదీ హలీమ్','Slow-cooked wheat, lentil and meat preparation associated with Hyderabad.','Main Course','dal'],
  ['Telangana','Sarva Pindi','సర్వ పిండి','Savory rice-flour skillet cake with sesame and spices.','Snack','roti'],
  ['Arunachal Pradesh','Thukpa','थुकपा','Warm noodle soup with vegetables and aromatic broth.','Dal & Soups','dal'],
  ['Assam','Khar','खार','Traditional alkaline preparation served with rice and seasonal vegetables.','Main Course','sabzi'],
  ['Assam','Masor Tenga','मासोर टेंगा','Light tangy fish curry with souring ingredients.','Main Course','sabzi'],
  ['Bihar','Litti Chokha','लिट्टी चोखा','Roasted wheat dough balls with sattu served with mashed vegetables.','Main Course','roti'],
  ['Bihar','Sattu Paratha','सत्तू पराठा','Wheat flatbread filled with seasoned roasted gram flour.','Breads','roti'],
  ['Bihar','Thekua','ठेकुआ','Deep-fried wheat and jaggery sweet associated with Chhath.','Sweets','sweet'],
  ['Chhattisgarh','Chila','चीला','Savory rice-and-lentil crepe, often eaten for breakfast.','Breakfast','roti'],
  ['Chhattisgarh','Fara','फरा','Steamed rice-flour dumplings seasoned with a tempering.','Snack','roti'],
  ['Goa','Prawn Balchao','प्रॉन बालचाव','Spicy-tangy prawn preparation with vinegar and aromatics.','Main Course','sabzi'],
  ['Goa','Bebinca','बेबिंका','Layered Goan dessert made with coconut milk and eggs.','Sweets','sweet'],
  ['Gujarat','Undhiyu','ઉંધિયું','Mixed seasonal vegetables slow-cooked with aromatic masala.','Main Course','sabzi'],
  ['Gujarat','Handvo','હાંડવો','Savory fermented lentil-rice cake with sesame tempering.','Snack','roti'],
  ['Gujarat','Fafda','ફાફડા','Crisp gram-flour strips traditionally paired with chutney.','Snack','chutney'],
  ['Haryana','Bajra Khichdi','बाजरा खिचड़ी','Pearl millet and lentils cooked into a hearty winter dish.','Rice & Grains','rice'],
  ['Himachal Pradesh','Siddu','सिड्डू','Steamed wheat bread with a savory filling, common in Himachali kitchens.','Breads','roti'],
  ['Himachal Pradesh','Chana Madra','चना मदरा','Chickpeas simmered in a yogurt-based spiced gravy.','Main Course','sabzi'],
  ['Jharkhand','Dhuska','धुस्का','Fermented rice-and-lentil fritter commonly served with curry.','Snack','roti'],
  ['Jharkhand','Rugra Curry','रुगड़ा करी','Seasonal mushroom preparation with regional spices.','Main Course','sabzi'],
  ['Karnataka','Bisi Bele Bath','ಬಿಸಿ ಬೇಳೆ ಬಾತ್','Rice, lentils and vegetables cooked with a characteristic spice blend.','Rice & Grains','rice'],
  ['Karnataka','Ragi Mudde','ರಾಗಿ ಮುದ್ದೆ','Finger-millet balls traditionally served with saaru or curry.','Breads','roti'],
  ['Karnataka','Mysore Pak','ಮೈಸೂರು ಪಾಕ್','Rich gram-flour sweet made with ghee and sugar.','Sweets','sweet'],
  ['Kerala','Appam','അപ്പം','Lacy fermented rice-and-coconut pancake with soft center.','Breads','roti'],
  ['Kerala','Avial','അവിയൽ','Mixed vegetables cooked with coconut and yogurt-based seasoning.','Main Course','sabzi'],
  ['Kerala','Puttu','പുട്ട്','Steamed rice-flour and coconut cylinders, usually eaten at breakfast.','Breakfast','roti'],
  ['Kerala','Payasam','പായസം','Traditional milk or coconut-based festive pudding with regional variations.','Sweets','sweet'],
  ['Madhya Pradesh','Poha Jalebi','पोहा जलेबी','Popular breakfast pairing of poha and sweet jalebi.','Breakfast','sweet'],
  ['Madhya Pradesh','Dal Bafla','दाल बाफला','Wheat dumplings baked/boiled and served with dal and ghee.','Main Course','roti'],
  ['Madhya Pradesh','Bhutte Ka Kees','भुट्टे का कीस','Grated corn cooked with spices and milk.','Snack','sabzi'],
  ['Maharashtra','Misal Pav','मिसळ पाव','Spiced sprouted-legume curry served with pav and toppings.','Street Food','sabzi'],
  ['Maharashtra','Thalipeeth','थालीपीठ','Multigrain savory flatbread with spices and herbs.','Breads','roti'],
  ['Maharashtra','Puran Poli','पुरण पोळी','Sweet flatbread filled with cooked lentils and jaggery.','Sweets','sweet'],
  ['Manipur','Eromba','एरोम्बा','Mashed vegetables with fermented fish or a vegetarian variation and chilli.','Main Course','sabzi'],
  ['Meghalaya','Pukhlein','पुख्लेन','Rice-flour and jaggery fritter traditionally prepared in Meghalaya.','Sweets','sweet'],
  ['Mizoram','Bai','बाई','Light vegetable and herb stew with regional variations.','Dal & Soups','dal'],
  ['Nagaland','Axone Soybean Curry','अखुनी सोयाबीन करी','Fermented soybean-based preparation with vegetables or meat.','Main Course','sabzi'],
  ['Odisha','Dalma','ଡାଲମା','Lentils cooked with vegetables and a simple roasted spice blend.','Main Course','dal'],
  ['Odisha','Pakhala Bhata','ପଖାଳ ଭାତ','Rice soaked/fermented with water or buttermilk and served with accompaniments.','Rice & Grains','rice'],
  ['Odisha','Chhena Poda','ଛେନା ପୋଡ଼','Baked fresh-cheese dessert with caramelized crust.','Sweets','sweet'],
  ['Punjab','Makki Di Roti','ਮੱਕੀ ਦੀ ਰੋਟੀ','Cornmeal flatbread traditionally paired with saag.','Breads','roti'],
  ['Punjab','Rajma Chawal','राजमा चावल','Kidney bean curry served with steamed rice.','Main Course','sabzi'],
  ['Punjab','Amritsari Kulcha','ਅੰਮ੍ਰਿਤਸਰੀ ਕੁਲਚਾ','Stuffed leavened flatbread baked in a tandoor or oven.','Breads','roti'],
  ['Rajasthan','Dal Baati Churma','दाल बाटी चूरमा','Baked wheat baati served with dal and sweet churma.','Main Course','roti'],
  ['Rajasthan','Gatte Ki Sabzi','गट्टे की सब्ज़ी','Gram-flour dumplings simmered in a yogurt-based gravy.','Main Course','sabzi'],
  ['Rajasthan','Ker Sangri','केर सांगरी','Desert beans and berries cooked with spices.','Main Course','sabzi'],
  ['Sikkim','Momos','मोमो','Steamed dumplings filled with vegetables or meat and served with chutney.','Snack','roti'],
  ['Tamil Nadu','Pongal','பொங்கல்','Rice and moong dal cooked together with ghee and pepper.','Breakfast','rice'],
  ['Tamil Nadu','Kootu','கூட்டு','Vegetables and lentils cooked with coconut-spice paste.','Main Course','sabzi'],
  ['Tamil Nadu','Kanchipuram Idli','காஞ்சிபுரம் இட்லி','Spiced steamed idli traditionally flavored with pepper and ginger.','Breakfast','roti'],
  ['Tripura','Mui Borok Gudok','মুই বোরোক গুডোক','Traditional vegetable and fermented-fish preparation from Tripura.','Main Course','sabzi'],
  ['Uttar Pradesh','Aloo Puri','आलू पूरी','Spiced potato curry served with deep-fried wheat puri.','Breakfast','roti'],
  ['Uttar Pradesh','Bedmi Puri','बेडमी पूरी','Urad-dal spiced puri served with potato curry.','Breakfast','roti'],
  ['Uttar Pradesh','Banarasi Tamatar Chaat','बनारसी टमाटर चाट','Tangy tomato-based chaat with spices and crisp toppings.','Street Food','chutney'],
  ['Uttarakhand','Kafuli','काफुली','Leafy-green gravy traditionally cooked with local greens.','Main Course','sabzi'],
  ['Uttarakhand','Aloo Ke Gutke','आलू के गुटके','Spiced potato preparation with local herbs and chilli.','Main Course','sabzi'],
  ['West Bengal','Shorshe Ilish','সরষে ইলিশ','Hilsa cooked in a mustard-based sauce.','Main Course','sabzi'],
  ['West Bengal','Luchi','লুচি','Puffed refined-flour bread traditionally served with curries or sweets.','Breads','roti'],
  ['West Bengal','Mishti Doi','মিষ্টি দই','Caramelized sweet yogurt served chilled.','Sweets','sweet'],
  ['Delhi','Chole Bhature','छोले भटूरे','Spiced chickpeas served with fried leavened bread.','Main Course','sabzi'],
  ['Jammu and Kashmir','Rogan Josh','रोगन जोश','Aromatic slow-cooked meat curry associated with Kashmiri cuisine.','Main Course','sabzi'],
  ['Jammu and Kashmir','Dum Aloo Kashmiri','कश्मीरी दम आलू','Baby potatoes simmered in a Kashmiri spiced gravy.','Main Course','sabzi'],
  ['Puducherry','Pondicherry Vegetable Curry','पुडुचेरी वेजिटेबल करी','Vegetable curry reflecting Tamil coastal and French-influenced culinary history.','Main Course','sabzi'],
  ['Andaman and Nicobar Islands','Coconut Fish Curry','नारियल फिश करी','Coastal fish curry with coconut and aromatic spices.','Main Course','sabzi'],
  ['Ladakh','Thukpa Ladakhi','लद्दाखी थुकपा','Hearty noodle soup adapted to the high-altitude Himalayan food tradition.','Dal & Soups','dal'],
  ['Lakshadweep','Tuna Coconut Curry','टूना नारियल करी','Island-style tuna curry with coconut and spices.','Main Course','sabzi'],
];

const slotMap: Record<string, ThaliSlotKey> = {
  chutney:'chutney', roti:'roti', rice:'rice', sabzi:'sabzi', dal:'dal', sweet:'sweet'
};

export const indianRegionalCatalog: Dish[] = indianRegionalSeeds.map(([state,name,nameHindi,description,category,slot], index) => {
  const id = `regional-${state.toLowerCase().replace(/[^a-z]+/g,'-')}-${name.toLowerCase().replace(/[^a-z]+/g,'-')}-${index+1}`;
  const mealTypes: MealType[] = category === 'Breakfast' ? ['Breakfast'] : category === 'Sweets' ? ['Dessert'] : category === 'Snack' || category === 'Street Food' ? ['Snack'] : ['Lunch','Dinner'];
  const vegetarian = !/fish|prawn|mutton|meat|chicken|tuna|ilish|haleem|axone/i.test(name + ' ' + description);
  return make(base({
    id, name, nameHindi, description, descriptionHindi: description, state,
    region: ['Andhra Pradesh','Telangana','Karnataka','Kerala','Tamil Nadu','Puducherry','Lakshadweep'].includes(state) ? 'South India' :
      ['Assam','Arunachal Pradesh','Manipur','Meghalaya','Mizoram','Nagaland','Sikkim','Tripura'].includes(state) ? 'Northeast India' :
      ['West Bengal','Odisha','Bihar','Jharkhand'].includes(state) ? 'East India' :
      ['Goa','Gujarat','Maharashtra','Dadra and Nagar Haveli and Daman and Diu','Lakshadweep'].includes(state) ? 'West India' :
      ['Chhattisgarh','Madhya Pradesh'].includes(state) ? 'Central India' : 'North India',
    cuisine: [state + ' Cuisine', 'Indian Regional'], category: [category], mealTypes,
    diet: [vegetarian ? 'Vegetarian' : 'Non-Veg'], thaliSlots: slotMap[slot] ? [slotMap[slot]] : undefined,
    ingredients: [['Regional staple',1,'cup'],['Onion or aromatics',1,'medium'],['Spice blend',1,'tbsp'],['Salt',0.75,'tsp']],
    steps: [['Prepare ingredients','Wash, chop or soak the ingredients as required.',8],['Cook','Cook using the traditional-style method until tender and aromatic.',20],['Serve','Adjust seasoning and serve with the customary accompaniment.',5]],
    tags: ['State Speciality', state, 'Regional Cuisine'], emoji: '🍛'
  }));
});

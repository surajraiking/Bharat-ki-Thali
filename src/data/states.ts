import { StateInfo } from '../types';

export const indianStatesData: StateInfo[] = [
  {
    id: 'punjab',
    name: 'Punjab',
    nameHindi: 'पंजाब',
    capital: 'Chandigarh',
    region: 'North India',
    cuisineDescription: 'Rich, hearty, and full of flavor with generous use of pure desi ghee, sarson, makhan, and slow-simmered gravies.',
    cuisineDescriptionHindi: 'शुद्ध देसी घी, मक्खन और धीमी आंच पर पकी दालों और तंदूरी रोटियों का दिलकश स्वाद।',
    famousDishes: ['Tadka Dal', 'Rajma Masala', 'Chole Kulche', 'Dal Makhani', 'Sarson Ka Saag', 'Gajar Ka Halwa'],
    regionalCollections: [
      {
        title: 'Dhaba Specials',
        description: 'Authentic Highway Dhaba recipes with robust tandoori and slow-cooked notes.',
        dishes: ['rajma', 'chole', 'dal-makhani']
      },
      {
        title: 'Winter Warmers',
        description: 'Traditional winter season specialties rich in wholesome nutrition.',
        dishes: ['gajar-halwa', 'tadka-dal']
      }
    ],
    festivalFoods: ['Baisakhi Feast', 'Lohri Makki-Sarson', 'Karva Chauth Special'],
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    nameHindi: 'महाराष्ट्र',
    capital: 'Mumbai',
    region: 'West India',
    cuisineDescription: 'From the fiery spices of Kolhapur and coastal flavors of Konkan to wholesome street delicacies of Mumbai.',
    cuisineDescriptionHindi: 'कोल्हापुर के तीखे रस्से, कोंकण के नारियल-कोकम और मुंबई की अनोखी स्ट्रीट फूड संस्कृति।',
    famousDishes: ['Kanda Batata Poha', 'Mumbai Vada Pav', 'Misal Pav', 'Jowar Roti', 'Sprouts Usal Chaat', 'Aam Panna'],
    regionalCollections: [
      {
        title: 'Mumbai Street Legends',
        description: 'The world-famous fast street dishes that power Mumbai.',
        dishes: ['poha', 'mumbai-vada-pav', 'misal-pav']
      },
      {
        title: 'Deshastha Healthy Grains',
        description: 'Gluten-free traditional millets and wholesome cooling beverages.',
        dishes: ['jowar-roti', 'sprouts-chaat', 'aam-panna']
      }
    ],
    festivalFoods: ['Ganesh Chaturthi Modak', 'Gudi Padva Puran Poli', 'Makar Sankranti Tilgul'],
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    nameHindi: 'तमिलनाडु',
    capital: 'Chennai',
    region: 'South India',
    cuisineDescription: 'Mastery of naturally fermented rice & lentil batters, aromatic tempering of mustard & curry leaves, and spicy Chettinad roasts.',
    cuisineDescriptionHindi: 'फर्मेंटेड इडली-डोसा बैटर, हींग-कढ़ी पत्ते का छौंक और चेत्तिनाड की तीखी काली मिर्च के मसाले।',
    famousDishes: ['Steamed Idli', 'Medu Vada', 'Hotel Sambar', 'Tomato Pepper Rasam', 'Chettinad Chicken', 'Curd Rice'],
    regionalCollections: [
      {
        title: 'Tiffin Heritage',
        description: 'Light, gut-friendly fermented morning breakfast classics.',
        dishes: ['idli', 'sambar', 'curd-rice']
      },
      {
        title: 'Chettinad Spiced Kitchen',
        description: 'Deeply aromatic roasts with hand-pounded peppercorns.',
        dishes: ['chettinad-chicken', 'rasam']
      }
    ],
    festivalFoods: ['Thai Pongal Sweet Rice', 'Margazhi Temple Prasad', 'Navratri Sundal'],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    nameHindi: 'राजस्थान',
    capital: 'Jaipur',
    region: 'West India',
    cuisineDescription: 'Desert culinary genius using millets, sun-dried spices, yogurt bases, and royal slow-baked bati platters.',
    cuisineDescriptionHindi: 'रेगिस्तान की अनूठी रसोई—बाजरे की रोटियां, पंचमेल दालें, शुद्ध घी और शाही दाल-बाटी चूरमा।',
    famousDishes: ['Dal Baati Churma', 'Bajra Roti', 'Besan Chilla', 'Besan Ladoo', 'Panchmel Dal'],
    regionalCollections: [
      {
        title: 'Mewari Royal Platter',
        description: 'Substantial baked dumplings dipped in fragrant aromatic clarified butter.',
        dishes: ['rajasthani-dal-baati-churma', 'panchmel-dal']
      },
      {
        title: 'Marwar Millet Essentials',
        description: 'Nutrient-packed winter millets and gram flour staples.',
        dishes: ['bajra-roti', 'besan-chilla', 'besan-laddu']
      }
    ],
    festivalFoods: ['Teej Ghevar', 'Diwali Churma', 'Holi Besan Chakki'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    nameHindi: 'गुजरात',
    capital: 'Gandhinagar',
    region: 'West India',
    cuisineDescription: 'The perfect harmony of sweet, salty, and sour flavors with wholesome steamed snacks and festive winter undhiyu.',
    cuisineDescriptionHindi: 'खट्टा-मीठा-नमकीन का संतुलित स्वाद, हल्के स्टीम्ड नाश्ते और सर्दियों का लाजवाब सूरती उंधियू।',
    famousDishes: ['Khaman Dhokla', 'Methi Thepla', 'Surti Undhiyu', 'Khandvi', 'Kathiyawadi Khichdi', 'Masala Chaas'],
    regionalCollections: [
      {
        title: 'Farsan Feasts',
        description: 'Delicately rolled and steamed savory gram flour bites.',
        dishes: ['dhokla', 'khandvi', 'thepla']
      },
      {
        title: 'Comfort Winter Pot',
        description: 'Slow-simmered earthen pot root vegetables and fenugreek dumplings.',
        dishes: ['gujarati-undhiyu', 'khichdi', 'masala-chaas']
      }
    ],
    festivalFoods: ['Uttarayan Undhiyu & Jalebi', 'Navratri Fafda Jalebi', 'Diwali Ghari'],
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    nameHindi: 'उत्तर प्रदेश',
    capital: 'Lucknow',
    region: 'North India',
    cuisineDescription: 'The pinnacle of Awadhi dum cooking, delicate saffron flavors, Banarasi chaats, and hearty home-style dal-sabzi.',
    cuisineDescriptionHindi: 'अवधी दम पुलाव, केसर और इलायची की महक, बनारसी स्वाद और घर-घर की दाल-सब्जी।',
    famousDishes: ['Palak Dal', 'Aloo Gobi', 'Bhindi Masala', 'Shahi Vegetable Pulao', 'Kheer', 'Chana Chaat'],
    regionalCollections: [
      {
        title: 'Awadhi Dastarkhwan',
        description: 'Slow-dum aromatic rice, rich paneer curries, and saffron milk puddings.',
        dishes: ['vegetable-pulao', 'kheer', 'palak-dal']
      },
      {
        title: 'Banarasi Gali Flavour',
        description: 'Vibrant spice blends and fresh roadside street bowls.',
        dishes: ['chana-chaat', 'aloo-gobi', 'bhindi-masala']
      }
    ],
    festivalFoods: ['Holi Gujiya & Thandai', 'Janmashtami Makhan Mishri', 'Diwali Kheer'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    nameHindi: 'केरल',
    capital: 'Thiruvananthapuram',
    region: 'South India',
    cuisineDescription: 'Gods Own Country delights cooked in raw cold-pressed coconut oil, fresh curry leaves, kokum, and coconut milk.',
    cuisineDescriptionHindi: 'कच्चे नारियल का तेल, ताज़ी करी पत्ती, कोकम और नारियल दूध में पके पारंपरिक केरल व्यंजन।',
    famousDishes: ['Soft Appam', 'Malabar Veg Stew', 'Onam Sadya Avial', 'Steamed Puttu', 'Coconut Payasam'],
    regionalCollections: [
      {
        title: 'Sadya Delicacies',
        description: 'The monumental 24-dish plantain leaf feast items.',
        dishes: ['avial', 'appam']
      }
    ],
    festivalFoods: ['Onam Sadya Feast', 'Vishu Kani Sweetness', 'Thrissur Pooram Treats'],
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    nameHindi: 'पश्चिम बंगाल',
    capital: 'Kolkata',
    region: 'East India',
    cuisineDescription: 'Refined balancing of Paanch Phoron (five spices), pungent mustard oil, seasonal sweetwater fish, and legendary chhena sweets.',
    cuisineDescriptionHindi: 'पांच फोड़न का छौंक, शुद्ध सरसों का तेल, हल्की सुस्वादु तरकारियां और नरम रसीले रसगुल्ले।',
    famousDishes: ['Spongy Rosogolla', 'Mishti Doi', 'Aloo Posto', 'Moong Dal', 'Begun Bhaja'],
    regionalCollections: [
      {
        title: 'Sweet Heritage of Bengal',
        description: 'Handcrafted fresh cottage cheese sweets simmered in fragrant syrups.',
        dishes: ['bengali-rasgulla']
      }
    ],
    festivalFoods: ['Durga Puja Bhog Khichuri', 'Pohela Boishakh Thali', 'Kali Puja Sandesh'],
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bihar',
    name: 'Bihar',
    nameHindi: 'बिहार',
    capital: 'Patna',
    region: 'East India',
    cuisineDescription: 'Rustic, wholesome, high-energy foods driven by roasted gram flour (sattu), mustard oil, and clay chulha baking.',
    cuisineDescriptionHindi: 'भुना चना सत्तू, सरसों का कच्चा तेल और उपले की आग पर पकी पारम्परिक लिट्टी-चोखा।',
    famousDishes: ['Litti Chokha', 'Sattu Sharbat', 'Lauki Chana Dal', 'Makhana Chaat', 'Thekua'],
    regionalCollections: [
      {
        title: 'Sattu Superfood Journey',
        description: 'Nutrient-rich, cooling, and gut-healthy roasted gram classics.',
        dishes: ['litti-chokha', 'sattu-sharbat', 'lauki-chana-dal', 'makhana-chaat']
      }
    ],
    festivalFoods: ['Chhath Puja Thekua & Kheer', 'Makar Sankranti Dahi Chura', 'Jitiya Special'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    nameHindi: 'कश्मीर',
    capital: 'Srinagar',
    region: 'North India',
    cuisineDescription: 'Exquisite slow-cooked Himalayan mountain cuisine with Kashmiri red chilies, fennel, dried ginger, saffron, and kahwa tea.',
    cuisineDescriptionHindi: 'हिमालयी जड़ी-बूटियां, कश्मीरी मिर्च का गहरा लाल रंग, सौंठ, सौंफ और खुशबूदार केसरिया कहवा।',
    famousDishes: ['Kashmiri Mutton Rogan Josh', 'Kashmiri Dum Aloo', 'Nadru Yakhni', 'Kashmiri Kahwa'],
    regionalCollections: [
      {
        title: 'Wazwan Treasures',
        description: 'Royal ceremonial course dishes simmered for hours in copper vessels.',
        dishes: ['kashmiri-rogan-josh', 'dum-aloo']
      }
    ],
    festivalFoods: ['Herath (Shivratri) Feast', 'Eid Wazwan', 'Navreh Special'],
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    nameHindi: 'कर्नाटक',
    capital: 'Bengaluru',
    region: 'South India',
    cuisineDescription: 'From the temple cuisine of Udupi and spicy fiery coasts of Mangalore to rich ragi mudde and bisi bele bath.',
    cuisineDescriptionHindi: 'उडुपी के सात्विक व्यंजन, रागी के पौष्टिक मुड्डे और इमली-दालचीनी वाली खुशबूदार बीसी बेले बाथ।',
    famousDishes: ['Crispy Masala Dosa', 'Bisi Bele Bath', 'Ragi Dosa', 'Udupi Sambar', 'Mysore Pak'],
    regionalCollections: [
      {
        title: 'Udupi Heritage',
        description: 'Satvik kitchen mastery without onion or garlic.',
        dishes: ['dosa', 'ragi-dosa', 'bisi-bele-bath']
      }
    ],
    festivalFoods: ['Ugadi Obbattu', 'Ganesh Chauthi Modaka', 'Dasara Mysore Pak'],
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'northeast',
    name: 'Northeast India (Seven Sisters)',
    nameHindi: 'पूर्वोत्तर भारत',
    capital: 'Guwahati / Gangtok / Shillong',
    region: 'Northeast India',
    cuisineDescription: 'Fresh, organic mountain flavors emphasizing steaming, fermented bamboo shoots, fresh herbs, ghost pepper chillies, and delicate momos.',
    cuisineDescriptionHindi: 'ताज़ा पहाड़ी जड़ी-बूटियां, भाप में पके मोमोज, बांस के करील (बैम्बू शूट) और प्राकृतिक ऑर्गेनिक स्वाद।',
    famousDishes: ['Steamed Momos', 'Thukpa Noodle Soup', 'Bamboo Shoot Curry', 'Assam Laksa Rice'],
    regionalCollections: [
      {
        title: 'Himalayan Steam & Broth',
        description: 'Clean, soothing broths and delicate paper-thin momos.',
        dishes: ['darjeeling-momos']
      }
    ],
    festivalFoods: ['Bihu Pitha', 'Hornbill Indigenous Feast', 'Losar Dumplings'],
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800&auto=format&fit=crop&q=80'
  }
];

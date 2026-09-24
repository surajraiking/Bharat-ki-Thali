export interface FestivalData {
  id: string;
  name: string;
  nameHindi: string;
  season: string;
  month: string;
  description: string;
  descriptionHindi: string;
  traditionalDishes: string[];
  bannerImage: string;
  emoji: string;
}

export const festivalsList: FestivalData[] = [
  {
    id: 'diwali',
    name: 'Diwali (Deepavali)',
    nameHindi: 'दीपावली (दिवाली)',
    season: 'Autumn / Kartik',
    month: 'October / November',
    description: 'The festival of lights celebrating the triumph of light over darkness. Traditional households prepare rich mithais, savory farsan, and royal feast thalis.',
    descriptionHindi: 'रोशनी का महापर्व, जहां घर-घर में ताज़ी मिठाइयां, बेसन के लड्डू, खीर, चकली और शाही दाल-बाटी की थालियां सजाई जाती हैं।',
    traditionalDishes: ['besan-laddu', 'kheer', 'dal-makhani', 'panchmel-dal', 'bengali-rasgulla', 'rajasthani-dal-baati-churma'],
    bannerImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    emoji: '🪔'
  },
  {
    id: 'holi',
    name: 'Holi',
    nameHindi: 'होली',
    season: 'Spring / Phalguna',
    month: 'March',
    description: 'The vibrant festival of colors welcomed with sweet mawa gujiyas, refreshing chilled thandai, spicy chaats, and festive chole.',
    descriptionHindi: 'रंगों और उल्लास का त्योहार! मीठी मावा गुजिया, ठंडाई, तीखे छोले और चटपटी चाट की महक हर घर में गूंजती है।',
    traditionalDishes: ['chole', 'gajar-halwa', 'aam-panna', 'masala-chaas', 'kadhi-pakora', 'chana-chaat'],
    bannerImage: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80',
    emoji: '🎨'
  },
  {
    id: 'navratri',
    name: 'Navratri & Durga Puja',
    nameHindi: 'नवरात्रि एवं दुर्गा पूजा',
    season: 'Autumn & Spring',
    month: 'March / October',
    description: 'Nine sacred nights of fasting and devotion. Pure satvik food made without onion, garlic, or grain, featuring sabudana, makhana, and bhog khichuri.',
    traditionalDishes: ['makhana-chaat', 'khandvi', 'dhokla', 'bengali-rasgulla', 'dum-aloo', 'cucumber-raita'],
    descriptionHindi: 'नौ पावन रात्रियां! सात्विक भोजन, मखाना चाट, बिना प्याज-लहसुन के दम आलू, और मां दुर्गा के पावन भोग।',
    bannerImage: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80',
    emoji: '🕉️'
  },
  {
    id: 'makar-sankranti',
    name: 'Makar Sankranti & Pongal',
    nameHindi: 'मकर संक्रांति एवं पोंगल',
    season: 'Winter Solstice / Magh',
    month: 'January',
    description: 'Harvest thanksgiving to the Sun God across India. In the South, newly harvested rice with jaggery is boiled in clay pots; in North & West, khichdi, undhiyu, and til laddus are shared.',
    descriptionHindi: 'फसल कटाई और सूर्य देव का आभार! दक्षिण में मीठा पोंगल, उत्तर में उड़द दाल की खिचड़ी, और गुजरात में सूरती उंधियू।',
    traditionalDishes: ['pongal', 'khichdi', 'gujarati-undhiyu', 'bajra-roti', 'litti-chokha'],
    bannerImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80',
    emoji: '🪁'
  },
  {
    id: 'onam',
    name: 'Onam',
    nameHindi: 'ओणम',
    season: 'Harvest / Chingam',
    month: 'August / September',
    description: 'Keralas magnificent harvest celebration marked by the grand 24-dish vegetarian Sadya served on fresh plantain leaves.',
    descriptionHindi: 'केरल का भव्य फसल उत्सव! केले के पत्ते पर परोसी जाने वाली 24 व्यंजनों की अद्वितीय ओणम सद्या (Avial, Payasam, Sambar)।',
    traditionalDishes: ['avial', 'sambar', 'appam', 'curd-rice', 'rasam'],
    bannerImage: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop&q=80',
    emoji: '🌺'
  },
  {
    id: 'eid',
    name: 'Eid-ul-Fitr & Eid-ul-Adha',
    nameHindi: 'ईद-उल-फ़ितर',
    season: 'Festive',
    month: 'Islamic Calendar',
    description: 'Celebration of gratitude featuring rich creamy sheer khurma, slow-cooked saffron biryani, and aromatic mutton curries.',
    descriptionHindi: 'बरकत और भाईचारे की दावत! बादाम-पिस्ते वाली शीर खुरमा, खुशबूदार दम बिरयानी और कश्मीरी रोगन जोश।',
    traditionalDishes: ['hyderabadi-biryani', 'kashmiri-rogan-josh', 'kheer'],
    bannerImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    emoji: '🌙'
  },
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    nameHindi: 'गणेश चतुर्थी',
    season: 'Bhadrapada',
    month: 'August / September',
    description: 'Welcome festival for Lord Ganesha featuring steamed ukadiche modaks, poha, puran poli, and festive Maharashtrian usal.',
    descriptionHindi: 'बप्पा का आगमन! ताज़े नारियल और गुड़ से बने उकडीचे मोदक, कांदा पोहा और पूरन पोली का पावन नैवेद्य।',
    traditionalDishes: ['poha', 'misal-pav', 'mumbai-vada-pav', 'besan-laddu'],
    bannerImage: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80',
    emoji: '🐘'
  }
];

export interface HealthCategory {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  descriptionHindi: string;
  color: string;
  badgeBg: string;
  icon: string;
  tagFilter: string;
}

export const healthCategoriesList: HealthCategory[] = [
  {
    id: 'high-protein',
    name: 'High Protein',
    nameHindi: 'हाई प्रोटीन',
    description: 'Packed with lentils, paneer, sprouts, chicken, or sattu to fuel muscle recovery and sustained energy.',
    descriptionHindi: 'दालों, पनीर, अंकुरित मूंग, सत्तू और प्रोटीन से भरपूर ऊर्जावान व्यंजन।',
    color: '#E8620C',
    badgeBg: 'bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-950/40 dark:border-orange-800 dark:text-orange-300',
    icon: '💪',
    tagFilter: 'High Protein'
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss & Low Calorie',
    nameHindi: 'वजन नियंत्रण (कम कैलोरी)',
    description: 'Wholesome, low-glycemic meals that keep you full without excess empty calories.',
    descriptionHindi: 'कम तेल और संतुलित पोषण के साथ पेट को लंबे समय तक तृप्त रखने वाले व्यंजन।',
    color: '#059669',
    badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300',
    icon: '🥗',
    tagFilter: 'Weight Loss'
  },
  {
    id: 'diabetic-friendly',
    name: 'Diabetic Friendly',
    nameHindi: 'मधुमेह अनुकूल (डायबिटीज)',
    description: 'Complex carbs with low GI index, high fiber, and gentle blood glucose response.',
    descriptionHindi: 'धीमी गति से पचने वाले कॉम्प्लेक्स कार्ब्स, ज्यादा फाइबर और बिना किसी अतिरिक्त चीनी के।',
    color: '#0284c7',
    badgeBg: 'bg-sky-50 border-sky-200 text-sky-700 dark:bg-sky-950/40 dark:border-sky-800 dark:text-sky-300',
    icon: '🩺',
    tagFilter: 'Diabetic Friendly'
  },
  {
    id: 'gut-friendly',
    name: 'Gut Health & Digestion',
    nameHindi: 'पाचन एवं आंतों का स्वास्थ्य',
    description: 'Naturally probiotic, fermented, or easily digestible foods with cumin, ginger, and buttermilk.',
    descriptionHindi: 'प्राकृतिक प्रोबायोटिक, फर्मेंटेड इडली-डोसा, छाछ और हींग-जीरा वाले सुपाच्य आहार।',
    color: '#8b5cf6',
    badgeBg: 'bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/40 dark:border-purple-800 dark:text-purple-300',
    icon: '✨',
    tagFilter: 'Gut Friendly'
  },
  {
    id: 'less-oil',
    name: 'Zero / Less Oil',
    nameHindi: 'कम तेल / भाप में पका',
    description: 'Steamed, roasted, or boiled dishes that maximize pure flavor while cutting down saturated fats.',
    descriptionHindi: 'भाप में पके ढोकला, इडली, रोस्टेड स्नैक्स और बिना छौंक के पौष्टिक सूप।',
    color: '#ca8a04',
    badgeBg: 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-300',
    icon: '💧',
    tagFilter: 'Less Oil'
  },
  {
    id: 'immunity-booster',
    name: 'Immunity & Superfoods',
    nameHindi: 'इम्यूनिटी बूस्टर एवं सुपरफूड',
    description: 'Rich in haldi (curcumin), black pepper, ginger, moringa, and antioxidant-rich amla.',
    descriptionHindi: 'हल्दी, काली मिर्च, अदरक, सहजन (मोरिंगा) और आंवले के प्राकृतिक औषधीय गुणों से भरपूर।',
    color: '#dc2626',
    badgeBg: 'bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300',
    icon: '🛡️',
    tagFilter: 'Immunity Booster'
  }
];

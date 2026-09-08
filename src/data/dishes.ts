import { Dish, Category, HealthTag, Region } from '../types';
import { breakfastDishes } from './breakfastDishes';
import { curryDalDishes } from './curryDalDishes';
import { mainCourseDishes } from './mainCourseDishes';
import { grainsAndSnacksDishes } from './grainsAndSnacksDishes';
import { dessertsAndDrinksDishes } from './dessertsAndDrinksDishes';
import { moreRegionalDishes } from './moreRegionalDishes';

export const allDishes: Dish[] = [
  ...breakfastDishes,
  ...curryDalDishes,
  ...mainCourseDishes,
  ...grainsAndSnacksDishes,
  ...dessertsAndDrinksDishes,
  ...moreRegionalDishes
];

export const CATEGORIES: { id: Category; label: string; hindiLabel: string; icon: string }[] = [
  { id: 'All', label: 'All Dishes', hindiLabel: 'सभी 55+ व्यंजन', icon: '🍽️' },
  { id: 'Breakfast', label: 'Breakfast', hindiLabel: 'नाश्ता', icon: '🥞' },
  { id: 'Main Course', label: 'Main Course', hindiLabel: 'सब्जियां व करी', icon: '🥘' },
  { id: 'Dal & Soups', label: 'Dal & Soups', hindiLabel: 'दाल व रसम / सूप', icon: '🥣' },
  { id: 'Rotis & Grains', label: 'Rotis & Grains', hindiLabel: 'रोटी, भाकरी व चावल', icon: '🫓' },
  { id: 'Snacks & Chaat', label: 'Snacks & Chaat', hindiLabel: 'हेल्दी स्नैक्स व चाट', icon: '🍿' },
  { id: 'Healthy Desserts', label: 'Healthy Desserts', hindiLabel: 'मीठा (नो शुगर / नेचुरल)', icon: '🥕' },
  { id: 'Drinks & Raita', label: 'Drinks & Raita', hindiLabel: 'छाछ, रायता व शरबत', icon: '🥛' },
];

export const HEALTH_GOALS: { id: HealthTag; label: string; hindiLabel: string; color: string }[] = [
  { id: 'Weight Loss', label: 'Weight Loss', hindiLabel: 'वजन घटाएं', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { id: 'High Protein', label: 'High Protein', hindiLabel: 'हाई प्रोटीन', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { id: 'Diabetic Friendly', label: 'Sugar Control', hindiLabel: 'शुगर कंट्रोल', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { id: 'Easy Digestion', label: 'Easy Digestion', hindiLabel: 'आसान पाचन', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  { id: 'Heart Healthy', label: 'Heart Care', hindiLabel: 'स्वस्थ दिल', color: 'bg-rose-50 text-rose-700 border-rose-200' },
  { id: 'Immunity Booster', label: 'Immunity', hindiLabel: 'रोग प्रतिरोधक', color: 'bg-orange-50 text-orange-700 border-orange-200' },
  { id: 'Iron Rich', label: 'Iron / Blood', hindiLabel: 'खून व आयरन', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { id: 'Calcium Rich', label: 'Bones / Calcium', hindiLabel: 'हड्डियां व कैल्शियम', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { id: 'Low Calorie', label: 'Low Calorie', hindiLabel: 'कम कैलोरी', color: 'bg-lime-50 text-lime-700 border-lime-200' },
  { id: 'Gut Friendly', label: 'Gut Probiotic', hindiLabel: 'पेट व आंतें', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { id: 'Gluten Free', label: 'Gluten Free', hindiLabel: 'ग्लूटेन फ्री', color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
];

export const REGIONS: Region[] = [
  'North India',
  'South India',
  'West India',
  'East India',
  'Central India',
  'Pan India'
];

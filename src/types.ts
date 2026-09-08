export type Category = 
  | 'All'
  | 'Breakfast' // Nashta
  | 'Main Course' // Lunch & Dinner Curries / Sabzi
  | 'Dal & Soups' // Dals & Rasam / Shorba
  | 'Rotis & Grains' // Healthy Breads, Pulao & Rice
  | 'Snacks & Chaat' // Healthy Snacks & Chaats
  | 'Healthy Desserts' // Bina chini / Healthy sweets
  | 'Drinks & Raita'; // Chaas, Sharbat, Raita

export type Region = 
  | 'North India'
  | 'South India'
  | 'West India'
  | 'East India'
  | 'Central India'
  | 'Pan India';

export type HealthTag = 
  | 'Weight Loss'
  | 'High Protein'
  | 'Diabetic Friendly'
  | 'Easy Digestion'
  | 'Heart Healthy'
  | 'Immunity Booster'
  | 'Low Calorie'
  | 'Iron Rich'
  | 'Gut Friendly'
  | 'Calcium Rich'
  | 'Gluten Free';

export interface Ingredient {
  item: string;
  quantity: number; // base quantity for 1 serving or standard unit
  unit: string; // e.g. "cup", "tsp", "tbsp", "gram", "medium", "pinch"
  notes?: string;
}

export interface Dish {
  id: string;
  name: string; // English / Hinglish Name (e.g. Moong Dal Khichdi)
  hindiName: string; // Devnagari Script (e.g. मूँग दाल खिचड़ी)
  pronunciation?: string;
  category: Category;
  region: Region;
  tagline: string;
  tasteProfile: string; // Swad kaisa hai: Masaledar, halka, comforting, etc.
  healthTags: HealthTag[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  baseServings: number;
  calories: number; // per serving
  macros: {
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
    fiberGrams: number;
  };
  // Detailed Benefits (Fayde)
  fayde: {
    title: string;
    description: string;
  }[];
  // Detailed Precautions / Downsides (Nuksan & Savdhani)
  nuksan: {
    title: string;
    description: string;
  }[];
  ingredients: Ingredient[];
  instructions: string[]; // Cooking steps in Hindi-Hinglish
  expertHealthyTip: string; // Tips to make it healthier & tastier
  bestTimeToEat: string; // Kab khayein
  suitableFor: string[]; // Kon kon kha sakta hai
  emoji: string;
  accentColor: string;
}

export interface FilterState {
  searchQuery: string;
  category: Category;
  selectedTag: string;
  selectedRegion: string;
  onlyFavorites: boolean;
  sortBy: 'popular' | 'caloriesLow' | 'caloriesHigh' | 'proteinHigh' | 'quickest';
}

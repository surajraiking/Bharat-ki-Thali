export type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Dessert';
export type DietType = 'Vegetarian' | 'Vegan' | 'Jain' | 'Egg' | 'Non-Veg';
export type DifficultyType = 'Easy' | 'Medium' | 'Hard';
export type SpiceLevel = 'Mild' | 'Medium' | 'Spicy' | 'Extra Spicy';

export type IndianRegion = 
  | 'North India'
  | 'South India'
  | 'West India'
  | 'East India'
  | 'Northeast India'
  | 'Central India'
  | 'Pan India';

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  optional?: boolean;
  notes?: string;
}

export interface RecipeStep {
  id: string;
  stepNumber: number;
  title: string;
  instruction: string;
  durationMinutes?: number;
  image?: string;
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
}

export interface DishBenefit {
  title: string;
  description: string;
}

export interface Dish {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  descriptionHindi?: string;
  image: string;
  region: IndianRegion | string;
  state: string;
  cuisine: string[];
  category: string[];
  mealTypes: MealType[];
  diet: DietType[];
  ingredients: Ingredient[];
  steps: RecipeStep[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  servings: number;
  difficulty: DifficultyType;
  spiceLevel: SpiceLevel;
  nutrition: Nutrition;
  tips: string[];
  precautions: string[];
  allergens: string[];
  festival: string[];
  tags: string[];
  popularity: number;
  emoji?: string;
  accentColor?: string;
  fayde?: DishBenefit[];
  tasteProfile?: string;
  bestTimeToEat?: string;
  suitableFor?: string[];
}

export type SortOption = 'relevance' | 'popular' | 'quickest' | 'caloriesLow' | 'proteinHigh';

export interface FilterState {
  searchQuery: string;
  mealType: MealType | 'All';
  diet: DietType | 'All';
  difficulty: DifficultyType | 'All';
  maxTime: number | 'All'; // in minutes, e.g. 15, 30, 60
  region: string | 'All';
  state: string | 'All';
  healthTag: string | 'All';
  festival: string | 'All';
  category: string | 'All';
  sortBy: SortOption;
}

export interface ShoppingItem {
  id: string;
  dishId?: string;
  dishName?: string;
  name: string;
  quantity: number;
  unit: string;
  purchased: boolean;
  category?: string;
}

export interface MealPlanDay {
  breakfast?: string; // dishId
  lunch?: string;
  dinner?: string;
}

export interface WeeklyMealPlan {
  monday: MealPlanDay;
  tuesday: MealPlanDay;
  wednesday: MealPlanDay;
  thursday: MealPlanDay;
  friday: MealPlanDay;
  saturday: MealPlanDay;
  sunday: MealPlanDay;
}

export type ThaliSlotKey = 
  | 'dal'
  | 'sabzi'
  | 'rice'
  | 'roti'
  | 'salad'
  | 'chutney'
  | 'sweet'
  | 'drink';

export interface ThaliSelection {
  dal?: string;
  sabzi?: string;
  rice?: string;
  roti?: string;
  salad?: string;
  chutney?: string;
  sweet?: string;
  drink?: string;
}

export interface SavedThali {
  id: string;
  name: string;
  items: ThaliSelection;
  createdAt: number;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'hi' | 'en';
  dietPreference: DietType | 'All';
  servingsDefault: number;
  soundEffects: boolean;
}

export interface AIChefMessage {
  id: string;
  sender: 'user' | 'chef';
  text: string;
  timestamp: number;
  structuredData?: {
    type: 'recipe_recommendation' | 'ingredient_search' | 'meal_plan' | 'shopping_list' | 'recipe_explanation' | 'regional_discovery';
    title?: string;
    recipes?: {
      dishId: string;
      name: string;
      reason?: string;
    }[];
    mealPlan?: Record<string, string>;
    shoppingItems?: { name: string; quantity: string }[];
    notes?: string;
  };
}

export interface StateInfo {
  id: string;
  name: string;
  nameHindi: string;
  capital: string;
  region: IndianRegion;
  cuisineDescription: string;
  cuisineDescriptionHindi: string;
  famousDishes: string[];
  regionalCollections: {
    title: string;
    description: string;
    dishes: string[];
  }[];
  festivalFoods: string[];
  image: string;
}

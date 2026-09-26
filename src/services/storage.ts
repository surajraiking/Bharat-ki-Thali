import { Dish, ShoppingItem, WeeklyMealPlan, SavedThali, UserPreferences } from '../types';
import { allDishes } from '../data/dishes';

const VALID_DISH_IDS = new Set(allDishes.map(d => d.id));
const validDishId = (id: string | undefined): string | undefined =>
  id && VALID_DISH_IDS.has(id) ? id : undefined;

const STORAGE_KEYS = {
  FAVORITES: 'bkt_favorites_v2',
  COLLECTIONS: 'bkt_collections_v2',
  RECENTLY_VIEWED: 'bkt_recently_viewed_v2',
  SHOPPING_LIST: 'bkt_shopping_list_v2',
  MEAL_PLAN: 'bkt_meal_plan_v2',
  SAVED_THALIS: 'bkt_saved_thalis_v2',
  SETTINGS: 'bkt_settings_v2',
  COOKING_STATE: 'bkt_cooking_state_v2'
};

const DEFAULT_SETTINGS: UserPreferences = {
  theme: 'system',
  language: 'hi',
  dietPreference: 'All',
  servingsDefault: 2,
  soundEffects: true,
  profile: {
    displayName: 'Bharat Ki Thali User',
    username: 'foodlover',
    bio: 'Exploring India, one delicious dish at a time 🇮🇳',
    avatarUrl: '',
    coverUrl: '',
    location: '',
    website: '',
    cookingSkill: 'Home Cook',
    favoriteCuisine: 'Indian',
    isPublic: true,
    creatorMode: false,
    socialLinks: {}
  }
};

const DEFAULT_MEAL_PLAN: WeeklyMealPlan = {
  monday: { breakfast: 'poha', lunch: 'rajma-masala', dinner: 'moong-dal-khichdi' },
  tuesday: { breakfast: 'oats-idli', lunch: 'dal-palak', dinner: 'bhindi-masala' },
  wednesday: { breakfast: 'moong-dal-chilla', lunch: 'chana-masala', dinner: 'karela-sabzi' },
  thursday: { breakfast: 'vegetable-upma', lunch: 'south-indian-sambar', dinner: 'curd-rice' },
  friday: { breakfast: 'methi-thepla', lunch: 'lauki-chana-dal', dinner: 'gobi-gajar-matar' },
  saturday: { breakfast: 'mumbai-vada-pav', lunch: 'hyderabadi-biryani', dinner: 'kulthi-dal-soup' },
  sunday: { breakfast: 'amritsari-kulcha', lunch: 'rajasthani-dal-baati-churma', dinner: 'makhana-kheer' }
};

export const storageService = {
  getSettings(): UserPreferences {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(settings: UserPreferences): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (err) {
      console.error('Failed to save settings:', err);
    }
  },

  getFavorites(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      if (!data) return ['poha', 'rajma-masala', 'oats-idli'];
      const parsed = JSON.parse(data);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((id): id is string => typeof id === 'string' && !!validDishId(id));
    } catch {
      return [];
    }
  },

  saveFavorites(dishIds: string[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(dishIds));
    } catch (err) {
      console.error('Failed to save favorites:', err);
    }
  },

  toggleFavorite(dishId: string): boolean {
    const list = this.getFavorites();
    const index = list.indexOf(dishId);
    let isFav = false;
    if (index > -1) {
      list.splice(index, 1);
      isFav = false;
    } else {
      list.push(dishId);
      isFav = true;
    }
    this.saveFavorites(list);
    return isFav;
  },

  getRecentlyViewed(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  addRecentlyViewed(dishId: string): void {
    try {
      const list = this.getRecentlyViewed().filter(id => id !== dishId);
      list.unshift(dishId);
      // Keep up to 40
      const trimmed = list.slice(0, 40);
      localStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED, JSON.stringify(trimmed));
    } catch (err) {
      console.error('Failed to save recently viewed:', err);
    }
  },

  clearRecentlyViewed(): void {
    localStorage.removeItem(STORAGE_KEYS.RECENTLY_VIEWED);
  },

  getShoppingList(): ShoppingItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SHOPPING_LIST);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveShoppingList(items: ShoppingItem[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SHOPPING_LIST, JSON.stringify(items));
    } catch (err) {
      console.error('Failed to save shopping list:', err);
    }
  },

  addIngredientsToShoppingList(dish: Dish, servingsScale = 1): void {
    const current = this.getShoppingList();
    const newItems: ShoppingItem[] = [...current];

    dish.ingredients.forEach(ing => {
      const scaledQty = Math.round((ing.quantity * servingsScale) * 10) / 10;
      // Look for existing item with matching name and unit
      const existing = newItems.find(
        i => i.name.toLowerCase().trim() === ing.name.toLowerCase().trim() && i.unit.toLowerCase() === ing.unit.toLowerCase() && !i.purchased
      );

      if (existing) {
        existing.quantity = Math.round((existing.quantity + scaledQty) * 10) / 10;
      } else {
        newItems.push({
          id: `shop-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
          dishId: dish.id,
          dishName: dish.name,
          name: ing.name,
          quantity: scaledQty,
          unit: ing.unit,
          purchased: false,
          category: dish.category[0] || 'Groceries'
        });
      }
    });

    this.saveShoppingList(newItems);
  },

  getMealPlan(): WeeklyMealPlan {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MEAL_PLAN);
      if (!data) return DEFAULT_MEAL_PLAN;

      const stored = JSON.parse(data) as WeeklyMealPlan;
      const clean: WeeklyMealPlan = { ...DEFAULT_MEAL_PLAN };

      (Object.keys(clean) as (keyof WeeklyMealPlan)[]).forEach(day => {
        const source = stored?.[day] || {};
        clean[day] = {
          breakfast: validDishId(source.breakfast) ?? DEFAULT_MEAL_PLAN[day].breakfast,
          lunch: validDishId(source.lunch) ?? DEFAULT_MEAL_PLAN[day].lunch,
          dinner: validDishId(source.dinner) ?? DEFAULT_MEAL_PLAN[day].dinner,
        };
      });

      return clean;
    } catch {
      return DEFAULT_MEAL_PLAN;
    }
  },

  saveMealPlan(plan: WeeklyMealPlan): void {
    try {
      localStorage.setItem(STORAGE_KEYS.MEAL_PLAN, JSON.stringify(plan));
    } catch (err) {
      console.error('Failed to save meal plan:', err);
    }
  },

  getSavedThalis(): SavedThali[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_THALIS);
      return data ? JSON.parse(data) : [
        {
          id: 'thali-classic-north',
          name: 'Classic North Indian Thali',
          items: {
            dal: 'rajma-masala',
            sabzi: 'bhindi-masala',
            rice: 'lemon-rice',
            roti: 'amritsari-kulcha',
            salad: 'cucumber-mint-raita',
            chutney: 'khaman-dhokla',
            sweet: 'makhana-kheer',
            drink: 'masala-chaas'
          },
          createdAt: Date.now() - 86400000
        },
        {
          id: 'thali-gujarati-farsan',
          name: 'Royal Gujarati Winter Thali',
          items: {
            dal: 'dal-tadka',
            sabzi: 'gujarati-undhiyu',
            rice: 'moong-dal-khichdi',
            roti: 'methi-thepla',
            salad: 'cucumber-mint-raita',
            chutney: 'khaman-dhokla',
            sweet: 'healthy-gajar-halwa',
            drink: 'masala-chaas'
          },
          createdAt: Date.now() - 172800000
        }
      ];
    } catch {
      return [];
    }
  },

  saveSavedThalis(thalis: SavedThali[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SAVED_THALIS, JSON.stringify(thalis));
    } catch (err) {
      console.error('Failed to save thalis:', err);
    }
  },

  exportAllData(): string {
    const fullBackup = {
      version: '2.0.0',
      exportedAt: new Date().toISOString(),
      favorites: this.getFavorites(),
      recentlyViewed: this.getRecentlyViewed(),
      shoppingList: this.getShoppingList(),
      mealPlan: this.getMealPlan(),
      savedThalis: this.getSavedThalis(),
      settings: this.getSettings()
    };
    return JSON.stringify(fullBackup, null, 2);
  },

  importData(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      if (data.favorites) this.saveFavorites(data.favorites.filter((id: string) => VALID_DISH_IDS.has(id)));
      if (data.shoppingList) this.saveShoppingList(data.shoppingList);
      if (data.mealPlan) this.saveMealPlan(data.mealPlan);
      if (data.savedThalis) this.saveSavedThalis(data.savedThalis);
      if (data.settings) this.saveSettings(data.settings);
      return true;
    } catch (err) {
      console.error('Import failed:', err);
      return false;
    }
  },

  clearAllData(): void {
    localStorage.clear();
  }
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Dish, 
  ShoppingItem, 
  WeeklyMealPlan, 
  SavedThali, 
  UserPreferences,
  FilterState 
} from '../types';
import { allDishes } from '../data/dishes';
import { storageService } from '../services/storage';

export type AppPage = 
  | 'home' 
  | 'explore' 
  | 'regions' 
  | 'meal-planner' 
  | 'thali-builder' 
  | 'shopping-list' 
  | 'ai-chef' 
  | 'favorites' 
  | 'settings';

interface AppContextType {
  activePage: AppPage;
  setActivePage: (page: AppPage) => void;
  selectedDish: Dish | null;
  setSelectedDish: (dish: Dish | null) => void;
  cookingDish: Dish | null;
  setCookingDish: (dish: Dish | null) => void;
  isApkModalOpen: boolean;
  setIsApkModalOpen: (open: boolean) => void;
  isSurpriseModalOpen: boolean;
  setIsSurpriseModalOpen: (open: boolean) => void;
  
  // Data
  dishes: Dish[];
  favorites: string[];
  toggleFavorite: (dishId: string) => void;
  isFavorite: (dishId: string) => boolean;
  recentlyViewed: string[];
  viewDish: (dish: Dish) => void;
  clearRecentlyViewed: () => void;
  
  // Shopping list
  shoppingList: ShoppingItem[];
  addToShoppingList: (dish: Dish, servingsScale?: number) => void;
  addCustomShoppingItem: (name: string, quantity: number, unit: string) => void;
  toggleShoppingItem: (id: string) => void;
  deleteShoppingItem: (id: string) => void;
  clearPurchasedShoppingItems: () => void;
  clearAllShoppingItems: () => void;
  
  // Meal plan
  mealPlan: WeeklyMealPlan;
  setMealPlan: (plan: WeeklyMealPlan) => void;
  updateMealPlanSlot: (day: keyof WeeklyMealPlan, slot: 'breakfast' | 'lunch' | 'dinner', dishId: string | undefined) => void;
  generateShoppingListFromMealPlan: () => void;
  
  // Thalis
  savedThalis: SavedThali[];
  saveThali: (name: string, items: any) => void;
  deleteThali: (id: string) => void;
  
  // Preferences
  settings: UserPreferences;
  updateSettings: (newSettings: Partial<UserPreferences>) => void;
  
  // Explore Filters
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  setQuickSearch: (query: string) => void;
  setQuickFilter: (key: keyof FilterState, value: any) => void;
  
  // Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const defaultFilters: FilterState = {
  searchQuery: '',
  mealType: 'All',
  diet: 'All',
  difficulty: 'All',
  maxTime: 'All',
  region: 'All',
  state: 'All',
  healthTag: 'All',
  festival: 'All',
  category: 'All',
  sortBy: 'relevance'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<AppPage>('home');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [cookingDish, setCookingDish] = useState<Dish | null>(null);
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  const [isSurpriseModalOpen, setIsSurpriseModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Storage states
  const [favorites, setFavorites] = useState<string[]>(() => storageService.getFavorites());
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => storageService.getRecentlyViewed());
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(() => storageService.getShoppingList());
  const [mealPlan, setMealPlanState] = useState<WeeklyMealPlan>(() => storageService.getMealPlan());
  const [savedThalis, setSavedThalis] = useState<SavedThali[]>(() => storageService.getSavedThalis());
  const [settings, setSettings] = useState<UserPreferences>(() => storageService.getSettings());
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  // Apply dark mode class to document
  useEffect(() => {
    const isDark =
      settings.theme === 'dark' ||
      (settings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.theme]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 3000);
  };

  const toggleFavorite = (dishId: string) => {
    const isFav = storageService.toggleFavorite(dishId);
    setFavorites(storageService.getFavorites());
    showToast(isFav ? '❤️ Added to Favorites' : 'Removed from Favorites');
  };

  const isFavorite = (dishId: string) => favorites.includes(dishId);

  const viewDish = (dish: Dish) => {
    storageService.addRecentlyViewed(dish.id);
    setRecentlyViewed(storageService.getRecentlyViewed());
    setSelectedDish(dish);
  };

  const clearRecentlyViewed = () => {
    storageService.clearRecentlyViewed();
    setRecentlyViewed([]);
    showToast('Recently viewed cleared');
  };

  const addToShoppingList = (dish: Dish, servingsScale = 1) => {
    storageService.addIngredientsToShoppingList(dish, servingsScale);
    setShoppingList(storageService.getShoppingList());
    showToast(`🛒 Added ingredients for ${dish.name} to Shopping List`);
  };

  const addCustomShoppingItem = (name: string, quantity: number, unit: string) => {
    const current = [...shoppingList];
    current.push({
      id: `shop-${Date.now()}`,
      name,
      quantity,
      unit,
      purchased: false,
      category: 'Custom Items'
    });
    storageService.saveShoppingList(current);
    setShoppingList(current);
    showToast(`Added "${name}" to Shopping List`);
  };

  const toggleShoppingItem = (id: string) => {
    const current = shoppingList.map(item =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    );
    storageService.saveShoppingList(current);
    setShoppingList(current);
  };

  const deleteShoppingItem = (id: string) => {
    const current = shoppingList.filter(item => item.id !== id);
    storageService.saveShoppingList(current);
    setShoppingList(current);
  };

  const clearPurchasedShoppingItems = () => {
    const current = shoppingList.filter(item => !item.purchased);
    storageService.saveShoppingList(current);
    setShoppingList(current);
    showToast('Cleared purchased items');
  };

  const clearAllShoppingItems = () => {
    storageService.saveShoppingList([]);
    setShoppingList([]);
    showToast('Shopping list emptied');
  };

  const setMealPlan = (plan: WeeklyMealPlan) => {
    storageService.saveMealPlan(plan);
    setMealPlanState(plan);
  };

  const updateMealPlanSlot = (
    day: keyof WeeklyMealPlan,
    slot: 'breakfast' | 'lunch' | 'dinner',
    dishId: string | undefined
  ) => {
    const updated = {
      ...mealPlan,
      [day]: {
        ...mealPlan[day],
        [slot]: dishId
      }
    };
    setMealPlan(updated);
    showToast(`Updated ${day.toUpperCase()} ${slot}`);
  };

  const generateShoppingListFromMealPlan = () => {
    const dishIds: string[] = [];
    Object.values(mealPlan).forEach(day => {
      if (day.breakfast) dishIds.push(day.breakfast);
      if (day.lunch) dishIds.push(day.lunch);
      if (day.dinner) dishIds.push(day.dinner);
    });

    const uniqueDishIds = Array.from(new Set(dishIds));
    uniqueDishIds.forEach(id => {
      const found = allDishes.find(d => d.id === id);
      if (found) {
        storageService.addIngredientsToShoppingList(found, 1);
      }
    });

    setShoppingList(storageService.getShoppingList());
    showToast(`🛒 Generated shopping list for ${uniqueDishIds.length} planned meals!`);
  };

  const saveThali = (name: string, items: any) => {
    const current = [...savedThalis];
    current.unshift({
      id: `thali-${Date.now()}`,
      name,
      items,
      createdAt: Date.now()
    });
    storageService.saveSavedThalis(current);
    setSavedThalis(current);
    showToast(`Thali "${name}" saved!`);
  };

  const deleteThali = (id: string) => {
    const current = savedThalis.filter(t => t.id !== id);
    storageService.saveSavedThalis(current);
    setSavedThalis(current);
    showToast('Thali removed');
  };

  const updateSettings = (newSettings: Partial<UserPreferences>) => {
    const updated = { ...settings, ...newSettings };
    storageService.saveSettings(updated);
    setSettings(updated);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const setQuickSearch = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
    setActivePage('explore');
  };

  const setQuickFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setActivePage('explore');
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        selectedDish,
        setSelectedDish,
        cookingDish,
        setCookingDish,
        isApkModalOpen,
        setIsApkModalOpen,
        isSurpriseModalOpen,
        setIsSurpriseModalOpen,
        dishes: allDishes,
        favorites,
        toggleFavorite,
        isFavorite,
        recentlyViewed,
        viewDish,
        clearRecentlyViewed,
        shoppingList,
        addToShoppingList,
        addCustomShoppingItem,
        toggleShoppingItem,
        deleteShoppingItem,
        clearPurchasedShoppingItems,
        clearAllShoppingItems,
        mealPlan,
        setMealPlan,
        updateMealPlanSlot,
        generateShoppingListFromMealPlan,
        savedThalis,
        saveThali,
        deleteThali,
        settings,
        updateSettings,
        filters,
        setFilters,
        resetFilters,
        setQuickSearch,
        setQuickFilter,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

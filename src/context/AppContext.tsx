import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dish, ShoppingItem, WeeklyMealPlan, SavedThali, UserPreferences, FilterState, UserProfile } from '../types';
import { allDishes } from '../data/dishes';
import { additionalDishes } from '../data/additionalDishes';
import { globalFoodCatalog } from '../data/globalFoodCatalog';
import { indianRegionalCatalog } from '../data/indianRegionalCatalog';
import { storageService } from '../services/storage';
import { supabase } from '../services/supabase';
import type { User } from '@supabase/supabase-js';
import { getDishImage } from '../utils/dishImage';

export type AppPage = 'home' | 'explore' | 'regions' | 'meal-planner' | 'thali-builder' | 'shopping-list' | 'ai-chef' | 'favorites' | 'profile' | 'settings';
interface AppContextType {
  activePage: AppPage; setActivePage: (page: AppPage) => void; selectedDish: Dish | null; setSelectedDish: (dish: Dish | null) => void; cookingDish: Dish | null; setCookingDish: (dish: Dish | null) => void;
  isApkModalOpen: boolean; setIsApkModalOpen: (open: boolean) => void; isSurpriseModalOpen: boolean; setIsSurpriseModalOpen: (open: boolean) => void;
  dishes: Dish[]; favorites: string[]; toggleFavorite: (dishId: string) => void; isFavorite: (dishId: string) => boolean; recentlyViewed: string[]; viewDish: (dish: Dish) => void; clearRecentlyViewed: () => void;
  shoppingList: ShoppingItem[]; addToShoppingList: (dish: Dish, servingsScale?: number) => void; addCustomShoppingItem: (name: string, quantity: number, unit: string) => void; toggleShoppingItem: (id: string) => void; deleteShoppingItem: (id: string) => void; clearPurchasedShoppingItems: () => void; clearAllShoppingItems: () => void;
  mealPlan: WeeklyMealPlan; setMealPlan: (plan: WeeklyMealPlan) => void; updateMealPlanSlot: (day: keyof WeeklyMealPlan, slot: 'breakfast' | 'lunch' | 'dinner', dishId: string | undefined) => void; generateShoppingListFromMealPlan: () => void;
  savedThalis: SavedThali[]; saveThali: (name: string, items: any) => void; deleteThali: (id: string) => void; settings: UserPreferences; updateSettings: (newSettings: Partial<UserPreferences>) => void; profile: UserProfile; updateProfile: (newProfile: Partial<UserProfile>) => void;
  filters: FilterState; setFilters: React.Dispatch<React.SetStateAction<FilterState>>; resetFilters: () => void; setQuickSearch: (query: string) => void; setQuickFilter: (key: keyof FilterState, value: any) => void; toastMessage: string | null; showToast: (msg: string) => void;
}

// Keep every existing dish and append the global starter catalog. IDs are unique by design.
const catalogDishes: Dish[] = Array.from(new Map([...allDishes, ...additionalDishes, ...globalFoodCatalog, ...indianRegionalCatalog].map(d => [d.id, d])).values()).map(d => ({ ...d, image: getDishImage(d) }));
const defaultFilters: FilterState = { searchQuery: '', mealType: 'All', diet: 'All', difficulty: 'All', maxTime: 'All', region: 'All', state: 'All', healthTag: 'All', festival: 'All', category: 'All', sortBy: 'relevance' };
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode; user: User }> = ({ children, user }) => {
  const [activePage, setActivePage] = useState<AppPage>('home');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [cookingDish, setCookingDish] = useState<Dish | null>(null);
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  const [isSurpriseModalOpen, setIsSurpriseModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const sanitizeFavorites = () => {
    const raw = storageService.getFavorites();
    return Array.isArray(raw) ? raw.filter((item): item is string => typeof item === 'string' && catalogDishes.some(d => d.id === item)) : [];
  };
  const [favorites, setFavorites] = useState<string[]>(sanitizeFavorites);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => storageService.getRecentlyViewed().filter(id => catalogDishes.some(d => d.id === id)));
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(() => storageService.getShoppingList());
  const [mealPlan, setMealPlanState] = useState<WeeklyMealPlan>(() => storageService.getMealPlan());
  const [savedThalis, setSavedThalis] = useState<SavedThali[]>(() => storageService.getSavedThalis());
  const [settings, setSettings] = useState<UserPreferences>(() => storageService.getSettings());
  const defaultProfile: UserProfile = {
    displayName: user.user_metadata?.full_name ?? 'Bharat Ki Thali User',
    username: (user.email?.split('@')[0] ?? 'foodlover').replace(/[^a-zA-Z0-9_]/g, '').slice(0,24) || 'foodlover',
    bio: 'Exploring India, one delicious dish at a time 🇮🇳',
    avatarUrl: user.user_metadata?.avatar_url ?? '',
    coverUrl: '',
    location: '',
    website: '',
    cookingSkill: 'Home Cook',
    favoriteCuisine: 'Indian',
    isPublic: true,
    creatorMode: false,
    socialLinks: {
      instagram: 'https://instagram.com/surajraiking',
      youtube: 'https://youtube.com/@SanatanMythologyTales',
      facebook: 'https://facebook.com/surajraiking21',
    }
  };
  const profile = { ...defaultProfile, ...(settings.profile ?? {}), socialLinks: { ...defaultProfile.socialLinks, ...(settings.profile?.socialLinks ?? {}) } } as UserProfile;

  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [cloudReady, setCloudReady] = useState(false);

  useEffect(() => {
    const isDark = settings.theme === 'dark' || (settings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
  }, [settings.theme]);

  useEffect(() => {
    let cancelled = false;
    const loadProfile = async () => {
      const { data, error } = await supabase.from('user_profiles').select('*').eq('user_id', user.id).maybeSingle();
      if (cancelled) return;
      if (error) { console.error('Profile load failed:', error); setCloudReady(true); return; }
      if (data) {
        if (Array.isArray(data.favorites)) setFavorites(data.favorites.filter((id: string) => catalogDishes.some(d => d.id === id)));
        if (Array.isArray(data.recently_viewed)) setRecentlyViewed(data.recently_viewed.filter((id: string) => catalogDishes.some(d => d.id === id)));
        if (Array.isArray(data.shopping_list)) setShoppingList(data.shopping_list as ShoppingItem[]);
        if (data.meal_plan && typeof data.meal_plan === 'object') setMealPlanState(data.meal_plan as WeeklyMealPlan);
        if (Array.isArray(data.saved_thalis)) setSavedThalis(data.saved_thalis as SavedThali[]);
        if (data.settings && typeof data.settings === 'object') setSettings(prev => ({ ...prev, ...(data.settings as Partial<UserPreferences>) }));
      } else {
        await supabase.from('user_profiles').upsert({
          user_id: user.id,
          display_name: user.user_metadata?.full_name ?? null,
          email: user.email ?? null,
          favorites, recently_viewed: recentlyViewed, shopping_list: shoppingList,
          meal_plan: mealPlan, saved_thalis: savedThalis, settings
        });
      }
      setCloudReady(true);
    };
    void loadProfile();
    return () => { cancelled = true; };
  }, [user.id]);

  useEffect(() => {
    if (!cloudReady) return;
    const timer = window.setTimeout(() => {
      void supabase.from('user_profiles').upsert({
        user_id: user.id,
        display_name: user.user_metadata?.full_name ?? null,
        email: user.email ?? null,
        favorites,
        recently_viewed: recentlyViewed,
        shopping_list: shoppingList,
        meal_plan: mealPlan,
        saved_thalis: savedThalis,
        settings,
        updated_at: new Date().toISOString(),
      });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [cloudReady, user.id, favorites, recentlyViewed, shoppingList, mealPlan, savedThalis, settings]);

  const showToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(prev => prev === msg ? null : prev), 3000); };
  const toggleFavorite = (dishId: string) => { const exists = favorites.includes(dishId); const next = exists ? favorites.filter(id => id !== dishId) : [...favorites, dishId]; storageService.saveFavorites(next); setFavorites(next); showToast(exists ? 'Removed from Favorites' : '❤️ Added to Favorites'); };
  const isFavorite = (dishId: string) => favorites.includes(dishId);
  const viewDish = (dish: Dish) => { storageService.addRecentlyViewed(dish.id); setRecentlyViewed(storageService.getRecentlyViewed().filter(id => catalogDishes.some(d => d.id === id))); setSelectedDish(dish); };
  const clearRecentlyViewed = () => { storageService.clearRecentlyViewed(); setRecentlyViewed([]); showToast('Recently viewed cleared'); };
  const addToShoppingList = (dish: Dish, servingsScale = 1) => { storageService.addIngredientsToShoppingList(dish, servingsScale); setShoppingList(storageService.getShoppingList()); showToast(`🛒 Added ingredients for ${dish.name} to Shopping List`); };
  const addCustomShoppingItem = (name: string, quantity: number, unit: string) => { const current = [...shoppingList, { id: `shop-${Date.now()}`, name, quantity, unit, purchased: false, category: 'Custom Items' }]; storageService.saveShoppingList(current); setShoppingList(current); showToast(`Added "${name}" to Shopping List`); };
  const toggleShoppingItem = (id: string) => { const current = shoppingList.map(item => item.id === id ? { ...item, purchased: !item.purchased } : item); storageService.saveShoppingList(current); setShoppingList(current); };
  const deleteShoppingItem = (id: string) => { const current = shoppingList.filter(item => item.id !== id); storageService.saveShoppingList(current); setShoppingList(current); };
  const clearPurchasedShoppingItems = () => { const current = shoppingList.filter(item => !item.purchased); storageService.saveShoppingList(current); setShoppingList(current); showToast('Cleared purchased items'); };
  const clearAllShoppingItems = () => { storageService.saveShoppingList([]); setShoppingList([]); showToast('Shopping list emptied'); };
  const setMealPlan = (plan: WeeklyMealPlan) => { storageService.saveMealPlan(plan); setMealPlanState(plan); };
  const updateMealPlanSlot = (day: keyof WeeklyMealPlan, slot: 'breakfast' | 'lunch' | 'dinner', dishId: string | undefined) => { const updated = { ...mealPlan, [day]: { ...mealPlan[day], [slot]: dishId } }; setMealPlan(updated); showToast(`Updated ${day.toUpperCase()} ${slot}`); };
  const generateShoppingListFromMealPlan = () => { const ids: string[] = []; Object.values(mealPlan).forEach(day => { if (day.breakfast) ids.push(day.breakfast); if (day.lunch) ids.push(day.lunch); if (day.dinner) ids.push(day.dinner); }); const unique = Array.from(new Set(ids)); unique.forEach(id => { const found = catalogDishes.find(d => d.id === id); if (found) storageService.addIngredientsToShoppingList(found, 1); }); setShoppingList(storageService.getShoppingList()); showToast(`🛒 Generated shopping list for ${unique.length} planned meals!`); };
  const saveThali = (name: string, items: any) => { const current = [...savedThalis]; current.unshift({ id: `thali-${Date.now()}`, name, items, createdAt: Date.now() }); storageService.saveSavedThalis(current); setSavedThalis(current); showToast(`Thali "${name}" saved!`); };
  const deleteThali = (id: string) => { const current = savedThalis.filter(t => t.id !== id); storageService.saveSavedThalis(current); setSavedThalis(current); showToast('Thali removed'); };
  const updateSettings = (newSettings: Partial<UserPreferences>) => { const updated = { ...settings, ...newSettings }; storageService.saveSettings(updated); setSettings(updated); };
  const updateProfile = (newProfile: Partial<UserProfile>) => {
    const updatedProfile: UserProfile = { ...profile, ...newProfile, socialLinks: { ...profile.socialLinks, ...(newProfile.socialLinks ?? {}) } };
    updateSettings({ profile: updatedProfile });
    showToast('Profile saved successfully');
  };
  const resetFilters = () => setFilters(defaultFilters);
  const setQuickSearch = (query: string) => { setFilters(prev => ({ ...prev, searchQuery: query })); setActivePage('explore'); };
  const setQuickFilter = (key: keyof FilterState, value: any) => { setFilters(prev => ({ ...prev, [key]: value })); setActivePage('explore'); };

  return <AppContext.Provider value={{ activePage, setActivePage, selectedDish, setSelectedDish, cookingDish, setCookingDish, isApkModalOpen, setIsApkModalOpen, isSurpriseModalOpen, setIsSurpriseModalOpen, dishes: catalogDishes, favorites, toggleFavorite, isFavorite, recentlyViewed, viewDish, clearRecentlyViewed, shoppingList, addToShoppingList, addCustomShoppingItem, toggleShoppingItem, deleteShoppingItem, clearPurchasedShoppingItems, clearAllShoppingItems, mealPlan, setMealPlan, updateMealPlanSlot, generateShoppingListFromMealPlan, savedThalis, saveThali, deleteThali, settings, updateSettings, profile, updateProfile, filters, setFilters, resetFilters, setQuickSearch, setQuickFilter, toastMessage, showToast }}>{children}</AppContext.Provider>;
};
export const useApp = () => { const context = useContext(AppContext); if (!context) throw new Error('useApp must be used within AppProvider'); return context; };

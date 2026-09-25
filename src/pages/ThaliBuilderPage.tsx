import React, { useMemo, useState } from 'react';
import { 
  CircleDot, 
  Sparkles, 
  ShoppingCart, 
  Bookmark, 
  Share2, 
  RotateCcw, 
  Check, 
  ChefHat, 
  Plus, 
  X,
  Scale
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ThaliSlotKey, ThaliSelection, Dish } from '../types';

export const ThaliBuilderPage: React.FC = () => {
  const { 
    dishes, 
    viewDish, 
    addToShoppingList, 
    saveThali, 
    savedThalis, 
    settings, 
    showToast 
  } = useApp();

  const isHindi = settings.language === 'hi';

  const [currentThali, setCurrentThali] = useState<ThaliSelection>({
    dal: 'rajma-masala',
    sabzi: 'bhindi-masala',
    rice: 'lemon-rice',
    roti: 'methi-thepla',
    salad: 'kachumber-salad',
    chutney: 'mint-coriander-chutney',
    sweet: 'makhana-kheer',
    drink: 'masala-chaas'
  });

  const [thaliName, setThaliName] = useState('My Custom Indian Thali');
  const [activeSlotModal, setActiveSlotModal] = useState<ThaliSlotKey | null>(null);
  const [slotSearch, setSlotSearch] = useState('');

  const slotLabels: Record<ThaliSlotKey, { en: string; hi: string; icon: string; defaultCat: string }> = {
    dal: { en: 'Dal / Curry', hi: 'दाल / कढ़ी', icon: '🥣', defaultCat: 'Dal & Soups' },
    sabzi: { en: 'Sabzi / Veg', hi: 'सब्जी', icon: '🥬', defaultCat: 'Main Course' },
    rice: { en: 'Rice / Pulao', hi: 'चावल / पुलाव', icon: '🍚', defaultCat: 'Rotis & Grains' },
    roti: { en: 'Roti / Bread', hi: 'रोटी / ब्रेड', icon: '🫓', defaultCat: 'Rotis & Grains' },
    salad: { en: 'Salad / Raita', hi: 'सलाद / रायता', icon: '🥗', defaultCat: 'Drinks & Raita' },
    chutney: { en: 'Chutney / Farsan', hi: 'चटनी / फरसाण', icon: '🥟', defaultCat: 'Snacks & Chaat' },
    sweet: { en: 'Mithai / Sweet', hi: 'मिठाई', icon: '🍨', defaultCat: 'Healthy Desserts' },
    drink: { en: 'Beverage / Chaas', hi: 'पेय / छाछ', icon: '🥛', defaultCat: 'Drinks & Raita' }
  };

  const getDish = (dishId: string | undefined): Dish | undefined => {
    return dishId ? dishes.find(d => d.id === dishId) : undefined;
  };

  // Prefer explicit thali slot metadata so every picker stays precise; keep a safe fallback for older recipes.
  const getDishesForSlot = (slot: ThaliSlotKey): Dish[] => {
    const explicit = dishes.filter(d => d.thaliSlots?.includes(slot));
    const fallback = dishes.filter((d) => {
      const text = `${d.id} ${d.name} ${d.nameHindi}`.toLowerCase();
      const categories = d.category.map(c => c.toLowerCase());
      const hasCategory = (name: string) => categories.includes(name.toLowerCase());
      switch (slot) {
        case 'dal': return hasCategory('Dal & Soups') || /\\bdal\\b|curry|sambar|rasam|kadhi/.test(text);
        case 'sabzi': return (hasCategory('Main Course') || hasCategory('Vegetables') || hasCategory('Curries')) && !/biryani|rice|pulao|khichdi|kulcha|roti|naan|paratha|dal|soup/.test(text);
        case 'rice': return /rice|pulao|khichdi|biryani/.test(text) || hasCategory('Rice & Grains');
        case 'roti': return /roti|paratha|thepla|bhakri|kulcha|naan|phulka|chapati|dosa/.test(text) || hasCategory('Breads') || hasCategory('Rotis & Grains');
        case 'salad': return /raita|salad|kachumber/.test(text) || hasCategory('Salads') || hasCategory('Raita');
        case 'chutney': return /chutney|achar|pickle|papad/.test(text) || hasCategory('Chutneys') || hasCategory('Sauces & Dips');
        case 'sweet': return hasCategory('Healthy Desserts') || hasCategory('Sweets') || /sweet|halwa|kheer|ladoo|rasgulla|gulab jamun|barfi|peda/.test(text);
        case 'drink': return (hasCategory('Drinks & Raita') || hasCategory('Beverages')) && !/raita|salad/.test(text);
        default: return false;
      }
    });
    const byId = new Map<string, Dish>();
    [...explicit, ...fallback].forEach(d => byId.set(d.id, d));
    return [...byId.values()];
  };

  const filteredSlotDishes = useMemo(() => {
    if (!activeSlotModal) return [];
    const query = slotSearch.trim().toLowerCase();
    const list = getDishesForSlot(activeSlotModal);
    if (!query) return list;
    return list.filter(d =>
      `${d.name} ${d.nameHindi} ${d.state} ${d.region} ${d.cuisine.join(' ')}`.toLowerCase().includes(query)
    );
  }, [activeSlotModal, slotSearch, dishes]);


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
    chutney: { en: 'Chutney / Pickle', hi: 'चटनी / अचार', icon: '🥣', defaultCat: 'Chutneys' },
    sweet: { en: 'Mithai / Sweet', hi: 'मिठाई', icon: '🍨', defaultCat: 'Healthy Desserts' },
    drink: { en: 'Beverage / Chaas', hi: 'पेय / छाछ', icon: '🥛', defaultCat: 'Drinks & Raita' }
  };

  const getDish = (dishId: string | undefined): Dish | undefined => {
    return dishId ? dishes.find(d => d.id === dishId) : undefined;
  };

  // Prefer explicit thali slot metadata so every picker stays precise; keep a safe fallback for older recipes.
  const getDishesForSlot = (slot: ThaliSlotKey): Dish[] => {
    const indianRegions = new Set(['North India','South India','West India','East India','Northeast India','Central India','Pan India']);
    const isIndianDish = (d: Dish) => d.country === 'India' || indianRegions.has(d.region as string) || d.cuisine.some(c => /indian/i.test(c));
    const explicit = dishes.filter(d => isIndianDish(d) && d.thaliSlots?.includes(slot));
    const fallback = dishes.filter((d) => {
      if (!isIndianDish(d)) return false;
      const text = `${d.id} ${d.name} ${d.nameHindi}`.toLowerCase();
      const categories = d.category.map(c => c.toLowerCase());
      const hasCategory = (name: string) => categories.includes(name.toLowerCase());
      switch (slot) {
        case 'dal': return hasCategory('Dal & Soups') || /\bdal\b|curry|sambar|rasam|kadhi/.test(text);
        case 'sabzi': return (hasCategory('Main Course') || hasCategory('Vegetables') || hasCategory('Curries')) && !/biryani|rice|pulao|khichdi|kulcha|roti|naan|paratha|dal|soup|bhature|chole bhature/.test(text);
        case 'rice': return /rice|pulao|khichdi|biryani/.test(text) || hasCategory('Rice & Grains');
        case 'roti': return /roti|paratha|thepla|bhakri|kulcha|naan|phulka|chapati/.test(text) || hasCategory('Breads') || hasCategory('Rotis & Grains');
        case 'salad': return /raita|salad|kachumber/.test(text) || hasCategory('Salads') || hasCategory('Raita');
        case 'chutney': return /chutney|achar|pickle/.test(text) || hasCategory('Chutneys') || hasCategory('Pickles');
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


  const handleSelectDishForSlot = (dishId: string) => {
    if (activeSlotModal) {
      setCurrentThali(prev => ({
        ...prev,
        [activeSlotModal]: dishId
      }));
      setActiveSlotModal(null);
      showToast('Thali updated!');
    }
  };

  const handleAddAllToShopping = () => {
    let count = 0;
    Object.values(currentThali).forEach(dishId => {
      const d = getDish(dishId);
      if (d) {
        addToShoppingList(d, 1);
        count++;
      }
    });
    showToast(`🛒 Added all items from ${count} dishes to Shopping List!`);
  };

  const handleSaveThali = () => {
    if (!thaliName.trim()) return;
    saveThali(thaliName.trim(), currentThali);
  };

  // Preset quick configurations
  const applyPreset = (preset: ThaliSelection, name: string) => {
    setCurrentThali(preset);
    setThaliName(name);
    showToast(`Applied preset: ${name}`);
  };

  // Total Calories of current Thali
  const totalCalories = Object.values(currentThali).reduce((acc, dishId) => {
    const d = getDish(dishId);
    return acc + (d ? d.nutrition.calories : 0);
  }, 0);

  const totalProtein = Object.values(currentThali).reduce((acc, dishId) => {
    const d = getDish(dishId);
    return acc + (d ? d.nutrition.protein : 0);
  }, 0);

  return (
    <div className="min-h-screen py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8620C]/10 text-[#E8620C] text-xs font-bold mb-2">
            <CircleDot className="w-3.5 h-3.5" />
            <span>{isHindi ? 'थाली बिल्डर' : 'Interactive Platter'}</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 dark:text-stone-100">
            {isHindi ? 'अपनी मनपसंद थाली बनाएं' : 'Build Your Bharat Thali'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
            {isHindi 
              ? 'कटोरियों पर क्लिक करें और दाल, सब्जी, रोटी, चावल और मिठाई चुनकर अपनी थाली सजाएं।'
              : 'Customize each bowl with authentic regional dishes, calculate combined nutrition, and export to shopping.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleAddAllToShopping}
            className="px-4 py-2.5 rounded-xl border border-[#E8620C]/40 text-[#E8620C] dark:text-[#F4813F] hover:bg-[#E8620C]/10 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{isHindi ? 'सामग्री लिस्ट बनाएं' : 'Add to Shopping'}</span>
          </button>

          <button
            onClick={handleSaveThali}
            className="px-4 py-2.5 rounded-xl bg-[#E8620C] text-white hover:bg-orange-600 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-colors"
          >
            <Bookmark className="w-4 h-4" />
            <span>{isHindi ? 'थाली सेव करें' : 'Save Thali'}</span>
          </button>
        </div>
      </div>

      {/* Preset Thali Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
        <span className="text-xs font-semibold text-stone-400 whitespace-nowrap">Presets:</span>
        <button
          onClick={() => applyPreset({
            dal: 'rajma-masala',
            sabzi: 'bhindi-masala',
            rice: 'lemon-rice',
            roti: 'amritsari-kulcha',
            salad: 'kachumber-salad',
            chutney: 'mint-coriander-chutney',
            sweet: 'makhana-kheer',
            drink: 'masala-chaas'
          }, 'Punjabi Royal Feast')}
          className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:border-[#E8620C] border border-transparent text-stone-800 dark:text-stone-200 text-xs font-semibold whitespace-nowrap"
        >
          🍛 Punjabi Royal Feast
        </button>

        <button
          onClick={() => applyPreset({
            dal: 'dal-tadka',
            sabzi: 'gujarati-undhiyu',
            rice: 'moong-dal-khichdi',
            roti: 'methi-thepla',
            salad: 'kachumber-salad',
            chutney: 'mint-coriander-chutney',
            sweet: 'healthy-gajar-halwa',
            drink: 'masala-chaas'
          }, 'Gujarati Winter Thali')}
          className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:border-[#E8620C] border border-transparent text-stone-800 dark:text-stone-200 text-xs font-semibold whitespace-nowrap"
        >
          🫓 Gujarati Winter Thali
        </button>

        <button
          onClick={() => applyPreset({
            dal: 'south-indian-sambar',
            sabzi: 'kerala-avial',
            rice: 'curd-rice',
            roti: 'amritsari-kulcha',
            salad: 'kachumber-salad',
            chutney: 'mint-coriander-chutney',
            sweet: 'ven-pongal',
            drink: 'masala-chaas'
          }, 'South Indian Sadya Thali')}
          className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:border-[#E8620C] border border-transparent text-stone-800 dark:text-stone-200 text-xs font-semibold whitespace-nowrap"
        >
          🍃 South Indian Sadya Thali
        </button>
      </div>

      {/* Main Visual Platter & Customizer Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        
        {/* Left: The Circular Thali Platter Visual */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 dark:from-[#251D16] dark:via-[#1E1712] dark:to-[#251D16] border border-stone-200/80 dark:border-stone-800 shadow-inner">
          
          {/* Circular Metallic Platter Border */}
          <div className="relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] rounded-full border-[12px] sm:border-[16px] border-amber-600/40 bg-gradient-to-br from-amber-100/60 via-amber-50/40 to-amber-200/50 dark:from-stone-900 dark:via-stone-950 dark:to-stone-900 shadow-2xl flex items-center justify-center p-4">
            
            {/* Central Platter Plate: Rotis / Rice */}
            <div className="w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] rounded-full bg-white dark:bg-stone-800 border-4 border-amber-500/40 shadow-md flex flex-col items-center justify-center p-2 text-center group cursor-pointer hover:scale-105 transition-transform"
              onClick={() => { setSlotSearch(''); setActiveSlotModal('roti'); }}
            >
              <span className="text-xl sm:text-2xl">🫓</span>
              <p className="text-[10px] sm:text-xs font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
                {getDish(currentThali.roti)?.name || 'Choose Roti'}
              </p>
              <span className="text-[9px] text-[#E8620C] font-semibold">Center Platter</span>
            </div>

            {/* Surrounding 7 Katoris (Bowls) */}
            {(['dal', 'sabzi', 'rice', 'salad', 'chutney', 'sweet', 'drink'] as ThaliSlotKey[]).map((slotKey, idx) => {
              const dish = getDish(currentThali[slotKey]);
              const meta = slotLabels[slotKey];
              // Calculate angles around circle (7 items)
              const angle = (idx * (360 / 7) - 90) * (Math.PI / 180);
              const radius = 105; // mobile radius
              const radiusSm = 160; // sm radius

              return (
                <div
                  key={slotKey}
                  onClick={() => { setSlotSearch(''); setActiveSlotModal(slotKey); }}
                  className="absolute w-[68px] h-[68px] sm:w-[94px] sm:h-[94px] rounded-full bg-white dark:bg-stone-800 border-2 sm:border-3 border-amber-500/50 shadow-lg flex flex-col items-center justify-center p-1 text-center cursor-pointer hover:scale-110 hover:border-[#E8620C] transition-all group overflow-hidden"
                  style={{
                    transform: `translate(${Math.cos(angle) * radiusSm}px, ${Math.sin(angle) * radiusSm}px)`
                  }}
                >
                  <span className="text-sm sm:text-lg">{meta.icon}</span>
                  <p className="text-[9px] sm:text-[11px] font-bold text-stone-900 dark:text-stone-100 line-clamp-1 px-1">
                    {dish ? dish.name : meta.en}
                  </p>
                  <span className="text-[8px] text-[#E8620C] font-semibold hidden sm:block">
                    {meta.hi}
                  </span>
                </div>
              );
            })}

          </div>

          {/* Platter Nutrition Bar */}
          <div className="mt-8 flex items-center gap-6 bg-white dark:bg-stone-900 px-6 py-3 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm text-center">
            <div>
              <p className="text-[11px] text-stone-400 font-semibold">Combined Energy</p>
              <p className="text-base font-extrabold text-[#E8620C]">{totalCalories} kcal</p>
            </div>
            <div className="w-px h-8 bg-stone-200 dark:bg-stone-800" />
            <div>
              <p className="text-[11px] text-stone-400 font-semibold">Total Protein</p>
              <p className="text-base font-extrabold text-emerald-600">{totalProtein.toFixed(1)}g</p>
            </div>
            <div className="w-px h-8 bg-stone-200 dark:bg-stone-800" />
            <div>
              <p className="text-[11px] text-stone-400 font-semibold">Total Bowls</p>
              <p className="text-base font-extrabold text-stone-800 dark:text-stone-200">8 Items</p>
            </div>
          </div>

        </div>

        {/* Right: Platter Items List & Swapper */}
        <div className="lg:col-span-5 bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 rounded-3xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100">
              {isHindi ? 'थाली की 8 कटोरियां (Bowls)' : 'Thali Contents'}
            </h3>
            <button
              onClick={() => {
                setCurrentThali({
                  dal: undefined,
                  sabzi: undefined,
                  rice: undefined,
                  roti: undefined,
                  salad: undefined,
                  chutney: undefined,
                  sweet: undefined,
                  drink: undefined
                });
                showToast('Cleared all bowls');
              }}
              className="text-xs text-stone-400 hover:text-red-500 font-semibold"
            >
              Clear All
            </button>
          </div>

          <div className="space-y-2.5">
            {(Object.keys(slotLabels) as ThaliSlotKey[]).map((slotKey) => {
              const dish = getDish(currentThali[slotKey]);
              const meta = slotLabels[slotKey];
              return (
                <div
                  key={slotKey}
                  onClick={() => { setSlotSearch(''); setActiveSlotModal(slotKey); }}
                  className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 hover:border-[#E8620C] cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{meta.icon}</span>
                    <div>
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                        {meta.en} ({meta.hi})
                      </span>
                      <p className="font-heading font-bold text-sm text-stone-900 dark:text-stone-100">
                        {dish ? dish.name : (isHindi ? 'व्यंजन चुनें' : 'Choose dish')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {dish && (
                      <span className="text-xs font-semibold text-[#E8620C]">
                        {dish.nutrition.calories} kcal
                      </span>
                    )}
                    <span className="p-1 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 text-xs">
                      Swap ▾
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Dish Picker Slot Modal */}
      {activeSlotModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#FFFDF9] dark:bg-[#1E1712] rounded-3xl max-w-xl w-full p-6 max-h-[85vh] flex flex-col border border-stone-200 dark:border-stone-800 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 mb-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-stone-100">
                  Select {slotLabels[activeSlotModal].en}
                </h3>
                <p className="text-xs text-[#E8620C] font-semibold">
                  {slotLabels[activeSlotModal].hi}
                </p>
              </div>
              <button
                onClick={() => setActiveSlotModal(null)}
                className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-3">
              <input
                value={slotSearch}
                onChange={(e) => setSlotSearch(e.target.value)}
                placeholder={isHindi ? 'व्यंजन, क्षेत्र या राज्य खोजें…' : 'Search dish, region or state…'}
                className="w-full rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-3 text-sm text-stone-900 dark:text-stone-100 outline-none focus:border-[#E8620C]"
              />
              <p className="mt-2 text-[11px] font-semibold text-stone-400">{filteredSlotDishes.length} options</p>
            </div>
            <div className="overflow-y-auto space-y-2 flex-1 pr-1">
              {filteredSlotDishes.map((d) => (
                <div
                  key={d.id}
                  onClick={() => handleSelectDishForSlot(d.id)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-[#E8620C] cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img src={d.image} alt={d.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-stone-100">
                        {d.name}
                      </h4>
                      <p className="text-xs text-stone-500">
                        {d.nameHindi} • {d.totalTimeMinutes}m • {d.nutrition.calories} kcal
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#E8620C] bg-orange-50 dark:bg-orange-950/40 px-3 py-1.5 rounded-xl border border-orange-200 dark:border-orange-900">
                    Select
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

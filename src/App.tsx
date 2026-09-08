import React, { useState, useMemo, useEffect } from 'react';
import { Dish, Category, HealthTag, Region } from './types';
import { allDishes } from './data/dishes';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { DishCard } from './components/DishCard';
import { DishDetailModal } from './components/DishDetailModal';
import { InstallModal } from './components/InstallModal';
import { RandomDishPickerModal } from './components/RandomDishPickerModal';
import { 
  Sparkles, Download, Heart, Smartphone, Utensils, 
  HelpCircle, ShieldCheck, Flame, BookOpen, AlertCircle
} from 'lucide-react';
import { usePWAInstall } from './hooks/usePWAInstall';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedHealthGoal, setSelectedHealthGoal] = useState<HealthTag | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'calories-low' | 'protein-high' | 'quickest'>('popular');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  // Local storage for Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('swasthya_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [isRandomPickerOpen, setIsRandomPickerOpen] = useState(false);

  const { isInstallable, isInstalled } = usePWAInstall();

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('swasthya_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filtered & Sorted Dishes
  const filteredDishes = useMemo(() => {
    return allDishes.filter((dish) => {
      // Favorites filter
      if (showFavoritesOnly && !favorites.includes(dish.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && dish.category !== selectedCategory) {
        return false;
      }

      // Region filter
      if (selectedRegion !== 'All' && dish.region !== selectedRegion) {
        return false;
      }

      // Health Goal filter
      if (selectedHealthGoal && !dish.healthTags.includes(selectedHealthGoal)) {
        return false;
      }

      // Search Query filter (matches Hindi name, English name, ingredients, benefits, suitableFor)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = dish.name.toLowerCase().includes(query) || dish.hindiName.toLowerCase().includes(query);
        const matchesTagline = dish.tagline.toLowerCase().includes(query);
        const matchesIngredients = dish.ingredients.some(ing => ing.item.toLowerCase().includes(query));
        const matchesFayde = dish.fayde.some(f => f.title.toLowerCase().includes(query) || f.description.toLowerCase().includes(query));
        const matchesNuksan = dish.nuksan.some(n => n.title.toLowerCase().includes(query) || n.description.toLowerCase().includes(query));
        const matchesSuitable = dish.suitableFor.some(s => s.toLowerCase().includes(query));

        if (!matchesName && !matchesTagline && !matchesIngredients && !matchesFayde && !matchesNuksan && !matchesSuitable) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'calories-low') return a.calories - b.calories;
      if (sortBy === 'protein-high') return b.macros.proteinGrams - a.macros.proteinGrams;
      if (sortBy === 'quickest') return a.cookTimeMinutes - b.cookTimeMinutes;
      return 0; // Default popular ordering
    });
  }, [searchQuery, selectedCategory, selectedHealthGoal, selectedRegion, sortBy, showFavoritesOnly, favorites]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedHealthGoal(null);
    setSelectedRegion('All');
    setSortBy('popular');
    setShowFavoritesOnly(false);
  };

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-900 dark:bg-stone-950 dark:text-stone-100 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        favoritesCount={favorites.length}
        showFavoritesOnly={showFavoritesOnly}
        onToggleFavoritesOnly={() => setShowFavoritesOnly(!showFavoritesOnly)}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
      />

      {/* Quick Mobile Banner for APK / App Install Alert */}
      {!isInstalled && (
        <aside 
          aria-label="App installation announcement"
          className="bg-linear-to-r from-emerald-600 to-teal-700 px-4 py-2.5 text-white shadow-xs"
        >
          <div className="mx-auto max-w-6xl flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 shrink-0" />
              <span>
                <strong>बिना PC के फोन में APK चाहिए?</strong> सीधे मोबाइल ब्राउज़र से 1-क्लिक में इंस्टॉल करें!
              </span>
            </div>
            <button
              id="top-banner-install-btn"
              onClick={() => setIsInstallModalOpen(true)}
              className="shrink-0 rounded-lg bg-white/20 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-white/30 backdrop-blur transition"
            >
              तरीका देखें ➜
            </button>
          </div>
        </aside>
      )}

      {/* Filter and Category Bar */}
      <FilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedHealthGoal={selectedHealthGoal}
        onSelectHealthGoal={setSelectedHealthGoal}
        selectedRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onResetFilters={handleResetFilters}
        totalFilteredCount={filteredDishes.length}
      />

      {/* Main Content Area */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        {/* Floating Action / Today's Meal Decider Ribbon */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-white p-4 border border-stone-200 shadow-xs dark:bg-stone-900 dark:border-stone-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
              <Utensils className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-stone-900 dark:text-white">
                55+ संपूर्ण भारतीय व्यंजन गाइड
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                हर व्यंजन के साथ उसके अचूक फायदे, संभावित नुकसान, सही समय और सटीक पोषण विवरण।
              </p>
            </div>
          </div>

          <button
            id="decide-meal-today-btn"
            onClick={() => setIsRandomPickerOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-amber-500 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-amber-600 active:scale-95 transition"
          >
            <Sparkles className="h-4 w-4" />
            <span>आज क्या बनाएं? (Meal Decider)</span>
          </button>
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onSelect={(d) => setSelectedDish(d)}
                isFavorite={favorites.includes(dish.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="my-12 rounded-3xl border border-dashed border-stone-300 bg-white p-12 text-center dark:border-stone-800 dark:bg-stone-900">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-stone-400 dark:bg-stone-800">
              <AlertCircle className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-stone-800 dark:text-stone-200">
              कोई व्यंजन नहीं मिला
            </h3>
            <p className="mt-1 text-xs text-stone-500 max-w-sm mx-auto">
              "{searchQuery}" के लिए कोई परिणाम नहीं मिला। कृपया अलग नाम खोजें या फ़िल्टर रीसेट करें।
            </p>
            <button
              id="empty-state-reset-btn"
              onClick={handleResetFilters}
              className="mt-5 rounded-xl bg-stone-900 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900"
            >
              सभी 55+ व्यंजन देखें
            </button>
          </div>
        )}
      </main>

      {/* Footer with Nutrition Principles & APK Guide summary */}
      <footer className="mt-auto border-t border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
          <div className="grid gap-6 sm:grid-cols-3 text-xs text-stone-600 dark:text-stone-400">
            <div className="space-y-1.5">
              <h4 className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-white text-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                शुद्ध भारतीय स्वास्थ्य दर्शन
              </h4>
              <p className="leading-relaxed">
                यह ऐप केवल स्वाद ही नहीं बल्कि आयुर्वेद और आधुनिक न्यूट्रिशन के अनुसार हर डिश के फायदे और नुकसान स्पष्ट बताता है।
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-white text-sm">
                <Smartphone className="h-4 w-4 text-emerald-600" />
                बिना PC के मोबाइल APK
              </h4>
              <p className="leading-relaxed">
                PWA (WebAPK) सपोर्ट से युक्त। आप इसे सीधे अपने एंड्रॉइड या आईफोन पर 'Add to Home Screen' करके बिना प्ले स्टोर या पीसी के ऐप की तरह चला सकते हैं।
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-white text-sm">
                <Flame className="h-4 w-4 text-rose-500" />
                स्वास्थ्य के 3 स्वर्णिम नियम
              </h4>
              <p className="leading-relaxed">
                1. रिफाइंड तेल व चीनी से बचें।<br />
                2. मौसमी व स्थानीय अनाज चुनें।<br />
                3. भोजन हमेशा भूख का 80% ही करें।
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100 pt-6 text-[11px] text-stone-400 dark:border-stone-800">
            <span>© 50+ Healthy Indian Dishes (SwasthyaPak) • 100% Offline Capable</span>
            <button
              onClick={() => setIsInstallModalOpen(true)}
              className="text-emerald-600 hover:underline font-semibold"
            >
              फोन में इंस्टॉल करने की विधि ➜
            </button>
          </div>
        </div>
      </footer>

      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        isFavorite={selectedDish ? favorites.includes(selectedDish.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* APK / PWA Install Guide Modal */}
      <InstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />

      {/* Random Meal Decider Modal */}
      <RandomDishPickerModal
        isOpen={isRandomPickerOpen}
        onClose={() => setIsRandomPickerOpen(false)}
        onSelectDish={(d) => setSelectedDish(d)}
      />
    </div>
  );
}

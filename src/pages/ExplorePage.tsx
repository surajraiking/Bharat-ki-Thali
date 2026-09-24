import React, { useEffect, useMemo, useState } from 'react';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  Clock, 
  Flame, 
  Utensils, 
  MapPin, 
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';
import { MealType, DietType, DifficultyType, SortOption } from '../types';

export const ExplorePage: React.FC = () => {
  const { dishes, filters, setFilters, resetFilters, settings } = useApp();
  const isHindi = settings.language === 'hi';
  const [searchInput, setSearchInput] = useState(filters.searchQuery);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (searchInput !== filters.searchQuery) setFilters(prev => ({ ...prev, searchQuery: searchInput }));
    }, 250);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    setSearchInput(filters.searchQuery);
  }, [filters.searchQuery]);

  const mealOptions: (MealType | 'All')[] = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];
  const dietOptions: (DietType | 'All')[] = ['All', 'Vegetarian', 'Vegan', 'Jain', 'Non-Veg'];
  const difficultyOptions: (DifficultyType | 'All')[] = ['All', 'Easy', 'Medium', 'Hard'];
  const timeOptions: (number | 'All')[] = ['All', 15, 30, 60];
  const regionOptions = ['All', 'North India', 'South India', 'West India', 'East India', 'Northeast India'];
  const healthOptions = ['All', 'High Protein', 'Weight Loss', 'Diabetic Friendly', 'Gut Friendly', 'Less Oil'];
  const stateOptions = useMemo(() => ['All', ...Array.from(new Set(dishes.map(d => d.state).filter(Boolean))).sort()], [dishes]);
  const festivalOptions = useMemo(() => ['All', ...Array.from(new Set(dishes.flatMap(d => d.festival || []))).sort()], [dishes]);
  const categoryOptions = useMemo(() => ['All', ...Array.from(new Set(dishes.flatMap(d => d.category || []))).sort()], [dishes]);

  // Filtered & Sorted Dishes
  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      // Query check (name, Hindi name, ingredients, state, tags)
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchesName = dish.name.toLowerCase().includes(q) || dish.nameHindi.toLowerCase().includes(q);
        const matchesState = dish.state.toLowerCase().includes(q) || dish.region.toLowerCase().includes(q);
        const matchesIngredient = dish.ingredients.some(i => i.name.toLowerCase().includes(q));
        const matchesTag = dish.tags.some(t => t.toLowerCase().includes(q));
        const matchesCuisine = dish.cuisine.some(c => c.toLowerCase().includes(q));
        if (!matchesName && !matchesState && !matchesIngredient && !matchesTag && !matchesCuisine) {
          return false;
        }
      }

      // Meal type check
      if (filters.mealType !== 'All' && !dish.mealTypes.includes(filters.mealType as MealType)) {
        return false;
      }

      // Diet check
      if (filters.diet !== 'All' && !dish.diet.includes(filters.diet as DietType)) {
        return false;
      }

      // Difficulty
      if (filters.difficulty !== 'All' && dish.difficulty !== filters.difficulty) {
        return false;
      }

      // Time check
      if (filters.maxTime !== 'All' && dish.totalTimeMinutes > (filters.maxTime as number)) {
        return false;
      }

      // Region check
      if (filters.region !== 'All' && dish.region !== filters.region) {
        return false;
      }

      // State check
      if (filters.state !== 'All' && dish.state !== filters.state) {
        return false;
      }

      // Health tag check
      if (filters.healthTag !== 'All' && !dish.tags.includes(filters.healthTag)) {
        return false;
      }

      // Festival check
      if (filters.festival !== 'All' && !dish.festival.includes(filters.festival)) {
        return false;
      }

      // Category check
      if (filters.category !== 'All' && !dish.category.includes(filters.category)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'popular') return b.popularity - a.popularity;
      if (filters.sortBy === 'quickest') return a.totalTimeMinutes - b.totalTimeMinutes;
      if (filters.sortBy === 'caloriesLow') return a.nutrition.calories - b.nutrition.calories;
      if (filters.sortBy === 'proteinHigh') return b.nutrition.protein - a.nutrition.protein;
      return 0; // relevance
    });
  }, [dishes, filters]);

  return (
    <div className="min-h-screen py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Title & Search Header */}
      <div className="mb-6">
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 dark:text-stone-100">
          {isHindi ? 'रेसिपी खोजें (Explore Recipes)' : 'Explore All Recipes'}
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
          {isHindi 
            ? 'अपनी पसंद, समय, सामग्री और स्वास्थ्य लक्ष्यों के अनुसार व्यंजन ढूंढें।'
            : 'Find the perfect dish based on dietary choices, cooking time, ingredients and health goals.'}
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="relative flex items-center bg-white dark:bg-[#251D16] border border-stone-200 dark:border-stone-800 rounded-2xl shadow-sm overflow-hidden focus-within:border-[#E8620C]">
          <Search className="w-5 h-5 text-stone-400 ml-4 shrink-0" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={isHindi ? 'डिश का नाम, सामग्री (जैसे: पनीर, टमाटर), या राज्य लिखें...' : 'Search by dish name, ingredient (e.g. Paneer, Chana), or state...'}
            className="w-full py-3.5 px-3 text-sm bg-transparent text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none"
          />
          {filters.searchQuery && (
            <button
              onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
              className="mr-3 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 font-semibold"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Filter Control Panels */}
      <div className="bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 rounded-3xl p-4 sm:p-6 mb-8 shadow-xs">
        
        <div className="flex items-center justify-between mb-4 border-b border-stone-100 dark:border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#E8620C]" />
            <h3 className="font-heading font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
              {isHindi ? 'फिल्टर एवं सॉर्ट' : 'Filters & Sorting'}
            </h3>
          </div>

          <button
            onClick={resetFilters}
            className="text-xs font-semibold text-[#E8620C] hover:underline flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isHindi ? 'रीसेट करें' : 'Reset All'}</span>
          </button>
        </div>

        {/* Meal Type Pills */}
        <div className="mb-4">
          <p className="text-xs font-bold text-stone-500 dark:text-stone-400 mb-2 uppercase tracking-wider">
            {isHindi ? 'समय (Meal Time)' : 'Meal Time'}
          </p>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {mealOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilters(prev => ({ ...prev, mealType: opt }))}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  filters.mealType === opt
                    ? 'bg-[#E8620C] text-white shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Diet & Region Filter Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {/* Diet Preference */}
          <div>
            <label className="text-xs font-bold text-stone-500 dark:text-stone-400 mb-1.5 block uppercase tracking-wider">
              {isHindi ? 'खान-पान (Diet)' : 'Dietary Type'}
            </label>
            <select
              value={filters.diet}
              onChange={(e) => setFilters(prev => ({ ...prev, diet: e.target.value as any }))}
              className="w-full py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold border-none focus:ring-1 focus:ring-[#E8620C]"
            >
              {dietOptions.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Region */}
          <div>
            <label className="text-xs font-bold text-stone-500 dark:text-stone-400 mb-1.5 block uppercase tracking-wider">
              {isHindi ? 'क्षेत्र (Region)' : 'Region'}
            </label>
            <select
              value={filters.region}
              onChange={(e) => setFilters(prev => ({ ...prev, region: e.target.value }))}
              className="w-full py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold border-none focus:ring-1 focus:ring-[#E8620C]"
            >
              {regionOptions.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="text-xs font-bold text-stone-500 dark:text-stone-400 mb-1.5 block uppercase tracking-wider">
              {isHindi ? 'क्रमबद्ध करें (Sort)' : 'Sort By'}
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as SortOption }))}
              className="w-full py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold border-none focus:ring-1 focus:ring-[#E8620C]"
            >
              <option value="relevance">Relevance (प्रासंगिकता)</option>
              <option value="popular">Most Popular (लोकप्रिय)</option>
              <option value="quickest">Quickest (कम समय)</option>
              <option value="caloriesLow">Lowest Calories (कम कैलोरी)</option>
              <option value="proteinHigh">Highest Protein (ज्यादा प्रोटीन)</option>
            </select>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div><label className="text-xs font-bold text-stone-500 dark:text-stone-400 mb-1.5 block uppercase tracking-wider">State</label><select value={filters.state} onChange={e => setFilters(prev => ({...prev,state:e.target.value}))} className="w-full py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs font-semibold">{stateOptions.map(x => <option key={x}>{x}</option>)}</select></div>
          <div><label className="text-xs font-bold text-stone-500 dark:text-stone-400 mb-1.5 block uppercase tracking-wider">Difficulty</label><select value={filters.difficulty} onChange={e => setFilters(prev => ({...prev,difficulty:e.target.value as DifficultyType}))} className="w-full py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs font-semibold">{difficultyOptions.map(x => <option key={x}>{x}</option>)}</select></div>
          <div><label className="text-xs font-bold text-stone-500 dark:text-stone-400 mb-1.5 block uppercase tracking-wider">Festival</label><select value={filters.festival} onChange={e => setFilters(prev => ({...prev,festival:e.target.value}))} className="w-full py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs font-semibold">{festivalOptions.map(x => <option key={x}>{x}</option>)}</select></div>
          <div><label className="text-xs font-bold text-stone-500 dark:text-stone-400 mb-1.5 block uppercase tracking-wider">Category</label><select value={filters.category} onChange={e => setFilters(prev => ({...prev,category:e.target.value}))} className="w-full py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs font-semibold">{categoryOptions.map(x => <option key={x}>{x}</option>)}</select></div>
        </div>

        {/* Health Tags Quick Row */}
        <div>
          <p className="text-xs font-bold text-stone-500 dark:text-stone-400 mb-2 uppercase tracking-wider">
            {isHindi ? 'स्वास्थ्य लक्ष्य (Health Tags)' : 'Health Goals'}
          </p>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {healthOptions.map((h) => (
              <button
                key={h}
                onClick={() => setFilters(prev => ({ ...prev, healthTag: h }))}
                className={`px-3 py-1 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  filters.healthTag === h
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200'
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Results Count Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs sm:text-sm font-semibold text-stone-600 dark:text-stone-400">
          Showing <span className="text-[#E8620C] font-extrabold">{filteredDishes.length}</span> recipes
        </p>
      </div>

      {/* Dishes Grid */}
      {filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredDishes.map((dish) => (
            <RecipeCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white dark:bg-[#251D16] rounded-3xl border border-stone-200/80 dark:border-stone-800">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center text-3xl mb-4">
            🍽️
          </div>
          <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-stone-100">
            {isHindi ? 'कोई व्यंजन नहीं मिला' : 'No recipes found'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-sm mx-auto">
            {isHindi 
              ? 'कृपया अपने फिल्टर बदलें या सर्च शब्द साफ करें।'
              : 'Try clearing some filters or searching for ingredients like Potato, Rice, or Paneer.'}
          </p>
          <button
            onClick={resetFilters}
            className="mt-4 px-4 py-2 bg-[#E8620C] text-white rounded-xl text-xs font-bold"
          >
            {isHindi ? 'सभी फिल्टर हटाएं' : 'Reset Filters'}
          </button>
        </div>
      )}

    </div>
  );
};

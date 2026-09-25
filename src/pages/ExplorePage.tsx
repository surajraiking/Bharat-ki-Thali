import React, { useMemo } from 'react';
import { Search, RotateCcw, SlidersHorizontal, Globe2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';
import { MealType, DietType, DifficultyType, SortOption } from '../types';

export const ExplorePage: React.FC = () => {
  const { dishes, filters, setFilters, resetFilters, settings } = useApp();
  const isHindi = settings.language === 'hi';
  const mealOptions: (MealType|'All')[] = ['All','Breakfast','Lunch','Dinner','Snack','Dessert'];
  const dietOptions: (DietType|'All')[] = ['All','Vegetarian','Vegan','Jain','Non-Veg'];
  const difficultyOptions: (DifficultyType|'All')[] = ['All','Easy','Medium','Hard'];
  const regionOptions = ['All','North India','South India','West India','East India','Northeast India','Asia','Europe','Africa','North America','South America','Oceania','Middle East'];
  const categoryOptions = ['All', ...Array.from(new Set(dishes.flatMap(d => d.category))).sort()];
  const countryOptions = ['All', ...Array.from(new Set(dishes.map(d => d.country || d.state))).sort()];
  const filteredDishes = useMemo(() => dishes.filter(dish => {
    const q = filters.searchQuery.trim().toLowerCase();
    if (q && ![dish.name,dish.nameHindi,dish.state,dish.region,dish.country || '',...dish.cuisine,...dish.category,...dish.tags,...dish.ingredients.map(i=>i.name)].some(v => v.toLowerCase().includes(q))) return false;
    if (filters.mealType !== 'All' && !dish.mealTypes.includes(filters.mealType as MealType)) return false;
    if (filters.diet !== 'All' && !dish.diet.includes(filters.diet as DietType)) return false;
    if (filters.difficulty !== 'All' && dish.difficulty !== filters.difficulty) return false;
    if (filters.maxTime !== 'All' && dish.totalTimeMinutes > filters.maxTime) return false;
    if (filters.region !== 'All' && dish.region !== filters.region) return false;
    if (filters.state !== 'All' && !(dish.country || dish.state).toLowerCase().includes(filters.state.toLowerCase())) return false;
    if (filters.healthTag !== 'All' && !dish.tags.includes(filters.healthTag)) return false;
    if (filters.festival !== 'All' && !dish.festival.includes(filters.festival)) return false;
    if (filters.category !== 'All' && !dish.category.includes(filters.category)) return false;
    return true;
  }).sort((a,b) => filters.sortBy==='popular' ? b.popularity-a.popularity : filters.sortBy==='quickest' ? a.totalTimeMinutes-b.totalTimeMinutes : filters.sortBy==='caloriesLow' ? a.nutrition.calories-b.nutrition.calories : filters.sortBy==='proteinHigh' ? b.nutrition.protein-a.nutrition.protein : 0), [dishes,filters]);

  return <div className="min-h-screen py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
    <div className="mb-6"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs font-bold mb-2"><Globe2 className="w-3.5 h-3.5"/> Global Food Explorer</div><h1 className="font-heading font-extrabold text-2xl sm:text-4xl">{isHindi?'दुनिया के व्यंजन खोजें':'Explore World Foods'}</h1><p className="text-xs sm:text-sm text-stone-500 mt-1">{isHindi?'देश, क्षेत्र, cuisine और category के अनुसार food खोजें।':'Discover Indian and international foods by country, region, cuisine and category.'}</p></div>
    <div className="relative mb-5"><div className="flex items-center bg-white dark:bg-[#251D16] border border-stone-200 dark:border-stone-800 rounded-2xl shadow-sm overflow-hidden"><Search className="w-5 h-5 text-stone-400 ml-4"/><input value={filters.searchQuery} onChange={e=>setFilters(p=>({...p,searchQuery:e.target.value}))} placeholder={isHindi?'Pizza, Sushi, Paneer, Mexico...':'Search food, ingredient, country, cuisine...'} className="w-full py-3.5 px-3 bg-transparent focus:outline-none"/>{filters.searchQuery&&<button onClick={()=>setFilters(p=>({...p,searchQuery:''}))} className="mr-3 text-xs font-bold text-orange-600">Clear</button>}</div></div>
    <div className="bg-white dark:bg-[#251D16] border border-stone-200 dark:border-stone-800 rounded-3xl p-4 sm:p-6 mb-7 shadow-sm">
      <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-2 font-bold"><SlidersHorizontal className="w-4 h-4 text-orange-600"/>Filters</div><button onClick={resetFilters} className="text-xs font-bold text-orange-600 flex items-center gap-1"><RotateCcw className="w-3.5 h-3.5"/>Reset</button></div>
      <div className="mb-4 flex gap-2 overflow-x-auto no-scrollbar">{mealOptions.map(x=><button key={x} onClick={()=>setFilters(p=>({...p,mealType:x}))} className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${filters.mealType===x?'bg-orange-600 text-white':'bg-stone-100 dark:bg-stone-800'}`}>{x}</button>)}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <select value={filters.diet} onChange={e=>setFilters(p=>({...p,diet:e.target.value as any}))} className="py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs font-semibold"><option value="All">All Diets</option>{dietOptions.slice(1).map(x=><option key={x}>{x}</option>)}</select>
        <select value={filters.region} onChange={e=>setFilters(p=>({...p,region:e.target.value}))} className="py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs font-semibold">{regionOptions.map(x=><option key={x}>{x}</option>)}</select>
        <select value={filters.category} onChange={e=>setFilters(p=>({...p,category:e.target.value}))} className="py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs font-semibold">{categoryOptions.map(x=><option key={x}>{x}</option>)}</select>
        <select value={filters.sortBy} onChange={e=>setFilters(p=>({...p,sortBy:e.target.value as SortOption}))} className="py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs font-semibold"><option value="relevance">Relevance</option><option value="popular">Most Popular</option><option value="quickest">Quickest</option><option value="caloriesLow">Lowest Calories</option><option value="proteinHigh">Highest Protein</option></select>
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar"><select value={filters.difficulty} onChange={e=>setFilters(p=>({...p,difficulty:e.target.value as any}))} className="py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs"><option value="All">All Difficulty</option>{difficultyOptions.slice(1).map(x=><option key={x}>{x}</option>)}</select><select value={filters.state} onChange={e=>setFilters(p=>({...p,state:e.target.value}))} className="py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs"><option value="All">All Countries / States</option>{countryOptions.slice(1).map(x=><option key={x}>{x}</option>)}</select></div>
    </div>
    <div className="flex items-center justify-between mb-5"><p className="text-sm font-semibold text-stone-600 dark:text-stone-400">Showing <b className="text-orange-600">{filteredDishes.length}</b> recipes</p></div>
    {filteredDishes.length ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">{filteredDishes.map(d=><RecipeCard key={d.id} dish={d}/>)}</div> : <div className="text-center py-16 bg-white dark:bg-[#251D16] rounded-3xl border"><div className="text-4xl mb-3">🍽️</div><h3 className="font-bold">No recipes found</h3><button onClick={resetFilters} className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-xl text-xs font-bold">Reset Filters</button></div>}
  </div>;
};

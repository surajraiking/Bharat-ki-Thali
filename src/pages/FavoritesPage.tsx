import React, { useMemo, useState } from 'react';
import { Heart, Plus, Trash2, FolderHeart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';

export const FavoritesPage: React.FC = () => {
  const { favorites, dishes, setActivePage, settings, collections, createCollection, deleteCollection, toggleDishInCollection } = useApp();
  const [filterTag, setFilterTag] = useState<string>('All');

  const isHindi = settings.language === 'hi';

  const favoriteDishes = dishes.filter(d => favorites.includes(d.id));
  const [newCollection, setNewCollection] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const collectionDishes = useMemo(() => {
    const collection = collections.find(c => c.id === selectedCollection);
    return collection ? dishes.filter(d => collection.dishIds.includes(d.id)) : [];
  }, [collections, selectedCollection, dishes]);

  const filtered = favoriteDishes.filter(d => {
    if (filterTag === 'All') return true;
    if (filterTag === 'Vegetarian') return d.diet.includes('Vegetarian');
    if (filterTag === 'Breakfast') return d.mealTypes.includes('Breakfast');
    if (filterTag === 'Quick') return d.totalTimeMinutes <= 25;
    return true;
  });

  return (
    <div className="min-h-screen py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 text-xs font-bold mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>{isHindi ? 'सहेजे गए व्यंजन' : 'Saved Recipes'}</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 dark:text-stone-100">
            {isHindi ? 'आपके पसंदीदा व्यंजन' : 'Your Favorites'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
            {favoriteDishes.length} {isHindi ? 'व्यंजन सेव किए गए हैं' : 'recipes bookmarked for easy access'}
          </p>
        </div>

        {/* Quick Collections Filter */}
        {favoriteDishes.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {['All', 'Breakfast', 'Vegetarian', 'Quick'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterTag(tab)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filterTag === tab
                    ? 'bg-[#E8620C] text-white shadow-xs'
                    : 'bg-white dark:bg-[#251D16] text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>


      {/* Collections */}
      <section className="mb-10">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="font-heading font-extrabold text-xl text-stone-900 dark:text-stone-100 flex items-center gap-2"><FolderHeart className="w-5 h-5 text-rose-500" /> Collections</h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Create your own recipe folders and keep favorites organized.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); createCollection(newCollection); setNewCollection(''); }} className="flex gap-2">
            <input value={newCollection} onChange={e => setNewCollection(e.target.value)} placeholder="New collection" className="w-36 sm:w-48 px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#251D16] text-xs focus:outline-none focus:ring-2 focus:ring-[#E8620C]/30" />
            <button type="submit" className="px-3 py-2 rounded-xl bg-[#E8620C] text-white text-xs font-bold flex items-center gap-1"><Plus className="w-3.5 h-3.5" /> Add</button>
          </form>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {collections.map(collection => (
            <div key={collection.id} className="min-w-44 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#251D16] p-3">
              <button onClick={() => setSelectedCollection(collection.id)} className="text-left w-full">
                <p className="font-bold text-sm text-stone-900 dark:text-stone-100 truncate">{collection.name}</p>
                <p className="text-[11px] text-stone-500 mt-1">{collection.dishIds.length} recipes</p>
              </button>
              <div className="flex justify-end mt-2"><button onClick={() => deleteCollection(collection.id)} aria-label="Delete collection" className="text-stone-400 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button></div>
            </div>
          ))}
        </div>
        {selectedCollection && (
          <div className="mt-4 p-4 rounded-2xl bg-stone-50 dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800">
            <div className="flex justify-between mb-3"><h3 className="font-bold text-sm">Collection recipes</h3><button onClick={() => setSelectedCollection(null)} className="text-xs text-[#E8620C]">Close</button></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{collectionDishes.map(d => <RecipeCard key={d.id} dish={d} />)}</div>
            {collectionDishes.length === 0 && <p className="text-xs text-stone-500">Open a recipe and add it to this collection.</p>}
          </div>
        )}
        {collections.length > 0 && favoriteDishes.length > 0 && <p className="text-[11px] text-stone-500 mt-3">Tip: collection membership can be managed from recipe details.</p>}
      </section>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((dish) => (
            <RecipeCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 px-4 bg-white dark:bg-[#251D16] rounded-3xl border border-stone-200/80 dark:border-stone-800">
          <div className="w-16 h-16 mx-auto rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center text-3xl mb-4">
            ❤️
          </div>
          <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-stone-100">
            {isHindi ? 'अभी कोई पसंदीदा व्यंजन नहीं है' : 'No favorites saved yet'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-sm mx-auto mb-6">
            {isHindi 
              ? 'व्यंजनों के कार्ड पर बने दिल (Heart) के आइकन पर क्लिक करके अपने पसंदीदा व्यंजन यहाँ सहेजें।'
              : 'Tap the heart icon on any recipe to save it here for quick offline access.'}
          </p>
          <button
            onClick={() => setActivePage('explore')}
            className="px-6 py-3 bg-[#E8620C] text-white rounded-2xl font-bold text-xs sm:text-sm hover:bg-orange-600 transition-colors shadow-sm"
          >
            {isHindi ? 'रेसिपीज़ खोजें' : 'Explore Recipes'}
          </button>
        </div>
      )}

    </div>
  );
};

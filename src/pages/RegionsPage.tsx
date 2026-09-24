import React, { useState } from 'react';
import { MapPin, ChefHat, Sparkles, ArrowRight, Utensils } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { indianStatesData } from '../data/states';
import { RecipeCard } from '../components/RecipeCard';

export const RegionsPage: React.FC = () => {
  const { dishes, setQuickFilter, viewDish, settings } = useApp();
  const [selectedStateId, setSelectedStateId] = useState<string>('punjab');

  const isHindi = settings.language === 'hi';
  const currentState = indianStatesData.find(s => s.id === selectedStateId) || indianStatesData[0];

  // State dishes from catalog
  const stateDishes = dishes.filter(d => 
    d.state.toLowerCase() === currentState.name.toLowerCase() ||
    (currentState.id === 'northeast' && d.region === 'Northeast India')
  );

  return (
    <div className="min-h-screen py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8620C]/10 text-[#E8620C] text-xs font-bold mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>{isHindi ? 'भारत का खान-पान मानचित्र' : 'Culinary Map of India'}</span>
        </div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 dark:text-stone-100">
          {isHindi ? 'क्षेत्रीय भारत की रसोई (Regional India)' : 'Regional India Kitchens'}
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
          {isHindi 
            ? 'पंजाब के ढाबों से लेकर केरल के नारियल के बागानों तक, हर राज्य का असली स्वाद।'
            : 'Explore the culinary philosophy, spice traditions, and signature dishes of Indias iconic food regions.'}
        </p>
      </div>

      {/* States Horizontal Carousel Selector */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
        {indianStatesData.map((st) => {
          const isSelected = st.id === selectedStateId;
          return (
            <button
              key={st.id}
              onClick={() => setSelectedStateId(st.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#E8620C] text-white shadow-md shadow-[#E8620C]/25 scale-105'
                  : 'bg-white dark:bg-[#251D16] text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-800 hover:border-[#E8620C]'
              }`}
            >
              <span>{st.name}</span>
              <span className={`text-[10px] ${isSelected ? 'text-amber-200' : 'text-stone-400'}`}>
                ({st.nameHindi})
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected State Spotlight Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white shadow-xl mb-12 border border-stone-800">
        <div className="relative aspect-[16/7] sm:aspect-[21/8] w-full overflow-hidden">
          <img 
            src={currentState.image} 
            alt={currentState.name} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8620C] text-white">
              {currentState.region}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-xs">
              Capital: {currentState.capital}
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            {currentState.name} ({currentState.nameHindi})
          </h2>

          <p className="text-xs sm:text-sm text-stone-200 mt-2 max-w-3xl leading-relaxed">
            {isHindi ? currentState.cuisineDescriptionHindi : currentState.cuisineDescription}
          </p>

          {/* Festival foods tag */}
          <div className="mt-4 flex items-center gap-2 flex-wrap text-xs">
            <span className="text-amber-300 font-semibold">{isHindi ? 'त्योहारी भोजन:' : 'Festival Specials:'}</span>
            {currentState.festivalFoods.map(f => (
              <span key={f} className="px-2 py-0.5 rounded-lg bg-white/15 backdrop-blur-xs text-stone-200">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* State Signature Recipes from Catalog */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-heading font-bold text-lg sm:text-2xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-[#E8620C]" />
              <span>{currentState.name} — {isHindi ? 'प्रसिद्ध रेसिपीज़' : 'Signature Recipes'}</span>
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              {stateDishes.length} authentic dishes available to cook right now
            </p>
          </div>

          <button
            onClick={() => setQuickFilter('state', currentState.name)}
            className="text-xs font-bold text-[#E8620C] hover:underline flex items-center gap-1"
          >
            <span>{isHindi ? 'खोज में फ़िल्टर करें' : 'Filter in Explore'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {stateDishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateDishes.map((dish) => (
              <RecipeCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-white dark:bg-[#251D16] rounded-2xl border border-stone-200 dark:border-stone-800">
            <p className="text-sm text-stone-500">More dishes coming soon for this region.</p>
          </div>
        )}
      </div>

      {/* Regional Collections Showcase */}
      {currentState.regionalCollections.length > 0 && (
        <div className="mb-12">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 mb-4">
            {isHindi ? 'पारंपरिक पाक संग्रह (Regional Collections)' : 'Special Curated Collections'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentState.regionalCollections.map((col, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20"
              >
                <h4 className="font-heading font-bold text-base text-stone-900 dark:text-stone-100 mb-1">
                  {col.title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 mb-3 leading-relaxed">
                  {col.description}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {col.dishes.map(dId => {
                    const dishObj = dishes.find(d => d.id === dId);
                    if (!dishObj) return null;
                    return (
                      <button
                        key={dId}
                        onClick={() => viewDish(dishObj)}
                        className="px-2.5 py-1 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold hover:text-[#E8620C] border border-stone-200 dark:border-stone-700 shadow-xs"
                      >
                        {dishObj.name} →
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

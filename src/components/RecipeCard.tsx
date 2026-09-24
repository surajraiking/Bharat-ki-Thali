import React from 'react';
import { Clock, Flame, Heart, Sparkles, Plus, ChefHat } from 'lucide-react';
import { Dish } from '../types';
import { useApp } from '../context/AppContext';

interface RecipeCardProps {
  dish: Dish;
  showAddShopping?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ dish, showAddShopping = true }) => {
  const { viewDish, toggleFavorite, isFavorite, addToShoppingList, settings } = useApp();
  const isHindi = settings.language === 'hi';
  const favorited = isFavorite(dish.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(dish.id);
  };

  const handleShoppingClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToShoppingList(dish, 1);
  };

  return (
    <div 
      onClick={() => viewDish(dish)}
      className="group bg-white dark:bg-[#251D16] rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800 hover:border-[#E8620C]/40 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Image Container with Badges */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
          <img 
            src={dish.image} 
            alt={dish.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // fallback image if unsplash fails
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Region / State Tag */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-white/90 dark:bg-[#1C140E]/90 text-[#24180E] dark:text-[#FFFDF9] backdrop-blur-sm shadow-xs">
              {dish.state || dish.region}
            </span>
            {dish.diet.includes('Non-Veg') ? (
              <span className="w-4 h-4 rounded-xs border border-red-500 bg-white flex items-center justify-center" title="Non-Veg">
                <span className="w-2 h-2 rounded-full bg-red-600" />
              </span>
            ) : (
              <span className="w-4 h-4 rounded-xs border border-emerald-600 bg-white flex items-center justify-center" title="Vegetarian">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all ${
              favorited 
                ? 'bg-rose-500 text-white shadow-md' 
                : 'bg-black/30 text-white hover:bg-black/50'
            }`}
            title="Save to Favorites"
          >
            <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
          </button>

          {/* Emoji & Category floating chip */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs font-semibold">
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-lg">
              <span>{dish.emoji || '🍛'}</span>
              <span className="text-[11px]">{dish.category[0]}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-lg">
              <Clock className="w-3 h-3 text-amber-300" />
              <span>{dish.totalTimeMinutes}m</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-3.5 sm:p-4">
          <div className="flex items-baseline justify-between gap-1 mb-1">
            <h3 className="font-heading font-bold text-base sm:text-lg text-[#24180E] dark:text-[#FDF8F3] line-clamp-1 group-hover:text-[#E8620C] transition-colors">
              {dish.name}
            </h3>
          </div>

          <p className="font-heading font-medium text-xs text-[#E8620C] mb-2 line-clamp-1">
            {dish.nameHindi}
          </p>

          <p className="text-xs text-[#7B6E65] dark:text-[#A8988C] line-clamp-2 leading-relaxed mb-3">
            {isHindi && dish.descriptionHindi ? dish.descriptionHindi : dish.description}
          </p>

          {/* Nutrition pills */}
          <div className="flex items-center gap-2 text-[11px] font-medium text-stone-600 dark:text-stone-300 mb-3 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/60">
              <Flame className="w-3 h-3 text-amber-600" />
              {dish.nutrition.calories} kcal
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/60">
              💪 {dish.nutrition.protein}g protein
            </span>
          </div>
        </div>
      </div>

      {/* Card Action footer */}
      <div className="px-3.5 pb-3.5 pt-0 flex items-center justify-between border-t border-stone-100 dark:border-stone-800/80 mt-1">
        <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 capitalize">
          {dish.difficulty} • {dish.spiceLevel}
        </span>
        <div className="flex items-center gap-1">
          {showAddShopping && (
            <button
              onClick={handleShoppingClick}
              className="p-1.5 rounded-lg text-stone-500 hover:text-[#E8620C] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              title="Add ingredients to shopping list"
            >
              <Plus className="w-4 h-4" />
            </button>
          )}
          <span className="text-xs font-bold text-[#E8620C] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
            <span>{isHindi ? 'रेसिपी' : 'View'}</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Clock, Flame, Heart, Plus } from 'lucide-react';
import { Dish } from '../types';
import { useApp } from '../context/AppContext';

interface RecipeCardProps { dish: Dish; showAddShopping?: boolean; }

export const RecipeCard: React.FC<RecipeCardProps> = ({ dish, showAddShopping = true }) => {
  const { viewDish, toggleFavorite, isFavorite, addToShoppingList, settings } = useApp();
  const isHindi = settings.language === 'hi';
  const favorited = isFavorite(dish.id);

  const handleFavoriteClick = (e: React.MouseEvent) => { e.stopPropagation(); toggleFavorite(dish.id); };
  const handleShoppingClick = (e: React.MouseEvent) => { e.stopPropagation(); addToShoppingList(dish, 1); };

  return (
    <article
      onClick={() => viewDish(dish)}
      className="group relative bg-white dark:bg-[#251D16] rounded-3xl overflow-hidden border border-stone-200/80 dark:border-stone-800 shadow-[0_8px_25px_rgba(65,42,20,0.10)] hover:shadow-[0_22px_45px_rgba(65,42,20,0.22)] hover:-translate-y-2 hover:[transform:perspective(1000px)_rotateX(2deg)_translateY(-8px)] active:scale-[0.985] transition-all duration-500 cursor-pointer flex flex-col justify-between [transform-style:preserve-3d]"
    >
      <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-amber-300 via-orange-500 to-rose-500 opacity-70 group-hover:opacity-100 transition-opacity" />
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 dark:bg-stone-800 [transform:translateZ(8px)]">
          <img src={dish.image} alt={dish.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-[0.5deg] transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/25" />
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 dark:bg-[#1C140E]/90 text-[#24180E] dark:text-[#FFFDF9] backdrop-blur-md shadow-lg">{dish.state || dish.region}</span>
              <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-black/45 text-white backdrop-blur-md">{dish.emoji || '🍛'}</span>
            </div>
            <button onClick={handleFavoriteClick} className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg ${favorited ? 'bg-rose-500 text-white scale-110' : 'bg-black/35 text-white hover:bg-black/55 hover:scale-110'}`} title="Save to Favorites">
              <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
            </button>
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
            <div className="flex items-center gap-1 bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-lg"><span>{dish.category[0]}</span></div>
            <div className="flex items-center gap-1 text-[11px] bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-lg"><Clock className="w-3 h-3 text-amber-300" /><span>{dish.totalTimeMinutes}m</span></div>
          </div>
        </div>
        <div className="p-4 [transform:translateZ(5px)]">
          <h3 className="font-heading font-bold text-base sm:text-lg text-[#24180E] dark:text-[#FDF8F3] line-clamp-1 group-hover:text-[#E8620C] transition-colors">{dish.name}</h3>
          <p className="font-heading font-bold text-xs text-[#E8620C] mt-1 mb-2 line-clamp-1">{dish.nameHindi}</p>
          <p className="text-xs text-[#7B6E65] dark:text-[#A8988C] line-clamp-2 leading-relaxed mb-3">{isHindi && dish.descriptionHindi ? dish.descriptionHindi : dish.description}</p>
          <div className="flex items-center gap-2 text-[11px] font-medium mb-1 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/60"><Flame className="w-3 h-3" />{dish.nutrition.calories} kcal</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60">💪 {dish.nutrition.protein}g</span>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-stone-100 dark:border-stone-800/80 [transform:translateZ(6px)]">
        <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">{dish.difficulty} • {dish.spiceLevel}</span>
        <div className="flex items-center gap-2">
          {showAddShopping && <button onClick={handleShoppingClick} className="p-2 rounded-xl text-stone-500 hover:text-[#E8620C] hover:bg-orange-50 dark:hover:bg-stone-800 transition-all hover:scale-110" title="Add ingredients to shopping list"><Plus className="w-4 h-4" /></button>}
          <span className="text-xs font-bold text-[#E8620C] group-hover:translate-x-1 transition-transform flex items-center gap-1"><span>{isHindi ? 'रेसिपी खोलें' : 'Open Recipe'}</span><span>→</span></span>
        </div>
      </div>
    </article>
  );
};

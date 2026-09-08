import React from 'react';
import { Heart, Flame, Scale, Clock, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
  onSelect: (dish: Dish) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const DishCard: React.FC<DishCardProps> = ({
  dish,
  onSelect,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div 
      id={`dish-card-${dish.id}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-4.5 shadow-xs transition-all hover:border-emerald-500 hover:shadow-md dark:border-stone-800 dark:bg-stone-850"
    >
      <div>
        {/* Top bar: Category + Favorite button */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
              {dish.category}
            </span>
            <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] text-stone-600 dark:bg-stone-800 dark:text-stone-300">
              {dish.region}
            </span>
          </div>

          <button
            id={`fav-btn-${dish.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(dish.id);
            }}
            aria-label={`Favorite ${dish.name}`}
            className={`rounded-full p-1.5 transition ${
              isFavorite 
                ? 'text-rose-500 bg-rose-50 dark:bg-rose-950/30' 
                : 'text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800'
            }`}
          >
            <Heart className="h-4 w-4 fill-current" />
          </button>
        </div>

        {/* Dish Title & Emoji Icon */}
        <div 
          onClick={() => onSelect(dish)}
          className="mt-3 flex items-start gap-3 cursor-pointer"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-100 text-2xl shadow-2xs group-hover:scale-105 transition dark:bg-stone-800">
            {dish.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="truncate text-lg font-bold text-stone-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 transition">
              {dish.hindiName}
            </h3>
            <p className="truncate text-xs font-medium text-stone-500 dark:text-stone-400">
              {dish.name}
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-2.5 text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
          {dish.tagline}
        </p>

        {/* Nutritional Badges */}
        <div className="mt-3 flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1 font-semibold text-stone-700 dark:text-stone-300 bg-stone-50 px-2 py-1 rounded-lg border border-stone-100 dark:bg-stone-800 dark:border-stone-750">
            <Flame className="h-3.5 w-3.5 text-rose-500" />
            {dish.calories} kcal
          </span>
          <span className="flex items-center gap-1 font-semibold text-stone-700 dark:text-stone-300 bg-stone-50 px-2 py-1 rounded-lg border border-stone-100 dark:bg-stone-800 dark:border-stone-750">
            <Scale className="h-3.5 w-3.5 text-blue-500" />
            {dish.macros.proteinGrams}g Protein
          </span>
          <span className="flex items-center gap-1 text-stone-500 ml-auto">
            <Clock className="h-3 w-3" />
            {dish.cookTimeMinutes}m
          </span>
        </div>

        {/* Primary Benefit (Fayda) snippet */}
        {dish.fayde[0] && (
          <div className="mt-3 flex items-start gap-1.5 text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-50/70 dark:bg-emerald-950/30 p-2 rounded-xl">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
            <span className="truncate">
              <strong>फायदा:</strong> {dish.fayde[0].title}
            </span>
          </div>
        )}

        {/* Primary Caution (Nuksan) snippet */}
        {dish.nuksan[0] && (
          <div className="mt-1.5 flex items-start gap-1.5 text-xs text-amber-900 dark:text-amber-300 bg-amber-50/70 dark:bg-amber-950/30 p-2 rounded-xl">
            <ShieldAlert className="h-3.5 w-3.5 shrink-0 text-amber-600 mt-0.5" />
            <span className="truncate">
              <strong>सावधानी:</strong> {dish.nuksan[0].title}
            </span>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
        <button
          id={`view-details-${dish.id}`}
          onClick={() => onSelect(dish)}
          className="flex w-full items-center justify-between rounded-xl bg-stone-50 px-3 py-2 text-xs font-semibold text-stone-800 hover:bg-emerald-600 hover:text-white dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-emerald-600 dark:hover:text-white transition group/btn"
        >
          <span>पूरी रेसिपी व फायदे देखें</span>
          <ArrowRight className="h-3.5 w-3.5 transform group-hover/btn:translate-x-1 transition" />
        </button>
      </div>
    </div>
  );
};

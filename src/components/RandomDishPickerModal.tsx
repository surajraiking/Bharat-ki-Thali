import React, { useState } from 'react';
import { Sparkles, Dices, X, ArrowRight } from 'lucide-react';
import { Dish } from '../types';
import { allDishes } from '../data/dishes';

interface RandomDishPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDish: (dish: Dish) => void;
}

export const RandomDishPickerModal: React.FC<RandomDishPickerModalProps> = ({
  isOpen,
  onClose,
  onSelectDish,
}) => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  if (!isOpen) return null;

  const pickRandom = () => {
    setIsRolling(true);
    let count = 0;
    const interval = setInterval(() => {
      const random = allDishes[Math.floor(Math.random() * allDishes.length)];
      setSelectedDish(random);
      count++;
      if (count > 10) {
        clearInterval(interval);
        setIsRolling(false);
      }
    }, 80);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fadeIn">
      <div 
        id="random-picker-modal"
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-center"
      >
        <button
          id="close-random-modal-btn"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 mb-3">
          <Dices className="h-7 w-7" />
        </div>

        <h3 className="text-xl font-bold text-stone-900 dark:text-white">
          आज क्या बनाएं? (Meal Decider)
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          कंफ्यूज हैं? पासा फेंकें और 55+ हेल्दी डिशेज में से एक परफेक्ट डिश पाएं!
        </p>

        {selectedDish ? (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
            <span className="text-4xl block mb-2">{selectedDish.emoji}</span>
            <h4 className="text-lg font-bold text-stone-900 dark:text-white">
              {selectedDish.hindiName}
            </h4>
            <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              {selectedDish.name}
            </p>
            <p className="mt-2 text-xs text-stone-600 dark:text-stone-300 italic">
              "{selectedDish.tagline}"
            </p>
            <div className="mt-3 flex justify-center gap-3 text-xs font-medium text-stone-700 dark:text-stone-300">
              <span>🔥 {selectedDish.calories} kcal</span>
              <span>💪 {selectedDish.macros.proteinGrams}g Protein</span>
              <span>⏱️ {selectedDish.cookTimeMinutes}m Cook</span>
            </div>

            <button
              id="view-random-dish-btn"
              onClick={() => {
                onSelectDish(selectedDish);
                onClose();
              }}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 shadow-md transition"
            >
              <span>इसकी रेसिपी व फायदे देखें</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="my-8 rounded-xl border border-dashed border-stone-300 py-8 text-stone-400 dark:border-stone-700 text-xs">
            नीचे बटन दबाएं और आज का हेल्दी भोजन चुनें
          </div>
        )}

        <div className="mt-4">
          <button
            id="roll-random-dish-btn"
            disabled={isRolling}
            onClick={pickRandom}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-sm font-bold text-white hover:bg-amber-600 active:scale-98 transition shadow-lg shadow-amber-500/20 disabled:opacity-50"
          >
            <Sparkles className="h-4 w-4" />
            {isRolling ? 'चुन रहे हैं...' : 'पासा फेंकें (Roll Again)'}
          </button>
        </div>
      </div>
    </div>
  );
};

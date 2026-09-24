import React, { useState } from 'react';
import { X, Dices, Sparkles, Clock, Flame, ChefHat } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Dish } from '../types';

export const SurpriseMeModal: React.FC = () => {
  const { 
    isSurpriseModalOpen, 
    setIsSurpriseModalOpen, 
    dishes, 
    viewDish, 
    settings 
  } = useApp();

  const [pickedDish, setPickedDish] = useState<Dish | null>(() => {
    return dishes[Math.floor(Math.random() * dishes.length)];
  });
  const [isSpinning, setIsSpinning] = useState(false);

  if (!isSurpriseModalOpen) return null;

  const isHindi = settings.language === 'hi';

  const rollDice = () => {
    setIsSpinning(true);
    let counter = 0;
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * dishes.length);
      setPickedDish(dishes[randomIdx]);
      counter++;
      if (counter > 12) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 100);
  };

  const handleOpenDish = () => {
    if (pickedDish) {
      setIsSurpriseModalOpen(false);
      viewDish(pickedDish);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#FFFDF9] dark:bg-[#1E1712] rounded-3xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsSurpriseModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/15 text-[#E8620C] flex items-center justify-center mb-3">
          <Dices className={`w-6 h-6 ${isSpinning ? 'animate-spin' : ''}`} />
        </div>

        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
          {isHindi ? 'आज क्या खाएं? (Surprise Pick)' : 'What should I eat?'}
        </h2>
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 mb-5">
          {isHindi ? 'कंफ्यूज हैं? पहिया घुमाएं और आज का स्पेशल स्वाद चुनें!' : 'Cant decide? Let the kitchen wheel choose your dish!'}
        </p>

        {pickedDish && (
          <div className="mb-6 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/80">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-3">
              <img 
                src={pickedDish.image} 
                alt={pickedDish.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/60 text-white backdrop-blur-xs">
                {pickedDish.state || pickedDish.region}
              </div>
            </div>

            <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-stone-100">
              {pickedDish.name}
            </h3>
            <p className="font-heading font-medium text-xs text-[#E8620C] mb-2">
              {pickedDish.nameHindi}
            </p>

            <div className="flex items-center justify-center gap-4 text-xs text-stone-600 dark:text-stone-300">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#E8620C]" />
                {pickedDish.totalTimeMinutes} mins
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                {pickedDish.nutrition.calories} kcal
              </span>
              <span>•</span>
              <span className="capitalize">{pickedDish.difficulty}</span>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={rollDice}
            disabled={isSpinning}
            className="flex-1 py-3 px-4 rounded-xl border border-stone-300 dark:border-stone-700 font-semibold text-xs sm:text-sm text-stone-800 dark:text-stone-200 hover:border-[#E8620C] flex items-center justify-center gap-2 transition-colors"
          >
            <Dices className="w-4 h-4" />
            <span>{isHindi ? 'फिर से घुमाएं' : 'Spin Again'}</span>
          </button>

          <button
            onClick={handleOpenDish}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#E8620C] to-[#F4B400] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#E8620C]/30 hover:opacity-95 flex items-center justify-center gap-2 transition-all"
          >
            <ChefHat className="w-4 h-4" />
            <span>{isHindi ? 'रेसिपी देखें' : 'View Recipe'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

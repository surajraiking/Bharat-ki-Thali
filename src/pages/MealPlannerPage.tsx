import React, { useState } from 'react';
import { 
  CalendarDays, 
  ShoppingCart, 
  RotateCcw, 
  Plus, 
  X, 
  Utensils, 
  Sun, 
  Moon, 
  Coffee,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { WeeklyMealPlan, Dish } from '../types';

export const MealPlannerPage: React.FC = () => {
  const { 
    mealPlan, 
    updateMealPlanSlot, 
    generateShoppingListFromMealPlan, 
    dishes, 
    viewDish, 
    settings, 
    showToast 
  } = useApp();

  const isHindi = settings.language === 'hi';
  const days: (keyof WeeklyMealPlan)[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  const dayLabels: Record<keyof WeeklyMealPlan, { en: string; hi: string }> = {
    monday: { en: 'Monday', hi: 'सोमवार' },
    tuesday: { en: 'Tuesday', hi: 'मंगलवार' },
    wednesday: { en: 'Wednesday', hi: 'बुधवार' },
    thursday: { en: 'Thursday', hi: 'गुरुवार' },
    friday: { en: 'Friday', hi: 'शुक्रवार' },
    saturday: { en: 'Saturday', hi: 'शनिवार' },
    sunday: { en: 'Sunday', hi: 'रविवार' }
  };

  const [activeSlotTarget, setActiveSlotTarget] = useState<{
    day: keyof WeeklyMealPlan;
    slot: 'breakfast' | 'lunch' | 'dinner';
  } | null>(null);

  const getDish = (dishId: string | undefined): Dish | undefined => {
    return dishId ? dishes.find(d => d.id === dishId) : undefined;
  };

  const handleSelectDish = (dishId: string) => {
    if (activeSlotTarget) {
      updateMealPlanSlot(activeSlotTarget.day, activeSlotTarget.slot, dishId);
      setActiveSlotTarget(null);
    }
  };

  return (
    <div className="min-h-screen py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8620C]/10 text-[#E8620C] text-xs font-bold mb-2">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>{isHindi ? 'साप्ताहिक भोजन योजना' : '7-Day Planner'}</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 dark:text-stone-100">
            {isHindi ? 'वीकली मील प्लानर' : 'Weekly Meal Planner'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
            {isHindi 
              ? 'सोमवार से रविवार तक नाश्ता, दोपहर और रात के खाने की योजना बनाएं और एक क्लिक में शॉपिंग लिस्ट तैयार करें।'
              : 'Organize your weekly breakfast, lunch, and dinner. Export all needed ingredients in 1-click.'}
          </p>
        </div>

        {/* Generate Shopping Button */}
        <button
          onClick={generateShoppingListFromMealPlan}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#E8620C] to-[#F4B400] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#E8620C]/25 hover:opacity-95 flex items-center gap-2 transition-all"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{isHindi ? '1-क्लिक में शॉपिंग लिस्ट बनाएं' : '1-Click Shopping List'}</span>
        </button>
      </div>

      {/* Days Grid */}
      <div className="space-y-4">
        {days.map((day) => {
          const plan = mealPlan[day];
          const breakfast = getDish(plan.breakfast);
          const lunch = getDish(plan.lunch);
          const dinner = getDish(plan.dinner);

          return (
            <div
              key={day}
              className="bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 rounded-3xl p-4 sm:p-6 shadow-xs"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8620C]" />
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-stone-900 dark:text-stone-100 capitalize">
                    {dayLabels[day].en}
                  </h3>
                  <span className="text-xs text-[#E8620C] font-semibold">
                    ({dayLabels[day].hi})
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Breakfast */}
                <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                      <Coffee className="w-3.5 h-3.5 text-amber-500" />
                      {isHindi ? 'नाश्ता (Breakfast)' : 'Breakfast'}
                    </span>
                    {breakfast && (
                      <button
                        onClick={() => updateMealPlanSlot(day, 'breakfast', undefined)}
                        className="text-stone-400 hover:text-red-500 p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {breakfast ? (
                    <div 
                      onClick={() => viewDish(breakfast)}
                      className="cursor-pointer group"
                    >
                      <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-[#E8620C] transition-colors">
                        {breakfast.name}
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {breakfast.nutrition.calories} kcal • {breakfast.totalTimeMinutes}m
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveSlotTarget({ day, slot: 'breakfast' })}
                      className="py-2 text-xs font-semibold text-[#E8620C] hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{isHindi ? 'व्यंजन जोड़ें' : 'Add Recipe'}</span>
                    </button>
                  )}
                </div>

                {/* Lunch */}
                <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                      <Sun className="w-3.5 h-3.5 text-[#E8620C]" />
                      {isHindi ? 'दोपहर का भोजन (Lunch)' : 'Lunch'}
                    </span>
                    {lunch && (
                      <button
                        onClick={() => updateMealPlanSlot(day, 'lunch', undefined)}
                        className="text-stone-400 hover:text-red-500 p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {lunch ? (
                    <div 
                      onClick={() => viewDish(lunch)}
                      className="cursor-pointer group"
                    >
                      <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-[#E8620C] transition-colors">
                        {lunch.name}
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {lunch.nutrition.calories} kcal • {lunch.totalTimeMinutes}m
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveSlotTarget({ day, slot: 'lunch' })}
                      className="py-2 text-xs font-semibold text-[#E8620C] hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{isHindi ? 'व्यंजन जोड़ें' : 'Add Recipe'}</span>
                    </button>
                  )}
                </div>

                {/* Dinner */}
                <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                      <Moon className="w-3.5 h-3.5 text-purple-500" />
                      {isHindi ? 'रात का खाना (Dinner)' : 'Dinner'}
                    </span>
                    {dinner && (
                      <button
                        onClick={() => updateMealPlanSlot(day, 'dinner', undefined)}
                        className="text-stone-400 hover:text-red-500 p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {dinner ? (
                    <div 
                      onClick={() => viewDish(dinner)}
                      className="cursor-pointer group"
                    >
                      <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-[#E8620C] transition-colors">
                        {dinner.name}
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {dinner.nutrition.calories} kcal • {dinner.totalTimeMinutes}m
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveSlotTarget({ day, slot: 'dinner' })}
                      className="py-2 text-xs font-semibold text-[#E8620C] hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{isHindi ? 'व्यंजन जोड़ें' : 'Add Recipe'}</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Recipe Picker Modal */}
      {activeSlotTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#FFFDF9] dark:bg-[#1E1712] rounded-3xl max-w-xl w-full p-6 max-h-[85vh] flex flex-col border border-stone-200 dark:border-stone-800 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 mb-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 capitalize">
                  Assign to {activeSlotTarget.day} {activeSlotTarget.slot}
                </h3>
              </div>
              <button
                onClick={() => setActiveSlotTarget(null)}
                className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto space-y-2 flex-1 pr-1">
              {dishes.map((d) => (
                <div
                  key={d.id}
                  onClick={() => handleSelectDish(d.id)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-[#E8620C] cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img src={d.image} alt={d.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-stone-100">
                        {d.name}
                      </h4>
                      <p className="text-xs text-stone-500">
                        {d.nameHindi} • {d.totalTimeMinutes}m • {d.nutrition.calories} kcal
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#E8620C] bg-orange-50 dark:bg-orange-950/40 px-3 py-1.5 rounded-xl border border-orange-200 dark:border-orange-900">
                    Assign
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

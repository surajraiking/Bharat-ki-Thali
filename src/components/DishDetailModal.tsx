import React, { useState } from 'react';
import { 
  X, Heart, Clock, Flame, ShieldAlert, CheckCircle2, 
  ChefHat, Sparkles, Scale, Timer, Play, Pause, RotateCcw, 
  Share2, Check, UserCheck
} from 'lucide-react';
import { Dish } from '../types';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!dish) return null;

  const [servings, setServings] = useState<number>(dish.baseServings);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [activeTimerSeconds, setActiveTimerSeconds] = useState<number | null>(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  // Timer interval hook
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning && activeTimerSeconds !== null && activeTimerSeconds > 0) {
      interval = setInterval(() => {
        setActiveTimerSeconds((prev) => {
          if (prev === null || prev <= 1) {
            setTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, activeTimerSeconds]);

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleShare = async () => {
    const text = `${dish.hindiName} (${dish.name})\n🔥 Calories: ${dish.calories} kcal | Protein: ${dish.macros.proteinGrams}g\n\n✨ Fayde: ${dish.fayde.map(f => f.title).join(', ')}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: dish.name,
          text: text,
          url: window.location.href,
        });
      } catch (e) {
        console.log('Share canceled', e);
      }
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const servingRatio = servings / dish.baseServings;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div 
        id="dish-detail-container"
        className="relative my-auto w-full max-w-2xl rounded-3xl bg-white shadow-2xl dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden max-h-[94vh] flex flex-col"
      >
        {/* Sticky Top Header with Controls */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-stone-100 bg-white/95 px-5 py-3.5 backdrop-blur dark:border-stone-800 dark:bg-stone-900/95">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{dish.emoji}</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              {dish.category} • {dish.region}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              id="detail-share-btn"
              onClick={handleShare}
              aria-label="Share recipe"
              className="rounded-full p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-800 dark:hover:bg-stone-800 transition"
            >
              {copied ? <Check className="h-5 w-5 text-emerald-600" /> : <Share2 className="h-5 w-5" />}
            </button>
            <button
              id="detail-favorite-btn"
              onClick={() => onToggleFavorite(dish.id)}
              aria-label="Toggle favorite"
              className={`rounded-full p-2 transition ${
                isFavorite 
                  ? 'text-rose-500 bg-rose-50 dark:bg-rose-950/40' 
                  : 'text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800'
              }`}
            >
              <Heart className="h-5 w-5 fill-current" />
            </button>
            <button
              id="detail-close-btn"
              onClick={onClose}
              aria-label="Close modal"
              className="rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 dark:hover:bg-stone-800 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-5 sm:px-7 py-6 space-y-6">
          {/* Main Title and Tagline */}
          <div>
            <div className="flex items-baseline gap-2.5 flex-wrap">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white">
                {dish.hindiName}
              </h1>
              <span className="text-lg font-semibold text-stone-600 dark:text-stone-300">
                ({dish.name})
              </span>
            </div>
            <p className="mt-1.5 text-sm text-stone-600 dark:text-stone-400 italic">
              "{dish.tagline}"
            </p>
          </div>

          {/* Quick Metrics Bar (Prep, Cook, Calories, Protein) */}
          <div className="grid grid-cols-4 gap-2 rounded-2xl bg-stone-50 p-3 text-center dark:bg-stone-800/60 border border-stone-100 dark:border-stone-800">
            <div className="p-1">
              <div className="flex items-center justify-center gap-1 text-stone-400 text-xs mb-0.5">
                <Clock className="h-3.5 w-3.5 text-emerald-600" />
                <span>Prep</span>
              </div>
              <p className="text-sm font-bold text-stone-800 dark:text-stone-200">{dish.prepTimeMinutes}m</p>
            </div>
            <div className="p-1 border-l border-stone-200 dark:border-stone-700">
              <div className="flex items-center justify-center gap-1 text-stone-400 text-xs mb-0.5">
                <ChefHat className="h-3.5 w-3.5 text-amber-600" />
                <span>Cook</span>
              </div>
              <p className="text-sm font-bold text-stone-800 dark:text-stone-200">{dish.cookTimeMinutes}m</p>
            </div>
            <div className="p-1 border-l border-stone-200 dark:border-stone-700">
              <div className="flex items-center justify-center gap-1 text-stone-400 text-xs mb-0.5">
                <Flame className="h-3.5 w-3.5 text-rose-500" />
                <span>Energy</span>
              </div>
              <p className="text-sm font-bold text-stone-800 dark:text-stone-200">{dish.calories} kcal</p>
            </div>
            <div className="p-1 border-l border-stone-200 dark:border-stone-700">
              <div className="flex items-center justify-center gap-1 text-stone-400 text-xs mb-0.5">
                <Scale className="h-3.5 w-3.5 text-blue-500" />
                <span>Protein</span>
              </div>
              <p className="text-sm font-bold text-stone-800 dark:text-stone-200">{dish.macros.proteinGrams}g</p>
            </div>
          </div>

          {/* Detailed Nutritional Breakdown */}
          <div className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-850 shadow-sm">
            <div className="flex items-center justify-between text-xs text-stone-500 mb-2.5">
              <span className="font-semibold uppercase tracking-wider">प्रति सर्विंग पोषण (Nutritional Breakdown)</span>
              <span className="text-emerald-600 font-medium">1 Serving</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="rounded-xl bg-blue-50 p-2 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
                <p className="font-bold text-base">{dish.macros.proteinGrams}g</p>
                <p className="text-[11px] opacity-80">प्रोटीन (Protein)</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-2 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
                <p className="font-bold text-base">{dish.macros.carbsGrams}g</p>
                <p className="text-[11px] opacity-80">कार्ब्स (Carbs)</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-2 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                <p className="font-bold text-base">{dish.macros.fiberGrams}g</p>
                <p className="text-[11px] opacity-80">फाइबर (Fiber)</p>
              </div>
              <div className="rounded-xl bg-rose-50 p-2 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300">
                <p className="font-bold text-base">{dish.macros.fatGrams}g</p>
                <p className="text-[11px] opacity-80">फैट (Fat)</p>
              </div>
            </div>
          </div>

          {/* Taste & Aroma Box */}
          <div className="rounded-2xl bg-amber-50/60 p-4 border border-amber-200/80 dark:bg-amber-950/20 dark:border-amber-900/50">
            <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
              <Sparkles className="h-4 w-4 text-amber-600" />
              स्वाद और महक (Taste & Aroma Profile)
            </h3>
            <p className="mt-1 text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-medium">
              {dish.tasteProfile}
            </p>
          </div>

          {/* FAYDE (HEALTH BENEFITS) - Prominent Green Cards */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-emerald-600 p-1.5 text-white">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-white">
                स्वास्थ्य लाभ (फायदे / Health Benefits)
              </h3>
            </div>
            <div className="grid gap-2.5">
              {dish.fayde.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5 dark:border-emerald-900/60 dark:bg-emerald-950/30"
                >
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-200 text-emerald-900 text-xs font-bold dark:bg-emerald-800 dark:text-emerald-100">
                      {idx + 1}
                    </span>
                    {benefit.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pl-6.5">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* NUKSAN & SAVDHANI (PRECAUTIONS / DRAWBACKS) - Prominent Amber/Red Warning Cards */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-amber-600 p-1.5 text-white">
                <ShieldAlert className="h-4 w-4" />
              </div>
              <h3 className="text-base font-bold text-stone-900 dark:text-white">
                नुकसान व सावधानियां (किन्हें ध्यान रखना चाहिए / Precautions)
              </h3>
            </div>
            <div className="grid gap-2.5">
              {dish.nuksan.map((caution, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 dark:border-amber-900/60 dark:bg-amber-950/30"
                >
                  <h4 className="text-sm font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-200 text-amber-900 text-xs font-bold dark:bg-amber-800 dark:text-amber-100">
                      ⚠️
                    </span>
                    {caution.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pl-6.5">
                    {caution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Servings Adjuster + Ingredients */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4 sm:p-5 dark:border-stone-800 dark:bg-stone-850">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 dark:border-stone-700">
              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-white">
                  सामग्री (Ingredients Checklist)
                </h3>
                <p className="text-xs text-stone-500">व्यक्तियों की संख्या के अनुसार मात्रा बदलें</p>
              </div>
              
              {/* Servings Adjuster */}
              <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 shadow-sm border border-stone-200 dark:bg-stone-800 dark:border-stone-700">
                <button
                  id="decrease-servings-btn"
                  onClick={() => setServings((s) => Math.max(1, s - 1))}
                  className="h-6 w-6 rounded-md bg-stone-100 font-bold text-stone-700 hover:bg-stone-200 dark:bg-stone-700 dark:text-stone-200"
                >
                  -
                </button>
                <span className="text-xs font-bold text-stone-800 dark:text-stone-100 px-1">
                  {servings} Servings
                </span>
                <button
                  id="increase-servings-btn"
                  onClick={() => setServings((s) => Math.min(10, s + 1))}
                  className="h-6 w-6 rounded-md bg-stone-100 font-bold text-stone-700 hover:bg-stone-200 dark:bg-stone-700 dark:text-stone-200"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {dish.ingredients.map((ing, idx) => {
                const scaledQty = Number((ing.quantity * servingRatio).toFixed(2));
                return (
                  <div 
                    key={idx}
                    className="flex items-start gap-2.5 rounded-lg bg-white p-2.5 shadow-2xs dark:bg-stone-800 border border-stone-100 dark:border-stone-750 text-xs"
                  >
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    <div className="flex-1">
                      <span className="font-semibold text-stone-800 dark:text-stone-200">
                        {scaledQty > 0 ? `${scaledQty} ${ing.unit} ` : ''}
                        {ing.item}
                      </span>
                      {ing.notes && (
                        <span className="block text-[11px] text-stone-500 italic mt-0.5">
                          ({ing.notes})
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Step-by-Step Cooking Guide (Vidhi) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-stone-900 dark:text-white">
                बनाने की आसान विधि (Step-by-Step Recipe)
              </h3>
              <span className="text-xs text-stone-500">
                {Object.values(completedSteps).filter(Boolean).length}/{dish.instructions.length} Steps
              </span>
            </div>

            <div className="space-y-2.5">
              {dish.instructions.map((step, idx) => {
                const isDone = !!completedSteps[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleStep(idx)}
                    className={`cursor-pointer rounded-xl border p-3.5 transition flex items-start gap-3 select-none ${
                      isDone
                        ? 'border-emerald-200 bg-emerald-50/40 text-stone-500 dark:border-emerald-900/30 dark:bg-emerald-950/20'
                        : 'border-stone-200 bg-white hover:border-emerald-300 dark:border-stone-800 dark:bg-stone-850'
                    }`}
                  >
                    <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                      isDone 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300'
                    }`}>
                      {isDone ? <Check className="h-3.5 w-3.5" /> : idx + 1}
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDone ? 'line-through text-stone-400' : 'text-stone-700 dark:text-stone-300'}`}>
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cooking Step Timer Helper */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-850 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-xs text-stone-700 dark:text-stone-300">
              <Timer className="h-5 w-5 text-emerald-600" />
              <div>
                <p className="font-bold text-sm">कुकिंग टाइमर (Cooking Timer)</p>
                <p className="text-[11px] text-stone-500">धीमी आंच पर पकाने के लिए टाइमर लगाएं</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {activeTimerSeconds === null ? (
                <div className="flex gap-1.5">
                  {[5, 10, 15].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => {
                        setActiveTimerSeconds(mins * 60);
                        setTimerRunning(true);
                      }}
                      className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-stone-700 shadow-xs border border-stone-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-200 transition"
                    >
                      {mins}m
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-white dark:bg-stone-800 px-3 py-1 rounded-xl border border-stone-200 dark:border-stone-700">
                  <span className="font-mono text-sm font-bold text-emerald-600">
                    {formatTime(activeTimerSeconds)}
                  </span>
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="p-1 text-stone-600 hover:text-emerald-600"
                  >
                    {timerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => {
                      setActiveTimerSeconds(null);
                      setTimerRunning(false);
                    }}
                    className="p-1 text-stone-400 hover:text-rose-500"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Expert Healthy Tip */}
          <div className="rounded-2xl bg-emerald-50/80 p-4 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-900/60">
            <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
              💡 शेफ और न्यूट्रिशनिस्ट का खास टिप:
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-medium">
              {dish.expertHealthyTip}
            </p>
          </div>

          {/* Timing & Suitability Tags */}
          <div className="grid gap-3 sm:grid-cols-2 text-xs pt-1">
            <div className="rounded-xl border border-stone-200 p-3 dark:border-stone-800">
              <span className="font-bold text-stone-800 dark:text-stone-200 block mb-1">
                ⏰ खाने का सबसे सही समय:
              </span>
              <span className="text-stone-600 dark:text-stone-400">{dish.bestTimeToEat}</span>
            </div>
            <div className="rounded-xl border border-stone-200 p-3 dark:border-stone-800">
              <span className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1 mb-1">
                <UserCheck className="h-3.5 w-3.5 text-emerald-600" />
                किन्हें खाना चाहिए:
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {dish.suitableFor.map((item, i) => (
                  <span key={i} className="rounded-md bg-stone-100 px-2 py-0.5 text-[11px] text-stone-700 dark:bg-stone-800 dark:text-stone-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Close Button */}
        <div className="border-t border-stone-100 bg-stone-50 px-5 py-3 dark:border-stone-800 dark:bg-stone-900">
          <button
            id="modal-bottom-close-btn"
            onClick={onClose}
            className="w-full rounded-xl bg-stone-900 py-3 text-xs font-bold text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 transition"
          >
            बंद करें (Back to Dishes)
          </button>
        </div>
      </div>
    </div>
  );
};

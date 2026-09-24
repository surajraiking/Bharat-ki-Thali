import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  Flame, 
  Users, 
  Heart, 
  Share2, 
  ShoppingCart, 
  ChefHat, 
  AlertTriangle, 
  Sparkles, 
  Check, 
  Plus, 
  Minus, 
  ShieldCheck,
  Scale
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RecipeModal: React.FC = () => {
  const { 
    selectedDish, 
    setSelectedDish, 
    setCookingDish, 
    isFavorite, 
    toggleFavorite, 
    addToShoppingList, 
    showToast,
    settings 
  } = useApp();

  const [servings, setServings] = useState<number>(() => selectedDish ? selectedDish.servings : 2);
  const [copied, setCopied] = useState(false);

  if (!selectedDish) return null;

  const isHindi = settings.language === 'hi';
  const favorited = isFavorite(selectedDish.id);
  const scale = servings / selectedDish.servings;

  const handleShare = async () => {
    const shareText = `Check out this authentic recipe for ${selectedDish.name} (${selectedDish.nameHindi}) on Bharat Ki Thali 2.0!`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedDish.name,
          text: shareText,
          url: shareUrl
        });
      } catch (err) {
        // user cancelled or failed
      }
    } else {
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      showToast('📋 Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleStartCooking = () => {
    setCookingDish(selectedDish);
  };

  const formatQuantity = (qty: number) => {
    const scaled = qty * scale;
    if (scaled === 0.5) return '½';
    if (scaled === 0.25) return '¼';
    if (scaled === 0.75) return '¾';
    if (Number.isInteger(scaled)) return scaled.toString();
    return scaled.toFixed(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FFFDF9] dark:bg-[#1E1712] rounded-3xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Action Buttons */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-white/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 shadow-md hover:bg-white transition-all backdrop-blur-md"
            title="Share Recipe"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => toggleFavorite(selectedDish.id)}
            className={`p-2.5 rounded-full shadow-md backdrop-blur-md transition-all ${
              favorited 
                ? 'bg-rose-500 text-white' 
                : 'bg-white/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 hover:bg-white'
            }`}
            title="Save to Favorites"
          >
            <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => setSelectedDish(null)}
            className="p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 shadow-md backdrop-blur-md transition-all"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 pb-24">
          
          {/* Hero Banner */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
            <img 
              src={selectedDish.image} 
              alt={selectedDish.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9] dark:from-[#1E1712] via-black/40 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8620C] text-white shadow-sm">
                  {selectedDish.state || selectedDish.region}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-stone-900/90 text-stone-900 dark:text-stone-100 backdrop-blur-xs">
                  {selectedDish.category.join(' • ')}
                </span>
                {selectedDish.diet.map(d => (
                  <span key={d} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 text-white backdrop-blur-xs">
                    {d}
                  </span>
                ))}
              </div>

              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#24180E] dark:text-[#FFFDF9] tracking-tight">
                {selectedDish.name}
              </h1>
              <p className="font-heading font-bold text-lg sm:text-xl text-[#E8620C] mt-0.5">
                {selectedDish.nameHindi}
              </p>
            </div>
          </div>

          <div className="px-4 sm:px-8 pt-4">
            
            {/* Tagline / Description */}
            <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-6 font-medium">
              {isHindi && selectedDish.descriptionHindi ? selectedDish.descriptionHindi : selectedDish.description}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">Total Time</p>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-100">{selectedDish.totalTimeMinutes} mins</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-700 dark:text-orange-300">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">Energy</p>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-100">{selectedDish.nutrition.calories} kcal</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">Difficulty</p>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-100">{selectedDish.difficulty}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-700 dark:text-rose-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">Spice Level</p>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-100">{selectedDish.spiceLevel}</p>
                </div>
              </div>
            </div>

            {/* Nutrition Breakdown */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#E8620C]" />
                <span>{isHindi ? 'प्रति सर्विंग पोषण (Nutrition Facts)' : 'Nutrition per Serving'}</span>
              </h2>
              <div className="grid grid-cols-5 gap-2 text-center">
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800/80">
                  <p className="text-xs text-stone-500 dark:text-stone-400">Calories</p>
                  <p className="text-base font-extrabold text-stone-900 dark:text-stone-100 mt-1">{selectedDish.nutrition.calories}</p>
                </div>
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800/80">
                  <p className="text-xs text-stone-500 dark:text-stone-400">Protein</p>
                  <p className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">{selectedDish.nutrition.protein}g</p>
                </div>
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800/80">
                  <p className="text-xs text-stone-500 dark:text-stone-400">Carbs</p>
                  <p className="text-base font-extrabold text-stone-900 dark:text-stone-100 mt-1">{selectedDish.nutrition.carbohydrates}g</p>
                </div>
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800/80">
                  <p className="text-xs text-stone-500 dark:text-stone-400">Fat</p>
                  <p className="text-base font-extrabold text-amber-600 dark:text-amber-400 mt-1">{selectedDish.nutrition.fat}g</p>
                </div>
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800/80">
                  <p className="text-xs text-stone-500 dark:text-stone-400">Fiber</p>
                  <p className="text-base font-extrabold text-purple-600 dark:text-purple-400 mt-1">{selectedDish.nutrition.fiber}g</p>
                </div>
              </div>
            </div>

            {/* Ingredients with Dynamic Scaling */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div>
                  <h2 className="font-heading font-bold text-base sm:text-xl text-stone-900 dark:text-stone-100">
                    {isHindi ? 'सामग्री (Ingredients)' : 'Ingredients'}
                  </h2>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    {selectedDish.ingredients.length} {isHindi ? 'सामग्रियां आवश्यक' : 'items needed'}
                  </p>
                </div>

                {/* Servings Scaler */}
                <div className="flex items-center gap-3 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-2xl border border-stone-200 dark:border-stone-700">
                  <span className="text-xs font-semibold text-stone-600 dark:text-stone-300 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#E8620C]" />
                    {servings} {isHindi ? 'लोग' : 'Servings'}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setServings(Math.max(1, servings - 1))}
                      disabled={servings <= 1}
                      className="p-1 rounded-lg bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 disabled:opacity-30 hover:bg-[#E8620C] hover:text-white transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => setServings(Math.min(20, servings + 1))}
                      className="p-1 rounded-lg bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 hover:bg-[#E8620C] hover:text-white transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Ingredients List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedDish.ingredients.map((ing) => (
                  <div
                    key={ing.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/60 dark:border-stone-800"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E8620C]" />
                      <span className="text-sm font-medium text-stone-800 dark:text-stone-200">{ing.name}</span>
                    </div>
                    <span className="text-xs font-bold text-[#E8620C] bg-white dark:bg-stone-900 px-2 py-1 rounded-lg border border-stone-200/80 dark:border-stone-700">
                      {formatQuantity(ing.quantity)} {ing.unit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Add All to Shopping Button */}
              <button
                onClick={() => addToShoppingList(selectedDish, scale)}
                className="mt-4 w-full py-2.5 px-4 rounded-xl border border-[#E8620C]/40 text-[#E8620C] dark:text-[#F4813F] font-semibold text-xs sm:text-sm hover:bg-[#E8620C]/10 flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{isHindi ? 'सभी सामग्री शॉपिंग लिस्ट में जोड़ें' : 'Add All to Shopping List'}</span>
              </button>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-base sm:text-xl text-stone-900 dark:text-stone-100 mb-4">
                {isHindi ? 'बनाने की विधि (Step-by-Step Instructions)' : 'Step-by-Step Instructions'}
              </h2>
              <div className="space-y-4">
                {selectedDish.steps.map((step) => (
                  <div
                    key={step.id}
                    className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-800 shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#E8620C] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      {step.stepNumber}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-heading font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                          {step.title}
                        </h4>
                        {step.durationMinutes && (
                          <span className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#E8620C]" />
                            {step.durationMinutes} min
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                        {step.instruction}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Benefits (Fayde) & Precautions (Nuksan) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {selectedDish.fayde && selectedDish.fayde.length > 0 && (
                <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60">
                  <h3 className="font-heading font-bold text-sm text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5 mb-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{isHindi ? 'स्वास्थ्य लाभ (Benefits)' : 'Health Benefits'}</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-emerald-800 dark:text-emerald-300">
                    {selectedDish.fayde.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span><strong>{f.title}:</strong> {f.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedDish.precautions && selectedDish.precautions.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60">
                  <h3 className="font-heading font-bold text-sm text-amber-900 dark:text-amber-200 flex items-center gap-1.5 mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>{isHindi ? 'सावधानी एवं परहेज (Precautions)' : 'Precautions'}</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-amber-800 dark:text-amber-300">
                    {selectedDish.precautions.map((p, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Chef Tip */}
            {selectedDish.tips && selectedDish.tips.length > 0 && (
              <div className="p-4 rounded-2xl bg-[#E8620C]/10 border border-[#E8620C]/30 text-stone-800 dark:text-stone-200 text-xs sm:text-sm mb-6 flex items-start gap-3">
                <ChefHat className="w-5 h-5 text-[#E8620C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#E8620C] block mb-0.5">Chef's Secret Tip:</strong>
                  {selectedDish.tips.join(' ')}
                </div>
              </div>
            )}

            {/* Allergens warning if present */}
            {selectedDish.allergens.length > 0 && (
              <div className="text-xs text-stone-500 dark:text-stone-400 mb-6 flex items-center gap-2">
                <span className="font-semibold">Allergens:</span>
                <div className="flex gap-1.5">
                  {selectedDish.allergens.map(a => (
                    <span key={a} className="px-2 py-0.5 rounded-md bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Fixed Bottom Action Floating Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-white/95 dark:bg-[#1E1712]/95 backdrop-blur-md border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between gap-3">
          <div className="hidden sm:block">
            <p className="text-xs text-stone-500 dark:text-stone-400">Ready to cook?</p>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">{selectedDish.steps.length} Simple Steps</p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => addToShoppingList(selectedDish, scale)}
              className="p-3 sm:px-4 sm:py-3 rounded-2xl border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-[#E8620C] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              title="Add to Shopping List"
            >
              <ShoppingCart className="w-4 h-4 text-[#E8620C]" />
              <span className="hidden sm:inline">Shopping List</span>
            </button>

            <button
              onClick={handleStartCooking}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-gradient-to-r from-[#E8620C] to-[#F4B400] text-white font-bold text-sm shadow-lg shadow-[#E8620C]/30 hover:opacity-95 flex items-center justify-center gap-2 transition-all"
            >
              <ChefHat className="w-4 h-4" />
              <span>{isHindi ? 'कुकिंग मोड शुरू करें' : 'Start Cooking Mode'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

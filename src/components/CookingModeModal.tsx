import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  ChefHat, 
  Timer,
  Volume2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CookingModeModal: React.FC = () => {
  const { cookingDish, setCookingDish, settings, showToast } = useApp();
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  
  // Timer state (seconds)
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (cookingDish) {
      const step = cookingDish.steps[currentStepIdx];
      const duration = (step?.durationMinutes || 5) * 60;
      setTimerSeconds(duration);
      setIsTimerRunning(false);
    }
  }, [currentStepIdx, cookingDish]);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      // Vibrate if supported
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
      }
      showToast('⏰ Step Timer Completed!');
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  if (!cookingDish) return null;

  const steps = cookingDish.steps;
  const currentStep = steps[currentStepIdx];
  const isHindi = settings.language === 'hi';

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (currentStepIdx < steps.length - 1) {
      setCurrentStepIdx(prev => prev + 1);
    } else {
      showToast('🎉 Congratulations! Dish is ready to serve!');
      setCookingDish(null);
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#140D07] text-[#FFFDF9] flex flex-col justify-between p-4 sm:p-8 overflow-hidden select-none animate-in fade-in duration-200">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E8620C] flex items-center justify-center text-white shadow-md">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-lg sm:text-xl text-white">
              {cookingDish.name}
            </h2>
            <p className="text-xs text-amber-400 font-medium">
              {cookingDish.nameHindi} • Cooking Mode
            </p>
          </div>
        </div>

        <button
          onClick={() => setCookingDish(null)}
          className="p-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
          title="Exit Cooking Mode"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Center Step Area */}
      <div className="max-w-3xl mx-auto w-full py-6 flex flex-col items-center text-center justify-center flex-1">
        
        {/* Step Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8620C]/20 border border-[#E8620C]/40 text-[#E8620C] text-sm font-bold uppercase tracking-wider mb-6">
          <span>{isHindi ? 'चरण' : 'Step'} {currentStepIdx + 1} / {steps.length}</span>
        </div>

        {/* Step Title */}
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mb-6">
          {currentStep.title}
        </h1>

        {/* Step Instructions */}
        <p className="text-lg sm:text-2xl text-stone-200 font-medium leading-relaxed max-w-2xl mb-8">
          {currentStep.instruction}
        </p>

        {/* Built-in Step Timer */}
        <div className="flex items-center gap-4 bg-stone-900/90 border border-stone-800 px-6 py-4 rounded-3xl shadow-xl">
          <div className="flex items-center gap-2">
            <Timer className="w-6 h-6 text-amber-400 animate-pulse" />
            <span className="font-mono text-3xl sm:text-4xl font-black text-amber-400">
              {formatTimer(timerSeconds)}
            </span>
          </div>

          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-3 rounded-2xl bg-[#E8620C] text-white hover:bg-orange-600 transition-colors shadow-md"
              title={isTimerRunning ? 'Pause Timer' : 'Start Timer'}
            >
              {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setTimerSeconds((currentStep?.durationMinutes || 5) * 60);
              }}
              className="p-3 rounded-2xl bg-stone-800 text-stone-300 hover:bg-stone-700 transition-colors"
              title="Reset Timer"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Progress & Navigation */}
      <div className="max-w-3xl mx-auto w-full pt-4 border-t border-stone-800 flex flex-col gap-4">
        
        {/* Progress Bar */}
        <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#E8620C] to-[#F4B400] h-full transition-all duration-300"
            style={{ width: `${((currentStepIdx + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStepIdx === 0}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-300 disabled:opacity-30 disabled:pointer-events-none font-semibold text-sm transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{isHindi ? 'पिछला' : 'Previous'}</span>
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#E8620C] to-[#F4B400] text-white font-bold text-sm shadow-lg shadow-[#E8620C]/30 hover:opacity-95 transition-all"
          >
            <span>{currentStepIdx === steps.length - 1 ? (isHindi ? 'पूर्ण हुआ! 🎉' : 'Finish Cooking! 🎉') : (isHindi ? 'अगला चरण' : 'Next Step')}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};

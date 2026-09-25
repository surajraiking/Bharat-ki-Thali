import React from 'react';
import { UtensilsCrossed, Search, MapPin, Sparkles, Heart, CircleDot, MoreHorizontal } from 'lucide-react';
import { useApp, AppPage } from '../context/AppContext';

export const BottomNav: React.FC = () => {
  const { activePage, setActivePage, favorites, settings } = useApp();
  const isHindi = settings.language === 'hi';
  const items = [
    { id: 'home' as AppPage, label: isHindi ? 'होम' : 'Home', icon: UtensilsCrossed },
    { id: 'explore' as AppPage, label: isHindi ? 'खोजें' : 'Explore', icon: Search },
    { id: 'regions' as AppPage, label: isHindi ? 'राज्य' : 'Regions', icon: MapPin },
    { id: 'thali-builder' as AppPage, label: isHindi ? 'थाली' : 'Thali', icon: CircleDot },
    { id: 'favorites' as AppPage, label: isHindi ? 'सेव्ड' : 'Saved', icon: Heart, count: favorites.length },
    { id: 'ai-chef' as AppPage, label: isHindi ? 'AI शेफ' : 'AI Chef', icon: Sparkles, isAi: true }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[80] w-full bg-[#FFFDF9]/98 dark:bg-[#1C140E]/98 backdrop-blur-xl border-t border-stone-200/80 dark:border-stone-800 shadow-[0_-10px_30px_rgba(0,0,0,0.12)] pb-[env(safe-area-inset-bottom)]" aria-label="Primary navigation">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-6 min-h-16 items-center px-1 sm:px-3">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActivePage(item.id)}
              className={`relative flex min-h-16 flex-col items-center justify-center gap-0.5 px-1 transition-all duration-200 ${isActive ? 'text-[#E8620C] scale-[1.04]' : 'text-[#7B6E65] dark:text-[#A8988C] hover:text-[#E8620C]'}`}
            >
              <span className={`relative rounded-2xl px-3 py-1 ${isActive ? 'bg-orange-500/10 shadow-sm' : ''}`}>
                <Icon className={`w-5 h-5 sm:w-5.5 sm:h-5.5 ${item.isAi ? 'text-amber-500' : ''}`} />
                {item.count !== undefined && item.count > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 text-[9px] leading-4 font-bold text-center rounded-full bg-[#E8620C] text-white shadow-sm">{item.count}</span>
                )}
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold leading-none whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

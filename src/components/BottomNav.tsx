import React from 'react';
import { 
  UtensilsCrossed, 
  Search, 
  MapPin, 
  Sparkles, 
  Heart,
  CircleDot
} from 'lucide-react';
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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 dark:bg-[#1C140E]/95 backdrop-blur-lg border-t border-stone-200/80 dark:border-stone-800 pb-safe">
      <div className="grid grid-cols-6 h-16 items-center px-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex flex-col items-center justify-center py-1 transition-all ${
                isActive
                  ? 'text-[#E8620C] scale-105'
                  : 'text-[#7B6E65] dark:text-[#A8988C] hover:text-[#E8620C]'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${item.isAi ? 'text-amber-500' : ''}`} />
                {item.count !== undefined && item.count > 0 && (
                  <span className="absolute -top-1 -right-2 px-1 text-[9px] font-bold rounded-full bg-[#E8620C] text-white">
                    {item.count}
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-1 font-semibold ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';
import { 
  UtensilsCrossed, 
  Search, 
  MapPin, 
  Sparkles, 
  CalendarDays, 
  ShoppingCart, 
  Heart, 
  Settings, 
  Download, 
  Sun, 
  Moon,
  CircleDot,
  Dices
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { usePWA } from '../hooks/usePWA';

export const Navbar: React.FC = () => {
  const { 
    activePage, 
    setActivePage, 
    favorites, 
    shoppingList, 
    settings, 
    updateSettings,
    setIsApkModalOpen,
    setIsSurpriseModalOpen 
  } = useApp();
  
  const { isInstallable } = usePWA();

  const isHindi = settings.language === 'hi';

  const navLinks = [
    { id: 'home', label: isHindi ? 'होम' : 'Home', icon: UtensilsCrossed },
    { id: 'explore', label: isHindi ? 'खोजें' : 'Explore', icon: Search },
    { id: 'regions', label: isHindi ? 'राज्य व क्षेत्र' : 'Regions', icon: MapPin },
    { id: 'thali-builder', label: isHindi ? 'थाली बनाएं' : 'Thali Platter', icon: CircleDot },
    { id: 'meal-planner', label: isHindi ? 'मील प्लानर' : 'Meal Plan', icon: CalendarDays },
    { id: 'ai-chef', label: isHindi ? 'AI शेफ' : 'AI Chef', icon: Sparkles, badge: 'AI' },
    { id: 'shopping-list', label: isHindi ? 'शॉपिंग लिस्ट' : 'Shopping', icon: ShoppingCart, count: shoppingList.filter(i => !i.purchased).length },
    { id: 'favorites', label: isHindi ? 'पसंदीदा' : 'Favorites', icon: Heart, count: favorites.length },
    { id: 'settings', label: isHindi ? 'सेटिंग्स' : 'Settings', icon: Settings },
  ];

  const toggleLanguage = () => {
    updateSettings({ language: isHindi ? 'en' : 'hi' });
  };

  const toggleTheme = () => {
    updateSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 dark:bg-[#1C140E]/95 backdrop-blur-md border-b border-[#E8620C]/15 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <button 
            onClick={() => setActivePage('home')} 
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-[#173B2F] shadow-md shadow-[#173B2F]/25 ring-1 ring-[#C9973E]/40 group-hover:scale-105 transition-transform">
              <img src="/icon.svg" alt="Bharat Ki Thali — Suraj Rai" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#24180E] dark:text-[#FDF8F3] tracking-tight">
                  भारत की थाली
                </span>
                <span className="hidden xl:inline text-[9px] font-bold tracking-widest text-[#C9973E]">SURAj RAI</span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[#E8620C]/15 text-[#E8620C] dark:bg-[#E8620C]/30 rounded-md">
                  2.0
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#7B6E65] dark:text-[#B5A599] font-medium hidden sm:block">
                Discover India, One Dish at a Time
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id as any)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#E8620C] text-white shadow-sm shadow-[#E8620C]/30'
                      : 'text-[#4A3E36] dark:text-[#D1C5BC] hover:bg-[#E8620C]/10 hover:text-[#E8620C]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-0.5 px-1 py-0.2 text-[9px] font-bold rounded-full bg-amber-400 text-amber-950">
                      {item.badge}
                    </span>
                  )}
                  {item.count !== undefined && item.count > 0 && (
                    <span className={`px-1.5 py-0.2 text-[10px] font-bold rounded-full ${
                      isActive ? 'bg-white text-[#E8620C]' : 'bg-[#E8620C] text-white'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Surprise Me, APK, Language, Theme */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Surprise Me Button */}
            <button
              onClick={() => setIsSurpriseModalOpen(true)}
              title={isHindi ? 'रैंडम डिश चुनें' : 'Surprise Me!'}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Dices className="w-4 h-4 text-amber-600 dark:text-amber-400 animate-spin-slow" />
              <span className="hidden md:inline">{isHindi ? 'क्या खाएं?' : 'Surprise Me'}</span>
            </button>

            {/* APK Download Button */}
            <button
              onClick={() => setIsApkModalOpen(true)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-xs sm:text-xs shadow-sm hover:opacity-95 transition-all"
              title="Download Android APK / Install App"
            >
              <Download className="w-3.5 h-3.5" />
              <span>APK / Install</span>
            </button>

            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 text-xs font-bold text-[#4A3E36] dark:text-[#D1C5BC] hover:border-[#E8620C] transition-colors"
              title="Toggle Hindi / English"
            >
              {isHindi ? 'EN' : 'हिन्दी'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-stone-200 dark:border-stone-700 text-[#4A3E36] dark:text-[#D1C5BC] hover:text-[#E8620C] hover:border-[#E8620C] transition-colors"
              title="Toggle Theme"
            >
              {settings.theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

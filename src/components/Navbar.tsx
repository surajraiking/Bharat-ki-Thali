import React from 'react';
import { UtensilsCrossed, Search, MapPin, Sparkles, CalendarDays, ShoppingCart, Heart, Settings, Download, Sun, Moon, CircleDot, Dices, UserRound } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { usePWA } from '../hooks/usePWA';

export const Navbar: React.FC = () => {
  const { activePage, setActivePage, favorites, shoppingList, settings, updateSettings, setIsApkModalOpen, setIsSurpriseModalOpen } = useApp();
  usePWA();
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
    { id: 'profile', label: isHindi ? 'प्रोफाइल' : 'Profile', icon: UserRound },
    { id: 'settings', label: isHindi ? 'सेटिंग्स' : 'Settings', icon: Settings },
  ];
  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 dark:bg-[#1C140E]/95 backdrop-blur-md border-b border-[#D39A29]/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 sm:min-h-20 gap-3">
          <button onClick={() => setActivePage('home')} className="flex items-center gap-2.5 text-left group focus:outline-none min-w-0" aria-label="Bharat Ki Thali home">
            <img src="/logo.svg" alt="Bharat Ki Thali — A Suraj Rai Creation" className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-2xl shadow-md group-hover:scale-105 transition-transform" />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-lg sm:text-2xl text-[#24180E] dark:text-[#FDF8F3] tracking-tight truncate">भारत की थाली</span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-[#D39A29]/15 text-[#9A6A22] dark:text-[#F3D07A] rounded-md shrink-0">2.0</span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#7B6E65] dark:text-[#B5A599] font-semibold hidden sm:block">A Suraj Rai Creation • Discover India, One Dish at a Time</p>
            </div>
          </button>
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map(item => { const Icon=item.icon; const isActive=activePage===item.id; return <button key={item.id} onClick={()=>setActivePage(item.id as any)} className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${isActive?'bg-[#D39A29] text-white shadow-sm shadow-[#D39A29]/30':'text-[#4A3E36] dark:text-[#D1C5BC] hover:bg-[#D39A29]/10 hover:text-[#9A6A22]'}`}><Icon className="w-4 h-4"/><span>{item.label}</span>{item.badge&&<span className="ml-0.5 px-1 py-0.2 text-[9px] font-bold rounded-full bg-amber-400 text-amber-950">{item.badge}</span>}{item.count!==undefined&&item.count>0&&<span className={`px-1.5 py-0.2 text-[10px] font-bold rounded-full ${isActive?'bg-white text-[#D39A29]':'bg-[#D39A29] text-white'}`}>{item.count}</span>}</button>; })}
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button onClick={()=>setActivePage("profile")} title={isHindi?"प्रोफाइल":"Profile"} className="p-2 rounded-xl border border-stone-200 dark:border-stone-700 text-[#4A3E36] dark:text-[#D1C5BC] hover:text-[#D39A29] hover:border-[#D39A29] transition-colors"><UserRound className="w-4 h-4"/></button>
            <button onClick={()=>setIsSurpriseModalOpen(true)} title={isHindi?'रैंडम डिश चुनें':'Surprise Me!'} className="p-2 sm:px-3 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 text-xs font-semibold flex items-center gap-1.5 transition-all"><Dices className="w-4 h-4 text-amber-600 dark:text-amber-400"/><span className="hidden md:inline">{isHindi?'क्या खाएं?':'Surprise Me'}</span></button>
            <button onClick={()=>setIsApkModalOpen(true)} className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-xs shadow-sm hover:opacity-95 transition-all" title="Download Android APK / Install App"><Download className="w-3.5 h-3.5"/><span>APK / Install</span></button>
            <button onClick={()=>updateSettings({language:isHindi?'en':'hi'})} className="px-2.5 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 text-xs font-bold text-[#4A3E36] dark:text-[#D1C5BC] hover:border-[#D39A29] transition-colors">{isHindi?'EN':'हिन्दी'}</button>
            <button onClick={()=>updateSettings({theme:settings.theme==='dark'?'light':'dark'})} className="p-2 rounded-xl border border-stone-200 dark:border-stone-700 text-[#4A3E36] dark:text-[#D1C5BC] hover:text-[#D39A29] hover:border-[#D39A29] transition-colors">{settings.theme==='dark'?<Sun className="w-4 h-4 text-amber-400"/>:<Moon className="w-4 h-4"/>}</button>
          </div>
        </div>
      </div>
    </header>
  );
};
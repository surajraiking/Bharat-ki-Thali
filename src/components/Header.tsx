import React from 'react';
import { Search, Heart, Download, Sparkles, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  favoritesCount: number;
  showFavoritesOnly: boolean;
  onToggleFavoritesOnly: () => void;
  onOpenInstallModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  favoritesCount,
  showFavoritesOnly,
  onToggleFavoritesOnly,
  onOpenInstallModal,
}) => {
  const { isInstalled } = usePWAInstall();

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur dark:border-stone-800 dark:bg-stone-900/95">
      <div className="mx-auto max-w-6xl px-4 py-3">
        {/* Top bar: Brand + Install Button + Favorites */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-2.5">
            <img 
              src="/icon.svg" 
              alt="SwasthyaPak Logo" 
              className="h-10 w-10 rounded-xl shadow-xs shrink-0" 
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black tracking-tight text-stone-900 dark:text-white">
                  स्वादिष्ट व हेल्दी
                </span>
                <span className="rounded-md bg-emerald-600 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                  55+ Dishes
                </span>
              </div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-medium">
                फायदे, नुकसान व संपूर्ण रेसिपी गाइड
              </p>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            {/* Install APK / Mobile App Button */}
            <button
              id="header-install-app-btn"
              onClick={onOpenInstallModal}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition shadow-xs ${
                isInstalled
                  ? 'bg-stone-100 text-stone-700 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 shadow-emerald-600/20'
              }`}
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">
                {isInstalled ? 'App Installed' : 'Install APK / App'}
              </span>
              <span className="sm:hidden">
                {isInstalled ? 'Installed' : 'Install'}
              </span>
            </button>

            {/* Favorites Toggle */}
            <button
              id="header-favorites-toggle-btn"
              onClick={onToggleFavoritesOnly}
              aria-label="Toggle favorites view"
              className={`flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-xs font-semibold border transition ${
                showFavoritesOnly
                  ? 'border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-300'
                  : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200'
              }`}
            >
              <Heart className={`h-4 w-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
              <span className="hidden xs:inline">पसंदीदा</span>
              <span className="rounded-full bg-stone-200 px-1.5 py-0.2 text-[10px] font-bold text-stone-800 dark:bg-stone-700 dark:text-stone-200">
                {favoritesCount}
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-3 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          <input
            id="dish-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="नाम, सामग्री, फायदे या बीमारी से खोजें (उदा. खिचड़ी, Poha, Protein, Vajan...)"
            className="w-full rounded-xl border border-stone-200 bg-stone-50 pl-10 pr-9 py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-stone-700 dark:bg-stone-800 dark:text-white dark:focus:border-emerald-400 transition"
          />
          {searchQuery && (
            <button
              id="clear-search-btn"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-stone-400 hover:text-stone-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

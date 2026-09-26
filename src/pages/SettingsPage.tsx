import React, { useRef } from 'react';
import { 
  Settings as SettingsIcon, 
  Download, 
  Smartphone, 
  Moon, 
  Sun, 
  Languages, 
  ShieldCheck, 
  Database, 
  Trash2, 
  Upload, 
  Save,
  CheckCircle2,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { usePWA } from '../hooks/usePWA';
import { storageService } from '../services/storage';

export const SettingsPage: React.FC = () => {
  const { settings, updateSettings, setIsApkModalOpen, showToast } = useApp();
  const { downloadApk, isInstallable, install, latestVersion, updateAvailable } = usePWA();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isHindi = settings.language === 'hi';

  const handleExportData = () => {
    const dataStr = storageService.exportAllData();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bharat-ki-thali-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('💾 Backup exported successfully!');
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = storageService.importData(content);
      if (success) {
        showToast('✅ Data imported successfully! Reloading...');
        setTimeout(() => window.location.reload(), 1000);
      } else {
        showToast('❌ Invalid backup file format');
      }
    };
    reader.readAsText(file);
  };

  const handleClearAll = () => {
    if (window.confirm(isHindi ? 'क्या आप निश्चित रूप से सारा डेटा और पसंदीदा व्यंजन हटाना चाहते हैं?' : 'Are you sure you want to clear all local favorites and settings?')) {
      storageService.clearAllData();
      showToast('All local data cleared');
      setTimeout(() => window.location.reload(), 800);
    }
  };

  return (
    <div className="min-h-screen py-8 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8620C]/10 text-[#E8620C] text-xs font-bold mb-2">
          <SettingsIcon className="w-3.5 h-3.5" />
          <span>{isHindi ? 'सेटिंग्स' : 'Preferences'}</span>
        </div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 dark:text-stone-100">
          {isHindi ? 'ऐप सेटिंग्स' : 'App Settings & Preferences'}
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
          {isHindi ? 'भाषा, थीम, डेटा बैकअप और एंड्रॉइड APK डाउनलोड।' : 'Configure language, theme, dietary goals, and offline backup.'}
        </p>
      </div>

      <div className="space-y-6">
        
        {/* APK & App Installation Section */}
        <div className="bg-gradient-to-br from-[#E8620C]/10 to-amber-500/10 border-2 border-[#E8620C]/40 rounded-3xl p-5 sm:p-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8620C] text-white flex items-center justify-center text-2xl shadow-md">
                📱
              </div>
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100">
                  {isHindi ? 'एंड्रॉइड ऐप (Android APK Download)' : 'Android APK Download'}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {latestVersion ? `Latest APK • v${latestVersion}` : 'Latest Bharat Ki Thali APK'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={downloadApk}
                className="px-5 py-2.5 rounded-xl bg-[#E8620C] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-orange-600 flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{updateAvailable ? (isHindi ? 'अपडेट डाउनलोड करें' : 'Download Update') : (isHindi ? 'APK डाउनलोड करें' : 'Download APK')}</span>
              </button>

              <button
                onClick={() => setIsApkModalOpen(true)}
                className="p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:border-[#E8620C]"
                title="Installation Guide"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {isHindi
              ? 'बिना प्ले स्टोर के सीधे अपने एंड्रॉइड फोन में इंस्टॉल करें। इंस्टॉल करने के बाद पूरा ऐप, 60+ रेसिपीज और शॉपिंग लिस्ट बिना इंटरनेट के भी काम करेगी।'
              : 'Directly install standalone APK on any Android phone. Enjoy 100% offline access to recipes, ingredient scaling, and weekly meal planning.'}
          </p>
        </div>

        {/* Language & Theme Section */}
        <div className="bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-5">
          <h3 className="font-heading font-bold text-base text-stone-900 dark:text-stone-100 mb-4">
            {isHindi ? 'भाषा एवं प्रदर्शन (Display & Language)' : 'Language & Display'}
          </h3>

          {/* Language Switch */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Languages className="w-5 h-5 text-[#E8620C]" />
              <div>
                <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  {isHindi ? 'भाषा (Language)' : 'Language'}
                </p>
                <p className="text-xs text-stone-500">
                  Choose between Hindi and English
                </p>
              </div>
            </div>

            <div className="flex items-center bg-stone-100 dark:bg-stone-800 p-1 rounded-xl">
              <button
                onClick={() => updateSettings({ language: 'hi' })}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  settings.language === 'hi' ? 'bg-[#E8620C] text-white shadow-xs' : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => updateSettings({ language: 'en' })}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  settings.language === 'en' ? 'bg-[#E8620C] text-white shadow-xs' : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="h-px bg-stone-100 dark:bg-stone-800" />

          {/* Theme Switch */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-[#E8620C]" />
              <div>
                <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  {isHindi ? 'थीम (Appearance)' : 'Theme Mode'}
                </p>
                <p className="text-xs text-stone-500">
                  Light, Dark, or System preference
                </p>
              </div>
            </div>

            <div className="flex items-center bg-stone-100 dark:bg-stone-800 p-1 rounded-xl">
              {(['light', 'dark', 'system'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => updateSettings({ theme: t })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                    settings.theme === t ? 'bg-[#E8620C] text-white shadow-xs' : 'text-stone-600 dark:text-stone-300'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-stone-100 dark:bg-stone-800" />

          {/* Default Diet Preference */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#E8620C]" />
              <div>
                <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  {isHindi ? 'डाइट प्राथमिकता' : 'Dietary Preference'}
                </p>
                <p className="text-xs text-stone-500">
                  Default recipe catalog preference
                </p>
              </div>
            </div>

            <select
              value={settings.dietPreference}
              onChange={(e) => updateSettings({ dietPreference: e.target.value as any })}
              className="py-1.5 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs font-semibold"
            >
              <option value="All">All Diets</option>
              <option value="Vegetarian">Pure Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Jain">Jain (No onion/garlic)</option>
            </select>
          </div>
        </div>

        {/* Data Backup & Restore */}
        <div className="bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
          <h3 className="font-heading font-bold text-base text-stone-900 dark:text-stone-100">
            {isHindi ? 'डेटा बैकअप एवं रीस्टोर (Backup & Restore)' : 'Data Backup & Restore'}
          </h3>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handleExportData}
              className="px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-semibold text-xs sm:text-sm hover:border-[#E8620C] flex items-center gap-2 transition-colors"
            >
              <Save className="w-4 h-4 text-[#E8620C]" />
              <span>{isHindi ? 'बैकअप एक्सपोर्ट करें (JSON)' : 'Export Backup (JSON)'}</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-semibold text-xs sm:text-sm hover:border-[#E8620C] flex items-center gap-2 transition-colors"
            >
              <Upload className="w-4 h-4 text-emerald-600" />
              <span>{isHindi ? 'बैकअप इम्पोर्ट करें' : 'Import Backup'}</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportFile}
              accept=".json"
              className="hidden"
            />

            <button
              onClick={handleClearAll}
              className="px-4 py-2.5 rounded-xl border border-red-200 dark:border-red-950 text-red-600 dark:text-red-400 font-semibold text-xs sm:text-sm hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center gap-2 transition-colors ml-auto"
            >
              <Trash2 className="w-4 h-4" />
              <span>{isHindi ? 'डेटा साफ करें' : 'Clear Data'}</span>
            </button>
          </div>
        </div>

        {/* About App & Copyright */}
        <div className="text-center py-6 text-xs text-stone-400">
          <p className="font-heading font-extrabold text-sm text-stone-700 dark:text-stone-300 mb-1">
            Bharat Ki Thali 2.0 (भारत की थाली)
          </p>
          <p>Discover India, One Dish at a Time • Built with React, Vite & Gemini</p>
          <p className="mt-1">Version 2.0.0 • Offline Ready PWA & Android APK • Latest release auto-detected</p>
        </div>

      </div>

    </div>
  );
};

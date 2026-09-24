import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  WifiOff, 
  Zap, 
  Share2,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { usePWA } from '../hooks/usePWA';

export const ApkDownloadModal: React.FC = () => {
  const { isApkModalOpen, setIsApkModalOpen, showToast, settings } = useApp();
  const { install, isInstallable, isInstalled, downloadApk } = usePWA();
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isApkModalOpen) return null;

  const isHindi = settings.language === 'hi';

  const handleDownload = () => {
    downloadApk();
    setDownloadStarted(true);
    showToast('📥 Downloading Bharat-Ki-Thali-v2.0.apk...');
  };

  const handlePwaInstall = async () => {
    const success = await install();
    if (success) {
      showToast('🎉 App installed successfully to your Home Screen!');
      setIsApkModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FFFDF9] dark:bg-[#1E1712] rounded-3xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsApkModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#E8620C] to-[#F4B400] flex items-center justify-center text-white shadow-lg shadow-[#E8620C]/30 text-2xl">
            🍛
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
              {isHindi ? 'ऐप डाउनलोड एवं इंस्टॉल करें' : 'Download & Install App'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
              Bharat Ki Thali 2.0 • Android APK & PWA
            </p>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6 text-center">
          <div className="flex flex-col items-center">
            <WifiOff className="w-4 h-4 text-[#E8620C] mb-1" />
            <span className="text-[11px] font-bold text-stone-800 dark:text-stone-200">100% Offline</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-4 h-4 text-amber-500 mb-1" />
            <span className="text-[11px] font-bold text-stone-800 dark:text-stone-200">Super Fast</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600 mb-1" />
            <span className="text-[11px] font-bold text-stone-800 dark:text-stone-200">100% Free</span>
          </div>
        </div>

        {/* Primary Action 1: Download APK */}
        <div className="mb-6 p-4 rounded-2xl border-2 border-[#E8620C]/40 bg-[#E8620C]/5 dark:bg-[#E8620C]/10">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#E8620C] text-white">
              Recommended for Android
            </span>
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">
              v2.0.0 • .apk file
            </span>
          </div>

          <p className="text-xs text-stone-600 dark:text-stone-300 mb-4 leading-relaxed">
            {isHindi 
              ? 'डायरेक्ट एंड्रॉइड .apk पैकेज डाउनलोड करें और बिना किसी ऐप स्टोर के अपने फोन में सीधे इंस्टॉल करें।'
              : 'Directly download the Android .apk package to install the standalone application on your device.'}
          </p>

          <button
            onClick={handleDownload}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#E8620C] to-[#F4B400] text-white font-bold text-sm shadow-md shadow-[#E8620C]/30 hover:opacity-95 flex items-center justify-center gap-2 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>{isHindi ? 'डाउनलोड एंड्रॉइड APK (.apk)' : 'Download Android APK (.apk)'}</span>
          </button>
        </div>

        {/* Primary Action 2: 1-Tap Home Screen WebAPK Install if supported */}
        {isInstallable && !isInstalled && (
          <div className="mb-6 p-4 rounded-2xl border border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/20">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white">
                1-Tap Install
              </span>
              <span className="text-xs font-semibold text-emerald-600">
                WebAPK
              </span>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 mb-3">
              {isHindi
                ? 'अपने ब्राउज़र से सीधे होम स्क्रीन पर इंस्टॉल करें (बिना किसी फाइल डाउनलोड के)।'
                : 'Instantly add to your phone home screen without downloading extra files.'}
            </p>
            <button
              onClick={handlePwaInstall}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 flex items-center justify-center gap-2 transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              <span>{isHindi ? 'होम स्क्रीन पर जोड़ें (Add to Home Screen)' : 'Add to Home Screen'}</span>
            </button>
          </div>
        )}

        {/* How to Install APK Steps */}
        <div className="rounded-2xl bg-stone-100 dark:bg-stone-800/60 p-4">
          <h3 className="font-heading font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 mb-2.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#E8620C]" />
            <span>{isHindi ? 'APK इंस्टॉल कैसे करें? (3 आसान स्टेप्स):' : 'How to install APK on Android:'}</span>
          </h3>
          <ol className="space-y-2 text-xs text-stone-600 dark:text-stone-300 list-decimal list-inside">
            <li>
              <strong>Download:</strong> Tap the "Download Android APK" button above.
            </li>
            <li>
              <strong>Open File:</strong> Pull down your notification bar or open <em>Files / Downloads</em> and tap <code>Bharat-Ki-Thali-v2.0.apk</code>.
            </li>
            <li>
              <strong>Allow & Install:</strong> If Chrome/Files asks "Install unknown apps", tap <em>Settings → Allow from this source</em>, then tap <strong>Install</strong>.
            </li>
          </ol>
        </div>

      </div>
    </div>
  );
};

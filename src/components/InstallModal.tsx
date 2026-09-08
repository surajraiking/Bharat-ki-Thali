import React, { useState } from 'react';
import { Download, Smartphone, CheckCircle, Share2, Copy, Check, X, AlertCircle } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [copied, setCopied] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '50+ Swadisht & Healthy Indian Dishes App',
          text: '50+ Swadisht aur Healthy Indian Dishes (Fayde, Nuksan aur Recipes ke sath). Bina PC ke phone me install karein!',
          url: currentUrl,
        });
      } catch (err) {
        console.log('Share canceled or failed', err);
      }
    } else {
      handleCopy();
    }
  };

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      setInstallSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
      <div 
        id="install-modal-container" 
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-stone-900 border border-stone-200 dark:border-stone-800"
      >
        {/* Close Button */}
        <button
          id="close-install-modal-btn"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 dark:hover:bg-stone-800"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header with App Logo */}
        <div className="flex items-center gap-3 border-b border-stone-100 pb-4 dark:border-stone-800">
          <img src="/icon.svg" alt="App Icon" className="h-12 w-12 rounded-xl shadow-md" />
          <div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-white">
              फोन में App / APK इंस्टॉल करें
            </h2>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              बिना PC / कंप्यूटर के 100% Free & Direct Mobile Install
            </p>
          </div>
        </div>

        {/* Already Installed Alert */}
        {isInstalled && (
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
            <CheckCircle className="h-6 w-6 shrink-0 text-emerald-600" />
            <div>
              <p className="font-semibold text-sm">App पहले से ही आपके डिवाइस में इंस्टॉल है!</p>
              <p className="text-xs opacity-90">आप इसे अपनी होम स्क्रीन या ऐप ड्रॉअर से सीधे खोल सकते हैं।</p>
            </div>
          </div>
        )}

        {/* Success Alert */}
        {installSuccess && (
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-emerald-500 p-4 text-white">
            <CheckCircle className="h-6 w-6 shrink-0" />
            <div>
              <p className="font-bold text-sm">बधाई हो! App इंस्टॉल हो गई है।</p>
              <p className="text-xs">अब अपने फोन की होम स्क्रीन चेक करें, ऐप का आइकन दिख जाएगा।</p>
            </div>
          </div>
        )}

        {/* Primary Action Button */}
        {isInstallable && !isInstalled && (
          <div className="mt-5">
            <button
              id="direct-pwa-install-btn"
              onClick={handleInstallClick}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 px-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 active:scale-[0.98] transition"
            >
              <Download className="h-5 w-5" />
              Direct 1-Click Install App (APK)
            </button>
            <p className="mt-1.5 text-center text-xs text-stone-500">
              ⚡️ केवल 5 सेकंड में बिना प्ले स्टोर और बिना कंप्यूटर के इंस्टॉल
            </p>
          </div>
        )}

        {/* Detailed Guide for Android & iOS */}
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="flex items-center gap-2 text-sm font-bold text-emerald-900 dark:text-emerald-300">
              <Smartphone className="h-4 w-4" />
              Android फोन में कैसे करें (Google Chrome):
            </h3>
            <ol className="mt-2.5 space-y-2 text-xs text-stone-700 dark:text-stone-300 list-decimal list-inside leading-relaxed">
              <li>
                अगर आप कंप्यूटर पर यह देख रहे हैं, तो नीचे दिए <strong>"Share Link"</strong> बटन से यह लिंक अपने मोबाइल <strong>WhatsApp</strong> पर भेजें।
              </li>
              <li>
                अपने मोबाइल के <strong>Google Chrome</strong> ब्राउज़र में यह लिंक खोलें।
              </li>
              <li>
                स्क्रीन के ऊपर या नीचे <strong>"Install App"</strong> का पॉप-अप आएगा उस पर टैप करें।
              </li>
              <li>
                या क्रोम के ऊपर दाएँ कोने में <strong>3 डॉट्स (⋮)</strong> दबाएं और <strong>"Install app"</strong> या <strong>"Add to Home screen"</strong> चुनें।
              </li>
              <li>
                <strong>WebAPK टेक्नोलॉजी:</strong> Android OS स्वतः इसका सुरक्षित APK पैकेज बनाकर आपके फोन में ऐप की तरह जोड़ देगा!
              </li>
            </ol>
          </div>

          {/* iOS Safari Guide */}
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-800/40">
            <h3 className="flex items-center gap-2 text-sm font-bold text-stone-900 dark:text-stone-200">
              <Smartphone className="h-4 w-4" />
              iPhone / Apple iOS में कैसे करें:
            </h3>
            <p className="mt-2 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Safari ब्राउज़र में नीचे <strong>Share बटन (चौकोर तीर ⬆️)</strong> दबाएं, फिर नीचे स्क्रॉल करके <strong>"Add to Home Screen (होम स्क्रीन में जोड़ें)"</strong> पर टैप करें।
            </p>
          </div>

          {/* Share & Copy Link Section */}
          <div className="pt-2">
            <p className="text-xs font-medium text-stone-600 dark:text-stone-400 mb-2">
              अपने मोबाइल पर लिंक भेजने के लिए:
            </p>
            <div className="flex gap-2">
              <button
                id="share-app-link-btn"
                onClick={handleShare}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-stone-100 py-2.5 px-3 text-xs font-semibold text-stone-800 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700 transition"
              >
                <Share2 className="h-4 w-4 text-emerald-600" />
                WhatsApp / Share
              </button>
              <button
                id="copy-app-link-btn"
                onClick={handleCopy}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-stone-300 py-2.5 px-3 text-xs font-semibold text-stone-700 hover:bg-stone-50 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800 transition"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Link Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          {/* Offline Capability Badge */}
          <div className="flex items-center gap-2 rounded-lg bg-stone-100 px-3 py-2 text-[11px] text-stone-600 dark:bg-stone-800 dark:text-stone-400">
            <AlertCircle className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
            <span>यह ऐप ऑफलाइन (बिना इंटरनेट) भी 100% काम करता है। कोई PC या कोडिंग की जरूरत नहीं है।</span>
          </div>
        </div>

        {/* Done Button */}
        <button
          id="dismiss-install-modal-btn"
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-stone-900 py-2.5 text-xs font-semibold text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 transition"
        >
          समझ गया (Close)
        </button>
      </div>
    </div>
  );
};

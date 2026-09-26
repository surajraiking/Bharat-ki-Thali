import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

const LATEST_RELEASE_API = 'https://api.github.com/repos/surajraiking/Bharat-ki-Thali/releases/latest';
const FALLBACK_APK_URL = 'https://github.com/surajraiking/Bharat-ki-Thali/releases/latest/download/Bharat-Ki-Thali.apk';

export function usePWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  const [latestApkUrl, setLatestApkUrl] = useState(FALLBACK_APK_URL);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
      document.referrer.includes('android-app://');
    setIsStandalone(standalone);
    setIsInstalled(standalone);

    const ua = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(ua));
    setIsAndroid(/android/.test(ua));

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    const checkLatestRelease = async () => {
      try {
        const response = await fetch(LATEST_RELEASE_API, {
          headers: { Accept: 'application/vnd.github+json' },
          cache: 'no-store',
        });
        if (!response.ok) return;
        const release = await response.json();
        const apk = Array.isArray(release.assets)
          ? release.assets.find((asset: { name?: string }) => asset.name === 'Bharat-Ki-Thali.apk')
          : null;
        if (apk?.browser_download_url) setLatestApkUrl(apk.browser_download_url);

        if (typeof release.tag_name === 'string') {
          const normalized = release.tag_name.replace(/^android-/i, '').replace(/^v/i, '');
          setLatestVersion(normalized);
          const current = [2, 0, 0];
          const latest = normalized.split('.').map((part: string) => Number.parseInt(part, 10) || 0);
          const isNewer = latest[0] > current[0] ||
            (latest[0] === current[0] && latest[1] > current[1]) ||
            (latest[0] === current[0] && latest[1] === current[1] && latest[2] > current[2]);
          setUpdateAvailable(isNewer);
        }
      } catch {
        // Network failures must never block app usage or APK download.
      }
    };

    void checkLatestRelease();

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const install = async (): Promise<boolean> => {
    if (!deferredPrompt) return false;
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setDeferredPrompt(null);
        return true;
      }
    } catch (err) {
      console.error('Error during PWA installation:', err);
    }
    return false;
  };

  const downloadApk = () => {
    window.location.href = latestApkUrl || FALLBACK_APK_URL;
  };

  return { isInstallable: !!deferredPrompt, isInstalled, isIOS, isAndroid, isStandalone,
    latestVersion, latestApkUrl, updateAvailable, install, downloadApk };
}

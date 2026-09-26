import { Browser } from '@capacitor/browser';
export const openExternalLink = async (rawUrl: string) => {
  const value = rawUrl.trim();
  if (!value) return;
  const url = value.startsWith('http://') || value.startsWith('https://') ? value : `https://${value}`;
  try { await Browser.open({ url }); } catch { window.open(url, '_blank', 'noopener,noreferrer'); }
};

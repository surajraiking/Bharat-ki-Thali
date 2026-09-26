import React, { useMemo, useRef, useState } from 'react';
import { Camera, Check, Copy, ExternalLink, Globe, Instagram, Link2, MapPin, MessageCircle, Pencil, Share2, Sparkles, Youtube, Facebook, X, Utensils, Heart, Bookmark, Bot, ShieldCheck, Trash2, ImagePlus } from 'lucide-react';
import { openExternalLink } from '../utils/externalLink';
import { useApp } from '../context/AppContext';

const socialMeta = [
  { key:'instagram', label:'Instagram', icon:Instagram, placeholder:'https://instagram.com/username' },
  { key:'youtube', label:'YouTube', icon:Youtube, placeholder:'https://youtube.com/@channel' },
  { key:'facebook', label:'Facebook', icon:Facebook, placeholder:'https://facebook.com/username' },
  { key:'x', label:'X / Twitter', icon:X, placeholder:'https://x.com/username' },
  { key:'whatsapp', label:'WhatsApp', icon:MessageCircle, placeholder:'https://wa.me/919999999999' },
  { key:'website', label:'Website', icon:Globe, placeholder:'https://example.com' },
] as const;

export const ProfilePage: React.FC = () => {
  const { profile, updateProfile, settings, favorites, savedThalis, recentlyViewed, setActivePage, showToast } = useApp();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(profile);
  const [uploading, setUploading] = useState<'avatar' | 'cover' | null>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const isHindi = settings.language === 'hi';

  const resizeImageFile = (file: File, maxWidth: number, maxHeight: number, quality = 0.84) => new Promise<string>((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const ctx = canvas.getContext('2d');
      if (!ctx) { URL.revokeObjectURL(objectUrl); reject(new Error('Canvas unavailable')); return; }
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const data = canvas.toDataURL('image/jpeg', quality);
      URL.revokeObjectURL(objectUrl);
      resolve(data);
    };
    image.onerror = () => { URL.revokeObjectURL(objectUrl); reject(new Error('Invalid image')); };
    image.src = objectUrl;
  });

  const handleImageUpload = async (file: File | undefined, kind: 'avatar' | 'cover') => {
    if (!file || !file.type.startsWith('image/')) { showToast(isHindi ? 'कृपया image file चुनें' : 'Please choose an image file'); return; }
    setUploading(kind);
    try {
      const data = await resizeImageFile(file, kind === 'avatar' ? 900 : 1600, kind === 'avatar' ? 900 : 900);
      setDraft(prev => ({ ...prev, [kind === 'avatar' ? 'avatarUrl' : 'coverUrl']: data }));
      showToast(isHindi ? 'फोटो तैयार है — Save Profile दबाएं' : 'Photo ready — tap Save Profile');
    } catch { showToast(isHindi ? 'फोटो तैयार नहीं हो सकी' : 'Could not prepare the photo'); }
    finally { setUploading(null); }
  };

  React.useEffect(() => setDraft(profile), [profile]);

  const connected = useMemo(() => socialMeta.filter(s => Boolean(profile.socialLinks?.[s.key])), [profile.socialLinks]);

  const save = () => {
    updateProfile(draft);
    setEditing(false);
  };

  const share = async () => {
    const url = window.location.href.split('#')[0] + '?profile=' + encodeURIComponent(profile.username);
    try {
      if (navigator.share) await navigator.share({ title: profile.displayName, text: 'Bharat Ki Thali profile', url });
      else { await navigator.clipboard.writeText(url); showToast('Profile link copied'); }
    } catch {}
  };

  const copyUsername = async () => {
    await navigator.clipboard?.writeText('@' + profile.username);
    showToast('Username copied');
  };

  const field = (label:string, value:string, key:keyof typeof draft, placeholder='') => (
    <label className="block">
      <span className="text-xs font-bold text-stone-500 dark:text-stone-400">{label}</span>
      <input value={String(draft[key] ?? '')} onChange={e=>setDraft({...draft,[key]:e.target.value})} placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2.5 text-sm outline-none focus:border-[#D39A29]"/>
    </label>
  );

  return <div className="max-w-4xl mx-auto px-3 sm:px-6 py-5 sm:py-8">
    <div className="relative overflow-hidden rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#24180E] shadow-xl">
      <div className="h-32 sm:h-44 bg-gradient-to-br from-[#D39A29] via-orange-500 to-[#7C2D12] relative">
        {profile.coverUrl && <img src={profile.coverUrl} className="w-full h-full object-cover" alt="Profile cover" />}
        <div className="absolute inset-0 bg-black/15"/>
        {editing && <button type="button" onClick={()=>coverInputRef.current?.click()} className="absolute left-3 bottom-3 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-black/45 text-white backdrop-blur font-bold text-xs"><ImagePlus className="w-4 h-4"/>{uploading === 'cover' ? 'Uploading…' : 'Change Cover'}</button>}
        <input ref={coverInputRef} type="file" accept="image/*" className="hidden" onChange={e=>void handleImageUpload(e.target.files?.[0], 'cover')} />
        <button onClick={share} className="absolute top-3 right-3 p-2.5 rounded-full bg-black/25 text-white backdrop-blur"><Share2 className="w-4 h-4"/></button>
      </div>
      <div className="px-4 sm:px-7 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 relative">
          <div className="relative shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white dark:border-[#24180E] bg-gradient-to-br from-amber-200 to-orange-500 overflow-hidden flex items-center justify-center text-3xl font-black text-white">
              {profile.avatarUrl ? <img src={profile.avatarUrl} alt={profile.displayName} className="w-full h-full object-cover"/> : profile.displayName.slice(0,1).toUpperCase()}
            </div>
            {editing && <button type="button" onClick={()=>avatarInputRef.current?.click()} className="absolute bottom-1 right-1 bg-[#D39A29] text-white p-2 rounded-full shadow-lg" title="Change profile photo"><Camera className="w-4 h-4"/></button>}
            <input ref={avatarInputRef} type="file" accept="image/*" className="hidden" onChange={e=>void handleImageUpload(e.target.files?.[0], 'avatar')} />
          </div>
          <div className="flex-1 min-w-0 pb-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-extrabold">{profile.displayName}</h1>
              {profile.creatorMode && <span className="inline-flex items-center gap-1 text-xs font-bold text-[#9A6A22]"><ShieldCheck className="w-4 h-4"/> Creator</span>}
            </div>
            <button onClick={copyUsername} className="text-sm text-stone-500 hover:text-[#D39A29]">@{profile.username}</button>
          </div>
          <div className="flex gap-2">
            <button onClick={()=>{setDraft(profile);setEditing(v=>!v)}} className="px-4 py-2 rounded-xl border border-stone-200 dark:border-stone-700 text-sm font-bold flex items-center gap-2"><Pencil className="w-4 h-4"/>{editing?(isHindi?'बंद करें':'Close'):(isHindi?'प्रोफाइल एडिट':'Edit Profile')}</button>
            <button onClick={()=>setActivePage('ai-chef')} className="px-4 py-2 rounded-xl bg-[#D39A29] text-white text-sm font-bold flex items-center gap-2"><Bot className="w-4 h-4"/> AI Chat</button>
          </div>
        </div>

        {!editing ? <div className="mt-5 space-y-4">
          <p className="text-sm leading-6 text-stone-600 dark:text-stone-300">{profile.bio}</p>
          <div className="flex flex-wrap gap-3 text-xs text-stone-500">
            {profile.location && <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {profile.location}</span>}
            {profile.website && <button type="button" onClick={()=>openExternalLink(profile.website)} className="flex items-center gap-1 text-[#B9770E]"><Link2 className="w-4 h-4"/> Website <ExternalLink className="w-3 h-3"/></button>}
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4"/> {profile.favoriteCuisine}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 border-y border-stone-100 dark:border-stone-800 py-4">
            <div className="text-center"><div className="font-extrabold">{favorites.length}</div><div className="text-[11px] text-stone-500">Saved dishes</div></div>
            <div className="text-center"><div className="font-extrabold">{savedThalis.length}</div><div className="text-[11px] text-stone-500">Thalis</div></div>
            <div className="text-center"><div className="font-extrabold">{recentlyViewed.length}</div><div className="text-[11px] text-stone-500">Recently viewed</div></div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2"><h2 className="font-extrabold">Connected Social</h2><span className="text-xs text-stone-500">{connected.length} linked</span></div>
            <div className="grid sm:grid-cols-2 gap-2">
              {connected.map(s=>{const M=socialMeta.find(x=>x.key===s.key)!;const Icon=M.icon;return <button type="button" key={s.key} onClick={()=>openExternalLink(profile.socialLinks[s.key] || '')} className="w-full flex items-center gap-3 p-3 rounded-2xl border border-stone-200 dark:border-stone-700 hover:border-[#D39A29] transition-colors text-left"><Icon className="w-5 h-5 text-[#D39A29]"/><span className="text-sm font-bold flex-1">{s.label}</span><Check className="w-4 h-4 text-emerald-600"/></button>})}
              {!connected.length && <p className="text-sm text-stone-500">Edit profile to connect your social accounts once.</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <button onClick={()=>setActivePage('favorites')} className="p-4 rounded-2xl bg-orange-500/10 text-left"><Heart className="w-5 h-5 mb-2 text-orange-600"/><b>My Favorites</b><p className="text-xs text-stone-500 mt-1">Your saved recipes and dishes</p></button>
            <button onClick={()=>setActivePage('ai-chef')} className="p-4 rounded-2xl bg-amber-500/10 text-left"><Sparkles className="w-5 h-5 mb-2 text-amber-600"/><b>Bharat AI Chatbot</b><p className="text-xs text-stone-500 mt-1">Ask about recipes, ingredients, meals and Indian food.</p></button>
          </div>
        </div> :
        <div className="mt-6 space-y-4">
          {field('Display name','', 'displayName','Your name')}
          {field('Username','', 'username','your_username')}
          {field('Bio','', 'bio','Tell people about your food journey')}
          <div className="grid sm:grid-cols-2 gap-3">{field('Location','', 'location','City, State')}{field('Website','', 'website','https://example.com')}</div>
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="block"><span className="text-xs font-bold text-stone-500">Cooking skill</span><select value={draft.cookingSkill} onChange={e=>setDraft({...draft,cookingSkill:e.target.value as any})} className="mt-1 w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2.5 text-sm"><option>Beginner</option><option>Home Cook</option><option>Advanced</option><option>Professional</option></select></label>
            {field('Favorite cuisine','', 'favoriteCuisine','Indian')}
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-stone-200 dark:border-stone-700 p-3"><div className="flex items-center justify-between gap-2 mb-2"><span className="text-xs font-bold text-stone-500">Profile photo</span><button type="button" onClick={()=>avatarInputRef.current?.click()} className="text-xs font-bold text-[#B9770E] flex items-center gap-1"><ImagePlus className="w-3.5 h-3.5"/> Choose</button></div><div className="flex items-center gap-3"><div className="w-14 h-14 rounded-full overflow-hidden bg-stone-100 dark:bg-stone-800 flex items-center justify-center">{draft.avatarUrl ? <img src={draft.avatarUrl} alt="Profile preview" className="w-full h-full object-cover"/> : <Camera className="w-5 h-5 text-stone-400"/>}</div><button type="button" onClick={()=>setDraft({...draft,avatarUrl:''})} className="text-xs text-red-600 flex items-center gap-1"><Trash2 className="w-3.5 h-3.5"/> Remove</button></div></div>
            <div className="rounded-2xl border border-stone-200 dark:border-stone-700 p-3"><div className="flex items-center justify-between gap-2 mb-2"><span className="text-xs font-bold text-stone-500">Cover photo</span><button type="button" onClick={()=>coverInputRef.current?.click()} className="text-xs font-bold text-[#B9770E] flex items-center gap-1"><ImagePlus className="w-3.5 h-3.5"/> Choose</button></div><div className="h-14 rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800">{draft.coverUrl && <img src={draft.coverUrl} alt="Cover preview" className="w-full h-full object-cover"/>}</div><button type="button" onClick={()=>setDraft({...draft,coverUrl:''})} className="mt-2 text-xs text-red-600 flex items-center gap-1"><Trash2 className="w-3.5 h-3.5"/> Remove</button></div>
          </div>
          <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 dark:bg-stone-900"><input type="checkbox" checked={draft.isPublic} onChange={e=>setDraft({...draft,isPublic:e.target.checked})}/><span><b>Public profile</b><small className="block text-xs text-stone-500">Allow your profile to be shared by link.</small></span></label>
          <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 dark:bg-stone-900"><input type="checkbox" checked={draft.creatorMode} onChange={e=>setDraft({...draft,creatorMode:e.target.checked})}/><span><b>Creator mode</b><small className="block text-xs text-stone-500">Show creator badge on your profile.</small></span></label>
          <div className="border-t border-stone-200 dark:border-stone-800 pt-4">
            <h3 className="font-extrabold mb-3">Connect social accounts</h3>
            <p className="text-xs text-stone-500 mb-3">Save each link once. After saving, tap the platform card to open it directly.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {socialMeta.map(s=>{const Icon=s.icon;return <label key={s.key} className="block"><span className="text-xs font-bold text-stone-500 flex items-center gap-1"><Icon className="w-3.5 h-3.5"/>{s.label}</span><input value={draft.socialLinks?.[s.key] ?? ''} onChange={e=>setDraft({...draft,socialLinks:{...draft.socialLinks,[s.key]:e.target.value}})} placeholder={s.placeholder} className="mt-1 w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2.5 text-sm outline-none focus:border-[#D39A29]"/></label>})}
            </div>
          </div>
          <div className="flex justify-end gap-2"><button onClick={()=>{setDraft(profile);setEditing(false)}} className="px-4 py-2 rounded-xl border border-stone-200 font-bold text-sm">Cancel</button><button onClick={save} className="px-5 py-2 rounded-xl bg-[#D39A29] text-white font-bold text-sm flex items-center gap-2"><Check className="w-4 h-4"/> Save Profile</button></div>
        </div>}
      </div>
    </div>
  </div>;
};


export const CreatorSocialFooter: React.FC = () => {
  const links = [
    { label: 'Instagram', url: 'https://instagram.com/surajraiking', icon: Instagram },
    { label: 'YouTube', url: 'https://youtube.com/@SanatanMythologyTales', icon: Youtube },
    { label: 'Facebook', url: 'https://facebook.com/surajraiking21', icon: Facebook },
  ];
  return <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 pt-2"><div className="rounded-3xl border border-[#D39A29]/25 bg-gradient-to-r from-[#17100B] via-[#24180E] to-[#3A2412] text-white p-4 sm:p-5 shadow-lg"><div className="flex flex-col sm:flex-row items-center justify-between gap-4"><div className="flex items-center gap-3 min-w-0"><img src="/icon.svg" alt="Bharat Ki Thali logo" className="w-12 h-12 rounded-2xl shrink-0"/><div className="min-w-0"><div className="font-extrabold text-base sm:text-lg">Bharat Ki Thali</div><div className="text-xs text-white/70">A Suraj Rai Creation • Follow Suraj Rai</div></div></div><div className="flex flex-wrap justify-center gap-2">{links.map(({label,url,icon:Icon})=><button key={label} type="button" onClick={()=>void openExternalLink(url)} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-bold"><Icon className="w-4 h-4"/>{label}<ExternalLink className="w-3 h-3 opacity-70"/></button>)}</div></div></div></section>;
};

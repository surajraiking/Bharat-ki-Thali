import React, { useState } from 'react';
import { 
  Search, 
  Mic, 
  MicOff, 
  Sparkles, 
  Flame, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Dices, 
  Download, 
  Heart, 
  UtensilsCrossed, 
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Coffee,
  Soup,
  Cake,
  Leaf
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/RecipeCard';
import { indianStatesData } from '../data/states';
import { festivalsList } from '../data/festivals';
import { healthCategoriesList } from '../data/healthCategories';

export const HomePage: React.FC = () => {
  const { 
    dishes, 
    viewDish, 
    recentlyViewed, 
    clearRecentlyViewed, 
    setQuickSearch, 
    setQuickFilter, 
    setActivePage, 
    setIsApkModalOpen,
    setIsSurpriseModalOpen,
    settings, 
    showToast 
  } = useApp();

  const [searchInput, setSearchInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const isHindi = settings.language === 'hi';

  // Voice Search Handler
  const handleVoiceSearch = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast('Voice search not supported in this browser. Please type.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = isHindi ? 'hi-IN' : 'en-IN';
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        showToast('🎙️ Bolna shuru karein (Listening)...');
      };

      recognition.onresult = (e: any) => {
        const transcript = e.results[0][0].transcript;
        setSearchInput(transcript);
        setQuickSearch(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
        showToast('Could not recognize voice. Please try typing.');
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setQuickSearch(searchInput.trim());
    }
  };

  // Featured Today's Special Dish (e.g. Hyderabadi Biryani or Dal Baati)
  const todaysSpecial = dishes.find(d => d.id === 'hyderabadi-biryani') || dishes[0];

  // Quick categories
  const categories = [
    { label: isHindi ? 'नाश्ता' : 'Breakfast', cat: 'Breakfast', icon: '🥞', color: 'from-amber-500 to-orange-500' },
    { label: isHindi ? 'मुख्य भोजन' : 'Main Course', cat: 'Main Course', icon: '🍲', color: 'from-orange-500 to-red-500' },
    { label: isHindi ? 'स्ट्रीट फूड' : 'Street Food', cat: 'Street Food', icon: '🥟', color: 'from-emerald-500 to-teal-500' },
    { label: isHindi ? 'दाल एवं सूप' : 'Dal & Soups', cat: 'Dal & Soups', icon: '🥣', color: 'from-yellow-500 to-amber-600' },
    { label: isHindi ? 'मिठाई' : 'Desserts', cat: 'Healthy Desserts', icon: '🍨', color: 'from-pink-500 to-rose-500' },
    { label: isHindi ? 'रोटी व अनाज' : 'Rotis & Grains', cat: 'Rotis & Grains', icon: '🫓', color: 'from-stone-500 to-stone-700' },
  ];

  // Trending dishes
  const trendingDishes = dishes.slice(0, 8);

  // Healthy picks
  const healthyDishes = dishes.filter(d => 
    d.tags.includes('High Protein') || d.tags.includes('Weight Loss') || d.tags.includes('Gut Friendly')
  ).slice(0, 6);

  // Street food
  const streetFoodDishes = dishes.filter(d => 
    d.category.includes('Street Food') || d.category.includes('Snacks & Chaat')
  ).slice(0, 6);

  // Recently viewed objects
  const recentObjects = recentlyViewed
    .map(id => dishes.find(d => d.id === id))
    .filter(Boolean) as typeof dishes;

  return (
    <div className="min-h-screen pb-20">
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-8 pb-10 bg-gradient-to-b from-[#FFF5ED] via-[#FFFDF9] to-transparent dark:from-[#25180E] dark:via-[#1A120B] dark:to-transparent border-b border-[#E8620C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-8">
            <img
              src="/brand-logo.svg"
              alt="Bharat Ki Thali — Created by Suraj Rai"
              className="w-full max-w-[520px] h-auto mx-auto mb-5 drop-shadow-sm"
            />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8620C]/10 border border-[#E8620C]/25 text-[#E8620C] text-xs font-bold mb-4 tracking-wide">
              <span>🇮🇳</span>
              <span>{isHindi ? 'भारत का प्रीमियम रेसिपी एवं थाली प्लैटफ़ॉर्म' : 'Indias Authentic Recipe Platform'}</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#24180E] dark:text-[#FFFDF9] tracking-tight leading-tight">
              {isHindi ? 'नमस्ते! क्या खाने का मन है?' : 'Namaste! Craving Authentic Indian Food?'}
            </h1>
            
            <p className="mt-3 text-sm sm:text-base text-[#7B6E65] dark:text-[#B5A599] max-w-xl mx-auto font-medium">
              {isHindi 
                ? 'कश्मीर से कन्याकुमारी तक — 60+ प्रामाणिक रेसिपीज़, पोषण जानकारी, सामग्री स्केलिंग और AI शेफ।'
                : 'Discover 60+ authentic regional dishes, nutrition breakdowns, dynamic portion scaling and your personal AI Chef.'}
            </p>

            {/* Smart Search Bar */}
            <form onSubmit={handleSearchSubmit} className="mt-6 relative max-w-2xl mx-auto">
              <div className="relative flex items-center shadow-lg shadow-[#E8620C]/10 rounded-2xl overflow-hidden bg-white dark:bg-[#251D16] border border-stone-200 dark:border-stone-700/80 focus-within:border-[#E8620C] transition-all">
                <Search className="w-5 h-5 text-stone-400 ml-4 shrink-0" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder={isHindi ? 'रेसिपी, सामग्री, या राज्य खोजें (जैसे: पोहा, पनीर, पंजाब)...' : 'Search dishes, ingredients, or states (e.g., Poha, Paneer, Punjab)...'}
                  className="w-full py-3.5 sm:py-4 px-3 text-sm sm:text-base bg-transparent text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none"
                />
                
                {/* Voice Search Button */}
                <button
                  type="button"
                  onClick={handleVoiceSearch}
                  className={`p-2.5 mr-2 rounded-xl text-stone-500 hover:text-[#E8620C] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ${
                    isListening ? 'text-red-500 animate-pulse' : ''
                  }`}
                  title="Search with Voice (बोलकर खोजें)"
                >
                  {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>

                {/* Submit Search Button */}
                <button
                  type="submit"
                  className="mr-1.5 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#E8620C] text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-orange-600 transition-colors shrink-0 shadow-sm"
                >
                  {isHindi ? 'खोजें' : 'Search'}
                </button>
              </div>
            </form>

            {/* Quick Keyword Pills */}
            <div className="mt-3 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap text-xs">
              <span className="text-stone-400 font-medium">{isHindi ? 'सुझाव:' : 'Try:'}</span>
              {['Poha', 'Rajma Chawal', 'Idli Sambar', 'Paneer', 'High Protein', 'Breakfast'].map((chip) => (
                <button
                  key={chip}
                  onClick={() => setQuickSearch(chip)}
                  className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-[#E8620C]/10 hover:text-[#E8620C] border border-stone-200/60 dark:border-stone-700/60 transition-colors font-medium"
                >
                  {chip}
                </button>
              ))}
            </div>

          </div>

          {/* Quick Categories Bar */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.cat}
                onClick={() => setQuickFilter('category', cat.cat)}
                className="group flex flex-col items-center p-3 rounded-2xl bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 hover:border-[#E8620C] shadow-xs hover:shadow-md transition-all text-center"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white text-xl shadow-xs group-hover:scale-110 transition-transform mb-2`}>
                  <span>{cat.icon}</span>
                </div>
                <span className="font-heading font-bold text-xs text-stone-800 dark:text-stone-200 group-hover:text-[#E8620C] transition-colors">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* APK & PWA Android App Download Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#E8620C] via-[#F4813F] to-[#F4B400] text-white p-5 sm:p-7 shadow-xl shadow-[#E8620C]/20 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner shrink-0 hidden sm:flex">
              📱
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-extrabold uppercase tracking-wider mb-1">
                <span>Android App Available</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl">
                {isHindi ? 'भारत की थाली Android APK डाउनलोड करें' : 'Download Bharat Ki Thali Android App (.apk)'}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-xl">
                {isHindi 
                  ? 'अपने फोन में 100% ऑफलाइन रेसिपीज़, कुकिंग टाइमर और शॉपिंग लिस्ट का आनंद लें — बिना इंटरनेट के!'
                  : 'Install natively on your Android device for 100% offline recipes, cooking timers, and shopping lists.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setIsApkModalOpen(true)}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-2xl bg-white text-[#E8620C] font-extrabold text-xs sm:text-sm shadow-md hover:bg-stone-50 flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{isHindi ? 'APK डाउनलोड करें' : 'Download APK'}</span>
            </button>
            <button
              onClick={() => setIsSurpriseModalOpen(true)}
              className="p-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors"
              title="Surprise Me (आज क्या खाएं?)"
            >
              <Dices className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Today's Special Signature Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-bold text-[#E8620C] uppercase tracking-wider">
              {isHindi ? 'आज का विशेष' : "Chef's Recommendation"}
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
              {isHindi ? 'आज का स्पेशल व्यंजन 🌟' : "Today's Signature Dish 🌟"}
            </h2>
          </div>
        </div>

        <div 
          onClick={() => viewDish(todaysSpecial)}
          className="relative rounded-3xl overflow-hidden bg-stone-900 text-white shadow-xl cursor-pointer group"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img 
              src={todaysSpecial.image} 
              alt={todaysSpecial.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8620C] text-white">
                {todaysSpecial.state || todaysSpecial.region}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-xs">
                {todaysSpecial.totalTimeMinutes} mins
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-600/90 text-white backdrop-blur-xs">
                {todaysSpecial.nutrition.calories} kcal • {todaysSpecial.nutrition.protein}g protein
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
              {todaysSpecial.name} ({todaysSpecial.nameHindi})
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-2xl line-clamp-2">
              {isHindi && todaysSpecial.descriptionHindi ? todaysSpecial.descriptionHindi : todaysSpecial.description}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#24180E] font-bold text-xs sm:text-sm group-hover:bg-[#E8620C] group-hover:text-white transition-colors">
                <span>{isHindi ? 'पूरी रेसिपी देखें' : 'View Full Recipe'}</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Recipes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#E8620C]" />
              <span>{isHindi ? 'लोकप्रिय व्यंजन (Trending Recipes)' : 'Trending Authentic Recipes'}</span>
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              {isHindi ? 'घर-घर में सबसे ज्यादा पसंद की जाने वाली रेसिपीज' : 'The most loved and prepared dishes across India'}
            </p>
          </div>

          <button
            onClick={() => setActivePage('explore')}
            className="text-xs font-bold text-[#E8620C] hover:underline flex items-center gap-1"
          >
            <span>{isHindi ? 'सभी देखें' : 'View All'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trendingDishes.map((dish) => (
            <RecipeCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* Explore India by Region Preview Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#E8620C]" />
              <span>{isHindi ? 'भारत का क्षेत्रीय स्वाद (Regional India)' : 'Explore Regional Flavors'}</span>
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              {isHindi ? 'हर राज्य की अपनी खास पाक कला और संस्कृति' : 'Taste the distinctive culinary heritage of every Indian state'}
            </p>
          </div>

          <button
            onClick={() => setActivePage('regions')}
            className="text-xs font-bold text-[#E8620C] hover:underline flex items-center gap-1"
          >
            <span>{isHindi ? 'सभी राज्य' : 'All States'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {indianStatesData.slice(0, 6).map((st) => (
            <div
              key={st.id}
              onClick={() => {
                setQuickFilter('state', st.name);
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-900 cursor-pointer shadow-sm hover:shadow-lg transition-all"
            >
              <img 
                src={st.image} 
                alt={st.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider block">
                  {st.region}
                </span>
                <h4 className="font-heading font-bold text-sm sm:text-base leading-tight">
                  {st.name}
                </h4>
                <p className="text-[11px] text-stone-300 font-medium">
                  {st.nameHindi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Healthy Picks Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{isHindi ? 'पौष्टिक एवं स्वास्थ्यप्रद (Healthy Picks)' : 'Healthy & High Nutrition'}</span>
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              {isHindi ? 'हाई प्रोटीन, लो कैलोरी और सुपाच्य भारतीय भोजन' : 'High protein, low-calorie, and gut-friendly everyday recipes'}
            </p>
          </div>

          <button
            onClick={() => {
              setQuickFilter('healthTag', 'High Protein');
            }}
            className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1"
          >
            <span>{isHindi ? 'हाई प्रोटीन देखें' : 'View High Protein'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {healthyDishes.map((dish) => (
            <RecipeCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* Festival Foods Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-rose-500/10 border border-amber-500/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold text-[#E8620C] uppercase tracking-wider">
                {isHindi ? 'त्योहारों के पारंपरिक पकवान' : 'Festive Tradition'}
              </span>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
                {isHindi ? 'उत्सव एवं त्योहारों का स्वाद 🪔' : 'Festival Foods of India 🪔'}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {festivalsList.slice(0, 4).map((fest) => (
              <div
                key={fest.id}
                onClick={() => setQuickFilter('festival', fest.name)}
                className="group p-4 rounded-2xl bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 hover:border-[#E8620C] cursor-pointer shadow-xs hover:shadow-md transition-all"
              >
                <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">
                  {fest.emoji}
                </span>
                <h4 className="font-heading font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                  {fest.name}
                </h4>
                <p className="text-xs text-[#E8620C] font-semibold mt-0.5">
                  {fest.nameHindi}
                </p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">
                  {isHindi ? fest.descriptionHindi : fest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Street Food Cravings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
              {isHindi ? 'चटपटा स्ट्रीट फूड (Street Food Delights) 🥟' : 'Street Food Cravings 🥟'}
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              {isHindi ? 'मुंबई वड़ा पाव, मोमोज, ढोकला, और चटपटी चाट' : 'Vada Pav, Momos, Khaman Dhokla, and iconic Indian street snacks'}
            </p>
          </div>

          <button
            onClick={() => setQuickFilter('category', 'Street Food')}
            className="text-xs font-bold text-[#E8620C] hover:underline flex items-center gap-1"
          >
            <span>{isHindi ? 'सभी स्ट्रीट फूड' : 'View Street Food'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {streetFoodDishes.map((dish) => (
            <RecipeCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* Recently Viewed Recipes */}
      {recentObjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100">
              {isHindi ? 'हाल ही में देखे गए व्यंजन (Recently Viewed)' : 'Recently Viewed'}
            </h2>
            <button
              onClick={clearRecentlyViewed}
              className="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              {isHindi ? 'हटाएं' : 'Clear'}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {recentObjects.slice(0, 6).map((dish) => (
              <div
                key={dish.id}
                onClick={() => viewDish(dish)}
                className="p-2 rounded-2xl bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 hover:border-[#E8620C] cursor-pointer shadow-xs transition-all"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-2">
                  <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-heading font-bold text-xs text-stone-900 dark:text-stone-100 line-clamp-1">
                  {dish.name}
                </h4>
                <p className="text-[10px] text-stone-500 dark:text-stone-400">
                  {dish.totalTimeMinutes}m • {dish.nutrition.calories} kcal
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

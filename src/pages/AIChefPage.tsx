import React, { useState, useRef, useEffect } from 'react';
import { Send, User, RotateCcw, Lightbulb, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Dish } from '../types';
import { getPrimaryFoodCategory } from '../services/foodTaxonomy';

interface ChatMessage {
  id: string;
  sender: 'user' | 'chef';
  text: string;
  recommendedDishes?: string[];
  timestamp: number;
}

const normalize = (value: string) => value.toLowerCase().trim();

const localSearch = (query: string, dishes: Dish[], limit = 3) => {
  const q = normalize(query);
  const terms = q.split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return dishes
    .map(dish => {
      const haystack = [
        dish.id, dish.name, dish.nameHindi, dish.description, dish.descriptionHindi,
        dish.state, dish.region, getPrimaryFoodCategory(dish),
        ...(dish.cuisine || []), ...(dish.tags || []), ...(dish.ingredients || []).map(i => i.name)
      ].join(' ').toLowerCase();
      const exact = haystack.includes(q) ? 10 : 0;
      const score = exact + terms.reduce((n, term) => n + (haystack.includes(term) ? 1 : 0), 0);
      return { dish, score };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score || (b.dish.popularity || 0) - (a.dish.popularity || 0))
    .slice(0, limit)
    .map(x => x.dish);
};

export const AIChefPage: React.FC = () => {
  const { dishes, viewDish, settings, showToast } = useApp();
  const isHindi = settings.language === 'hi';
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome', sender: 'chef',
      text: isHindi
        ? 'नमस्ते! 🙏 मैं Bharat Ki Thali AI Chef हूँ। किसी एक dish, ingredient, recipe या cooking step के बारे में पूछें। मैं उसी सवाल पर जवाब दूँगा।'
        : 'Namaste! 🙏 I am the Bharat Ki Thali AI Chef. Ask about one dish, ingredient, recipe, or cooking step and I will stay focused on that question.',
      recommendedDishes: [], timestamp: Date.now()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isLoading]);

  const promptChips = [
    isHindi ? 'रोटी की रेसिपी बताओ' : 'Give me a roti recipe',
    isHindi ? 'पनीर से क्या बनाएं?' : 'What can I make with paneer?',
    isHindi ? 'राजमा कैसे बनाएं?' : 'How do I cook rajma?',
    isHindi ? 'बिरयानी की सामग्री बताओ' : 'Show biryani ingredients'
  ];

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = (queryText || inputMessage).trim();
    if (!textToSend || isLoading) return;
    const userMsg: ChatMessage = { id: `user-${Date.now()}`, sender: 'user', text: textToSend, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend, history: [...messages, userMsg].slice(-6).map(m => ({ sender: m.sender, text: m.text })) })
      });
      if (!response.ok) throw new Error(`AI server ${response.status}`);
      const data = await response.json();
      const detected = Array.isArray(data.recommendedDishes) ? data.recommendedDishes.filter((id: string) => dishes.some(d => d.id === id)) : [];
      setMessages(prev => [...prev, { id: `chef-${Date.now()}`, sender: 'chef', text: data.text || 'इस सवाल का सीधा उत्तर उपलब्ध नहीं है।', recommendedDishes: detected.slice(0, 3), timestamp: Date.now() }]);
    } catch (err) {
      console.warn('AI Chef server unavailable; using local catalog:', err);
      const local = localSearch(textToSend, dishes, 3);
      const isRoti = /\broti\b|रोटी|phulka|फुल्का|paratha|पराठा|naan|नान|kulcha|कुलचा/i.test(textToSend);
      const categoryMatches = isRoti ? dishes.filter(d => getPrimaryFoodCategory(d) === 'Roti & Bread').slice(0, 3) : local;
      const ids = categoryMatches.map(d => d.id);
      const text = categoryMatches.length
        ? (isHindi
          ? `आपके सवाल “${textToSend}” के लिए ${categoryMatches.map(d => d.nameHindi || d.name).join(', ')} संबंधित विकल्प मिले। किसी एक पर टैप करके पूरी विधि देखें।`
          : `For “${textToSend}”, I found: ${categoryMatches.map(d => d.name).join(', ')}. Tap a dish for the full recipe.`)
        : (isHindi
          ? `“${textToSend}” के लिए हमारे catalog में अभी सीधा match नहीं मिला। कृपया किसी dish, ingredient या cooking step का नाम लिखें।`
          : `I could not find a direct catalog match for “${textToSend}”. Try a dish, ingredient, or cooking step.`);
      setMessages(prev => [...prev, { id: `chef-${Date.now()}`, sender: 'chef', text, recommendedDishes: ids, timestamp: Date.now() }]);
    } finally { setIsLoading(false); }
  };

  return (
    <div className="min-h-screen py-6 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#173B2F] shadow-md"><img src="/icon.svg" alt="Bharat Ki Thali AI Chef" className="w-full h-full object-cover" /></div>
          <div><div className="flex items-center gap-2"><h1 className="font-heading font-extrabold text-xl sm:text-2xl">{isHindi ? 'AI शेफ' : 'AI Chef'}</h1><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8620C]/15 text-[#E8620C]">Focused AI</span></div><p className="text-xs text-stone-500">{isHindi ? 'आपके सवाल से बाहर नहीं जाएगा' : 'Answers stay focused on your question'}</p></div>
        </div>
        <button onClick={() => { setMessages([messages[0]]); showToast('Chat cleared'); }} className="p-2 rounded-xl text-stone-400 hover:text-stone-600" title="Reset Chat"><RotateCcw className="w-4 h-4" /></button>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4"><span className="text-xs font-semibold text-amber-500 flex items-center gap-1 shrink-0"><Lightbulb className="w-3.5 h-3.5" />Suggestions</span>{promptChips.map((chip, idx) => <button key={idx} onClick={() => handleSendMessage(chip)} className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#251D16] border border-stone-200 dark:border-stone-800 text-xs font-medium whitespace-nowrap">{chip}</button>)}</div>
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
        {messages.map(msg => <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
          {msg.sender === 'chef' && <div className="w-8 h-8 rounded-full bg-[#E8620C] text-white flex items-center justify-center shrink-0 mt-1">🍛</div>}
          <div className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 shadow-xs ${msg.sender === 'user' ? 'bg-[#E8620C] text-white rounded-tr-none' : 'bg-white dark:bg-[#251D16] border border-stone-200 dark:border-stone-800 rounded-tl-none'}`}>
            <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-medium">{msg.text}</div>
            {msg.recommendedDishes?.length ? <div className="mt-4 pt-3 border-t border-stone-200/60 space-y-2"><p className="text-[11px] font-bold text-[#E8620C] uppercase">Related recipes</p>{msg.recommendedDishes.map(id => { const d = dishes.find(x => x.id === id); if (!d) return null; return <div key={id} onClick={() => viewDish(d)} className="flex items-center justify-between p-2 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 cursor-pointer"><div className="flex items-center gap-2.5"><img src={d.image} alt={d.name} className="w-10 h-10 rounded-lg object-cover" /><div><p className="text-xs font-bold">{d.name}</p><p className="text-[10px] text-stone-500">{getPrimaryFoodCategory(d)} • {d.totalTimeMinutes}m</p></div></div><ArrowRight className="w-3.5 h-3.5 text-[#E8620C]" /></div>;})}</div> : null}
          </div>
          {msg.sender === 'user' && <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center shrink-0 mt-1"><User className="w-4 h-4" /></div>}
        </div>)}
        {isLoading && <div className="flex gap-3"><div className="w-8 h-8 rounded-full bg-[#E8620C] text-white flex items-center justify-center">🍛</div><div className="bg-white dark:bg-[#251D16] border rounded-3xl p-4 text-xs text-stone-500">AI Chef is thinking…</div></div>}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={e => { e.preventDefault(); handleSendMessage(); }} className="relative flex items-center bg-white dark:bg-[#251D16] border border-stone-200 rounded-2xl shadow-sm p-1.5 focus-within:border-[#E8620C]">
        <input type="text" value={inputMessage} onChange={e => setInputMessage(e.target.value)} placeholder={isHindi ? 'जैसे: रोटी की रेसिपी बताओ…' : 'Example: Give me a roti recipe…'} className="flex-1 py-3 px-4 text-xs sm:text-sm bg-transparent focus:outline-none" />
        <button type="submit" disabled={!inputMessage.trim() || isLoading} className="p-3 bg-[#E8620C] text-white rounded-xl disabled:opacity-40"><Send className="w-4 h-4" /></button>
      </form>
      <div className="text-center text-[10px] text-stone-400 mt-3">Created by Suraj Rai</div>
    </div>
  );
};

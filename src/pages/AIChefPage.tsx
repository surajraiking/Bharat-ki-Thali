import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ChefHat, 
  RotateCcw, 
  Lightbulb, 
  ArrowRight,
  Flame,
  Clock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Dish } from '../types';

interface ChatMessage {
  id: string;
  sender: 'user' | 'chef';
  text: string;
  recommendedDishes?: string[];
  timestamp: number;
}

export const AIChefPage: React.FC = () => {
  const { dishes, viewDish, settings, showToast } = useApp();
  const isHindi = settings.language === 'hi';

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'chef',
      text: isHindi
        ? `नमस्ते! 🙏 मैं आपका भारत की थाली AI शेफ हूँ।\n\nआप मुझसे किसी भी रेसिपी की विधि, फ्रिज में बची सब्जियों से क्या बनाएं, या किसी खास क्षेत्र (जैसे पंजाब, महाराष्ट्र, केरल, बंगाल) के पारंपरिक स्वादों के बारे में पूछ सकते हैं!\n\n💡 *आज क्या पकाना चाहते हैं?*`
        : `Namaste! 🙏 I am your personal Bharat Ki Thali AI Chef.\n\nAsk me about authentic regional recipes, ingredient substitutions, left-over fridge ideas, or healthy meal pairings!`,
      recommendedDishes: ['poha', 'rajma', 'idli'],
      timestamp: Date.now()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const promptChips = [
    isHindi ? 'पनीर और टमाटर से क्या बनाएं?' : 'What can I cook with paneer and tomatoes?',
    isHindi ? 'हाई प्रोटीन डिनर 25 मिनट में' : 'High protein dinner under 25 mins',
    isHindi ? 'वजन घटाने के लिए हल्का नाश्ता' : 'Healthy breakfast for weight loss',
    isHindi ? 'संडे पंजाबी स्पेशल थाली' : 'Royal Punjabi Sunday Thali idea',
    isHindi ? 'गैस और पाचन के लिए क्या खाएं?' : 'Digestive and gut-friendly food options'
  ];

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend.trim() })
      });

      if (!response.ok) {
        throw new Error('Server response failed');
      }

      const data = await response.json();

      // Find any mentioned dishes from our catalog
      const detectedDishIds: string[] = data.recommendedDishes || [];
      if (detectedDishIds.length === 0) {
        dishes.forEach(d => {
          if (data.text.toLowerCase().includes(d.name.toLowerCase())) {
            detectedDishIds.push(d.id);
          }
        });
      }

      const chefMsg: ChatMessage = {
        id: `chef-${Date.now()}`,
        sender: 'chef',
        text: data.text,
        recommendedDishes: detectedDishIds.slice(0, 3),
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, chefMsg]);
    } catch (err) {
      console.warn('AI Chef fetch error:', err);
      // Fallback response
      const fallbackMsg: ChatMessage = {
        id: `chef-${Date.now()}`,
        sender: 'chef',
        text: isHindi
          ? `माफी चाहता हूँ, सर्वर से संपर्क नहीं हो पाया। लेकिन आप हमारे होम पेज से **पोहा**, **इडली**, या **राजमा** जैसी लोकप्रिय रेसिपीज़ तुरंत देख सकते हैं!`
          : `I am currently offline, but you can explore delicious recipes like Poha, Rajma Masala, and Idli Sambar directly from our catalog!`,
        recommendedDishes: ['poha', 'rajma', 'idli'],
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-6 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col justify-between">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center text-2xl shadow-md">
            🧑‍🍳
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
                {isHindi ? 'AI शेफ (Culinary Expert)' : 'AI Culinary Chef'}
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8620C]/15 text-[#E8620C]">
                Gemini 2.5
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Indian Recipes, Diet Advice & Fridge Assistant
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setMessages([messages[0]]);
            showToast('Chat cleared');
          }}
          className="p-2 rounded-xl text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
          title="Reset Chat"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4">
        <span className="text-xs font-semibold text-amber-500 flex items-center gap-1 shrink-0">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Suggestions:</span>
        </span>
        {promptChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(chip)}
            className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-[#E8620C] text-xs font-medium whitespace-nowrap shadow-xs transition-colors"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'chef' && (
              <div className="w-8 h-8 rounded-full bg-[#E8620C] text-white flex items-center justify-center shrink-0 text-sm shadow-xs mt-1">
                🍛
              </div>
            )}

            <div
              className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 shadow-xs ${
                msg.sender === 'user'
                  ? 'bg-[#E8620C] text-white rounded-tr-none'
                  : 'bg-white dark:bg-[#251D16] text-stone-900 dark:text-stone-100 border border-stone-200/80 dark:border-stone-800 rounded-tl-none'
              }`}
            >
              <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-medium">
                {msg.text}
              </div>

              {/* Recommended Dish Cards inside message */}
              {msg.recommendedDishes && msg.recommendedDishes.length > 0 && (
                <div className="mt-4 pt-3 border-t border-stone-200/60 dark:border-stone-700/60 space-y-2">
                  <p className="text-[11px] font-bold text-[#E8620C] uppercase tracking-wider">
                    Recommended Recipes:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {msg.recommendedDishes.map((dId) => {
                      const dishObj = dishes.find(d => d.id === dId);
                      if (!dishObj) return null;
                      return (
                        <div
                          key={dId}
                          onClick={() => viewDish(dishObj)}
                          className="flex items-center justify-between p-2 rounded-xl bg-stone-50 dark:bg-stone-800/80 hover:border-[#E8620C] border border-stone-200/80 dark:border-stone-700 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <img src={dishObj.image} alt={dishObj.name} className="w-10 h-10 rounded-lg object-cover" />
                            <div>
                              <p className="text-xs font-bold text-stone-900 dark:text-stone-100">
                                {dishObj.name}
                              </p>
                              <p className="text-[10px] text-stone-500">
                                {dishObj.totalTimeMinutes}m • {dishObj.nutrition.calories} kcal
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-[#E8620C] flex items-center gap-1">
                            <span>View</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 flex items-center justify-center shrink-0 text-sm mt-1">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-[#E8620C] text-white flex items-center justify-center shrink-0 text-sm shadow-xs mt-1">
              🍛
            </div>
            <div className="bg-white dark:bg-[#251D16] border border-stone-200 dark:border-stone-800 rounded-3xl rounded-tl-none p-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E8620C] animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#E8620C] animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-[#E8620C] animate-bounce [animation-delay:0.4s]" />
              <span className="text-xs text-stone-500 font-medium ml-1">AI Chef is thinking...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Message Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="relative flex items-center bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 rounded-2xl shadow-sm p-1.5 focus-within:border-[#E8620C] transition-colors"
      >
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={isHindi ? 'AI शेफ से कुछ भी पूछें (रेसिपी, सामग्री, डाइट)...' : 'Ask AI Chef anything (recipe secret, fridge ingredients, diet)...'}
          className="flex-1 py-3 px-4 text-xs sm:text-sm bg-transparent text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none"
        />

        <button
          type="submit"
          disabled={!inputMessage.trim() || isLoading}
          className="p-3 bg-[#E8620C] text-white rounded-xl disabled:opacity-40 hover:bg-orange-600 transition-colors shadow-xs"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};

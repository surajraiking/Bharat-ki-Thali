import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Trash2, 
  Share2, 
  Plus, 
  Check, 
  CheckCircle2, 
  Circle,
  Copy
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ShoppingListPage: React.FC = () => {
  const { 
    shoppingList, 
    toggleShoppingItem, 
    deleteShoppingItem, 
    clearPurchasedShoppingItems, 
    clearAllShoppingItems, 
    addCustomShoppingItem, 
    settings, 
    showToast 
  } = useApp();

  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('1');
  const [newItemUnit, setNewItemUnit] = useState('cup');

  const isHindi = settings.language === 'hi';

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      addCustomShoppingItem(newItemName.trim(), parseFloat(newItemQty) || 1, newItemUnit);
      setNewItemName('');
    }
  };

  const handleShareList = async () => {
    const unpurchased = shoppingList.filter(i => !i.purchased);
    if (unpurchased.length === 0) {
      showToast('No items to share');
      return;
    }

    const lines = [
      '🛒 *Bharat Ki Thali — Shopping List:*',
      ...unpurchased.map(i => `• ${i.name}: ${i.quantity} ${i.unit}`)
    ].join('\n');

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Bharat Ki Thali Shopping List',
          text: lines
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(lines);
      showToast('📋 Shopping list copied to clipboard!');
    }
  };

  // Group by category
  const categories = Array.from(new Set(shoppingList.map(i => i.category || 'Groceries')));
  const completedCount = shoppingList.filter(i => i.purchased).length;

  return (
    <div className="min-h-screen py-8 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8620C]/10 text-[#E8620C] text-xs font-bold mb-2">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>{isHindi ? 'किराने की सूची' : 'Ingredient Checklist'}</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-stone-900 dark:text-stone-100">
            {isHindi ? 'शॉपिंग लिस्ट' : 'Shopping List'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1">
            {shoppingList.length} items total • {completedCount} purchased
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {shoppingList.length > 0 && (
            <>
              <button
                onClick={handleShareList}
                className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-[#E8620C] text-xs font-bold flex items-center gap-1.5 transition-colors"
                title="Share or Copy List"
              >
                <Share2 className="w-4 h-4 text-[#E8620C]" />
                <span className="hidden sm:inline">Share</span>
              </button>

              <button
                onClick={clearPurchasedShoppingItems}
                className="p-2.5 sm:px-4 sm:py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:text-red-500 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Clear Bought</span>
              </button>

              <button
                onClick={clearAllShoppingItems}
                className="p-2.5 sm:px-3 sm:py-2.5 rounded-xl text-stone-400 hover:text-red-500 transition-colors"
                title="Clear All"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Add Custom Item Form */}
      <form onSubmit={handleAddCustom} className="mb-8 p-4 rounded-3xl bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 shadow-xs flex items-center gap-2 sm:gap-3 flex-wrap">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder={isHindi ? 'नया सामान लिखें (उदा. धनिया, सरसों का तेल)...' : 'Add custom item (e.g. Mustard oil, Coriander)...'}
          className="flex-1 py-2 px-3 text-xs sm:text-sm bg-stone-100 dark:bg-stone-800 rounded-xl text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#E8620C]"
        />

        <input
          type="number"
          value={newItemQty}
          onChange={(e) => setNewItemQty(e.target.value)}
          min="0.1"
          step="0.5"
          className="w-16 py-2 px-2 text-xs sm:text-sm bg-stone-100 dark:bg-stone-800 rounded-xl text-stone-900 dark:text-stone-100 text-center focus:outline-none"
        />

        <select
          value={newItemUnit}
          onChange={(e) => setNewItemUnit(e.target.value)}
          className="py-2 px-2 text-xs sm:text-sm bg-stone-100 dark:bg-stone-800 rounded-xl text-stone-900 dark:text-stone-100 focus:outline-none"
        >
          <option value="cup">cup</option>
          <option value="tbsp">tbsp</option>
          <option value="tsp">tsp</option>
          <option value="grams">grams</option>
          <option value="kg">kg</option>
          <option value="piece">piece</option>
          <option value="pack">pack</option>
        </select>

        <button
          type="submit"
          className="p-2 sm:px-4 sm:py-2 bg-[#E8620C] text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-orange-600 transition-colors flex items-center gap-1 shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add</span>
        </button>
      </form>

      {/* Shopping List Items */}
      {shoppingList.length > 0 ? (
        <div className="space-y-6">
          {categories.map((cat) => {
            const items = shoppingList.filter(i => (i.category || 'Groceries') === cat);
            if (items.length === 0) return null;

            return (
              <div key={cat} className="bg-white dark:bg-[#251D16] border border-stone-200/80 dark:border-stone-800 rounded-3xl p-5 shadow-xs">
                <h3 className="font-heading font-bold text-sm text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3">
                  {cat}
                </h3>

                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleShoppingItem(item.id)}
                      className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-colors ${
                        item.purchased
                          ? 'bg-stone-50 dark:bg-stone-800/40 opacity-60'
                          : 'bg-stone-50 dark:bg-stone-800/80 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.purchased ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-stone-300 dark:text-stone-600 shrink-0" />
                        )}
                        <div>
                          <p className={`text-sm font-semibold text-stone-900 dark:text-stone-100 ${
                            item.purchased ? 'line-through text-stone-400' : ''
                          }`}>
                            {item.name}
                          </p>
                          {item.dishName && (
                            <p className="text-[10px] text-[#E8620C]">
                              For: {item.dishName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 px-2 py-1 rounded-lg border border-stone-200 dark:border-stone-700">
                          {item.quantity} {item.unit}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteShoppingItem(item.id);
                          }}
                          className="text-stone-400 hover:text-red-500 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white dark:bg-[#251D16] rounded-3xl border border-stone-200/80 dark:border-stone-800">
          <div className="w-16 h-16 mx-auto rounded-full bg-orange-500/10 text-[#E8620C] flex items-center justify-center text-3xl mb-4">
            🛒
          </div>
          <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-stone-100">
            {isHindi ? 'आपकी शॉपिंग लिस्ट खाली है' : 'Your Shopping List is Empty'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-sm mx-auto">
            {isHindi 
              ? 'किसी भी रेसिपी कार्ड या थाली से "Add to Shopping List" पर क्लिक करके सामग्री जोड़ें।'
              : 'Add ingredients directly from any recipe page, or type custom items using the box above.'}
          </p>
        </div>
      )}

    </div>
  );
};

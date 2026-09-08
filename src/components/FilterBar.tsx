import React from 'react';
import { Category, HealthTag, Region } from '../types';
import { CATEGORIES, HEALTH_GOALS, REGIONS } from '../data/dishes';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  selectedHealthGoal: HealthTag | null;
  onSelectHealthGoal: (goal: HealthTag | null) => void;
  selectedRegion: Region | 'All';
  onSelectRegion: (reg: Region | 'All') => void;
  sortBy: 'popular' | 'calories-low' | 'protein-high' | 'quickest';
  onSortChange: (sort: 'popular' | 'calories-low' | 'protein-high' | 'quickest') => void;
  onResetFilters: () => void;
  totalFilteredCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedHealthGoal,
  onSelectHealthGoal,
  selectedRegion,
  onSelectRegion,
  sortBy,
  onSortChange,
  onResetFilters,
  totalFilteredCount,
}) => {
  const isFiltered = selectedCategory !== 'All' || selectedHealthGoal !== null || selectedRegion !== 'All' || sortBy !== 'popular';

  return (
    <div className="border-b border-stone-200 bg-stone-50/70 dark:border-stone-800 dark:bg-stone-900/50 py-3">
      <div className="mx-auto max-w-6xl px-4 space-y-3">
        {/* Category horizontal scrolling tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-btn-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition select-none ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs dark:bg-emerald-600 dark:text-white'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-300'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.hindiLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Health Goals Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-stone-400 pl-0.5">
            स्वास्थ्य लक्ष्य:
          </span>
          {HEALTH_GOALS.map((goal) => {
            const isSelected = selectedHealthGoal === goal.id;
            return (
              <button
                key={goal.id}
                id={`goal-btn-${goal.id}`}
                onClick={() => onSelectHealthGoal(isSelected ? null : goal.id)}
                className={`shrink-0 rounded-lg px-2.5 py-1 text-xs font-medium border transition ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-800 shadow-2xs font-semibold'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-300'
                }`}
              >
                {goal.hindiLabel} ({goal.label})
              </button>
            );
          })}
        </div>

        {/* Sort, Region and Results Counter bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-stone-600 dark:text-stone-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-900 dark:text-white">
              कुल व्यंजन: <span className="text-emerald-600 dark:text-emerald-400">{totalFilteredCount}</span>
            </span>

            {isFiltered && (
              <button
                id="reset-filters-btn"
                onClick={onResetFilters}
                className="flex items-center gap-1 rounded-md bg-stone-200/70 px-2 py-0.5 text-[11px] font-semibold text-stone-700 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-300 transition"
              >
                <RotateCcw className="h-3 w-3" />
                रीसेट करें
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Region Dropdown */}
            <select
              id="region-filter-select"
              value={selectedRegion}
              onChange={(e) => onSelectRegion(e.target.value as Region | 'All')}
              className="rounded-lg border border-stone-200 bg-white px-2 py-1 text-xs text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300"
            >
              <option value="All">सभी क्षेत्र (All Regions)</option>
              {REGIONS.map((reg) => (
                <option key={reg} value={reg}>{reg}</option>
              ))}
            </select>

            {/* Sort Dropdown */}
            <select
              id="sort-filter-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as any)}
              className="rounded-lg border border-stone-200 bg-white px-2 py-1 text-xs text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300"
            >
              <option value="popular">लोकप्रिय (Default)</option>
              <option value="calories-low">कम कैलोरी (Low Calorie)</option>
              <option value="protein-high">अधिक प्रोटीन (High Protein)</option>
              <option value="quickest">कम समय में (Quickest)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

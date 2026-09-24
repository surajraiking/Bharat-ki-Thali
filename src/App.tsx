import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { RegionsPage } from './pages/RegionsPage';
import { ThaliBuilderPage } from './pages/ThaliBuilderPage';
import { MealPlannerPage } from './pages/MealPlannerPage';
import { ShoppingListPage } from './pages/ShoppingListPage';
import { AIChefPage } from './pages/AIChefPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { SettingsPage } from './pages/SettingsPage';
import { RecipeModal } from './components/RecipeModal';
import { CookingModeModal } from './components/CookingModeModal';
import { ApkDownloadModal } from './components/ApkDownloadModal';
import { SurpriseMeModal } from './components/SurpriseMeModal';

const AppContent: React.FC = () => {
  const { activePage, toastMessage } = useApp();

  return (
    <div className="min-h-screen bg-[#FFFDF9] dark:bg-[#1C140E] text-[#24180E] dark:text-[#FDF8F3] font-body transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="pb-16 lg:pb-8">
        {activePage === 'home' && <HomePage />}
        {activePage === 'explore' && <ExplorePage />}
        {activePage === 'regions' && <RegionsPage />}
        {activePage === 'thali-builder' && <ThaliBuilderPage />}
        {activePage === 'meal-planner' && <MealPlannerPage />}
        {activePage === 'shopping-list' && <ShoppingListPage />}
        {activePage === 'ai-chef' && <AIChefPage />}
        {activePage === 'favorites' && <FavoritesPage />}
        {activePage === 'settings' && <SettingsPage />}
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />

      {/* Global Interactive Modals */}
      <RecipeModal />
      <CookingModeModal />
      <ApkDownloadModal />
      <SurpriseMeModal />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-20 lg:bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-2xl bg-[#24180E]/95 dark:bg-[#FDF8F3]/95 text-white dark:text-[#24180E] text-xs sm:text-sm font-semibold shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

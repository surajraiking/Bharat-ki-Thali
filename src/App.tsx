import React, { useEffect } from 'react';
import { App as CapacitorApp } from '@capacitor/app';
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
import { CreatorCredit } from './components/CreatorCredit';

const AppContent: React.FC = () => {
  const {
    activePage,
    toastMessage,
    selectedDish,
    setSelectedDish,
    cookingDish,
    setCookingDish,
    isApkModalOpen,
    setIsApkModalOpen,
    isSurpriseModalOpen,
    setIsSurpriseModalOpen,
    navigate
  } = useApp();

  useEffect(() => {
    let listener: { remove: () => Promise<void> } | null = null;

    const setupBackButton = async () => {
      listener = await CapacitorApp.addListener('backButton', ({ canGoBack }) => {
        // Close the top-most overlay first; never leave the current page for a modal action.
        if (cookingDish) {
          setCookingDish(null);
          return;
        }
        if (selectedDish) {
          setSelectedDish(null);
          if (window.location.pathname.startsWith('/recipe/')) window.history.back();
          return;
        }
        if (isApkModalOpen) {
          setIsApkModalOpen(false);
          return;
        }
        if (isSurpriseModalOpen) {
          setIsSurpriseModalOpen(false);
          return;
        }

        // Android rule: navigate backward everywhere except Home. Only Home is allowed to exit.
        if (activePage !== 'home' || window.location.pathname !== '/') {
          if (canGoBack && window.history.length > 1) {
            window.history.back();
          } else {
            navigate('/', true);
          }
          return;
        }

        CapacitorApp.exitApp();
      });
    };

    setupBackButton();
    return () => {
      listener?.remove();
    };
  }, [activePage, selectedDish, cookingDish, isApkModalOpen, isSurpriseModalOpen, setSelectedDish, setCookingDish, setIsApkModalOpen, setIsSurpriseModalOpen, navigate]);

  return (
    <div className="thali-3d-app min-h-screen bg-[#FFFDF9] dark:bg-[#1C140E] text-[#24180E] dark:text-[#FDF8F3] font-body transition-colors duration-200">
      <Navbar />
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
      <CreatorCredit />
      <BottomNav />
      <RecipeModal />
      <CookingModeModal />
      <ApkDownloadModal />
      <SurpriseMeModal />
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

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { KvsSpecials } from './components/KvsSpecials';
import { CravingCategories } from './components/CravingCategories';
import { MenuExplorer } from './components/MenuExplorer';
import { NonVegFeature } from './components/NonVegFeature';
import { VegFeature } from './components/VegFeature';
import { MealsBiryani } from './components/MealsBiryani';
import { Desserts } from './components/Desserts';
import { Gallery } from './components/Gallery';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { MenuCategory } from './types';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');

  const handleCategorySelect = (category: MenuCategory) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-[#061a14] text-[#fbf8f2] flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#061a14]">
      {/* Sticky Header Navigation */}
      <Navbar onNavigateToCategory={handleCategorySelect} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero */}
        <Hero />

        {/* 2. Quick Information / Trust Strip */}
        <TrustStrip />

        {/* 3. About Hotel Kumara Vilas */}
        <About />

        {/* 4. Signature KVS Specials */}
        <KvsSpecials />

        {/* 5. What Are You Craving? */}
        <CravingCategories onSelectCategory={handleCategorySelect} />

        {/* 6. Complete Interactive Menu Explorer */}
        <MenuExplorer
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* 7. Chicken & Mutton Bold Feature */}
        <NonVegFeature onSelectCategory={handleCategorySelect} />

        {/* 8. Vegetarian Favorites */}
        <VegFeature onSelectCategory={handleCategorySelect} />

        {/* 9. Hearty Meals & Seeraga Samba Biryani */}
        <MealsBiryani onSelectCategory={handleCategorySelect} />

        {/* 10. Desserts */}
        <Desserts onSelectCategory={handleCategorySelect} />

        {/* 11. Visual Culinary Gallery */}
        <Gallery />

        {/* 12. Instagram Feed */}
        <InstagramSection />

        {/* 13. Location in Sundarapuram */}
        <LocationSection />

        {/* 14. Contact CTA */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar />
    </div>
  );
}

export default App;

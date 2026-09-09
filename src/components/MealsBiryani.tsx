import React from 'react';
import { Sparkles, Utensils, ArrowRight } from 'lucide-react';
import { MenuCategory } from '../types';
import { getAssetUrl } from '../data/menu';
import { ImageWithFallback } from './ImageWithFallback';

interface MealsBiryaniProps {
  onSelectCategory: (cat: MenuCategory) => void;
}

export const MealsBiryani: React.FC<MealsBiryaniProps> = ({ onSelectCategory }) => {
  const biryaniList = [
    { name: 'Mutton Biryani', desc: 'Seeraga Samba rice dum cooked with juicy succulent tender lamb cuts.' },
    { name: 'Mutton Chukka Biryani', desc: 'Aromatic dum rice crowned with hot pan-roasted peppery dry mutton chukka.' },
    { name: 'Chicken Biryani', desc: 'Traditional Kongu-style dum cooked chicken biryani rich with fresh mint and ghee.' },
    { name: 'Glima Biryani', desc: 'Specialty layered spiced recipe with deep aromatic complexity.' },
    { name: 'Egg Biryani', desc: 'Fragrant Seeraga Samba spiced rice with roasted seasoned farm eggs.' },
    { name: 'Plain Biryani (Kuska)', desc: 'Richly flavoured biryani rice cooked in aromatic broth.' },
  ];

  const handleMealsClick = () => {
    onSelectCategory('Meals');
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBiryaniClick = () => {
    onSelectCategory('Biryani');
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#04120e] relative border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRADITIONAL BANANA LEAF & DUM RICE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-cream tracking-tight">
            Hearty Meals. <span className="text-gold-gradient">Rich Biryani</span>.
          </h2>

          <p className="text-sm sm:text-base text-brand-cream-muted/90 max-w-2xl mx-auto">
            Experience traditional South Indian hospitality with our elaborate banana-leaf meal spreads and fragrant Seeraga Samba dum biryani.
          </p>
        </div>

        {/* Two Grand Spotlight Columns: Meals & Biryani */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Spotlight 1: Banana Leaf Meals Spread */}
          <div className="rounded-2xl bg-[#0a251d] border border-brand-gold/30 overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src={getAssetUrl('veg meals.jpg')}
                alt="Traditional South Indian Meals"
                className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a251d] via-transparent to-black/30" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#061a14]/90 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  Banana Leaf Service
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <h3 className="font-serif text-2xl font-bold text-brand-cream">
                Traditional Meals Spread
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-brand-cream-muted/90">
                <div className="p-3.5 rounded-lg bg-[#061a14] border border-brand-gold/15">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-emerald-400 uppercase tracking-wider text-xs">Veg Meals</span>
                    <span className="text-[10px] text-brand-gold font-semibold">Unlimited Gravies</span>
                  </div>
                  <p className="text-[11px] text-brand-cream-muted/80 leading-relaxed">
                    Steamed Rice, Ghee Podi, Sambar, Special Kozhambu, Rasam, Poriyal, Kootu, Pachadi, Appalam, Pickle, Curd & Sweet.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#061a14] border border-brand-gold/15">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-rose-400 uppercase tracking-wider text-xs">Non-Veg Meals</span>
                    <span className="text-[10px] text-brand-gold font-semibold">4 Distinct Kozhambus</span>
                  </div>
                  <p className="text-[11px] text-brand-cream-muted/80 leading-relaxed">
                    Steamed Rice, Thuvaiyal, Chicken Kuzhambu, Mutton Kuzhambu, Meen Kuzhambu, Special Nattu Kozhi Kuzhambu, Rasam, Poriyal, Kootu, Curd & Sweet.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleMealsClick}
                  className="w-full py-3 bg-brand-surface border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-[#061a14] rounded text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Explore Meals Menu
                </button>
              </div>
            </div>
          </div>

          {/* Spotlight 2: Seeraga Samba Biryani */}
          <div className="rounded-2xl bg-[#0a251d] border border-brand-gold/30 overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src={getAssetUrl('Mutton Biryani.jpg')}
                alt="Seeraga Samba Dum Biryani"
                className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a251d] via-transparent to-black/30" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#061a14]/90 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  Kongu Style Dum
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <h3 className="font-serif text-2xl font-bold text-brand-cream">
                Seeraga Samba Biryani
              </h3>

              {/* Grid of Biryani Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {biryaniList.map((b) => (
                  <div
                    key={b.name}
                    className="p-2.5 rounded bg-[#061a14] border border-brand-gold/10 hover:border-brand-gold/40 transition-colors"
                  >
                    <h4 className="text-xs font-bold text-brand-cream">{b.name}</h4>
                    <p className="text-[10px] text-brand-cream-muted/70 mt-0.5 line-clamp-1">{b.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={handleBiryaniClick}
                  className="w-full py-3 bg-gradient-to-r from-[#d4af37] via-[#e5c566] to-[#c5a059] text-[#061a14] rounded text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg"
                >
                  View Meals & Biryani
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

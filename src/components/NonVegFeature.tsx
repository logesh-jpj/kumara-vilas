import React from 'react';
import { Flame, ArrowRight, Sparkles } from 'lucide-react';
import { MenuCategory } from '../types';

interface NonVegFeatureProps {
  onSelectCategory: (cat: MenuCategory) => void;
}

export const NonVegFeature: React.FC<NonVegFeatureProps> = ({ onSelectCategory }) => {
  const featuredNonVeg = [
    {
      name: 'Chicken Ghee Roast',
      tag: 'KVS Special',
      desc: 'Succulent chicken roasted slowly in aromatic Byadgi chili paste and pure desi ghee.',
      category: 'Chicken Starters & Gravies' as MenuCategory,
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Mutton Ghee Roast',
      tag: 'KVS Special',
      desc: 'Tender lamb cuts seared in copious clarified butter and secret stone-ground masala.',
      category: 'Mutton Starters & Gravies' as MenuCategory,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Chicken Pallipalayam',
      tag: 'Kongu Classic',
      desc: 'Authentic rustic preparation with dried red chillies, shallots, and fresh coconut shards.',
      category: 'Chicken Starters & Gravies' as MenuCategory,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Mutton Pallipalayam',
      tag: 'Kongu Classic',
      desc: 'Tender mutton cubes dry-roasted with country shallots and fiery whole red chillies.',
      category: 'Mutton Starters & Gravies' as MenuCategory,
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Chicken Chinthamani',
      tag: 'Kongu Heirloom',
      desc: 'Legendary countryside recipe with boneless chicken pieces and caramelized shallots.',
      category: 'Chicken Starters & Gravies' as MenuCategory,
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Mutton Chukka',
      tag: 'Signature Roast',
      desc: 'Slow-roasted tender meat tossed in a dark, peppery, aromatic dry masala on iron tawa.',
      category: 'Mutton Starters & Gravies' as MenuCategory,
      image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const handleDiscoverClick = () => {
    onSelectCategory('Chicken Starters & Gravies');
    const menuEl = document.getElementById('menu');
    if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#030f0b] relative overflow-hidden border-t border-brand-gold/15">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-rose-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
              <Flame className="w-4 h-4 text-rose-400" />
              <span>NON-VEGETARIAN HERITAGE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-cream tracking-tight leading-tight">
              For Those Who Love <span className="text-gold-gradient">Bold Flavours</span>.
            </h2>

            <p className="text-sm sm:text-base text-brand-cream-muted/85 font-normal">
              Explore hearty chicken and mutton preparations, traditional gravies, signature roasts, biryani and distinctive South Indian favourites.
            </p>
          </div>

          <div>
            <button
              onClick={handleDiscoverClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-surface border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-[#061a14] rounded text-xs font-bold uppercase tracking-[0.18em] transition-all shadow-md active:scale-95"
            >
              <span>Discover Non-Veg Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Feature Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNonVeg.map((dish) => (
            <div
              key={dish.name}
              className="group relative rounded-xl bg-[#0a251d] border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a251d] via-transparent to-black/30" />
                
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#061a14]/90 border border-brand-gold/50 text-brand-gold backdrop-blur-md">
                    <Sparkles className="w-2.5 h-2.5 text-brand-gold" />
                    {dish.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-cream group-hover:text-brand-gold transition-colors">
                    {dish.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-brand-cream-muted/80 leading-relaxed">
                    {dish.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-gold/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-rose-400 font-medium">
                    Signature Non-Veg
                  </span>
                  <button
                    onClick={() => {
                      onSelectCategory(dish.category);
                      const el = document.getElementById('menu');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-brand-gold flex items-center gap-1 hover:underline"
                  >
                    <span>View in Menu</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

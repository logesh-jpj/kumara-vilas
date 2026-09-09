import React from 'react';
import { Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MenuCategory } from '../types';
import { getAssetUrl } from '../data/menu';
import { ImageWithFallback } from './ImageWithFallback';

interface VegFeatureProps {
  onSelectCategory: (cat: MenuCategory) => void;
}

export const VegFeature: React.FC<VegFeatureProps> = ({ onSelectCategory }) => {
  const vegHighlights = [
    { name: 'Ghee Podi Idly & Dosa', category: 'Idly' as MenuCategory, desc: 'Hot steaming tiffin tossed with aromatic home-ground podi and pure ghee.' },
    { name: 'Kumaravilas Paneer Ghee Roast', category: 'Veg Starters & Gravies' as MenuCategory, desc: 'Fresh paneer cubes slow roasted in fiery masala reduction.' },
    { name: 'Mushroom Pallipalayam', category: 'Veg Starters & Gravies' as MenuCategory, desc: 'Tender button mushrooms dry roasted with shallots and coconut.' },
    { name: 'Traditional Veg Meals', category: 'Meals' as MenuCategory, desc: 'Grand banana leaf feast with Sambar, Rasam, Poriyal, Kootu, and Payasam.' },
    { name: 'Crisp Uthappam Varieties', category: 'Uthappam' as MenuCategory, desc: 'Thick golden griddle pancakes loaded with onions and spices.' },
    { name: 'Paneer Butter Masala & Gravies', category: 'Veg Starters & Gravies' as MenuCategory, desc: 'Rich velvety tomato gravy with soft paneer and aromatic herbs.' },
  ];

  const handleExploreVeg = () => {
    onSelectCategory('Veg Starters & Gravies');
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#061a14] border-t border-brand-gold/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>VEGETARIAN DELIGHTS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-cream leading-tight tracking-tight">
              South Indian Favourites For <span className="text-gold-gradient">Every Table</span>.
            </h2>

            <p className="text-sm sm:text-base text-brand-cream-muted/90 leading-relaxed">
              From our beloved Ghee Podi Idly and crispy Onion Roasts to rich Paneer Ghee Roasts, Mushroom Pallipalayam, and full traditional banana leaf meals, vegetarian dining at Hotel Kumara Vilas is celebrated with equal passion.
            </p>

            {/* Veg Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {vegHighlights.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    onSelectCategory(item.category);
                    const el = document.getElementById('menu');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-3.5 rounded-lg bg-[#0a251d] border border-brand-gold/20 hover:border-emerald-500/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cream group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-[11px] text-brand-cream-muted/70 leading-snug line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={handleExploreVeg}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-700 to-emerald-900 border border-emerald-500/40 text-emerald-100 hover:brightness-110 rounded text-xs font-bold uppercase tracking-[0.18em] transition-all shadow-lg active:scale-95"
              >
                <span>Explore Veg Options</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl bg-[#0a251d]">
              <ImageWithFallback
                src={getAssetUrl('Ghee Dosa.jpg')}
                alt="South Indian Vegetarian Feast"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a14] via-transparent to-black/20" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#061a14]/95 border border-emerald-500/30 backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Pure Ghee & Fresh Produce</p>
                  <p className="font-serif text-base text-brand-cream font-bold mt-0.5">Crafted with authentic temple-style care</p>
                </div>
                <Leaf className="w-6 h-6 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

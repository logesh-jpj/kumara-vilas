import React from 'react';
import { Sparkles, Utensils, ArrowRight } from 'lucide-react';
import { KVS_SPECIALS_LIST } from '../data/menu';

// Curated high quality authentic South Indian food imagery for KVS Specials
const SPECIAL_IMAGES: Record<string, string> = {
  'idly-ghee-podi': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
  'dosa-ghee-podi-onion': 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop',
  'uthappam-ghee-podi-onion': 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=800&auto=format&fit=crop',
  'parotta-keema-stuffed': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
  'parotta-salna': 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=800&auto=format&fit=crop',
  'parotta-halwa': 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop',
  'veg-kumaravilas-paneer-ghee-roast': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
  'chicken-kumaravilas-ghee-roast': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
  'chicken-kumaravilas-special': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop',
  'mutton-kumaravilas-kothu-kari': 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  'mutton-kumaravilas-ghee-roast': 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop',
};

interface KvsSpecialsProps {
  onSelectSpecial?: (specialId: string) => void;
}

export const KvsSpecials: React.FC<KvsSpecialsProps> = () => {
  return (
    <section id="specials" className="py-24 bg-[#04120e] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0e2f25] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-gold/40 text-brand-gold text-[11px] font-bold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HALLMARK CREATIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-cream tracking-tight">
            Kumaravilas <span className="text-gold-gradient">Specials</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-cream-muted/90 max-w-2xl mx-auto">
            Discover the signature creations that give the Kumaravilas menu its distinctive character.
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {KVS_SPECIALS_LIST.map((dish) => {
            const imageUrl = SPECIAL_IMAGES[dish.id] || 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop';
            
            return (
              <div
                key={dish.id}
                className="group relative rounded-xl bg-[#0a251d] border border-brand-gold/25 hover:border-brand-gold/80 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-gold-glow flex flex-col justify-between"
              >
                {/* Dish Visual Header */}
                <div className="relative h-56 overflow-hidden bg-black/40">
                  <img
                    src={imageUrl}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a251d] via-[#0a251d]/30 to-transparent" />

                  {/* KVS Special Gold Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#061a14]/95 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-wider shadow-md backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-brand-gold" />
                      KVS Special
                    </span>
                  </div>

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3 right-3 bg-[#061a14]/90 p-1.5 rounded border border-white/10 backdrop-blur-md">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        dish.isVegetarian ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                      title={dish.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                    />
                  </div>
                </div>

                {/* Dish Information */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-muted/80">
                        {dish.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors">
                      {dish.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-brand-cream-muted/80 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div className="pt-4 border-t border-brand-gold/15 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {dish.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-brand-surface text-brand-cream-muted/90 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#menu"
                      className="text-xs font-semibold text-brand-gold group-hover:text-white flex items-center gap-1 transition-colors"
                      aria-label={`View ${dish.name} in menu`}
                    >
                      <span>Menu</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-14 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c566] to-[#c5a059] text-[#061a14] rounded font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:brightness-110 shadow-lg shadow-brand-gold/25 transition-all"
          >
            <Utensils className="w-4 h-4" />
            <span>View Full Menu</span>
          </a>
        </div>

      </div>
    </section>
  );
};

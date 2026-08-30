import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { MenuCategory } from '../types';

interface DessertsProps {
  onSelectCategory: (cat: MenuCategory) => void;
}

export const Desserts: React.FC<DessertsProps> = ({ onSelectCategory }) => {
  const dessertItems = [
    {
      name: 'Elaneer Payasam',
      badge: 'House Signature',
      desc: 'Heavenly chilled traditional payasam crafted from fresh tender coconut water, tender coconut pulp, and cardamom cream.',
      image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Elaneer Pudding',
      badge: 'Melt-in-Mouth',
      desc: 'Silky smooth gourmet dessert delicately set with fresh tender coconut cream and pure milk.',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Gulab Jamun',
      badge: 'Classic Favorite',
      desc: 'Warm, golden khoya dumplings steeped in aromatic saffron and green cardamom sugar syrup.',
      image: 'https://images.unsplash.com/photo-1605197161470-ad27928e3b3e?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-[#061a14] border-t border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
            <Heart className="w-3.5 h-3.5 text-brand-gold fill-brand-gold/20" />
            <span>SWEET TRADITION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-cream tracking-tight">
            Finish With <span className="text-gold-gradient">Something Sweet</span>.
          </h2>

          <p className="text-sm sm:text-base text-brand-cream-muted/80">
            The perfect conclusion to a hearty South Indian feast.
          </p>
        </div>

        {/* 3 Dessert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dessertItems.map((d) => (
            <div
              key={d.name}
              className="group rounded-xl bg-[#0a251d] border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden bg-black/40">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a251d] via-transparent to-black/20" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#061a14]/90 border border-brand-gold/40 text-brand-gold backdrop-blur-md">
                    {d.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors">
                    {d.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-brand-cream-muted/80 leading-relaxed">
                    {d.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-gold/10">
                  <button
                    onClick={() => {
                      onSelectCategory('Desserts');
                      const el = document.getElementById('menu');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-brand-gold hover:underline flex items-center gap-1"
                  >
                    <span>View in Menu</span>
                    <span>→</span>
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

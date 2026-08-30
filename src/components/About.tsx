import React from 'react';
import { Utensils, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#061a14] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#0a251d] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Gold Frame Border */}
              <div className="absolute -inset-3 rounded-2xl border border-brand-gold/25 translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />
              
              {/* Primary Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-brand-gold/30 bg-[#0e2f25]">
                <img
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop"
                  alt="Authentic South Indian Dining Spread at Hotel Kumara Vilas"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a14]/90 via-transparent to-black/20" />
                
                {/* Image Float Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#061a14]/90 backdrop-blur-md border border-brand-gold/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-surface border border-brand-gold flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-sm text-brand-gold">Kumaravilas Kitchen</p>
                      <p className="text-[11px] text-brand-cream/80 uppercase tracking-wider">Traditional Recipe Mastery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span>ABOUT HOTEL KUMARA VILAS</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-cream leading-[1.18] tracking-tight">
              A Taste of South India, Made to Be <span className="text-gold-gradient">Remembered</span>.
            </h2>

            {/* Body Paragraphs as specified in prompt */}
            <p className="text-base sm:text-lg text-brand-cream-muted/95 leading-relaxed font-normal">
              Hotel Kumara Vilas brings together the comforting flavours of South Indian tiffin, traditional meals, hearty non-vegetarian dishes and biryani favourites in one welcoming dining experience.
            </p>

            <p className="text-sm sm:text-base text-brand-cream-muted/80 leading-relaxed">
              From familiar classics to distinctive Kumaravilas Special creations, the menu is designed for diners who appreciate bold flavours, satisfying dishes and the character of South Indian cuisine.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-brand-cream font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Kongu & Chettinad Spicing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-brand-cream font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Pure Desi Ghee Roasts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-brand-cream font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Flaky Hand-Tossed Parottas</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-brand-cream font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Fragrant Seeraga Samba Biryani</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#e5c566] to-[#c5a059] text-[#061a14] rounded font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:brightness-110 shadow-lg shadow-brand-gold/20 transition-all"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Our Menu</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

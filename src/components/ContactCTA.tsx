import React from 'react';
import { Phone, Mail, Utensils, MapPin, ArrowRight } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#061a14] relative overflow-hidden border-t border-brand-gold/15">
      {/* Visual Ambient Glow */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-gold/40 text-brand-gold text-[11px] font-bold uppercase tracking-[0.25em]">
          <span>AUTHENTIC DINING EXPERIENCE</span>
        </div>

        {/* Main Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-brand-cream tracking-tight">
          Hungry <span className="text-gold-gradient">Yet?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-brand-cream-muted/90 max-w-2xl mx-auto font-normal leading-relaxed">
          Come enjoy authentic South Indian flavours at Hotel Kumara Vilas.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c566] to-[#c5a059] text-[#061a14] rounded font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:brightness-110 shadow-lg shadow-brand-gold/25 transition-all"
          >
            <Utensils className="w-4 h-4" />
            <span>View Menu</span>
          </a>

          <a
            href="tel:+919585544144"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded border border-brand-gold/60 bg-brand-surface text-brand-gold hover:text-white hover:border-brand-gold font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Call 9585544144</span>
          </a>
        </div>

        {/* Direct Contact Links Strip */}
        <div className="pt-8 border-t border-brand-gold/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-brand-cream-muted/90">
          <a
            href="tel:+919585441445"
            className="inline-flex items-center gap-2 text-brand-gold hover:underline font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span>Alt: +91 95854 41445</span>
          </a>

          <a
            href="mailto:hotelkumaravilas2002@gmail.com"
            className="inline-flex items-center gap-2 text-brand-cream hover:text-brand-gold transition-colors font-medium"
          >
            <Mail className="w-4 h-4 text-brand-gold" />
            <span>hotelkumaravilas2002@gmail.com</span>
          </a>

          <div className="inline-flex items-center gap-2 text-brand-cream-muted/70">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span>Sundarapuram, Coimbatore</span>
          </div>
        </div>

      </div>
    </section>
  );
};

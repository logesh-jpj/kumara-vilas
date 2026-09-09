import React from 'react';
import { Phone, Utensils, MapPin, ChevronDown } from 'lucide-react';
import { getAssetUrl } from '../data/menu';
import { ImageWithFallback } from './ImageWithFallback';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image with Deep Dark Green Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={getAssetUrl('Non-Veg Meals.jpg')}
          alt="Authentic South Indian Tiffin Feast"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.1]"
        />
        {/* Layered cinematic gradients for flawless contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a14] via-[#061a14]/85 to-[#061a14]/70" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        {/* Subtle decorative gold light aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Location & Brand Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-gold/40 shadow-lg shadow-black/40 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
            HOTEL KUMARA VILAS
          </span>
          <span className="text-brand-gold/40">•</span>
          <span className="text-[11px] sm:text-xs tracking-wider text-brand-cream/80 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-brand-gold" />
            Sundarapuram, Coimbatore
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-cream uppercase leading-[1.12] mb-6 max-w-4xl">
          Authentic <span className="text-gold-gradient">South Indian</span> Flavours, Served With Heart.
        </h1>

        {/* Supporting Copy */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-brand-cream-muted/90 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          From traditional tiffin and crispy dosas to signature chicken and mutton specialties, discover bold South Indian flavours at Hotel Kumara Vilas, Sundarapuram.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c566] to-[#c5a059] text-[#061a14] rounded font-bold text-xs sm:text-sm uppercase tracking-[0.2em] hover:brightness-110 shadow-lg shadow-brand-gold/25 transition-all duration-200 active:scale-95"
          >
            <Utensils className="w-4 h-4 text-[#061a14]" />
            <span>Explore Menu</span>
          </a>

          <a
            href="tel:+919585544144"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded border border-brand-gold/50 bg-[#061a14]/80 backdrop-blur-sm text-brand-gold hover:text-white hover:border-brand-gold hover:bg-brand-surface font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-brand-gold" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#quick-info"
          className="mt-14 inline-flex flex-col items-center text-brand-cream-muted/50 hover:text-brand-gold transition-colors text-[11px] tracking-widest uppercase gap-1.5"
          aria-label="Scroll to discover more"
        >
          <span>Discover More</span>
          <ChevronDown className="w-4 h-4 text-brand-gold animate-bounce" />
        </a>
      </div>
    </section>
  );
};

import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030f0b] text-brand-cream border-t border-brand-gold/20 pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-xs sm:text-sm text-brand-cream-muted/80 leading-relaxed max-w-md pt-2">
              Authentic South Indian flavours and signature non-vegetarian favourites in Sundarapuram, Coimbatore.
            </p>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/hotel_kumara_vilas_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-white px-3 py-2 rounded bg-brand-surface border border-brand-gold/30 hover:border-brand-gold transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@hotel_kumara_vilas_</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-brand-cream-muted/90">
              <li>
                <a href="#home" className="hover:text-brand-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
              </li>
              <li>
                <a href="#specials" className="hover:text-brand-gold transition-colors">Specials</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-brand-gold transition-colors">Complete Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-brand-gold transition-colors">Location</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold">
              Contact & Location
            </h4>
            
            <div className="space-y-3 text-xs text-brand-cream-muted/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  No. 27, Madukkarai Main Road, Opp. Kotak Mahindra Bank, Sundarapuram, Coimbatore – 641024
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <div className="flex items-center gap-3">
                  <a href="tel:+919585544144" className="hover:text-brand-gold transition-colors font-semibold">
                    9585544144
                  </a>
                  <span>/</span>
                  <a href="tel:+919585441445" className="hover:text-brand-gold transition-colors font-semibold">
                    9585441445
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href="mailto:hotelkumaravilas2002@gmail.com"
                  className="hover:text-brand-gold transition-colors truncate"
                >
                  hotelkumaravilas2002@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Subtle Gold Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent my-8" />

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-cream-muted/60">
          <p>
            © {new Date().getFullYear()} Hotel Kumara Vilas, Sundarapuram. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-brand-gold hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu as MenuIcon, X, Phone, Utensils, MapPin } from 'lucide-react';
import { MenuCategory } from '../types';

interface NavbarProps {
  onNavigateToCategory?: (category: MenuCategory) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Specials', href: '#specials' },
    { label: 'Menu', href: '#menu' },
    { label: 'Cravings', href: '#cravings' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#061a14]/95 backdrop-blur-md py-3 shadow-xl border-b border-brand-gold/15'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wider text-brand-cream/85 hover:text-brand-gold transition-colors duration-200 uppercase relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+919585544144"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold hover:text-white px-3 py-2 rounded border border-brand-gold/30 hover:border-brand-gold transition-all"
            aria-label="Call Hotel Kumara Vilas at 9585544144"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            <span>9585544144</span>
          </a>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c566] to-[#c5a059] text-[#061a14] px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:brightness-110 shadow-md shadow-brand-gold/20 transition-all active:scale-95"
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>View Menu</span>
          </a>
        </div>

        {/* Mobile Menu & Quick Phone Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+919585544144"
            className="p-2.5 rounded-lg bg-brand-card/80 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all"
            aria-label="Call Restaurant"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-brand-card/80 border border-brand-gold/30 text-brand-cream hover:text-brand-gold focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#061a14]/98 border-b border-brand-gold/20 backdrop-blur-xl shadow-2xl animate-fadeIn">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium uppercase tracking-widest text-brand-cream/90 hover:text-brand-gold py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-brand-gold/50 text-xs">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#061a14] font-bold text-xs uppercase tracking-widest rounded shadow-lg"
              >
                Explore Full Menu
              </a>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <a
                  href="tel:+919585544144"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-brand-card border border-brand-gold/30 rounded text-brand-gold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>9585544144</span>
                </a>
                <a
                  href="tel:+919585441445"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-brand-card border border-brand-gold/30 rounded text-brand-gold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>9585441445</span>
                </a>
              </div>

              <a
                href="https://maps.google.com/?q=No.+27,+Madukkarai+Main+Road,+Opp.+Kotak+Mahindra+Bank,+Sundarapuram,+Coimbatore+641024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-brand-cream-muted/80 hover:text-brand-gold py-1"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span>Sundarapuram, Coimbatore</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

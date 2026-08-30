import React from 'react';
import { Flame, UtensilsCrossed, MapPin, PhoneCall } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: UtensilsCrossed,
      title: 'Authentic South Indian Cuisine',
    },
    {
      icon: Flame,
      title: 'Signature Non-Veg Specialties',
    },
    {
      icon: MapPin,
      title: 'Sundarapuram, Coimbatore',
    },
    {
      icon: PhoneCall,
      title: 'Call for Enquiries',
      href: 'tel:+919585544144',
    },
  ];

  return (
    <section id="quick-info" className="relative z-20 bg-[#04120e] border-y border-brand-gold/20 py-4 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center justify-center gap-2.5 py-1 text-center md:text-left group">
                <div className="w-8 h-8 rounded-full bg-brand-surface border border-brand-gold/30 flex items-center justify-center shrink-0 group-hover:border-brand-gold transition-colors">
                  <Icon className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-brand-cream/90 group-hover:text-brand-gold transition-colors">
                  {item.title}
                </span>
              </div>
            );

            return (
              <div
                key={item.title}
                className={`flex items-center justify-center ${
                  idx !== items.length - 1 ? 'md:border-r md:border-brand-gold/15' : ''
                }`}
              >
                {item.href ? (
                  <a href={item.href} className="w-full">
                    {content}
                  </a>
                ) : (
                  <div className="w-full">{content}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

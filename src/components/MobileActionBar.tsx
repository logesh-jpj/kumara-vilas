import React from 'react';
import { Phone, Utensils, Navigation } from 'lucide-react';

export const MobileActionBar: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Hotel Kumara Vilas, No. 27, Madukkarai Main Road, Opp. Kotak Mahindra Bank, Sundarapuram, Coimbatore 641024")}`;

  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#04120e]/95 backdrop-blur-lg border-t border-brand-gold/30 shadow-2xl py-2 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL ACTION */}
        <a
          href="tel:+919585544144"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-brand-surface/90 border border-brand-gold/30 text-brand-gold active:bg-brand-gold active:text-[#061a14] transition-all"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* MENU ACTION */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#061a14] font-bold active:scale-95 transition-all shadow-md"
        >
          <Utensils className="w-4 h-4 mb-0.5 text-[#061a14]" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">Menu</span>
        </a>

        {/* DIRECTIONS ACTION */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-brand-surface/90 border border-brand-gold/30 text-brand-gold active:bg-brand-gold active:text-[#061a14] transition-all"
        >
          <Navigation className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </aside>
  );
};

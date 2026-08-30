import React from 'react';
import { MapPin, Phone, Navigation, Clock, Building, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const address = "No. 27, Madukkarai Main Road, Opp. Kotak Mahindra Bank, Sundarapuram, Coimbatore – 641024";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Hotel Kumara Vilas, No. 27, Madukkarai Main Road, Opp. Kotak Mahindra Bank, Sundarapuram, Coimbatore 641024")}`;

  return (
    <section id="location" className="py-24 bg-[#04120e] border-t border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
            <Compass className="w-4 h-4 text-brand-gold" />
            <span>VISIT OUR RESTAURANT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-cream tracking-tight">
            Find Us In <span className="text-gold-gradient">Sundarapuram</span>.
          </h2>

          <p className="text-sm sm:text-base text-brand-cream-muted/90">
            Conveniently located on Madukkarai Main Road, right opposite Kotak Mahindra Bank.
          </p>
        </div>

        {/* Location Details + Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Quick Contacts Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0a251d] border border-brand-gold/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            <div className="space-y-6">
              
              {/* Landmark Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-gold flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold">Address</h3>
                  <p className="font-serif text-base sm:text-lg text-brand-cream font-bold mt-1 leading-snug">
                    No. 27, Madukkarai Main Road
                  </p>
                  <p className="text-xs sm:text-sm text-brand-cream-muted/90 mt-0.5">
                    Opp. Kotak Mahindra Bank
                  </p>
                  <p className="text-xs sm:text-sm text-brand-cream-muted/80">
                    Sundarapuram, Coimbatore – 641024
                  </p>
                </div>
              </div>

              {/* Phone Line 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-gold flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold">Call for Enquiries</h3>
                  <div className="mt-1 flex flex-col gap-1">
                    <a
                      href="tel:+919585544144"
                      className="font-serif text-base font-bold text-brand-cream hover:text-brand-gold transition-colors inline-flex items-center gap-2"
                    >
                      <span>+91 95855 44144</span>
                    </a>
                    <a
                      href="tel:+919585441445"
                      className="font-serif text-base font-bold text-brand-cream hover:text-brand-gold transition-colors inline-flex items-center gap-2"
                    >
                      <span>+91 95854 41445</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Landmark Highlight */}
              <div className="p-4 rounded-xl bg-[#061a14] border border-brand-gold/15 text-xs text-brand-cream-muted/90 flex items-center gap-3">
                <Building className="w-5 h-5 text-brand-gold shrink-0" />
                <span>Prime location on Madukkarai Main Road with easy access from Sundarapuram junction.</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#e5c566] to-[#c5a059] text-[#061a14] rounded font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:+919585544144"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-surface border border-brand-gold/50 text-brand-gold hover:text-white hover:border-brand-gold rounded font-bold text-xs uppercase tracking-widest transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl min-h-[380px] bg-[#0a251d] relative">
            <iframe
              title="Hotel Kumara Vilas Sundarapuram Coimbatore Location"
              src="https://maps.google.com/maps?q=Sundarapuram+Madukkarai+Main+Road+Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0 filter contrast-[1.05] grayscale-[20%]"
              loading="lazy"
              allowFullScreen
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 p-3 rounded-lg bg-[#061a14]/95 border border-brand-gold/40 backdrop-blur-md shadow-lg">
              <p className="font-serif text-xs font-bold text-brand-cream">Hotel Kumara Vilas</p>
              <p className="text-[10px] text-brand-gold">Sundarapuram, Coimbatore</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

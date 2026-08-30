import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'light' | 'gold' | 'horizontal';
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'gold', className = '' }) => {
    const isSm = size === 'sm';
    const isLg = size === 'lg';

    return (
        <a
            href="#home"
            className={`inline-flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-brand-gold/50 rounded-lg p-1 transition-all ${className}`}
            aria-label="Hotel Kumara Vilas Home"
        >
            {/* Insignia Crest */}
            <div className={`relative flex items-center justify-center shrink-0 rounded-full border border-brand-gold/60 bg-gradient-to-b from-[#0e2f25] to-[#04120e] shadow-lg shadow-black/40 group-hover:border-brand-gold transition-colors ${isSm ? 'w-10 h-10' : isLg ? 'w-16 h-16' : 'w-12 h-12'
                }`}>
                {/* Outer decorative ring */}
                <div className="absolute inset-[3px] rounded-full border border-dashed border-brand-gold/30 group-hover:border-brand-gold/60 transition-colors" />

                {/* Monogram */}
                <span className={`font-serif font-bold text-brand-gold leading-none tracking-wider ${isSm ? 'text-sm' : isLg ? 'text-2xl' : 'text-lg'
                    }`}>
                    KV
                </span>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col justify-center text-left">
                <span className={`font-serif tracking-widest font-bold uppercase transition-colors ${variant === 'gold'
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#fae5b8] via-[#d4af37] to-[#e4c278]'
                        : 'text-brand-cream'
                    } ${isSm ? 'text-base' : isLg ? 'text-2xl' : 'text-lg md:text-xl'}`}>
                    Hotel Kumara Vilas
                </span>
                <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] uppercase text-brand-gold-muted/80 font-medium -mt-0.5">
                    Sundarapuram • Coimbatore
                </span>
            </div>
        </a>
    );
};

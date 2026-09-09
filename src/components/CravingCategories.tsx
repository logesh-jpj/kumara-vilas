import React from 'react';
import { Utensils, ArrowUpRight } from 'lucide-react';
import { MenuCategory } from '../types';
import { getAssetUrl } from '../data/menu';
import { ImageWithFallback } from './ImageWithFallback';

interface CravingItem {
  id: string;
  title: string;
  subtitle: string;
  categoryTarget: MenuCategory;
  image: string;
  tag: string;
}

interface CravingCategoriesProps {
  onSelectCategory: (cat: MenuCategory) => void;
}

export const CravingCategories: React.FC<CravingCategoriesProps> = ({ onSelectCategory }) => {
  const cravings: CravingItem[] = [
    {
      id: 'tiffin',
      title: 'Tiffin Favourites',
      subtitle: 'Idly, Dosa & Uthappam',
      categoryTarget: 'Dosa',
      image: getAssetUrl('Ghee Dosa.jpg'),
      tag: 'Crispy & Steamed',
    },
    {
      id: 'parotta',
      title: 'Parotta Favourites',
      subtitle: 'Classic & Kothu Parotta',
      categoryTarget: 'Parotta',
      image: getAssetUrl('parotta.jpg'),
      tag: 'Flaky & Salna',
    },
    {
      id: 'chicken',
      title: 'Chicken Specialties',
      subtitle: 'Bold Chicken Preparations',
      categoryTarget: 'Chicken Starters & Gravies',
      image: getAssetUrl('Chicken Chinthamani.jpg'),
      tag: 'Kongu & Chettinad',
    },
    {
      id: 'mutton',
      title: 'Mutton Favourites',
      subtitle: 'Hearty Traditional Dishes',
      categoryTarget: 'Mutton Starters & Gravies',
      image: getAssetUrl('Mutton Chukka.jpg'),
      tag: 'Slow Roasted Chukka',
    },
    {
      id: 'biryani',
      title: 'Biryani',
      subtitle: 'Aromatic Rice Favourites',
      categoryTarget: 'Biryani',
      image: getAssetUrl('Chicken Biryani.jpg'),
      tag: 'Seeraga Samba Dum',
    },
  ];

  const handleCardClick = (target: MenuCategory) => {
    onSelectCategory(target);
    const menuElem = document.getElementById('menu');
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cravings" className="py-20 bg-[#061a14] border-t border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
            <Utensils className="w-3.5 h-3.5" />
            <span>EXPLORE BY CRAVING</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-cream tracking-tight">
            What Are You <span className="text-gold-gradient">Craving?</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-cream-muted/80">
            Select a craving below to explore our curated South Indian specialties.
          </p>
        </div>

        {/* Cravings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {cravings.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCardClick(item.categoryTarget)}
              className="group relative h-80 rounded-xl overflow-hidden text-left border border-brand-gold/25 hover:border-brand-gold transition-all duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-gold"
            >
              {/* Background Image */}
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.65] contrast-[1.1]"
                loading="lazy"
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04120e] via-[#04120e]/60 to-transparent" />
              
              {/* Top Tag & Corner Icon */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#061a14]/90 border border-brand-gold/40 text-brand-gold backdrop-blur-sm">
                  {item.tag}
                </span>
                <div className="w-7 h-7 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-4 inset-x-4 space-y-1">
                <h3 className="font-serif text-lg font-bold text-brand-cream group-hover:text-brand-gold transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-cream-muted/90 line-clamp-1">
                  {item.subtitle}
                </p>
                <div className="pt-2 text-[10px] font-bold tracking-widest text-brand-gold uppercase flex items-center gap-1 group-hover:underline">
                  <span>Explore Dishes</span>
                  <span>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

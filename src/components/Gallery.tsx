import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'Food' | 'Specials' | 'Dining' | 'Restaurant';
  title: string;
  image: string;
  span?: string;
}

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Food' | 'Specials' | 'Dining' | 'Restaurant'>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      category: 'Specials',
      title: 'Kumaravilas Chicken Ghee Roast',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 'g2',
      category: 'Food',
      title: 'Crispy Golden Ghee Roast Dosa',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'g3',
      category: 'Specials',
      title: 'Ghee Podi Idly with Sambar & Chutneys',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'g4',
      category: 'Food',
      title: 'Seeraga Samba Dum Biryani',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'g5',
      category: 'Dining',
      title: 'Traditional South Indian Dining Spread',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1000&auto=format&fit=crop',
      span: 'md:col-span-2',
    },
    {
      id: 'g6',
      category: 'Restaurant',
      title: 'Warm & Authentic Hospitality',
      image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#04120e] border-t border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL SHOWCASE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-cream tracking-tight">
            Culinary <span className="text-gold-gradient">Gallery</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-cream-muted/80">
            A glimpse into our flavors, preparation passion, and culinary craft at Hotel Kumara Vilas.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {(['All', 'Food', 'Specials', 'Dining', 'Restaurant'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeFilter === filter
                    ? 'bg-brand-gold text-[#061a14] shadow-md'
                    : 'bg-[#0a251d] text-brand-cream-muted/80 border border-brand-gold/20 hover:border-brand-gold'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[240px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer border border-brand-gold/20 hover:border-brand-gold transition-all duration-300 shadow-xl ${
                item.span || ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a14]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Float Category Badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#061a14]/90 border border-brand-gold/40 text-brand-gold backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Title & Zoom Icon */}
              <div className="absolute bottom-3 inset-x-3 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif text-sm font-bold text-brand-cream drop-shadow">
                  {item.title}
                </p>
                <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center text-brand-gold shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0a251d] rounded-2xl overflow-hidden border border-brand-gold/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#061a14]/80 border border-brand-gold/40 text-brand-cream hover:text-brand-gold transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-cover"
            />

            <div className="p-6 bg-[#061a14] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-cream mt-0.5">
                  {selectedImage.title}
                </h3>
              </div>
              <a
                href="#menu"
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 bg-brand-gold text-[#061a14] rounded text-xs font-bold uppercase tracking-wider hover:brightness-110"
              >
                View in Menu
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import { ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const InstagramSection: React.FC = () => {
  const instagramPosts = [
    {
      id: 'p1',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=600&auto=format&fit=crop',
      caption: 'Crisp Ghee Podi Onion Dosa hot off the iron tawa! #HotelKumaraVilas #Sundarapuram',
    },
    {
      id: 'p2',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop',
      caption: 'The unmistakable aroma of Kumaravilas Chicken Ghee Roast. #KVSspecials #CoimbatoreFood',
    },
    {
      id: 'p3',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop',
      caption: 'Fragrant Seeraga Samba Dum Biryani served fresh daily. #BiryaniLovers #Coimbatore',
    },
    {
      id: 'p4',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop',
      caption: 'Fluffy steaming idlies with trio of fresh chutneys and sambar. #SouthIndianBreakfast',
    },
  ];

  return (
    <section className="py-20 bg-[#061a14] border-t border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
              <InstagramIcon className="w-4 h-4 text-brand-gold" />
              <span>STAY CONNECTED</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-brand-cream tracking-tight">
              Follow <span className="text-gold-gradient">Hotel Kumara Vilas</span>
            </h2>

            <p className="text-xs sm:text-sm text-brand-cream-muted/80">
              Catch our daily specials, kitchen moments, and culinary highlights on Instagram.
            </p>
          </div>

          <div>
            <a
              href="https://www.instagram.com/hotel_kumara_vilas_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#061a14] rounded font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@hotel_kumara_vilas_</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/hotel_kumara_vilas_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-64 rounded-xl overflow-hidden border border-brand-gold/20 hover:border-brand-gold transition-all duration-300 shadow-lg"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-[#061a14]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-brand-gold">
                  <InstagramIcon className="w-5 h-5" />
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                
                <p className="text-xs text-brand-cream line-clamp-3 leading-snug">
                  {post.caption}
                </p>

                <div className="flex items-center gap-3 text-xs text-brand-gold-muted/80">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-brand-gold/30 text-brand-gold" />
                    <span>KV</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>View</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

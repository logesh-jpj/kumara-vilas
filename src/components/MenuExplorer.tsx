import React, { useState, useMemo } from 'react';
import { Search, Sparkles, X, LayoutGrid, List, Eye, Phone, CheckCircle2 } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES_LIST, getDishReferenceImage } from '../data/menu';
import { MenuCategory, MenuItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface MenuExplorerProps {
  selectedCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
}

export const MenuExplorer: React.FC<MenuExplorerProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [onlyKvsSpecials, setOnlyKvsSpecials] = useState(false);
  const [viewMode, setViewMode] = useState<'visual' | 'compact'>('visual');
  const [previewDish, setPreviewDish] = useState<MenuItem | null>(null);

  // Filter dishes based on category, search, veg/non-veg, and specials
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      // 1. Search Query filter (matches name, description, category, or tags)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = dish.name.toLowerCase().includes(q);
        const matchesDesc = dish.description?.toLowerCase().includes(q);
        const matchesCat = dish.category.toLowerCase().includes(q);
        const matchesTag = dish.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesCat && !matchesTag) {
          return false;
        }
      }

      // 2. Category filter
      if (selectedCategory === 'KVS Specials') {
        if (!dish.isKvsSpecial) return false;
      } else if (selectedCategory !== 'All') {
        if (dish.category !== selectedCategory) return false;
      }

      // 3. KVS Specials toggle
      if (onlyKvsSpecials && !dish.isKvsSpecial) {
        return false;
      }

      // 4. Veg / Non-Veg filter
      if (vegFilter === 'veg' && !dish.isVegetarian) return false;
      if (vegFilter === 'non-veg' && dish.isVegetarian) return false;

      return true;
    });
  }, [searchQuery, selectedCategory, vegFilter, onlyKvsSpecials]);

  return (
    <section id="menu" className="py-24 bg-[#061a14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-gold/30 text-brand-gold text-[11px] font-bold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KUMARA VILAS CUISINE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-brand-cream tracking-tight">
            Explore Our <span className="text-gold-gradient">Complete Menu</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-cream-muted/90 max-w-2xl mx-auto">
            Explore authentic tiffin, freshly beaten parottas, traditional Kongu & Chettinad gravies, banana leaf meals and Seeraga Samba biryani with dish reference photos.
          </p>
        </div>

        {/* Interactive Filter Control Bar */}
        <div className="bg-[#0a251d] rounded-2xl p-4 sm:p-6 border border-brand-gold/25 shadow-2xl mb-10 space-y-5">
          
          {/* Top Bar: Instant Search, View Switcher & Dietary Toggles */}
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
            {/* Realtime Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-brand-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g., Ghee Podi, Chinthamani, Biryani)..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#061a14] border border-brand-gold/30 rounded-lg text-sm text-brand-cream placeholder-brand-cream-muted/40 focus:outline-none focus:border-brand-gold transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-cream-muted/60 hover:text-brand-gold"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* View Mode & Quick Dietary Toggles */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-start sm:justify-end">
              
              {/* Visual Card / Compact List View Toggle */}
              <div className="inline-flex p-1 rounded-lg bg-[#061a14] border border-brand-gold/20">
                <button
                  onClick={() => setViewMode('visual')}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewMode === 'visual'
                      ? 'bg-brand-surface text-brand-gold shadow'
                      : 'text-brand-cream-muted/70 hover:text-brand-cream'
                  }`}
                  title="Show Visual Cards with dish reference images"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Visual</span>
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewMode === 'compact'
                      ? 'bg-brand-surface text-brand-gold shadow'
                      : 'text-brand-cream-muted/70 hover:text-brand-cream'
                  }`}
                  title="Show Compact List view"
                >
                  <List className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Compact</span>
                </button>
              </div>

              {/* Veg / Non-Veg segmented buttons */}
              <div className="inline-flex p-1 rounded-lg bg-[#061a14] border border-brand-gold/20">
                <button
                  onClick={() => setVegFilter('all')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all ${
                    vegFilter === 'all'
                      ? 'bg-brand-surface text-brand-gold shadow'
                      : 'text-brand-cream-muted/70 hover:text-brand-cream'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setVegFilter('veg')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                    vegFilter === 'veg'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40 shadow'
                      : 'text-brand-cream-muted/70 hover:text-emerald-400'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Veg Only
                </button>
                <button
                  onClick={() => setVegFilter('non-veg')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                    vegFilter === 'non-veg'
                      ? 'bg-rose-950 text-rose-300 border border-rose-500/40 shadow'
                      : 'text-brand-cream-muted/70 hover:text-rose-400'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Non-Veg
                </button>
              </div>

              {/* KVS Special Only Toggle Button */}
              <button
                onClick={() => setOnlyKvsSpecials(!onlyKvsSpecials)}
                className={`px-3.5 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                  onlyKvsSpecials
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#061a14] border-brand-gold shadow-md'
                    : 'bg-[#061a14] border-brand-gold/40 text-brand-gold hover:border-brand-gold'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>KVS Specials</span>
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Category Pills */}
          <div className="relative">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1.5 pt-0.5">
              {CATEGORIES_LIST.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id as MenuCategory)}
                    className={`shrink-0 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-gold text-[#061a14] shadow-md shadow-brand-gold/20 font-extrabold scale-100'
                        : 'bg-[#061a14]/80 text-brand-cream-muted/80 hover:text-brand-cream border border-brand-gold/15 hover:border-brand-gold/40'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Results Counter / Category Summary */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-xs font-medium text-brand-cream-muted/70 uppercase tracking-widest">
            Showing <span className="text-brand-gold font-bold">{filteredDishes.length}</span> authentic dishes
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </div>
          {(searchQuery || vegFilter !== 'all' || onlyKvsSpecials || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setVegFilter('all');
                setOnlyKvsSpecials(false);
                onSelectCategory('All');
              }}
              className="text-xs text-brand-gold hover:underline font-semibold"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length > 0 ? (
          <div
            className={
              viewMode === 'visual'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            }
          >
            {filteredDishes.map((dish: MenuItem) => {
              const dishImage = getDishReferenceImage(dish);

              return (
                <div
                  key={dish.id}
                  onClick={() => setPreviewDish(dish)}
                  className={`group relative rounded-xl bg-[#0a251d] border border-brand-gold/20 hover:border-brand-gold/70 transition-all duration-300 shadow-lg flex flex-col justify-between hover:bg-[#0e2f25] cursor-pointer overflow-hidden ${
                    viewMode === 'visual' ? 'pb-5' : 'p-5'
                  }`}
                >
                  {/* Visual Image Header (in visual mode) */}
                  {viewMode === 'visual' && (
                    <div className="relative h-44 overflow-hidden bg-black/40">
                      <ImageWithFallback
                        src={dishImage}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a251d] via-transparent to-black/30" />

                      {/* Badges on image */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        {dish.isKvsSpecial && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#061a14]/95 border border-brand-gold text-brand-gold text-[9px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md">
                            <Sparkles className="w-2.5 h-2.5 text-brand-gold" />
                            KVS Special
                          </span>
                        )}
                      </div>

                      {/* Veg / Non-Veg Indicator Icon */}
                      <div className="absolute top-3 right-3 bg-[#061a14]/90 p-1.5 rounded border border-white/10 backdrop-blur-md">
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            dish.isVegetarian ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                          title={dish.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                        />
                      </div>

                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] px-2 py-1 rounded bg-[#061a14]/90 text-brand-gold border border-brand-gold/40 flex items-center gap-1">
                          <Eye className="w-3 h-3" /> Quick View
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Dish Details */}
                  <div className={viewMode === 'visual' ? 'px-5 pt-4 flex-1 flex flex-col justify-between' : 'flex-1 flex flex-col justify-between'}>
                    <div>
                      {/* Card Header in Compact Mode */}
                      {viewMode === 'compact' && (
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-muted/80">
                            {dish.category}
                          </span>

                          <div className="flex items-center gap-2">
                            {dish.isKvsSpecial && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-surface border border-brand-gold text-brand-gold text-[9px] font-bold uppercase tracking-wider">
                                <Sparkles className="w-2.5 h-2.5 text-brand-gold" />
                                KVS Special
                              </span>
                            )}
                            <div
                              className={`w-3 h-3 rounded-full ${
                                dish.isVegetarian ? 'bg-emerald-500' : 'bg-rose-500'
                              }`}
                              title={dish.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                            />
                          </div>
                        </div>
                      )}

                      {/* Dish Name */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors leading-snug">
                        {dish.name}
                      </h3>

                      {/* Dish Description */}
                      {dish.description && (
                        <p className="mt-2 text-xs sm:text-sm text-brand-cream-muted/80 leading-relaxed font-normal">
                          {dish.description}
                        </p>
                      )}
                    </div>

                    {/* Footer of Card: Tags & Price Slot (Nullable schema compliant) */}
                    <div className="mt-4 pt-3.5 border-t border-brand-gold/10 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {dish.tags?.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#061a14] text-brand-cream-muted/70 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Price slot - supports null gracefully without fake numbers */}
                      <div className="text-right">
                        {dish.price !== null ? (
                          <span className="font-serif font-bold text-sm text-brand-gold">
                            ₹{dish.price}
                          </span>
                        ) : (
                          <span className="text-[10px] uppercase tracking-wider text-brand-gold/80 font-semibold">
                            Fresh Daily
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#0a251d] rounded-xl border border-brand-gold/20">
            <p className="font-serif text-xl text-brand-cream">No dishes found matching your selection.</p>
            <p className="text-xs text-brand-cream-muted/70 mt-1">Try clearing your search term or choosing another category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setVegFilter('all');
                setOnlyKvsSpecials(false);
                onSelectCategory('All');
              }}
              className="mt-4 px-5 py-2 rounded bg-brand-gold text-[#061a14] text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Dish Quick Preview Modal */}
      {previewDish && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewDish(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#0a251d] rounded-2xl overflow-hidden border border-brand-gold/40 shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setPreviewDish(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#061a14]/80 border border-brand-gold/40 text-brand-cream hover:text-brand-gold transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-60 overflow-hidden bg-black">
              <ImageWithFallback
                src={getDishReferenceImage(previewDish)}
                alt={previewDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a251d] via-transparent to-black/40" />

              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                {previewDish.isKvsSpecial && (
                  <span className="px-3 py-1 rounded-full bg-brand-surface border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-wider">
                    ⭐ KVS Special
                  </span>
                )}
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  previewDish.isVegetarian ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-rose-950 text-rose-300 border border-rose-500/40'
                }`}>
                  {previewDish.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-muted/80">
                  {previewDish.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-cream mt-0.5">
                  {previewDish.name}
                </h3>
              </div>

              {previewDish.description && (
                <p className="text-sm text-brand-cream-muted/90 leading-relaxed">
                  {previewDish.description}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {previewDish.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded bg-[#061a14] text-brand-gold border border-brand-gold/20 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-brand-gold" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-brand-gold/20 flex items-center justify-between gap-3">
                <a
                  href="tel:+919585544144"
                  className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#061a14] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:brightness-110 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Order (9585544144)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

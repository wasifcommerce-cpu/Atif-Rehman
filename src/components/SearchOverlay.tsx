import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Search, X, ArrowRight, Sparkles, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SafeImage } from './SafeImage';

export const SearchOverlay: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    openProductDetail,
    setSelectedCategoryFilter,
    setActiveTab
  } = useShop();

  const inputRef = useRef<HTMLInputElement>(null);

  const trendingSearches = [
    'Bouclé Armchair',
    'Oak Dining Table',
    'Ceramic Vases',
    'Cast Brass Lamp',
    'Wool & Linen Rug',
    'Platform Bed'
  ];

  const popularCategories = [
    { label: 'Seating', id: 'seating' },
    { label: 'Tables', id: 'tables' },
    { label: 'Lighting', id: 'lighting' },
    { label: 'Décor & Art', id: 'decor' },
    { label: 'Rugs', id: 'textiles' }
  ];

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.room.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const handleSelectProduct = (product: typeof PRODUCTS[0]) => {
    setIsSearchOpen(false);
    openProductDetail(product);
  };

  const handleSelectCategory = (catId: string) => {
    setIsSearchOpen(false);
    setSelectedCategoryFilter(catId);
    setActiveTab('shop');
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#292827]/80 z-50 backdrop-blur-md flex flex-col justify-start p-4 sm:p-6 lg:p-12 overflow-y-auto"
          onClick={() => setIsSearchOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.96, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: -20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl mx-auto bg-[#F7F4EF] rounded-2xl sm:rounded-3xl border border-[#DED9D1] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Search Input Bar */}
            <div className="p-4 sm:p-6 border-b border-[#DED9D1] bg-[#FFFFFF] flex items-center gap-3">
              <Search className="w-6 h-6 text-[#9B9995] flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search furniture, lighting, ceramics, timbers..."
                className="flex-1 bg-transparent text-lg sm:text-xl text-[#292827] placeholder:text-[#9B9995] focus:outline-hidden font-serif"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-[#9B9995] hover:text-[#292827] rounded-full"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-[#68645F] hover:text-[#292827] hover:bg-[#EEE9E1] rounded-full transition-colors ml-2"
                aria-label="Close search modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div className="space-y-6">
                  {/* Trending Queries */}
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#9B9995] mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-[#D9894D]" />
                      <span>Trending Inquiries</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="bg-[#FFFFFF] hover:bg-[#FAF8F5] border border-[#DED9D1] text-xs font-medium text-[#292827] px-3.5 py-2 rounded-xl transition-colors shadow-2xs hover:border-[#D9894D]"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Popular Categories */}
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#9B9995] block mb-3">
                      Browse Popular Categories
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {popularCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => handleSelectCategory(cat.id)}
                          className="p-3 bg-[#FFFFFF] border border-[#DED9D1] rounded-xl text-center text-xs font-bold text-[#292827] hover:border-[#D9894D] hover:bg-[#FAF8F5] transition-colors"
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#9B9995]">
                      Search Results ({searchResults.length})
                    </span>
                  </div>

                  {searchResults.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="font-serif text-lg text-[#292827] mb-1">
                        No pieces found for "{searchQuery}"
                      </p>
                      <p className="text-xs text-[#68645F]">
                        Try searching for 'chair', 'lamp', 'table', 'oak', or 'ceramic'.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleSelectProduct(product)}
                          className="bg-[#FFFFFF] border border-[#DED9D1] hover:border-[#D9894D] rounded-xl p-3.5 flex items-center gap-3.5 cursor-pointer transition-all shadow-2xs group hover:shadow-xs"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#EEE9E1]">
                            <SafeImage
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              containerClassName="w-full h-full"
                              fallbackCategory={product.category}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] uppercase font-semibold text-[#9B9995] block">
                              {product.category}
                            </span>
                            <h4 className="font-serif font-bold text-sm text-[#292827] group-hover:text-[#D9894D] transition-colors truncate">
                              {product.name}
                            </h4>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs font-bold text-[#292827]">
                                ${product.price.toLocaleString()}
                              </span>
                              <div className="flex items-center gap-1 text-[11px] text-[#68645F]">
                                <Star className="w-3 h-3 fill-[#D9894D] text-[#D9894D]" />
                                <span>{product.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Bottom Bar */}
            <div className="p-4 bg-[#EEE9E1] border-t border-[#DED9D1] text-xs text-[#68645F] flex items-center justify-between">
              <span>Press <strong>ESC</strong> to close</span>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setActiveTab('shop');
                }}
                className="font-semibold text-[#292827] hover:text-[#D9894D] flex items-center gap-1"
              >
                View full catalog <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

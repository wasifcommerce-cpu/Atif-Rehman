import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { ROOM_CATEGORIES } from '../data/collections';
import { SlidersHorizontal, ArrowUpDown, X, Sparkles, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ShopPage: React.FC = () => {
  const {
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    selectedRoomFilter,
    setSelectedRoomFilter,
    searchQuery,
    setSearchQuery
  } = useShop();

  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(3500);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'seating', label: 'Seating & Sofas' },
    { id: 'tables', label: 'Tables & Desks' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'decor', label: 'Art & Ceramics' },
    { id: 'textiles', label: 'Rugs & Textiles' },
    { id: 'storage', label: 'Storage & Shelving' },
    { id: 'bedroom', label: 'Bedroom' }
  ];

  const materials = [
    { id: 'all', label: 'All Materials' },
    { id: 'Oak', label: 'Solid White Oak' },
    { id: 'Bouclé', label: 'Italian Bouclé' },
    { id: 'Linen', label: 'Belgian Linen' },
    { id: 'Ceramic', label: 'Mineral Ceramic' },
    { id: 'Brass', label: 'Cast Brass' },
    { id: 'Travertine', label: 'Roman Travertine' }
  ];

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category match
      if (selectedCategoryFilter !== 'all' && p.category !== selectedCategoryFilter) {
        return false;
      }
      // Room match
      if (selectedRoomFilter !== 'all' && p.room !== selectedRoomFilter) {
        return false;
      }
      // Material match
      if (selectedMaterial !== 'all' && !p.materials.some((m) => m.toLowerCase().includes(selectedMaterial.toLowerCase()))) {
        return false;
      }
      // Price match
      if (p.price > maxPrice) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const match =
          p.name.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.room.toLowerCase().includes(query) ||
          p.materials.some((m) => m.toLowerCase().includes(query));
        if (!match) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // featured default
    });
  }, [selectedCategoryFilter, selectedRoomFilter, selectedMaterial, maxPrice, searchQuery, sortBy]);

  const activeFilterCount =
    (selectedCategoryFilter !== 'all' ? 1 : 0) +
    (selectedRoomFilter !== 'all' ? 1 : 0) +
    (selectedMaterial !== 'all' ? 1 : 0) +
    (maxPrice < 3500 ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const handleResetFilters = () => {
    setSelectedCategoryFilter('all');
    setSelectedRoomFilter('all');
    setSelectedMaterial('all');
    setMaxPrice(3500);
    setSearchQuery('');
  };

  return (
    <div id="shop-catalog-page" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="mb-8 sm:mb-12 border-b border-[#DED9D1] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9B9995] block mb-2">
          Studio Catalog
        </span>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight">
            The Complete Collection
          </h1>
          <p className="text-xs sm:text-sm text-[#68645F]">
            Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} curated objects
          </p>
        </div>
      </div>

      {/* Top Filter & Sort Bar */}
      <div className="flex items-center justify-between gap-4 mb-8 bg-[#FFFFFF] p-4 rounded-2xl border border-[#DED9D1] shadow-2xs">
        
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="lg:hidden inline-flex items-center gap-2 bg-[#F7F4EF] hover:bg-[#EEE9E1] px-4 py-2 rounded-xl text-xs font-semibold text-[#292827] border border-[#DED9D1]"
        >
          <Filter className="w-4 h-4 text-[#D9894D]" />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#D9894D] text-white flex items-center justify-center text-[10px]">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Desktop Quick Category Tabs */}
        <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const count = cat.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategoryFilter === cat.id
                    ? 'bg-[#292827] text-white'
                    : 'text-[#68645F] hover:bg-[#F7F4EF] hover:text-[#292827]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-[10px] opacity-75 font-normal`}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 ml-auto">
          <ArrowUpDown className="w-4 h-4 text-[#9B9995] hidden sm:block" />
          <span className="text-xs text-[#68645F] hidden sm:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3 py-2 text-xs font-semibold text-[#292827] focus:outline-hidden cursor-pointer"
          >
            <option value="featured">Featured Curations</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">New Arrivals</option>
          </select>
        </div>

      </div>

      {/* Main Catalog Layout (Sidebar + Product Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-3 space-y-8 bg-[#FFFFFF] p-6 rounded-2xl border border-[#DED9D1] shadow-2xs h-fit sticky top-24">
          
          <div className="flex items-center justify-between border-b border-[#DED9D1] pb-3">
            <span className="font-serif font-bold text-base text-[#292827]">Refine Sanctuary</span>
            {activeFilterCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-semibold text-[#D9894D] hover:underline"
              >
                Reset All ({activeFilterCount})
              </button>
            )}
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#292827] mb-3">
              Categories
            </h4>
            <div className="space-y-1.5">
              {categories.map((cat) => {
                const count = cat.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryFilter(cat.id)}
                    className={`w-full flex items-center justify-between text-xs py-1.5 px-2 rounded-lg transition-colors cursor-pointer ${
                      selectedCategoryFilter === cat.id
                        ? 'bg-[#FAF8F5] text-[#292827] font-bold border-l-2 border-[#D9894D]'
                        : 'text-[#68645F] hover:text-[#292827]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] text-[#9B9995] font-normal">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rooms */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#292827] mb-3">
              Shop by Space
            </h4>
            <div className="space-y-1.5">
              <button
                onClick={() => setSelectedRoomFilter('all')}
                className={`w-full flex items-center justify-between text-xs py-1.5 px-2 rounded-lg cursor-pointer ${
                  selectedRoomFilter === 'all'
                    ? 'bg-[#FAF8F5] text-[#292827] font-bold'
                    : 'text-[#68645F] hover:text-[#292827]'
                }`}
              >
                <span>All Rooms</span>
                <span className="text-[10px] text-[#9B9995] font-normal">{PRODUCTS.length}</span>
              </button>
              {ROOM_CATEGORIES.map((room) => {
                const count = PRODUCTS.filter(p => p.room === room.id).length;
                return (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoomFilter(room.id)}
                    className={`w-full flex items-center justify-between text-xs py-1.5 px-2 rounded-lg cursor-pointer ${
                      selectedRoomFilter === room.id
                        ? 'bg-[#FAF8F5] text-[#292827] font-bold border-l-2 border-[#D9894D]'
                        : 'text-[#68645F] hover:text-[#292827]'
                    }`}
                  >
                    <span>{room.name}</span>
                    <span className="text-[10px] text-[#9B9995] font-normal">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Materials */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#292827] mb-3">
              Craft Material
            </h4>
            <div className="space-y-1.5">
              {materials.map((mat) => {
                const count = mat.id === 'all'
                  ? PRODUCTS.length
                  : PRODUCTS.filter(p => p.materials.some(m => m.toLowerCase().includes(mat.id.toLowerCase()))).length;
                return (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat.id)}
                    className={`w-full flex items-center justify-between text-xs py-1.5 px-2 rounded-lg cursor-pointer ${
                      selectedMaterial === mat.id
                        ? 'bg-[#FAF8F5] text-[#292827] font-bold border-l-2 border-[#D9894D]'
                        : 'text-[#68645F] hover:text-[#292827]'
                    }`}
                  >
                    <span>{mat.label}</span>
                    <span className="text-[10px] text-[#9B9995] font-normal">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Max Price Slider */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-[#292827] mb-2">
              <span>Price Ceiling</span>
              <span className="text-[#D9894D]">${maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="100"
              max="3500"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#D9894D] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#9B9995] mt-1">
              <span>$100</span>
              <span>$3,500</span>
            </div>
          </div>

        </aside>

        {/* Product Grid Area */}
        <main className="lg:col-span-9">
          
          {/* Active Filter Badges */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs text-[#9B9995]">Active Filters:</span>
              {selectedCategoryFilter !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-[#FFFFFF] border border-[#DED9D1] text-xs font-semibold px-2.5 py-1 rounded-full text-[#292827]">
                  Category: {selectedCategoryFilter}
                  <button onClick={() => setSelectedCategoryFilter('all')} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedRoomFilter !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-[#FFFFFF] border border-[#DED9D1] text-xs font-semibold px-2.5 py-1 rounded-full text-[#292827]">
                  Room: {selectedRoomFilter}
                  <button onClick={() => setSelectedRoomFilter('all')} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedMaterial !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-[#FFFFFF] border border-[#DED9D1] text-xs font-semibold px-2.5 py-1 rounded-full text-[#292827]">
                  Material: {selectedMaterial}
                  <button onClick={() => setSelectedMaterial('all')} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 bg-[#FFFFFF] border border-[#DED9D1] text-xs font-semibold px-2.5 py-1 rounded-full text-[#292827]">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={handleResetFilters}
                className="text-xs text-[#D9894D] font-bold hover:underline ml-2"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Grid View */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-[#FFFFFF] rounded-2xl border border-[#DED9D1] p-8">
              <Sparkles className="w-10 h-10 text-[#9B9995] mx-auto mb-3" />
              <h3 className="font-serif text-2xl font-bold text-[#292827] mb-2">
                No matching objects found
              </h3>
              <p className="text-sm text-[#68645F] max-w-sm mx-auto mb-6">
                Try widening your price range or clearing specific material and category filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-[#292827] hover:bg-[#1A1918] text-white text-xs font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </main>

      </div>

      {/* Mobile Filter Slideover Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-[#292827]/60 z-50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28 }}
              className="fixed top-0 bottom-0 left-0 w-full max-w-xs bg-[#FFFFFF] z-50 p-6 overflow-y-auto flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#DED9D1] pb-3">
                  <h3 className="font-serif font-bold text-lg text-[#292827]">Filters</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)}>
                    <X className="w-5 h-5 text-[#68645F]" />
                  </button>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#292827] mb-2">Category</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCategoryFilter(c.id)}
                        className={`text-xs px-3 py-1.5 rounded-lg border ${
                          selectedCategoryFilter === c.id
                            ? 'bg-[#292827] text-white border-[#292827]'
                            : 'border-[#DED9D1] text-[#68645F]'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rooms */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#292827] mb-2">Space</h4>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => setSelectedRoomFilter('all')}
                      className={`text-xs px-3 py-1.5 rounded-lg border ${
                        selectedRoomFilter === 'all'
                          ? 'bg-[#292827] text-white border-[#292827]'
                          : 'border-[#DED9D1] text-[#68645F]'
                      }`}
                    >
                      All
                    </button>
                    {ROOM_CATEGORIES.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => setSelectedRoomFilter(r.id)}
                        className={`text-xs px-3 py-1.5 rounded-lg border ${
                          selectedRoomFilter === r.id
                            ? 'bg-[#292827] text-white border-[#292827]'
                            : 'border-[#DED9D1] text-[#68645F]'
                        }`}
                      >
                        {r.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span>Price Limit</span>
                    <span>${maxPrice}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="3500"
                    step="50"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#D9894D]"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-[#DED9D1]">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full bg-[#D9894D] text-white text-xs font-semibold py-3 rounded-xl shadow-md"
                >
                  View {filteredProducts.length} Results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

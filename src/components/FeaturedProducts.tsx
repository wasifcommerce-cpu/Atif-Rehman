import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export const FeaturedProducts: React.FC = () => {
  const { setActiveTab, setSelectedCategoryFilter } = useShop();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAllInHome, setShowAllInHome] = useState(false);

  const categories = [
    { id: 'all', label: 'All Pieces' },
    { id: 'seating', label: 'Seating & Sofas' },
    { id: 'tables', label: 'Tables & Desks' },
    { id: 'storage', label: 'Storage & Shelving' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'decor', label: 'Art & Ceramics' },
    { id: 'textiles', label: 'Rugs & Textiles' }
  ];

  const matchedProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const displayedProducts =
    activeCategory === 'all' && !showAllInHome
      ? matchedProducts.slice(0, 8)
      : matchedProducts;

  const handleViewAll = () => {
    setSelectedCategoryFilter(activeCategory);
    setActiveTab('shop');
  };

  return (
    <section id="featured-products-section" className="py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header with Title & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9B9995] block mb-2">
            Form & Function
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight">
            Designed for Everyday Living
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#292827] text-white shadow-xs'
                  : 'bg-[#FFFFFF] text-[#68645F] hover:text-[#292827] border border-[#DED9D1] hover:border-[#9B9995]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        {activeCategory === 'all' && matchedProducts.length > 8 && (
          <button
            onClick={() => setShowAllInHome(!showAllInHome)}
            className="inline-flex items-center gap-2 bg-[#292827] hover:bg-[#1A1918] text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all shadow-xs cursor-pointer"
          >
            <span>{showAllInHome ? 'Show Top 8 Cured Pieces' : `Show All ${matchedProducts.length} Pieces`}</span>
          </button>
        )}

        <button
          id="view-all-products-btn"
          onClick={handleViewAll}
          className="inline-flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#292827] border border-[#DED9D1] hover:border-[#9B9995] font-medium text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Open Full Catalog & Filters ({matchedProducts.length})</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};

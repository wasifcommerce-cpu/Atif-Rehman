import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Trophy } from 'lucide-react';

export const Bestsellers: React.FC = () => {
  const { setActiveTab, setSelectedCategoryFilter } = useShop();

  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);

  const handleViewAllBestsellers = () => {
    setSelectedCategoryFilter('all');
    setActiveTab('shop');
  };

  return (
    <section id="bestsellers-section" className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#9B9995] mb-2">
            <Trophy className="w-3.5 h-3.5 text-[#D9894D]" />
            <span>Proven Signatures</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight">
            Customer Favorites
          </h2>
        </div>
        <button
          onClick={handleViewAllBestsellers}
          className="inline-flex items-center text-sm font-semibold text-[#292827] hover:text-[#D9894D] transition-colors group cursor-pointer"
        >
          <span>View All Bestsellers</span>
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 4-Product Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

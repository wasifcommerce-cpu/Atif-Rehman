import React from 'react';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ProductCard } from './ProductCard';

export const LatestArrivals: React.FC = () => {
  const { setActiveTab, setSelectedCategoryFilter } = useShop();

  // Get the 3 specific latest arrival products
  const arrivalProducts = PRODUCTS.filter((p) => p.featuredInArrivals).slice(0, 3);

  const handleShopNew = () => {
    setSelectedCategoryFilter('all');
    setActiveTab('shop');
  };

  return (
    <section id="latest-arrivals-section" className="py-12 sm:py-16 lg:py-20 bg-[#292827] text-[#FFFFFF] relative overflow-hidden">
      
      {/* Subtle organic background textures */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D9894D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Story Content Panel */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B3A36] text-[#D9894D] text-[11px] uppercase tracking-[0.2em] font-semibold mb-4 w-fit border border-[#4A4846]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autumn Edition</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4 text-[#FAF8F5]">
              Latest Arrivals
            </h2>

            <p className="text-sm sm:text-base text-[#DED9D1] leading-relaxed mb-6 font-normal">
              Fresh pieces selected to bring a refined touch to modern interiors. Hand-finished timbers, unglazed mineral ceramics, and warm architectural lighting.
            </p>

            <div className="space-y-3 mb-8 text-xs text-[#9B9995]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9894D]" />
                <span>Small batch atelier production</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9894D]" />
                <span>Ethically harvested FSC® hardwoods</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9894D]" />
                <span>30-Day in-home trial included</span>
              </div>
            </div>

            <div>
              <button
                id="arrivals-cta-btn"
                onClick={handleShopNew}
                className="group inline-flex items-center gap-2.5 bg-[#D9894D] hover:bg-[#C27339] text-[#FFFFFF] font-medium text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Shop New Arrivals</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right: 3 Prominent Product Cards on light surfaces */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {arrivalProducts.map((product) => (
                <div key={product.id} className="text-[#292827]">
                  <ProductCard product={product} aspectRatio="aspect-square sm:aspect-4/5" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

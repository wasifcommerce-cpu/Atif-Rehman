import React from 'react';
import { COLLECTIONS } from '../data/collections';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const CollectionsPage: React.FC = () => {
  const { setActiveTab, setSelectedRoomFilter } = useShop();

  const handleExploreCollection = (room?: string) => {
    if (room) setSelectedRoomFilter(room);
    else setSelectedRoomFilter('all');
    setActiveTab('shop');
  };

  return (
    <div id="collections-page" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DED9D1] text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9B9995] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D9894D]" />
          <span>Curated Narratives</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight mb-4">
          Seasonal Collections & Series
        </h1>
        <p className="text-base sm:text-lg text-[#68645F] leading-relaxed font-normal">
          Each edition is sculpted around a cohesive material palette—harmonizing texture, weight, and tone to transform empty spaces into serene sanctuaries.
        </p>
      </div>

      {/* Large Editorial Collection Cards */}
      <div className="space-y-12 sm:space-y-16">
        {COLLECTIONS.map((col, idx) => (
          <div
            key={col.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#DED9D1] p-6 sm:p-8 lg:p-10 shadow-2xs hover:shadow-xs transition-shadow ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Column */}
            <div className={`lg:col-span-7 rounded-xl sm:rounded-2xl overflow-hidden aspect-16/10 sm:aspect-16/9 bg-[#EEE9E1] border border-[#DED9D1] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <SafeImage
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                containerClassName="w-full h-full"
                fallbackCategory="furniture"
                loading="lazy"
              />
            </div>

            {/* Content Column */}
            <div className={`lg:col-span-5 flex flex-col justify-center min-w-0 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <span className="text-xs uppercase tracking-widest font-bold text-[#D9894D] mb-2 block">
                {col.itemCount} Curated Objects
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292827] tracking-tight mb-3 leading-tight">
                {col.title}
              </h2>
              <p className="text-xs sm:text-sm font-serif italic text-[#68645F] mb-3">
                {col.subtitle}
              </p>
              <p className="text-sm text-[#68645F] leading-relaxed mb-6 font-normal">
                {col.description}
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => handleExploreCollection(col.room)}
                  className="inline-flex items-center gap-2 bg-[#292827] hover:bg-[#1A1918] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-xs cursor-pointer group"
                >
                  <span>Explore Series</span>
                  <ArrowRight className="w-4 h-4 text-[#D9894D] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

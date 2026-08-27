import React from 'react';
import { COLLECTIONS } from '../data/collections';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { SafeImage } from './SafeImage';

export const FeaturedCollections: React.FC = () => {
  const { setActiveTab, setSelectedRoomFilter } = useShop();

  const handleCollectionClick = (room: string) => {
    setSelectedRoomFilter(room);
    setActiveTab('shop');
  };

  return (
    <section id="featured-collections-section" className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#9B9995] mb-2">
            <Compass className="w-3.5 h-3.5 text-[#D9894D]" />
            <span>Curated Environments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight">
            Explore Our Collections
          </h2>
        </div>
        <button
          onClick={() => {
            setSelectedRoomFilter('all');
            setActiveTab('collections');
          }}
          className="mt-4 sm:mt-0 inline-flex items-center text-sm font-semibold text-[#292827] hover:text-[#D9894D] transition-colors group cursor-pointer"
        >
          <span>View All Rooms</span>
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 4-Card Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {COLLECTIONS.map((col, idx) => (
          <motion.div
            key={col.id}
            id={`collection-card-${col.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => handleCollectionClick(col.room)}
            className="group bg-[#FFFFFF] border border-[#DED9D1] rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Image Container with 4:3 / 1:1 proportion */}
            <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden bg-[#EEE9E1]">
              <SafeImage
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                containerClassName="w-full h-full"
                fallbackCategory="furniture"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-[#FFFFFF]/90 backdrop-blur-xs text-[#292827] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-2xs z-10">
                {col.itemCount} Pieces
              </div>
            </div>

            {/* Content Under Image */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292827] group-hover:text-[#D9894D] transition-colors mb-2">
                  {col.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed mb-4 line-clamp-2 font-normal">
                  {col.subtitle}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DED9D1]/50">
                <span className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#292827] group-hover:text-[#D9894D] transition-colors">
                  Explore Collection
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

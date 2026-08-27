import React from 'react';
import { ROOM_CATEGORIES } from '../data/collections';
import { useShop } from '../context/ShopContext';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';
import { SafeImage } from './SafeImage';

export const ShopByRoom: React.FC = () => {
  const { setActiveTab, setSelectedRoomFilter } = useShop();

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoomFilter(roomId);
    setActiveTab('shop');
  };

  return (
    <section id="shop-by-room-section" className="py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9B9995] block mb-2">
            Spatial Navigation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight">
            Shop by Room
          </h2>
        </div>
        <p className="text-sm text-[#68645F] max-w-md">
          Explore tailored furniture and accents curated to harmonize every functional corner of your sanctuary.
        </p>
      </div>

      {/* 6-Grid Room Layout with Dynamic Aspect Ratios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ROOM_CATEGORIES.map((room, idx) => (
          <motion.div
            key={room.id}
            id={`room-tile-${room.id}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            onClick={() => handleRoomSelect(room.id)}
            className="group relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-5/4 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 border border-[#DED9D1]"
          >
            {/* Background Room Photo */}
            <SafeImage
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              containerClassName="w-full h-full"
              fallbackCategory="furniture"
              loading="lazy"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#292827]/85 via-[#292827]/30 to-transparent group-hover:from-[#292827]/90 transition-all duration-300 pointer-events-none" />

            {/* Bottom Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white flex items-end justify-between z-10">
              <div className="transform group-hover:-translate-y-1 transition-transform duration-300 min-w-0">
                <span className="text-[11px] uppercase tracking-wider text-[#DED9D1] block mb-1">
                  {room.count} Pieces
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {room.name}
                </h3>
                <p className="text-xs text-[#DED9D1]/90 mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {room.description}
                </p>
              </div>

              {/* Hover Floating Arrow */}
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF]/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#D9894D] group-hover:text-white transition-all duration-300 transform group-hover:scale-105 flex-shrink-0 ml-3">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

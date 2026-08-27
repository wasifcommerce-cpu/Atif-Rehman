import React from 'react';
import { useShop } from '../context/ShopContext';
import { BENEFIT_CARDS } from '../data/collections';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SafeImage } from './SafeImage';

export const Hero: React.FC = () => {
  const { setActiveTab, setSelectedCategoryFilter } = useShop();

  const handleExplore = () => {
    setSelectedCategoryFilter('all');
    setActiveTab('shop');
  };

  const handleOurStory = () => {
    setActiveTab('about');
  };

  const handleBenefitClick = (filterCategory: string) => {
    setSelectedCategoryFilter(filterCategory);
    setActiveTab('shop');
  };

  return (
    <section id="hero-section" className="relative w-full overflow-hidden pt-2 pb-12 sm:pb-16 lg:pb-24">
      {/* Main Hero Banner Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center shadow-lg border border-[#DED9D1]/60">
          
          {/* Background Image with subtle editorial grade */}
          <div className="absolute inset-0 z-0">
            <SafeImage
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90"
              alt="Curated contemporary neutral living room interior with sculptural furniture and soft ambient lighting"
              className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-1000 ease-out"
              containerClassName="w-full h-full"
              fallbackCategory="furniture"
            />
            {/* Architectural subtle gradient overlay: ensures high contrast for left-aligned typography */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EF]/95 via-[#F7F4EF]/75 to-transparent sm:w-[75%] lg:w-[60%]" />
            <div className="absolute inset-0 bg-[#292827]/10" />
          </div>

          {/* Left Hero Content */}
          <div className="relative z-10 max-w-xl lg:max-w-2xl p-6 sm:p-10 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Eyebrow */}
              <div className="mb-4 sm:mb-6">
                <span className="text-[#D9894D] text-xs font-bold tracking-[0.3em] uppercase">
                  Curated for Modern Living
                </span>
              </div>

              {/* Main Heading with Bold Typography */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.1] text-[#292827] mb-6 sm:mb-8 tracking-tight">
                Spaces Designed <br className="hidden sm:inline" />to Feel Like Home.
              </h1>

              {/* Supporting Copy */}
              <p className="text-[#68645F] text-base sm:text-lg leading-relaxed max-w-md mb-8 sm:mb-10 font-normal">
                Thoughtfully selected furniture and décor that bring warmth, character, and effortless style to your everyday spaces.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="hero-primary-cta"
                  onClick={handleExplore}
                  className="bg-[#D9894D] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-md text-sm font-semibold tracking-wide hover:bg-[#c4773e] transition-all transform hover:-translate-y-1 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={handleOurStory}
                  className="border border-[#292827] text-[#292827] px-8 sm:px-10 py-3.5 sm:py-4 rounded-md text-sm font-semibold tracking-wide hover:bg-[#292827] hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
                >
                  Our Story
                </button>
              </div>

            </motion.div>
          </div>

          {/* Right Floating Featured Quote Card */}
          <div className="hidden lg:block absolute bottom-10 right-10 z-10">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-[260px] border border-[#DED9D1]/50">
              <p className="font-serif italic text-base sm:text-lg text-[#292827] mb-1.5 leading-snug">
                “The perfect blend of form and comfort.”
              </p>
              <span className="text-[10px] uppercase tracking-widest text-[#9B9995] font-bold block">
                Featured: Solis Lounge Chair
              </span>
            </div>
          </div>

        </div>

        {/* Featured Category / Benefit Cards (Immediately below / docked with Hero) */}
        <div className="mt-6 sm:mt-8 lg:-mt-14 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {BENEFIT_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                id={`benefit-card-${card.id}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                onClick={() => handleBenefitClick(card.filterCategory)}
                className="group bg-[#FFFFFF] hover:bg-[#FAF8F5] border border-[#DED9D1] rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-4 sm:gap-5 items-center cursor-pointer hover:-translate-y-1"
              >
                {/* Thumbnail Image (35-40% proportion with 4:3 / 1:1 aspect) */}
                <div className="w-full aspect-square sm:aspect-4/3 rounded-xl overflow-hidden bg-[#EEE9E1] border border-[#DED9D1]/60">
                  <SafeImage
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                    fallbackCategory="furniture"
                  />
                </div>

                {/* Content Column (min-w-0 prevents text collapse or blowout) */}
                <div className="min-w-0 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-[0.15em] font-bold text-[#D9894D] block mb-1">
                    {card.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#292827] group-hover:text-[#D9894D] transition-colors leading-tight mb-1.5 truncate sm:whitespace-normal">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68645F] line-clamp-2 leading-relaxed mb-2.5">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center text-xs sm:text-sm font-medium text-[#292827] group-hover:text-[#D9894D] transition-colors">
                    {card.cta} <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

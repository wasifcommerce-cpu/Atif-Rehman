import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const EditorialStory: React.FC = () => {
  const { setActiveTab } = useShop();

  return (
    <section id="editorial-story-section" className="py-12 sm:py-16 lg:py-24 bg-[#EEE9E1]/70 border-y border-[#DED9D1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: Large Lifestyle Photograph with architectural depth */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#DED9D1] aspect-4/5 sm:aspect-4/3 lg:aspect-4/5 bg-[#FFFFFF]">
              <SafeImage
                src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85"
                alt="Natural sunlight filtering into a peaceful minimalist dining and living sanctuary"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                fallbackCategory="furniture"
                loading="lazy"
              />
              
              {/* Floating aesthetic quote badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs bg-[#FFFFFF]/95 backdrop-blur-md p-4 rounded-xl border border-[#DED9D1] shadow-md z-10">
                <p className="font-serif italic text-xs sm:text-sm text-[#292827] leading-relaxed">
                  “A quiet home is not an empty space, but one filled only with objects of quiet intention.”
                </p>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-[#9B9995] mt-2">
                  — Maison & Form Studio
                </p>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative Content */}
          <div className="lg:col-span-6 flex flex-col justify-center min-w-0">
            
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B9995] block mb-3">
              THE ART OF LIVING WELL
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight leading-[1.12] mb-6">
              Thoughtful Pieces. Beautiful Spaces.
            </h2>

            <p className="text-base sm:text-lg text-[#68645F] leading-relaxed mb-6 font-normal">
              We believe everyday objects hold the power to shape how we feel, rest, and gather. Rather than following transient trends, our studio partners with multi-generational woodturners, ceramicists, and textile weavers across Europe and Japan.
            </p>

            <p className="text-sm sm:text-base text-[#68645F] leading-relaxed mb-8">
              Every curve of our FSC®-certified oak chairs, every tone of our linen drapery, and every glaze of our stoneware vessels is engineered to age gracefully, developing a rich patina that tells the story of your life.
            </p>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-4 border-t border-[#DED9D1]">
              <div className="flex flex-col">
                <Leaf className="w-5 h-5 text-[#D9894D] mb-2" />
                <span className="text-xs font-bold text-[#292827]">Ethical Timber</span>
                <span className="text-[11px] text-[#68645F] mt-0.5">100% FSC-Certified</span>
              </div>
              <div className="flex flex-col">
                <ShieldCheck className="w-5 h-5 text-[#D9894D] mb-2" />
                <span className="text-xs font-bold text-[#292827]">Lifetime Joinery</span>
                <span className="text-[11px] text-[#68645F] mt-0.5">Mortise & Tenon Craft</span>
              </div>
              <div className="flex flex-col">
                <HeartHandshake className="w-5 h-5 text-[#D9894D] mb-2" />
                <span className="text-xs font-bold text-[#292827]">White Glove Care</span>
                <span className="text-[11px] text-[#68645F] mt-0.5">In-Room Setup</span>
              </div>
            </div>

            <div>
              <button
                id="design-philosophy-cta"
                onClick={() => setActiveTab('about')}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#292827] hover:text-[#D9894D] transition-colors group cursor-pointer"
              >
                <span>Our Design Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { useShop } from '../context/ShopContext';
import { Leaf, Award, Compass, Users, Sparkles, ArrowRight } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const AboutPage: React.FC = () => {
  const { setActiveTab } = useShop();

  const values = [
    {
      icon: Compass,
      title: 'Architectural Integrity',
      desc: 'We design pieces that honor space, proportion, and natural illumination, avoiding noisy decorative excess.'
    },
    {
      icon: Leaf,
      title: 'Slow, Considered Craft',
      desc: 'Every joint is hand-inspected, every upholstery edge double-stitched, and all timber sourced from certified sustainably managed forests.'
    },
    {
      icon: Award,
      title: 'Enduring Longevity',
      desc: 'Our objects are engineered not for single seasons, but to gain depth and character with years of daily living.'
    },
    {
      icon: Users,
      title: 'Human-Centered Ateliers',
      desc: 'We collaborate directly with independent multi-generational workshops in Portugal, Scandinavia, and Kyoto.'
    }
  ];

  return (
    <div id="about-page" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Editorial Studio Hero */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B9995] block mb-3">
          OUR ARCHITECTURAL ROOTS
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#292827] tracking-tight mb-6 leading-tight">
          Modern Furniture for Considered Living
        </h1>
        <p className="text-base sm:text-xl text-[#68645F] leading-relaxed font-normal">
          Founded in 2021 as a collaborative design studio, Maison & Form bridges timeless artisanal woodwork with quiet, contemporary minimalism.
        </p>
      </div>

      {/* Hero Visual Collage */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 sm:mb-24">
        <div className="md:col-span-8 rounded-2xl sm:rounded-3xl overflow-hidden aspect-16/10 bg-[#EEE9E1] border border-[#DED9D1]">
          <SafeImage
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
            alt="Maison & Form Design Studio in SoHo"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
            fallbackCategory="furniture"
          />
        </div>
        <div className="md:col-span-4 rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/5 bg-[#EEE9E1] border border-[#DED9D1]">
          <SafeImage
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
            alt="Handcrafting an oak credenza joint"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
            fallbackCategory="furniture"
          />
        </div>
      </div>

      {/* Brand Philosophy Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-24">
        <div className="lg:col-span-6">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D9894D] block mb-2">
            The Design Philosophy
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#292827] mb-6">
            A Response to Fast Furniture
          </h2>
          <p className="text-sm sm:text-base text-[#68645F] leading-relaxed mb-4">
            We started Maison & Form with a simple conviction: home is where our inner calm is restored. Modern spaces shouldn't feel sterile, nor should they be cluttered with disposable items destined for landfills.
          </p>
          <p className="text-sm sm:text-base text-[#68645F] leading-relaxed mb-6">
            By focusing on natural tactile textures—heavy unbleached linen, textured boucle, high-density European white oak, and hand-chiseled travertine—we create furniture that feels grounded, warm, and distinctly personal.
          </p>
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="p-6 bg-[#FFFFFF] rounded-2xl border border-[#DED9D1] shadow-2xs">
                <Icon className="w-6 h-6 text-[#D9894D] mb-3" />
                <h3 className="font-serif font-bold text-base text-[#292827] mb-2">{v.title}</h3>
                <p className="text-xs text-[#68645F] leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Explore */}
      <div className="bg-[#FAF8F5] rounded-3xl border border-[#DED9D1] p-8 sm:p-12 text-center max-w-4xl mx-auto">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292827] mb-3">
          Experience the Collection in Person
        </h3>
        <p className="text-sm text-[#68645F] mb-6 max-w-md mx-auto">
          Visit our flagship studio showroom in SoHo, New York, or schedule a complimentary 1-on-1 interior design consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab('shop')}
            className="bg-[#292827] hover:bg-[#1A1918] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-xs cursor-pointer"
          >
            Explore Furniture
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className="bg-[#FFFFFF] hover:bg-[#FAF8F5] border border-[#DED9D1] text-[#292827] text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer"
          >
            Book Studio Appointment
          </button>
        </div>
      </div>

    </div>
  );
};

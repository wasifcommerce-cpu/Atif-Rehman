import React from 'react';
import { Sparkles, Layers, RefreshCw, Feather } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const BrandStory: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Thoughtful Design',
      desc: 'Proportions sculpted to bring grounding calm, natural light flow, and balanced visual weight.'
    },
    {
      icon: Layers,
      title: 'Honest Materials',
      desc: 'Solid European oak, unglazed stoneware, tactile bouclé wool, and Roman travertine.'
    },
    {
      icon: RefreshCw,
      title: 'Responsible Sourcing',
      desc: 'FSC®-certified sustainable forestry and zero-waste artisanal atelier production.'
    },
    {
      icon: Feather,
      title: 'Everyday Comfort',
      desc: 'Engineered for lifelong daily living, relaxed gatherings, and restorative rest.'
    }
  ];

  return (
    <section id="brand-story-section" className="py-12 sm:py-16 lg:py-24 bg-[#FAF8F5] border-y border-[#DED9D1]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9B9995] block mb-3">
            THE MAISON & FORM ETHOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight mb-4">
            Made for Spaces With Character
          </h2>
          <p className="text-base sm:text-lg text-[#68645F] leading-relaxed">
            We reject the disposable nature of mass manufacturing. Every piece in our collection is conceived as an architectural anchor—designed with integrity, crafted by hand, and destined to become tomorrow’s heirloom.
          </p>
        </div>

        {/* 4 Pillars Grid with Material Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#DED9D1] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EEE9E1] text-[#D9894D] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#292827] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Material Showcase Strip */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DED9D1] bg-[#FFFFFF] p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 min-w-0">
              <span className="text-xs uppercase tracking-wider text-[#D9894D] font-bold block mb-2">
                Tactile Materiality
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292827] mb-3">
                Materials That Tell a Natural Story
              </h3>
              <p className="text-sm text-[#68645F] leading-relaxed mb-6">
                We celebrate natural imperfections—the unique grain knots in white oak, the mineral swirls in raw travertine, and the slub textures in unbleached Belgian linen.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-[#292827]">
                <span className="bg-[#EEE9E1] px-3 py-1.5 rounded-lg border border-[#DED9D1]">Solid White Oak</span>
                <span className="bg-[#EEE9E1] px-3 py-1.5 rounded-lg border border-[#DED9D1]">Italian Bouclé</span>
                <span className="bg-[#EEE9E1] px-3 py-1.5 rounded-lg border border-[#DED9D1]">Roman Travertine</span>
                <span className="bg-[#EEE9E1] px-3 py-1.5 rounded-lg border border-[#DED9D1]">High-Fired Clay</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-[#EEE9E1] border border-[#DED9D1]">
                <SafeImage
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80"
                  alt="Solid natural oak joinery detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  containerClassName="w-full h-full"
                  fallbackCategory="tables"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden bg-[#EEE9E1] border border-[#DED9D1]">
                <SafeImage
                  src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=500&q=80"
                  alt="Ceramic raw glaze texture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  containerClassName="w-full h-full"
                  fallbackCategory="decor"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden bg-[#EEE9E1] border border-[#DED9D1]">
                <SafeImage
                  src="https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=500&q=80"
                  alt="Bouclé upholstery weave"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  containerClassName="w-full h-full"
                  fallbackCategory="seating"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

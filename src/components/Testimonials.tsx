import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9B9995] block mb-2">
          Client Reflections
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight mb-3">
          Loved by Thoughtful Homeowners
        </h2>
        <p className="text-sm sm:text-base text-[#68645F]">
          See how our architectural furniture and considered décor find their place in homes around the world.
        </p>
      </div>

      {/* 3 Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            id={`testimonial-${item.id}`}
            className="bg-[#FFFFFF] border border-[#DED9D1] rounded-2xl p-6 sm:p-8 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Star Rating & Quote Mark */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D9894D] text-[#D9894D]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#DED9D1]" />
              </div>

              {/* Review Body */}
              <p className="text-sm sm:text-base text-[#292827] leading-relaxed font-serif italic mb-6">
                “{item.comment}”
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-[#DED9D1]/50">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-[#292827]">{item.author}</span>
                {item.verifiedPurchase && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#386641] font-semibold">
                    <CheckCircle className="w-3 h-3" />
                    Verified Client
                  </span>
                )}
              </div>
              <span className="text-xs text-[#9B9995] block">{item.location}</span>
              <span className="text-[11px] text-[#68645F] mt-1.5 block font-medium">
                Purchased: {item.itemPurchased}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-12 pt-8 border-t border-[#DED9D1]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-[#68645F]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D9894D]" />
          <span>4.9 / 5.0 Average Client Satisfaction</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D9894D]" />
          <span>Complimentary White-Glove In-Home Assembly</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D9894D]" />
          <span>30-Day Risk-Free Living Trial</span>
        </div>
      </div>

    </section>
  );
};

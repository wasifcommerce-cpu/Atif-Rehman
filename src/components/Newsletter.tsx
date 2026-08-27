import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Check, Mail, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('both');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setIsSubscribed(true);
    showToast('Subscribed to Maison & Form Journal', 'Enjoy 10% off with promo code MAISON10');
  };

  return (
    <section id="newsletter-section" className="py-12 sm:py-16 lg:py-20 bg-[#EEE9E1] border-t border-[#DED9D1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DED9D1] text-[11px] uppercase tracking-[0.2em] font-semibold text-[#68645F] mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D9894D]" />
          <span>The Design Journal</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight mb-4">
          Bring More Beauty Home
        </h2>

        <p className="text-base sm:text-lg text-[#68645F] max-w-xl mx-auto mb-8 font-normal">
          Join our journal for new collections, styling inspiration, private previews, and thoughtful ideas for modern living.
        </p>

        {isSubscribed ? (
          <div className="bg-[#FFFFFF] border border-[#DED9D1] rounded-2xl p-6 sm:p-8 max-w-md mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#386641]/15 text-[#386641] flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#292827] mb-1">
              Welcome to the Circle
            </h3>
            <p className="text-sm text-[#68645F] mb-4">
              Use your exclusive welcome code for 10% off your initial order.
            </p>
            <div className="inline-block bg-[#F7F4EF] border border-dashed border-[#D9894D] text-[#D9894D] font-mono font-bold text-base px-4 py-2 rounded-lg">
              MAISON10
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {/* Interest pills */}
            <div className="flex items-center justify-center gap-2 mb-4 text-xs">
              <button
                type="button"
                onClick={() => setInterest('furniture')}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  interest === 'furniture'
                    ? 'bg-[#292827] text-white font-medium'
                    : 'bg-white text-[#68645F] border border-[#DED9D1]'
                }`}
              >
                Furniture
              </button>
              <button
                type="button"
                onClick={() => setInterest('decor')}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  interest === 'decor'
                    ? 'bg-[#292827] text-white font-medium'
                    : 'bg-white text-[#68645F] border border-[#DED9D1]'
                }`}
              >
                Decor & Art
              </button>
              <button
                type="button"
                onClick={() => setInterest('both')}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  interest === 'both'
                    ? 'bg-[#292827] text-white font-medium'
                    : 'bg-white text-[#68645F] border border-[#DED9D1]'
                }`}
              >
                Everything
              </button>
            </div>

            {/* Input Row */}
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Your email address"
                  className="w-full bg-[#FFFFFF] border border-[#DED9D1] focus:border-[#D9894D] rounded-xl px-4 py-3 text-sm text-[#292827] placeholder:text-[#9B9995] focus:outline-hidden transition-colors shadow-2xs"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                id="newsletter-subscribe-btn"
                className="bg-[#D9894D] hover:bg-[#C27339] text-[#FFFFFF] font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {error && <p className="text-xs text-red-600 mt-2 text-left">{error}</p>}

            <p className="text-[11px] text-[#9B9995] mt-3">
              We respect your inbox serenity. Unsubscribe whenever you wish.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};

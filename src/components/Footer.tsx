import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowUpRight, Instagram, Facebook, Twitter, PinIcon as Pinterest, Mail, MapPin, Phone } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface FooterProps {
  onOpenAccountModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAccountModal }) => {
  const {
    setActiveTab,
    setSelectedCategoryFilter,
    setSelectedRoomFilter,
    setIsWishlistOpen
  } = useShop();

  const handleNav = (tab: 'home' | 'shop' | 'collections' | 'about' | 'contact', category?: string, room?: string) => {
    if (category) setSelectedCategoryFilter(category);
    else setSelectedCategoryFilter('all');
    
    if (room) setSelectedRoomFilter(room);
    else setSelectedRoomFilter('all');
    
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-[#DED9D1] bg-[#FFFFFF]">
      
      {/* Editorial Category Visual Strip matching Bold Typography Theme */}
      <div className="border-b border-[#DED9D1] py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Tile 1: Modern Furniture */}
          <div className="flex flex-col gap-3">
            <div 
              onClick={() => handleNav('shop', 'seating')}
              className="aspect-4/5 w-full bg-[#EEE9E1] rounded-xl overflow-hidden relative group cursor-pointer border border-[#DED9D1]"
            >
              <SafeImage 
                src="https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=600&q=85" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Modern Furniture Collection" 
                containerClassName="w-full h-full"
                fallbackCategory="furniture"
              />
              <div className="absolute bottom-3 left-3 bg-[#FFFFFF] px-3 py-1 text-[10px] font-bold tracking-tight uppercase shadow-xs rounded-sm z-10">
                New Arrivals
              </div>
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="text-sm font-serif italic text-[#292827]">Modern Furniture</span>
              <button 
                onClick={() => handleNav('shop', 'seating')}
                className="text-[11px] text-[#D9894D] font-bold uppercase tracking-wider hover:underline cursor-pointer"
              >
                Shop &rarr;
              </button>
            </div>
          </div>

          {/* Tile 2: Home Décor */}
          <div className="flex flex-col gap-3">
            <div 
              onClick={() => handleNav('shop', 'decor')}
              className="aspect-4/5 w-full bg-[#EEE9E1] rounded-xl overflow-hidden relative group cursor-pointer border border-[#DED9D1]"
            >
              <SafeImage 
                src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=85" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Home Décor & Stoneware" 
                containerClassName="w-full h-full"
                fallbackCategory="decor"
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="text-sm font-serif italic text-[#292827]">Home Décor</span>
              <button 
                onClick={() => handleNav('shop', 'decor')}
                className="text-[11px] text-[#D9894D] font-bold uppercase tracking-wider hover:underline cursor-pointer"
              >
                Shop &rarr;
              </button>
            </div>
          </div>

          {/* Tile 3: Refined Lighting */}
          <div className="flex flex-col gap-3">
            <div 
              onClick={() => handleNav('shop', 'lighting')}
              className="aspect-4/5 w-full bg-[#EEE9E1] rounded-xl overflow-hidden relative group cursor-pointer border border-[#DED9D1]"
            >
              <SafeImage 
                src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=85" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Refined Lighting" 
                containerClassName="w-full h-full"
                fallbackCategory="lighting"
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="text-sm font-serif italic text-[#292827]">Refined Lighting</span>
              <button 
                onClick={() => handleNav('shop', 'lighting')}
                className="text-[11px] text-[#D9894D] font-bold uppercase tracking-wider hover:underline cursor-pointer"
              >
                Shop &rarr;
              </button>
            </div>
          </div>

          {/* Tile 4: Journal Box */}
          <div className="flex flex-col justify-center lg:border-l border-[#DED9D1] lg:pl-8 py-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#292827] mb-2.5">
              Join Our Journal
            </h4>
            <p className="text-xs text-[#68645F] leading-relaxed mb-4">
              Inspiration and early access to our latest collections delivered to your inbox.
            </p>
            <div className="flex items-center border-b border-[#292827] pb-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent text-xs outline-hidden w-full placeholder-[#9B9995] text-[#292827]"
              />
              <button 
                onClick={() => alert('Thank you for subscribing to the Maison & Form Journal!')}
                className="text-[11px] font-bold uppercase tracking-wider hover:text-[#D9894D] transition-colors cursor-pointer"
              >
                Join
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Multi-Column Links Section in Sophisticated Dark Timber */}
      <div className="bg-[#242322] text-[#DED9D1] pt-14 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding Row & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3B3A38]">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] flex items-center justify-center text-[#242322]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 21V7l9-4 9 4v14" />
                  <path d="M9 21V11h6v10" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold text-[#FAF8F5] tracking-tight">
                Maison & Form
              </span>
            </div>
            <p className="text-sm text-[#9B9995] leading-relaxed max-w-sm mb-6 font-normal">
              Modern furniture and considered décor designed to create beautiful, comfortable spaces. Sourced with integrity, crafted for generations.
            </p>
            <div className="flex items-center gap-4 text-[#9B9995]">
              <a href="#instagram" className="w-9 h-9 rounded-full bg-[#312F2C] hover:bg-[#D9894D] hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#pinterest" className="w-9 h-9 rounded-full bg-[#312F2C] hover:bg-[#D9894D] hover:text-white flex items-center justify-center transition-colors" aria-label="Pinterest">
                <Pinterest className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-full bg-[#312F2C] hover:bg-[#D9894D] hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-[#312F2C] hover:bg-[#D9894D] hover:text-white flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Col 1: Shop */}
            <div>
              <h4 className="font-serif text-base font-bold text-[#FAF8F5] mb-4">Shop</h4>
              <ul className="space-y-2.5 text-xs text-[#9B9995]">
                <li>
                  <button onClick={() => handleNav('shop')} className="hover:text-[#FAF8F5] transition-colors">
                    All Products
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('shop', 'seating')} className="hover:text-[#FAF8F5] transition-colors">
                    Furniture
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('shop', 'decor')} className="hover:text-[#FAF8F5] transition-colors">
                    Décor & Accents
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('shop', 'lighting')} className="hover:text-[#FAF8F5] transition-colors">
                    Lighting
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('shop')} className="hover:text-[#FAF8F5] transition-colors">
                    New Arrivals
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 2: Explore */}
            <div>
              <h4 className="font-serif text-base font-bold text-[#FAF8F5] mb-4">Explore</h4>
              <ul className="space-y-2.5 text-xs text-[#9B9995]">
                <li>
                  <button onClick={() => handleNav('collections')} className="hover:text-[#FAF8F5] transition-colors">
                    Collections
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('shop', undefined, 'living-room')} className="hover:text-[#FAF8F5] transition-colors">
                    Living Room
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('shop', undefined, 'bedroom')} className="hover:text-[#FAF8F5] transition-colors">
                    Bedroom
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('shop', undefined, 'home-office')} className="hover:text-[#FAF8F5] transition-colors">
                    Home Office
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('about')} className="hover:text-[#FAF8F5] transition-colors">
                    Design Journal
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <h4 className="font-serif text-base font-bold text-[#FAF8F5] mb-4">Company</h4>
              <ul className="space-y-2.5 text-xs text-[#9B9995]">
                <li>
                  <button onClick={() => handleNav('about')} className="hover:text-[#FAF8F5] transition-colors">
                    About Our Studio
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('about')} className="hover:text-[#FAF8F5] transition-colors">
                    Craftsmanship
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('contact')} className="hover:text-[#FAF8F5] transition-colors">
                    Design Consultations
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('contact')} className="hover:text-[#FAF8F5] transition-colors">
                    Contact Us
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('contact')} className="hover:text-[#FAF8F5] transition-colors">
                    Soho Showroom
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Client Care */}
            <div>
              <h4 className="font-serif text-base font-bold text-[#FAF8F5] mb-4">Customer Care</h4>
              <ul className="space-y-2.5 text-xs text-[#9B9995]">
                <li>
                  <button onClick={onOpenAccountModal} className="hover:text-[#FAF8F5] transition-colors">
                    Studio Account
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsWishlistOpen(true)} className="hover:text-[#FAF8F5] transition-colors">
                    Saved Pieces
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('contact')} className="hover:text-[#FAF8F5] transition-colors">
                    White Glove Delivery
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('contact')} className="hover:text-[#FAF8F5] transition-colors">
                    30-Day Return Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('contact')} className="hover:text-[#FAF8F5] transition-colors">
                    Care Guides
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar with Copyright & Payment Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68645F]">
          
          <div className="flex items-center gap-6">
            <span>© 2026 Maison & Form Studio Inc. All rights reserved.</span>
            <div className="hidden md:flex items-center gap-4 text-[11px]">
              <a href="#privacy" className="hover:text-[#FAF8F5]">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-[#FAF8F5]">Terms of Service</a>
              <span>•</span>
              <a href="#accessibility" className="hover:text-[#FAF8F5]">Accessibility</a>
            </div>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2">
            <span className="bg-[#312F2C] px-2.5 py-1 rounded text-[10px] font-semibold text-[#DED9D1] border border-[#3B3A38]">
              Apple Pay
            </span>
            <span className="bg-[#312F2C] px-2.5 py-1 rounded text-[10px] font-semibold text-[#DED9D1] border border-[#3B3A38]">
              Visa
            </span>
            <span className="bg-[#312F2C] px-2.5 py-1 rounded text-[10px] font-semibold text-[#DED9D1] border border-[#3B3A38]">
              Mastercard
            </span>
            <span className="bg-[#312F2C] px-2.5 py-1 rounded text-[10px] font-semibold text-[#DED9D1] border border-[#3B3A38]">
              Amex
            </span>
          </div>

        </div>

      </div>
    </div>
  </footer>
);
};

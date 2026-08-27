import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Search, Heart, ShoppingBag, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAccountModal: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenAccountModal
}) => {
  const {
    activeTab,
    setActiveTab,
    setSelectedCategoryFilter,
    setSelectedRoomFilter,
    setIsSearchOpen,
    setIsWishlistOpen,
    setIsCartOpen,
    cartCount,
    wishlist
  } = useShop();

  const handleNavigate = (
    tab: 'home' | 'shop' | 'collections' | 'about' | 'contact',
    category?: string,
    room?: string
  ) => {
    if (category) {
      setSelectedCategoryFilter(category);
    } else {
      setSelectedCategoryFilter('all');
    }
    if (room) {
      setSelectedRoomFilter(room);
    } else {
      setSelectedRoomFilter('all');
    }
    setActiveTab(tab);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#292827]/60 z-50 backdrop-blur-xs md:hidden"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 bottom-0 left-0 w-[85%] max-w-sm bg-[#F7F4EF] z-50 shadow-2xl flex flex-col justify-between overflow-y-auto md:hidden"
          >
            {/* Top Bar */}
            <div className="p-6 border-b border-[#DED9D1] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#292827] flex items-center justify-center text-[#D9894D]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M3 21V7l9-4 9 4v14" />
                    <path d="M9 21V11h6v10" />
                  </svg>
                </div>
                <span className="font-serif font-bold text-lg text-[#292827]">Maison & Form</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#68645F] hover:text-[#292827] rounded-full"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions Bar */}
            <div className="grid grid-cols-3 gap-2 px-6 pt-4 pb-2 border-b border-[#DED9D1]/50">
              <button
                onClick={() => {
                  onClose();
                  setIsSearchOpen(true);
                }}
                className="flex flex-col items-center gap-1.5 py-2.5 px-2 bg-[#EEE9E1] rounded-lg text-xs font-medium text-[#292827]"
              >
                <Search className="w-4 h-4 text-[#68645F]" />
                Search
              </button>
              <button
                onClick={() => {
                  onClose();
                  setIsWishlistOpen(true);
                }}
                className="flex flex-col items-center gap-1.5 py-2.5 px-2 bg-[#EEE9E1] rounded-lg text-xs font-medium text-[#292827] relative"
              >
                <Heart className="w-4 h-4 text-[#68645F]" />
                Saved ({wishlist.length})
              </button>
              <button
                onClick={() => {
                  onClose();
                  setIsCartOpen(true);
                }}
                className="flex flex-col items-center gap-1.5 py-2.5 px-2 bg-[#292827] text-white rounded-lg text-xs font-medium"
              >
                <ShoppingBag className="w-4 h-4 text-[#D9894D]" />
                Bag ({cartCount})
              </button>
            </div>

            {/* Main Menu Links */}
            <div className="px-6 py-6 flex-1 space-y-1">
              <p className="text-[11px] uppercase tracking-wider text-[#9B9995] font-semibold mb-3">
                Navigation
              </p>

              <button
                onClick={() => handleNavigate('home')}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                  activeTab === 'home' ? 'bg-[#EEE9E1] text-[#292827] font-semibold' : 'text-[#68645F] hover:bg-[#EEE9E1]/50'
                }`}
              >
                Home
                <ArrowRight className="w-4 h-4 text-[#9B9995]" />
              </button>

              <button
                onClick={() => handleNavigate('shop')}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                  activeTab === 'shop' ? 'bg-[#EEE9E1] text-[#292827] font-semibold' : 'text-[#68645F] hover:bg-[#EEE9E1]/50'
                }`}
              >
                All Products
                <ArrowRight className="w-4 h-4 text-[#9B9995]" />
              </button>

              <button
                onClick={() => handleNavigate('collections')}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                  activeTab === 'collections' ? 'bg-[#EEE9E1] text-[#292827] font-semibold' : 'text-[#68645F] hover:bg-[#EEE9E1]/50'
                }`}
              >
                Collections
                <ArrowRight className="w-4 h-4 text-[#9B9995]" />
              </button>

              <div className="pt-4 pb-2">
                <p className="text-[11px] uppercase tracking-wider text-[#9B9995] font-semibold mb-2">
                  Browse by Category
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <button
                    onClick={() => handleNavigate('shop', 'seating')}
                    className="text-left py-2 px-3 bg-[#FFFFFF] border border-[#DED9D1] rounded-md text-[#292827] hover:border-[#D9894D]"
                  >
                    Seating & Sofas
                  </button>
                  <button
                    onClick={() => handleNavigate('shop', 'tables')}
                    className="text-left py-2 px-3 bg-[#FFFFFF] border border-[#DED9D1] rounded-md text-[#292827] hover:border-[#D9894D]"
                  >
                    Tables & Desks
                  </button>
                  <button
                    onClick={() => handleNavigate('shop', 'lighting')}
                    className="text-left py-2 px-3 bg-[#FFFFFF] border border-[#DED9D1] rounded-md text-[#292827] hover:border-[#D9894D]"
                  >
                    Lighting
                  </button>
                  <button
                    onClick={() => handleNavigate('shop', 'decor')}
                    className="text-left py-2 px-3 bg-[#FFFFFF] border border-[#DED9D1] rounded-md text-[#292827] hover:border-[#D9894D]"
                  >
                    Ceramics & Décor
                  </button>
                </div>
              </div>

              <div className="pt-3 space-y-1">
                <button
                  onClick={() => handleNavigate('about')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-base font-medium text-[#68645F] hover:bg-[#EEE9E1]/50 flex items-center justify-between"
                >
                  Our Philosophy & Story
                  <ArrowRight className="w-4 h-4 text-[#9B9995]" />
                </button>
                <button
                  onClick={() => handleNavigate('contact')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-base font-medium text-[#68645F] hover:bg-[#EEE9E1]/50 flex items-center justify-between"
                >
                  Interior Design Consultation
                  <ArrowRight className="w-4 h-4 text-[#9B9995]" />
                </button>
              </div>
            </div>

            {/* Footer details in Drawer */}
            <div className="p-6 bg-[#EEE9E1] border-t border-[#DED9D1] text-xs text-[#68645F] space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D9894D]" />
                <span>Showroom: 412 Mercer St, Soho, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D9894D]" />
                <span>+1 (212) 840-2930</span>
              </div>
              <p className="pt-2 text-[11px] text-[#9B9995]">
                Complimentary White-Glove delivery on orders over $500.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

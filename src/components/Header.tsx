import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';

interface HeaderProps {
  onOpenMobileMenu: () => void;
  onOpenAccountModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu, onOpenAccountModal }) => {
  const {
    activeTab,
    setActiveTab,
    cartCount,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    setIsSearchOpen,
    setSelectedCategoryFilter,
    setSelectedRoomFilter
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: 'home' | 'shop' | 'collections' | 'about' | 'contact', category?: string, room?: string) => {
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
  };

  return (
    <header
      id="main-navigation-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4EF]/95 backdrop-blur-md shadow-xs border-b border-[#DED9D1]/70 py-3.5'
          : 'bg-[#F7F4EF] border-b border-[#DED9D1]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Identity & Logo */}
        <div className="flex items-center gap-8">
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            {/* Minimalist architectural mark */}
            <div className="w-8 h-8 rounded-md bg-[#292827] flex items-center justify-center text-[#D9894D] shadow-xs group-hover:bg-[#1E1D1C] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21V7l9-4 9 4v14" />
                <path d="M9 21V11h6v10" />
              </svg>
            </div>
            <div>
              <span className="text-lg sm:text-xl tracking-[0.2em] font-serif font-bold uppercase text-[#292827] block leading-none">
                Maison & Form
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#68645F] font-bold mt-0.5 block">
                Studio & Interiors
              </span>
            </div>
          </button>
        </div>

        {/* Center: Desktop Navigation Links with Bold Typography */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wider uppercase text-[#68645F]">
          <button
            id="nav-link-home"
            onClick={() => handleNavClick('home')}
            className={`transition-colors py-1 relative hover:text-[#D9894D] ${
              activeTab === 'home' ? 'text-[#292827] font-bold' : ''
            }`}
          >
            Home
            {activeTab === 'home' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D9894D] rounded-full" />
            )}
          </button>

          <button
            id="nav-link-shop"
            onClick={() => handleNavClick('shop')}
            className={`transition-colors py-1 relative hover:text-[#D9894D] ${
              activeTab === 'shop' ? 'text-[#292827] font-bold' : ''
            }`}
          >
            Shop
            {activeTab === 'shop' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D9894D] rounded-full" />
            )}
          </button>

          <button
            id="nav-link-collections"
            onClick={() => handleNavClick('collections')}
            className={`transition-colors py-1 relative hover:text-[#D9894D] ${
              activeTab === 'collections' ? 'text-[#292827] font-bold' : ''
            }`}
          >
            Collections
            {activeTab === 'collections' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D9894D] rounded-full" />
            )}
          </button>

          <button
            id="nav-link-furniture"
            onClick={() => handleNavClick('shop', 'seating')}
            className="hover:text-[#D9894D] transition-colors py-1"
          >
            Furniture
          </button>

          <button
            id="nav-link-decor"
            onClick={() => handleNavClick('shop', 'decor')}
            className="hover:text-[#D9894D] transition-colors py-1"
          >
            Décor
          </button>

          <button
            id="nav-link-about"
            onClick={() => handleNavClick('about')}
            className={`transition-colors py-1 relative hover:text-[#D9894D] ${
              activeTab === 'about' ? 'text-[#292827] font-bold' : ''
            }`}
          >
            About
            {activeTab === 'about' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D9894D] rounded-full" />
            )}
          </button>
        </nav>

        {/* Right: Actions (Search, Account, Wishlist, Cart) & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Trigger */}
          <button
            id="header-search-btn"
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-[#292827] hover:text-[#D9894D] hover:bg-[#EEE9E1]/70 rounded-full transition-colors"
            aria-label="Search collection"
            title="Search products"
          >
            <Search className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* Account */}
          <button
            id="header-account-btn"
            onClick={onOpenAccountModal}
            className="hidden sm:inline-flex p-2 text-[#292827] hover:text-[#D9894D] hover:bg-[#EEE9E1]/70 rounded-full transition-colors"
            aria-label="Account"
            title="Design Studio Account"
          >
            <User className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* Wishlist */}
          <button
            id="header-wishlist-btn"
            onClick={() => setIsWishlistOpen(true)}
            className="p-2 text-[#292827] hover:text-[#D9894D] hover:bg-[#EEE9E1]/70 rounded-full transition-colors relative"
            aria-label="Wishlist"
            title="Saved Pieces"
          >
            <Heart className="w-5 h-5 stroke-[1.8]" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#D9894D] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Bag */}
          <button
            id="header-cart-btn"
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-[#292827] hover:bg-[#1A1918] text-[#FFFFFF] px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-xs hover:shadow-sm"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4 text-[#D9894D]" />
            <span className="hidden sm:inline text-xs tracking-wider uppercase">Bag</span>
            <span className="bg-[#D9894D] text-[#FFFFFF] text-[11px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
              {cartCount}
            </span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            id="header-mobile-menu-btn"
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 text-[#292827] hover:bg-[#EEE9E1] rounded-lg transition-colors ml-1"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  );
};

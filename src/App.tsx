import React, { useState } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { FeaturedCollections } from './components/FeaturedCollections';
import { LatestArrivals } from './components/LatestArrivals';
import { FeaturedProducts } from './components/FeaturedProducts';
import { EditorialStory } from './components/EditorialStory';
import { ShopByRoom } from './components/ShopByRoom';
import { Bestsellers } from './components/Bestsellers';
import { BrandStory } from './components/BrandStory';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { AccountModal } from './components/AccountModal';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ShopPage } from './components/ShopPage';
import { CollectionsPage } from './components/CollectionsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Toast } from './components/Toast';

const MainAppContent: React.FC = () => {
  const { activeTab } = useShop();
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#292827] selection:bg-[#D9894D]/30 selection:text-[#292827]">
      
      {/* Toast Notification Container */}
      <Toast />

      {/* Persistent Sticky Editorial Header */}
      <Header onOpenAccountModal={() => setIsAccountModalOpen(true)} />

      {/* Slideout Drawers & Overlays */}
      <MobileMenu onOpenAccountModal={() => setIsAccountModalOpen(true)} />
      <CartDrawer />
      <WishlistDrawer />
      <SearchOverlay />
      <QuickViewModal />
      <CheckoutModal />
      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
      />

      {/* Main Dynamic View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero />
            <FeaturedCollections />
            <LatestArrivals />
            <FeaturedProducts />
            <EditorialStory />
            <ShopByRoom />
            <Bestsellers />
            <BrandStory />
            <Testimonials />
            <Newsletter />
          </>
        )}

        {activeTab === 'shop' && (
          <>
            <ShopPage />
            <Newsletter />
          </>
        )}

        {activeTab === 'product-detail' && (
          <>
            <ProductDetailPage />
            <Newsletter />
          </>
        )}

        {activeTab === 'collections' && (
          <>
            <CollectionsPage />
            <Newsletter />
          </>
        )}

        {activeTab === 'about' && (
          <>
            <AboutPage />
            <Newsletter />
          </>
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Comprehensive Multi-Column Footer */}
      <Footer onOpenAccountModal={() => setIsAccountModalOpen(true)} />

    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainAppContent />
    </ShopProvider>
  );
}

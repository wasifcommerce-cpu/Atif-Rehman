import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SafeImage } from './SafeImage';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    openProductDetail
  } = useShop();

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleMoveToBag = (product: typeof PRODUCTS[0]) => {
    addToCart(product, 1);
  };

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWishlistOpen(false)}
            className="fixed inset-0 bg-[#292827]/60 z-50 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 bottom-0 right-0 w-full max-w-md bg-[#F7F4EF] z-50 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#DED9D1] bg-[#FFFFFF] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#D9894D] fill-[#D9894D]" />
                <h3 className="font-serif text-xl font-bold text-[#292827]">Saved Pieces</h3>
                <span className="bg-[#EEE9E1] text-[#292827] text-xs font-bold px-2 py-0.5 rounded-full">
                  {savedProducts.length}
                </span>
              </div>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-1.5 text-[#68645F] hover:text-[#292827] hover:bg-[#EEE9E1] rounded-full transition-colors cursor-pointer"
                aria-label="Close wishlist"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {savedProducts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[#EEE9E1] text-[#9B9995] flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#292827] mb-2">
                    Your Wishlist is Empty
                  </h4>
                  <p className="text-sm text-[#68645F] mb-6 max-w-xs mx-auto">
                    Save pieces you love as you curate your home sanctuary.
                  </p>
                </div>
              ) : (
                savedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-[#FFFFFF] border border-[#DED9D1] rounded-xl p-4 flex gap-4 shadow-2xs group"
                  >
                    <div
                      className="w-20 h-20 rounded-lg overflow-hidden bg-[#EEE9E1] flex-shrink-0 cursor-pointer"
                      onClick={() => {
                        setIsWishlistOpen(false);
                        openProductDetail(product);
                      }}
                    >
                      <SafeImage
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        containerClassName="w-full h-full"
                        fallbackCategory={product.category}
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h4
                            className="font-serif font-bold text-sm text-[#292827] line-clamp-1 hover:text-[#D9894D] cursor-pointer"
                            onClick={() => {
                              setIsWishlistOpen(false);
                              openProductDetail(product);
                            }}
                          >
                            {product.name}
                          </h4>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="text-[#9B9995] hover:text-red-600 transition-colors p-1 cursor-pointer"
                            title="Remove from saved"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-[#68645F] font-bold mt-1">
                          ${product.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => handleMoveToBag(product)}
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#292827] hover:bg-[#1A1918] text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer"
                        >
                          <ShoppingBag className="w-3 h-3 text-[#D9894D]" />
                          <span>Move to Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {savedProducts.length > 0 && (
              <div className="p-6 bg-[#FFFFFF] border-t border-[#DED9D1]">
                <button
                  onClick={() => {
                    savedProducts.forEach((p) => addToCart(p, 1));
                    setIsWishlistOpen(false);
                  }}
                  className="w-full bg-[#292827] hover:bg-[#1A1918] text-white font-semibold text-sm py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Add All Saved Pieces to Bag</span>
                  <ArrowRight className="w-4 h-4 text-[#D9894D]" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

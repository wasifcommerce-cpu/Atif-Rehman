import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Star, Heart, ShoppingBag, Check, ArrowRight, Shield, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SafeImage } from './SafeImage';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    toggleWishlist,
    isWishlisted,
    openProductDetail
  } = useShop();

  const [selectedColor, setSelectedColor] = useState(quickViewProduct?.colors[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedColor(quickViewProduct.colors[0]);
      setActiveImageIndex(0);
      setQuantity(1);
      setIsAdded(false);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const isFavorite = isWishlisted(quickViewProduct.id);

  const handleAddToCart = () => {
    if (!selectedColor) return;
    addToCart(quickViewProduct, quantity, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleViewFullPage = () => {
    closeQuickView();
    openProductDetail(quickViewProduct);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeQuickView}
        className="fixed inset-0 bg-[#292827]/75 z-50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#DED9D1] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FAF8F5] border border-[#DED9D1] text-[#292827] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Gallery Column */}
          <div className="w-full md:w-1/2 p-6 bg-[#F7F4EF] flex flex-col justify-between">
            <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#EEE9E1] border border-[#DED9D1]/60 mb-4">
              <SafeImage
                src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                fallbackCategory={quickViewProduct.category}
              />
            </div>

            {/* Thumbnail list */}
            {quickViewProduct.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#292827] scale-105 shadow-xs'
                        : 'border-[#DED9D1] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <SafeImage
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                      fallbackCategory={quickViewProduct.category}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Purchase Column */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto min-w-0">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9B9995]">
                  {quickViewProduct.category} • {quickViewProduct.room.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#292827]">
                  <Star className="w-3.5 h-3.5 fill-[#D9894D] text-[#D9894D]" />
                  <span>{quickViewProduct.rating}</span>
                  <span className="text-[#9B9995]">({quickViewProduct.reviewCount})</span>
                </div>
              </div>

              {/* Title & Price */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292827] mb-1">
                {quickViewProduct.name}
              </h3>
              <p className="text-xs text-[#68645F] mb-4">{quickViewProduct.subtitle}</p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-bold text-2xl text-[#292827]">
                  ${quickViewProduct.price.toLocaleString()}
                </span>
                {quickViewProduct.compareAtPrice && (
                  <span className="text-sm text-[#9B9995] line-through">
                    ${quickViewProduct.compareAtPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-[#386641] font-semibold bg-[#386641]/10 px-2 py-0.5 rounded">
                  In Stock & Ready to Ship
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed mb-6">
                {quickViewProduct.description}
              </p>

              {/* Color Swatch Selector */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-[#292827] block mb-2">
                  Finish: <span className="text-[#68645F] font-normal">{selectedColor?.name}</span>
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {quickViewProduct.colors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color);
                        if (quickViewProduct.images[i]) setActiveImageIndex(i);
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                        selectedColor?.name === color.name
                          ? 'border-[#292827] bg-[#FAF8F5] text-[#292827] font-semibold shadow-2xs'
                          : 'border-[#DED9D1] text-[#68645F] hover:border-[#9B9995]'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-[#DED9D1]"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimensions specs */}
              <div className="text-xs text-[#68645F] mb-6 p-3 bg-[#F7F4EF] rounded-xl border border-[#DED9D1]">
                <strong>Dimensions:</strong> {quickViewProduct.dimensions}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="space-y-3 pt-4 border-t border-[#DED9D1]">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#DED9D1] rounded-xl bg-[#FAF8F5] p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-[#68645F] hover:text-[#292827] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-[#68645F] hover:text-[#292827] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag */}
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold transition-all shadow-md cursor-pointer ${
                    isAdded
                      ? 'bg-[#386641] text-white'
                      : 'bg-[#D9894D] hover:bg-[#C27339] text-white hover:-translate-y-0.5'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag • ${(quickViewProduct.price * quantity).toLocaleString()}</span>
                    </>
                  )}
                </button>

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                    isFavorite
                      ? 'bg-[#D9894D] text-white border-[#D9894D]'
                      : 'border-[#DED9D1] text-[#292827] hover:bg-[#FAF8F5]'
                  }`}
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* View Full Product Link */}
              <button
                onClick={handleViewFullPage}
                className="w-full text-center text-xs font-semibold text-[#292827] hover:text-[#D9894D] py-1 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>View Full Specifications & Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

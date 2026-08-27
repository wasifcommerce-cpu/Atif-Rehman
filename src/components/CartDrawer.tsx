import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, Tag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SafeImage } from './SafeImage';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateCartQuantity,
    removeFromCart,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartTotal,
    promoCode,
    promoApplied,
    applyPromoCode,
    removePromoCode,
    setIsCheckoutOpen,
    setActiveTab
  } = useShop();

  const [inputCode, setInputCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; success: boolean } | null>(null);

  // Free shipping threshold is $500
  const freeShippingThreshold = 500;
  const progressToFreeShipping = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode) return;
    const res = applyPromoCode(inputCode);
    setPromoMessage({ text: res.message, success: res.success });
    if (res.success) {
      setInputCode('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
    setActiveTab('shop');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
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
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#DED9D1] bg-[#FFFFFF] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-bold text-[#292827]">Your Shopping Bag</h3>
                <span className="bg-[#EEE9E1] text-[#292827] text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-[#68645F] hover:text-[#292827] hover:bg-[#EEE9E1] rounded-full transition-colors"
                aria-label="Close bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="bg-[#EEE9E1] px-6 py-3 border-b border-[#DED9D1] text-xs text-[#292827]">
              {amountNeededForFreeShipping > 0 ? (
                <p className="mb-1.5 flex items-center justify-between">
                  <span>Add <strong className="text-[#D9894D] font-bold">${amountNeededForFreeShipping}</strong> for Complimentary Delivery</span>
                  <span className="text-[10px] text-[#68645F]">{progressToFreeShipping}%</span>
                </p>
              ) : (
                <p className="mb-1.5 text-[#386641] font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  <span>You have unlocked Complimentary White-Glove Delivery!</span>
                </p>
              )}
              <div className="w-full h-1.5 bg-[#DED9D1] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#D9894D] rounded-full transition-all duration-300"
                  style={{ width: `${progressToFreeShipping}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[#EEE9E1] text-[#9B9995] flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#292827] mb-2">
                    Your bag is currently empty
                  </h4>
                  <p className="text-sm text-[#68645F] mb-6 max-w-xs mx-auto">
                    Explore our curated seating, handcrafted tables, and artful ceramics.
                  </p>
                  <button
                    onClick={handleContinueShopping}
                    className="bg-[#292827] hover:bg-[#1A1918] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-xs"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#FFFFFF] border border-[#DED9D1] rounded-xl p-4 flex gap-4 shadow-2xs"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#EEE9E1] flex-shrink-0 border border-[#DED9D1]/50">
                      <SafeImage
                        src={item.selectedColor.image || item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                        fallbackCategory={item.product.category}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif font-bold text-sm text-[#292827] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#9B9995] hover:text-red-600 transition-colors p-1"
                            title="Remove item"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-[#68645F] mt-0.5">
                          Finish: <span className="font-medium text-[#292827]">{item.selectedColor.name}</span>
                        </p>
                      </div>

                      {/* Quantity Selector & Price */}
                      <div className="flex items-center justify-between pt-2 mt-2 border-t border-[#DED9D1]/40">
                        <div className="flex items-center border border-[#DED9D1] rounded-lg bg-[#FAF8F5]">
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-[#68645F] hover:text-[#292827] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-[#292827]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-[#68645F] hover:text-[#292827] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="font-bold text-sm text-[#292827]">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer & Total */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#FFFFFF] border-t border-[#DED9D1] space-y-4">
                
                {/* Promo Code Input */}
                {promoApplied ? (
                  <div className="flex items-center justify-between bg-[#F7F4EF] p-2.5 rounded-xl border border-[#DED9D1] text-xs">
                    <div className="flex items-center gap-1.5 text-[#386641] font-semibold">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Code applied: <strong>{promoCode}</strong> (-10%)</span>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-xs text-[#9B9995] hover:text-[#292827] underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCode} className="flex gap-2">
                    <input
                      type="text"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      placeholder="Promo code (try MAISON10)"
                      className="flex-1 bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3 py-2 text-xs text-[#292827] uppercase tracking-wider focus:outline-hidden focus:border-[#D9894D]"
                    />
                    <button
                      type="submit"
                      className="bg-[#292827] hover:bg-[#1A1918] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {promoMessage && !promoApplied && (
                  <p className={`text-xs ${promoMessage.success ? 'text-[#386641]' : 'text-red-600'}`}>
                    {promoMessage.text}
                  </p>
                )}

                {/* Subtotal, Discount, Shipping, Total */}
                <div className="space-y-1.5 text-xs text-[#68645F] pt-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#292827]">${cartSubtotal.toLocaleString()}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#386641]">
                      <span>Discount (10%)</span>
                      <span className="font-semibold">-${discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="font-semibold text-[#292827]">
                      {shippingFee === 0 ? 'Complimentary' : `$${shippingFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-[#292827] pt-2 border-t border-[#DED9D1]">
                    <span>Estimated Total</span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  id="cart-checkout-btn"
                  onClick={handleProceedToCheckout}
                  className="w-full bg-[#D9894D] hover:bg-[#C27339] text-[#FFFFFF] font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#9B9995]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#386641]" />
                  <span>Secure 256-bit Encrypted Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

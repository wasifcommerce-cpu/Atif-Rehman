import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, User, Package, Heart, MapPin, Shield, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const { wishlist, setIsWishlistOpen, lastOrder, showToast } = useShop();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'trade'>('profile');
  const [tradeFormSubmitted, setTradeFormSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-[#292827]/75 z-50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="w-full max-w-2xl bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#DED9D1] shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#DED9D1] bg-[#F7F4EF] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#292827] text-[#D9894D] flex items-center justify-center font-serif font-bold text-lg">
                M
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#292827]">Studio Client Portal</h3>
                <p className="text-xs text-[#68645F]">Maison & Form Design Services</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#68645F] hover:text-[#292827] rounded-full hover:bg-[#EEE9E1]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#DED9D1] bg-[#FAF8F5] text-xs font-semibold">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-3 text-center border-b-2 transition-colors ${
                activeTab === 'profile'
                  ? 'border-[#D9894D] text-[#292827]'
                  : 'border-transparent text-[#68645F] hover:text-[#292827]'
              }`}
            >
              Member Overview
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex-1 py-3 text-center border-b-2 transition-colors ${
                activeTab === 'orders'
                  ? 'border-[#D9894D] text-[#292827]'
                  : 'border-transparent text-[#68645F] hover:text-[#292827]'
              }`}
            >
              Order Tracking
            </button>
            <button
              onClick={() => setActiveTab('trade')}
              className={`flex-1 py-3 text-center border-b-2 transition-colors ${
                activeTab === 'trade'
                  ? 'border-[#D9894D] text-[#292827]'
                  : 'border-transparent text-[#68645F] hover:text-[#292827]'
              }`}
            >
              Architect & Trade Program
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-[#F7F4EF] rounded-xl border border-[#DED9D1]">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#9B9995] font-semibold">
                      Client Tier
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#292827]">
                      Maison Circle Member
                    </h4>
                    <p className="text-xs text-[#68645F] mt-0.5">
                      Complimentary White-Glove delivery & 30-day in-home styling
                    </p>
                  </div>
                  <span className="bg-[#D9894D]/15 text-[#D9894D] font-bold text-xs px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    onClick={() => {
                      onClose();
                      setIsWishlistOpen(true);
                    }}
                    className="p-4 border border-[#DED9D1] rounded-xl hover:border-[#D9894D] cursor-pointer transition-colors"
                  >
                    <Heart className="w-5 h-5 text-[#D9894D] mb-2" />
                    <h5 className="font-serif font-bold text-sm text-[#292827]">Saved Curations</h5>
                    <p className="text-xs text-[#68645F]">{wishlist.length} pieces in wishlist</p>
                  </div>

                  <div className="p-4 border border-[#DED9D1] rounded-xl">
                    <MapPin className="w-5 h-5 text-[#D9894D] mb-2" />
                    <h5 className="font-serif font-bold text-sm text-[#292827]">Primary Showroom</h5>
                    <p className="text-xs text-[#68645F]">SoHo Studio • New York</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                {lastOrder ? (
                  <div className="bg-[#F7F4EF] border border-[#DED9D1] rounded-xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-[#DED9D1] pb-3">
                      <div>
                        <span className="text-[11px] text-[#9B9995] uppercase font-semibold">
                          Order Reference
                        </span>
                        <h4 className="font-serif font-bold text-base text-[#292827]">
                          #{lastOrder.orderNumber}
                        </h4>
                      </div>
                      <span className="bg-[#386641]/10 text-[#386641] text-xs font-semibold px-2.5 py-1 rounded-full">
                        Processing for Delivery
                      </span>
                    </div>

                    <div className="space-y-2">
                      {lastOrder.items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between text-xs">
                          <span>{item.product.name} ({item.selectedColor.name}) × {item.quantity}</span>
                          <span className="font-bold">${(item.product.price * item.quantity).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#DED9D1] flex justify-between text-sm font-bold">
                      <span>Total Paid</span>
                      <span>${lastOrder.total.toLocaleString()}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Package className="w-10 h-10 text-[#9B9995] mx-auto mb-2" />
                    <h4 className="font-serif text-lg font-bold text-[#292827] mb-1">
                      No Recent Orders
                    </h4>
                    <p className="text-xs text-[#68645F]">
                      Your completed furniture deliveries and tracking receipts will appear here.
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'trade' && (
              <div>
                {tradeFormSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 rounded-full bg-[#386641]/10 text-[#386641] flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#292827] mb-1">
                      Trade Application Received
                    </h4>
                    <p className="text-xs text-[#68645F] max-w-sm mx-auto">
                      Our commercial design concierge will review your credentials within 24 business hours. Use code <strong>ARCHITECT15</strong> for instant preview privileges.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setTradeFormSubmitted(true);
                      showToast('Trade Application Submitted', 'Welcome to Maison & Form Pro');
                    }}
                    className="space-y-3"
                  >
                    <p className="text-xs text-[#68645F] mb-4">
                      Licensed interior architects, designers, and real estate staging firms receive exclusive 15–20% trade pricing and dedicated logistics.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Studio / Firm Name"
                        className="bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Tax ID / Resale Certificate #"
                        className="bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                      />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Professional Email (e.g. name@designstudio.com)"
                      className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#292827] hover:bg-[#1A1918] text-white text-xs font-semibold py-3 rounded-xl transition-colors mt-2"
                    >
                      Submit Trade Credential Application
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

          <div className="p-4 bg-[#F7F4EF] border-t border-[#DED9D1] flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#FFFFFF] border border-[#DED9D1] text-xs font-semibold px-4 py-2 rounded-xl text-[#292827] hover:bg-[#FAF8F5]"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

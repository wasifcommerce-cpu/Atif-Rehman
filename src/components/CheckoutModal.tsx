import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartTotal,
    completeOrder,
    lastOrder,
    setActiveTab
  } = useShop();

  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [formData, setFormData] = useState({
    fullName: 'Clara Lindqvist',
    email: 'clara.design@example.com',
    phone: '+1 (555) 349-2918',
    address: '742 Evergreen Terrace',
    city: 'New York',
    state: 'NY',
    zip: '10012',
    deliveryNotes: 'Please ring bell 4B. Elevator available.'
  });

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'affirm'>('card');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExp, setCardExp] = useState('10/28');
  const [cardCvc, setCardCvc] = useState('888');

  if (!isCheckoutOpen) return null;

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    completeOrder({
      fullName: formData.fullName,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip
    });
    setStep('success');
  };

  const handleFinish = () => {
    setIsCheckoutOpen(false);
    setStep('shipping');
    setActiveTab('home');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-[#292827]/80 z-50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          className="w-full max-w-4xl bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#DED9D1] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#DED9D1] bg-[#F7F4EF] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#292827] text-[#D9894D] flex items-center justify-center font-serif font-bold">
                M
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#292827]">
                  {step === 'success' ? 'Order Confirmed' : 'White-Glove Secure Checkout'}
                </h3>
                <p className="text-xs text-[#68645F]">Maison & Form Studio Delivery</p>
              </div>
            </div>

            {step !== 'success' && (
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="p-1.5 text-[#68645F] hover:text-[#292827] hover:bg-[#EEE9E1] rounded-full"
                aria-label="Close checkout"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Checkout Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            {step === 'success' ? (
              <div className="text-center py-6 max-w-lg mx-auto">
                <div className="w-16 h-16 rounded-full bg-[#386641]/15 text-[#386641] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <span className="text-xs uppercase tracking-widest font-semibold text-[#D9894D] block mb-1">
                  Thank You for Your Order
                </span>

                <h2 className="font-serif text-3xl font-bold text-[#292827] mb-2">
                  Order #{lastOrder?.orderNumber || 'MF-839201'}
                </h2>

                <p className="text-sm text-[#68645F] leading-relaxed mb-6">
                  We have received your order. A confirmation email and delivery tracking dossier have been dispatched to <strong>{lastOrder?.customer.email || formData.email}</strong>.
                </p>

                <div className="bg-[#F7F4EF] p-5 rounded-2xl border border-[#DED9D1] text-left text-xs text-[#292827] space-y-2 mb-6">
                  <div className="flex justify-between font-semibold border-b border-[#DED9D1] pb-2">
                    <span>Delivery Address</span>
                    <span>{formData.fullName}</span>
                  </div>
                  <p className="text-[#68645F]">{formData.address}, {formData.city}, {formData.state} {formData.zip}</p>
                  <div className="flex justify-between pt-2 border-t border-[#DED9D1] font-bold text-sm">
                    <span>Amount Charged</span>
                    <span>${lastOrder?.total.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handleFinish}
                  className="bg-[#292827] hover:bg-[#1A1918] text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md"
                >
                  Return to Sanctuary
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left: Step Form */}
                <div className="lg:col-span-7">
                  
                  {/* Step Progress Pills */}
                  <div className="flex items-center gap-3 mb-6 text-xs font-semibold">
                    <span
                      className={`px-3 py-1.5 rounded-full ${
                        step === 'shipping'
                          ? 'bg-[#292827] text-white'
                          : 'bg-[#EEE9E1] text-[#292827]'
                      }`}
                    >
                      1. Delivery Address
                    </span>
                    <span className="text-[#9B9995]">→</span>
                    <span
                      className={`px-3 py-1.5 rounded-full ${
                        step === 'payment'
                          ? 'bg-[#292827] text-white'
                          : 'bg-[#F7F4EF] text-[#9B9995] border border-[#DED9D1]'
                      }`}
                    >
                      2. Payment & Review
                    </span>
                  </div>

                  {step === 'shipping' ? (
                    <form onSubmit={handleNextToPayment} className="space-y-4">
                      <h4 className="font-serif text-lg font-bold text-[#292827]">
                        Shipping & White-Glove Info
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-[#68645F] block mb-1">Full Name</label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-[#68645F] block mb-1">Email Address</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-[#68645F] block mb-1">Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-[#68645F] block mb-1">Street Address</label>
                          <input
                            type="text"
                            required
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-[#68645F] block mb-1">City</label>
                          <input
                            type="text"
                            required
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-[#68645F] block mb-1">State</label>
                          <input
                            type="text"
                            required
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-[#68645F] block mb-1">Zip Code</label>
                          <input
                            type="text"
                            required
                            value={formData.zip}
                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                            className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-[#68645F] block mb-1">
                          Delivery Special Instructions
                        </label>
                        <input
                          type="text"
                          value={formData.deliveryNotes}
                          onChange={(e) => setFormData({ ...formData, deliveryNotes: e.target.value })}
                          className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#D9894D] hover:bg-[#C27339] text-white font-semibold text-sm py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer"
                      >
                        <span>Continue to Payment</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handlePlaceOrder} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-lg font-bold text-[#292827]">
                          Payment Method
                        </h4>
                        <button
                          type="button"
                          onClick={() => setStep('shipping')}
                          className="text-xs text-[#68645F] hover:text-[#292827] flex items-center gap-1"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" /> Back to shipping
                        </button>
                      </div>

                      {/* Payment Options */}
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('card')}
                          className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                            paymentMethod === 'card'
                              ? 'border-[#292827] bg-[#FAF8F5] text-[#292827]'
                              : 'border-[#DED9D1] text-[#68645F]'
                          }`}
                        >
                          Credit Card
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('apple')}
                          className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                            paymentMethod === 'apple'
                              ? 'border-[#292827] bg-[#FAF8F5] text-[#292827]'
                              : 'border-[#DED9D1] text-[#68645F]'
                          }`}
                        >
                          Apple Pay
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('affirm')}
                          className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                            paymentMethod === 'affirm'
                              ? 'border-[#292827] bg-[#FAF8F5] text-[#292827]'
                              : 'border-[#DED9D1] text-[#68645F]'
                          }`}
                        >
                          Affirm 0% APR
                        </button>
                      </div>

                      {paymentMethod === 'card' && (
                        <div className="p-4 bg-[#F7F4EF] rounded-2xl border border-[#DED9D1] space-y-3">
                          <div>
                            <label className="text-[11px] font-semibold text-[#68645F] block mb-1">Card Number</label>
                            <div className="relative">
                              <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="w-full bg-[#FFFFFF] border border-[#DED9D1] rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                              />
                              <CreditCard className="w-4 h-4 text-[#9B9995] absolute left-3.5 top-3" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="text-[11px] font-semibold text-[#68645F] block mb-1">Expiration</label>
                              <input
                                type="text"
                                value={cardExp}
                                onChange={(e) => setCardExp(e.target.value)}
                                className="w-full bg-[#FFFFFF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden"
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-semibold text-[#68645F] block mb-1">CVC Code</label>
                              <input
                                type="text"
                                value={cardCvc}
                                onChange={(e) => setCardCvc(e.target.value)}
                                className="w-full bg-[#FFFFFF] border border-[#DED9D1] rounded-xl px-3.5 py-2.5 text-xs text-[#292827] focus:outline-hidden"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {paymentMethod === 'affirm' && (
                        <div className="p-4 bg-[#F7F4EF] rounded-2xl border border-[#DED9D1] text-xs text-[#68645F]">
                          Pay as low as <strong>${Math.round(cartTotal / 12)}/month</strong> for 12 months at 0% APR with Affirm.
                        </div>
                      )}

                      {paymentMethod === 'apple' && (
                        <div className="p-4 bg-[#F7F4EF] rounded-2xl border border-[#DED9D1] text-xs text-center">
                          Apple Pay will prompt authentication on confirm.
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full bg-[#D9894D] hover:bg-[#C27339] text-white font-semibold text-sm py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Place Order • ${cartTotal.toLocaleString()}</span>
                      </button>
                    </form>
                  )}

                </div>

                {/* Right: Order Summary Sidebar */}
                <div className="lg:col-span-5 bg-[#F7F4EF] p-5 sm:p-6 rounded-2xl border border-[#DED9D1] flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#292827] mb-4">
                      Order Summary ({cart.length})
                    </h4>

                    <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 text-xs">
                          <img
                            src={item.product.images[0]}
                            alt=""
                            className="w-12 h-12 object-cover rounded-lg bg-[#EEE9E1] border border-[#DED9D1]"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-[#292827] truncate">{item.product.name}</h5>
                            <span className="text-[#68645F]">{item.selectedColor.name} × {item.quantity}</span>
                          </div>
                          <span className="font-bold text-[#292827]">
                            ${(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#DED9D1] space-y-2 text-xs text-[#68645F]">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-semibold text-[#292827]">${cartSubtotal.toLocaleString()}</span>
                      </div>
                      {discountAmount > 0 && (
                        <div className="flex justify-between text-[#386641]">
                          <span>Discount Applied</span>
                          <span className="font-semibold">-${discountAmount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>White-Glove Delivery</span>
                        <span className="font-semibold text-[#292827]">
                          {shippingFee === 0 ? 'Complimentary' : `$${shippingFee}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-base font-bold text-[#292827] pt-2 border-t border-[#DED9D1]">
                        <span>Total Due</span>
                        <span>${cartTotal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 text-[11px] text-[#9B9995] flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#D9894D]" />
                    <span>Includes placement in room of choice and packaging removal.</span>
                  </div>
                </div>

              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

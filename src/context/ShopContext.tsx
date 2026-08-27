import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ColorOption } from '../types';
import { PRODUCTS } from '../data/products';

interface ToastState {
  id: string;
  message: string;
  submessage?: string;
  image?: string;
}

export interface OrderConfirmation {
  orderNumber: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  customer: {
    fullName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
}

interface ShopContextType {
  // Navigation & Page State
  activeTab: 'home' | 'shop' | 'collections' | 'about' | 'contact' | 'product-detail';
  setActiveTab: (tab: 'home' | 'shop' | 'collections' | 'about' | 'contact' | 'product-detail') => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (cat: string) => void;
  selectedRoomFilter: string;
  setSelectedRoomFilter: (room: string) => void;
  currentProductDetail: Product | null;
  openProductDetail: (product: Product) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: ColorOption) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
  cartSubtotal: number;
  discountAmount: number;
  shippingFee: number;
  cartTotal: number;
  promoCode: string;
  promoApplied: boolean;
  promoDiscountPercent: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;

  // Wishlist
  wishlist: string[]; // product IDs
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;

  // Quick View Modal
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  // Search
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Checkout
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  lastOrder: OrderConfirmation | null;
  completeOrder: (customer: OrderConfirmation['customer']) => void;

  // Toast
  toasts: ToastState[];
  dismissToast: (id: string) => void;
  showToast: (message: string, submessage?: string, image?: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [activeTab, setActiveTabState] = useState<'home' | 'shop' | 'collections' | 'about' | 'contact' | 'product-detail'>('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedRoomFilter, setSelectedRoomFilter] = useState<string>('all');
  const [currentProductDetail, setCurrentProductDetail] = useState<Product | null>(PRODUCTS[0]);

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Initial sample item for realistic feel or empty
    return [
      {
        id: 'prod-1-Oatmeal Bouclé',
        product: PRODUCTS[0],
        quantity: 1,
        selectedColor: PRODUCTS[0].colors[0]
      }
    ];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscountPercent, setPromoDiscountPercent] = useState(0);

  // Wishlist
  const [wishlist, setWishlist] = useState<string[]>(['prod-2', 'prod-3']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Quick View
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Checkout
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState<OrderConfirmation | null>(null);

  // Toast
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = (message: string, submessage?: string, image?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, submessage, image }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const setActiveTab = (tab: 'home' | 'shop' | 'collections' | 'about' | 'contact' | 'product-detail') => {
    setActiveTabState(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProductDetail = (product: Product) => {
    setCurrentProductDetail(product);
    setActiveTab('product-detail');
  };

  const addToCart = (product: Product, quantity = 1, color?: ColorOption) => {
    const selectedColor = color || product.colors[0];
    const itemId = `${product.id}-${selectedColor.name}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [...prevCart, { id: itemId, product, quantity, selectedColor }];
      }
    });

    showToast(
      `Added to Bag`,
      `${product.name} (${selectedColor.name}) × ${quantity}`,
      product.images[0]
    );
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (itemId: string) => {
    const item = cart.find((i) => i.id === itemId);
    setCart((prev) => prev.filter((i) => i.id !== itemId));
    if (item) {
      showToast('Removed from Bag', item.product.name);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code: string) => {
    const cleaned = code.trim().toUpperCase();
    if (cleaned === 'MAISON10' || cleaned === 'WELCOME10') {
      setPromoCode(cleaned);
      setPromoApplied(true);
      setPromoDiscountPercent(10);
      return { success: true, message: '10% discount applied to your order!' };
    }
    if (cleaned === 'ARCHITECT15' || cleaned === 'STUDIO15') {
      setPromoCode(cleaned);
      setPromoApplied(true);
      setPromoDiscountPercent(15);
      return { success: true, message: '15% Studio Tier discount applied!' };
    }
    return { success: false, message: 'Invalid promotional code. Try MAISON10' };
  };

  const removePromoCode = () => {
    setPromoCode('');
    setPromoApplied(false);
    setPromoDiscountPercent(0);
  };

  const toggleWishlist = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        if (prod) showToast('Removed from Wishlist', prod.name);
        return prev.filter((id) => id !== productId);
      } else {
        if (prod) showToast('Saved to Wishlist', prod.name, prod.images[0]);
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const discountAmount = promoApplied ? Math.round((cartSubtotal * promoDiscountPercent) / 100) : 0;
  // Free shipping over $500
  const shippingFee = cartSubtotal > 0 && cartSubtotal < 500 ? 45 : 0;
  const cartTotal = cartSubtotal - discountAmount + shippingFee;

  const completeOrder = (customer: OrderConfirmation['customer']) => {
    const orderNum = `MF-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: OrderConfirmation = {
      orderNumber: orderNum,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      items: [...cart],
      subtotal: cartSubtotal,
      discount: discountAmount,
      shipping: shippingFee,
      total: cartTotal,
      customer
    };
    setLastOrder(newOrder);
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <ShopContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        selectedRoomFilter,
        setSelectedRoomFilter,
        currentProductDetail,
        openProductDetail,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        cartSubtotal,
        discountAmount,
        shippingFee,
        cartTotal,
        promoCode,
        promoApplied,
        promoDiscountPercent,
        applyPromoCode,
        removePromoCode,
        wishlist,
        toggleWishlist,
        isWishlisted,
        isWishlistOpen,
        setIsWishlistOpen,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        isCheckoutOpen,
        setIsCheckoutOpen,
        lastOrder,
        completeOrder,
        toasts,
        dismissToast,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

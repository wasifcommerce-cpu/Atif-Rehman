import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Star, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw, ChevronRight, ChevronDown, Check, ArrowRight, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SafeImage } from './SafeImage';

export const ProductDetailPage: React.FC = () => {
  const {
    currentProductDetail,
    addToCart,
    toggleWishlist,
    isWishlisted,
    setActiveTab,
    setIsCheckoutOpen,
    openProductDetail,
    showToast
  } = useShop();

  const product = currentProductDetail || PRODUCTS[0];

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Accordion state
  const [openAccordion, setOpenAccordion] = useState<string | null>('specs');

  const isFavorite = isWishlisted(product.id);

  // Recommended Products ("You May Also Like" & "Complete the Look")
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor);
    setIsCheckoutOpen(true);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Link Copied', 'Product link copied to clipboard');
  };

  return (
    <div id="product-detail-page" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumbs Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#68645F] mb-6 sm:mb-8 overflow-x-auto no-scrollbar">
        <button onClick={() => setActiveTab('home')} className="hover:text-[#292827] transition-colors">
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-[#9B9995]" />
        <button onClick={() => setActiveTab('shop')} className="hover:text-[#292827] transition-colors">
          Shop
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-[#9B9995]" />
        <span className="capitalize">{product.category}</span>
        <ChevronRight className="w-3.5 h-3.5 text-[#9B9995]" />
        <span className="text-[#292827] font-semibold truncate">{product.name}</span>
      </nav>

      {/* Main Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 sm:mb-24">
        
        {/* Left: Interactive Media Gallery */}
        <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
          
          {/* Thumbnails list */}
          {product.images.length > 1 && (
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto no-scrollbar sm:w-20 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-[#EEE9E1] cursor-pointer ${
                    selectedImageIndex === idx
                      ? 'border-[#292827] scale-102 shadow-xs'
                      : 'border-[#DED9D1] opacity-70 hover:opacity-100'
                  }`}
                >
                  <SafeImage
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                    fallbackCategory={product.category}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main Large Visual */}
          <div className="flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#EEE9E1] border border-[#DED9D1] aspect-4/5 sm:aspect-square shadow-xs">
            <SafeImage
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-500"
              containerClassName="w-full h-full"
              fallbackCategory={product.category}
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-[#292827] text-white text-[11px] uppercase font-bold tracking-widest px-3 py-1 rounded-md shadow-xs">
                New Arrival
              </span>
            )}
            <button
              onClick={handleShare}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#292827] flex items-center justify-center shadow-xs transition-colors"
              title="Share product"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right: Product Purchase Details & Specs */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          
          {/* Category & Designer Tag */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9B9995]">
              {product.category} • SKU: {product.sku}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#292827]">
              <Star className="w-4 h-4 fill-[#D9894D] text-[#D9894D]" />
              <span>{product.rating}</span>
              <span className="text-[#9B9995]">({product.reviewCount} client reviews)</span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight leading-tight mb-2">
            {product.name}
          </h1>
          <p className="text-sm text-[#68645F] mb-6 font-normal">
            {product.subtitle}
          </p>

          {/* Price & Stock */}
          <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-[#DED9D1]">
            <span className="font-sans font-bold text-3xl text-[#292827]">
              ${product.price.toLocaleString()}
            </span>
            {product.compareAtPrice && (
              <span className="text-base text-[#9B9995] line-through">
                ${product.compareAtPrice.toLocaleString()}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#386641] bg-[#386641]/10 px-2.5 py-1 rounded-md ml-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#386641]" />
              In Stock & Ready for White Glove Dispatch
            </span>
          </div>

          {/* Long Description */}
          <p className="text-sm text-[#68645F] leading-relaxed mb-6 font-normal">
            {product.description}
          </p>

          {/* Color / Finish Selector */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-semibold text-[#292827] mb-2.5">
              <span>Selected Material / Finish:</span>
              <span className="text-[#D9894D] font-bold">{selectedColor.name}</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {product.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={() => {
                    setSelectedColor(color);
                    if (product.images[idx]) setSelectedImageIndex(idx);
                  }}
                  className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all ${
                    selectedColor.name === color.name
                      ? 'border-[#292827] bg-[#FAF8F5] text-[#292827] font-semibold ring-1 ring-[#292827]'
                      : 'border-[#DED9D1] text-[#68645F] hover:border-[#9B9995] bg-[#FFFFFF]'
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-[#DED9D1]"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart Controls */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              
              {/* Stepper */}
              <div className="flex items-center border border-[#DED9D1] rounded-xl bg-[#FAF8F5] p-1 h-13">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-full flex items-center justify-center text-[#68645F] hover:text-[#292827] text-lg font-bold"
                  aria-label="Reduce quantity"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-bold text-[#292827]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-full flex items-center justify-center text-[#68645F] hover:text-[#292827] text-lg font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Bag CTA */}
              <button
                onClick={handleAddToCart}
                className={`flex-1 h-13 flex items-center justify-center gap-2 px-6 rounded-xl font-semibold text-sm transition-all shadow-md cursor-pointer ${
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
                    <span>Add to Bag • ${(product.price * quantity).toLocaleString()}</span>
                  </>
                )}
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`h-13 w-13 rounded-xl border flex items-center justify-center transition-colors cursor-pointer ${
                  isFavorite
                    ? 'bg-[#D9894D] text-white border-[#D9894D]'
                    : 'border-[#DED9D1] text-[#292827] hover:bg-[#FAF8F5]'
                }`}
                aria-label="Wishlist toggle"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>

            </div>

            {/* Direct Buy Now */}
            <button
              onClick={handleBuyNow}
              className="w-full h-12 bg-[#292827] hover:bg-[#1A1918] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Instant Express Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#D9894D]" />
            </button>
          </div>

          {/* Guarantees Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-[#FAF8F5] rounded-2xl border border-[#DED9D1] text-center text-xs text-[#68645F] mb-6">
            <div className="flex flex-col items-center gap-1">
              <Truck className="w-4 h-4 text-[#D9894D]" />
              <span className="font-bold text-[#292827]">White Glove</span>
              <span className="text-[10px]">In-Room Placement</span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-[#DED9D1] px-2">
              <RotateCcw className="w-4 h-4 text-[#D9894D]" />
              <span className="font-bold text-[#292827]">30-Day Trial</span>
              <span className="text-[10px]">Risk-Free Returns</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#D9894D]" />
              <span className="font-bold text-[#292827]">10-Yr Warranty</span>
              <span className="text-[10px]">Joinery & Frame</span>
            </div>
          </div>

          {/* Expandable Accordions (Dimensions, Materials, Care, Delivery) */}
          <div className="border-t border-[#DED9D1] divide-y divide-[#DED9D1] text-xs">
            
            {/* Specs & Dimensions */}
            <div className="py-3">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'specs' ? null : 'specs')}
                className="w-full flex items-center justify-between font-bold text-sm text-[#292827] py-1 text-left"
              >
                <span>Dimensions & Specifications</span>
                <ChevronDown className={`w-4 h-4 text-[#9B9995] transition-transform ${openAccordion === 'specs' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'specs' && (
                <div className="pt-2 text-[#68645F] space-y-1.5">
                  <p><strong>Dimensions:</strong> {product.dimensions}</p>
                  {product.weight && <p><strong>Net Weight:</strong> {product.weight}</p>}
                  <p><strong>Primary Materials:</strong> {product.materials.join(', ')}</p>
                  {product.designer && <p><strong>Design Attribution:</strong> {product.designer}</p>}
                </div>
              )}
            </div>

            {/* Craft Details */}
            <div className="py-3">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
                className="w-full flex items-center justify-between font-bold text-sm text-[#292827] py-1 text-left"
              >
                <span>Craftsmanship & Construction</span>
                <ChevronDown className={`w-4 h-4 text-[#9B9995] transition-transform ${openAccordion === 'details' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'details' && (
                <ul className="pt-2 text-[#68645F] space-y-1 list-disc pl-4">
                  {product.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Care Guide */}
            <div className="py-3">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                className="w-full flex items-center justify-between font-bold text-sm text-[#292827] py-1 text-left"
              >
                <span>Care & Maintenance Guide</span>
                <ChevronDown className={`w-4 h-4 text-[#9B9995] transition-transform ${openAccordion === 'care' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'care' && (
                <p className="pt-2 text-[#68645F] leading-relaxed">
                  {product.care}
                </p>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Complete the Look / You May Also Like Section */}
      <section className="pt-12 sm:pt-16 border-t border-[#DED9D1]">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9B9995] block mb-1">
              Curated Harmonies
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292827]">
              Complete the Look
            </h3>
          </div>
          <button
            onClick={() => setActiveTab('shop')}
            className="text-xs font-semibold text-[#292827] hover:text-[#D9894D] flex items-center gap-1"
          >
            Explore all matching pieces <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

    </div>
  );
};

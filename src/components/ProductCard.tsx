import React, { useState } from 'react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { Heart, Star, ShoppingBag, Eye, Check } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface ProductCardProps {
  product: Product;
  aspectRatio?: string;
  showCategory?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  aspectRatio = 'aspect-4/5',
  showCategory = true
}) => {
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
    openQuickView,
    openProductDetail
  } = useShop();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const isFavorite = isWishlisted(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1, selectedColor);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1800);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuickView(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const currentImg = product.images[currentImageIndex] || product.images[0];
  const fallbackCat = (['seating', 'tables', 'lighting', 'decor', 'textiles', 'storage', 'bedroom'].includes(product.category)
    ? product.category
    : 'furniture') as any;

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-[#FFFFFF] border border-[#DED9D1] rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
      onClick={() => openProductDetail(product)}
    >
      {/* Product Image Area */}
      <div className={`relative ${aspectRatio} w-full overflow-hidden bg-[#EEE9E1]`}>
        <SafeImage
          src={currentImg}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
          containerClassName="w-full h-full"
          fallbackCategory={fallbackCat}
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="bg-[#292827] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md shadow-xs">
              New
            </span>
          )}
          {product.isBestseller && !product.isNew && (
            <span className="bg-[#D9894D] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md shadow-xs">
              Bestseller
            </span>
          )}
          {product.compareAtPrice && (
            <span className="bg-[#FFFFFF] text-[#292827] border border-[#DED9D1] text-[10px] font-bold px-2 py-0.5 rounded-md shadow-2xs">
              Save ${product.compareAtPrice - product.price}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-10 ${
            isFavorite
              ? 'bg-[#D9894D] text-white shadow-sm'
              : 'bg-[#FFFFFF]/90 text-[#292827] hover:bg-[#FFFFFF] hover:text-[#D9894D] shadow-2xs'
          }`}
          aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Hover Actions Floating Bar */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 z-10">
          <button
            onClick={handleQuickAdd}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold shadow-md transition-all ${
              isAddedRecently
                ? 'bg-[#386641] text-white'
                : 'bg-[#292827] hover:bg-[#1A1918] text-white'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#D9894D]" />
                <span>Add to Bag</span>
              </>
            )}
          </button>

          <button
            onClick={handleQuickView}
            className="w-9 h-9 rounded-xl bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#292827] flex items-center justify-center shadow-md transition-colors"
            title="Quick View"
            aria-label="Quick preview product"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 min-w-0">
        <div>
          {showCategory && (
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#9B9995] font-semibold mb-1">
              <span className="capitalize">{product.category}</span>
              <div className="flex items-center gap-1 text-[#292827]">
                <Star className="w-3 h-3 fill-[#D9894D] text-[#D9894D]" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-[#9B9995]">({product.reviewCount})</span>
              </div>
            </div>
          )}

          <h3 className="font-serif text-base sm:text-lg font-bold text-[#292827] group-hover:text-[#D9894D] transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-[#68645F] line-clamp-1 mt-1 font-normal">
            {product.subtitle}
          </p>
        </div>

        <div className="pt-3 mt-3 border-t border-[#DED9D1]/50 flex items-center justify-between">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="font-sans font-bold text-base sm:text-lg text-[#292827]">
              ${product.price.toLocaleString()}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-[#9B9995] line-through">
                ${product.compareAtPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          {product.colors.length > 1 && (
            <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
              {product.colors.map((color, i) => (
                <button
                  key={color.name}
                  onClick={() => {
                    setSelectedColor(color);
                    if (product.images[i]) setCurrentImageIndex(i);
                  }}
                  className={`w-3.5 h-3.5 rounded-full transition-transform ${
                    selectedColor.name === color.name
                      ? 'ring-2 ring-[#292827] ring-offset-1 scale-110'
                      : 'hover:scale-110 opacity-80'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={color.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

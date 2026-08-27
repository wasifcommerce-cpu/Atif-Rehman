export interface ColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: 'seating' | 'tables' | 'lighting' | 'decor' | 'storage' | 'textiles' | 'bedroom' | 'dining';
  room: 'living-room' | 'bedroom' | 'dining-room' | 'home-office' | 'entryway' | 'outdoor';
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  inStock: boolean;
  images: string[];
  colors: ColorOption[];
  materials: string[];
  dimensions: string;
  weight?: string;
  care: string;
  details: string[];
  sku: string;
  designer?: string;
  featuredInArrivals?: boolean;
  relatedProductIds?: string[];
}

export interface CartItem {
  id: string; // unique item id based on product.id + selectedColor.name
  product: Product;
  quantity: number;
  selectedColor: ColorOption;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  tagline?: string;
  description: string;
  image: string;
  room: string;
  itemCount: number;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  verifiedPurchase: boolean;
  itemPurchased: string;
  date: string;
}

export interface FilterState {
  category: string;
  room: string;
  minPrice: number;
  maxPrice: number;
  material: string;
  sort: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
  inStockOnly: boolean;
  search: string;
}

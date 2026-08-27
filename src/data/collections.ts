import { Collection } from '../types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'col-living',
    title: 'Living Room',
    subtitle: 'Architectural seating, sculptural tables & tactile warmth',
    description: 'Designed for effortless conversations, quiet Sunday afternoons, and serene visual harmony.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85',
    room: 'living-room',
    itemCount: 24
  },
  {
    id: 'col-office',
    title: 'Home Office',
    subtitle: 'Focused ergonomics with calm, uncluttered timber lines',
    description: 'Purpose-built desks, ambient task lighting, and thoughtful organization for creative work.',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=85',
    room: 'home-office',
    itemCount: 16
  },
  {
    id: 'col-bedroom',
    title: 'Bedroom',
    subtitle: 'Restful sanctuaries crafted with solid woods and washed linen',
    description: 'Plush low-slung platform beds, minimal nightstands, and breathable textiles designed for deep slumber.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85',
    room: 'bedroom',
    itemCount: 19
  },
  {
    id: 'col-decor',
    title: 'Décor Accessories',
    subtitle: 'Hand-thrown stoneware, organic vessels & artful objects',
    description: 'Considered objects that bring texture, soft shadows, and artisanal character into everyday life.',
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=85',
    room: 'decor',
    itemCount: 32
  }
];

export const ROOM_CATEGORIES = [
  {
    id: 'living-room',
    name: 'Living Room',
    description: 'Sofas, lounge chairs, coffee tables & rugs',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    count: 24
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    description: 'Platform beds, nightstands, dressers & linen',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80',
    count: 19
  },
  {
    id: 'dining-room',
    name: 'Dining Room',
    description: 'Travertine tables, oak chairs & credenzas',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
    count: 14
  },
  {
    id: 'home-office',
    name: 'Home Office',
    description: 'Solid wood desks, ergonomic chairs & lamps',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    count: 16
  },
  {
    id: 'entryway',
    name: 'Entryway',
    description: 'Arch mirrors, console tables & hooks',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    count: 12
  },
  {
    id: 'outdoor',
    name: 'Outdoor & Sunroom',
    description: 'Teak loungers, weather-safe textiles & planters',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    count: 10
  }
];

export const BENEFIT_CARDS = [
  {
    id: 'cat-furniture',
    title: 'Modern Furniture',
    category: 'SEATING & TABLES',
    description: 'Curated seating, solid timber tables, and statement architectural pieces.',
    cta: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=600&q=80',
    filterCategory: 'seating'
  },
  {
    id: 'cat-decor',
    title: 'Decor Accents',
    category: 'CERAMICS & LIGHTING',
    description: 'Tactile details, hand-thrown vases, and warm illumination that add personality.',
    cta: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80',
    filterCategory: 'decor'
  },
  {
    id: 'cat-living',
    title: 'Inspired Living',
    category: 'CURATED ESSENTIALS',
    description: 'Considered collections selected for comfortable, quiet, and beautiful spaces.',
    cta: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80',
    filterCategory: 'all'
  }
];

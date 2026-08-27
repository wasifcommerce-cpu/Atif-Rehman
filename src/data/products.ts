import { Product, Testimonial } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    sku: 'MF-CHR-01',
    name: 'Soren Bouclé Lounge Chair',
    subtitle: 'Sculptural curved armchair with solid oak frame',
    description: 'The Soren Lounge Chair balances architectural strength with serene tactile comfort. Featuring a gently rounded wrap-around backrest upholstered in premium nubby bouclé wool, set upon hand-turned European white oak legs.',
    price: 890,
    compareAtPrice: 1050,
    category: 'seating',
    room: 'living-room',
    rating: 4.9,
    reviewCount: 48,
    isBestseller: true,
    isNew: false,
    inStock: true,
    featuredInArrivals: true,
    images: [
      'https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Oatmeal Bouclé', hex: '#E6DEC9' },
      { name: 'Warm Charcoal', hex: '#3B3A36' },
      { name: 'Terracotta Dune', hex: '#C27D56' }
    ],
    materials: ['Solid White Oak', 'Italian Bouclé Wool', 'High-Resilience Foam'],
    dimensions: '32"W x 31"D x 29"H',
    weight: '38 lbs',
    care: 'Spot clean with a damp white cloth and mild upholstery shampoo. Professional cleaning recommended for persistent stains.',
    details: [
      'Hand-crafted solid oak joinery with natural wax matte finish',
      'High-density structural core for lifetime posture support',
      'Certified OEKO-TEX® non-toxic upholstery'
    ],
    designer: 'Studio Form & Nord',
    relatedProductIds: ['prod-3', 'prod-4', 'prod-2']
  },
  {
    id: 'prod-2',
    sku: 'MF-VAS-08',
    name: 'Atelier Ceramic Vessels',
    subtitle: 'Handcrafted stoneware sculptural vases, set of 3',
    description: 'Thrown by hand on the potter’s wheel in small artisanal batches. The Atelier Vessels feature subtle organic irregularities, raw matte clay exteriors, and glazed waterproof interiors designed to hold fresh blooms or standalone sculptural appeal.',
    price: 185,
    compareAtPrice: 220,
    category: 'decor',
    room: 'living-room',
    rating: 4.8,
    reviewCount: 36,
    isBestseller: true,
    isNew: true,
    inStock: true,
    featuredInArrivals: true,
    images: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Raw Sandstone', hex: '#D7CEC7' },
      { name: 'Smoked Basalt', hex: '#4A4846' },
      { name: 'Warm Chalk', hex: '#F0ECE1' }
    ],
    materials: ['High-fired Stoneware', 'Matte Mineral Glaze'],
    dimensions: 'Large: 6"Dia x 11"H | Med: 5"Dia x 8"H | Small: 4.5"Dia x 5"H',
    weight: '7.5 lbs (combined)',
    care: 'Hand wash with mild soap and warm water. Wipe dry with a soft cloth.',
    details: [
      'Each piece carries unique artisanal throwing marks',
      'Glazed watertight interior',
      'Felted scratch-resistant base pads'
    ],
    designer: 'Elena Vance Ceramics',
    relatedProductIds: ['prod-3', 'prod-1', 'prod-7']
  },
  {
    id: 'prod-3',
    sku: 'MF-LMP-04',
    name: 'Kanso Minimalist Table Lamp',
    subtitle: 'Warm brushed brass & textured linen shade',
    description: 'A study in geometric balance and ambient serenity. The Kanso Lamp pairs a heavy spun-brass cylinder base with a conical natural flax linen shade, casting a golden downward glow with subtle upward diffusion.',
    price: 340,
    compareAtPrice: 395,
    category: 'lighting',
    room: 'home-office',
    rating: 5.0,
    reviewCount: 29,
    isBestseller: false,
    isNew: true,
    inStock: true,
    featuredInArrivals: true,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Brushed Brass', hex: '#CDB179' },
      { name: 'Antique Bronze', hex: '#52493E' },
      { name: 'Cast Matte White', hex: '#EDE8DF' }
    ],
    materials: ['Solid Brass', 'Natural Flax Linen', 'Braided Textile Cord'],
    dimensions: '13"Dia x 18.5"H',
    weight: '9 lbs',
    care: 'Dust shade gently with a microfiber brush. Clean brass base with dry cotton cloth.',
    details: [
      'Integrated rotary dimming switch with smooth step-less control',
      'Includes warm 2700K energy-efficient LED bulb',
      '8-foot braided flax power cord'
    ],
    designer: 'Studio Kanso',
    relatedProductIds: ['prod-1', 'prod-6', 'prod-10']
  },
  {
    id: 'prod-4',
    sku: 'MF-TBL-02',
    name: 'Astrid Solid Oak Coffee Table',
    subtitle: 'Circular architectural table with fluted pedestal',
    description: 'Crafted from sustainably sourced FSC®-certified European oak. The Astrid Table features a softly bevelled circular top resting on a sculptural fluted pedestal base, bringing grounding organic warmth to any conversation area.',
    price: 1120,
    compareAtPrice: 1290,
    category: 'tables',
    room: 'living-room',
    rating: 4.9,
    reviewCount: 42,
    isBestseller: true,
    isNew: false,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Natural White Oak', hex: '#D2B48C' },
      { name: 'Smoked Oak', hex: '#54463A' },
      { name: 'Bleached Ash', hex: '#EAE1D0' }
    ],
    materials: ['Solid European White Oak', 'Natural Hardwax Matte Finish'],
    dimensions: '38"Dia x 15"H',
    weight: '52 lbs',
    care: 'Wipe clean with a damp cloth. Use coasters for hot or sweating drinkware.',
    details: [
      '100% Solid European Oak timber with visible grain character',
      'Stain-resistant protective water-based sealant',
      'Leveling feet included for uneven flooring'
    ],
    designer: 'Maison & Form Workshop',
    relatedProductIds: ['prod-1', 'prod-5', 'prod-8']
  },
  {
    id: 'prod-5',
    sku: 'MF-SOF-01',
    name: 'Meridian Modular 3-Piece Sofa',
    subtitle: 'Low-slung relaxed sofa in Belgian tailored linen',
    description: 'Understated luxury made for lounging. The Meridian features deep bench cushions filled with feather-down blend over high-density foam, encased in loose-fitted Belgian washed linen with delicate French seams.',
    price: 2650,
    compareAtPrice: 2950,
    category: 'seating',
    room: 'living-room',
    rating: 4.9,
    reviewCount: 64,
    isBestseller: true,
    isNew: false,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Parchment Linen', hex: '#EFEBE2' },
      { name: 'Oatmeal Tweed', hex: '#DCD4C4' },
      { name: 'Warm Slate', hex: '#585955' }
    ],
    materials: ['Belgian Pure Linen', 'Kiln-Dried Hardwood Frame', 'Down-Feather Wrap'],
    dimensions: '104"W x 40"D x 30"H (Seat Height: 17")',
    weight: '165 lbs',
    care: 'Removable slipcovers are dry-cleanable. Fluff cushions weekly to maintain natural loft.',
    details: [
      'Modular configuration easily separated or expanded',
      'Sinuous spring suspension for zero-sag durability',
      'Includes 4 complementary feather accent pillows'
    ],
    designer: 'Marc & Louise Studio',
    relatedProductIds: ['prod-4', 'prod-8', 'prod-7']
  },
  {
    id: 'prod-6',
    sku: 'MF-DSK-03',
    name: 'Linnea Minimalist Writing Desk',
    subtitle: 'Clean lines with discreet cable tray & solid walnut drawers',
    description: 'Designed for purposeful focus and thoughtful work. The Linnea Desk features seamless soft-close joinery drawers, an integrated cable pass-through, and a solid timber desktop with tactile rounded edges.',
    price: 1350,
    compareAtPrice: 1500,
    category: 'tables',
    room: 'home-office',
    rating: 4.8,
    reviewCount: 22,
    isBestseller: false,
    isNew: true,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Natural White Oak', hex: '#D2B48C' },
      { name: 'American Walnut', hex: '#5B4232' },
      { name: 'Ebonized Ash', hex: '#2A2826' }
    ],
    materials: ['Solid White Oak Desktop', 'Walnut Veneer Accents', 'Powder-Coated Steel Hardware'],
    dimensions: '56"W x 26"D x 30"H',
    weight: '72 lbs',
    care: 'Dust with soft dry cloth. Avoid harsh chemical cleaners.',
    details: [
      'Two soft-close drawers lined with natural wool felt',
      'Concealed underside power strip and cord management bay',
      'Hand-applied matte polyurethane sealant'
    ],
    designer: 'Studio Form & Nord',
    relatedProductIds: ['prod-3', 'prod-1', 'prod-10']
  },
  {
    id: 'prod-7',
    sku: 'MF-LGT-09',
    name: 'Solstice Sculptural Floor Lamp',
    subtitle: 'Hand-formed matte ceramic & diffused frosted globe',
    description: 'An architectural beacon of warmth. The Solstice Lamp rises like an elegant totem, finished in tactile textured matte ceramic with a mouth-blown opaline glass orb that distributes a soft 360-degree ambient luminescence.',
    price: 680,
    compareAtPrice: 750,
    category: 'lighting',
    room: 'living-room',
    rating: 4.9,
    reviewCount: 31,
    isBestseller: false,
    isNew: true,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Sand Ceramic', hex: '#DED5C6' },
      { name: 'Terracotta Clay', hex: '#B8724C' },
      { name: 'Matte Obsidian', hex: '#312F2C' }
    ],
    materials: ['Hand-Formed Ceramic Body', 'Mouth-Blown Opal Glass', 'Solid Brass Finial'],
    dimensions: '14"Dia x 58"H',
    weight: '24 lbs',
    care: 'Wipe glass orb with a microfiber cloth. Ceramic base can be cleaned with a dry duster.',
    details: [
      'Foot-step brass dimmer switch on textile cord',
      'Mouth-blown triple-layered opaline glass',
      'Weighted base for tip-safe stability'
    ],
    designer: 'Elena Vance Ceramics',
    relatedProductIds: ['prod-1', 'prod-5', 'prod-2']
  },
  {
    id: 'prod-8',
    sku: 'MF-RUG-05',
    name: 'Kala Hand-Knotted Wool & Linen Rug',
    subtitle: 'Organic high-low texture in warm sandstone',
    description: 'Woven by master artisans on traditional wooden looms in rural Rajasthan. The Kala Rug interlaces undyed natural New Zealand wool with raw Belgian linen yarn, producing an elevated subtle geometric high-low rib that softens hard floors.',
    price: 980,
    compareAtPrice: 1150,
    category: 'textiles',
    room: 'living-room',
    rating: 4.9,
    reviewCount: 53,
    isBestseller: true,
    isNew: false,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Sandstone / Cream', hex: '#EBE5D8' },
      { name: 'Oatmeal / Warm Gray', hex: '#D6CEC0' }
    ],
    materials: ['80% New Zealand Wool', '20% Unbleached Flax Linen', 'Cotton Warp'],
    dimensions: '8\' x 10\' (Also available in 9\' x 12\')',
    weight: '44 lbs',
    care: 'Vacuum regularly without beater bar. Rotate every 6 months for even wear. Professional rug clean only.',
    details: [
      'GoodWeave® certified ethical craftsmanship',
      'Dense 12mm pile with luxurious underfoot cushioning',
      'Naturally soil and stain-resistant wool lanolin'
    ],
    designer: 'Maison & Form Heritage Line',
    relatedProductIds: ['prod-5', 'prod-4', 'prod-1']
  },
  {
    id: 'prod-9',
    sku: 'MF-BED-02',
    name: 'Haven Upholstered Platform Bed',
    subtitle: 'Low-profile solid oak frame with cushioned headboard',
    description: 'Transform your bedroom into a quiet architectural retreat. The Haven Bed pairs an expansive tailored linen pillow headboard with a floating solid oak plinth, engineered with solid pine slats that eliminate the need for a box spring.',
    price: 1850,
    compareAtPrice: 2100,
    category: 'bedroom',
    room: 'bedroom',
    rating: 5.0,
    reviewCount: 39,
    isBestseller: true,
    isNew: false,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Natural Oak / Oatmeal Linen', hex: '#E3DCce' },
      { name: 'Smoked Walnut / Charcoal', hex: '#4B4239' }
    ],
    materials: ['Solid White Oak', 'Tailored Linen Blend', 'FSC Pine Slats'],
    dimensions: 'Queen: 68"W x 88"L x 42"H | King: 84"W x 88"L x 42"H',
    weight: '140 lbs',
    care: 'Spot clean headboard fabric. Dust timber frame with dry microfiber cloth.',
    details: [
      'Integrated solid pine slat support system',
      'No box spring required',
      'Headboard angled for optimal reading posture'
    ],
    designer: 'Studio Form & Nord',
    relatedProductIds: ['prod-10', 'prod-3', 'prod-8']
  },
  {
    id: 'prod-10',
    sku: 'MF-TBL-07',
    name: 'Norden Solid Oak Nightstand',
    subtitle: 'Single soft-close drawer with open shelf niche',
    description: 'Clean Scandinavian simplicity. The Norden Nightstand brings tactile solid wood warmth bedside, featuring finger-jointed drawer corners, a hidden soft-close glide mechanism, and a lower shelf for books and design journals.',
    price: 490,
    compareAtPrice: 560,
    category: 'bedroom',
    room: 'bedroom',
    rating: 4.8,
    reviewCount: 19,
    isBestseller: false,
    isNew: true,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Natural White Oak', hex: '#D2B48C' },
      { name: 'Smoked Walnut', hex: '#5B4232' }
    ],
    materials: ['Solid European White Oak', 'Blum Soft-Close Runners'],
    dimensions: '22"W x 18"D x 21"H',
    weight: '28 lbs',
    care: 'Wipe clean with a damp cloth.',
    details: [
      'Seamless concealed soft-close glides',
      'Bevelled top edge prevents items rolling off',
      'Pre-assembled solid construction'
    ],
    designer: 'Maison & Form Workshop',
    relatedProductIds: ['prod-9', 'prod-3', 'prod-2']
  },
  {
    id: 'prod-11',
    sku: 'MF-DIN-01',
    name: 'Verona Travertine Dining Table',
    subtitle: 'Sculptural honed Italian travertine stone with oval top',
    description: 'A monument of timeless geological beauty. Milled from monolithic slabs of Roman travertine with a matte honed finish that celebrates natural veining, cavities, and subtle porous character.',
    price: 3200,
    compareAtPrice: 3600,
    category: 'tables',
    room: 'dining-room',
    rating: 5.0,
    reviewCount: 17,
    isBestseller: false,
    isNew: true,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Classic Warm Travertine', hex: '#DFD5C4' },
      { name: 'Titanium Gray Travertine', hex: '#B8B3AA' }
    ],
    materials: ['Natural Italian Travertine Stone', 'Subtle Matte Sealant'],
    dimensions: '86"L x 42"W x 30"H (Seats 8)',
    weight: '280 lbs',
    care: 'Seal every 12 months with natural stone impregnator. Clean with pH-neutral stone wash only.',
    details: [
      'Authentic quarried Italian stone with unique natural porous patterns',
      'Dual cylindrical sculptural pillar bases',
      'White glove delivery and in-room assembly included'
    ],
    designer: 'Atelier Roma',
    relatedProductIds: ['prod-1', 'prod-2', 'prod-12']
  },
  {
    id: 'prod-12',
    sku: 'MF-MIR-04',
    name: 'Palma Arch Solid Wood Floor Mirror',
    subtitle: 'Full-length floor mirror with gentle arch frame',
    description: 'Reflect natural light throughout your sanctuary. The Palma Arch Mirror features distortion-free premium silver-backed glass encased in a 2-inch deep frame of steam-bent solid American walnut or white oak.',
    price: 720,
    compareAtPrice: 840,
    category: 'decor',
    room: 'entryway',
    rating: 4.9,
    reviewCount: 44,
    isBestseller: true,
    isNew: false,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Steam-Bent Oak', hex: '#D2B48C' },
      { name: 'Rich Walnut', hex: '#5B4232' },
      { name: 'Matte Black Ash', hex: '#2B2927' }
    ],
    materials: ['Solid Hardwood Frame', 'HD Silver-Backed Mirror Glass', 'Anti-Shatter Film'],
    dimensions: '34"W x 2"D x 72"H',
    weight: '46 lbs',
    care: 'Clean glass with vinegar/water solution and lint-free microfiber towel.',
    details: [
      'Heavy-duty anti-tip wall security cleat included',
      'Can be securely wall-hung or rested against the wall',
      'Shatter-proof safety backing'
    ],
    designer: 'Maison & Form Workshop',
    relatedProductIds: ['prod-1', 'prod-2', 'prod-8']
  },
  {
    id: 'prod-13',
    sku: 'MF-STR-01',
    name: 'Freja Modular Oak Sideboard & Media Credenza',
    subtitle: 'Slatted tambour sliding doors in European white oak',
    description: 'A masterclass in discreet architectural storage. The Freja Credenza features seamless tambour slatted sliding doors, interior adjustable shelving, and rear acoustic/cable ventilation ports designed for media consoles or dining storage.',
    price: 1650,
    compareAtPrice: 1890,
    category: 'storage',
    room: 'living-room',
    rating: 4.9,
    reviewCount: 28,
    isBestseller: true,
    isNew: true,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Natural White Oak', hex: '#D2B48C' },
      { name: 'Smoked Oak', hex: '#54463A' }
    ],
    materials: ['Solid European White Oak', 'Oak Veneer Core', 'Solid Brass Handles'],
    dimensions: '68"W x 18"D x 28"H',
    weight: '98 lbs',
    care: 'Dust with soft dry cloth. Apply natural beeswax polish annually.',
    details: [
      'Tambour track allows doors to glide effortlessly without outward clearance',
      'Integrated cord routing for high-end audio and media setups',
      'Adjustable internal solid oak shelving'
    ],
    designer: 'Studio Form & Nord',
    relatedProductIds: ['prod-1', 'prod-4', 'prod-7']
  },
  {
    id: 'prod-14',
    sku: 'MF-STR-02',
    name: 'Aalto Open Architectural Bookshelf',
    subtitle: 'Minimalist solid oak & powder-coated bronze frame shelving',
    description: 'Designed to display your prized ceramics, art books, and organic treasures. The Aalto Shelf pairs solid chamfered oak tiers with slender architectural bronze uprights for an airy, weightless aesthetic.',
    price: 1280,
    compareAtPrice: 1450,
    category: 'storage',
    room: 'home-office',
    rating: 4.8,
    reviewCount: 19,
    isBestseller: false,
    isNew: true,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Natural Oak / Bronze', hex: '#D2B48C' },
      { name: 'Ebonized Ash / Black', hex: '#2A2826' }
    ],
    materials: ['Solid White Oak Shelves', 'Architectural Cast Bronze', 'Anti-Tip Hardware'],
    dimensions: '42"W x 15"D x 74"H',
    weight: '64 lbs',
    care: 'Wipe with microfiber cloth. Avoid placing direct heat or damp planters without saucers.',
    details: [
      '5 spacious tiers with 13-inch vertical clearance',
      'Structural rear cross-brace provides earthquake-grade rigidity',
      'Precision machined hidden screw fasteners'
    ],
    designer: 'Maison & Form Workshop',
    relatedProductIds: ['prod-6', 'prod-3', 'prod-2']
  },
  {
    id: 'prod-15',
    sku: 'MF-TEX-03',
    name: 'Sloane Pure Merino Waffle Throw',
    subtitle: 'Ultra-soft chunky waffle weave in undyed organic wool',
    description: 'Spun from extra-fine 19.5 micron virgin merino wool. The Sloane Throw features a generous airy honeycomb structure that offers lightweight thermal regulation for cool evenings on the sofa or bed.',
    price: 240,
    compareAtPrice: 280,
    category: 'textiles',
    room: 'living-room',
    rating: 5.0,
    reviewCount: 35,
    isBestseller: true,
    isNew: false,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Unbleached Cream', hex: '#F3EFE6' },
      { name: 'Warm Terracotta', hex: '#C27D56' },
      { name: 'Slate Gray', hex: '#636561' }
    ],
    materials: ['100% Extra-Fine Virgin Merino Wool', 'OEKO-TEX Standard 100'],
    dimensions: '54"W x 72"L',
    weight: '3.2 lbs',
    care: 'Dry clean only or hand wash in cold water with wool detergent. Lay flat to dry.',
    details: [
      'Hypoallergenic and naturally moisture-wicking',
      'Finished with delicate rolled whipstitch borders',
      'Pre-washed for extraordinary softness out of the box'
    ],
    designer: 'Maison & Form Heritage Line',
    relatedProductIds: ['prod-1', 'prod-5', 'prod-9']
  },
  {
    id: 'prod-16',
    sku: 'MF-CHR-09',
    name: 'Milo Sculptural Oak Dining Chairs (Set of 2)',
    subtitle: 'Continuous curved backrest with padded leather seat',
    description: 'An ode to mid-century Danish joinery. The Milo Dining Chair features a steam-bent continuous oak lumbar backrest and an Italian aniline leather upholstered seat pad with memory foam core.',
    price: 780,
    compareAtPrice: 920,
    category: 'seating',
    room: 'dining-room',
    rating: 4.9,
    reviewCount: 26,
    isBestseller: false,
    isNew: true,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Natural Oak / Cognac Leather', hex: '#B8724C' },
      { name: 'Smoked Oak / Black Leather', hex: '#2A2826' }
    ],
    materials: ['Solid White Oak', 'Italian Full-Grain Aniline Leather', 'High-Density Foam'],
    dimensions: '21"W x 20"D x 30"H (Seat Height: 18")',
    weight: '16 lbs each',
    care: 'Treat leather with conditioner twice a year. Wipe timber with damp cloth.',
    details: [
      'Priced and shipped as a pair of 2 matching chairs',
      'Curved back cradles posture through long dinner conversations',
      'Felt glider feet pre-installed'
    ],
    designer: 'Studio Form & Nord',
    relatedProductIds: ['prod-11', 'prod-4', 'prod-1']
  },
  {
    id: 'prod-17',
    sku: 'MF-OUT-01',
    name: 'Sylvan Teak Outdoor Lounge Chair',
    subtitle: 'Grade-A SVLK Indonesian teak with weather-resistant Olefin cushions',
    description: 'Brings refined architectural comfort outdoors. Milled from sustainably harvested Indonesian plantation teak with mortise-and-tenon joinery and fast-drying reticulated foam cushions upholstered in UV-stable washed sand Olefin fabric.',
    price: 940,
    compareAtPrice: 1120,
    category: 'seating',
    room: 'outdoor',
    rating: 4.9,
    reviewCount: 21,
    isBestseller: true,
    isNew: true,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Natural Honey Teak', hex: '#C68B59' },
      { name: 'Weathered Silver Teak', hex: '#9E9A93' }
    ],
    materials: ['Grade-A Sustainable Teak', 'Olefin Performance Fabric', 'Quick-Dry Foam'],
    dimensions: '30"W x 34"D x 28"H',
    weight: '34 lbs',
    care: 'Teak naturally patinas to a silver gray or can be oiled annually to maintain golden tone.',
    details: [
      'Resistant to rain, chlorine, saltwater, and direct sunlight',
      'Removable machine-washable cushion covers',
      'Stainless steel marine-grade internal fasteners'
    ],
    designer: 'Maison & Form Workshop',
    relatedProductIds: ['prod-1', 'prod-18', 'prod-4']
  },
  {
    id: 'prod-18',
    sku: 'MF-OUT-02',
    name: 'Dune Fluted Terrazzo Planter & Side Table',
    subtitle: 'Dual-purpose cast mineral stone table and botanical vessel',
    description: 'A monolithic outdoor accent cast from crushed marble, quartz, and white cement. The Dune Fluted Terrazzo functions as an organic drink perch or can be inverted as a statement outdoor planter.',
    price: 360,
    compareAtPrice: 420,
    category: 'decor',
    room: 'outdoor',
    rating: 4.8,
    reviewCount: 15,
    isBestseller: false,
    isNew: true,
    inStock: true,
    featuredInArrivals: false,
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=85'
    ],
    colors: [
      { name: 'Desert Terrazzo', hex: '#E2D8CD' },
      { name: 'Charcoal Basalt', hex: '#44423E' }
    ],
    materials: ['Cast Stone Composite', 'Crushed Travertine & Quartz', 'Weather Sealant'],
    dimensions: '16"Dia x 20"H',
    weight: '42 lbs',
    care: 'Wipe with damp cloth. Frost-proof and UV-stable for year-round outdoor placement.',
    details: [
      'Includes removable rubber drainage plug in base',
      'Heavyweight wind-stable profile prevents tipping',
      'Hand-polished satin honed surface'
    ],
    designer: 'Elena Vance Studio',
    relatedProductIds: ['prod-17', 'prod-2', 'prod-4']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Clara Lindqvist',
    location: 'Stockholm, Sweden',
    rating: 5,
    comment: 'The Soren Bouclé Chair transformed our living room completely. The craftsmanship is breathtaking, the fabric feels extraordinarily luxurious, and the ergonomic curve supports you like a warm hug.',
    verifiedPurchase: true,
    itemPurchased: 'Soren Bouclé Lounge Chair in Oatmeal',
    date: 'February 14, 2026'
  },
  {
    id: 'test-2',
    author: 'Julian & Maya Sterling',
    location: 'Brooklyn, New York',
    rating: 5,
    comment: 'From the white-glove packaging to the solid oak joinery on the Astrid Table, Maison & Form exceeded every single expectation. You can genuinely feel the care and human touch behind every piece.',
    verifiedPurchase: true,
    itemPurchased: 'Astrid Solid Oak Coffee Table',
    date: 'January 28, 2026'
  },
  {
    id: 'test-3',
    author: 'Eleanor Vance',
    location: 'Melbourne, Australia',
    rating: 5,
    comment: 'The Atelier ceramic vessels and Kanso table lamp bring an effortless warmth and quiet architectural calm to my morning workspace. Truly timeless pieces made to be passed down.',
    verifiedPurchase: true,
    itemPurchased: 'Atelier Ceramic Vessels & Kanso Lamp',
    date: 'January 10, 2026'
  }
];

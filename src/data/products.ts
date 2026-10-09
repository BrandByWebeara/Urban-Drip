
import type { Product } from './types'

// Urban Drip — category-specific Unsplash product images
// Image URLs are demo images; visually verify them before publishing.

const IMG_PRODUCTS = [
  '1521572163474-6864f9cf17ab',
  '1551488831-00ddcb6c6bd3',
  '1529139574466-a303027c1d8b',
  '1515886657613-9f3515b0c78f',
  '1503342217505-b0a15ec3261c',
  '1523398002811-999ca8dec234',
  '1551028719-00167b16eac5',
  '1542272604-787c3835535d',
  '1551232864-3a7cbc49d0a4',
  '1512436991641-6745cdb1723f',
  '1542291026-7eec264c27ff',
]

function imgHash(s: string): number {
  let h = 0

  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0
  }

  return h
}

function unsplash(id: string, w: number, h: number): string {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`
}

/**
 * Images grouped by product slug so different categories
 * don't all rotate through the same generic image list.
 */
const PRODUCT_IMAGE_GROUPS: Record<string, string[]> = {
  // T-shirts
  'essential-oversized-tee': [
    '1521572163474-6864f9cf17ab',
    '1503342217505-b0a15ec3261c',
    '1523398002811-999ca8dec234',
    '1512436991641-6745cdb1723f',
  ],

  'heavyweight-street-tee': [
    '1521572163474-6864f9cf17ab',
    '1523398002811-999ca8dec234',
    '1503342217505-b0a15ec3261c',
    '1512436991641-6745cdb1723f',
  ],

  'minimal-logo-tshirt': [
    '1521572163474-6864f9cf17ab',
    '1512436991641-6745cdb1723f',
    '1503342217505-b0a15ec3261c',
    '1523398002811-999ca8dec234',
  ],

  'graphic-culture-tee': [
    '1503342217505-b0a15ec3261c',
    '1521572163474-6864f9cf17ab',
    '1523398002811-999ca8dec234',
    '1512436991641-6745cdb1723f',
  ],

  // Hoodies and sweatshirts
  'classic-street-hoodie': [
    '1556821840-3a63f95609a7',
    '1578681994506-b8f463449011',
    '1556821840-3a63f95609a7',
    '1578681994506-b8f463449011',
  ],

  'urban-oversized-hoodie': [
    '1556821840-3a63f95609a7',
    '1578681994506-b8f463449011',
    '1556821840-3a63f95609a7',
    '1578681994506-b8f463449011',
  ],

  'essential-crewneck-sweatshirt': [
    '1578681994506-b8f463449011',
    '1556821840-3a63f95609a7',
    '1578681994506-b8f463449011',
    '1556821840-3a63f95609a7',
  ],

  // Bottoms
  'relaxed-fit-cargo-pants': [
    '1473966968600-fa801b869a1a',
    '1515886657613-9f3515b0c78f',
    '1473966968600-fa801b869a1a',
    '1515886657613-9f3515b0c78f',
  ],

  'everyday-wide-leg-jeans': [
    '1542272604-787c3835535d',
    '1541099649105-f69ad21f3246',
    '1542272604-787c3835535d',
    '1541099649105-f69ad21f3246',
  ],

  'utility-parachute-pants': [
    '1473966968600-fa801b869a1a',
    '1515886657613-9f3515b0c78f',
    '1473966968600-fa801b869a1a',
    '1515886657613-9f3515b0c78f',
  ],

  'relaxed-denim-jeans': [
    '1542272604-787c3835535d',
    '1541099649105-f69ad21f3246',
    '1542272604-787c3835535d',
    '1541099649105-f69ad21f3246',
  ],

  // Outerwear
  'urban-windbreaker-jacket': [
    '1544923246-77307dd654cb',
    '1551028719-00167b16eac5',
    '1544923246-77307dd654cb',
    '1551028719-00167b16eac5',
  ],

  'everyday-denim-jacket': [
    '1551537482-f2075a1d41f2',
    '1516257984-b1b4d707412e',
    '1551537482-f2075a1d41f2',
    '1516257984-b1b4d707412e',
  ],

  // Footwear
  'classic-street-sneakers': [
    '1542291026-7eec264c27ff',
    '1495555961986-6d4c1ecb7be3',
    '1542291026-7eec264c27ff',
    '1495555961986-6d4c1ecb7be3',
  ],

  'retro-court-sneakers': [
    '1495555961986-6d4c1ecb7be3',
    '1542291026-7eec264c27ff',
    '1495555961986-6d4c1ecb7be3',
    '1542291026-7eec264c27ff',
  ],

  // Accessories
  'everyday-baseball-cap': [
    '1588850561407-ed78c282e89b',
    '1588850561407-ed78c282e89b',
    '1588850561407-ed78c282e89b',
    '1588850561407-ed78c282e89b',
  ],

  'minimal-crossbody-bag': [
    '1553062407-98eeb64c6a62',
    '1622560480654-d96214fdc887',
    '1553062407-98eeb64c6a62',
    '1622560480654-d96214fdc887',
  ],

  'streetwear-everyday-backpack': [
    '1553062407-98eeb64c6a62',
    '1622560480654-d96214fdc887',
    '1553062407-98eeb64c6a62',
    '1622560480654-d96214fdc887',
  ],

  'ribbed-everyday-beanie': [
    '1576871337622-98d48d1cf531',
    '1576871337622-98d48d1cf531',
    '1576871337622-98d48d1cf531',
    '1576871337622-98d48d1cf531',
  ],
}

/** Returns a consistent image gallery for a product slug. */
export function productImages(slug: string, count = 4): string[] {
  const images = PRODUCT_IMAGE_GROUPS[slug]

  // Fallback for products that don't have a dedicated image group.
  if (!images?.length) {
    const start = imgHash(slug) % IMG_PRODUCTS.length

    return Array.from({ length: count }, (_, i) =>
      unsplash(
        IMG_PRODUCTS[(start + i) % IMG_PRODUCTS.length],
        600,
        600
      )
    )
  }

  return Array.from({ length: count }, (_, i) =>
    unsplash(images[i % images.length], 600, 600)
  )
}

const COLORS = [
  '#101828',
  '#ffffff',
  '#667085',
  '#b54708',
  '#344054',
  '#d0a78a',
]

const SIZES_CLOTHES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const SIZES_SHOES = ['6', '7', '8', '9', '10', '11']
const SIZES_NONE: string[] = []

// Demo-only reviews for the portfolio store; these are not verified customer reviews.
const sampleReviews = (rating: number) => [
  {
    author: 'Aarav K.',
    rating: Math.min(5, Math.round(rating)),
    date: '2026-09-12',
    comment: 'Great style and a comfortable fit. Looks even better in person.',
  },
  {
    author: 'Riya M.',
    rating: Math.max(3, Math.round(rating) - 1),
    date: '2026-08-28',
    comment: 'Nice design and good value for a streetwear look.',
  },
  {
    author: 'Dev S.',
    rating: 5,
    date: '2026-08-02',
    comment: 'Easy to style and perfect for everyday outfits.',
  },
]

type Seed = {
  name: string
  slug: string
  price: number
  priceOld?: number
  category: string
  brand: string
  rating: number
  reviewsCount: number
  stock: number
  sizes: string[]
  description: string
  flags?: Partial<Pick<Product, 'featured' | 'bestseller' | 'isNew'>>
}

const seeds: Seed[] = [
  // T-shirts
  {
    name: 'Essential Oversized Tee',
    slug: 'essential-oversized-tee',
    price: 799,
    priceOld: 1199,
    category: 'T-Shirts',
    brand: 'Urban Drip',
    rating: 4.8,
    reviewsCount: 124,
    stock: 80,
    sizes: SIZES_CLOTHES,
    description:
      'A relaxed oversized T-shirt designed for everyday streetwear. Style it with cargos, denim or your favourite sneakers.',
    flags: { featured: true, bestseller: true },
  },
  {
    name: 'Heavyweight Street Tee',
    slug: 'heavyweight-street-tee',
    price: 999,
    priceOld: 1399,
    category: 'T-Shirts',
    brand: 'Urban Drip',
    rating: 4.7,
    reviewsCount: 89,
    stock: 64,
    sizes: SIZES_CLOTHES,
    description:
      'A heavyweight-inspired streetwear tee with a clean silhouette. A versatile piece for layered and everyday outfits.',
    flags: { bestseller: true },
  },
  {
    name: 'Minimal Logo T-Shirt',
    slug: 'minimal-logo-tshirt',
    price: 699,
    category: 'T-Shirts',
    brand: 'Urban Drip',
    rating: 4.5,
    reviewsCount: 56,
    stock: 72,
    sizes: SIZES_CLOTHES,
    description:
      'A minimal logo-style T-shirt made for effortless casual outfits. Pair it with jeans, shorts or relaxed trousers.',
  },
  {
    name: 'Graphic Culture Tee',
    slug: 'graphic-culture-tee',
    price: 899,
    priceOld: 1299,
    category: 'T-Shirts',
    brand: 'Urban Drip',
    rating: 4.6,
    reviewsCount: 71,
    stock: 45,
    sizes: SIZES_CLOTHES,
    description:
      'A graphic-inspired streetwear essential for a bold everyday look. Designed to work with relaxed denim and sneakers.',
    flags: { isNew: true },
  },

  // Hoodies and sweatshirts
  {
    name: 'Classic Street Hoodie',
    slug: 'classic-street-hoodie',
    price: 1799,
    priceOld: 2299,
    category: 'Hoodies',
    brand: 'Urban Drip',
    rating: 4.8,
    reviewsCount: 143,
    stock: 38,
    sizes: SIZES_CLOTHES,
    description:
      'A relaxed hoodie for cooler days and casual streetwear fits. Layer it over a tee or pair it with cargos.',
    flags: { featured: true, bestseller: true },
  },
  {
    name: 'Urban Oversized Hoodie',
    slug: 'urban-oversized-hoodie',
    price: 1999,
    priceOld: 2499,
    category: 'Hoodies',
    brand: 'Urban Drip',
    rating: 4.7,
    reviewsCount: 92,
    stock: 29,
    sizes: SIZES_CLOTHES,
    description:
      'An oversized hoodie silhouette inspired by modern street style. Made for relaxed fits, layering and daily wear.',
    flags: { featured: true },
  },
  {
    name: 'Essential Crewneck Sweatshirt',
    slug: 'essential-crewneck-sweatshirt',
    price: 1499,
    category: 'Hoodies',
    brand: 'Urban Drip',
    rating: 4.5,
    reviewsCount: 48,
    stock: 42,
    sizes: SIZES_CLOTHES,
    description:
      'A clean crewneck sweatshirt that works with denim, joggers and everyday casual outfits.',
    flags: { isNew: true },
  },

  // Bottoms
  {
    name: 'Relaxed Fit Cargo Pants',
    slug: 'relaxed-fit-cargo-pants',
    price: 1599,
    priceOld: 1999,
    category: 'Bottoms',
    brand: 'Urban Drip',
    rating: 4.8,
    reviewsCount: 116,
    stock: 35,
    sizes: SIZES_CLOTHES,
    description:
      'Relaxed cargo-style trousers for a utility-inspired streetwear look. Pair them with oversized tees and sneakers.',
    flags: { featured: true, bestseller: true },
  },
  {
    name: 'Everyday Wide-Leg Jeans',
    slug: 'everyday-wide-leg-jeans',
    price: 1699,
    category: 'Bottoms',
    brand: 'Urban Drip',
    rating: 4.6,
    reviewsCount: 83,
    stock: 40,
    sizes: SIZES_CLOTHES,
    description:
      'Wide-leg denim-inspired jeans for a relaxed silhouette. An easy match for graphic tees and casual footwear.',
  },
  {
    name: 'Utility Parachute Pants',
    slug: 'utility-parachute-pants',
    price: 1499,
    priceOld: 1899,
    category: 'Bottoms',
    brand: 'Urban Drip',
    rating: 4.5,
    reviewsCount: 67,
    stock: 31,
    sizes: SIZES_CLOTHES,
    description:
      'Parachute-style trousers with a modern utility look. Designed to complement oversized tops and layered outfits.',
    flags: { isNew: true },
  },
  {
    name: 'Relaxed Denim Jeans',
    slug: 'relaxed-denim-jeans',
    price: 1399,
    category: 'Bottoms',
    brand: 'Urban Drip',
    rating: 4.4,
    reviewsCount: 59,
    stock: 47,
    sizes: SIZES_CLOTHES,
    description:
      'A relaxed denim-inspired staple for casual everyday styling. Wear it with a basic tee or a statement hoodie.',
  },

  // Outerwear
  {
    name: 'Urban Windbreaker Jacket',
    slug: 'urban-windbreaker-jacket',
    price: 2299,
    priceOld: 2999,
    category: 'Outerwear',
    brand: 'Urban Drip',
    rating: 4.7,
    reviewsCount: 74,
    stock: 24,
    sizes: SIZES_CLOTHES,
    description:
      'A sporty windbreaker-inspired layer for contemporary streetwear outfits. Style it with cargos and everyday sneakers.',
    flags: { featured: true },
  },
  {
    name: 'Everyday Denim Jacket',
    slug: 'everyday-denim-jacket',
    price: 2499,
    category: 'Outerwear',
    brand: 'Urban Drip',
    rating: 4.6,
    reviewsCount: 62,
    stock: 19,
    sizes: SIZES_CLOTHES,
    description:
      'A timeless denim-inspired jacket that adds structure to casual outfits. Wear it over a T-shirt or sweatshirt.',
  },

  // Footwear
  {
    name: 'Classic Street Sneakers',
    slug: 'classic-street-sneakers',
    price: 2499,
    priceOld: 3199,
    category: 'Footwear',
    brand: 'Urban Drip',
    rating: 4.8,
    reviewsCount: 178,
    stock: 33,
    sizes: SIZES_SHOES,
    description:
      'Versatile streetwear-inspired sneakers that pair easily with jeans, cargos and everyday casual outfits.',
    flags: { featured: true, bestseller: true },
  },
  {
    name: 'Retro Court Sneakers',
    slug: 'retro-court-sneakers',
    price: 2799,
    category: 'Footwear',
    brand: 'Urban Drip',
    rating: 4.6,
    reviewsCount: 94,
    stock: 27,
    sizes: SIZES_SHOES,
    description:
      'Retro court-inspired sneakers for a clean, classic look. A versatile footwear choice for casual styling.',
    flags: { isNew: true },
  },

  // Accessories
  {
    name: 'Everyday Baseball Cap',
    slug: 'everyday-baseball-cap',
    price: 599,
    priceOld: 799,
    category: 'Accessories',
    brand: 'Urban Drip',
    rating: 4.5,
    reviewsCount: 82,
    stock: 56,
    sizes: SIZES_NONE,
    description:
      'A casual baseball cap to finish your streetwear outfit. Easy to pair with tees, hoodies and everyday looks.',
    flags: { bestseller: true },
  },
  {
    name: 'Minimal Crossbody Bag',
    slug: 'minimal-crossbody-bag',
    price: 999,
    category: 'Accessories',
    brand: 'Urban Drip',
    rating: 4.6,
    reviewsCount: 61,
    stock: 43,
    sizes: SIZES_NONE,
    description:
      'A compact crossbody bag with a clean, urban-inspired look. A practical styling accessory for everyday outings.',
    flags: { featured: true },
  },
  {
    name: 'Streetwear Everyday Backpack',
    slug: 'streetwear-everyday-backpack',
    price: 1299,
    priceOld: 1699,
    category: 'Accessories',
    brand: 'Urban Drip',
    rating: 4.5,
    reviewsCount: 73,
    stock: 28,
    sizes: SIZES_NONE,
    description:
      'An everyday backpack with a versatile casual look. Designed to complement streetwear and daily outfits.',
  },
  {
    name: 'Ribbed Everyday Beanie',
    slug: 'ribbed-everyday-beanie',
    price: 499,
    category: 'Accessories',
    brand: 'Urban Drip',
    rating: 4.4,
    reviewsCount: 38,
    stock: 50,
    sizes: SIZES_NONE,
    description:
      'A simple ribbed beanie-inspired accessory for cooler weather and relaxed streetwear styling.',
    flags: { isNew: true },
  },
]

export const products: Product[] = seeds.map((s, i) => ({
  id: i + 1,
  name: s.name,
  slug: s.slug,
  price: s.price,
  priceOld: s.priceOld,
  category: s.category,
  brand: s.brand,
  rating: s.rating,
  reviewsCount: s.reviewsCount,
  stock: s.stock,
  description: s.description,
  images: productImages(s.slug),
  variants: {
    colors: COLORS.slice(0, 4),
    sizes: s.sizes,
  },
  specs: [
    { label: 'Brand', value: s.brand },
    { label: 'Collection', value: 'Urban Drip Streetwear' },
    { label: 'Style', value: s.category },
    { label: 'SKU', value: `UD-${1000 + i}` },
  ],
  reviews: sampleReviews(s.rating),
  ...s.flags,
  createdAt: new Date(2026, 8, 1 + i).toISOString(),
}))

export const brands = Array.from(
  new Set(products.map((p) => p.brand))
).sort()

export const priceBounds = {
  min: Math.floor(Math.min(...products.map((p) => p.price))),
  max: Math.ceil(Math.max(...products.map((p) => p.price))),
}

export function findProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function relatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}


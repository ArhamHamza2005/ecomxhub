export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  bestseller: boolean;
  isNew?: boolean;
  rating: number;
  reviews: number;
  stock?: number;
  currency?: string;
}

export const formatPrice = (price: number, currency: string = "GBP") => {
  if (currency === "GBP") return `£${price.toFixed(2)}`;
  return `$${price.toFixed(2)}`;
};

export const products: Product[] = [
  {
    id: "luxe-blush-palette",
    name: "Luxe Blush Palette",
    price: 8,
    image: "/product-blush.jpg",
    description:
      "A finely crafted blush palette with 6 complementary shades for a natural rosy glow.",
    category: "makeup",
    bestseller: true,
    rating: 4.8,
    reviews: 324,
    currency: "GBP",
    stock: 20,
  },
  {
    id: "premium-makeup-brushes-set",
    name: "Premium Makeup Brushes Set",
    price: 79,
    image: "/product-brushes.jpg",
    description:
      "Professional-grade brush set designed for smooth and precise makeup application.",
    category: "tools",
    bestseller: true,
    rating: 4.9,
    reviews: 287,
    currency: "USD",
    stock: 15,
  },
  {
    id: "luminous-face-cream",
    name: "Luminous Face Cream",
    price: 72,
    image: "/product-cream.jpg",
    description:
      "Hydrating cream that nourishes skin and gives a soft radiant glow.",
    category: "skincare",
    bestseller: false,
    rating: 4.7,
    reviews: 156,
    currency: "GBP",
    stock: 18,
  },
   
{
  id: "Elemin-cream",
  name: "Elemin Rich Moisturizer",
  price: 23,
  image: "/frag12.jpeg",
  description:
    "A deeply nourishing whipped moisturizer enriched with green tea, niacinamide, and squalane to hydrate, brighten, and restore skin softness.",
  category: "skincare",
  bestseller: true,
  rating: 4.9,
  reviews: 0,
  currency: "GBP",
  stock: 20,
},


  {
    id: "signature-lipstick",
    name: "Signature Lipstick",
    price: 42,
    image: "/product-lipstick.jpg",
    description:
      "Long-lasting lipstick with rich color payoff and a smooth satin finish.",
    category: "makeup",
    bestseller: true,
    rating: 4.9,
    reviews: 512,
    currency: "USD",
    stock: 40,
  },
  {
    id: "volume-mascara",
    name: "Volume Mascara",
    price: 28,
    image: "/product-mascara.jpg",
    description:
      "Adds volume and length to lashes for a bold, dramatic look.",
    category: "makeup",
    bestseller: true,
    rating: 4.8,
    reviews: 445,
    currency: "GBP",
    stock: 30,
  },
  {
    id: "eye-shadow-palette",
    name: "Eye Shadow Palette",
    price: 68,
    image: "/product-palette.jpg",
    description:
      "12 versatile shades with matte and shimmer finishes for any look.",
    category: "makeup",
    bestseller: false,
    rating: 4.7,
    reviews: 289,
    currency: "USD",
    stock: 22,
  },
  {
    id: "eau-de-parfum",
    name: "Eau de Parfum",
    price: 95,
    image: "/product-perfume.jpg",
    description:
      "Elegant fragrance with jasmine, sandalwood, and warm amber notes.",
    category: "fragrance",
    bestseller: false,
    rating: 4.8,
    reviews: 198,
    currency: "GBP",
    stock: 12,
  },
  {
    id: "revitalizing-serum",
    name: "Revitalizing Serum",
    price: 72,
    image: "/product-serum.jpg",
    description:
      "Vitamin-rich serum that brightens skin and improves texture.",
    category: "skincare",
    bestseller: true,
    rating: 4.9,
    reviews: 267,
    currency: "USD",
    stock: 25,
  },

  // ───────── FRAGRANCE PRODUCTS ─────────

  {
    id: "lavist-bell",
    name: "Lavist Bell",
    price: 32,
    image: "/frag1.jpeg",
    description:
      "Warm blend of amber, vanilla, and oud for a deep and long-lasting scent.",
    category: "fragrance",
    bestseller: false,
    rating: 4.7,
    reviews: 198,
    currency: "GBP",
    stock: 10,
  },
  {
    id: "my-way",
    name: "My Way",
    price: 25,
    image: "/frag2.jpeg",
    description:
      "White floral fragrance with jasmine and musk for a soft elegant feel.",
    category: "fragrance",
    bestseller: true,
    rating: 4.9,
    reviews: 198,
    currency: "GBP",
    stock: 9,
  },
  {
    id: "savage-dior",
    name: "Savage Dior",
    price: 80,
    image: "/frag3.jpeg",
    description:
      "Bold scent with leather, amber, and dark floral notes for evening wear.",
    category: "fragrance",
    isNew: true,
    bestseller: false,
    rating: 4.8,
    reviews: 198,
    currency: "GBP",
    stock: 11,
  },
  {
    id: "blue-de-chanel",
    name: "Blue De Chanel",
    price: 90,
    image: "/frag4.jpeg",
    description:
      "Fresh citrus fragrance with bergamot and grapefruit for a clean vibe.",
    category: "fragrance",
    bestseller: false,
    rating: 4.5,
    reviews: 198,
    currency: "GBP",
    stock: 30,
  },
  {
    id: "parada-milano",
    name: "Parada Milano",
    price: 36,
    image: "/frag5.jpeg",
    description:
      "Luxury oud scent enriched with saffron and amber notes.",
    category: "fragrance",
    bestseller: true,
    rating: 4.9,
    reviews: 198,
    currency: "GBP",
    stock: 6,
  },
  {
    id: "armani-code",
    name: "Armani Code",
    price: 36,
    image: "/frag6.jpeg",
    description:
      "Soft vanilla and sandalwood blend for a warm masculine scent.",
    category: "fragrance",
    rating: 4.7,
    reviews: 198,
    currency: "GBP",
    stock: 24,
    bestseller: false,
  },
  {
    id: "versace-eros-flame",
    name: "Versace Eros Flame",
    price: 48,
    image: "/frag7.jpeg",
    description:
      "Fresh citrus and woody notes for a modern energetic fragrance.",
    category: "fragrance",
    rating: 4.6,
    reviews: 198,
    currency: "GBP",
    stock: 28,
    bestseller: true,
  },
  {
    id: "azzaro-wanted",
    name: "Azzaro Wanted",
    price: 25,
    image: "/frag8.jpeg",
    description:
      "Floral iris and violet blended with soft musk tones.",
    category: "fragrance",
    rating: 4.8,
    reviews: 198,
    currency: "GBP",
    stock: 14,
    bestseller: false,
  },
  {
    id: "scandal",
    name: "Scandal",
    price: 37,
    image: "/frag9.jpeg",
    description:
      "Soft green fig with creamy and woody undertones.",
    category: "skincare",
    isNew: true,
    rating: 4.6,
    reviews: 198,
    currency: "GBP",
    stock: 22,
    bestseller: true,

  },
  {
  id: "clarins-double-serum",
  name: "Clarins Double Serum",
  price: 42,
  image: "/frag10.jpeg",
  description:
    "Advanced anti-aging serum with hydric and lipidic phases to improve skin firmness, radiance, and reduce visible signs of aging.",
  category: "skincare",
  isNew: true,
  rating: 4.8,
  reviews: 1250,
  currency: "GBP",
  stock: 18,
  bestseller: true,
},
  {
    id: "lady-million",
    name: "Lady Million",
    price: 31,
    image: "/frag11.jpeg",
    description:
      "Luxury floral scent with rose, oud, and patchouli blend.",
    category: "skincare",
    rating: 4.9,
    reviews: 198,
    currency: "GBP",
    stock: 8,
    bestseller: true,
  },
];
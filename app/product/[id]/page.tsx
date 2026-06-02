'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ArrowLeft, Truck, ShieldCheck } from 'lucide-react'
import { products } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { toast } from 'sonner'
import { use } from 'react'

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const product = products.find(p => p.id === id)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      category: product.category,
    })
    toast.success(`${product.name} added to cart`)
    setQuantity(1)
  }

  const formatPrice = (price: number, currency: string = "GBP") => {
  if (currency === "GBP") return `£${price.toFixed(2)}`;
  return `$${price.toFixed(2)}`;
};

  return (
    <main>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/shop" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              {product.bestseller && (
                <span className="inline-block mb-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Bestseller
                </span>
              )}
              <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

              <div className="mb-6 p-6 rounded-lg bg-muted">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-bold text-primary">{formatPrice(product.price, product.currency)}</span>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-semibold">Quantity:</label>
                    <div className="flex items-center border border-input rounded-lg">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-muted transition-colors">−</button>
                      <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-muted transition-colors">+</button>
                    </div>
                  </div>
                  <motion.button
                    onClick={handleAddToCart}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 border-t border-border pt-6">
                {[
                  { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
                  { icon: ShieldCheck, title: '30-Day Returns', desc: 'Hassle-free returns' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3">
                    <feature.icon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 bg-muted border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold mb-8">Related Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <motion.div key={p.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <Link href={`/product/${p.id}`} className="group">
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-background mb-4">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-primary font-bold">${p.price.toFixed(2)}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

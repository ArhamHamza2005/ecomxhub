'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Truck, ShieldCheck, Leaf } from 'lucide-react'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/ProductCard'
import { PageHero } from '@/components/PageHero'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const shineVariants = {
  initial: { backgroundPosition: "200% center" },
  animate: {
    backgroundPosition: "-200% center",
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
}

export default function Page() {
  const featured = products.slice(0, 4)
  const bestsellers = products.filter(p => p.bestseller)

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Elevate Your Beauty Routine"
        subtitle="Discover our curated collection of premium beauty products, handpicked for you."
        image="/hero-model.jpg"
        animationType="slideUp"
      />

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Trusted Quality', description: 'Premium ingredients carefully sourced' },
              { icon: Truck, title: 'Fast Shipping', description: 'Delivered within 2-3 business days' },
              { icon: Leaf, title: 'Eco-Conscious', description: 'Sustainable and cruelty-free practices' },
              { icon: Sparkles, title: 'Expert Curated', description: 'Hand-picked by beauty professionals' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <feature.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-2">Featured Collection</h2>
              <p className="text-muted-foreground">Discover our most-loved products</p>
            </motion.div>
            <Link href="/shop" className="hidden sm:inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold">
              View All <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-serif font-bold mb-2">
              Customer Favorites
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust our curated selection of premium beauty products
            </motion.p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-24 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-primary/5 border border-primary/20 px-8 py-12 sm:py-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Subscribe to our newsletter for exclusive offers and early access to new collections</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto" onSubmit={(e) => { e.preventDefault() }}>
              <input type="email" placeholder="Enter your email" className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/50" />
              <button type="submit" className="rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

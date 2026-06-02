'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/ProductCard'
import { PageHero } from '@/components/PageHero'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
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

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['makeup', 'skincare', 'fragrance', 'tools'] as const
  const filtered = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        title="Elevate Your Beauty Routine"
        subtitle="Discover our curated collection of premium beauty products, handpicked for you."
        image="/shop-hero.png"
        animationType="slideUp"
      />

      {/* Filters & Products */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-3">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border hover:border-primary'
              }`}
            >
              All Products
            </motion.button>
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-colors capitalize ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border hover:border-primary'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map(product => (
              <motion.div key={product.id} layout>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}

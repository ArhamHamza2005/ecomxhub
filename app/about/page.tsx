'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/PageHero'

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

export default function AboutPage() {
  return (
    <main>
     <PageHero
        image="/about-hero.png"
        title="Elevate Your Beauty Routine"
        subtitle="Discover our curated collection of premium beauty products, handpicked for you."
        animationType="slideUp"
      />

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                Founded with a passion for beauty excellence, ECOM X HUB began as a vision to democratize access to premium beauty products. We believe that everyone deserves to feel confident and beautiful, which is why we&apos;ve curated the finest selection of products from trusted brands worldwide.
              </p>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Our mission is simple: provide authentic, high-quality beauty products with exceptional customer service. From makeup to skincare and fragrance, every product in our collection has been carefully selected to meet our rigorous standards.
              </p>
              <Link href="/shop" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold">
                Explore Our Collection <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-center">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12">
                <p className="text-6xl font-bold text-primary mb-4">8+</p>
                <p className="text-xl font-semibold mb-2">Years of Excellence</p>
                <p className="text-muted-foreground">Serving beauty enthusiasts worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-serif font-bold mb-12 text-center">
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We only stock products from trusted brands that meet our stringent quality standards. Your beauty is our priority.',
              },
              {
                title: 'Customer Care',
                description: 'Your satisfaction is paramount. We&apos;re committed to exceptional service and support at every step.',
              },
              {
                title: 'Sustainability',
                description: 'We prioritize eco-conscious brands and packaging to minimize our environmental impact.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Explore?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our curated collection of premium beauty products and find your new favorites today.
            </p>
            <Link href="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors group">
              Shop Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

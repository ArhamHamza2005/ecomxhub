'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const links = {
  Shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Makeup', href: '/shop?category=makeup' },
    { label: 'Skincare', href: '/shop?category=skincare' },
    { label: 'Fragrance', href: '/shop?category=fragrance' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Shipping', href: '#' },
    { label: 'Returns', href: '#' },
  ],
} as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h3 className="font-serif text-lg font-bold mb-4">ECOM X HUB</h3>
            <p className="text-sm text-muted-foreground mb-4">Discover a curated edit of premium cosmetics, skincare, and fragrance.</p>
            <div className="flex gap-4">
             
            </div>
          </motion.div>

          {Object.entries(links).map(([title, items]) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with by ECOM X HUB
          </p>
          <p className="text-sm text-muted-foreground">© {year} ECOM X HUB. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

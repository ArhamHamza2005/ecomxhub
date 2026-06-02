'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/lib/cart-context'

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile: text logo. Desktop: full logo with text */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="ECOM X HUB" className="h-12 w-auto hidden md:block transition-transform group-hover:scale-105" />
            <div className="md:hidden">
              <span className="font-serif text-2xl font-bold tracking-tight">
                ECOM<span className="text-primary">X</span>HUB
              </span>
            </div>
            <div className="hidden md:flex flex-col leading-none">
              <span className="font-serif text-lg font-bold tracking-tight">ECOM X HUB</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Beauty · Refined</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/shop" className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted transition-colors" aria-label="Search">
              <Search className="h-4 w-4" />
            </Link>
            <Link href="/cart" className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted transition-colors" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center"
                  >{count}</motion.span>
                )}
              </AnimatePresence>
            </Link>
            <button onClick={() => setOpen(o => !o)} className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-muted" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden border-t border-border bg-background">
            <nav className="flex flex-col px-6 py-4">
              {links.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium border-b border-border last:border-0">
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

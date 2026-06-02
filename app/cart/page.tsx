'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart()

  const subtotal = total
  const shipping = subtotal > 50 ? 0 : 10
  const finalTotal = subtotal + shipping

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some products to get started</p>
            <Link href="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors group">
              Continue Shopping
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Header */}
      <div className="border-b border-border bg-muted py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold">Shopping Cart</h1>
        </div>
      </div>

      {/* Cart Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <Link href={`/product/${item.id}`} className="font-semibold hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-muted-foreground text-sm capitalize">{item.category}</p>
                      <p className="text-primary font-bold mt-2">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                      <div className="flex items-center border border-input rounded-lg">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 hover:bg-muted transition-colors">−</button>
                        <span className="px-3 py-1 min-w-8 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 hover:bg-muted transition-colors">+</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Shipping
                      {shipping === 0 && <span className="text-primary text-xs ml-1">(Free)</span>}
                    </span>
                    <span className="font-semibold">${shipping.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="font-semibold">Total</span>
                  <span className="text-2xl font-bold text-primary">${finalTotal.toFixed(2)}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-3"
                >
                  Proceed to Checkout
                </motion.button>
                <button
                  onClick={() => clearCart()}
                  className="w-full border border-border py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

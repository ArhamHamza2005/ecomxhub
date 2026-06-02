'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Star } from 'lucide-react'
import { useState } from 'react'
import { Product, formatPrice } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { toast } from 'sonner'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        category: product.category,
      })
      toast.success(`${product.name} added to cart`)
      setIsAdding(false)
    }, 300)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg bg-muted">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        {product.bestseller && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold"
          >
            Bestseller
          </motion.div>
        )}
        <motion.button
          onClick={handleAddToCart}
          disabled={isAdding}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-3 flex items-center justify-center gap-2 font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-300 disabled:opacity-50"
        >
          <ShoppingBag className="h-5 w-5" />
          {isAdding ? 'Adding...' : 'Add to Cart'}
        </motion.button>
      </div>
      <div className="mt-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-semibold group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{formatPrice(product.price, product.currency)}</span>
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

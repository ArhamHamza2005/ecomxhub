'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

interface PageHeroProps {
  title: string
  subtitle: string
  image?: string
}

export function PageHero({
  title,
  subtitle,
  image = '/hero-model.jpg',
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const words = title.split(' ')

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black"
      style={{ height: '95vh', minHeight: '650px' }}
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: imageY }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Layered Overlays */}
      <motion.div
        className="absolute inset-0 bg-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)' }}
      />

      {/* Animated Grain Texture */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end pb-24 sm:pb-32"
        style={{ y: contentY, opacity }}
      >
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-10 lg:px-16">

          {/* Category Tag */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="w-8 h-px bg-white/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ originX: 0 }}
            />
            <span className="text-xs text-white/50 tracking-[0.25em] uppercase font-light">
              New Collection
            </span>
          </motion.div>

          {/* Title — each word slides up */}
          <div className="overflow-hidden mb-5">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-[1.05] inline-block"
                  initial={{ y: '110%', opacity: 0, rotateX: 15 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.55 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: 'bottom center', perspective: '800px' }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle with character fade */}
          <motion.p
            className="text-base sm:text-lg text-white/50 max-w-md leading-relaxed font-light tracking-wide mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>

          {/* Bottom Row */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Scroll Indicator */}
            <div className="flex items-center gap-4">
              <div className="relative w-px h-14 bg-white/15 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-white/60"
                  animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <span className="text-xs text-white/25 tracking-[0.2em] uppercase font-light">Scroll</span>
            </div>

            {/* Progress dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="rounded-full bg-white"
                  animate={{
                    width: i === 0 ? ['4px', '20px', '4px'] : '4px',
                    opacity: i === 0 ? [0.8, 1, 0.8] : 0.2,
                  }}
                  transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ height: '4px' }}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Top right — subtle corner detail */}
      <motion.div
        className="absolute top-8 right-8 sm:top-12 sm:right-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className="w-12 h-12 relative opacity-30">
          <div className="absolute top-0 right-0 w-full h-px bg-white" />
          <div className="absolute top-0 right-0 w-px h-full bg-white" />
        </div>
      </motion.div>

      {/* Bottom left — subtle corner detail */}
      <motion.div
        className="absolute bottom-8 left-6 sm:bottom-12 sm:left-10 lg:left-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className="w-12 h-12 relative opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-px bg-white" />
          <div className="absolute bottom-0 left-0 w-px h-full bg-white" />
        </div>
      </motion.div>

    </section>
  )
}
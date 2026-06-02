'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Sparkles, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
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

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Message sent! We&apos;ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <main>
      {/* Hero Section */}
    <PageHero
        title="Get in Touch with ECOM X HUB"
        subtitle="Have questions or need assistance? We&apos;re here to help!"
        image="/contact-hero.png"
        animationType="slideUp"
      />

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    value: 'info@ecomxhub.online',
                    description: 'We&apos;ll respond within 24 hours',
                    link: 'mailto:info@ecomxhub.online',
                  },
                  {
                    icon: Phone,
                    title: 'Helpline',
                    value: '+44 203 432 0469',
                    description: 'Mon-Fri, 9AM-6PM GMT',
                    link: 'tel:+442034320469',
                  },
                  {
                    icon: MapPin,
                    title: 'Address',
                    value: 'Office 19027, 182-184 High Street North',
                    description: 'East Ham, London E6 2JA, United Kingdom',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">{item.title}</p>
                      {item.link ? (
                        <a href={item.link} className="text-primary font-medium mb-1 hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-primary font-medium mb-1">{item.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/50 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/50 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

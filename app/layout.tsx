import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CartProvider } from '@/lib/cart-context'
import { Toaster } from '@/components/ui/sonner'
import { PageTransition } from '@/components/PageTransition'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: 'ECOM X HUB — Refined Beauty, Globally Sourced',
  description: 'Discover a curated edit of premium cosmetics, skincare and fragrance. Refined formulas. Modern rituals.',
  generator: 'v0.app',
  openGraph: {
    title: 'ECOM X HUB — Refined Beauty',
    description: 'Curated premium cosmetics and skincare.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" style={{
      '--font-geist': _geist.style.fontFamily,
      '--font-geist-mono': _geistMono.style.fontFamily,
      '--font-serif': _playfair.style.fontFamily,
    } as React.CSSProperties}>
      <body className="font-sans antialiased">
        <CartProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <Toaster />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

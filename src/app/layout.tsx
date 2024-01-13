import './globals.css'
// Swiper config
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { register } from 'swiper/element/bundle'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/layout/nav-bar'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })
// Swiper
register()

export const metadata: Metadata = {
  title: 'Inga',
  description: 'Write your love about games.',
  creator: '@galupd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

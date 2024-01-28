import './globals.css'
// Swiper config
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Footer } from '@/components/layout/footer'
import { NavBar } from '@/components/layout/nav-bar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { register } from 'swiper/element/bundle'

const inter = Inter({ subsets: ['latin'] })
// Swiper init
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
        <div className="mt-[5.5rem] max-w-limit-screen">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

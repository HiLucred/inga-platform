import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/inga-logo.svg'
import { MobileMenu } from './components/mobile-menu'

export function NavBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-16 w-full border-b border-zinc-800 bg-black bg-opacity-75 backdrop-blur-lg backdrop-filter">
      <div className="m-auto flex h-full max-w-limit-screen items-center justify-between px-[4%] text-white">
        <Link href="/" className="mt-3">
          <Image src={Logo} alt="Inga logo" />
        </Link>

        <MobileMenu />
      </div>
    </header>
  )
}

import Image from 'next/image'
import Logo from '../../../../public/inga-logo.svg'
import Link from 'next/link'
import { MobileMenu } from './components/mobile-menu'

export function NavBar() {
  return (
    <header className="h-16 w-full border-b border-zinc-800 bg-black ">
      <div className="m-auto flex h-full max-w-limit-screen items-center justify-between px-[2%] text-white">
        <Link href="/" className="mt-3">
          <Image src={Logo} alt="Inga logo" />
        </Link>

        <MobileMenu />
      </div>
    </header>
  )
}

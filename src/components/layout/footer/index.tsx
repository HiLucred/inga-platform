import Image from 'next/image'
import Logo from '@/inga-logo.svg'

export function Footer() {
  return (
    <footer className="mt-10 flex w-full items-center justify-center border-t-[1px] border-zinc-800 bg-black py-8">
      <Image src={Logo} alt="Logo da INGA" />
    </footer>
  )
}

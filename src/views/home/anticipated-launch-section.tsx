import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Carousel } from '@/components/carousel'

export function AnticipateLaunchSection() {
  return (
    <section>
      <header className="mb-2 flex  items-center justify-between">
        <h2 className="text-xl font-semibold text-zinc-200">
          Mal podemos esperar pelo lançamento
        </h2>

        <Link href="/">
          <span className="flex items-center justify-center text-xs text-zinc-400">
            TODOS
            <ChevronRight width={16} />
          </span>
        </Link>
      </header>

      <Carousel />
    </section>
  )
}

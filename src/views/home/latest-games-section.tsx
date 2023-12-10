import Link from 'next/link'
import { Carousel } from '@/components/carousel'
import { ChevronRight } from 'lucide-react'

export function LatestGamesSection() {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h2 className="mb-2 text-xl font-semibold text-zinc-200">
          Acabaram de chegar
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

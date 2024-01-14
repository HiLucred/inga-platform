import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { AuthorsCarousel } from '@/components/authors-carousel'

export function ExploreNewArtistsSection() {
  return (
    <section>
      <div className="mb-2 flex  items-center justify-between">
        <h2 className="text-xl font-semibold text-zinc-200">
          Descubra um artista novo
        </h2>

        <Link href="/">
          <span className="flex items-center justify-center text-xs text-zinc-400">
            ARTISTAS
            <ChevronRight width={16} />
          </span>
        </Link>
      </div>

      <AuthorsCarousel />
    </section>
  )
}

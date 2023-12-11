import Link from 'next/link'
import { Avatar } from '@/components/UI/avatar'
import { ChevronRight } from 'lucide-react'

export function ExploreNewArtistsSection() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="mb-2 text-xl font-semibold text-zinc-200">
          Descubra um artista novo
        </h2>

        <Link href="/">
          <span className="flex items-center justify-center text-xs text-zinc-400">
            ARTISTAS
            <ChevronRight width={16} />
          </span>
        </Link>
      </div>

      <div className="flex gap-2 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
        {Array.from({ length: 16 }).map((_, index) => {
          return <Avatar key={index} size="base" />
        })}
      </div>
    </section>
  )
}

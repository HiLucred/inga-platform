import Link from 'next/link'
import { Avatar } from '@/components/UI/avatar'
import { GameCard } from '@/components/card/game-card'
import { ChevronRight, Crown } from 'lucide-react'

export function ArtistOfTheDaySection() {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h2 className="mb-2 text-xl font-semibold text-zinc-200">
          A arte e o artista do dia
        </h2>

        <Link href="/">
          <span className="flex items-center justify-center text-xs text-zinc-400">
            ACESSAR
            <ChevronRight width={16} />
          </span>
        </Link>
      </header>

      <div className="w-full items-center gap-4 overflow-hidden rounded-md bg-gradient-to-tr from-blue-500 to-red-700 p-1">
        <div className="flex w-full rounded-md  bg-zinc-900 p-2">
          <GameCard />

          <div className="flex w-full flex-col items-center justify-center gap-2 text-white">
            <Crown />
            <Avatar className="h-36 w-36" />
            <h3 className="text-sm font-semibold ">@galupd</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

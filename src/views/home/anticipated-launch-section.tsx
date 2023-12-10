import Link from 'next/link'
import { GameCard } from '@/components/card/game-card'
import { ChevronRight } from 'lucide-react'

export function AnticipateLaunchSection() {
  return (
    <section>
      <header className="flex items-center justify-between">
        <h2 className="mb-2 text-xl font-semibold text-zinc-200">
          Mal podemos esperar pelo lançamento
        </h2>

        <Link href="/">
          <span className="flex items-center justify-center text-xs text-zinc-400">
            TODOS
            <ChevronRight width={16} />
          </span>
        </Link>
      </header>

      <div className="flex w-full items-center gap-2 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
        {Array.from({ length: 16 }).map((_, index) => {
          return <GameCard key={index} />
        })}
      </div>
    </section>
  )
}

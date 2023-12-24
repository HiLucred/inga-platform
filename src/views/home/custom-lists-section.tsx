import Link from 'next/link'
import { GameListCard } from '@/components/card/game-list-card'
import { ChevronRight } from 'lucide-react'

export function CustomListsSection() {
  return (
    <section>
      <header className="mb-2 flex  items-center justify-between">
        <h2 className="text-xl font-semibold text-zinc-200">
          Listas personalizadas
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
          return (
            <GameListCard
              key={index}
              title="Jogos que marcaram minha infância"
              rating={821}
              comments={61}
            />
          )
        })}
      </div>
    </section>
  )
}

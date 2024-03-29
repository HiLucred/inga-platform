import { Rating } from '@/components/UI/rating'
import { GameThumbnail } from '@/components/game-thumbnail'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function GameOfTheWeekSection() {
  return (
    <section>
      <header className="mb-2 flex  items-center justify-between">
        <h2 className="gap-2 text-xl font-semibold text-zinc-200">
          Queridinho da semana
        </h2>

        <Link href="/">
          <span className="flex items-center justify-center text-xs text-zinc-400">
            ACESSAR
            <ChevronRight width={16} />
          </span>
        </Link>
      </header>

      <div className="w-fulloverflow-hidden h-full rounded-md bg-gradient-to-tr from-blue-500 to-pink-700 p-0.5">
        <div className="flex gap-3 rounded-md bg-zinc-900 p-2">
          <GameThumbnail className="hidden rounded-md min-[340px]:block" />

          <div className="flex flex-1 flex-col justify-between gap-2">
            <div className="w-full border-b border-white border-opacity-10 pb-2">
              <Link href="/">
                <h3 className="line-clamp-2 text-lg font-bold text-white hover:opacity-80">
                  Favorite Worst Nightmare
                </h3>
              </Link>
            </div>

            <p className="line-clamp-3 text-sm text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              provident quod necessitatibus fugiat debitis, tempora, cupiditate,
              consequatur corporis saepe ratione nisi aut cum itaque dolorum
              quo! Rerum soluta recusandae cum?
            </p>

            <div className="flex items-center justify-center gap-2 rounded-md bg-zinc-800 py-2">
              <Rating rating={3} size="md" />
              <span className="text-xs text-gray-400">3/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

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
        <div className="flex gap-2 rounded-md  bg-zinc-900 p-2">
          <div className="h-48 w-36 rounded-md bg-white bg-opacity-20" />

          <div className="flex flex-1 flex-col gap-2">
            <div className="rounded-md bg-zinc-800 py-4 ">
              <h3 className="flex items-center justify-center gap-2 text-center font-bold text-white">
                Outer Wilds
              </h3>
            </div>

            <div className="flex items-center justify-center rounded-md bg-zinc-800 py-4 pl-4 " />
          </div>
        </div>
      </div>
    </section>
  )
}

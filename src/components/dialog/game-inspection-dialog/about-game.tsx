import {
  ThumbsUpIcon,
  MessageSquareIcon,
  TriangleIcon,
  CircleIcon,
} from 'lucide-react'
import { Rating } from '@/components/UI/rating'

export function AboutGame() {
  return (
    <div className="flex flex-1 flex-col">
      <div>
        <h2 className="text-base font-bold text-white">
          Vestígios de um domingo incógnito
        </h2>

        <div className="mt-1 flex gap-2 text-zinc-400">
          <span className="text-xs">Aventura</span>
          <span className="text-xs">Romance</span>
          <span className="text-xs">RPG</span>
        </div>
      </div>

      <div className="my-2 h-[1px] w-full bg-zinc-800" />

      <div className="flex items-center gap-2">
        <Rating rating={3} />
        <span className="text-xs text-zinc-700">3/5</span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <button
          aria-label="Dar gostei"
          className="flex items-center justify-center gap-1 rounded-md bg-zinc-800 bg-opacity-50 px-4 py-2 text-sm text-white hover:opacity-70"
        >
          <ThumbsUpIcon width={16} />
        </button>
        <button
          aria-label="Comentar sobre o jogo"
          className="flex items-center justify-center gap-1 rounded-md bg-zinc-800 bg-opacity-50 px-4 py-2 text-sm  text-white hover:opacity-70"
        >
          <MessageSquareIcon width={16} />
        </button>

        <button
          aria-label="Avaliar jogo"
          className="flex items-center justify-center gap-1 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
        >
          Avaliar
          <div className="flex">
            <TriangleIcon width={16} />
            <CircleIcon width={16} />
          </div>
        </button>
      </div>
    </div>
  )
}

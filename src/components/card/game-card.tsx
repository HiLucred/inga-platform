import { RatingType } from '@/types/rating'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Rating } from '../UI/rating'
import { GameThumbnail } from '../game-thumbnail'

interface GameCardProps extends ComponentProps<'div'> {
  rating: RatingType
}

export function GameCard({ rating, className }: GameCardProps) {
  return (
    <div className={twMerge('flex flex-col', className)}>
      <GameThumbnail />

      <div className="flex h-full w-full flex-col items-center  justify-center rounded-b-md bg-black/40 py-1">
        <Rating rating={rating} />
        <span className="mt-1 rounded-full bg-zinc-900 px-2 text-xs text-zinc-700">
          {rating}/5
        </span>
      </div>

      <Link
        href="/game/favorite-worst-nighmare"
        className="text-blue-500 hover:underline"
      >
        <h2 className="mt-2 line-clamp-2 text-center text-sm font-semibold text-gray-300">
          Favorite Worst Nightmare
        </h2>
      </Link>
    </div>
  )
}

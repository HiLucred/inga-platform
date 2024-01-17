import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { RatingType } from '@/types/rating'
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
        <span className="text-xs text-zinc-700">{rating}/5</span>
      </div>

      <h2 className="mt-2 line-clamp-2 text-center text-sm font-semibold text-gray-300">
        Favorite Worst Nightmare
      </h2>
    </div>
  )
}

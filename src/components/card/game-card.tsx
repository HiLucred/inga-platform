import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { RatingType } from '@/types/rating'
import { InspectionDialog as InspectionButton } from '../dialog/game-inspection-dialog'
import { FavoriteButton } from '../UI/button/favorite-button'
import { Rating } from '../UI/rating'
import Image from 'next/image'

interface GameCardProps extends ComponentProps<'div'> {
  rating: RatingType
}

export function GameCard({ rating, className }: GameCardProps) {
  return (
    <div className={twMerge('flex flex-col', className)}>
      <div className="relative h-48 w-36 overflow-hidden rounded-t-md bg-white bg-opacity-20">
        <Image
          src="/mockup/game-thumbnail-mockup.png"
          alt="Capa de jogo"
          width={144}
          height={192}
        />
        <FavoriteButton className="absolute right-1 top-1" />
        <InspectionButton className="absolute right-1 top-10" />
      </div>

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

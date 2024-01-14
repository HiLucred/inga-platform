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
    <div className={twMerge('flex flex-col gap-1', className)}>
      <div className="relative h-48 w-36 overflow-hidden rounded-md bg-white bg-opacity-20">
        <Image
          src="/mockup/game-thumbnail-mockup.png"
          alt="Capa de jogo"
          width={144}
          height={192}
        />
        <FavoriteButton className="absolute right-1 top-1" />
        <InspectionButton className="absolute right-1 top-10" />
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <Rating rating={rating} />
        <span className="text-xs text-zinc-700">{rating}/5</span>
      </div>
    </div>
  )
}

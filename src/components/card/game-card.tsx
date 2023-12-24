import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { InspectionDialog as InspectionButton } from '../inspection-dialog'
import { FavoriteButton } from '../UI/button/favorite-button'
import { Rating } from '../UI/rating'

type GameCardProps = ComponentProps<'div'>

export function GameCard({ className }: GameCardProps) {
  return (
    <div className={twMerge('flex flex-col gap-1', className)}>
      <div className="relative h-48 w-36 rounded-md bg-white bg-opacity-20">
        <FavoriteButton className="absolute right-1 top-1" />
        <InspectionButton className="absolute right-1 top-10" />
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <Rating rating={4} />
        <span className="text-xs text-zinc-700">4/5</span>
      </div>
    </div>
  )
}

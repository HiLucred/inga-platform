import { ComponentProps } from 'react'
import { RatingType } from '@/types/rating'
import { twMerge } from 'tailwind-merge'
import { TriangleIcon, CircleIcon } from 'lucide-react'

interface RatingProps extends ComponentProps<'div'> {
  rating: RatingType
}

export function Rating({ rating, className }: RatingProps) {
  const defaultClassName = 'opacity-50'
  const filledTriangleClassName = 'text-blue-600 fill-blue-600 '
  const filledCircleClassName = 'text-pink-600 fill-pink-600 '

  return (
    <div className={twMerge('flex gap-x-0.5 text-white', className)}>
      <TriangleIcon
        width={20}
        className={rating >= 1 ? filledTriangleClassName : defaultClassName}
      />
      <CircleIcon
        width={20}
        className={rating >= 2 ? filledCircleClassName : defaultClassName}
      />
      <TriangleIcon
        width={20}
        className={rating >= 3 ? filledTriangleClassName : defaultClassName}
      />
      <CircleIcon
        width={20}
        className={rating >= 4 ? filledCircleClassName : defaultClassName}
      />
      <TriangleIcon
        width={20}
        className={rating >= 5 ? filledTriangleClassName : defaultClassName}
      />
    </div>
  )
}

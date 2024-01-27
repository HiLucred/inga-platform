import { RatingType } from '@/types/rating'
import { CircleIcon, TriangleIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface RatingProps extends ComponentProps<'div'> {
  rating: RatingType
  size?: 'sm' | 'md'
}

export function Rating({ rating, size = 'sm', className }: RatingProps) {
  const filledTriangleClassName = 'text-blue-600 fill-blue-600 '
  const filledCircleClassName = 'text-pink-600 fill-pink-600 '
  const defaultClassName = 'opacity-50'

  const iconWidth = size === 'sm' ? 16 : 20

  return (
    <div className={twMerge('flex gap-x-0.5 text-white', className)}>
      <TriangleIcon
        width={iconWidth}
        className={rating >= 1 ? filledTriangleClassName : defaultClassName}
      />
      <CircleIcon
        width={iconWidth}
        className={rating >= 2 ? filledCircleClassName : defaultClassName}
      />
      <TriangleIcon
        width={iconWidth}
        className={rating >= 3 ? filledTriangleClassName : defaultClassName}
      />
      <CircleIcon
        width={iconWidth}
        className={rating >= 4 ? filledCircleClassName : defaultClassName}
      />
      <TriangleIcon
        width={iconWidth}
        className={rating >= 5 ? filledTriangleClassName : defaultClassName}
      />
    </div>
  )
}

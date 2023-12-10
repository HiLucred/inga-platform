import { RatingType } from '@/types/rating'
import { HandMetal } from 'lucide-react'

interface RatingProps {
  rating: RatingType
}

export function Rating({ rating }: RatingProps) {
  return (
    <div className="flex w-full items-center gap-1 text-white">
      {Array.from({ length: 5 }).map((_, index) => {
        const defaultClassName = 'opacity-50'
        const filledClassName = 'text-yellow-500'

        return (
          <HandMetal
            key={index + 1}
            width={16}
            className={index < rating ? filledClassName : defaultClassName}
          />
        )
      })}
    </div>
  )
}

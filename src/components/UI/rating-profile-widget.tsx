import { Rating } from './rating'
import { RatingType } from '@/types/rating'
import Image from 'next/image'

interface RatingProfileWidgetProps {
  username: string
  rating: RatingType
}

export function RatingProfileWidget({
  username,
  rating,
}: RatingProfileWidgetProps) {
  return (
    <div className="flex gap-2 text-white">
      <Image
        src="/mockup/user-place-holder.jpg"
        alt=""
        width={320}
        height={320}
        className="h-12 w-12 rounded-md"
      />

      <div className="flex flex-col justify-between">
        <h3 className="text-sm font-semibold ">@{username}</h3>

        <div className="flex items-center gap-2">
          <Rating rating={rating} />
          <span className="text-xs text-zinc-700">{rating}/5</span>
        </div>
      </div>
    </div>
  )
}

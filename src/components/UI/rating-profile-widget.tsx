import { RatingType } from '@/types/rating'
import Image from 'next/image'
import { Rating } from './rating'

interface RatingProfileWidgetProps {
  username: string
  rating: RatingType
}

export function RatingProfileWidget({
  username,
  rating,
}: RatingProfileWidgetProps) {
  return (
    <div className="flex w-full gap-2 text-white">
      <Image
        src="/mockup/user-place-holder.jpg"
        alt=""
        width={320}
        height={320}
        className="hidden h-12 w-12 rounded-md min-[380px]:block"
      />

      <div className="flex w-full flex-col justify-between">
        <h3 className="text-sm font-semibold ">@{username}</h3>

        <div className="flex items-center gap-2">
          <Rating rating={rating} />
          <span className="text-xs text-zinc-700">{rating}/5</span>
        </div>
      </div>
    </div>
  )
}

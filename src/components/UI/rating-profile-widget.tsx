import { Avatar } from './avatar'
import { Rating } from './rating'
import { RatingType } from '@/types/rating'

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
      <Avatar size="sm" />

      <div className="flex flex-col justify-between">
        <h3 className="text-sm font-semibold ">@{username}</h3>
        <Rating rating={rating} />
      </div>
    </div>
  )
}

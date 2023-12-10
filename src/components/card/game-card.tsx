import { Rating } from '../UI/rating'

export function GameCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-48 w-36 rounded-md bg-white bg-opacity-20" />
      <Rating rating={3} />
    </div>
  )
}

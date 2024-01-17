import { RatingProfileWidget } from '../UI/rating-profile-widget'
import { GameThumbnail } from '../game-thumbnail'

export function ReviewCard() {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <GameThumbnail className="rounded-md" />

      <div className="flex h-48 flex-1 flex-col justify-between">
        <RatingProfileWidget username="galupd" rating={3} />
        <div className="my-2 h-[1px] w-full bg-zinc-800" />
        <p className="line-clamp-4 text-sm text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eum
          magni quaerat beatae eligendi! Ex ea sae saepe quibus saepe quibus
          quaerat beatae eligendi...
        </p>
        <button className="mt-3 rounded-md bg-white bg-opacity-5  p-2 text-sm font-semibold text-white">
          Ir para review
        </button>
      </div>
    </div>
  )
}

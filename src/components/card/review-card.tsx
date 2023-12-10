import { RatingProfileWidget } from '../UI/rating-profile-widget'

export function ReviewCard() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="h-48 w-36 rounded-md bg-white bg-opacity-20" />

      <div className="flex h-48 w-48 flex-1 flex-col justify-center">
        <RatingProfileWidget username="galupd" rating={3} />

        <div className="my-2 h-[1px] w-full bg-zinc-800" />

        <p className="overflow-y-hidden text-sm text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eum
          magni quaerat beatae eligendi! Ex ea sae saepe quibus saepe quibus
          quaerat beatae eligendi...
        </p>
      </div>
    </div>
  )
}

import { RatingProfileWidget } from '../UI/rating-profile-widget'
import { GameThumbnail } from '../game-thumbnail'

export function ReviewCard() {
  return (
    <div className="flex items-center justify-center gap-4">
      <GameThumbnail className="hidden rounded-md transition-all min-[340px]:block" />

      <div className="flex h-48 w-full flex-1 flex-col justify-between">
        {/* 
          - Título do jogo da review (h2)
          - Aparece apenas quando o usuário passa de 410px
       */}
        <h2 className="mb-1 w-full truncate border-b-[1px] border-zinc-800 pb-1 font-bold text-white min-[340px]:hidden">
          Favorite Worst Nightmare
        </h2>
        <RatingProfileWidget username="galupd" rating={3} />
        <div className="my-2 h-[1px] w-full bg-zinc-800" />
        <blockquote>
          <p className="line-clamp-3 text-sm text-white min-[410px]:line-clamp-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eum
            magni quaerat beatae eligendi! Ex ea sae saepe quibus saepe quibus
            quaerat beatae eligendi...
          </p>
        </blockquote>
        <button className="mt-3 rounded-md bg-white bg-opacity-5 p-2 text-sm font-semibold text-white transition-all hover:bg-white hover:font-bold hover:text-black">
          Ir para review
        </button>
      </div>
    </div>
  )
}

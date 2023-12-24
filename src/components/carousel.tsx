import { GameCard } from './card/game-card'

export function Carousel() {
  return (
    <div className="flex w-full items-center gap-2 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
      {Array.from({ length: 16 }).map((_, index) => {
        return (
          <GameCard
            key={index}
            title="Vestígios de um domingo incógnito"
            rating={3}
          />
        )
      })}
    </div>
  )
}

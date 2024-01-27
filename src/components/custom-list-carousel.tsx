'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { GameListCard } from './card/game-list-card'

export function CustomListCarousel() {
  return (
    <div className="h-full w-full rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
      <Swiper slidesPerView={'auto'} spaceBetween={10}>
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            <SwiperSlide key={index} className="max-w-sm">
              <GameListCard
                title="Os melhores jogos feitos no Norte do Brasil"
                rating={821}
                comments={61}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { GameCard } from './card/game-card'

export function Carousel() {
  return (
    <div className="h-full w-full rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
      <Swiper slidesPerView={'auto'} spaceBetween={10}>
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            <SwiperSlide key={index} className="max-w-[9rem]">
              <GameCard title="Vestígios de um domingo incógnito" rating={3} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Avatar } from './UI/avatar'

export function AuthorsCarousel() {
  return (
    <div className="h-full w-full rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
      <Swiper slidesPerView={'auto'} spaceBetween={10}>
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            <SwiperSlide key={index} className="max-w-[8rem]">
              <Avatar key={index} className="h-32 w-32" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

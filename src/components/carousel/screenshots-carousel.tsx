'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

// const items = [
//   { id: '01',  }
// ]

export function ScreenshotsCarousel() {
  return (
    <div className="h-full w-full rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
      <Swiper slidesPerView={'auto'} spaceBetween={20}>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <SwiperSlide key={index} className="max-w-sm">
              d
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

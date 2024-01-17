'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { ReviewCard } from './card/review-card'

export function ReviewsCarousel() {
  return (
    <div className="h-full w-full rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
      <Swiper slidesPerView={'auto'} spaceBetween={20}>
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            <SwiperSlide key={index} className="max-w-md">
              <ReviewCard key={index} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { ReviewsCarousel } from '@/components/reviews-carousel'

export function TrendingReviewsSection() {
  return (
    <section>
      <header className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-zinc-200">
          Críticas bombando
        </h2>

        <Link href="/">
          <span className="flex items-center justify-center text-xs text-zinc-400">
            CRÍTICAS
            <ChevronRight width={16} />
          </span>
        </Link>
      </header>

      <ReviewsCarousel />
    </section>
  )
}

import Link from 'next/link'
import { ReviewCard } from '@/components/card/review-card'
import { ChevronRight } from 'lucide-react'

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

      <div className="flex w-full items-center gap-4 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
        {Array.from({ length: 16 }).map((_, index) => {
          return <ReviewCard key={index} />
        })}
      </div>
    </section>
  )
}

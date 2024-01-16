import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { CustomListCarousel } from '@/components/custom-list-carousel'

export function CustomListsSection() {
  return (
    <section>
      <header className="mb-2 flex  items-center justify-between">
        <h2 className="text-xl font-semibold text-zinc-200">
          Listas personalizadas
        </h2>

        <Link href="/">
          <span className="flex items-center justify-center text-xs text-zinc-400">
            TODOS
            <ChevronRight width={16} />
          </span>
        </Link>
      </header>

      <CustomListCarousel />
    </section>
  )
}

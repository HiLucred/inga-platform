import { PlusIcon, BookmarkIcon } from 'lucide-react'

export function FooterActions() {
  return (
    <footer className="mt-4 flex w-full items-center justify-center gap-2">
      <button className="flex w-full items-center justify-between rounded-md bg-zinc-800 bg-opacity-50 px-4 py-4 text-sm font-semibold text-white hover:opacity-70">
        Adicionar a lista
        <PlusIcon width={20} />
      </button>
      <button className="flex w-full items-center justify-between rounded-md bg-zinc-800 bg-opacity-50 px-4 py-4 text-sm font-semibold text-white hover:opacity-70">
        Favoritar
        <BookmarkIcon width={20} />
      </button>
    </footer>
  )
}

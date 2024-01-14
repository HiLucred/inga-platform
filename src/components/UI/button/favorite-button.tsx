import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { BookmarkIcon } from 'lucide-react'

type FavoriteButtonProps = ComponentProps<'button'>

export function FavoriteButton({ className }: FavoriteButtonProps) {
  return (
    <button
      aria-label="Favoritar jogo"
      className={twMerge('rounded-md bg-white bg-opacity-10 p-1', className)}
    >
      <BookmarkIcon width={20} color="white" />
    </button>
  )
}

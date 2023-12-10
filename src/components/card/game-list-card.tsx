import { ComponentProps } from 'react'
import { HandMetal, MessageSquare } from 'lucide-react'

interface GameListCardProps extends ComponentProps<'div'> {
  title: string
  author: string
  rating: number
  comments: number
}

export function GameListCard({
  title,
  author,
  rating,
  comments,
}: GameListCardProps) {
  return (
    <div className="flex w-36 flex-col items-center justify-center">
      <div className="relative h-48 w-36 rounded-md bg-white bg-opacity-20">
        <h3 className="absolute bottom-0 left-0 h-16 w-full pb-1 pl-1 text-sm font-semibold text-zinc-300">
          {title}
        </h3>
      </div>

      <div className="mt-1 flex h-full w-full flex-col text-white">
        <h3 className="text-sm">@{author}</h3>

        <div className="flex h-full w-full ">
          <div className="flex items-center gap-1">
            <HandMetal width={16} className="text-yellow-500" />
            <span className="text-xs">{rating}</span>
          </div>

          <span className="mx-2 text-zinc-700">/</span>

          <div className="flex items-center gap-1">
            <MessageSquare width={16} className="text-blue-500" />
            <span className="text-xs">{comments}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

import { ComponentProps } from 'react'
import { ThumbsUpIcon, MessageSquareIcon, DotIcon } from 'lucide-react'

interface GameListCardProps extends ComponentProps<'div'> {
  title: string
  rating: number
  comments: number
}

export function GameListCard({ title, rating, comments }: GameListCardProps) {
  return (
    <div className="flex w-36 flex-col items-center justify-center">
      <div className="relative h-48 w-36 rounded-md bg-white bg-opacity-20" />

      <div className="flex h-full w-full flex-col gap-0.5 text-white">
        <h3 className="line-clamp-2 w-full text-sm text-zinc-300">{title}</h3>

        <div className="flex h-full w-full ">
          <div className="flex items-center justify-center gap-1">
            <span className="text-xs">{rating}</span>
            <ThumbsUpIcon width={16} className="text-blue-500" />
          </div>

          <DotIcon className=" text-zinc-700" />

          <div className="flex items-center gap-1">
            <span className="text-xs">{comments}</span>
            <MessageSquareIcon width={16} className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

import { DotIcon, MessageSquareIcon, ThumbsUpIcon } from 'lucide-react'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { FavoriteButton } from '../UI/button/favorite-button'

interface GameListCardProps extends ComponentProps<'div'> {
  title: string
  rating: number
  comments: number
}

export function GameListCard({ title, rating, comments }: GameListCardProps) {
  return (
    <div className="flex w-full max-w-xs flex-col items-center justify-center">
      <div className="relative h-48 w-full rounded-md bg-white bg-opacity-20">
        <FavoriteButton className="absolute right-1 top-1" />

        <div className="absolute bottom-0 flex w-full  gap-2 bg-black/10 p-2">
          <Image
            src="/mockup/user-place-holder.jpg"
            alt=""
            width={320}
            height={320}
            className="h-12 w-12 rounded-md"
          />

          <div className="flex w-full flex-col overflow-hidden">
            <h3 className="truncate pb-1 text-sm font-semibold text-zinc-300">
              {title}
            </h3>

            <div className="flex w-full items-center justify-between text-white">
              <h4 className="hidden text-xs text-zinc-300 min-[270px]:block">
                @galupd
              </h4>

              <div className="flex h-full">
                <div className="flex items-center justify-center gap-1">
                  <ThumbsUpIcon width={16} className="text-blue-500" />
                  <span className="text-xs">{rating}</span>
                </div>

                <DotIcon className="text-zinc-800" />

                <div className="flex items-center gap-1">
                  <MessageSquareIcon width={16} className="text-yellow-500" />
                  <span className="text-xs">{comments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex h-full w-full flex-col gap-0.5 text-white">
        <h3 className="line-clamp-2 w-full font-semibold text-zinc-300">
          {title}
        </h3>

        <div className="flex h-full w-full ">
          <div className="flex items-center justify-center gap-1">
            <span className="text-xs">{rating}</span>
            <ThumbsUpIcon width={16} className="text-blue-500" />
          </div>

          <DotIcon className="text-zinc-700" />

          <div className="flex items-center gap-1">
            <span className="text-xs">{comments}</span>
            <MessageSquareIcon width={16} className="text-yellow-500" />
          </div>
        </div>
      </div> */}
    </div>
  )
}

import Image from 'next/image'
import { FavoriteButton } from './UI/button/favorite-button'
import { InspectionDialog } from './dialog/game-inspection-dialog'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type GameThumbnailProps = ComponentProps<'div'>

export function GameThumbnail({ className }: GameThumbnailProps) {
  return (
    <div
      className={twMerge(
        'relative h-48 w-36 overflow-hidden rounded-t-md bg-white bg-opacity-20',
        className,
      )}
    >
      <Image
        src="/mockup/game-thumbnail-mockup.png"
        alt=""
        width={144}
        height={192}
      />
      <FavoriteButton className="absolute right-1 top-1" />
      <InspectionDialog className="absolute right-1 top-10" />
    </div>
  )
}

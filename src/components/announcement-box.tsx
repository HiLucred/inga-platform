import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type AnnouncementBoxProps = ComponentProps<'div'>

export function AnnouncementBox({ className }: AnnouncementBoxProps) {
  // Cor antiga: bg-white bg-opacity-20
  return (
    <div
      className={twMerge(
        'flex h-64 w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-950 to-pink-950',
        className,
      )}
    >
      <Image
        src="/inga-logo-lg.svg"
        alt="Logo da Inga"
        width={210}
        height={115}
        className="drop-shadow-md"
      />
    </div>
  )
}

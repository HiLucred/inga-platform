import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type UserAreaProps = ComponentProps<'div'>

export function UserArea({ className }: UserAreaProps) {
  return (
    <div
      className={twMerge(
        'h-64 w-full rounded-md bg-white bg-opacity-20 p-4',
        className,
      )}
    >
      <div className="w-24">
        <Image
          src="/mockup/user-place-holder.jpg"
          alt=""
          width={320}
          height={320}
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

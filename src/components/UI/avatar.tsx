import Image from 'next/image'
import User from '@/mockup/user-place-holder.jpg'
import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'

type AvatarProps = ComponentProps<'img'>

export function Avatar({ className }: AvatarProps) {
  return (
    <div>
      <Image
        src={User}
        alt=""
        // width={320}
        // height={320}
        className={twMerge('h-12 w-12 rounded-t-lg', className)}
      />
      <div className="flex items-center justify-center rounded-b-lg border-t border-pink-500 bg-white bg-opacity-5 py-2">
        <h3 className="text-xs font-semibold text-white">@galupd</h3>
      </div>
    </div>
  )
}

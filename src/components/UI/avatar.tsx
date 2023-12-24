import Image from 'next/image'
import User from '@/mockup/user-place-holder.jpg'
import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'

type AvatarProps = ComponentProps<'img'>

// const sizeOptions = {
//   sm: '3rem',
//   base: '8rem',
//   large: '9rem',
// }

export function Avatar({ className }: AvatarProps) {
  return (
    <Image
      src={User}
      alt=""
      width={320}
      // height={320}
      className={twMerge('h-12 w-12 rounded-md', className)}
    />
  )
}

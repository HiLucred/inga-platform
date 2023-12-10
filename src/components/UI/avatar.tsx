import Image from 'next/image'
import User from '../../../public/mockup/user-place-holder.jpg'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface AvatarProps extends ComponentProps<'img'> {
  size?: 'sm' | 'base' | 'large'
}

const width = {
  sm: 12,
  base: 32,
  large: 36,
}

export function Avatar({ size = 'base', className }: AvatarProps) {
  return (
    <Image
      src={User}
      alt=""
      className={twMerge(`rounded-full w-${width[size]}`, className)}
    />
  )
}

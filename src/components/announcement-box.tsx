import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type AnnouncementBoxProps = ComponentProps<'div'>

export function AnnouncementBox({ className }: AnnouncementBoxProps) {
  return (
    <div
      className={twMerge(
        'h-64 w-full rounded-md bg-white bg-opacity-20',
        className,
      )}
    />
  )
}

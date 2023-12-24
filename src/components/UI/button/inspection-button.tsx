import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { EyeIcon } from 'lucide-react'

type InspectionButtonProps = ComponentProps<'button'>

export function InspectionButton({
  className,
  ...rest
}: InspectionButtonProps) {
  return (
    <button
      className={twMerge(
        'absolute rounded-md bg-black bg-opacity-10 p-1',
        className,
      )}
      {...rest}
    >
      <EyeIcon width={20} color="white" />
    </button>
  )
}

import { ComponentProps } from 'react'
import { EyeIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type InspectionButtonProps = ComponentProps<'button'>

export function InspectionButton({
  className,
  ...rest
}: InspectionButtonProps) {
  return (
    <button
      aria-label="Inspecionar destalhes sobre este jogo"
      className={twMerge('rounded-md bg-white bg-opacity-10 p-1', className)}
      {...rest}
    >
      <EyeIcon width={20} color="white" />
    </button>
  )
}

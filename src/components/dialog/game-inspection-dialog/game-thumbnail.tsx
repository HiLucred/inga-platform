import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

export function GameThumbnail() {
  return (
    <header className="flex w-full items-start justify-between">
      <Image
        src="/mockup/game-thumbnail-mockup.png"
        alt="Capa de jogo"
        width={144}
        height={192}
      />

      <Dialog.Close asChild>
        <button className="rounded-md bg-zinc-900 bg-opacity-50 p-2 text-white">
          <XIcon />
        </button>
      </Dialog.Close>
    </header>
  )
}

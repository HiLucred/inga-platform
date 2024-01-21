import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import Image from 'next/image'

export function GameThumbnail() {
  return (
    <header className="flex w-full items-start justify-between">
      <Image
        src="/mockup/game-thumbnail-mockup.png"
        alt=""
        width={144}
        height={192}
        className="rounded-lg"
      />

      <Dialog.Close asChild>
        <button
          aria-label="Fechar janela"
          className="rounded-md bg-zinc-900 bg-opacity-50 p-2 text-white"
        >
          <XIcon />
        </button>
      </Dialog.Close>
    </header>
  )
}

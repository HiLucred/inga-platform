'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ComponentProps } from 'react'
import { AboutGame } from './about-game'
import { Authors } from './authors'
import { FooterActions } from './footer-actions'
import { GameThumbnail } from './game-thumbnail'
import { InspectionButton } from './inspection-button'

type InspectionDialogProps = ComponentProps<'button'>

export function InspectionDialog({ className }: InspectionDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <InspectionButton className={className} />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content asChild>
          <div className="fixed bottom-0 left-0 right-0 z-50 w-screen gap-2 overflow-y-auto border-t border-zinc-800 bg-black bg-opacity-75 p-4 backdrop-blur-lg backdrop-filter data-[state=open]:animate-slideUp">
            <GameThumbnail />
            <AboutGame />
            <p className="my-4 line-clamp-4 text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              libero ex corporis molestias! Cumque veritatis sint impedit,
              explicabo corrupti quaerat non illo debitis necessitatibus quam
              incidunt consequatur nihil at ab.
            </p>
            <Authors />
            <FooterActions />
          </div>
        </Dialog.Content>

        <Dialog.Overlay className="fixed inset-0 z-30 bg-black bg-opacity-70 transition-all" />
      </Dialog.Portal>
    </Dialog.Root>
  )
}

'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ComponentProps } from 'react'
import { InspectionButton } from './inspection-button'
import { AboutGame } from './about-game'
import { FooterActions } from './footer-actions'
import { GameThumbnail } from './game-thumbnail'
import { Authors } from './authors'

type InspectionDialogProps = ComponentProps<'button'>

export function InspectionDialog({ className }: InspectionDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <InspectionButton className={className} />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-black bg-opacity-70 transition-all" />

        <Dialog.Content asChild>
          <div className="fixed bottom-0 left-0 right-0 z-50 w-screen gap-2 border-t border-zinc-800 bg-black bg-opacity-75 p-4 backdrop-blur-lg backdrop-filter data-[state=open]:animate-slideUp">
            <div className="flex w-full flex-col gap-4 text-white">
              <GameThumbnail />
              <AboutGame />
            </div>

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
      </Dialog.Portal>
    </Dialog.Root>
  )
}

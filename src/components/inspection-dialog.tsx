'use client'

import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import * as Dialog from '@radix-ui/react-dialog'
import {
  EyeIcon,
  ThumbsUpIcon,
  MessageSquareIcon,
  PlusIcon,
  CircleIcon,
  BookmarkIcon,
  TriangleIcon,
  XIcon,
} from 'lucide-react'
import { Rating } from './UI/rating'
import { Avatar } from './UI/avatar'

type InspectionDialogProps = ComponentProps<'button'>

export function InspectionDialog({ className }: InspectionDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          aria-label="Inspecionar destalhes sobre este jogo"
          className={twMerge(
            'rounded-md bg-black bg-opacity-10 p-1',
            className,
          )}
        >
          <EyeIcon width={20} color="white" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-black bg-opacity-70 transition-all" />

        <Dialog.Content asChild>
          <div className="fixed bottom-0 left-0 right-0 z-50 w-screen gap-2 border-t border-zinc-800 bg-black bg-opacity-75 p-4 backdrop-blur-lg backdrop-filter data-[state=open]:animate-slideUp">
            <div className="flex w-full flex-col gap-4 text-white">
              <header className="flex w-full items-start justify-between">
                {/**
                 *  -> Imagem do Jogo
                 */}
                <div className="h-48 w-36 rounded-md bg-white bg-opacity-20" />

                <Dialog.Close asChild>
                  <button>
                    <XIcon />
                  </button>
                </Dialog.Close>
              </header>

              <div className="flex flex-1 flex-col">
                <div>
                  <h2 className="text-base font-bold">
                    Vestígios de um domingo incógnito
                  </h2>

                  <div className="mt-1 flex gap-2 text-zinc-400">
                    <span className="text-xs">Aventura</span>
                    <span className="text-xs">Romance</span>
                    <span className="text-xs">RPG</span>
                  </div>
                </div>

                <div className="my-2 h-[1px] w-full bg-zinc-800" />

                <div className="flex items-center gap-2">
                  <Rating rating={3} />
                  <span className="text-xs text-zinc-700">3/5</span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <button className="flex items-center justify-center gap-1 rounded-md bg-white bg-opacity-5 px-4 py-2 text-sm text-white">
                    <ThumbsUpIcon width={16} />
                  </button>
                  <button className="flex items-center justify-center gap-1 rounded-md bg-white bg-opacity-5 px-4 py-2 text-sm  text-white">
                    <MessageSquareIcon width={16} />
                  </button>
                  <button className="flex items-center justify-center gap-1 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black">
                    Avaliar
                    <div className="flex">
                      <TriangleIcon width={16} />
                      <CircleIcon width={16} />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <p className="my-4 line-clamp-4 text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              libero ex corporis molestias! Cumque veritatis sint impedit,
              explicabo corrupti quaerat non illo debitis necessitatibus quam
              incidunt consequatur nihil at ab.
            </p>

            <div className="my-4 h-[1px] w-full bg-zinc-800" />

            <h3 className="mb-2 font-bold text-white">Autores</h3>

            <div className="flex gap-2 overflow-hidden rounded-md bg-white bg-opacity-10 p-2">
              {Array.from({ length: 20 }).map((_, index) => {
                return <Avatar key={index} className="h-20 w-20" />
              })}
            </div>

            <div className="my-4 h-[1px] w-full bg-zinc-800" />

            <footer className="mt-4 flex w-full items-center justify-center gap-2">
              <button className="flex w-full items-center justify-between rounded-md bg-white bg-opacity-5 px-4 py-4 text-sm font-semibold text-white">
                Adicionar a lista
                <PlusIcon width={20} />
              </button>
              <button className="flex w-full items-center justify-between rounded-md bg-white bg-opacity-5 px-4 py-4 text-sm font-semibold text-white">
                Favoritar
                <BookmarkIcon width={20} />
              </button>
            </footer>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

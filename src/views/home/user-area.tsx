import { BellIcon, BookmarkIcon, UserRoundIcon, ZapIcon } from 'lucide-react'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type UserAreaProps = ComponentProps<'div'>

export function UserArea({ className }: UserAreaProps) {
  return (
    <div
      className={twMerge(
        'mb-4 h-full w-full rounded-md bg-white bg-opacity-5 p-4',
        className,
      )}
    >
      <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
        <div className="w-24">
          <Image
            src="/mockup/user-place-holder.jpg"
            alt=""
            width={320}
            height={320}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-3xl text-white">Olá,</span>
          <h2 className="text-3xl font-bold text-white">@galupd!</h2>
        </div>
      </div>

      <ul className="my-4 flex flex-wrap items-center justify-between gap-1 max-[410px]:justify-center">
        <li>
          <button className="flex items-center justify-between gap-2 rounded-md bg-zinc-800 bg-opacity-50 px-3 py-2 text-sm font-semibold text-white hover:bg-opacity-60">
            <i>
              <UserRoundIcon size={20} />
            </i>
            <span className="max-[390px]:text-xs">Perfil</span>
          </button>
        </li>

        <li>
          <button className="flex items-center justify-between gap-2 rounded-md bg-zinc-800 bg-opacity-50 px-3 py-2 text-sm font-semibold text-white hover:bg-opacity-60">
            <i>
              <ZapIcon size={20} />
            </i>
            <span className="max-[390px]:text-xs">Atividades</span>
          </button>
        </li>

        <li>
          <button className="flex items-center justify-between gap-2 rounded-md bg-zinc-800 bg-opacity-50 px-3 py-2 text-sm font-semibold text-white hover:bg-opacity-60">
            <i>
              <BookmarkIcon size={20} />
            </i>
            <span className="max-[390px]:text-xs">Favoritos</span>
          </button>
        </li>
      </ul>

      <footer className="rounded-md bg-zinc-800 bg-opacity-50 p-2">
        <div className="flex items-center gap-2">
          <BellIcon className="text-zinc-700" />
          <span className="text-sm text-zinc-700">Sem notificações.</span>
        </div>
      </footer>
    </div>
  )
}

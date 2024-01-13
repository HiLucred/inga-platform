'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import Link from 'next/link'
import { useState } from 'react'
import {
  MenuIcon,
  XIcon as MenuCloseIcon,
  GamepadIcon,
  SparklesIcon,
  LayoutGridIcon,
  BookHeartIcon,
  UserRoundIcon,
  SettingsIcon,
  BookmarkIcon,
} from 'lucide-react'

const itemsMenu = [
  { name: 'Jogos', icon: <GamepadIcon /> },
  { name: 'Destaques', icon: <SparklesIcon /> },
  { name: 'Categorias', icon: <LayoutGridIcon /> },
  { name: 'Avaliações', icon: <BookHeartIcon /> },
  { name: 'Favoritos', icon: <BookmarkIcon /> },
]

const otherItemsMenu = [
  { name: 'Perfil', icon: <UserRoundIcon /> },
  { name: 'Configurações', icon: <SettingsIcon /> },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      {/* - Hamburguer menu */}
      <Collapsible.Trigger asChild>
        <button
          title="Mobile menu"
          className="rounded-md bg-opacity-50 p-2 text-white hover:bg-zinc-900 data-[state=open]:bg-zinc-900"
        >
          {open ? <MenuCloseIcon /> : <MenuIcon />}
        </button>
      </Collapsible.Trigger>

      <Collapsible.Content>
        <div className="fixed right-0 top-0 z-50 mt-16 h-screen w-full overflow-y-auto bg-zinc-900 bg-opacity-80 px-[4%] pb-8 backdrop-blur-lg backdrop-filter">
          {/* - Menu items */}
          <ul className="m-auto mt-4 flex flex-col gap-2">
            {itemsMenu.map((itemMenu, index) => {
              return (
                <Link key={index} href="/">
                  <li className="flex items-center justify-between rounded-md bg-zinc-800 bg-opacity-50 px-4 py-6 font-semibold hover:bg-opacity-60">
                    {itemMenu.name}
                    {itemMenu.icon}
                  </li>
                </Link>
              )
            })}
          </ul>
          {/* - Separator */}
          <div className="my-6 h-[1px] bg-zinc-800" />
          {/* - Others menu items */}
          <ul className="m-auto mt-4 flex flex-col gap-2">
            {otherItemsMenu.map((otherItemMenu, index) => {
              return (
                <Link key={index} href="/">
                  <li className="flex items-center justify-between rounded-md bg-zinc-800 bg-opacity-50 px-4 py-6 font-semibold hover:bg-opacity-60">
                    {otherItemMenu.name}
                    {otherItemMenu.icon}
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

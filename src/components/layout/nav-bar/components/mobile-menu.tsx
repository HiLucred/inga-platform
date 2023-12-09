'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import Link from 'next/link'
import { useState } from 'react'
import {
  Menu,
  X as MenuClose,
  Gamepad,
  Sparkles,
  LayoutGrid,
  BookHeart,
  UserRound,
  Settings,
} from 'lucide-react'

const itemsMenu = [
  { name: 'Jogos', icon: <Gamepad /> },
  { name: 'Destaques', icon: <Sparkles /> },
  { name: 'Categorias', icon: <LayoutGrid /> },
  { name: 'Avaliações', icon: <BookHeart /> },
]

const otherItemsMenu = [
  { name: 'Perfil', icon: <UserRound /> },
  { name: 'Configurações', icon: <Settings /> },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <button
          title="Mobile menu"
          className="rounded-md bg-opacity-50 p-2 text-white hover:bg-zinc-900 data-[state=open]:bg-zinc-900"
        >
          {open ? <MenuClose /> : <Menu />}
        </button>
      </Collapsible.Trigger>

      <Collapsible.Content>
        <div className="fixed right-0 top-0 mt-16 h-full w-full bg-zinc-900 px-[2%]">
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

          <div className="my-6 h-[1px] bg-zinc-800" />

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

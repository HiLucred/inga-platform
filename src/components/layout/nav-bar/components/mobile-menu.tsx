'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { XIcon as MenuCloseIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { itemsMenu, otherItemsMenu } from '../data/menu-items-data'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <button
          title="Mobile menu"
          aria-label="Abrir e fechar o menu mobile"
          className="rounded-md bg-opacity-50 p-2 text-white hover:bg-zinc-900 data-[state=open]:bg-zinc-900"
        >
          {open ? <MenuCloseIcon /> : <MenuIcon />}
        </button>
      </Collapsible.Trigger>

      <Collapsible.Content>
        <div className="fixed right-0 top-0 z-50 mt-16 h-screen w-full overflow-y-auto bg-zinc-900 bg-opacity-95 px-[4%] pb-8 backdrop-blur-lg backdrop-filter">
          <ul className="m-auto mt-4 flex flex-col gap-2">
            {itemsMenu.map((itemMenu, index) => {
              return (
                <Link key={index} href="/">
                  <li className="flex items-center justify-between rounded-md bg-zinc-800 bg-opacity-50 px-4 py-6 font-semibold hover:bg-opacity-60">
                    <span>{itemMenu.name}</span>
                    <i>{itemMenu.icon}</i>
                  </li>
                </Link>
              )
            })}
          </ul>

          <div className="my-6 h-[1px] bg-zinc-600" />

          <ul className="m-auto mt-4 flex flex-col gap-2">
            {otherItemsMenu.map((otherItemMenu, index) => {
              return (
                <Link key={index} href="/">
                  <li className="flex items-center justify-between rounded-md bg-zinc-800 bg-opacity-50 px-4 py-6 font-semibold hover:bg-opacity-60">
                    <span>{otherItemMenu.name}</span>
                    <i>{otherItemMenu.icon}</i>
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

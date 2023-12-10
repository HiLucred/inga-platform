import Link from 'next/link'
import User from '../../public/mockup/user-place-holder.jpg'
import {
  ChevronRight,
  HandMetal,
  Instagram,
  MessageSquare,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="mt-4 flex h-full w-full flex-col gap-6 px-[4%] pb-[4%]">
      <div className="h-56 w-full rounded-md bg-white bg-opacity-20" />

      <section>
        <header className="flex items-center justify-between">
          <h2 className="mb-2 text-xl font-semibold text-zinc-200">
            Acabaram de chegar
          </h2>
          <Link href="/">
            <span className="flex items-center justify-center text-xs text-zinc-400">
              TODOS
              <ChevronRight width={16} />
            </span>
          </Link>
        </header>

        <div className="flex w-full items-center gap-2 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
          <div className="flex flex-col items-center justify-center">
            <div className="h-48 w-36 rounded-md bg-white bg-opacity-20" />
            <div className="flex w-full items-center gap-1 text-white">
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="opacity-50" />
              <HandMetal width={16} className="opacity-50" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-48 w-36 rounded-md bg-white bg-opacity-20" />
            <div className="flex w-full items-center gap-1 text-white">
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="opacity-50" />
              <HandMetal width={16} className="opacity-50" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-48 w-36 rounded-md bg-white bg-opacity-20" />
            <div className="flex w-full items-center gap-1 text-white">
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <header className="flex items-center justify-between">
          <h2 className="mb-2 text-xl font-semibold text-zinc-200">
            Descubra um artista novo
          </h2>
          <Link href="/">
            <span className="flex items-center justify-center text-xs text-zinc-400">
              ARTISTAS
              <ChevronRight width={16} />
            </span>
          </Link>
        </header>

        <div className="flex w-full items-center gap-1 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
          <Image src={User} alt="" className="w-28 rounded-full" />
          <Image src={User} alt="" className="w-28 rounded-full" />
          <Image src={User} alt="" className="w-28 rounded-full" />
          <Image src={User} alt="" className="w-28 rounded-full" />
        </div>
      </section>
      {/* - Crie Game Jams */}
      <div className="h-36 w-full rounded-md bg-white bg-opacity-20" />

      <section>
        <header className="flex items-center justify-between">
          <h2 className="mb-2 text-xl font-semibold text-zinc-200">
            A arte e o artista do dia
          </h2>
          <Link href="/">
            <span className="flex items-center justify-center text-xs text-zinc-400">
              ACESSAR
              <ChevronRight width={16} />
            </span>
          </Link>
        </header>

        <div className="flex w-full items-center gap-4 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
          <div className="w-full">
            <div className="h-48 flex-1 rounded-md bg-white bg-opacity-20" />
            <div className="flex w-full items-center gap-1 text-white">
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="opacity-50" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Image src={User} alt="" className="w-44 rounded-full" />
            <h3 className="text-sm font-semibold text-white ">@galupd</h3>
          </div>
        </div>
      </section>

      <section>
        <header className="flex items-center justify-between">
          <h2 className="mb-2 text-xl font-semibold text-zinc-200">
            Seleção INGA
          </h2>
          <Link href="/">
            <span className="flex items-center justify-center text-xs text-zinc-400">
              TODOS
              <ChevronRight width={16} />
            </span>
          </Link>
        </header>

        <div className="flex w-full items-center gap-2 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
          <div className="w-full">
            <div className="h-48 w-36 flex-1 rounded-md bg-white bg-opacity-20" />
            <div className="flex w-full items-center gap-1 text-white">
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="opacity-50" />
            </div>
          </div>

          <div className="w-full">
            <div className="h-48 w-36 flex-1 rounded-md bg-white bg-opacity-20" />
            <div className="flex w-full items-center gap-1 text-white">
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="opacity-50" />
            </div>
          </div>

          <div className="w-full">
            <div className="h-48 w-36 flex-1 rounded-md bg-white bg-opacity-20" />
            <div className="flex w-full items-center gap-1 text-white">
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="opacity-50" />
            </div>
          </div>
        </div>
      </section>
      {/* - Sua nova casa de jogos independentes */}
      <div className="h-36 w-full rounded-md bg-white bg-opacity-20" />

      <section>
        <header className="flex items-center justify-between">
          <h2 className="mb-2 text-xl font-semibold text-zinc-200">
            Listas personalizadas
          </h2>
          <Link href="/">
            <span className="flex items-center justify-center text-xs text-zinc-400">
              TODOS
              <ChevronRight width={16} />
            </span>
          </Link>
        </header>

        <div className="flex">
          <div className="flex w-full items-center gap-2 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
            <div className="flex w-36 flex-col items-center justify-center">
              <div className="relative h-48 w-36 rounded-md bg-white bg-opacity-20">
                <h3 className="absolute bottom-0 left-0 mb-1 ml-1 line-clamp-2 w-full text-left text-sm font-semibold text-zinc-300">
                  JOGOS QUE MARCARAM MINHA INFÂNCIA
                </h3>
              </div>

              <div className="mt-1 flex h-full w-full flex-col text-white">
                <h3 className="text-sm font-semibold ">@galupd</h3>
                <div className="flex h-full w-full ">
                  <div className="flex items-center gap-1">
                    <HandMetal width={16} className="text-yellow-500" />
                    <span className="text-xs">821</span>
                  </div>

                  <span className="mx-2 text-zinc-700">/</span>

                  <div className="flex items-center gap-1">
                    <MessageSquare width={16} className="text-blue-500" />
                    <span className="text-xs">61</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-36 flex-col items-center justify-center">
              <div className="relative h-48 w-36 rounded-md bg-white bg-opacity-20">
                <h3 className="absolute bottom-0 left-0 mb-1 ml-1 line-clamp-2 w-full text-left text-sm font-semibold text-zinc-300">
                  FEITOS NO NORTE DO BRASIL
                </h3>
              </div>

              <div className="mt-1 flex h-full w-full flex-col text-white">
                <h3 className="text-sm font-semibold ">@galupd</h3>
                <div className="flex h-full w-full ">
                  <div className="flex items-center gap-1">
                    <HandMetal width={16} className="text-yellow-500" />
                    <span className="text-xs">821</span>
                  </div>

                  <span className="mx-2 text-zinc-700">/</span>

                  <div className="flex items-center gap-1">
                    <MessageSquare width={16} className="text-blue-500" />
                    <span className="text-xs">61</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-36 flex-col items-center justify-center">
              <div className="relative h-48 w-36 rounded-md bg-white bg-opacity-20">
                <h3 className="absolute bottom-0 left-0 mb-1 ml-1 line-clamp-2 w-full text-left text-sm font-semibold text-zinc-300">
                  COMUNIDADE LGBTQIA+
                </h3>
              </div>

              <div className="mt-1 flex h-full w-full flex-col text-white">
                <h3 className="text-sm font-semibold ">@galupd</h3>
                <div className="flex h-full w-full ">
                  <div className="flex items-center gap-1">
                    <HandMetal width={16} className="text-yellow-500" />
                    <span className="text-xs">821</span>
                  </div>

                  <span className="mx-2 text-zinc-700">/</span>

                  <div className="flex items-center gap-1">
                    <MessageSquare width={16} className="text-blue-500" />
                    <span className="text-xs">61</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <header className="flex items-center justify-between">
          <h2 className="mb-2 text-xl font-semibold text-zinc-200">
            Críticas bombando
          </h2>
          <Link href="/">
            <span className="flex items-center justify-center text-xs text-zinc-400">
              CRÍTICAS
              <ChevronRight width={16} />
            </span>
          </Link>
        </header>

        <div className="flex w-full items-center gap-2 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
          <div className="h-48 w-36 rounded-md bg-white bg-opacity-20" />

          <div className="flex h-48 flex-1 flex-col">
            <div className="flex gap-2 text-white">
              <Image src={User} alt="" className="w-12 rounded-full" />

              <div className="flex flex-col justify-between">
                <h3 className="text-sm font-semibold ">@galupd</h3>
                <div className="flex items-center justify-center gap-1">
                  <HandMetal width={16} className="text-yellow-500" />
                  <HandMetal width={16} className="text-yellow-500" />
                  <HandMetal width={16} className="text-yellow-500" />
                  <HandMetal width={16} className="opacity-50" />
                  <HandMetal width={16} className="opacity-50" />
                </div>
              </div>
            </div>

            <div className="my-2 h-[1px] w-full bg-zinc-800" />

            <p className="overflow-y-hidden text-sm text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              eum magni quaerat beatae eligendi! Ex ea sae saepe quibus saepe
              quibus
            </p>
          </div>
        </div>
      </section>

      <section>
        <header className="flex items-center justify-between">
          <h2 className="mb-2 text-xl font-semibold text-zinc-200">
            Mal podemos esperar pelo lançamento
          </h2>
          <Link href="/">
            <span className="flex items-center justify-center text-xs text-zinc-400">
              TODOS
              <ChevronRight width={16} />
            </span>
          </Link>
        </header>

        <div className="flex w-full items-center gap-2 overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 p-2">
          <div className="w-full">
            <div className="h-48 w-36 flex-1 rounded-md bg-white bg-opacity-20" />
            <div className="flex w-full items-center gap-1 text-white">
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="opacity-50" />
            </div>
          </div>

          <div className="w-full">
            <div className="h-48 w-36 flex-1 rounded-md bg-white bg-opacity-20" />
            <div className="flex w-full items-center gap-1 text-white">
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="opacity-50" />
            </div>
          </div>

          <div className="w-full">
            <div className="h-48 w-36 flex-1 rounded-md bg-white bg-opacity-20" />
            <div className="flex w-full items-center gap-1 text-white">
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="text-yellow-500" />
              <HandMetal width={16} className="opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center">
        <div className="mb-6 h-[1px] w-full bg-zinc-800" />

        <button className="w-full rounded-md bg-white px-4 py-3 text-center text-sm font-semibold">
          Faça o seu cadastro e apoie criadores e criações independentes
        </button>

        <span className="my-2 text-sm text-white">ou</span>

        <button className="w-full rounded-md bg-white px-4 py-3 text-center text-sm font-semibold">
          Entre com sua conta
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-white">
          <Instagram />
          <Twitter />
        </div>
      </div>
    </main>
  )
}

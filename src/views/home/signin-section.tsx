import { Instagram, Twitter } from 'lucide-react'

export function SigInSection() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="mb-6 h-[1px] w-full bg-zinc-800" />

      <button className="w-full max-w-sm rounded-md bg-white px-4 py-3 text-center text-sm font-semibold">
        Faça o seu cadastro e apoie criadores e criações independentes
      </button>

      <span className="my-2 text-sm text-white">ou</span>

      <button className="w-full max-w-sm rounded-md bg-white px-4 py-3 text-center text-sm font-semibold">
        Entre com sua conta
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-white">
        <Instagram />
        <Twitter />
      </div>
    </section>
  )
}

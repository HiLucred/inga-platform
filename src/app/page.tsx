export default function Home() {
  return (
    <main className="mt-4 flex h-full w-full flex-col gap-6 px-[4%] pb-[4%]">
      <div className="h-36 w-full rounded-md bg-white bg-opacity-20" />
      <section>
        <h2 className="mb-2 text-xl font-semibold text-zinc-200">
          Jogo do dia
        </h2>
        <div className="w-full overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 px-4 py-2">
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            perspiciatis earum possimus ab, eius sint optio at, explicabo
            voluptatem impedit autem nisi ad in tempora deleniti nostrum
            repellendus, ipsam hic!
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-zinc-200">
          Descubra um artista novo
        </h2>
        <div className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-800 bg-white bg-opacity-5 px-1 py-2">
          <div className="h-20 w-20 rounded-full bg-white bg-opacity-20" />
          <div className="h-20 w-20 rounded-full bg-white bg-opacity-20" />
          <div className="h-20 w-20 rounded-full bg-white bg-opacity-20" />
          <div className="h-20 w-20 rounded-full bg-white bg-opacity-20" />
        </div>
      </section>
      {/* - Crie Game Jams */}
      <div className="h-36 w-full rounded-md bg-white bg-opacity-20" />

      <section>
        <h2 className="mb-2 text-xl font-semibold text-zinc-200">
          Seleção da INGA
        </h2>
        <div className="w-full overflow-hidden rounded-md border border-zinc-800 bg-white bg-opacity-5 px-4 py-2">
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            perspiciatis earum possimus ab, eius sint optio at, explicabo
            voluptatem impedit autem nisi ad in tempora deleniti nostrum
            repellendus, ipsam hic!
          </p>
        </div>
      </section>
    </main>
  )
}

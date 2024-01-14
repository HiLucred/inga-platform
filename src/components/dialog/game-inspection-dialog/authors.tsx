export function Authors() {
  return (
    <div className="flex flex-col border-b border-t border-zinc-800 py-4">
      <h3 className="mb-2 font-bold text-white">Autores</h3>

      <div className="flex gap-2">
        {Array.from({ length: 3 }).map((_, index) => {
          const bgColor = index % 2 === 0 ? 'bg-blue-500' : 'bg-pink-600'

          return (
            <span
              key={index}
              className={`rounded-md px-2 py-1 text-sm font-semibold text-white ${bgColor}`}
            >
              @galupd
            </span>
          )
        })}
      </div>
    </div>
  )
}

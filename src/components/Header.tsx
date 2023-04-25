import Image from 'next/image'

export function Header() {
  return (
    <header className="flex flex-col justify-center items-center gap-2 p-6">
      <Image
        src="https://github.com/gafanhotoalexandre.png"
        alt="Foto de Perfil de Alexandre Martins"
        width={112}
        height={112}
        className="border border-zinc-400 rounded-full"
      />
      <p className="font-bold leading-normal">@gafanhotoalexandre</p>
    </header>
  )
}

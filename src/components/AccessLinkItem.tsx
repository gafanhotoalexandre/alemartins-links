import { ReactNode } from 'react'

interface AccessLinkItemProps {
  children: ReactNode
  url: string
}

export function AccessLinkItem({ url, children }: AccessLinkItemProps) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center bg-surface-light dark:bg-surface border dark:border-stroke border-stroke-light rounded-lg py-4 px-6 font-bold hover:dark:bg-surface-hover hover:bg-surface-hover-light hover:dark:border-white hover:border-black hover:border-[1.5px] transition-all"
      >
        {children}
      </a>
    </li>
  )
}

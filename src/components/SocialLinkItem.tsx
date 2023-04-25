import { AnchorHTMLAttributes, ReactNode } from 'react'

interface SocialLinkItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}
export function SocialLinkItem({ children, ...rest }: SocialLinkItemProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="flex justify-center items-center p-4 rounded-full hover:dark:bg-highlight hover:bg-highlight-light transition-all"
      {...rest}
    >
      {children}
    </a>
  )
}

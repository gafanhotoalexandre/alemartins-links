'use client'
import { GithubLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react'

import { SocialLinkItem } from './SocialLinkItem'

export function SocialLinks() {
  return (
    <section className="p-6 text-2xl flex justify-center">
      <SocialLinkItem href="https://github.com/gafanhotoalexandre">
        <GithubLogo size={32} />
      </SocialLinkItem>

      <SocialLinkItem href="https://linkedin.com/in/alemartins-lima">
        <LinkedinLogo size={32} />
      </SocialLinkItem>

      <SocialLinkItem href="https://www.instagram.com/alexandrev.martins20/">
        <InstagramLogo size={32} />
      </SocialLinkItem>
    </section>
  )
}

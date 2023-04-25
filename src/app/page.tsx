import { Header } from '@/components/Header'
import { AccessLinkItem } from '@/components/AccessLinkItem'
import { Footer } from '@/components/Footer'
import { SocialLinks } from '@/components/SocialLinks'

export default function Home() {
  return (
    <div className="w-full max-w-[588px] mt-14 mx-auto px-6 border">
      <Header />

      <ul className="flex flex-col gap-4 py-6">
        <AccessLinkItem url="https://github.com/gafanhotoalexandre">
          Veja meu portfólio
        </AccessLinkItem>
      </ul>

      <SocialLinks />

      <Footer />
    </div>
  )
}

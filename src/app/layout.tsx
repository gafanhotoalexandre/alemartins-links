import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ale Martins',
  description: 'Cartão de Visitas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log(inter.className)
  return (
    <html lang="pt-br" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from './components/NavBar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nenas Kitchen',
  description: 'O seu aliado na cozinha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">

      <body className={`inter.className bg-backgound-body `}>
        <NavBar />
        <div className=" mb-8 mt-16 mr-14">{children}</div>
        <Footer />
      </body>

    </html>
  )
}

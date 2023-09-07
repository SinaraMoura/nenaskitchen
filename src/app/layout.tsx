import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from './components/NavBar';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Nenas Kitchen | O seu aliado na cozinha`
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`inter.className bg-scale-gray-1 h-full `}>
        <ToastContainer />
        <NavBar />
        <div className=" mb-8 h-full w-full">{children}</div>
        <Footer />
      </body>

    </html>
  )
}

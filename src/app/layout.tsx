import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from './components/NavBar';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

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
      <body className={`inter.className bg-backgound-body h-full `}>
        <ToastContainer />
        <NavBar />
        <div className=" mb-8 mt-16 h-full">{children}</div>
        <Footer />
      </body>

    </html>
  )
}

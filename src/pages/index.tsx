import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './dashbord';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Nenas Kitchen | O seu aliado na cozinha`
}

export default function Home() {
  return (
    <main
      className={`inter.className bg-scale-gray-1 h-full `}
    >
      <Dashboard />
    </main>
  )
}


import '../globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <ToastContainer />
      <Footer />
    </>
  )
}

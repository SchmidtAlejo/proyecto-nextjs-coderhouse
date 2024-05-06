import { Inter } from 'next/font/google'
import './globals.css'
import './output.css'
import Navbar from '@/components/navbar/Navbar';
import "../style.css";
import Footer from "../components/Footer";
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import ReactQueryProvider from '@/helpers/ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <AuthProvider>
            <CartProvider>
              <Navbar />
              {children}
              <Footer />
            </CartProvider>
          </AuthProvider>
        </ReactQueryProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}

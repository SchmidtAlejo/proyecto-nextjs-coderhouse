import { Inter } from 'next/font/google'
import './globals.css'
import './output.css'
import Navbar from '@/components/navbar/Navbar';
import "../style.css";
import Footer from "../components/Footer";
import { CartProvider } from '@/components/context/CartContext';
import { AuthProvider } from '@/components/context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

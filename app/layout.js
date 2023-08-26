import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'





const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MD TECH',
  description: 'Fique por dentro do mundo dos computadores e eletrônicos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header /> 
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

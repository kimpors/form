import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav/Nav'
import './style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Form',
  description: 'Portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        { children }
      </body>
    </html>
  )
}

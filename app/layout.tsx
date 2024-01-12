import type { Metadata } from 'next'
import Nav from './components/Nav/Nav'
import ThemeChanger from './components/ThemeChanger/ThemeChanger'
import App from './components/App'
import './style.css'

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
      <body>
        <App>
          <ThemeChanger />
          <Nav />
          { children }
        </App>
      </body>
    </html>
  )
}

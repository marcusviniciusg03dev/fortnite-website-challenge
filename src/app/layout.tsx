import './globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import Header from './layout/header'

const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fortnite',
  description: 'Desafio Fortnite: Website com tema de Fortnite.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceSans3.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

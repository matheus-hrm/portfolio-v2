import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
const font = Open_Sans({weight: '400', subsets: ['latin']})  


export const metadata: Metadata = {
  title: 'Matheus Henrique',
  description: 'Portfólio pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font.className bg-black`}>{children}</body>
    </html>
  )
}



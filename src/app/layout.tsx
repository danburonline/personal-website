import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

const sentientFont = localFont({
  src: '../../public/fonts/sentient-variable.woff2',
  variable: '--font-sentient'
})

const workFont = localFont({
  src: '../../public/fonts/work-variable.woff2',
  variable: '--font-work'
})

export const metadata: Metadata = {
  title: 'Daniel Burger'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sentientFont.variable} ${workFont.variable} font-sans`}>{children}</body>
    </html>
  )
}

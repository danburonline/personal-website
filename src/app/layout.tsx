import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

const serifFont = localFont({
  src: '../../public/fonts/sentient-variable.woff2',
  variable: '--font-sentient'
})

const sansFont = localFont({
  src: '../../public/fonts/work-variable.woff2',
  variable: '--font-work'
})

export const metadata: Metadata = {
  title: 'Daniel Burger',
  creator: 'Daniel Burger',
  viewport: 'width=device-width, initial-scale=1',
  manifest: 'manifest.json',
  themeColor: '#1A001A'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serifFont.variable} ${sansFont.variable} font-sans bg-dark text-bright`}>
        {children}
      </body>
    </html>
  )
}

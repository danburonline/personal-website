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
  description: 'Personal website of Daniel Burger. More to come.',
  creator: 'Daniel Burger',
  viewport: 'width=device-width, initial-scale=1',
  manifest: 'manifest.json',
  themeColor: '#1A001A'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={classNames(
          // Config font variables
          `${serifFont.variable} ${sansFont.variable} font-sans`,
          // Config default color variables
          'bg-bright text-dark',
          // Config default layout variables
          'h-full'
        )}
      >
        {children}
      </body>
    </html>
  )
}

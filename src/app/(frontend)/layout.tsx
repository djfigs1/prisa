import React from 'react'
import { Spline_Sans_Mono } from 'next/font/google'

const font = Spline_Sans_Mono({
  variable: '--prisa-font',
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

import { Provider } from '@/components/Provider'
import { Spline_Sans_Mono } from 'next/font/google'
import React from 'react'

const font = Spline_Sans_Mono({
  variable: '--prisa-font',
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <main>
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  )
}

import type {Metadata} from 'next'
import './globals.scss'
import {Header} from '@/components'

export const metadata: Metadata = {
  title: 'qr',
  description: 'Generate mem in this app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <html lang="ru">
        <head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <link rel="apple-touch-icon" href="/pwa/apple-touch-icon.png" />
          <link
            rel="icon"
            href="pwa/favicon-32x32.png"
            type="image/png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="pwa/favicon-16x16.png"
            type="image/png"
            sizes="16x16"
          />
          <link rel="manifest" href="pwa/site.webmanifest" />
          <meta
            name="theme-color"
            content="#FFFFFF"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#000000"
            media="(prefers-color-scheme: dark)"
          />
        </head>

        <body suppressHydrationWarning={true}>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </body>
      </html>
    </>
  )
}

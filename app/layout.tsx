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
          <link rel="icon" href="favicon.ico" sizes="any" />
          <link rel="icon" href="favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="apple-touch-icon-180x180.png" />

          <meta name="apple-mobile-web-app-title" content="qr" />
          <meta name="application-name" content="qr" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />
        </head>

        <body suppressHydrationWarning={true}>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </body>
      </html>
    </>
  )
}

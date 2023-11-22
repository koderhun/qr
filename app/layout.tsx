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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./pwa/apple-touch-icon.png"
          />
          <link rel="manifest" href="./pwa/site.webmanifest" />
          <link
            rel="mask-icon"
            href="./pwa/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="apple-mobile-web-app-title" content="qr" />
          <meta name="application-name" content="qr" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" type="image/png" href="./favicon.webp" />
        </head>

        <body suppressHydrationWarning={true}>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </body>
      </html>
    </>
  )
}

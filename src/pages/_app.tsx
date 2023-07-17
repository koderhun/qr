import type {AppProps} from 'next/app'
import {CacheProvider} from '@emotion/react'
import {ThemeProvider, CssBaseline} from '@mui/material'

import createEmotionCache from '@/utils/createEmotionCache'
import {EmotionCache} from '@emotion/cache'
import lightTheme from '@/styles/theme/lightTheme'
import {Roboto} from 'next/font/google'
import '@/styles/globals.scss'
import Layout from '@/components/Layout/Layout'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
}

const font = Roboto({weight: '400', subsets: ['cyrillic']})

export default (props: MyAppProps) => {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <main className={font.className}>
          <Layout>{<Component {...pageProps} />}</Layout>
        </main>
      </ThemeProvider>
    </CacheProvider>
  )
}

import React, {ReactNode, Suspense} from 'react'
import Head from 'next/head'
import {Container} from '@mui/material'
import Header from '@/components/Header/Header'
import s from './styles.module.scss'

type Props = {
  children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
      <Head>
        <title>QR-Generator</title>
      </Head>
      <Header />
      <Container maxWidth='md' className={s.content}>
        <Suspense fallback={<p>Loading feed...</p>}>{children}</Suspense>
      </Container>
    </div>
  )
}

export default Layout

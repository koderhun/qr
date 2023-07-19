import React, {ReactNode} from 'react'
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
        {children}
      </Container>
    </div>
  )
}

export default Layout

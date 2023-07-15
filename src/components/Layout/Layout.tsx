import React, {ReactNode} from 'react'
import Head from 'next/head'
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
      <div className={s.content}>{children}</div>
    </div>
  )
}

export default Layout

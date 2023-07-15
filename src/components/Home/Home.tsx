import React from 'react'
import Layout from '@/components/Layout/Layout'
import s from './styles.module.scss'

type Props = {}

const Home = (props: Props) => {
  return (
    <Layout className={s.main}>
      <h1>Home</h1>
    </Layout>
  )
}

export default Home

import Tabs from '@/components/Tabs/Tabs'
import s from './styles.module.scss'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className={s.container}>
      <Tabs />
    </div>
  )
}

export default Home

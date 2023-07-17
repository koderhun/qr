import {useState} from 'react'
import QrCodeLayout from '@/components/QrCodeLayout/QrCodeLayout'
import {TextField} from '@mui/material'
import s from './styles.module.scss'

type Props = {}

const Home = (props: Props) => {
  const [value, setValue] = useState('')

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <QrCodeLayout qrCodeText={value}>
        <TextField
          variant='filled'
          fullWidth
          label='Текст'
          id='text'
          value={value}
          onChange={onChangeText}
        />
      </QrCodeLayout>
    </>
  )
}

export default Home

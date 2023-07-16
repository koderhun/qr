import {FC, useState, useCallback} from 'react'
import s from './styles.module.scss'
import getQRCode from '@/utils/getQRCode'
import {generate as shortid} from 'shortid'
import {Typography, Box, TextField} from '@mui/material'

interface TextQrProps {}

const TextQr: FC<TextQrProps> = ({}) => {
  const [value, setValue] = useState('')
  const [qr, setQr] = useState('')

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)

    setQr(getQRCode(value))
  }

  const downloadFile = useCallback(() => {
    const elm = document.createElement('a')
    elm.href = qr
    elm.download = shortid()
    elm.click()
  }, [qr])

  return (
    <div className={s.container}>
      <Typography variant='h5' align='center' sx={{pb: 2}}>
        Text QR Generator
      </Typography>
      <Box>
        <TextField fullWidth label='Текст' id='text' value={value} onChange={onChangeText} />
      </Box>

      {qr && (
        <Box sx={{pt: 2}}>
          <img src={qr} />
        </Box>
      )}
    </div>
  )
}

export default TextQr

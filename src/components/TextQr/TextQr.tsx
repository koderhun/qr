import {FC, useState, useCallback} from 'react'
import s from './styles.module.scss'
import getQRCode from '@/utils/getQRCode'
import {generate as shortid} from 'shortid'
import {Typography, Box, TextField, Grid} from '@mui/material'

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
    <>
      <Typography variant='h5' align='center' sx={{pb: 2}}>
        Text QR Generator
      </Typography>
      <Grid container columnSpacing={2} className={s.container}>
        <Grid item xs={12} sm={6}>
          <Box>
            <TextField fullWidth label='Текст' id='text' value={value} onChange={onChangeText} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{pt: 2, pb: 2}} className={s.wrapper}>
            <div className={s.qrcodeContainer}>
              {qr && <img className={s.qrcode} src={qr} alt='QR Code' />}
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default TextQr

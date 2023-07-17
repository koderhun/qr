import {FC, useEffect, useState} from 'react'
import s from './styles.module.scss'
import getQRCode from '@/utils/getQRCode'
import downloadFile from '@/utils/downloadFile'
import {Typography, Box, TextField, Grid} from '@mui/material'

interface QrCodeLayoutProps {
  qrCodeText: string
  children: React.ReactNode
}

const QrCodeLayout: FC<QrCodeLayoutProps> = ({qrCodeText, children}) => {
  const [qr, setQr] = useState('')

  useEffect(() => {
    setQr(getQRCode(qrCodeText))
  }, [qrCodeText])

  return (
    <>
      <Typography variant='h5' align='center' sx={{pb: 2}}>
        Text QR Generator
      </Typography>
      <Grid container columnSpacing={2} className={s.container}>
        <Grid item xs={12} sm={6}>
          <Box>{children}</Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{pt: 2, pb: 2}} className={s.wrapper}>
            <div className={s.qrcodeContainer}>
              {qr && <img className={s.qrcode} src={qr} alt='QR Code' />}
            </div>
          </Box>
          <Box>
            <button onClick={() => downloadFile(qr)}>download</button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default QrCodeLayout

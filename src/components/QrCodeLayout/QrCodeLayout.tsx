import {FC, useEffect, useState} from 'react'
import s from './styles.module.scss'
import getQRCode from '@/utils/getQRCode'
import downloadFile from '@/utils/downloadFile'
import {Typography, Box, Card, Grid, Button} from '@mui/material'

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
    <Box sx={{p: 2}} className={s.wrapper}>
      <Card sx={{p: 2}} className={s.card}>
        <Typography variant='h5' align='center' sx={{pt: 2, pb: 2}}>
          QR Generator
        </Typography>
        <Grid container columnSpacing={2} className={s.container}>
          <Grid item xs={12} sm={6}>
            <Box sx={{pt: 2, pb: 2}}>{children}</Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{pt: 2, pb: 2}} className={s.wrapper}>
              <div className={s.qrcodeContainer}>
                {qr && <img className={s.qrcode} src={qr} alt='QR Code' />}
              </div>
            </Box>
            <Box>
              {qr && (
                <Button variant='outlined' onClick={() => downloadFile(qr)}>
                  Download
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default QrCodeLayout

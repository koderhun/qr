import {FC, useState, useCallback} from 'react'
import s from './styles.module.scss'
import getQRCode from '@/utils/getQRCode'
import downloadFile from '@/utils/downloadFile'
import {Typography, Box, TextField, Grid} from '@mui/material'
import QrCodeLayout from '@/components/QrCodeLayout/QrCodeLayout'

interface TextQrProps {}

const TextQr: FC<TextQrProps> = ({}) => {
  const [value, setValue] = useState('')

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <QrCodeLayout qrCodeText={value}>
        <TextField fullWidth label='Текст' id='text' value={value} onChange={onChangeText} />
      </QrCodeLayout>
    </>
  )
}

export default TextQr

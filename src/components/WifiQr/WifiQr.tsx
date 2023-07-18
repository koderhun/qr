import {useState} from 'react'
import QrCodeLayout from '@/components/QrCodeLayout/QrCodeLayout'
import {useForm, Controller} from 'react-hook-form'
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Button,
  TextField,
} from '@mui/material'
import s from './styles.module.scss'

type Props = {}

type wifiProps = {
  ssid: string
  pass?: string
  crypt?: string
  hidden?: string
}

type formInputsType = {
  ssid: string
  crypt?: string
  pass?: string
}

const wifiTemplateString = ({ssid, pass = '', crypt = '', hidden = ''}: wifiProps) => {
  return `WIFI:S:${ssid};T:${crypt};P:${pass};${hidden};`
}

const WifiQr = (props: Props) => {
  const [qrCodeText, setQrCodeText] = useState('')
  const {control, handleSubmit} = useForm<formInputsType>()

  const onSubmit = (data: formInputsType) => {
    const wifiStr: wifiProps = {
      ssid: data.ssid,
      pass: data.pass,
      crypt: data.crypt,
      hidden: '',
    }

    const wifiQrStr = wifiTemplateString(wifiStr)
    console.log('wifi: ', wifiQrStr)
    setQrCodeText(wifiQrStr)
  }

  return (
    <>
      <QrCodeLayout qrCodeText={qrCodeText}>
        <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt: 0}}>
          <Controller
            name='ssid'
            control={control}
            defaultValue=''
            render={({field}) => (
              <TextField
                margin='normal'
                fullWidth
                label='Network Name'
                autoComplete='Input "ssid" name wifi network'
                autoFocus
                sx={{mt: 0}}
                {...field}
              />
            )}
          />
          <Controller
            name='pass'
            control={control}
            defaultValue=''
            render={({field}) => (
              <TextField
                margin='normal'
                fullWidth
                label='Password'
                id='pass'
                autoComplete='current-password'
                {...field}
              />
            )}
          />

          <FormControl>
            <FormLabel id='crypt'>Encryption</FormLabel>
            <Controller
              control={control}
              name='crypt'
              defaultValue=''
              render={({field}) => (
                <RadioGroup {...field}>
                  <FormControlLabel value='' control={<Radio />} label='None' />
                  <FormControlLabel value='WPA' control={<Radio />} label='WPA/WPA2' />
                  <FormControlLabel value='WEP' control={<Radio />} label='WEP' />
                </RadioGroup>
              )}
            />
          </FormControl>
          <Button type='submit' fullWidth variant='contained' sx={{mt: 3, mb: 2}}>
            Generate
          </Button>
        </Box>
      </QrCodeLayout>
    </>
  )
}

export default WifiQr

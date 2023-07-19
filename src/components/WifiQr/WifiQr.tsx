import {useState} from 'react'
import QrCodeLayout from '@/components/QrCodeLayout/QrCodeLayout'
import {useForm, SubmitHandler} from 'react-hook-form'
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  TextField,
  Typography,
  FormGroup,
  FormHelperText,
} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import {zodResolver} from '@hookform/resolvers/zod'
import {TypeOf, object, string, literal} from 'zod'
import s from './styles.module.scss'

type Props = {}

const inputsSchema = object({
  pass: string(),
  crypt: string(),
  ssid: string().nonempty('Обязательно нужно название').max(32, 'Длинна не больше 32 символов'),
}).refine((data) => {
  console.log('refine ', data)
  return true
})

type wifiProps = {
  ssid: string
  pass?: string
  crypt?: string
  hidden?: string
}

type formInputsType = TypeOf<typeof inputsSchema>

const wifiTemplateString = ({ssid, pass = '', crypt = '', hidden = ''}: wifiProps) => {
  return `WIFI:S:${ssid};T:${crypt};P:${pass};${hidden};`
}

const WifiQr = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [qrCodeText, setQrCodeText] = useState('')
  const {
    register,
    formState: {errors, isSubmitSuccessful},
    reset,
    handleSubmit,
  } = useForm<formInputsType>({
    resolver: zodResolver(inputsSchema),
  })

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

  const onSubmitHandler: SubmitHandler<formInputsType> = ({ssid, pass, crypt}) => {
    const wifiStr: wifiProps = {
      ssid,
      pass,
      crypt,
      hidden: '',
    }

    const wifiQrStr = wifiTemplateString(wifiStr)
    console.log('wifi: ', wifiQrStr)
    setQrCodeText(wifiQrStr)
  }
  console.log(errors)

  return (
    <>
      <QrCodeLayout qrCodeText={qrCodeText}>
        <Box
          component='form'
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{mt: 0}}
        >
          <TextField
            sx={{mb: 2}}
            label='Network Name'
            fullWidth
            required
            error={!!errors['ssid']}
            helperText={errors['ssid'] ? errors['ssid'].message : ''}
            {...register('ssid')}
          />

          <TextField
            sx={{mb: 2}}
            label='Password'
            fullWidth
            error={!!errors['pass']}
            helperText={errors['pass'] ? errors['pass'].message : ''}
            {...register('pass')}
          />

          <FormControl sx={{pt: 2}}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup {...register('crypt')} name='crypt' defaultValue={''}>
              <FormControlLabel value='' control={<Radio />} label='None' />
              <FormControlLabel value='WPA' control={<Radio />} label='WPA/WPA2' />
              <FormControlLabel value='WEP' control={<Radio />} label='WEP' />
            </RadioGroup>
            <FormHelperText error={!!errors['crypt']}>
              {errors['crypt'] ? errors['crypt'].message : ''}
            </FormHelperText>
          </FormControl>

          <LoadingButton
            loading={isLoading}
            type='submit'
            fullWidth
            variant='contained'
            sx={{mt: 3, mb: 2}}
          >
            Generate
          </LoadingButton>
        </Box>
      </QrCodeLayout>
    </>
  )
}

export default WifiQr

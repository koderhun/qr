import {Box, ToggleButtonGroup, ToggleButton} from '@mui/material'
import {useForm, SubmitHandler, FormProvider} from 'react-hook-form'
import {literal, object, string, TypeOf} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useEffect, useState} from 'react'
import {LoadingButton} from '@mui/lab'
import FormInput from '@/components/FormInput/FormInput'
import QrCodeLayout from '@/components/QrCodeLayout/QrCodeLayout'
import {wifiTemplateString} from '@/utils/getWifiTemplateString'

const wifiSchema = object({
  ssid: string()
    .nonempty('SSID is required')
    .max(32, 'Name must be less than 100 characters'),
  password: string().max(32, 'Password must be less than 32 characters'),
  // typePassword
})

type WifiInput = TypeOf<typeof wifiSchema>

type wifiCryptMethodItem = {
  name: string
  value: string
}

const wifiCryptMethodOptions: wifiCryptMethodItem[] = [
  {name: 'None', value: 'none'},
  {name: 'WEP', value: 'WEP'},
  {
    name: 'WPA',
    value: 'WPA',
  },
]

const WifiQr = () => {
  const [loading, setLoading] = useState(false)
  const [wifiCryptMethodSelected, setWifiCryptMethodSelected] = useState('none')
  const [qrCodeText, setQrCodeText] = useState('')

  const wifiCryptMethodChange = (
    event: React.MouseEvent<HTMLElement>,
    newWifiCryptMethod: string,
  ) => {
    setWifiCryptMethodSelected(newWifiCryptMethod)
  }

  const methods = useForm<WifiInput>({
    resolver: zodResolver(wifiSchema),
  })

  const {
    reset,
    handleSubmit,
    register,
    formState: {isSubmitSuccessful, errors},
  } = methods

  const onSubmitHandler: SubmitHandler<WifiInput> = (values) => {
    const {ssid, password} = values
    console.log('values', values)
    setQrCodeText(
      wifiTemplateString({
        ssid,
        pass: password,
        crypt: wifiCryptMethodSelected,
      }),
    )
  }
  console.log('Errors:', errors)

  return (
    <QrCodeLayout qrCodeText={qrCodeText}>
      <Box>
        <FormProvider {...methods}>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <FormInput
              type='text'
              name='ssid'
              required
              fullWidth
              label='SSID'
              sx={{mb: 2}}
            />
            <FormInput
              type='text'
              name='password'
              fullWidth
              label='Password'
              sx={{mb: 2}}
            />

            <ToggleButtonGroup
              color='primary'
              value={wifiCryptMethodSelected}
              exclusive
              onChange={wifiCryptMethodChange}
              aria-label='Platform'
            >
              {wifiCryptMethodOptions.map((v) => (
                <ToggleButton value={v.value}>{v.name}</ToggleButton>
              ))}
            </ToggleButtonGroup>

            <LoadingButton
              variant='contained'
              fullWidth
              type='submit'
              loading={loading}
              sx={{py: '0.8rem', mt: '1rem'}}
            >
              Generate
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box>
    </QrCodeLayout>
  )
}

export default WifiQr

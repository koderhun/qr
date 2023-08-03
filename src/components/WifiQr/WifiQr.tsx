import {useEffect, useState} from 'react'
import QrCodeLayout from '@/components/QrCodeLayout/QrCodeLayout'
import {Controller, useForm} from 'react-hook-form'
import {
  Box,
  FormControl,
  Button,
  TextField,
  Autocomplete,
  FormHelperText,
} from '@mui/material'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import s from './styles.module.scss'

const wifiNameSchema = z
  .string()
  .transform((value) => value.replace(/\D/gu, ''))
  .refine((val) => val.length > 10, 'Название не может быть больше 10 символов')
  .refine((val) => val.startsWith('04'), 'Название не может содержать "04"')

const cryptMethod = ['None', 'WPA', 'WEP'] as const

const looseOptional = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess(
    (value: unknown) =>
      value === null || (typeof value === 'string' && value === '')
        ? undefined
        : value,
    schema.optional(),
  )

const formSchema = z
  .object({
    ssid: looseOptional(
      z.string().nonempty('Название точки доступа не может быть пустым'),
    ),
    pass: looseOptional(
      z.string().nonempty('Название точки доступа не может быть пустым'),
    ),
    preferredCryptMethod: z.enum(cryptMethod, {
      required_error: 'Required Error!',
      invalid_type_error: 'Invalid Error!',
    }),
  })
  .superRefine((values, context) => {
    if (
      values.preferredCryptMethod === 'WPA' ||
      values.preferredCryptMethod === 'WEP'
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Пароль обязателен!',
        path: ['pass'],
      })
    }
  })

type FormFields = z.infer<typeof formSchema>

const WifiQr = () => {
  const [qrCodeText, setQrCodeText] = useState('')
  const {control, handleSubmit, watch, trigger, getValues} =
    useForm<FormFields>({
      mode: 'onBlur',
      reValidateMode: 'onBlur',
      resolver: zodResolver(formSchema),
    })

  useEffect(() => {
    const subscription = watch((_value, {name}) => {
      if (name === 'preferredCryptMethod') {
        void trigger()
      }
    })

    return () => subscription.unsubscribe()
  }, [watch, trigger])

  return (
    <>
      <QrCodeLayout qrCodeText={qrCodeText}>
        <Box
          component='form'
          autoComplete='off'
          onSubmit={handleSubmit((data) => console.log('data: ', data))}
          noValidate
          sx={{mt: 0}}
        >
          <Controller
            name='ssid'
            control={control}
            render={({
              field: {value, onChange, onBlur, ref},
              fieldState: {error},
            }) => (
              <FormControl>
                <TextField
                  name='ssid'
                  label='SSID'
                  placeholder='wifi name'
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(error)}
                  required={true}
                />
                <FormHelperText
                  sx={{
                    color: 'error.main',
                  }}
                >
                  {error?.message ?? ''}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            name='pass'
            control={control}
            render={({
              field: {value, onChange, onBlur, ref},
              fieldState: {error},
            }) => (
              <FormControl>
                <TextField
                  name='pass'
                  label='Password'
                  placeholder='password'
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(error)}
                  required={
                    getValues('preferredCryptMethod') === 'WEP' ||
                    getValues('preferredCryptMethod') === 'WPA'
                  }
                />
                <FormHelperText
                  sx={{
                    color: 'error.main',
                  }}
                >
                  {error?.message ?? ''}
                </FormHelperText>
              </FormControl>
            )}
          />

          <Controller
            name='preferredCryptMethod'
            control={control}
            render={({
              field: {value, onChange, onBlur, ref},
              fieldState: {error},
            }) => (
              <FormControl>
                <Autocomplete
                  onChange={(
                    _event: unknown,
                    item: (typeof cryptMethod)[number] | null,
                  ) => {
                    onChange(item)
                  }}
                  value={value}
                  options={cryptMethod}
                  sx={{width: 245}}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={Boolean(error)}
                      onBlur={onBlur}
                      inputRef={ref}
                      label={'Crypto Type'}
                      defaultValue={cryptMethod[0]}
                    />
                  )}
                />
                <FormHelperText
                  sx={{
                    color: 'error.main',
                  }}
                >
                  {error?.message ?? ''}
                </FormHelperText>
              </FormControl>
            )}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{mt: 3, mb: 2}}
          >
            Generate
          </Button>
        </Box>
      </QrCodeLayout>
    </>
  )
}

export default WifiQr

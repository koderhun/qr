'use client'
import {FC, useState} from 'react'
import {Controller, FormProvider, useForm} from 'react-hook-form'

import {Button, Checkbox, Label, TextInput} from 'flowbite-react'
import {GeneratorProps} from './Generator.props'
import cn from 'classnames'
import s from './styles.module.scss'
import {CanvasQr} from '@/components'

export const Generator: FC<GeneratorProps> = (props) => {
  const [text, setText] = useState<string>('')
  const methods = useForm()

  const onSave = (data: any) => {
    console.log('data: ', data)
    setText(data?.text)
  }

  const {control, handleSubmit} = methods

  return (
    <div
      className={cn(s.Generator, 'container mx-auto grid-cols-2 grid')}
      {...props}>
      <div>
        <FormProvider {...methods}>
          <h2 className="mb-4">Генерация QR из текста</h2>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Text for qr code" />
          </div>

          <Controller
            name="text"
            control={control}
            render={({field: {value, onChange}}) => (
              <TextInput value={value} onChange={onChange} />
            )}
          />

          <Button className="mt-4" onClick={handleSubmit(onSave)} type="submit">
            Generation
          </Button>
        </FormProvider>
      </div>
      <div className="flex align-middle justify-center">
        <CanvasQr text={text} />
        <div className="clear-both"></div>
      </div>
    </div>
  )
}

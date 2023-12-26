'use client'
import {FC, useState} from 'react'
import {Controller, FormProvider, useForm} from 'react-hook-form'

import {Button, Card, Label, TextInput} from 'flowbite-react'
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
    <div className={cn('mx-auto grid-cols-2 grid', s.Generator)} {...props}>
      <div className={cn('pr-4', s.form)}>
        <Card className="max-w-sm">
          <Button color="light" href="/generator/text">
            Text
          </Button>
        </Card>
      </div>
      <form className={cn('pr-4', s.form)}>
        <FormProvider {...methods}>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Text:" />
          </div>

          <Controller
            name="text"
            control={control}
            render={({field: {value, onChange}}) => (
              <TextInput value={value} onChange={onChange} />
            )}
          />

          <Button className="mt-4" onClick={handleSubmit(onSave)} type="submit">
            Generate
          </Button>
        </FormProvider>
      </form>
      <div className={'pl-4 pb-4'}>
        <CanvasQr text={text} />
      </div>
    </div>
  )
}

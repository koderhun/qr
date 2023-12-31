import {createContext, useContext} from 'react'
export type FormContext = {
  qrtext: string
  setQRText: (text: string) => void
}

export const FormContext = createContext<FormContext>({
  qrtext: '',
  setQRText: (qrtext: string) => {
    console.log(qrtext)
  },
})

export const useFormContext = () => useContext(FormContext)

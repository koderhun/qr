import {toDataURL} from 'qrcode'
import type {QRCodeToDataURLOptions} from 'qrcode'

const options: QRCodeToDataURLOptions = {
  width: 400,
  margin: 2,
}

const getQRCode = (value: string): string => {
  let qrValue: string | undefined = undefined

  toDataURL(value, options, (err, url) => {
    if (err) {
      console.error(err)
      return
    }
    qrValue = url
  })

  return qrValue ? qrValue : ''
}

export default getQRCode

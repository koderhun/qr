import {generate as shortid} from 'shortid'

const downloadFile = (qr: string) => {
  const elm = document.createElement('a')
  elm.href = qr
  elm.download = shortid()
  elm.click()
}

export default downloadFile

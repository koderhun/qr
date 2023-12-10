import {FC} from 'react'
import {QRCodeCanvas} from 'qrcode.react'
import {CanvasQrProps} from './CanvasQr.props'
import s from './styles.module.scss'

export const CanvasQr: FC<CanvasQrProps> = ({text}) => {
  return (
    <div className={s.CanvasQr}>
      {text && <QRCodeCanvas {...{value: text, size: 250, level: 'H'}} />}
    </div>
  )
}

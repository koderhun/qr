'use client'
import {FC} from 'react'
import {Button} from 'flowbite-react'
import {elementToImage} from '@/utils'
import cn from 'classnames'
import Image from 'next/image'
import QRCode from 'react-qr-code'
import {CanvasQrProps} from './CanvasQr.props'
import s from './styles.module.scss'

const DefaultQR = () => {
  return (
    <div className={s.default}>
      <Image
        src="/logo.svg"
        width={340}
        height={360}
        className=""
        alt="QR Code Generator Logo"
      />
    </div>
  )
}

const VisibleQR: FC<CanvasQrProps> = ({text}) => {
  console.log('text', text)

  const handleDownload = () => {
    const $qr = document.getElementById('qr')!
    elementToImage($qr)
  }

  return (
    <>
      <div className="mb-4">
        <div id="qr">
          <QRCode
            {...{
              viewBox: '0 0 256 256',
              value: text,
              size: 256,
              style: {height: 'auto', maxWidth: '100%', width: '100%'},
            }}
          />
        </div>
      </div>
      <Button onClick={handleDownload} color="purple">
        Download
      </Button>
    </>
  )
}

export const CanvasQr: FC<CanvasQrProps> = ({text}) => {
  return text ? <VisibleQR text={text} /> : <DefaultQR />
}

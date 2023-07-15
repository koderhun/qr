import React from 'react'
import {Link} from '@mui/material'
import QrCodeIcon from '@mui/icons-material/QrCode'
import s from './styles.module.scss'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href='/' className={s.logo}>
      <div className={s.image}>
        <QrCodeIcon />
      </div>
      <div className={s.text}>QRCode</div>
    </Link>
  )
}

export default Logo

import React from 'react'
import {AppBar, Toolbar, Button, Grid, Box} from '@mui/material'
import NextLink from 'next/link'
import Logo from '@/components/Logo/Logo'
import s from './styles.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <AppBar
      className={s.header}
      position='static'
      color='default'
      elevation={0}
      sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
    >
      <Toolbar sx={{pl: 1, pr: 1}}>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Grid item sx={{flexGrow: 1}}>
            <Logo />
          </Grid>
          <Grid item>
            <Button // MUI Button
              href='/about'
              component='a'
              LinkComponent={NextLink} // NextJS Link
            >
              About
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header

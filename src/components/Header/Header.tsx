import React from 'react'
import {AppBar, Toolbar, Button, Grid, Box} from '@mui/material'
import NextLink from 'next/link'
import Logo from '@/components/Logo/Logo'
import s from './styles.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <AppBar
      position='static'
      color='default'
      elevation={0}
      sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
    >
      <Toolbar sx={{flexWrap: 'wrap'}}>
        <Grid sx={{flexGrow: 1}}>
          <Logo />
        </Grid>
        <Box>
          <Button // MUI Button
            href='/about'
            component='a'
            LinkComponent={NextLink} // NextJS Link
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header

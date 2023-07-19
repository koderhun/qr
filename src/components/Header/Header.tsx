import React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Container,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NextLink from 'next/link'
import Logo from '@/components/Logo/Logo'
import s from './styles.module.scss'
import MobileMenu from '../MobileMenu/MobileMenu'

const pages = [
  {url: '/', title: 'Home'},
  {url: '/about', title: 'About'},
  {url: '/wifi', title: 'Wifi Generator'},
]

interface Props {
  window?: () => Window
}

export default function Header(props: Props) {
  const {window} = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleMobileMenuToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <>
      <AppBar
        component='nav'
        position='static'
        elevation={0}
        sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
      >
        <Toolbar>
          <Container maxWidth='md'>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
              <Grid item xs={6}>
                <Logo />
              </Grid>
              <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                  {pages.map((item) => (
                    <Button key={item.url} type='a' href={item.url} sx={{color: '#fff'}}>
                      {item.title}
                    </Button>
                  ))}
                </Box>
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleMobileMenuToggle}
                  sx={{mr: 2, display: {sm: 'none'}}}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <MobileMenu
        {...{
          handleMobileMenuToggle,
          isMobileMenuOpen: mobileOpen,
          pages,
        }}
      />
    </>
  )
}

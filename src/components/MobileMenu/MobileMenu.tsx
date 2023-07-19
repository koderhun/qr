import {FC} from 'react'
import {
  Box,
  Drawer,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import s from './styles.module.scss'

type pagesType = {
  url: string
  title: string
}

interface MobileMenuProps {
  window?: () => Window
  handleMobileMenuToggle: any
  pages: pagesType[]
  isMobileMenuOpen: boolean
}

const MobileMenu: FC<MobileMenuProps> = (props) => {
  const {window, handleMobileMenuToggle, isMobileMenuOpen, pages} = props
  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box component='nav'>
      <Drawer
        container={container}
        variant='temporary'
        open={isMobileMenuOpen}
        onClose={handleMobileMenuToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {xs: 'block', sm: 'none'},
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 300,
          },
        }}
      >
        <Box onClick={handleMobileMenuToggle} className={s.menu}>
          <Typography variant='h6' sx={{my: 2}}>
            MUI 2
          </Typography>
          <Divider />
          <List className={s.list}>
            {pages.map((item) => (
              <ListItem key={item.url} disablePadding>
                <ListItemButton className={s.listBtn}>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default MobileMenu

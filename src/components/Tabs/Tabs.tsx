import {useState} from 'react'
import {Grid, Box, Typography, Tab, Tabs, Card} from '@mui/material'
import TextQr from '@/components/TextQr/TextQr'

import s from './styles.module.scss'
import WifiQr from '../WifiQr/WifiQr'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props

  return (
    <Box
      sx={{pt: 2}}
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={s.cardContainer}
      {...other}
    >
      {value === index && (
        <Card sx={{p: 2}} className={s.card}>
          {children}
        </Card>
      )}
    </Box>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Grid sx={{pl: 1, pr: 1}} className={s.container} container>
      <Grid
        item
        xs={4}
        sm={2}
        sx={{
          borderRight: 1,
          borderColor: 'divider',
        }}
      >
        <Tabs
          className={s.tabs}
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs'
          sx={{pt: 2}}
        >
          <Tab className={s.tabControl} label='Text to QR' {...a11yProps(0)} sx={{p: 2}} />
          <Tab className={s.tabControl} label='Wifi to QR' {...a11yProps(1)} sx={{p: 2}} />
        </Tabs>
      </Grid>

      <Grid item xs={8} sm={10}>
        <TabPanel value={value} index={1}>
          <TextQr />
        </TabPanel>
        <TabPanel value={value} index={0}>
          <WifiQr />
        </TabPanel>
      </Grid>
    </Grid>
  )
}

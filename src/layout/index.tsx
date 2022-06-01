import React, { FC } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { Paper, Theme } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Header from './header'
import Footer from './footer'
import themes from '../theme'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { RootState } from '../redux/store'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    overflow: 'hidden',
  },
  main: {
    backgroundColor: theme.palette.background.default,
  },
}))

const LayoutComponent: FC = ({ children }) => {
  const classes = useStyles()
  const { title } = useSiteMetadata()
  return (
    <Paper className={classes.root}>
      <Header siteTitle={title} />
      <main className={classes.main}>{children}</main>
      <Footer />
    </Paper>
  )
}

const Layout: FC = ({ children }) => {
  const { theme } = useSelector((state: RootState) => state.app)

  return (
    <ThemeProvider theme={themes[theme]}>
      <LayoutComponent>{children}</LayoutComponent>
    </ThemeProvider>
  )
}

export default Layout

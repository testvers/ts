import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/appModule'
import Brightness6Icon from '@material-ui/icons/Brightness6'

const useStyles = makeStyles({
  toolbar: {},
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none !important',
  },
})

export interface HeaderProps {
  siteTitle?: string
}

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  console.log('mount header')

  return (
    <AppBar component="header" position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <Link
            to="/"
            component={GatsbyLink}
            color="inherit"
            className={classes.link}
          >
            {siteTitle}
          </Link>
        </Typography>
        <Button color="inherit" onClick={handleToggleTheme}>
          <Brightness6Icon />
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header

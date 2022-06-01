import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/appModule'
import Brightness6Icon from '@material-ui/icons/Brightness6'
import Logo from '../images/logo.png'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none !important',
  },
  head: {
    backgroundColor: 'black'
  },
  logo: {
    maxWidth: 80,
    marginRight: '10px',
    marginLeft: '5px'
  }
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


  return (
    <AppBar className={classes.head} component="header" position="static">
      <Toolbar>
        <img src={Logo} alt="Tharak Society" className={classes.logo} />
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

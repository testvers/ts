import React, { FC } from 'react'

import { makeStyles } from '@material-ui/styles'
import { Container, Typography, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    padding: theme.spacing(2, 1),
    marginTop: 'auto',
    backgroundColor: 'grey',
  },
  color: {
    color: 'white',
  },
}))

const Footer: FC = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="h6" className={classes.color}>
          © {new Date().getFullYear()}, Tharak Society
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer

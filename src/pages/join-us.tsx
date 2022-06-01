import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Container, Theme } from '@material-ui/core'

import SEO from '../components/seo'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const JoinUs: FC = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="md" className={classes.root}>
      <SEO title="Join Us" />
      <Typography variant="h2" gutterBottom component="h1">
        Join Us
      </Typography>

      <Typography variant="body1">We will soon start auditions.</Typography>
      <Typography variant="h6">Stay tuned.</Typography>
    </Container>
  )
}

export default JoinUs

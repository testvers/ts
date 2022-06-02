import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Container, Theme } from '@material-ui/core'

import Hero from '../components/hero'
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
      <SEO title="Join Us" description="Join hands in this noble cause."/>
      <Hero title="Join Us" description="We will start auditions soon."></Hero>
    </Container>
  )
}

export default JoinUs

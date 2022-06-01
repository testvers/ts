import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Grid, Button, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import SEO from '../components/seo'
import Hero from '../components/hero'

const useStyles = makeStyles((theme: Theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

const IndexPage: FC = () => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Tharak Society" />
      <Hero
        title="Tharak Society"
        description="Tharak Society helping people to interact, learn and grow. Desire More."
      >
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                component={GatsbyLink}
                to="/page-2/"
                variant="contained"
                color="primary"
              >
                Go to page 2
              </Button>
            </Grid>
          </Grid>
        </div>
      </Hero>
    </>
  )
}

export default IndexPage

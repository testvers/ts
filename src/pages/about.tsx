import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Container, Theme } from '@material-ui/core'
import SEO from '../components/seo'
import Kashif from '../images/kashif.jpg'
import Rehan from '../images/rehan.jpg'
import Usman from '../images/usman.jpg'
import Cards from '../components/card'
import { createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shakeel from '../images/shakeel.jpg'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const useStyled = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const AboutUs: FC = () => {
  const classes = useStyles()
  const classed = useStyled()
  return (
    <Container maxWidth="md" className={classes.root}>
      <SEO title="About Us" />
      <Typography variant="h2" gutterBottom component="h1">
        About Us
      </Typography>

      <Typography variant="h4">Members:</Typography>
      <div className={classed.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Cards
              alt="President"
              title="Rehan"
              post="President"
              description="Highly ambitious hardworking Pesident. Second to none in tharak."
              img={Rehan}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Cards
              alt="Vice President"
              title="Kashif"
              post="Vice President"
              description="True feminist."
              img={Kashif}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Cards
              alt="Advisor"
              title="Usman"
              post="Advisor"
              description='Founder of "Desire More"'
              img={Usman}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Cards
              alt="Advisor"
              title="Shakeel"
              post="Advisor"
              description='Stage drama enthusiast.'
              img={Shakeel}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default AboutUs

import React, { FC } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Container, Theme } from '@material-ui/core'
import SEO from '../components/seo'
import Kashif from '../images/kashif.jpg'
import Rehan from '../images/rehan.jpg'
import Usman from '../images/usman.jpg'
import Cards from '../components/card'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const AboutUs: FC = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="md" className={classes.root}>
      <SEO title="About Us" />
      <Typography variant="h2" gutterBottom component="h1">
        About Us
      </Typography>

      <Typography variant="h4">Members:</Typography>
      <Cards
        alt="President"
        title="Rehan"
        post="President"
        description="Highly ambtious hardworking Pesident. Second to none."
        img={Rehan}
      />
      <Cards
        alt="Vice-President"
        title="Kashif"
        post="Vice President"
        description="True feminist."
        img={Kashif}
      />
      <Cards
        alt="President"
        title="Usman"
        post="Advisor"
        description='Founder of "Desire More"'
        img={Usman}
      />
    </Container>
  )
}

export default AboutUs

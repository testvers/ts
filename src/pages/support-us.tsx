import React, { FC, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Container, Theme, Button } from '@material-ui/core'

import SEO from '../components/seo'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  bg: {
    backgroundColor: '#DEDEDE',
  },
}))

const SupportUs: FC = () => {
  const classes = useStyles()

  const [copySuccess, setCopySuccess] = useState('')

  function copyToClipboard() {
    navigator.clipboard.writeText('0xD34E805a43e35001De88F315361873BcB5571b72')
    setCopySuccess('Copied!')
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <SEO title="Support Us" />
      <Typography variant="h2" gutterBottom component="h1">
        Support Us
      </Typography>

      <Typography variant="body1">For Web 3.0 payments.</Typography>
      <Typography variant="h6">Walet Address:</Typography>
      <Typography className={classes.bg} variant="body1">
        0xD34E805a43e35001De88F315361873BcB5571b72
      </Typography>
      <div style={{ marginTop: '4px', marginBottom: '20px' }}>
        <Button
          style={{ marginRight: '2px' }}
          variant="contained"
          color="primary"
          onClick={copyToClipboard}
        >
          Copy
        </Button>
        {copySuccess}
      </div>
      <Typography variant="body1">Web 2.0 payments coming soon...</Typography>
    </Container>
  )
}

export default SupportUs

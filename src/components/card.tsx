import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Theme } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme: Theme) => ({
  rootCard: {
    maxWidth: 345,
    marginTop: '10px',
    marginBottom: '10px',
  },
  media: {
    height: 345,
  },
}))

const Cards = ({ alt, title, description, post, img }: any) => {
  const classes = useStyles()
  return (
    <Card className={classes.rootCard}>
      <CardMedia className={classes.media} title={alt} image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          style={{ marginLeft: '20px', color: 'grey', fontStyle: 'italic' }}
          gutterBottom
          variant="body1"
          component="h2"
        >
          {post}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Cards

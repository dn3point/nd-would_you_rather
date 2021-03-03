import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useStyles } from '../styles'

const QuestionCard = (props) => {
  const classes = useStyles()
  const {author, question} = props
  const {id, optionOne} = question
  const {name, avatarURL} = author
  const {text} = optionOne
  return (
    <Card>
      <CardHeader className={classes.blue} title={`${name} asks`}/>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Box display='flex' justifyContent='center'>
              <Avatar alt={name} src={process.env.PUBLIC_URL + avatarURL} className={classes.large}/>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation='vertical'/>
          </Grid>
          <Grid item xs={9}>
            <Typography variant='h5' gutterBottom>
              Would you rater
            </Typography>
            <Typography variant='h6' gutterBottom>
              ...{text}...
            </Typography>
            <Button variant='outlined' color='primary' component={Link} to={`/questions/${id}`} fullWidth>
              View Poll
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

function mapStateToProps({users, questions, loginUser}, {id}) {
  const question = questions[id]
  const author = users[question.author]
  return {
    question,
    author,
  }
}

export default connect(mapStateToProps)(QuestionCard)

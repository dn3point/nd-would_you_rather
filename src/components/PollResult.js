import { Avatar, Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { useStyles } from '../styles'
import PollCard from './PollCard'

const PollResult = (props) => {
  const classes = useStyles()
  const {author, id} = props
  const {avatarURL, name} = author
  return (
    <Box width='50%'>
      <Card>
        <CardHeader className={classes.blue} title={`Asked by ${name}`}/>
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
                Results:
              </Typography>
              <PollCard option={'optionOne'} id={id}/>
              <PollCard option={'optionTwo'} id={id}/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

function mapStateToProps({loginUser, questions, users}, props) {
  const {id} = props
  const question = questions[id]
  return {
    author: users[question.author],
    id,
  }
}

export default connect(mapStateToProps)(PollResult)

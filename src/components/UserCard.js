import { Avatar, Badge, Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../styles'

const UserCard = (props) => {
  const classes = useStyles()
  const {user, pos} = props
  const {name, noOfA, noOfC, score, avatarURL} = user
  return (
    <Card>
      <CardHeader className={classes.blue} title={name}/>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Box display='flex' justifyContent='center'>
              <Badge color='secondary' badgeContent={pos}>
                <Avatar alt={name} src={process.env.PUBLIC_URL + avatarURL} className={classes.large}/>
              </Badge>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation='vertical'/>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h6' gutterBottom>
              Answered questions: {noOfA}
            </Typography>
            <Divider orientation='horizontal'/>
            <Typography variant='h6' gutterBottom>
              Created questions: {noOfC}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation='vertical'/>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader className={classes.lightBlue} title='SCORE'/>
              <CardContent>
                <Box display='flex' justifyContent='center'>
                  <Avatar className={classes.purple}>{score}</Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default UserCard

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider, FormControlLabel,
  Grid, Radio,
  RadioGroup,
  Typography
} from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'
import { useStyles } from '../styles'
import PollResult from './PollResult'

const QuestionDetail = (props) => {
  const classes = useStyles()
  const [answer, setAnswer] = useState('optionOne')
  const [isSubmit, setIsSubmit] = useState(false)

  const answerQuestion = (e) => {
    e.preventDefault()
    const {loginUser, question, dispatch} = props
    dispatch(handleSaveAnswer(loginUser, question.id, answer))
    setIsSubmit(true)
  }

  const onAnswerChange = (e) => {
    setAnswer(e.target.value)
  }

  const {question, author, isAnswered, id, avatarURL} = props

  return (isAnswered || isSubmit) ? <PollResult id={id}/> : (
    <Box width='50%'>
      <Card>
        <CardHeader className={classes.blue} title={`${author} asks`}/>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Box display='flex' justifyContent='center'>
                <Avatar alt={author} src={process.env.PUBLIC_URL + avatarURL} className={classes.large}/>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <Divider orientation='vertical'/>
            </Grid>
            <Grid item xs={9}>
              <Typography variant='h5' gutterBottom>
                Would you rater ...
              </Typography>
              <RadioGroup aria-label='answer' name='answer' value={answer} onChange={onAnswerChange}>
                <FormControlLabel value='optionOne' control={<Radio />} label={question.optionOne.text} />
                <FormControlLabel value='optionTwo' control={<Radio />} label={question.optionTwo.text} />
              </RadioGroup>
              <Button variant='outlined' color='primary' onClick={answerQuestion} fullWidth>
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

function mapStateToProps({loginUser, questions, users}, props) {
  const {id} = props.match.params
  const user = users[loginUser]
  const question = questions[id]
  const isAnswered = id in user.answers
  return {
    loginUser,
    question,
    author: users[question.author].name,
    avatarURL: users[question.author].avatarURL,
    isAnswered,
    id,
  }
}

export default connect(mapStateToProps)(QuestionDetail)

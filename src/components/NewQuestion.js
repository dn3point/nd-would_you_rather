import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import { useStyles } from '../styles'

const NewQuestion = (props) => {
  const classes = useStyles()
  const [optionOne, setOptionOne] = useState('')
  const [optionTwo, setOptionTwo] = useState('')
  const [toHome, setToHome] = useState(false)

  const createNewQuestion = (e) => {
    e.preventDefault()

    props.dispatch(handleAddQuestion(optionOne, optionTwo))

    setOptionOne('')
    setOptionTwo('')
    setToHome(true)
  }

  const handleOptionOneChange = (e) => {
    const value = e.target.value
    setOptionOne(value)
  }

  const handleOptionTwoChange = (e) => {
    const value = e.target.value
    setOptionTwo(value)
  }

  return toHome ? <Redirect to='/'/> : (
    <Box width='50%'>
      <Card>
        <CardHeader className={classes.blue} title='Create New Questions'/>
        <CardContent>
          <Typography variant='subtitle1' gutterBottom>
            Complete the question:
          </Typography>
          <Typography variant='h6' gutterBottom>
            Would you rather ...
          </Typography>
          <TextField id='option-one' label='Option one' variant='outlined' fullWidth
                     onChange={handleOptionOneChange} value={optionOne}/>
          <Typography variant='h6' gutterBottom align='center'>
            OR
          </Typography>
          <TextField id='option-two' label='Option two' variant='outlined' fullWidth
                     onChange={handleOptionTwoChange} value={optionTwo}/>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='primary' onClick={createNewQuestion} fullWidth
                  disabled={optionOne.length === 0 || optionTwo.length === 0}>
            SUBMIT
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default connect()(NewQuestion)

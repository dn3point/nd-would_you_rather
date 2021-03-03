import { AppBar, Box, Grid, Paper, Tab, Tabs } from '@material-ui/core'
import * as PropTypes from 'prop-types'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'

function TabPanel(props) {
  const {children, value, index, ...other} = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`question-tab-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Home = (props) => {
  const [value, setValue] = useState(0)

  const {answered, unanswered} = props

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <Box width='50%'>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} aria-label='question tab' variant='fullWidth'>
          <Tab label='Unanswered' {...a11yProps(0)} />
          <Tab label='Answered' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Paper variant='outlined' square>
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            {
              unanswered.map((question) => (
                <Grid item xs={12} key={question.id}>
                  <QuestionCard key={question.id} id={question.id}/>
                </Grid>
              ))
            }
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            {
              answered.map((question) => (
                <Grid item xs={12} key={question.id}>
                  <QuestionCard key={question.id} id={question.id}/>
                </Grid>
              ))
            }
          </Grid>
        </TabPanel>
      </Paper>
    </Box>
  )
}

function mapStateToProps({loginUser, questions, users}) {
  const user = users[loginUser]
  const answeredIds = Object.keys(user.answers)
  const questionIds = Object.keys(questions)
  const answered = questionIds
    .filter((questionId) => answeredIds.includes(questionId))
    .map((questionId) => questions[questionId])
    .sort((q1, q2) => q2.timestamp - q1.timestamp)

  const unanswered = questionIds
    .filter((questionId) => !answeredIds.includes(questionId))
    .map((questionId) => questions[questionId])
    .sort((q1, q2) => q2.timestamp - q1.timestamp)
  return {
    loginUser,
    users,
    answered,
    unanswered,
  }
}

export default connect(mapStateToProps)(Home)

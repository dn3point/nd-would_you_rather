import { Box, Chip, CircularProgress, Grid, Paper, Typography } from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import * as PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { useStyles } from '../styles'

function CircularProgressWithLabel(props) {
  return (
    <Box position='relative' display='inline-flex'>
      <CircularProgress variant='determinate' {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography variant='caption' component='div' color='textSecondary'>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
}

const PollCard = (props) => {
  const classes = useStyles()
  const {text, num, sum, isSelect} = props
  return (
    <Paper variant='outlined' square className={isSelect ? classes.selectedPaper : classes.paper}>
      <Typography variant='h6' gutterBottom>
        Would you rather be {text}?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <CircularProgressWithLabel value={num * 100 / sum}/>
        </Grid>
        <Grid item xs={8}>
          <Typography variant='h6' gutterBottom>
            {num} out of {sum} votes
          </Typography>
        </Grid>
        <Grid item xs={3}>
          {isSelect && <Chip
            icon={<FaceIcon/>}
            label='Your vote'
            color='primary'
            variant='outlined'
          />}
        </Grid>
      </Grid>
    </Paper>
  )
}

function mapStateToProps({loginUser, questions}, props) {
  const {id, option} = props
  const question = questions[id]
  const {votes, text} = question[option]
  const sum = question['optionOne'].votes.length + question['optionTwo'].votes.length
  const num = votes.length
  const isSelect = votes.includes(loginUser)
  return {
    text,
    sum,
    num,
    isSelect,
  }
}

export default connect(mapStateToProps)(PollCard)

import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollCard extends Component {
  render() {
    const {text, num, sum, isSelect} = this.props
    return (
      <div>
        <p>{text}</p>
        <p>{num} out of {sum} votes</p>
        {isSelect && <p>Your vote</p>}
      </div>
    )
  }
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

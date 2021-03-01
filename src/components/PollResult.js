import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollCard from './PollCard'

class PollResult extends Component {
  render() {
    const {author, id} = this.props
    const {avatarURL, name} = author
    return (
      <div>
        Asked by {name}
        <h3>Results: </h3>
        <PollCard option={'optionOne'} id={id}/>
        <PollCard option={'optionTwo'} id={id}/>
      </div>
    )
  }
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class Leaderboard extends Component {
  render() {
    const { users } = this.props
    return (
      <div>
        {
          users.map((user) => <UserCard key={user.id} user={user}/>)
        }
      </div>
    )
  }
}

function mapStateToProps({ users, questions }) {
  const leaders = Object.values(users).map((user) => {
    const { id, name, answers } = user
    const noOfA = Object.keys(answers).length
    const noOfC = Object.values(questions)
      .filter((question) => question.author === id).length
    return {
      id,
      name,
      noOfA,
      noOfC,
      score: noOfA + noOfC
    }}).sort((u1, u2) => u2.score - u1.score)
  
  return {
    users: leaders
  }
}

export default connect(mapStateToProps)(Leaderboard)

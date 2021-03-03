import { Box } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

const Leaderboard = (props) => {
  const {users} = props
  return (
    <Box width='50%'>
      {
        users.map((user, idx) => <UserCard key={user.id} user={user} pos={idx + 1}/>)
      }
    </Box>
  )
}

function mapStateToProps({users, questions}) {
  const leaders = Object.values(users).map((user) => {
    const {id, name, answers, avatarURL} = user
    const noOfA = Object.keys(answers).length
    const noOfC = Object.values(questions)
      .filter((question) => question.author === id).length
    return {
      id,
      avatarURL,
      name,
      noOfA,
      noOfC,
      score: noOfA + noOfC
    }
  }).sort((u1, u2) => u2.score - u1.score)

  return {
    users: leaders
  }
}

export default connect(mapStateToProps)(Leaderboard)

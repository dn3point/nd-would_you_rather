import React, { Component } from 'react'

class UserCard extends Component {
  render() {
    const { user } = this.props
    const { name, noOfA, noOfC, score } = user
    return (
      <div>
        <h3>{name}</h3>
        <p>Answered questions: {noOfA}</p>
        <p>Created questions: {noOfC}</p>
        <p>Score: {score}</p>
      </div>
    )
  }
}

export default UserCard

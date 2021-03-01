import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionCard extends Component {
  render() {
    const {author, question} = this.props
    const {id, optionOne} = question
    return (
      <div>
        <h3>{author.name} asks:</h3>
        <h3>Would you rater</h3>
        <p>...{optionOne.text}...</p>
        <Link to={`/questions/${id}`}>View Poll</Link>
      </div>
    )
  }
}

function mapStateToProps({users, questions, loginUser}, {id}) {
  const question = questions[id]
  const author = users[question.author]
  return {
    question,
    author,
  }
}

export default connect(mapStateToProps)(QuestionCard)

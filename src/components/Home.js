import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetQuestions } from '../actions/questions'
import QuestionCard from './QuestionCard'

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetQuestions())
  }

  render() {
    return (
      <div>
        Unanswered Questions
        <ul>
          {
            this.props.unanswered.map((question) => (
              <li key={question.id}>
                <QuestionCard key={question.id} id={question.id}/>
              </li>
            ))
          }
        </ul>
        Answered Questions
        <ul>
          {
            this.props.answered.map((question) => (
              <li key={question.id}>
                <QuestionCard key={question.id} id={question.id}/>
              </li>
            ))
          }
        </ul>
      </div>
    )

  }
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'
import PollResult from './PollResult'

class QuestionDetail extends Component {
  state = {
    answer: 'optionOne',
    isSubmit: false,
  }

  answerQuestion = (e) => {
    e.preventDefault()
    const {loginUser, question, dispatch} = this.props
    const {answer} = this.state
    dispatch(handleSaveAnswer(loginUser, question.id, answer))
    this.setState(() => ({
      isSubmit: true
    }))
  }

  onAnswerChange = (e) => {
    this.setState(() => ({
      answer: e.target.value
    }))
  }

  render() {
    const {question, author, isAnswered, id} = this.props
    const {isSubmit} = this.state
    if (isAnswered || isSubmit) {
      return (
        <PollResult id={id}/>
      )
    }
    const {answer} = this.state
    return (
      <div>
        {question !== undefined && <form onSubmit={this.answerQuestion}>
          {author} asks:
          Would you rather ...
          <div>
            <input type="radio" value="optionOne" name="answer"
                   checked={answer === 'optionOne'}
                   onChange={this.onAnswerChange}/>
            {question.optionOne.text}
            <input type="radio" value="optionTwo" name="answer"
                   checked={answer === 'optionTwo'}
                   onChange={this.onAnswerChange}/>
            {question.optionTwo.text}
          </div>
          <button type={'submit'}>Submit</button>
        </form>}
      </div>
    )
  }
}

function mapStateToProps({loginUser, questions, users}, props) {
  const {id} = props.match.params
  const user = users[loginUser]
  const question = questions[id]
  const isAnswered = id in user.answers
  return {
    loginUser,
    question,
    author: users[question.author].name,
    isAnswered,
    id,
  }
}

export default connect(mapStateToProps)(QuestionDetail)

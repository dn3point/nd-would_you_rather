import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }

  createNewQuestion = (e) => {
    e.preventDefault()

    const {optionOne, optionTwo} = this.state

    this.props.dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true,
    }))
  }

  handleOptionOneChange = (e) => {
    const value = e.target.value
    this.setState(() => ({
      optionOne: value,
    }))
  }

  handleOptionTwoChange = (e) => {
    const value = e.target.value
    this.setState(() => ({
      optionTwo: value,
    }))
  }

  render() {
    const {optionOne, optionTwo, toHome} = this.state
    if (toHome) {
      return <Redirect to='/'/>
    }
    return (
      <div>
        <h3>Create New Questions</h3>
        Complete the question:
        <h4>Would you rather ...</h4>
        <input id={'optionOne'} value={optionOne} onChange={this.handleOptionOneChange}/>
        OR
        <input id={'optionTwo'} value={optionTwo} onChange={this.handleOptionTwoChange}/>
        <button onClick={this.createNewQuestion}
                disabled={optionOne.length === 0 || optionTwo.length === 0}>Submit
        </button>
      </div>
    )
  }
}

export default connect()(NewQuestion)

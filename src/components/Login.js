import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleLogin } from '../actions/loginUser'

class Login extends Component {
  login = (e) => {
    e.preventDefault()
    const userId = e.target.innerText
    this.props.dispatch(handleLogin(userId))
    this.props.history.push('/')
  }

  render() {
    const {userIds} = this.props
    return (
      <div>
        {userIds.map((id) => (
          <button key={id} onClick={this.login}>{id}</button>
        ))}
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    userIds: Object.keys(users),
  }
}

export default withRouter(connect(mapStateToProps)(Login))

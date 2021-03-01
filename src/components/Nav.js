import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogout } from '../actions/loginUser'

class Nav extends Component {
  logout = () => {
    this.props.dispatch(handleLogout())
  }
  render() {
    const { isLogin, userName } = this.props
    return (
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          {isLogin ?
            <li onClick={this.logout}>{userName} Logout</li> :
            <li>Login</li>
          }
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ loginUser, users }) {
  const isLogin = loginUser !== null
  return {
    userName: isLogin ? users[loginUser].name : '',
    isLogin
  }
}

export default connect(mapStateToProps)(Nav)

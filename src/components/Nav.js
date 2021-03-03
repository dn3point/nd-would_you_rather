import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogout } from '../actions/loginUser'

const Nav = (props) => {
  const logout = () => {
    props.dispatch(handleLogout())
  }

  const {isLogin, userName, avatarURL} = props

  return (
    <AppBar position='static'>
      <Toolbar>
        <div style={{flex: 1}}>
          <Button color='inherit' to='/' component={NavLink}>Home</Button>
          <Button color='inherit' to='/add' component={NavLink}>New Question</Button>
          <Button color='inherit' to='/leaderboard' component={NavLink}>Leader Board</Button>
        </div>
        {isLogin ? <div>
          <Typography variant='button' gutterBottom>
            {userName}
          </Typography>
          <IconButton
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'>
            <Avatar alt={userName} src={process.env.PUBLIC_URL + avatarURL}/>
          </IconButton>
          <Button onClick={logout} color='inherit'>Logout</Button>
        </div> : <div>
          <Button color='inherit'>Login</Button>
        </div>}
      </Toolbar>
    </AppBar>
  )
}

function mapStateToProps({loginUser, users}) {
  const isLogin = loginUser !== null
  return {
    userName: isLogin ? users[loginUser].name : '',
    avatarURL: isLogin ? users[loginUser].avatarURL : '',
    isLogin,
  }
}

export default connect(mapStateToProps)(Nav)

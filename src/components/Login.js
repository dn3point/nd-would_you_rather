import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleLogin } from '../actions/loginUser'
import { handleGetQuestions } from '../actions/questions'
import { useStyles } from '../styles'

const Login = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const login = (e) => {
    e.preventDefault()
    const userId = e.target.innerText
    props.dispatch(handleLogin(userId))
    props.dispatch(handleGetQuestions())
    props.history.push('/')
  }

  const handleClick = (e) => {
    setAnchorEl(e.target)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const {userIds} = props
  return (
    <Card style={{display: 'inline-block'}}>
      <CardHeader style={{backgroundColor: '#3f50b5', color: 'white'}}
                  title='Welcome to the Would You Rather APP!'/>
      <CardContent>
        <Box display='flex' justifyContent='center'>
          <Avatar alt='logo' src={process.env.PUBLIC_URL + '/img/logo192.png'} className={classes.large}/>
        </Box>
        <Typography gutterBottom variant='h5' component='h2' align='center'>
          SIGN IN
        </Typography>
        <Box display='flex' justifyContent='center'>
          <Button aria-controls='login-user-menu' aria-haspopup='true' onClick={handleClick}>
            Select Login User
          </Button>
          <Menu
            id='login-user-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {userIds.map((id) => (
              <MenuItem key={id} onClick={login}>{id}</MenuItem>
            ))}
          </Menu>
        </Box>
      </CardContent>
    </Card>
  )
}

function mapStateToProps({users}) {
  return {
    userIds: Object.keys(users),
  }
}

export default withRouter(connect(mapStateToProps)(Login))

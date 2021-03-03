import { Box } from '@material-ui/core'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleGetUsers } from './actions/users'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import Login from './components/Login'
import Nav from './components/Nav'
import NewQuestion from './components/NewQuestion'
import QuestionDetail from './components/QuestionDetail'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Nav/>
          <LoadingBar/>
          {
            this.props.isLogin
              ? <Box display='flex' justifyContent='center' m={2}>
                <Route path='/' exact component={Home}/>
                <Route path='/add' component={NewQuestion}/>
                <Route path='/leaderboard' component={Leaderboard}/>
                <Route path='/questions/:id' component={QuestionDetail}/>
              </Box>
              : <Box display='flex' justifyContent='center' m={2}><Login/></Box>
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({loginUser}) {
  return {
    isLogin: loginUser !== null
  }
}

export default connect(mapStateToProps)(App)  

import { Box } from '@material-ui/core'
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleGetUsers } from './actions/users'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import Login from './components/Login'
import Nav from './components/Nav'
import NewQuestion from './components/NewQuestion'
import NotFound from './components/NotFound'
import QuestionDetail from './components/QuestionDetail'

const App = (props) => {
  const {isLogin, dispatch} = props

  useEffect(() => {
    if (!isLogin) {
      dispatch(handleGetUsers())
    }
  })

  return (
    <Router>
      <Fragment>
        <Nav/>
        <LoadingBar/>
        {
          isLogin ?
            <Box display='flex' justifyContent='center' m={2}>
              <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/add' component={NewQuestion}/>
                <Route path='/leaderboard' component={Leaderboard}/>
                <Route path='/questions/:id' component={QuestionDetail}/>
                <Route
                  render={() => (
                    <NotFound title={'404'} text={'PAGE NOT FOUND'}/>
                  )}
                />
              </Switch>
            </Box> :
            <Box display='flex' justifyContent='center' m={2}><Login/></Box>
        }
      </Fragment>
    </Router>
  )
}

function mapStateToProps({loginUser}) {
  return {
    isLogin: loginUser !== null
  }
}

export default connect(mapStateToProps)(App)  

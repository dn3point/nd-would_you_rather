import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers } from './actions/users'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import Login from './components/Login'
import Nav from './components/Nav'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
          <LoadingBar/>
          <Nav/>
          {
            this.props.isLogin
              ? <div>
                <Route path='/' exact component={Home}/>
                <Route path='/add' component={NewQuestion}/>
                <Route path='/leaderboard' component={Leaderboard}/>
                <Route path='/questions/:id' component={QuestionDetail}/>
              </div>
              : <Login />
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

import { combineReducers } from 'redux'
import loginUser from './loginUser'
import questions from './questions'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  loginUser,
  questions,
  users,
  loadingBar: loadingBarReducer
})

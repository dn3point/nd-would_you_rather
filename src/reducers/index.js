import { loadingBarReducer } from 'react-redux-loading'
import { combineReducers } from 'redux'
import loginUser from './loginUser'
import questions from './questions'
import users from './users'

export default combineReducers({
  loginUser,
  questions,
  users,
  loadingBar: loadingBarReducer
})

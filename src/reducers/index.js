import { loadingBarReducer } from 'react-redux-loading'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginUser from './loginUser'
import questions from './questions'
import users from './users'

const reducers = combineReducers({
  loginUser,
  questions,
  users,
  loadingBar: loadingBarReducer
})

const persistConfig = {
  key: 'app',
  storage,
  blacklist: ['loadingBar']
}

export default persistReducer(persistConfig, reducers)

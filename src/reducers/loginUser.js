import { LOGOUT_USER, SET_LOGIN_USER } from '../actions/loginUser'

export default function loginUser(state = null, action) {
  switch (action.type) {
    case SET_LOGIN_USER:
      return action.id
    case LOGOUT_USER:
      return null
    default:
      return state
  }
}

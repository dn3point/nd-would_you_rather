import { _getUsers } from '../_DATA'
import { hideLoading, showLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function updateUser(loginUser, qid, answer) {
  return {
    type: UPDATE_USER,
    loginUser, qid, answer
  }
}

export function handleGetUsers() {
  return (dispatch) => {
    dispatch(showLoading())
    return _getUsers().then(
      (users) => {
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      }
    )
  }
}

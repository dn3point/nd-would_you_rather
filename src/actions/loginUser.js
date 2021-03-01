export const SET_LOGIN_USER = 'SET_LOGIN_USER'
export const LOGOUT_USER = 'LOG_OUT'

function setLoginUser(id) {
  return {
    type: SET_LOGIN_USER,
    id,
  }
}

function logoutUser() {
  return {
    type: LOGOUT_USER,
  }
}

export function handleLogin(id) {
  return (dispatch) => {
    return dispatch(setLoginUser(id))
  }
}

export function handleLogout() {
  return (dispatch) => {
    return dispatch(logoutUser())
  }
}

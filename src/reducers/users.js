import { RECEIVE_USERS, UPDATE_USER } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case UPDATE_USER:
      const {loginUser, qid, answer} = action
      return {
        ...state,
        [loginUser]: {
          ...state[loginUser],
          answers: {
            ...state[loginUser].answers,
            [qid]: answer
          }
        }
      }
    default:
      return state
  }
}
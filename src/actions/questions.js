import { hideLoading, showLoading } from 'react-redux-loading'
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../_DATA'
import { updateUser } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function saveAnswer(loginUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    loginUser,
    qid,
    answer,
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const {loginUser} = getState()
    dispatch(showLoading())
    return _saveQuestion({
      author: loginUser,
      optionOneText,
      optionTwoText
    }).then(
      (question) => {
        dispatch(addQuestion(question))
        dispatch(hideLoading())
      }
    )
  }
}

export function handleGetQuestions() {
  return (dispatch) => {
    dispatch(showLoading())
    return _getQuestions().then(
      (questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      }
    )
  }
}

export function handleSaveAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(saveAnswer(authedUser, qid, answer))
    dispatch(updateUser(authedUser, qid, answer))
    return _saveQuestionAnswer({authedUser, qid, answer}).then(
      () => {
        dispatch(hideLoading())
      }
    )
  }
}

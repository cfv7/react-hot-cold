import * as actions from '../actions'

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.round(Math.random() * 100),
}

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_GUESSES) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback: action.feedback,
      correctAnswer: action.correctAnswer
    })
  }

  if (action.type === actions.START_NEW_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      correctAnswer: action.correctAnswer
    })
  }

    //not sure what do do about different states
  if (action.type === actions.OPEN_INFO_MODAL) {
    return Object.assign({}, state, {
      showInfoModal: action.showInfoModal
    })
  }
  return state
} 
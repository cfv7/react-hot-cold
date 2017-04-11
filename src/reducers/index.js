import * as actions from '../actions'

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.round(Math.random() * 100),
  showInfoModal: false
}

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_GUESSES) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback: (() => {
        const difference = Math.abs(action.guess - state.correctAnswer);
        if (difference >= 50) {
            return 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            return 'You\'re Cold...';
        }
        else if (difference >= 10) {
            return 'You\'re Warm';
        }
        else if (difference >= 1) {
            return 'You\'re Hot!';
        }
        else {
            return 'You got it!';
        }
      })()
    })
  }

  if (action.type === actions.START_NEW_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      correctAnswer: action.correctAnswer, 
      feedback: 'Make your guess!'
    })
  }

  if (action.type === actions.OPEN_INFO_MODAL) {
    return Object.assign({}, state, {
      showInfoModal: !state.showInfoModal
    })
  }
  return state
} 
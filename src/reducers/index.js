import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.round(Math.random() * 100)
}

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_GUESSES) {
    return Object.assign({}, state, {
      guesses: [...this.state.guesses, guess]
    })
  }
}
// ADD_GUESS, UPDATE_GUESSES, CHANGE_FEEDBACK, CHANGE_ANSWER, GUESSES

export const ADD_GUESSES = 'ADD_GUESSES';
export const addGuesses = (guess, feedback, correctAnswer) => ({
  type: ADD_GUESSES,
  guess,
  feedback,
  correctAnswer
})

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
  type: START_NEW_GAME,
  correctAnswer: Math.round(Math.random()*100)
})

export const OPEN_INFO_MODAL = 'OPEN_INFO_MODAL';
export const openInfoModal = showInfoModal => ({
  type: OPEN_INFO_MODAL,
  showInfoModal
})





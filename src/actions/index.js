export const ADD_GUESSES = 'ADD_GUESSES';
export const addGuesses = (guess) => ({
  type: ADD_GUESSES,
  guess
})

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = () => ({
  type: START_NEW_GAME,
  correctAnswer: Math.round(Math.random()*100)
})

export const OPEN_INFO_MODAL = 'OPEN_INFO_MODAL';
export const openInfoModal = () => ({
  type: OPEN_INFO_MODAL
})





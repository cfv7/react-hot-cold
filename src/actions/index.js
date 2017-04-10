// ADD_GUESS, UPDATE_GUESSES, CHANGE_FEEDBACK, CHANGE_ANSWER, GUESSES

export const ADD_GUESSES = 'ADD_GUESS';
export const addGuesses = guess => ({
  type: ADD_GUESSES,
  guess
})

export const UPDATE_GUESSES = 'UPDATE_GUESSES';
export const updateGuesses = guesses => ({
  type: UPDATE_GUESSES,
  guesses
})

export const CHANGE_FEEDBACK = 'CHANGE_FEEDBACK';
export const changeFeedback = feedback => ({
  type: CHANGE_FEEDBACK,
  feedback
})

export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const correctAnswer = answer => ({
  type: CORRECT_ANSWER,
  answer
})




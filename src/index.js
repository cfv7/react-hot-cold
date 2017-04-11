import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game';
import './reset.css';
import './index.css';
import store from './store.js'
import {startNewGame, openInfoModal, addGuesses} from './actions'

console.log(store.getState());
store.dispatch(addGuesses(5));
console.log(store.getState());
store.dispatch(openInfoModal());
console.log(store.getState());
store.dispatch(startNewGame());
console.log(store.getState());
store.dispatch(startNewGame());
console.log(store.getState());
store.dispatch(startNewGame());
console.log(store.getState());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

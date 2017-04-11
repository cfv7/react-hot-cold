import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; 
import Game from './components/game';
import './reset.css';
import './index.css';
import store from './store.js'
import {startNewGame, openInfoModal, addGuesses} from './actions'

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>, 
    document.getElementById('root')
);

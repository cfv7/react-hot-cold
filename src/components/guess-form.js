import React from 'react';
import {connect} from 'react-redux';
import {addGuesses} from '../actions';

export class GuessForm extends React.Component {
    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                let value = e.target.userGuessInput.value;
                this.props.dispatch(addGuesses(value));
                e.target.userGuessInput.value = '';
            }}>
                <label>Enter your Guess</label>
                <input type="text" name="userGuessInput" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required />
                <span id="count"></span>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
            </form>
        );
    }
};

export default connect()(GuessForm);
import React from 'react';

export default class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();

        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label>Enter your Guess</label>
                <input type="text" name="userGuessInput" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required
                    ref={input => this.input = input} />
                <span id="count"></span>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
            </form>
        );
    }
};


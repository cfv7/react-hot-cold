import React from 'react';
import {connect} from 'react-redux';

export function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count">{props.guesses}</span>!
        </p>
    );
}

export const mapStateToProps = state => ({
    guesses: state.guesses.length
});

export default connect(mapStateToProps)(GuessCount);
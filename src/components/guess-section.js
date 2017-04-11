import React from 'react';

import GuessForm from './guess-form';
import {connect} from 'react-redux';

export function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm />
        </section>
    );
}

const dog = (state) => ({
    feedback: state.feedback
});
export default connect(dog)(GuessSection);
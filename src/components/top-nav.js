import React from 'react';
import {connect} from 'react-redux';
import {openInfoModal, startNewGame} from '../actions'

export class TopNav extends React.Component {
    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => {
                            this.props.dispatch(openInfoModal());
                        }}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={() => {
                            this.props.dispatch(startNewGame());
                        }}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);
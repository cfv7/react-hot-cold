import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import {connect} from 'react-redux';

export class Header extends React.Component  {
    render() {
        let infoModal;
        if (this.props.showInfoModal) {
            infoModal = <InfoModal />;
        }

        let winningHorse;
        if (this.props.feedback === 'You got it!') {
            winningHorse = <img src='https://media.giphy.com/media/ueVYG9Cg4zBu0/giphy.gif' alt='a happy, excellent horse' />
        }

        return (
            <header>
                <TopNav />
                {infoModal}
                {winningHorse}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal,
    feedback: state.feedback
});
export default connect(mapStateToProps)(Header);
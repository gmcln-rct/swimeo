import { connect } from 'react-redux';
import { logout, signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

import Footer from './footer';

const msp = ({ session }) => ({
    currentUser: session.currentUser
});

const mdp = dispatch => {
    return {

    };
};

export default connect(msp, mdp)(Footer);

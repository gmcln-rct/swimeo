import { connect } from 'react-redux';
import { logout, signup } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

import Splash from './splash';

    const msp = ({ session }) => ({
        currentUser: session.currentUser
    });

    const mdp = dispatch => {
        return {
            heroSignup: () => dispatch(openModal('signup'))
        };
    };

export default connect(msp, mdp)(Splash);

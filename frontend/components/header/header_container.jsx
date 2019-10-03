import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

import Header from './header';

    const msp = ({ session }) => ({
        currentUser: session.currentUser
    });

    const mdp = dispatch => {
        return {
            heroSignup: () => dispatch(openModal('signup'))
        };
    };

export default connect(msp, mdp)(Header);

import { connect } from 'react-redux';
import React from 'react';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';


const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Join Instead</Link>,
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(msp, mdp)(SessionForm);

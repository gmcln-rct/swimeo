import { connect } from 'react-redux';
import React from 'react';

import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Login Instead</Link>,
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(msp, mdp)(SessionForm);

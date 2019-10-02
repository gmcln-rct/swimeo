import { connect } from 'react-redux';
import React from 'react';

import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formHeader: 'Join Swimeo',
        formSubmit: 'Join with email',
        formFooter: 'Already have an account?',
        formType: 'Join',
        navLink: <Link to="/login">Log in</Link>,
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),

        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SessionForm);

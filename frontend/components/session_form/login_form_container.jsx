import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom'
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formHeader: 'Log in to Swimeo',
        formSubmit: 'Log in with email',
        formFooter: 'Dont have an account?',
        formType: 'Log in',
        navLink: <Link to="/signup">Join</Link>,
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Join
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SessionForm);

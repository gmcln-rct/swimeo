import { connect } from 'react-redux';
import React from 'react';

import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


// SIGN IN FORM CONTAINER

const msp = ({errors}) => {
    const errorsObj = {};
    errors.session.forEach(e => errorsObj[e.split(" ")[0]] = e);

    return {
        errors: errorsObj,
        formHeader: 'Join Swimeo',
        formSubmit: 'Join with email',
        formFooter: 'Already have an account?',
        formType: 'Join',
        // navLink: <Link to="/login">Log in</Link>,
    };
};

const mdp = dispatch => {

    const demoUserObj = { 
        email: 'demo@demo.com',
        password: 'password',
    };

    return {
        processForm: (user) => dispatch(signup(user)),

        otherForm: (
            <button className='modal-footer-button' onClick={() => dispatch(openModal('login'))}>
                Log in
            </button>
        ),
        closeModal: () => dispatch(closeModal()),

        demoUserLogin: () => dispatch(login(demoUserObj))
    };
};

export default connect(msp, mdp)(SessionForm);

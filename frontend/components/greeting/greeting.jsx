import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="header-nav">
            <span className='login-nav'>
                <span className='header-logo'>swimeo</span>
                <button className="button-signup" onClick={() => openModal('signup')}>Join</button>
                <button className="button-login" onClick={() => openModal('login')}>Login</button>
            </span>
            <div  className='nav-upload'>

                <Link to="/upload" className='nav-upload-button'>
                    <FontAwesomeIcon icon="cloud-upload-alt" style={{ color: 'white' }} /> Upload
                </Link>
                {/* <button  className='nav-upload-button'>Upload Video</button> */}
            </div>
 
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Swello, {currentUser.first_last_name}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;

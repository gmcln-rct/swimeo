import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './../video/video_search/search_form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="header-nav">
            <span className='login-nav'>
                <Link to='/' className='header-logo'>swimeo</Link>

                <button className="button-signup" onClick={() => openModal('signup')}>Join</button>
                <button className="button-login" onClick={() => openModal('login')}>Login</button>
                <Link to="/watch" className='nav-watch-button'>Watch</Link>
                <Link to="/plans" className='nav-watch-button'>Solutions</Link>
            </span>

            <div  className='nav-upload'>
                <div className='header-search'>
                    <SearchForm />
                </div>
                <Link to="/upload" className='nav-upload-button'>
                    <FontAwesomeIcon icon="cloud-upload-alt" style={{ color: 'white' }} /> Upload
                </Link>
            </div>
 
        </nav>
    );

    const personalGreeting = () => ((
        <nav className="header-nav">
            <span className='login-nav'>
                <Link to='/' className='header-logo'>swimeo</Link>

                <Link to="/watch" className='nav-watch-button'>Watch</Link>
                <Link to="/plans" className='nav-watch-button'>Solutions</Link>
            </span>
            <div className='nav-upload'>
                <button className="button-logout" onClick={logout}>Log Out</button>
                <div className="nav-user-icon">
                    <FontAwesomeIcon icon="swimmer" /> 
                </div>
                <Link to="/upload" className='nav-upload-button'>
                    <FontAwesomeIcon icon="cloud-upload-alt" style={{ color: 'white' }} />Upload
                </Link>
            </div>

        </nav>
    ));


    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;

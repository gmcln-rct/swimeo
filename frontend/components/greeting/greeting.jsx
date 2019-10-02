import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {

    const sessionLinks = () => (
        <nav className="login">
            <ul>

                <li>
                    <Link className="login-signup" to="/signup">Join</Link>

                </li>
                
                <li>
                    <Link className="login-login" to="/login">Login</Link>

                </li>
                



            </ul>

        </nav>
    );

    const personalGreeting = () => (
        <header className="header-group">
            <h2 className="header-name">Welcome {currentUser.first_last_name}</h2>
            <button className="header-logout" onClick={logout}>Log Out</button>
        </header>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

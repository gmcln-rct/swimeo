import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


class Header extends React.Component {
    constructor(props) {
        super(props);
 
    }
// const Header = ({ currentUser, logout, openModal }) => {

    render() {
        return (
            <section className="hero-container">
                <div className="hero-header">
                    Swimeo can help*
                </div>
                <div className='hero-subheader'>
                    *with video collaboration, video distribution and fish mongering.
                </div>
                <div className='hero-buttons'>
                    <button className='hero-buttons-plan'>See plans</button>
                    {/* <button className='hero-buttons-join'>Join for free</button> */}
                    <button className="hero-buttons-join" onClick={() => openModal('signup')}>Join for free</button>

                </div>
            </section>
        )
    }
}

export default Header;
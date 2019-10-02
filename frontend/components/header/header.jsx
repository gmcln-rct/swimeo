import React from 'react';
import { Link, withRouter } from 'react-router';


class Header extends React.Component {
    constructor(props) {
        super(props);
 
    }


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
                    <button className='hero-buttons-join'>Join for free</button>

                </div>
            </section>
        )
    }
}

export default Header;

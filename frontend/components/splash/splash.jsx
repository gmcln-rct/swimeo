import React from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
;
class Splash extends React.Component {
    constructor(props) {
        super(props);
 
    }

    render() {
        return (
            <section className="hero-container">
                <div className="hero-header">
                    Swimeo can help*
                </div>
                {/* <div className='font-not-awesome'>
                    <FontAwesomeIcon icon="check-square" />
                </div> */}
                <div className='hero-subheader'>
                    *with video collaboration, video distribution and fish mongering.
                </div>
                <div className='hero-buttons'>
                    <button className='hero-buttons-plan'>See plans</button>
                    {/* <button className='hero-buttons-join'>Join for free</button> */}

                    <button onClick={this.props.heroSignup} className='hero-buttons-join'>Join for free</button>

                </div>
            </section>
        )
    }
}

export default Splash;

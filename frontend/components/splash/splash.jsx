import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Splash extends React.Component {
    constructor(props) {
        super(props);
 
    }

    render() {
        return (
            <div className='splash-container'>
            <section className="hero-container">
                <div className="hero-header">
                    Swimeo can help*
                </div>

                <div className='hero-subheader'>
                    *with video collaboration, video distribution and swim lessons.
                </div>
                <div className='hero-buttons'>
                    <Link to="/plans">
                        <button className='hero-buttons-plan'>See plans</button>
                    </Link>

                    <button onClick={this.props.heroSignup} className='hero-buttons-join'>Join for free</button>

                </div>
            </section>
            <section className='splash-1'>
                <div className='splash-1-main'>

                        <figure>
                            <video
                                autoPlay
                                loop
                                className='splash-video'
                                src="https://swimeo-seeds.s3.amazonaws.com/swimeo-intro.webm"
                                type='video/webm' 
                                src="https://swimeo-seeds.s3.amazonaws.com/swimeo-intro.mp4"
                                type='video/mp4' />
                        </figure>
                </div>
                <div className='splash-1-sidebar'>
                    <div className='splash-subheader'>Your Brand.</div>
                    <div className='splash-subheader'>Your Videos.</div>
                    <div className='splash-subheader'>Your Swimsuit.</div>
                    <div className='splash-messaging'>The #1 source for premium aquatic video content.</div>
                    <Link to="/plans">
                        <div className='splash-plans'>Learn more   <FontAwesomeIcon icon="arrow-right" /></div>
                    </Link>
                    <div className='splash-messaging'>Plans with custom players from $0.99</div>

                    <div className='splash-buttons'>
                        <Link to="/plans">
                            <button className='splash-buttons-plan'>Compare plans</button>
                        </Link>
                    </div>
                </div>


            </section>
            <section className='splash-2'>

            </section>


            </div>
        )
    }
}

export default Splash;

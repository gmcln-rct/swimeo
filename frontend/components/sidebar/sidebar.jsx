import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="sidebar-container">
                <div className="sidebar-header">
                    Swimeo can help*
                </div>
                <div className='sidebar-subheader'>
                    *with video collaboration, video distribution and fish mongering.
                </div>
                <div className='sidebar-buttons'>
                    <button className='sidebar-buttons-plan'>See plans</button>
                    {/* <button className='sidebar-buttons-join'>Join for free</button> */}

                    <button onClick={this.props.sidebarSignup} className='sidebar-buttons-join'>Join for free</button>

                </div>
            </section>
        )
    }
}

export default Splash;

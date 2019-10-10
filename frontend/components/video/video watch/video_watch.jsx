import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class VideoWatch extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // 
        this.props.receiveVideos();
    }


    render() {


        return (

            <div className='watch-page-container'>
                <section className='watch-page-sidebar'>

                    <Link to="/upload" className='nav-upload-button'>
                        Upload
                    </Link>

                    <div className='watch-sidebar-hr'>
                        <hr/>
                    </div>
 
                    <div className='watch-sidebar-list'>

                        <div className='watch-sidebar-list-item'>
                            <svg viewBox="0 0 20 20">
                                <path d="M17 20h-4c-.6 0-1-.4-1-1v-5H8v5c0 .6-.4 1-1 1H3c-1.1 0-2-.9-2-2V8c0-.3.1-.6.3-.8l8-7c.4-.3.9-.3 1.3 0l8 7c.3.2.4.5.4.8v10c0 1.1-.9 2-2 2zm-3-2h3V8.5l-7-6.1-7 6.1V18h3v-5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v5z"></path>
                            </svg> 
                                <div className='watch-sidebar-list-item-text'>
                                    Home
                                </div>
                        </div>
                        <div className='watch-sidebar-list-item'>
                            <svg viewBox="0 0 20 20">
                                <path d="M14 2v12H2V2h12m0-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" fill="#1a2e3b"></path>

                                <path d="M5.6 5.51c0-.55.39-.77.86-.5l4.28 2.5a.54.54 0 0 1 0 1l-4.28 2.57c-.47.28-.86.07-.86-.49zM16 20a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2v13a2 2 0 0 1-2 2H3a2 2 0 0 0 2 2z" fill="#192e3b" fillRule="evenodd"></path>
                            </svg>  
                            <div className='watch-sidebar-list-item-text'>
                                Videos
                            </div>
                        </div>
                        {/* <span> Videos</span> */}
                    </div>
                    <div className='watch-sidebar-footer'>
                        <h1>Swimeo Pro</h1>
                        <h3>Powerful privacy options and advanced stats.</h3>
                        <Link to="/plans">
                            <button className='splash-buttons-plan'>Upgrade</button>
                        </Link>
                    </div>
                </section>

                <section className='watch-page-main'>
                    <div className='watch-page-main-header'>Videos</div>

                    <div className='watch-page-main-grid'>
                        <div className='watch-main-grid-container'>

                            <div className='watch-page-main-grid-item'>
                                <Link to='/watch/1'><img src="https://swimeo-seeds.s3.amazonaws.com/images/1-waterfall.jpg" className='watch-page-thumb' alt="Video" /></Link>
                                <h1>Waterfall</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to='/watch/2'><img src="https://swimeo-seeds.s3.amazonaws.com/images/2-water-drops.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>Water Drop on Surface</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/3" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/3-tide.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>Tide at night</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/4" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/4-ocean-surface.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>Ocean waves</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/5" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/5-bubbles.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>Fountains of Bellagio</h1>
                            </div>

                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/6" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/6-belaggio-fountain.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>The Fountains of the Bellaggio Rock!</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to='/watch/7'><img src="https://swimeo-seeds.s3.amazonaws.com/images/7-belly-flops.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>Fine Art of the Belly Flop</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/9"><img src="https://swimeo-seeds.s3.amazonaws.com/images/8-marines.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>Marine Pool Training</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/9"><img src="https://swimeo-seeds.s3.amazonaws.com/images/9-marines-2.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>Marine Pool Training 2</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/10" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/10-michael-phelps.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>Michael Phelps Can Swim!</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/11" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/11-pool.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>tranquil pool water</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/12" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/12-rain-street.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>Rain on street</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/13" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/13-rain-window.jpg" className="watch-page-thumb" alt="Video"/></Link>                                
                                <h1>Rain drops falling on a window</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/14" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/14-trout.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>rainbow trout are the real monsters</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/15" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/15-feet-water.jpg" className="watch-page-thumb" alt="Video" /></Link>
                                <h1>ocean soothing feet</h1>
                            </div>
                            <div className='watch-page-main-grid-item'>
                                <Link to="/watch/16" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/16-kids-pool.jpg" className="watch-page-thumb" alt="Video" /></Link>                                
                                <h1>Summer pool time</h1>
                            </div>


                        </div>
                    </div>

                </section>

            </div>
            
        );
    };
};


export default VideoWatch;
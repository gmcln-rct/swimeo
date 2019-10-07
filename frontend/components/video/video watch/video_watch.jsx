import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class VideoWatch extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const id = this.props.match.params.id;
        debugger
        this.props.receiveVideos();
    }



    render() {


        return (

            <div className='watch-page-container'>
                <section className='watch-page-sidebar'>
                    <Link to="/upload" className='nav-upload-button'>
                        Upload
                    </Link>
                <div className='watch-sidebar-list'>
                    <div className='watch-sidebar-list-item'>
                        <FontAwesomeIcon icon='home' /> Home
                    </div>
                    <div className='watch-sidebar-list-item'>
                            <FontAwesomeIcon icon='photo-video' /> Videos
                    </div>
                    {/* <span> Videos</span> */}
                </div>
                <div>
                    Swimeo Pro
                </div>
                <div>
                    Powerful privacy options and advanced stats.
                </div>


                </section>
                <section className='watch-page-main'></section>

            </div>
            
        );
    };
};


export default VideoWatch;
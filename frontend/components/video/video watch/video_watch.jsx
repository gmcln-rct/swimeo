import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class VideoWatch extends React.Component {
    constructor(props) {
        super(props);

    };

    // componentDidMount() {
    //     const id = this.props.match.params.id;
    //     debugger
    //     this.props.showVideo(id);
    // }



    render() {
        debugger
        if (!this.props.video) { return null };

        return (

            <div className='video-watch-page-container'>
                <section className='video-watch-page-sidebar'></section>
                <section className='video-watch-page-main'></section>

            </div>
            
        );
    };
};


export default VideoWatch;
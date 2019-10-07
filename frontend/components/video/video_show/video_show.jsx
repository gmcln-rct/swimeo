import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {
    Player, ControlBar, ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlayToggle,
    PlaybackRateMenuButton,
    VolumeMenuButton} from 'video-react';



class VideoShow extends React.Component {
    constructor(props) {
        super(props);

    };

    componentDidMount() {
        const id = this.props.match.params.id;
        debugger
        this.props.showVideo(id);
    }


    
    render() {
        // const videoId = this.props.video.id;
        debugger
        if (!this.props.video) { return null };

        return (
            <div className='video-unit-wrapper'>
                <div className='video-player-wrapper'>
                    <div className='video-container'>
                        {/* <video
                            controls
                            autoPlay
                            src={this.props.video.video_url} 
                            type='video/webm' />

                        <br/> */}
                    <figure>
                        <video
                            controls
                            autoPlay
                            className='video-player'
                            src="https://swimeo-seeds.s3.amazonaws.com/pool.webm"
                            type='video/webm' />
                    </figure>

                        {/* <Player
                            playsInline
                            className='video-player'
                            src="https://swimeo-seeds.s3.amazonaws.com/pool.webm">

                            <ControlBar autoHide={false} disableDefaultControl  >
                                <PlayToggle />
                                </ControlBar>
                            <VolumeMenuButton vertical />

                            </Player> */}
                    </div>

                    <div className='video-footer'>
                        <div className='video-info'>

                            <div className='video-title'>{this.props.video.title}</div>
                            <br />
                            <div className='video-description'>
                                {this.props.video.description}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    };
};


export default VideoShow;
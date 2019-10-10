import React from 'react';
import { withRouter } from 'react-router';
import VideoLikeComponent from '../video_like/video_like_container';
import CommentIndexComponent from '../video_comment/comment_index_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);

    };

    componentDidMount() {
        const id = this.props.match.params.id;
        
        this.props.showVideo(id);
    }

    
    render() {
        // const videoId = this.props.video.id;
        
        if (!this.props.video) { return null };

        return (
            <div className='video-show-page'>

                <div className='video-unit-wrapper'>
                    <div className='video-player-wrapper'>
                        <div className='video-container'>
                            <video
                                controls
                                autoPlay
                                src={this.props.video.video_url} 
                                type='video/webm' />
                        </div>
                            <br/>
    {/* 
                        Placeholder Video
                        <figure>
                            <video
                                controls
                                autoPlay
                                className='video-player'
                                src="https://swimeo-seeds.s3.amazonaws.com/pool.webm"
                                type='video/webm' />
                        </figure> */}

                            {/* <Player
                                playsInline
                                className='video-player'
                                src="https://swimeo-seeds.s3.amazonaws.com/pool.webm">

                                <ControlBar autoHide={false} disableDefaultControl  >
                                    <PlayToggle />
                                    </ControlBar>
                                <VolumeMenuButton vertical />

                                </Player> */}


                        <div className='video-footer'>
                            <div className='video-info'>

                                <div className='video-title'>{this.props.video.title}</div>
                                <br />
                                <div className='video-description'>
                                    {this.props.video.description}
                                </div>
                                <div>
                                    <VideoLikeComponent />
                                </div>
                                <br/>
                                <div>
                                    <CommentIndexComponent />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        
           
        );
    };
};


export default VideoShow;
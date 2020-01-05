import React from 'react';
import { Link } from 'react-router-dom';

import VideoLikeComponent from '../video_like/video_like_container';
import CommentIndexComponent from '../video_comment/comment_index_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const id = this.props.match.params.id;

        this.props.showVideo(id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {

            this.props.showVideo(this.props.match.params.id);
        }
    }

    render() {

        if (!this.props.video) { return null };

        return (
            <div className='video-show-page'>

                <div className='video-unit-wrapper'>
                        <div className='video-container'>
                            <span className="centered">swimeo</span>
                            
                            <video
                                controls
                                autoPlay
                                src={this.props.video.video_url}
                                type='video/webm' />
                        </div>


                        <div className='video-footer'>
                            <div className='video-footer-container'>

                                <div className='video-info'>

                                    <div className='video-title'>{this.props.video.title}</div>
                                    <br />
                                    <div className='video-description'>
                                        {this.props.video.description}
                                    </div>
                                    <div>
                                        <VideoLikeComponent />
                                    </div>
                                    <br />
                                    <div>
                                        <CommentIndexComponent />
                                    </div>
                                </div>

                                <div className='video-playlist'>
                                    <div className='video-playlist-item'>
                                        <span><Link to="/watch/5" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/5-bubbles.jpg" className="playlist-thumb-1" alt="Video" /></Link></span>
                                        <span>
                                            <h1>Bubbles</h1>
                                        </span>
                                    </div>
                                    <div className='video-playlist-item'>
                                        <span><Link to="/watch/16" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/16-kids-pool.jpg" className="playlist-thumb" alt="Video" /></Link></span>
                                        <span>
                                            <h1>Summer pool time</h1>
                                        </span>
                                    </div>
                                    <div className='video-playlist-item'>
                                        <span><Link to="/watch/11" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/11-pool.jpg" className="playlist-thumb" alt="Video" /></Link></span>
                                        <span>
                                            <h1>tranquil pool water</h1>
                                        </span>
                                    </div>
                                    <div className='video-playlist-item'>
                                        <span><Link to="/watch/10" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/10-michael-phelps.jpg" className="playlist-thumb" alt="Video" /></Link></span>
                                        <span>
                                            <h1>Michael Phelps swims!</h1>
                                        </span>
                                    </div>
                                    <div className='video-playlist-item'>
                                        <span><Link to="/watch/12" ><img src="https://swimeo-seeds.s3.amazonaws.com/images/12-rain-street.jpg" className="playlist-thumb" alt="Video" /></Link></span>
                                        <span>
                                            <h1>Rainy Streets</h1>
                                        </span>
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
import React from 'react';
import { Link } from 'react-router';

class VideoGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const videos = this.props.videos;
        return (
            <div className="video-grid">
                {Object.keys(videos).map(id => {
                    let video = videos[id];

                    return (
                        <div className='watch-page-main-grid-item'>
                            <Link key={id} to={`/watch/${video.id}`} > <img src={video.image_url} className='watch-page-thumb' alt="Video" /></Link>
                            <h1>{video.title}</h1>
                        </div>
                    )
                }
            </div>
        )
    }
}
}

export default VideoGrid;
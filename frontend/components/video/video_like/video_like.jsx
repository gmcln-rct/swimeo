import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class VideoLikeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.updateLike = this.updateLike.bind(this);
    }

 
// HANDLE LIKE CLICK
    updateLike(e) {
        const {currentUserId} = this.props;
        if (this.props.likes.includes(currentUserId)) {
            this.props.removeLike(this.props.video.id );
        } else if (currentUserId) {
            this.props.addLike({ user_id: currentUserId, video_id: this.props.video.id });
        }
    }
    
    render() {
        
        const likeButtonClass = this.props.isLiked ? 'button-liked' : 'button-not-liked';
        const isLoggedIn = this.props.currentUserId ? 'likeLoggedIn' : 'likeNotLoggedIn';

        return (
                <div className={likeButtonClass}
                onClick={this.updateLike} >
                    <FontAwesomeIcon icon="heart" /> {this.props.likes.length}

                 <span className={isLoggedIn}> Must be logged in to like video</span>

                </div>



   

        );
    }

};


export default VideoLikeComponent;


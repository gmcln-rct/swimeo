import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class VideoLikeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.updateLike = this.updateLike.bind(this);
    }

 
    componentDidUpdate(prevProps) {
        if (this.props.currentUser.id !== prevProps.userID) {
            this.props.getLikes(this.props.video.id); //????
        }
    }


// MAIN REFERENCE
    updateLike(e) {
        e.preventDefault();

        // if (this.props.likes.includes(this.props.currentUserId)) {
        // // remove like
        //     this.props.removeLike({ video_id: this.props.currentVideo.id });
        // } else if (this.props.currentUserId) {
        // // add like
        //     this.props.addLike({ video_id: this.props.currentVideo.id });
        // }

        if (this.props.liked_by_current_user) {
            this.props.removeLike({ video_id: this.props.video.id });
        } else if (this.props.currentUserId) {
            this.props.addLike({ video_id: this.props.video.id });
        }
    }
    

    render() {

        const likeButtonClass = this.props.isLiked ? 'button-liked' : 'button-not-liked';

        let likeButtonAction;
        if (this.props.video.liked_by_current_user) {
             likeButtonAction = () => removeVideo(this.props.video.id);
        }

        return (
            <div className="likeButtonClass"
                onClick={this.updateLike(() => likeButtonAction(video.id))} >
                    <FontAwesomeIcon icon="heart" /> {video.likes}
            </div>
        );
    }

};


export default VideoLikeComponent;
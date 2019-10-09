import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class VideoLikeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.updateLike = this.updateLike.bind(this);
    }

 
    // componentDidUpdate(prevProps) {
    //     if (this.props.currentUser.id !== prevProps.userID) {
    //         this.props.getLikes(this.props.video.id); //????
    //     }
    // }


// MAIN REFERENCE
    updateLike(e) {
        // e.preventDefault();

        // if (this.props.likes.includes(this.props.currentUserId)) {
        // // remove like
        //     this.props.removeLike({ video_id: this.props.currentVideo.id });
        // } else if (this.props.currentUserId) {
        // // add like
        //     this.props.addLike({ video_id: this.props.currentVideo.id });
        // }
        debugger
        const {currentUserId} = this.props;
        if (this.props.likes.includes(currentUserId)) {
            this.props.removeLike(this.props.video.id );
        } else if (currentUserId) {
            debugger
            this.props.addLike({ user_id: currentUserId, video_id: this.props.video.id });
        }
    }
    

    render() {

        const likeButtonClass = this.props.isLiked ? 'button-liked' : 'button-not-liked';

        let likeButtonAction;

        if (this.props.likes.includes(this.props.currentUserId)) {
             likeButtonAction = () => removeVideo(this.props.video.id);
        }

        return (
            <div className="likeButtonClass"
                onClick={this.updateLike} >
                    <FontAwesomeIcon icon="heart" /> {this.props.likes.length}
            </div>
        );
    }

};


export default VideoLikeComponent;

// (() => likeButtonAction(video.id)
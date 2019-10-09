import { connect } from 'react-redux';
import {removeLike, addLike} from '../../../actions/like_actions';
import VideoLikeComponent from './video_like';


// VIDEO LIKE CONTAINER

const msp = (state, ownProps) => {
    // NOTE: Add boolean to determine if video has been liked
    const isLiked = state.entities.like === {};
    const likes = Object.values(state.entities.like).map(like => like.user_id);
    let currentUserId = state.session.id || null;
    const video = state.entities.videos[currentUserId];
    // const likes = Object.values(state.entities.likes).map(like => like.user_id);
    // const video = state.entities.videos[ownProps.match.params.id];

    debugger
    // const video = state.entities.videos[ownProps.match.params.videoId];

    return ({
        currentUserId,
        video,
        likes,
        isLiked,
    });
};

const mdp = dispatch => {

    return ({

        removeLike: (id) => dispatch(removeLike(id)),
        addLike: (like) => dispatch(addLike(like))
    });
};

export default connect(msp, mdp)(VideoLikeComponent);
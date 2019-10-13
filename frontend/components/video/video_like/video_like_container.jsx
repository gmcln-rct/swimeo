import { connect } from 'react-redux';
import {removeLike, addLike} from '../../../actions/like_actions';
import VideoLikeComponent from './video_like';
import {withRouter} from 'react-router-dom';


// VIDEO LIKE CONTAINER

const msp = (state, ownProps) => {

    const isLiked = state.entities.like !== null;

    // const likes = Object.values(state.entities.like).map(like => like.user_id);
    const currentUserId = state.session.id || null;

    const likes = state.entities.like ? Object.values(state.entities.like).map(like => like.user_id) : {};

    const video = state.entities.videos[ownProps.match.params.id];
    // const video = currentUserId ? state.entities.videos[currentUserId] : null;


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

export default withRouter(connect(msp, mdp)(VideoLikeComponent));
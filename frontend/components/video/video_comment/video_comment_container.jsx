import { connect } from 'react-redux';
import { removeComment, addComment } from '../../../actions/comment_actions';
import VideoCommentComponent from './video_comment';
import { withRouter } from 'react-router-dom';


// VIDEO COMMENT CONTAINER

const msp = (state, ownProps) => {

    const isCommented = state.entities.comment !== null;
    const currentUserId = state.session.id || null;
    const comments = state.entities.comment ? Object.values(state.entities.comment).map(comment => comment.user_id) : {};
    const video = state.entities.videos[ownProps.match.params.id];

    return ({
        currentUserId,
        video,
        comments,
        isCommented
    });
};

const mdp = dispatch => {

    return ({
        removeComment: (id) => dispatch(removeComment(id)),
        addComment: (comment) => dispatch(addComment(comment))
    });
};

export default withRouter(connect(msp, mdp)(VideoCommentComponent));
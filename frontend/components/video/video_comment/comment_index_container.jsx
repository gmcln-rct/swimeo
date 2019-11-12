import { connect } from 'react-redux';
import { deleteComment, addComment } from '../../../actions/comment_actions';
import CommentIndexComponent from './comment_index';
import { withRouter } from 'react-router-dom';


// VIDEO COMMENT CONTAINER

const msp = (state, ownProps) => {
    
    const hasComments = state.entities.comments !== null;
    const currentUserId = state.session.id || null;
    const comments = state.entities.comments ? Object.values(state.entities.comments) : [];
    const video = state.entities.videos[ownProps.match.params.id];

    return ({
        currentUserId,
        video,
        comments,
        hasComments
    });
};

const mdp = dispatch => {

    return ({
        addComment: (comment) => dispatch(addComment(comment)),
        deleteComment: (id) => dispatch(deleteComment(id))
    });
};

export default withRouter(connect(msp, mdp)(CommentIndexComponent));
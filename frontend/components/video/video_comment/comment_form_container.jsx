import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CommentForm from './comment_form';
import {addComment, removeComment} from '../../../actions/comment_actions';

// COMMENT FORM CONTAINER

const msp = (state, ownProps) => {
    
    const video = state.entities.videos[ownProps.match.params.id] || {};
    const currentUserId = state.session ? state.session.id : null;
    
    return {
        currentUserId, 
        video
    };
};

const mdp = (dispatch) => {
    return {
        addComment: (comment) => dispatch(addComment(comment)),
        removeComment: (id) => dispatch(removeComment(id))

    };
};

export default withRouter(connect(msp, mdp)(CommentForm));
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentItem from './comment_item';
import { removeComment } from '../../../actions/comment_actions';



// COMMENT ITEM CONTAINER

const msp = (state, ownProps) => {

    const video = state.entities.videos[ownProps.match.params.id] || {};
    const currentUserId = state.session ? state.session.id : null;
    
    return {
        currentUserId,
        video
    };
};

const mdp = dispatch => {

    return {
        removeComment: (id) => dispatch(removeComment(id))
    };
};

export default withRouter(connect(msp, mdp)(CommentItem));
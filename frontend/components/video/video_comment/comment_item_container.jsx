import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentItem from './comment_item';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// COMMENT ITEM CONTAINER

const msp = state => {
    debugger
    
    const comment = this.props.comment;
    const first_last_name = state.entities.users[ownProps.comment.user_id].first_last_name;
    return {
        first_last_name,
        comment
    };
};

const mdp = dispatch => {


    return {
        addComment: (comment) => dispatch(addComment(comment)),
        removeComment: (id) => dispatch(removeComment(id))
    };
};

export default withRouter(connect(msp, mdp)(CommentItem));
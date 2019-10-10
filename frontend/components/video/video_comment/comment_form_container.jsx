import { connect } from 'react-redux';
import CommentForm from './comment_form';
import {addComment} from '../../../actions/comment_actions' 

const msp = (state, myProp) => {

    const comments = Object.values(state.entities.comments);

    return {
        comments: Object.values(state.entities.comments).filter(comment => {
            return comment.video_id === myProp.videoId
        }),
    };
};

const mdp = (dispatch) => {
    return {
        removeComment: (id) => dispatch(removeComment(id)),
        addComment: (comment) => dispatch(addComment(comment))
    };
};

export default connect(msp, mdp)(CommentForm);
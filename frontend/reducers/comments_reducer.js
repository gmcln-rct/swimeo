
import {RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_VIDEO} from '../actions/video_actions';


const commentsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState;


        case RECEIVE_VIDEO:
            return action.video.comments;

        default:
            return oldState;
    }
}

export default commentsReducer;
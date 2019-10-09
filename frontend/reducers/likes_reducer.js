import {RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE} from '../actions/like_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';
import merge from 'lodash/merge';


const likesReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    
    switch (action.type) {
        case RECEIVE_ALL_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case REMOVE_LIKE:
            debugger
            delete newState[action.likeId];
            return newState;
        case RECEIVE_VIDEO:
            debugger
            return action.video.likes;
        default:
            return oldState;
    }
}

export default likesReducer;


// Video show jbuilder

// json.likes do
//     @video.likes.each do | like |
//         json.set! like.id do
//     json.extract! like, : user_id, : video_id
// end
// end
// end
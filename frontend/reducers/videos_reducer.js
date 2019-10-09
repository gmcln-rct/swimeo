import { RECEIVE_VIDEO, REMOVE_VIDEO, RECEIVE_VIDEOS} from '../actions/video_actions';
import {REMOVE_LIKE} from '../actions/like_actions';

import { merge } from 'lodash';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_VIDEOS:
            debugger
            return merge({}, state, action.videos);
        case RECEIVE_VIDEO:
            debugger
            const {video} = action.video

            return merge({}, state, { [video.id]: video });
        case REMOVE_VIDEO:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        case REMOVE_LIKE:
            debugger
            return state;x
        default:
            return state;
    }
};

export default videosReducer;
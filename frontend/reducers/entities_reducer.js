import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import videosReducer from './videos_reducer';
import likesReducer from './likes_reducer';
import commentsReducer from './comments_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    like: likesReducer,
    comments: commentsReducer,
    search: searchReducer
});

export default entitiesReducer;
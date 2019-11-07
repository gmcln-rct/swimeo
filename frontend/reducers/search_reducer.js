import { RECEIVE_SEARCH_VIDEOS } from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SEARCH_VIDEOS:
            let newState = merge({}, action.results);
            return newState;
        default:
            return state;
    }
};

export default SearchReducer;

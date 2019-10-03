import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

import { CLOSE_MODAL } from '../actions/modal_actions';

import merge from 'lodash/merge';

const _nullUser = {
    currentUser: null,
    errors: []
};

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};
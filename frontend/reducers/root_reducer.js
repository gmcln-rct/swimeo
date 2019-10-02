import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
    entities,
    errors,
    session
});

export default rootReducer;

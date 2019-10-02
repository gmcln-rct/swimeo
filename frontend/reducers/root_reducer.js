import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';

// For Modals/errors
import errors from './errors_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    ui,
    errors
});

export default rootReducer;

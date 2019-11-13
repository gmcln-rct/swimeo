import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { deleteComment } from './actions/comment_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    // Persist Current User
    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entities: {
                users: {
                    [id]: currentUser
                }
            },
            session: { id }
            };
        store = configureStore(preloadedState);

        // Clean up after ourselves so we don't accidentally use the
        // global currentUser instead of the one in the store
        delete window.currentUser;

    } else {
        store = configureStore();
    }
    //TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.deleteComment = deleteComment;
    
    ReactDOM.render(<Root store={store} />, root);
});
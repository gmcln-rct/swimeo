import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


// Normal actions
const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const receiveAllComments = () => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});


export const addComment = comment => dispatch => {
    return CommentAPIUtil.addComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
};

export const deleteComment = id => dispatch => {
    return CommentAPIUtil.deleteComment(id)
        .then(comment => dispatch(removeComment(id)))
}



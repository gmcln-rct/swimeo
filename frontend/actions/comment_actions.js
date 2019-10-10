import * as CommentsAPIUtil from '../util/comment_api_util';

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

const deleteComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});


// Thunk actions
export const getComments = (video_id) => {
    return CommentsAPIUtil.receiveAllComments(video_id)
        .then(comments => dispatch(receiveAllComments(video_id)))
};

export const addComment = comment => dispatch => {
    return CommentsAPIUtil.addComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
};

export const removeComment = id => dispatch => (
    CommentsAPIUtil.removeComment(id)
        .then(comment => dispatch(deleteComment(comment.id)))
);
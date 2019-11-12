//RECEIVE ALL COMMENTS FOR SPECIFIC VIDEO
export const receiveAllComments = (video_id) => {
    return $.ajax({
        type: `GET`,
        url: `/api/videos`,
    });
};

// RECEIVE ONE COMMENT <- Needed?
export const receiveComment= (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/videos/${id}`,
    });
};

export const addComment = (comment) => {
    return $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: { comment }
    });
};


export const deleteComment = commentId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    });
};
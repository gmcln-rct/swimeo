//RECEIVE ALL LIKES FOR SPECIFIC VIDEO
export const receiveAllLikes= (video_id) => {
    return $.ajax({
        type: `GET`,
        url: `/api/videos`,
    });
};

// RECEIVE ONE LIKE <- may not be needed
export const receiveLike = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/videos/${id}`,
    })
}

export const addLike = like => (
    $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: { like }
    })
);

export const removeLike = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/likes/${id}`
    })
);
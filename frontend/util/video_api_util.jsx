// Fetch Videos (PLURAL)
export const receiveVideos = () => {
    return $.ajax({
        type: `GET`,
        url: `/api/videos`,
    });
};

// Fetch Video (ONE)
export const receiveVideo = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/videos/${id}`,
    })
}

// Create New Video
export const uploadVideo = (video) => {
    return $.ajax({
        method: 'POST',
        url: `api/videos/${video.id}`,
        data: { video }
    })
}


// Update video
export const updateVideo = (video) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/videos/${video.id}`,
        data: { video }
    })
}

// Delete Video
export const deleteVideo = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/videos/${id}`,
    })
}


// Fetch Videos (PLURAL)
export const fetchVideos = () => {
    return $.ajax({
        type: `GET`,
        url: `/api/videos`,
    });
};

// Fetch Video (ONE)
export const fetchVideo = (id) => {
    return $.ajax({
        type: `GET`,
        url: `/api/videos/${id}`,
    });
};


// Create New Video
export const createVideo = (video) => {
    return $.ajax({
        type: `POST`,
        url: `/api/videos`,
        data: video,
    });
};


// Update video
export const updateVideo = (video) => {
    return $.ajax({
        type: `PATCH`,
        url: `/api/videos/${video.id}`,
        data: { video },
    });
};

// Delete Video
export const deleteVideo = (id) => {
    return $.ajax({
        type: `DELETE`,
        url: `/api/videos/${id}`,
    });
};



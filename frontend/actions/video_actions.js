export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const FETCH_VIDEO = "FETCH_VIDEO";
export const CREATE_VIDEO = "CREATE_VIDEO";
export const UPDATE_VIDEO = "UPDATE_VIDEO";


export const fetchVideos = () => ({
    type: FETCH_VIDEOS
})

export const fetchVideo = id => ({
    type: FETCH_VIDEO,
    id
})

export const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
})

export const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
})

export const createVideo = video => ({
    type: CREATE_VIDEO,
    video
})

export const updateVideo = video => ({
    type: UPDATE_VIDEO,
    video
})

export const deleteVideo = video => ({
    type: UPDATE_VIDEO,
    video
})
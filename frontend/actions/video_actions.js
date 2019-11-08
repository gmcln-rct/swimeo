import * as VideoApiUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const UPLOAD_VIDEO = "UPLOAD_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";


// Normal Actions
export const receiveVideos = (videos) => ({
    type: RECEIVE_VIDEOS,
    videos
});

export const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
});

export const removeVideo = (id) => ({
    type: REMOVE_VIDEO,
    id
});


// Smart Actions

export const showVideos = () => dispatch => {
    return VideoApiUtil.receiveVideos()
        .then(videos => dispatch(receiveVideos(videos)));
};

export const showVideo = (id) => dispatch => {
    return VideoApiUtil.receiveVideo(id)
        .then(video => dispatch(receiveVideo(video)));
};

export const uploadVideo = (video) => dispatch => {
    return VideoApiUtil.uploadVideo(video)
        .then(video => dispatch(receiveVideo(video)));
};

export const deleteVideo = (id) => dispatch => {
    return VideoApiUtil.deleteVideo(id)
        .then(id => dispatch(removeVideo(id)));
};

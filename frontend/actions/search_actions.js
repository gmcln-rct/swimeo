export const SEARCH_QUERY = "SEARCH_QUERY";
export const RECEIVE_SEARCH_VIDEOS = "RECEIVE_SEARCH_VIDEOS";

export const searchQuery = query => ({
    type: SEARCH_QUERY,
    query
})

export const receiveSearchVideos = videos => ({
    type: RECEIVE_SEARCH_VIDEOS,
    videos
})

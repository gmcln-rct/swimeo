export const SEARCH_QUERY = "SEARCH_QUERY";
export const RECEIVE_SEARCH_VIDEOS = "RECEIVE_SEARCH_VIDEOS";

export const searchQuery = query => ({
    type: SEARCH_QUERY,
    query
});

export const receiveSearchVideos = results => ({
    type: RECEIVE_SEARCH_VIDEOS,
    results
});


export const searchVideoResults = (query_string) => dispatch => (
    ProductAPIUtil.searchVideoResults(query_string).then(results => (
        dispatch(receiveSearchVideos(results))
    ))
);

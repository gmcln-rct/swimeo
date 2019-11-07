import * as SearchAPIUtil from '../util/search_api_util';


// export const SEARCH_QUERY = "SEARCH_QUERY";
export const RECEIVE_SEARCH_VIDEOS = "RECEIVE_SEARCH_VIDEOS";

// export const searchQuery = query => ({
//     type: SEARCH_QUERY,
//     query
// });

export const receiveSearchVideos = results => ({
    type: RECEIVE_SEARCH_VIDEOS,
    results
});


// FOR SEARCH RESULTS PAGE
export const searchVideos = (query) => dispatch => (
    SearchAPIUtil.searchVideos(query).then(results => (
        dispatch(receiveSearchVideos(results))
    ))
);

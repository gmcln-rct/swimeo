// export const searchQuery = (query, success) => {
//     $.ajax({
//         url: `api/videos?search=${query}`,
//         success
//     })
// };


export const searchVideos = (query) => {
    return $.ajax({
        method: 'GET',
        url: `api/videos/${query}/search`
    })
};

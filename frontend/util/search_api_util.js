export const searchQuery = (query, success) => {
    $.ajax({
        url: `api/videos?search=${query}`,
        success
    })
};


export const searchVideoResults = (query) => {
    return $.ajax({
        method: 'GET',
        url: `api/videos/search`,
        data: { query }
    })
};

export const deleteVideo = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/videos/${id}`,
    })
}


export const searchQuery = (query, success) => {
    $.ajax({
        url: `api/videos?search=${query}`,
        success
    })
}

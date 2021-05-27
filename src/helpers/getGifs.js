export const getGifts = async (category, limit) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=2k5QHQccKC7CXWuApE4wQJrcEMlsbQ8c`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
}
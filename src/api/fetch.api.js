const BASE_URL = "https://wavecode.herokuapp.com";
const GET_TAGS = `${BASE_URL}/tags`;
const GET_PLAYLISTS = `${BASE_URL}/playlists`;
const GET_COMMENTS = `${BASE_URL}/comments`;
const POST_COMMENTS = `${BASE_URL}/comments`;

export const postComment = async(form) => {
    const request = await fetch(POST_COMMENTS, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(form),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*',
        },
    });
    const response = await request.json();
    if (!request.ok) {
        throw new Error("Error en la petición", response.message);
    }
    window.location.replace("/comments");
    return response;
};

export { GET_TAGS, GET_PLAYLISTS, GET_COMMENTS, BASE_URL };
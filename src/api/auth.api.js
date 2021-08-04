const BASE_URL = "https://wavecode.herokuapp.com"; // Aqui va la URL de Node Server
const registerUrl = `${BASE_URL}/user/register`;
const loginUrl = `${BASE_URL}/user/login`;
const logoutUrl = `${BASE_URL}/user/logout`;
const checkSessionUrl = `${BASE_URL}/user/check-session`;


export const registerApi = async(form) => {
    const request = await fetch(registerUrl, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(form),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*',
        },
    });
    const response = await request.json();
    if (!request.ok) {
        throw new Error("Error en la petición", response.message);
    }
    return response;
};

export const loginApi = async(form) => {
    const request = await fetch(loginUrl, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(form),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*',
        },
    });
    const response = await request.json();

    if (!request.ok) {
        throw new Error("Error en la petición", response.message);
    }
    return response;
};

export const checkSession = async() => {
    const request = await fetch(checkSessionUrl, {
        method: "GET",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*',
        },
    });

    const response = await request.json();

    return response;
};

export const logout = async() => {
    const request = await fetch(logoutUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*',
        },
        credentials: "include",
    });

    const response = await request.json();

    window.location.replace('/');
    return response;
};
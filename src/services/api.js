import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACK_URL;

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

async function getHashtags(token) {
    const config = createConfig(token);
    const hashtags = await axios.get(`${BASE_URL}hashtags`, config);
    return hashtags;
}

async function getUserInfos(token) {
    const config = createConfig(token);
    const promise = await axios.get(`${BASE_URL}user`, config);
    return promise;
}

async function signOut(token) {
    const config = createConfig(token);
    const user = await axios.delete(`${BASE_URL}sign-out`, config);
    return user;
}

async function postHashtags(token, hashtags) {
    const config = createConfig(token);
    const promise = await axios.post(
        `${BASE_URL}hashtags`,
        { hashtags },
        config
    );
    return promise;
}

async function toggleLike(postId, token){
    const config = createConfig(token);
    const promise = await axios.post(`${BASE_URL}like/${postId}`,{}, config);
    return promise;
};


const api = {
    getHashtags,
    getUserInfos,
    signOut,
    toggleLike,
    postHashtags
};

export default api;

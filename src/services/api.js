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

const api = {
    getHashtags,
};

export default api;

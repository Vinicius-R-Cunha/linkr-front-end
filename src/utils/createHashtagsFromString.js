import api from "../services/api";

export default async function createHashtagsFromString(text, token) {
    const hashtagsMatched = text.match(/#[a-z0-9_]+/g);
    if (hashtagsMatched === null) {
        return;
    }
    const hashtags = hashtagsMatched.map((hashtag) => hashtag.replace("#", ""));
    try {
        await api.postHashtags(token, hashtags);
    } catch (error) {
        console.log("Erro na createHashtagsFromString");
    }
}

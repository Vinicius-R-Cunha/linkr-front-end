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
  const promise = await axios.post(`${BASE_URL}hashtags`, { hashtags }, config);
  return promise;
}

async function toggleLike(postId, token) {
  const config = createConfig(token);
  const promise = await axios.post(`${BASE_URL}like/${postId}`, {}, config);
  return promise;
}

async function getPosts(route, token) {
  const config = createConfig(token);
  const promise = await axios.get(`${BASE_URL}${route}`, config);
  return promise;
}

async function editOnePost(postId, body, token) {
  const config = createConfig(token);
  const promise = await axios.put(`${BASE_URL}posts/${postId}`, body, config);
  return promise;
}

async function publishPost(body, token) {
  const config = createConfig(token);
  const promise = await axios.post(`${BASE_URL}posts`, body, config);
  return promise;
}

async function getUsers(token) {
  const config = createConfig(token);
  const promise = await axios.get(`${BASE_URL}users`, config);
  return promise;
}

async function getComments(token, postId) {
  const config = createConfig(token);
  const promise = await axios.get(`${BASE_URL}comments/${postId}`, config);
  return promise;
}

async function postComment(token, body) {
  const config = createConfig(token);
  await axios.post(`${BASE_URL}comments/`, body, config);
}

async function checkFollowers(token) {
  const config = createConfig(token);
  const promise = await axios.get(`${BASE_URL}userfollows`, config);
  return promise;
}

async function publishRepost(postId, token) {
  const config = createConfig(token);
  const promise = await axios.post(`${BASE_URL}repost/${postId}`, {}, config);
  return promise;
}

async function toggleFollow(visitedUserId, token) {
  const config = createConfig(token);
  const promise = await axios.post(
    `${BASE_URL}followers/${visitedUserId}`,
    {},
    config
  );
  return promise;
}

async function verifyIfFollow(visitedUserId, token) {
  const config = createConfig(token);
  const promise = await axios.get(
    `${BASE_URL}followers/${visitedUserId}`,
    config
  );
  return promise;
}

const api = {
  getHashtags,
  getUserInfos,
  signOut,
  toggleLike,
  postHashtags,
  getPosts,
  editOnePost,
  publishPost,
  getUsers,
  getComments,
  postComment,
  checkFollowers,
  publishRepost,
  toggleFollow,
  verifyIfFollow,
};

export default api;

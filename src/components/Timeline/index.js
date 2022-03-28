import {
  PostsContainer,
  Post
} from "./style";

import Publish from "../Publish";
import SearchBarMobile from "../SearchBarMobile";
import ConfirmationModal from "../ConfirmationModal";
import Likes from "../Likes";
import PostContent from "../PostContent";

import { useCallback, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


export default function Timeline({ showPublish, route, mainTitle, hashtags, setHashtags, setIsValidUser }) {

  const { token, setImage, setName, setId } = useContext(UserContext);

  const navigate = useNavigate();

  const [postsArray, setPostsArray] = useState();
  const [postsState, setPostsState] = useState("loading");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postId, setPostId] = useState();

  const renderPage = useCallback(
    async (route) => {
      try {
        const posts = await api.getPosts(route, token);
        const hashtagsApi = await api.getHashtags(token);

        setPostsArray(posts.data);

        if (posts?.data.length === 0) {
          setPostsState("empty");
        } else {
          setPostsState("full");
        }

        setHashtags([...hashtagsApi.data]);
        setIsValidUser(true);
      } catch (error) {
        setPostsState("error");
        console.log(error.response);
      }
    },
    [token, setHashtags, setIsValidUser, hashtags]
  );

  const getUser = useCallback(async () => {
    try {
      const response = await api.getUserInfos(token);
      setImage(response?.data.image);
      setName(response?.data.name);
      setId(response?.data.id);
    } catch (error) {
      console.log(error);
    }
  }, [setId, setImage, setName, token]);

  useEffect(() => {
    if (token) {
      getUser();
      renderPage(route);
    } else {
      navigate("/");
    }
  }, [navigate, renderPage, token, route, getUser]);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <PostsContainer>

        <ToastContainer />
        <SearchBarMobile />
        <ConfirmationModal
          postId={postId}
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          renderPage={renderPage}
          route={route}
        />

        <h1 className="timeline-title">{mainTitle}</h1>

        {showPublish && <Publish renderPage={renderPage} route={route} />}

        {postsState === "full" &&
          postsArray.map((post) => {
            return (
              <Post key={post?.id}>

                <Likes
                  post={post}
                  renderPage={renderPage}
                  route={route}
                />

                <PostContent
                  post={post}
                  renderPage={renderPage}
                  route={route}
                  openModal={openModal}
                  setPostId={setPostId}
                />

              </Post>
            );
          })}
        {postsState === "loading" && (
          <p className="loading-message">Loading...</p>
        )}
        {postsState === "empty" && (
          <p className="get-error-message">There are no posts yet</p>
        )}
        {postsState === "error" && (
          <p className="get-error-message">
            An error occured while trying to fetch the posts, please
            refresh the page
          </p>
        )}
      </PostsContainer>
    </>
  );
}


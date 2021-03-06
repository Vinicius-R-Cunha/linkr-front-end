import { PostsContainer, Post, ContainerComments, Repost, FollowButton } from "./style";

import Publish from "../Publish";
import SearchBarMobile from "../SearchBarMobile";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import RepostConfirmationModal from "../RepostConfirmationModal";
import PostLeftContent from "../PostLeftContent";
import PostContent from "../PostContent";
import NewPostsNotificationBar from "../NewPostsNotificationBar";
import ScrollContainer from "../ScrollContainer";
import Swal from "sweetalert2";

import { useCallback, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../contexts/UserContext";
import CommentsContext from "../../contexts/CommentsContext";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import ViewComments from "../ViewComments";
import PostsContext from "../../contexts/PostsContext";
import { TiArrowSync } from "react-icons/ti";
import reactDom from "react-dom";
import { FaGratipay } from "react-icons/fa";
export default function Timeline({
  showPublish,
  route,
  mainTitle,
  hashtags,
  setHashtags,
  setIsValidUser,
  visitedUserId,
}) {
  const { token, setImage, setName, setId } = useContext(UserContext);
  const { comments } = useContext(CommentsContext);
  const { posts } = useContext(PostsContext);
  const navigate = useNavigate();

  const [postsArray, setPostsArray] = useState([]);
  const [postsState, setPostsState] = useState("loading");
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [repostModalIsOpen, setRepostModalIsOpen] = useState(false);
  const [postId, setPostId] = useState();
  const [followedUser, setFollowedUser] = useState();
  const [disabledButton, setDisabledButton] = useState(false);
  const [currentPost, setCurrentPost] = useState();
  const [totalPosts, setTotalPosts] = useState([]);

  const renderPage = useCallback(
    async (route) => {
      try {
        const followers = await api.checkFollowers(token);
        const posts = await api.getPosts(route, token);
        const hashtagsApi = await api.getHashtags(token);
        const allPosts = await api.getPosts(route + "?noLimit=true", token);
        setTotalPosts(allPosts.data);
        setPostsArray(posts.data);

        if (posts?.data.length !== 0) {
          setPostsState("full");
        } else if (followers?.data.length === 0) {
          setPostsState("no-followers");
        } else {
          setPostsState("empty");
        }

        setHashtags([...hashtagsApi.data]);
        setIsValidUser(true);
      } catch (error) {
        setPostsState("error");
      }
    },
    // eslint-disable-next-line
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
      verifyIfFollow();
      renderPage(route);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [token, route, getUser, followedUser]);

  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
  }

  function openRepostModal() {
    setRepostModalIsOpen(true);
  }

  function closeRepostModal() {
    setRepostModalIsOpen(false);
  }

  async function toggleFollow() {
    try {
      if (visitedUserId) {
        setDisabledButton(true);
        await api.toggleFollow(visitedUserId, token);
        const response = await api.verifyIfFollow(visitedUserId, token);
        setFollowedUser(response?.data);
        setDisabledButton(false);
      }
    } catch (error) {
      return Swal.fire({
        icon: "error",
        title: "Ops...",
        text: "N??o foi poss??vel realizar esta a????o! Tente mais tarde!",
      });
    }
  }

  async function verifyIfFollow() {
    try {
      if (visitedUserId) {
        const response = await api.verifyIfFollow(visitedUserId, token);
        setFollowedUser(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <PostsContainer>
        <ToastContainer />
        <SearchBarMobile />
        <DeleteConfirmationModal
          postId={postId}
          closeModal={closeDeleteModal}
          modalIsOpen={deleteModalIsOpen}
          renderPage={renderPage}
          route={route}
        />

        <RepostConfirmationModal
          postId={postId}
          closeModal={closeRepostModal}
          modalIsOpen={repostModalIsOpen}
          renderPage={renderPage}
          route={route}
          currentPost={currentPost}
        />

        {mainTitle.includes("'s posts") ? (
          <div className="usernameAndFollowButton">
            <h1 className="timeline-title">{mainTitle}</h1>

            {disabledButton ? (
              <FollowButton
                className="followButton"
                disabled={disabledButton}
                onClick={toggleFollow}
              >
                {" "}
                loading...{" "}
              </FollowButton>
            ) : (
              <FollowButton
                className="followButton"
                disabled={disabledButton}
                onClick={toggleFollow}
                followeduser={followedUser}
              >
                {" "}
                {followedUser}{" "}
              </FollowButton>
            )}
          </div>
        ) : (
          <h1 className="timeline-title">{mainTitle}</h1>
        )}

        {showPublish && <Publish renderPage={renderPage} route={route} />}

        {route === "posts" ? (
          <NewPostsNotificationBar
            route={route}
            token={token}
            postsArray={postsArray}
            setPostsArray={setPostsArray}
            totalPosts={totalPosts}
            setTotalPosts={setTotalPosts}
          />
        ) : (
          <></>
        )}
        {postsArray?.length === 0 ? (
          <></>
        ) : (
          <ScrollContainer
            route={route}
            token={token}
            postsArray={postsArray}
            setPostsArray={setPostsArray}
          >
            {postsState === "full" &&
              postsArray.map((post) => {
                return (
                  <ContainerComments key={post?.id}>
                    {post?.repostId && (
                      <Repost>
                        <TiArrowSync className="reposted-icon" />
                        <p>
                          Re-posted by <span>{post?.name}</span>
                        </p>
                      </Repost>
                    )}

                    <Post>
                      <PostLeftContent
                        post={post}
                        renderPage={renderPage}
                        route={route}
                        openModal={openRepostModal}
                        setPostId={setPostId}
                        setCurrentPost={setCurrentPost}
                      />

                      <PostContent
                        post={post}
                        renderPage={renderPage}
                        route={route}
                        openModal={openDeleteModal}
                        setPostId={setPostId}
                      />
                    </Post>
                    {comments !== null && posts === post.id && (
                      <ViewComments postId={post.id} />
                    )}
                  </ContainerComments>
                );
              })}
          </ScrollContainer>
        )}
        {postsState === "loading" && (
          <p className="loading-message">Loading...</p>
        )}
        {postsState === "no-followers" && (
          <p className="get-error-message">
            You don't follow anyone yet. Search for new friends!
          </p>
        )}
        {postsState === "empty" && (
          <p className="get-error-message">No posts found from your friends</p>
        )}
        {postsState === "error" && (
          <p className="get-error-message">
            An error occured while trying to fetch the posts, please refresh the
            page
          </p>
        )}
      </PostsContainer>
    </>
  );
}

import {
  PostsContainer,
  Post,
  ImageLikes,
  PostContent,
  Snippet,
  StyledHashtag
} from "./style";

import Publish from "../Publish";
import SearchBarMobile from "../SearchBarMobile";
import ConfirmationModal from "../ConfirmationModal";

import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import temp from "../../assets/perfil-temp.png";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";
import createHashtagsFromString from "../../utils/createHashtagsFromString";
import { v4 as uuid } from "uuid";

export default function Timeline({ showPublish, route, mainTitle }) {
  const { token, setImage, setName, id, setId } =
    useContext(UserContext);

  const navigate = useNavigate();
  const inputRef = useRef(null);

  const [postsArray, setPostsArray] = useState();
  const [postsState, setPostsState] = useState("loading");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postId, setPostId] = useState();
  const [editingPost, setEditingPost] = useState();
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [editText, setEditText] = useState();
  const [editLoading, setEditLoading] = useState(false);

  const renderPage = useCallback(
    async (route) => {
      try {
        const posts = await api.getPosts(route, token);
        setPostsArray(posts.data);

        if (posts?.data.length === 0) {
          setPostsState("empty");
        } else {
          setPostsState("full");
        }
      } catch (error) {
        setPostsState("error");
        console.log(error.response);
      }
    },
    [token]
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

  function handleClick(url) {
    window.open(url);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleHashtagClick(e) {
    const hashtag = e.target.innerText;
    navigate(`/hashtag/${hashtag.replace("#", "")}`);
  }

  function handleEdit(post) {
    setEditingPost(post);
    setEditIsOpen(!editIsOpen);
    setTimeout(() => inputRef.current?.focus(), 400);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setEditIsOpen(false);
    } else if (e.keyCode === 13 || e.keyCode === 10) {
      e.preventDefault();
      sendEdition(editingPost);
    }
  }

  async function toggleLike(postId) {
    try {

      await api.toggleLike(postId, token);
      renderPage(route);
    } catch (error) {
      console.log(error);
    };
  };

  async function sendEdition(post) {
    setEditLoading(true);
    try {
      const body = { link: post.url, text: editText }
      await api.editOnePost(post.id, body, token);

      createHashtagsFromString(editText, token);
      setEditIsOpen(false);
      renderPage(route);
    } catch (error) {
      toast.error("Could not save modifications", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error.response);
    }
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
          renderPage={renderPage}
          route={route}
          modalIsOpen={modalIsOpen}
        />

        <h1 className="timeline-title">{mainTitle}</h1>

        {showPublish && <Publish renderPage={renderPage} route={route} />}

        {postsState === "full" &&
          postsArray.map((post) => {
            return (
              <Post key={post.id}>
                <ImageLikes>
                  <img
                    className="profile-image"
                    src={post.image}
                    alt=""
                  />
                  {post.likeQuantity !== "0" ?
                    <FaHeart
                      className="like-icon"
                      style={{ color: '#ac0000' }}
                      onClick={() => toggleLike(post.id)}
                    />
                    :
                    <FaRegHeart
                      className="like-icon"
                      style={{ color: '#ffffff' }}
                      onClick={() => toggleLike(post.id)}
                    />
                  }
                  <p onClick={() => toggleLike(post.id)} className="likes-quantity">
                    {post?.likeQuantity} {post?.likeQuantity <= 1 ? 'like' : 'likes'}
                  </p>
                </ImageLikes>
                <PostContent>
                  <div className="profile-name">
                    <p name={post.userId}
                      onClick={e => navigate(`/users/${e.target.attributes.name.value}`)}
                    >{post.name} </p>
                    {id === post.userId && (
                      <div className="remove-edit-icons">
                        <AiTwotoneEdit
                          onClick={() =>
                            handleEdit(post)
                          }
                          className="edit-icon"
                        />
                        <FaTrashAlt
                          onClick={() => {
                            openModal();
                            setPostId(post.id);
                          }}
                          className="remove-icon"
                        />
                      </div>
                    )}
                  </div>
                  {editIsOpen & (editingPost === post) ? (
                    <textarea
                      disabled={editLoading}
                      className="edit-input"
                      ref={inputRef}
                      defaultValue={post.text}
                      onChange={(e) =>
                        setEditText(e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown(e)}
                    ></textarea>
                  ) : (
                    <p className="article-text">
                      <ReactHashtag
                        renderHashtag={(value) => (
                          <StyledHashtag
                            onClick={
                              handleHashtagClick
                            }
                            key={uuid()}
                          >
                            {value}
                          </StyledHashtag>
                        )}
                      >
                        {post.text ? post.text : ""}
                      </ReactHashtag>
                    </p>
                  )}
                  <Snippet
                    onClick={() => handleClick(post.url)}
                  >
                    <div className="snippet-data">
                      <p className="title">
                        {post.title}
                      </p>
                      <p className="description">
                        {post.description}
                      </p>
                      <p className="link">{post.url}</p>
                    </div>
                    <img
                      src={
                        post.linkImage === ""
                          ? temp
                          : post.linkImage
                      }
                      alt=""
                    />
                  </Snippet>
                </PostContent>
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


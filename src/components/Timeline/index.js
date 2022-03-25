import {
  PostsContainer,
  Publish,
  Post,
  ImageLikes,
  PostContent,
  Snippet,
  StyledModal,
  modalStyles,
  StyledHashtag,
} from "./style";
import { FiHeart } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import temp from "../../assets/perfil-temp.png";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";

export default function Timeline({ showPublish, route, mainTitle }) {
  const { token, setImage, setName, image, id, setId } =
    useContext(UserContext);

  StyledModal.setAppElement(document.getElementById("#home"));

  const navigate = useNavigate();
  const inputRef = useRef(null);

  const [postsArray, setPostsArray] = useState();
  const [link, setLink] = useState("");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);
  const [publishError, setPublishError] = useState(false);
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
        const posts = await axios.get(process.env.REACT_APP_BACK_URL + route, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

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
    }, [token]
  );

  const getUser = useCallback(
    async () => {
      try {
        const response = await api.getUserInfos(token);

        setImage(response?.data.image);
        setName(response?.data.name);
        setId(response?.data.id);
      } catch (error) {
        console.log(error);
      }
    }, [setId, setImage, setName, token]
  );

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

  async function handleSubmit(e) {
    e.preventDefault();

    if (link !== "") {
      setLoading(true);

      try {
        await axios.post(
          process.env.REACT_APP_BACK_URL + "posts",
          { link, text: article },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        renderPage(route);
        setLink("");
        setArticle("");
      } catch (error) {
        setPublishError(true);
        setTimeout(() => setPublishError(false), 5000);
        console.log(error.response);
      }

      setLoading(false);
    } else {
      toast.error("Fill in the link field!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  async function handleDeletion() {
    setLoading(true);
    try {
      await axios.delete(process.env.REACT_APP_BACK_URL + `posts/${postId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      closeModal();
      renderPage(route);
    } catch (error) {
      toast.error("Could not delete this post", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      closeModal();
    }
    setLoading(false);
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
      setEditIsOpen(false)
    } else if (e.keyCode === 13 || e.keyCode === 10) {
      e.preventDefault();
      sendEdition(editingPost);
    }
  }

  async function sendEdition(post) {
    setEditLoading(true);
    try {
      await axios.put(
        process.env.REACT_APP_BACK_URL + `posts/${post.id}`,
        { link: post.url, text: editText },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
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

    setEditLoading(false);
  }

  return (
    <>
      <PostsContainer>
        <h1 className="timeline-title">{mainTitle}</h1>

        <StyledModal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          style={modalStyles}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>
                Are you sure you want <br /> to delete this post?
              </p>
              <div>
                <button onClick={closeModal}>No, go back</button>
                <button onClick={handleDeletion}>Yes, delete it</button>
              </div>
            </>
          )}
        </StyledModal>

        {showPublish && (
          <Publish>
            <ImageLikes className="image-likes-publish">
              <img className="profile-image" src={image} alt="loading..." />
            </ImageLikes>
            <ToastContainer />
            <form className="inputs">
              <p className="inputs-title">What are you going to share today?</p>
              <input
                disabled={loading}
                className="input-link"
                type="url"
                placeholder="http://..."
                onChange={(e) => setLink(e.target.value)}
                value={link}
              />
              <textarea
                disabled={loading}
                id="story"
                name="story"
                className="input-article"
                placeholder="Awesome article about #javascript"
                onChange={(e) => setArticle(e.target.value)}
                value={article}
              ></textarea>
              {publishError && (
                <p className="error-message">
                  Houve um erro ao publicar seu link
                </p>
              )}
              <button
                disabled={loading}
                className={loading ? "disabled" : ""}
                onClick={(e) => handleSubmit(e)}
              >
                {loading ? "Publishing..." : "Publish"}
              </button>
            </form>
          </Publish>
        )}

        {postsState === "full" &&
          postsArray.map((post) => {
            return (
              <Post key={post.id}>
                <ImageLikes>
                  <img className="profile-image" src={post.image} alt="" />
                  <FiHeart className="like-icon" />
                  <p className="likes-quantity">13 likes</p>
                </ImageLikes>
                <PostContent>
                  <div className="profile-name">
                    {post.name}
                    {id === post.userId && (
                      <div className="remove-edit-icons">
                        <AiTwotoneEdit onClick={() => handleEdit(post)} className="edit-icon" />
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
                  {editIsOpen & editingPost === post ?
                    <textarea
                      disabled={editLoading}
                      className="edit-input"
                      ref={inputRef}
                      defaultValue={post.text}
                      onChange={e => setEditText(e.target.value)}
                      onKeyDown={e => handleKeyDown(e)}
                    ></textarea>
                    :
                    <p className="article-text">
                      <ReactHashtag
                        renderHashtag={(value) => (
                          <StyledHashtag
                            onClick={handleHashtagClick}
                            key={post.id}
                          >
                            {value}
                          </StyledHashtag>
                        )}
                      >
                        {post.text}
                      </ReactHashtag>
                    </p>}
                  <Snippet onClick={() => handleClick(post.url)}>
                    <div className="snippet-data">
                      <p className="title">{post.title}</p>
                      <p className="description">{post.description}</p>
                      <p className="link">{post.url}</p>
                    </div>
                    <img
                      src={post.linkImage === "" ? temp : post.linkImage}
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
            An error occured while trying to fetch the posts, please refresh the
            page
          </p>
        )}
      </PostsContainer>
    </>
  );
}

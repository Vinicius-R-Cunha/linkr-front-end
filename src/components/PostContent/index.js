import { PostContentDiv, StyledHashtag } from "./style";

import Snippet from "../Snippet";

import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

import ReactHashtag from "@mdnm/react-hashtag";
import { v4 as uuid } from "uuid";
import { useContext, useRef, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";
import createHashtagsFromString from "../../utils/createHashtagsFromString";

export default function PostContent({
  post,
  renderPage,
  route,
  openModal,
  setPostId,
}) {
  const { id, token } = useContext(UserContext);

  const [editingPost, setEditingPost] = useState();
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [editText, setEditText] = useState("");
  const [editLoading, setEditLoading] = useState(false);
  const inputRef = useRef(null);

  const navigate = useNavigate();
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

  async function sendEdition(post) {
    setEditLoading(true);
    try {
      const body = { link: post.url, text: editText };
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
    setEditLoading(false);
  }

  return (
    <PostContentDiv>
      <div className="profile-name">
        <p
          name={post?.userId}
          onClick={(e) => {
            navigate(`/users/${e.target.attributes.name.value}`);
          }}
        >
          {post?.name}
        </p>

        {id === post?.userId && (
          <div className="remove-edit-icons">
            <AiTwotoneEdit
              onClick={() => {
                handleEdit(post);
              }}
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

      {editIsOpen && editingPost === post ? (
        <textarea
          disabled={editLoading}
          className="edit-input"
          ref={inputRef}
          defaultValue={post?.text}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
          onKeyDown={(e) => handleKeyDown(e)}
        ></textarea>
      ) : (
        <p className="article-text">
          <ReactHashtag
            renderHashtag={(value) => (
              <StyledHashtag onClick={handleHashtagClick} key={uuid()}>
                {value}
              </StyledHashtag>
            )}
          >
            {post?.text ? post?.text : ""}
          </ReactHashtag>
        </p>
      )}

      <Snippet post={post} />
    </PostContentDiv>
  );
}

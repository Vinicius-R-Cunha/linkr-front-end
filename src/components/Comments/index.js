import { CommentsContainer } from "./style";
import { AiOutlineComment } from "react-icons/ai";
import CommentsContext from "../../contexts/CommentsContext";
import { useContext, useState } from "react";
import api from "../../services/api";
import UserContext from "../../contexts/UserContext";
import PostsContext from "../../contexts/PostsContext";

export default function Comments({ post, renderPage, route }) {
  const { token, image } = useContext(UserContext);
  const { comments, setComments } = useContext(CommentsContext);
  const { posts, setPosts } = useContext(PostsContext);
  const [viewComment, setViewComment] = useState("false");
  const [disable, setDisable] = useState(false);
  async function toggleComment() {
    try {
      if (viewComment === false) {
        setDisable(true);
        const selectComments = await api.getComments(token, post?.id);
        setPosts(post?.id);
        setComments(selectComments.data);
        setViewComment(true);
        setDisable(false);
      } else {
        setComments(null);
        setViewComment(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CommentsContainer>
      <AiOutlineComment
        className="left-icon"
        onClick={() => toggleComment()}
        disabled={disable}
      />
      <p className="left-quantity">
        {post?.commentQuantity}{" "}
        {post?.commentQuantity === 1 ? "comment" : "comments"}
      </p>
    </CommentsContainer>
  );
}

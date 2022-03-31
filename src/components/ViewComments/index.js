import { useContext, useState } from "react";
import api from "../../services/api";
import { CommentsContainer, CommentContainer } from "./style";
import UserContext from "../../contexts/UserContext";
import CommentsContext from "../../contexts/CommentsContext";
import { IoPaperPlaneOutline } from "react-icons/io5";

export default function ViewComments({ postId }) {
  const { token, image } = useContext(UserContext);
  const { comments } = useContext(CommentsContext);
  const [textComment, setTextComment] = useState("");
  async function submitComment() {
    try {
      const body = {
        postId,
        comment: textComment,
      };
      console.log(body);
      await api.postComment(token, body);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CommentsContainer>
      {comments?.map((com) => {
        return (
          <CommentContainer>
            <img src={com.image} />
            <div className="corpo">
              <div className="titulo">
                <h1>{com.nameUserComment}</h1>
                <span>
                  {com.isFollowing
                    ? "• following"
                    : com.isAuthor === true && "• post’s author"}
                </span>
              </div>
              <p>{com.comment}</p>
            </div>
          </CommentContainer>
        );
      })}
      <div className="inputComment">
        <img src={image} />
        <input
          type="text"
          value={textComment}
          onChange={(e) => setTextComment(e.target.value)}
          placeholder="write a comment..."
        />
        <IoPaperPlaneOutline
          className="icone"
          onClick={() => submitComment()}
        />
      </div>
    </CommentsContainer>
  );
}

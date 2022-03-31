import { useContext, useState } from "react";

import { CommentsContainer, CommentContainer } from "./style";
import UserContext from "../../contexts/UserContext";
import CommentsContext from "../../contexts/CommentsContext";

export default function ViewComments({ postId }) {
  const { token, image } = useContext(UserContext);
  const { comments } = useContext(CommentsContext);
  const [textComment, setTextComment] = useState("");

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
      </div>
    </CommentsContainer>
  );
}

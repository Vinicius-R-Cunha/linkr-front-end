import { CommentsContainer } from "./style";
import { AiOutlineComment } from "react-icons/ai";

export default function Comments({ post }) {
    return (
        <CommentsContainer>
            <AiOutlineComment
                className="like-icon"
                style={{ color: "#ffffff" }}
            // onClick={() => addComments(post.id)}
            />
            <p className="likes-quantity">
                {post?.commentQuantity}{" "}
                {post?.commentQuantity === 1 ? "comment" : "comments"}
            </p>
        </CommentsContainer>
    );
}
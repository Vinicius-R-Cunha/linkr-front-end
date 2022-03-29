import { CommentsContainer } from "./style";
import { AiOutlineComment } from "react-icons/ai";

export default function Comments({ post }) {
    return (
        <CommentsContainer>
            <AiOutlineComment
                className="left-icon"
                style={{ color: "#ffffff" }}
            // onClick={() => addComments(post.id)}
            />
            <p className="left-quantity">
                {post?.commentQuantity}{" "}
                {post?.commentQuantity === 1 ? "comment" : "comments"}
            </p>
        </CommentsContainer>
    );
}
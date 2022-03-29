import { ImageLikes } from "./style";
import { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import ReactTooltip from "react-tooltip";
import Repost from "../Repost";
import Comments from "../Comments";

export default function Likes({ renderPage, route, post }) {
    const { token, name } = useContext(UserContext);

    const numberLikeQuantityMinusTwo = Number(post?.likeQuantity) - 2;
    const effectTooltip = renderTooltip;

    const [tooltipMessage, setTooltipMessage] = useState("");

    async function toggleLike(postId) {
        try {
            await api.toggleLike(postId, token);
            renderPage(route);
        } catch (error) {
            console.log(error);
        }
    }

    function renderTooltip() {
        if (post?.likeQuantity === "0") {
            setTooltipMessage("Ninguém curtiu");
        }

        if (post?.isLiked) {
            if (post?.likeQuantity === "1") {
                setTooltipMessage("Você curtiu");
            } else if (post?.likeQuantity === "2") {
                setTooltipMessage(`${"Você e " + post.userLiked[0]}`);
            } else if (post?.likeQuantity === "3" && name !== post.userLiked[1]) {
                setTooltipMessage(
                    `${"Você, " + post.userLiked[1] + " e outra pessoa"}`
                );
            } else if (post?.likeQuantity === "3" && name !== post.userLiked[0]) {
                setTooltipMessage(
                    `${"Você, " + post.userLiked[0] + " e outra pessoa"}`
                );
            } else if (post?.likeQuantity > 3 && name !== post.userLiked[0]) {
                setTooltipMessage(
                    `${"Você, " +
                    post.userLiked[0] +
                    " e outras " +
                    numberLikeQuantityMinusTwo +
                    " pessoas"
                    }`
                );
            } else if (post?.likeQuantity > 3 && name !== post.userLiked[1]) {
                setTooltipMessage(
                    `${"Você, " +
                    post.userLiked[1] +
                    " e outras " +
                    numberLikeQuantityMinusTwo +
                    " pessoas"
                    }`
                );
            }
        } else {
            if (post?.likeQuantity === "1") {
                setTooltipMessage(`${post.userLiked[0] + " curtiu "}`);
            } else if (post?.likeQuantity === "2") {
                setTooltipMessage(
                    `${post.userLiked[0] + " e " + post.userLiked[1] + " curtiram"}`
                );
            } else if (post?.likeQuantity === "3") {
                setTooltipMessage(
                    `${post.userLiked[0] + ", " + post.userLiked[1] + " e outra pessoa"}`
                );
            } else if (post?.likeQuantity > 3) {
                setTooltipMessage(
                    `${post.userLiked[0] +
                    ", " +
                    post.userLiked[1] +
                    " e outras " +
                    numberLikeQuantityMinusTwo +
                    " pessoas"
                    }`
                );
            }
        }
    }

    // eslint-disable-next-line
    useEffect(renderTooltip, [effectTooltip]);

    return (
        <ImageLikes>
            <img className="profile-image" src={post.image} alt="" />

            <ReactTooltip
                className="tooltip-style"
                effect="float"
                place="bottom"
                backgroundColor="rgba(255, 255, 255, 0.9)"
                textColor="#505050"
            />
            {post?.isLiked ? (
                <FaHeart
                    className="like-icon"
                    style={{ color: "#ac0000" }}
                    onClick={() => toggleLike(post.id)}
                />
            ) : (
                <FaRegHeart
                    className="like-icon"
                    style={{ color: "#ffffff" }}
                    onClick={() => toggleLike(post.id)}
                />
            )}
            <p
                data-tip={tooltipMessage}
                onClick={() => toggleLike(post.id)}
                className="likes-quantity"
            >
                {post?.likeQuantity} {post?.likeQuantity === 1 ? "like" : "likes"}
            </p>

            <Comments
                post={post}
            />

            <Repost
                post={post}
                renderPage={renderPage}
                route={route}
            />
        </ImageLikes>
    );
}

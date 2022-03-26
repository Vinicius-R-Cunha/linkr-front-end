import {
    ImageLikes
} from "./style";
import { useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import UserContext from '../../contexts/UserContext';
import api from '../../services/api';

export default function Likes({ post, renderPage, route }) {

    const { token } = useContext(UserContext);

    async function toggleLike(postId) {
        try {
            await api.toggleLike(postId, token);
            renderPage(route);
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <ImageLikes>
            <img
                className="profile-image"
                src={post.image}
                alt=""
            />
            {post.isLiked === true ?
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
                {post.likeQuantity} {post.likeQuantity <= 1 ? 'like' : 'likes'}
            </p>
        </ImageLikes>
    );
}
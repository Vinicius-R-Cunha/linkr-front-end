import {
    ImageLikes
} from "./style";
import { useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import UserContext from '../../contexts/UserContext';
import api from '../../services/api';

export default function Likes({ id, image, likeQuantity, renderPage, route, isLiked }) {

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
                src={image}
                alt=""
            />
            {isLiked === true ?
                <FaHeart
                    className="like-icon"
                    style={{ color: '#ac0000' }}
                    onClick={() => toggleLike(id)}
                />
                :
                <FaRegHeart
                    className="like-icon"
                    style={{ color: '#ffffff' }}
                    onClick={() => toggleLike(id)}
                />
            }
            <p onClick={() => toggleLike(id)} className="likes-quantity">
                {likeQuantity} {likeQuantity <= 1 ? 'like' : 'likes'}
            </p>
        </ImageLikes>
    );
}
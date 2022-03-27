import {
    ImageLikes
} from "./style";
import { useContext, useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import UserContext from '../../contexts/UserContext';
import api from '../../services/api';
import ReactTooltip from 'react-tooltip';


export default function Likes({ id, image, likeQuantity, renderPage, route, isLiked, post }) {
    const { token , name} = useContext(UserContext);
    
    const numberLikeQuantityMinusTwo = Number(likeQuantity)-2;
    const effectTooltip = renderTooltip;

    const [tooltipMessage, setTooltipMessage] = useState('')
   
    async function toggleLike(postId) {
        try {
            await api.toggleLike(postId, token);
            renderPage(route);
        } catch (error) {
            console.log(error);
        };
    };

    function renderTooltip(){
        if( likeQuantity === "0"){
            setTooltipMessage('Ninguém curtiu')
        } 
        
        if(post?.isLiked === true && post?.likeQuantity === "2"){
            setTooltipMessage(`${'Você e ' + post.userLiked[0].name + ' curtiram'}`)

        } else if(post?.isLiked === false && post?.likeQuantity === "2"){
            setTooltipMessage(`${post.userLiked[0].name +' e '+ post.userLiked[1].name + ' curtiram'}`)
        
        } else if(post?.isLiked === false && post?.likeQuantity > 2){
            setTooltipMessage(`${post.userLiked[0].name +', '+ post.userLiked[1].name + ' e outras ' + numberLikeQuantityMinusTwo + ' pessoas'}`)
        
        } else if(post?.isLiked === true && post?.likeQuantity === "1"){
            setTooltipMessage('Você curtiu')
        
        } else if(post?.isLiked === false && post?.likeQuantity === "1"){
            setTooltipMessage(`${post.userLiked[0].name +' curtiu '}`)

        } else if(post?.isLiked === true && post?.likeQuantity > 2 && name !== post.userLiked[0].name){
            setTooltipMessage(`${'Você, ' + post.userLiked[0].name + ' e outras ' + numberLikeQuantityMinusTwo + ' pessoas'}`)
        
        } else if(post?.isLiked === true && post?.likeQuantity > 2 && name !== post.userLiked[1].name){
            setTooltipMessage(`${'Você, '+ post.userLiked[0].name + ' e outras ' + numberLikeQuantityMinusTwo + ' pessoas'}`)
        } 
    };

    // eslint-disable-next-line
    useEffect((renderTooltip),[effectTooltip])

    return (
        <ImageLikes>
                        
            <img
                className="profile-image"
                src={post.image}
                alt=""
            />

            <ReactTooltip 
            className="tooltip-style"
            effect="float" 
            place="bottom"
            backgroundColor="rgba(255, 255, 255, 0.9)"
            textColor="#505050"
            />
            {isLiked === true ?
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
            <p data-tip={tooltipMessage} onClick={() => toggleLike(id)} className="likes-quantity">
                {likeQuantity} {likeQuantity <= 1 ? 'like' : 'likes'}
            </p>
        </ImageLikes>
    );
}
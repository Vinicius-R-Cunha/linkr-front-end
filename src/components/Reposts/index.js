import { RepostsContainer } from './style';
import { TiArrowSync } from 'react-icons/ti';

export default function Reposts({ post, renderPage, route, openModal, setCurrentPost }) {

    return (
        <RepostsContainer>
            <TiArrowSync
                className='left-icon'
                onClick={() => {
                    openModal();
                    setCurrentPost(post);
                }}
            />
            <p className='left-quantity'>{`${post?.repostQuantity} re-posts`}</p>
        </RepostsContainer>
    );
}
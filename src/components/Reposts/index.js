import { RepostsContainer } from './style';
import { TiArrowSync } from 'react-icons/ti';

export default function Reposts({ post, renderPage, route, openModal, setPostId }) {

    return (
        <RepostsContainer>
            {!post?.repostId && <TiArrowSync
                className='left-icon'
                onClick={() => {
                    openModal();
                    setPostId(post?.id);
                }}
            />}
            <p className='left-quantity'>{`${post?.repostQuantity} re-posts`}</p>
        </RepostsContainer>
    );
}
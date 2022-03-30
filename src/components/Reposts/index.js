import { RepostsContainer } from './style';
import { TiArrowSync } from 'react-icons/ti';

export default function Reposts({ post, renderPage, route, openModal, setPostId }) {

    return (
        <RepostsContainer>
            <TiArrowSync
                className='left-icon'
                onClick={() => {
                    openModal();
                    setPostId(post?.id);
                }}
            />
            <p className='left-quantity'>0 re-posts</p>
        </RepostsContainer>
    );
}
import { RepostsContainer } from './style';
import { TiArrowSync } from 'react-icons/ti';

export default function Reposts({ post, renderPage, route }) {

    return (
        <RepostsContainer>
            <TiArrowSync
                className='left-icon'
            // onClick={handleModal}
            />
            <p className='left-quantity'>0 re-posts</p>
        </RepostsContainer>
    );
}
import { RepostContainer } from './style';
import { TiArrowSync } from 'react-icons/ti';

export default function Repost({ post, renderPage, route }) {

    return (
        <RepostContainer>
            <TiArrowSync
                className='repost-icon'
            // onClick={handleModal}
            />
            <p className='repost-quantity'>0 re-posts</p>
        </RepostContainer>
    );
}
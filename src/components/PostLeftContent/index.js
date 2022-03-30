import { LeftContentContainer } from "./style";
import Likes from "../Likes";
import Reposts from "../Reposts";
import Comments from "../Comments";

export default function PostLeftContent({ renderPage, route, post, setPostId, openModal }) {

    return (
        <LeftContentContainer>
            <img className="profile-image" src={post.image} alt="" />

            <Likes
                post={post}
                renderPage={renderPage}
                route={route}
            />

            <Comments
                post={post}
                renderPage={renderPage}
                route={route}
            />

            <Reposts
                post={post}
                renderPage={renderPage}
                route={route}
                openModal={openModal}
                setPostId={setPostId}
            />
        </LeftContentContainer>
    );
}

import {
    SnippetContainer
} from "./style";
import emptyImg from "../../assets/perfil-temp.png";

export default function Snippet({ post }) {

    function handleClick(url) {
        window.open(url);
    }

    return (
        <SnippetContainer
            onClick={() => handleClick(post.url)}
        >
            <div className="snippet-data">
                <p className="title">
                    {post.title}
                </p>
                <p className="description">
                    {post.description}
                </p>
                <p className="link">{post.url}</p>
            </div>
            <img
                src={
                    post.linkImage === ""
                        ? emptyImg
                        : post.linkImage
                }
                alt=""
            />
        </SnippetContainer>
    );
}
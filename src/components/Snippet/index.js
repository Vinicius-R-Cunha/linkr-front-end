import {
    SnippetContainer
} from "./style";
import emptyImg from "../../assets/perfil-temp.png";

export default function Snippet({ post }) {

    function handleClick(url) {
        window.open(url);
    }

    function truncateString(str, num) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }

    return (
        <SnippetContainer
            onClick={() => handleClick(post.url)}
        >
            <div className="snippet-data">
                <p className="title">
                    {truncateString(post.title, 45)}
                </p>
                <p className="description">
                    {truncateString(post.description, 109)}
                </p>
                <p className="link">{truncateString(post.url, 50)}</p>
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
import {
    SnippetContainer
} from "./style";
import emptyImg from "../../assets/perfil-temp.png";

export default function Snippet({ url, title, description, linkImage }) {

    function handleClick(url) {
        window.open(url);
    }

    return (
        <SnippetContainer
            onClick={() => handleClick(url)}
        >
            <div className="snippet-data">
                <p className="title">
                    {title}
                </p>
                <p className="description">
                    {description}
                </p>
                <p className="link">{url}</p>
            </div>
            <img
                src={
                    linkImage === ""
                        ? emptyImg
                        : linkImage
                }
                alt=""
            />
        </SnippetContainer>
    );
}
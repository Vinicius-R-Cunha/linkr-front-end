import { PublishContainer, ImageDiv } from './style';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import createHashtagsFromString from "../../utils/createHashtagsFromString";
import { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import api from '../../services/api';

export default function Publish({ renderPage, route }) {

    const { token, image } = useContext(UserContext);

    const [link, setLink] = useState("");
    const [article, setArticle] = useState("");
    const [publishError, setPublishError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (link !== "") {
            setLoading(true);

            try {
                const body = { link, text: article }
                await api.publishPost(body, token);

                createHashtagsFromString(article, token);
                renderPage(route);
                setLink("");
                setArticle("");
            } catch (error) {
                setPublishError(true);
                setTimeout(() => setPublishError(false), 5000);
                console.log(error.response);
            }

            setLoading(false);
        } else {
            toast.error("Fill in the link field!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <PublishContainer>
            <ImageDiv>
                <img
                    className="profile-image"
                    src={image}
                    alt="loading..."
                />
            </ImageDiv>
            <form className="inputs">
                <p className="inputs-title">
                    What are you going to share today?
                </p>
                <input
                    disabled={loading}
                    className="input-link"
                    type="url"
                    placeholder="http://..."
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                />
                <textarea
                    disabled={loading}
                    id="story"
                    name="story"
                    className="input-article"
                    placeholder="Awesome article about #javascript"
                    onChange={(e) => setArticle(e.target.value)}
                    value={article}
                ></textarea>
                {publishError && (
                    <p className="error-message">
                        Houve um erro ao publicar seu link
                    </p>
                )}
                <button
                    disabled={loading}
                    className={loading ? "disabled" : ""}
                    onClick={(e) => handleSubmit(e)}
                >
                    {loading ? "Publishing..." : "Publish"}
                </button>
            </form>
        </PublishContainer>
    );
}
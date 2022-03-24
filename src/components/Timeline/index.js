import Header from "../Header";
import {
    TimelineContainer,
    PostsContainer,
    Publish,
    Post,
    ImageLikes,
    PostContent,
    Snippet,
    StyledHashtag,
} from "./style";
import { FiHeart } from "react-icons/fi";
import temp from "../../assets/perfil-temp.png";
import temp2 from "../../assets/snippet-temp.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";

export default function Timeline() {
    const token = "meu-lindo-token";
    const navigate = useNavigate();

    const [postsArray, setPostsArray] = useState([]);
    const [link, setLink] = useState("");
    const [article, setArticle] = useState("");
    const [loadingPublish, setLoadingPublish] = useState(false);
    const [publishError, setPublishError] = useState(false);
    const [postsState, setPostsState] = useState("loading");

    useEffect(() => {
        renderPage();
    }, []);

    function renderPage() {
        const promise = axios.get(process.env.REACT_APP_BACK_URL + "posts");
        promise.then((answer) => {
            setPostsArray(answer.data);
            if (answer.data.length === 0) {
                setPostsState("empty");
            } else {
                setPostsState("full");
            }
        });
        promise.catch((error) => {
            setPostsState("error");
            console.log(error.response);
        });
    }

    function handleClick(url) {
        window.open(url);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (link !== "") {
            setLoadingPublish(true);

            try {
                await axios.post(
                    process.env.REACT_APP_BACK_URL + "posts",
                    { link, text: article },
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                );
                renderPage();
                setLink("");
                setArticle("");
            } catch (error) {
                setPublishError(true);
                setTimeout(() => setPublishError(false), 3000);
                console.log(error);
            }

            setLoadingPublish(false);
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

    function handleHashtagClick(e) {
        const hashtag = e.target.innerText;
        navigate(`/hashtag/${hashtag.replace("#", "")}`);
    }

    return (
        <>
            <Header />
            <TimelineContainer>
                <PostsContainer>
                    <h1 className="timeline-title">timeline</h1>

                    <Publish>
                        <ImageLikes className="image-likes-publish">
                            <img className="profile-image" src={temp} alt="" />
                        </ImageLikes>
                        <ToastContainer />
                        <form className="inputs">
                            <p className="inputs-title">
                                What are you going to share today?
                            </p>
                            <input
                                disabled={loadingPublish}
                                className="input-link"
                                type="url"
                                placeholder="http://..."
                                onChange={(e) => setLink(e.target.value)}
                                value={link}
                            />
                            <textarea
                                disabled={loadingPublish}
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
                                disabled={loadingPublish}
                                className={loadingPublish ? "disabled" : ""}
                                onClick={(e) => handleSubmit(e)}
                            >
                                {loadingPublish ? "Publishing..." : "Publish"}
                            </button>
                        </form>
                    </Publish>

                    {postsState === "full" &&
                        postsArray.map((post) => {
                            return (
                                <Post key={post.id}>
                                    <ImageLikes>
                                        <img
                                            className="profile-image"
                                            src={post.image}
                                            alt=""
                                        />
                                        <FiHeart className="like-icon" />
                                        <p className="likes-quantity">
                                            13 likes
                                        </p>
                                    </ImageLikes>
                                    <PostContent>
                                        <p className="profile-name">
                                            {post.name}
                                        </p>
                                        <p className="article-text">
                                            <ReactHashtag
                                                renderHashtag={(value) => (
                                                    <StyledHashtag
                                                        onClick={
                                                            handleHashtagClick
                                                        }
                                                        key={post.id}
                                                    >
                                                        {value}
                                                    </StyledHashtag>
                                                )}
                                            >
                                                {post.text}
                                            </ReactHashtag>
                                        </p>
                                        <Snippet
                                            onClick={() =>
                                                handleClick(post.url)
                                            }
                                        >
                                            <div className="snippet-data">
                                                <p className="title">
                                                    Como aplicar o Material UI
                                                    em um projeto React
                                                </p>
                                                <p className="description">
                                                    Hey! I have moved this
                                                    tutorial to my personal
                                                    blog. Same content, new
                                                    location. Sorry about making
                                                    you click through to another
                                                    page.
                                                </p>
                                                <p className="link">
                                                    {post.url}
                                                </p>
                                            </div>
                                            <img src={temp2} alt="" />
                                        </Snippet>
                                    </PostContent>
                                </Post>
                            );
                        })}
                    {postsState === "loading" && (
                        <p className="loading-message">Loading...</p>
                    )}
                    {postsState === "empty" && (
                        <p className="get-error-message">
                            There are no posts yet
                        </p>
                    )}
                    {postsState === "error" && (
                        <p className="get-error-message">
                            An error occured while trying to fetch the posts,
                            please refresh the page
                        </p>
                    )}
                </PostsContainer>
            </TimelineContainer>
        </>
    );
}

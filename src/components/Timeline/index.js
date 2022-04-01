import { PostsContainer, Post } from "./style";

import Publish from "../Publish";
import SearchBarMobile from "../SearchBarMobile";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import RepostConfirmationModal from "../RepostConfirmationModal";
import PostLeftContent from "../PostLeftContent";
import PostContent from "../PostContent";
import NewPostsNotificationBar from "../NewPostsNotificationBar";
import ScrollContainer from "../ScrollContainer";

import { useCallback, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Timeline({
    showPublish,
    route,
    mainTitle,
    hashtags,
    setHashtags,
    setIsValidUser,
}) {
    const { token, setImage, setName, setId } = useContext(UserContext);

    const navigate = useNavigate();

    const [postsArray, setPostsArray] = useState([]);
    const [postsState, setPostsState] = useState("loading");
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [repostModalIsOpen, setRepostModalIsOpen] = useState(false);
    const [postId, setPostId] = useState();

    const renderPage = useCallback(
        async (route) => {
            try {
                const posts = await api.getPosts(route, token);
                const hashtagsApi = await api.getHashtags(token);

                setPostsArray(posts.data);

                if (posts?.data.length === 0) {
                    setPostsState("empty");
                } else {
                    setPostsState("full");
                }

                setHashtags([...hashtagsApi.data]);
                setIsValidUser(true);
            } catch (error) {
                setPostsState("error");
            }
        },
        // eslint-disable-next-line
        [token, setHashtags, setIsValidUser, hashtags]
    );

    const getUser = useCallback(async () => {
        try {
            const response = await api.getUserInfos(token);
            setImage(response?.data.image);
            setName(response?.data.name);
            setId(response?.data.id);
        } catch (error) {
            console.log(error);
        }
    }, [setId, setImage, setName, token]);

    useEffect(() => {
        if (token) {
            getUser();
            renderPage(route);
        } else {
            navigate("/");
        }
        // eslint-disable-next-line
    }, [token, route, getUser]);

    function openDeleteModal() {
        setDeleteModalIsOpen(true);
    }

    function closeDeleteModal() {
        setDeleteModalIsOpen(false);
    }

    function openRepostModal() {
        setRepostModalIsOpen(true);
    }

    function closeRepostModal() {
        setRepostModalIsOpen(false);
    }

    return (
        <>
            <PostsContainer>
                <ToastContainer />
                <SearchBarMobile />
                <DeleteConfirmationModal
                    postId={postId}
                    closeModal={closeDeleteModal}
                    modalIsOpen={deleteModalIsOpen}
                    renderPage={renderPage}
                    route={route}
                />

                <RepostConfirmationModal
                    postId={postId}
                    closeModal={closeRepostModal}
                    modalIsOpen={repostModalIsOpen}
                    renderPage={renderPage}
                    route={route}
                />

                <h1 className="timeline-title">{mainTitle}</h1>

                {showPublish && (
                    <Publish renderPage={renderPage} route={route} />
                )}
                <NewPostsNotificationBar
                    route={route}
                    token={token}
                    postsArray={postsArray}
                    setPostsArray={setPostsArray}
                />
                {postsArray?.length === 0 ? (
                    <></>
                ) : (
                    <ScrollContainer
                        route={route}
                        token={token}
                        postsArray={postsArray}
                        setPostsArray={setPostsArray}
                    >
                        {postsState === "full" &&
                            postsArray.map((post) => {
                                return (
                                    <Post key={post?.id}>
                                        <PostLeftContent
                                            post={post}
                                            renderPage={renderPage}
                                            route={route}
                                            openModal={openRepostModal}
                                            setPostId={setPostId}
                                        />

                                        <PostContent
                                            post={post}
                                            renderPage={renderPage}
                                            route={route}
                                            openModal={openDeleteModal}
                                            setPostId={setPostId}
                                        />
                                    </Post>
                                );
                            })}
                    </ScrollContainer>
                )}
                {postsState === "loading" && (
                    <p className="loading-message">Loading...</p>
                )}
                {postsState === "empty" && (
                    <p className="get-error-message">There are no posts yet</p>
                )}
                {postsState === "error" && (
                    <p className="get-error-message">
                        An error occured while trying to fetch the posts, please
                        refresh the page
                    </p>
                )}
            </PostsContainer>
        </>
    );
}

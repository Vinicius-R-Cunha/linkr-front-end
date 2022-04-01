import InfiniteScroll from "react-infinite-scroller";
import api from "../../services/api";
import { useState, useEffect } from "react";
import spinner from "../../assets/spinner.gif";

export default function ScrollContainer({
    postsArray,
    setPostsArray,
    route,
    token,
    children,
}) {
    const [offset, setOffset] = useState(10);
    const [loadMoreBoolean, setLoadMoreBoolean] = useState(false);
    const [newPosts, setNewPosts] = useState([]);
    const [handlerTimestamp, setHandlerTimestamp] = useState(0);
    useEffect(() => {
        getNewPosts();
    }, []);

    const getNewPosts = async () => {
        try {
            const { data } = await api.getPosts(
                route + `?offset=${offset}`,
                token
            );

            if (data?.length === 0) {
                return setLoadMoreBoolean(false);
            }
            setOffset(offset + 10);
            setNewPosts([...data]);
            setLoadMoreBoolean(true);
        } catch (error) {
            console.log(error.response);
            setLoadMoreBoolean(false);
        }
    };

    async function handleLoadMore() {
        try {
            if (
                Date.now() - handlerTimestamp < 1000 ||
                Date.now() - handlerTimestamp < 100
            ) {
                return;
            }
            setHandlerTimestamp(Date.now());
            if (!loadMoreBoolean) return;

            const updatedContent = postsArray?.concat(newPosts);
            setPostsArray([...updatedContent]);
            await getNewPosts();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={loadMoreBoolean}
            loader={
                <div className="scroll-loader" key={0}>
                    <img src={spinner} alt="Loading animation" />
                    <p>Loading more posts...</p>
                </div>
            }
        >
            {children}
        </InfiniteScroll>
    );
}

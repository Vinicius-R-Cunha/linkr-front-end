import InfiniteScroll from "react-infinite-scroller";
import api from "../../services/api";
import { useState, useEffect } from "react";

export default function ScrollContainer({
    postsArray,
    setPostsArray,
    route,
    token,
    children,
}) {
    const [offset, setOffset] = useState(5);
    const [loadMoreBoo, setLoadMoreBoo] = useState(false);
    const [newPosts, setNewPosts] = useState([]);
    console.log(loadMoreBoo);

    useEffect(() => {
        const promise = api.getPosts(route + `?offset=${offset}`, token);
        promise.then((res) => {
            if (res.data?.length === 0) {
                return setLoadMoreBoo(false);
            }
            setOffset(offset + 5);
            setNewPosts([...res.data]);
            setLoadMoreBoo(true);
        });
        promise.catch((error) => setLoadMoreBoo(false));
    }, []);

    function handleLoadMore() {
        setPostsArray(postsArray?.concat(newPosts));
    }

    return (
        <InfiniteScroll
            threshold={1}
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={loadMoreBoo}
            loader={
                <div className="loader" key={0}>
                    Loading ...
                </div>
            }
        >
            {children}
        </InfiniteScroll>
    );
}

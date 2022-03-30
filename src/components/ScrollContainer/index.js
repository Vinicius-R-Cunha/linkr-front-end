import InfiniteScroll from "react-infinite-scroller";
import api from "../../services/api";
import { useState } from "react";

export default function ScrollContainer({
    postsArray,
    setPostsArray,
    route,
    token,
    children,
}) {
    const [offset, setOffset] = useState(5);
    const [loadMoreBoo, setLoadMoreBoo] = useState(true);
    function handleLoadMore() {
        const promise = api.getPosts(route + `?offset=${offset}`, token);
        promise.then((res) => {
            console.log("????");
            if (!res.data?.length) {
                setLoadMoreBoo(false);
                return;
            }
            setOffset(offset + 5);
            setPostsArray(postsArray?.concat(res.data));
        });
        promise.catch((error) => console.log(error.response));
    }

    return (
        <InfiniteScroll
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

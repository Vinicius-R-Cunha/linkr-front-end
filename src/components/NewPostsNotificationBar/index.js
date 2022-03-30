import NotificationBar from "./style";
import { IoReloadCircleSharp } from "react-icons/io5";
import api from "../../services/api";
import { useState } from "react";
import useInterval from "use-interval";

export default function NewPostsNotificationBar({
    route,
    token,
    postsArray,
    setPostsArray,
}) {
    const [newPosts, setNewPosts] = useState([]);

    useInterval(() => {
        const promise = api.getPosts(route, token);
        promise.then((res) => {
            setNewPosts(res.data);
        });
        promise.catch(() => console.log("error"));
    }, 15000);

    const diff = newPosts.length - postsArray?.length;

    return (
        <NotificationBar
            onClick={() => setPostsArray([...newPosts])}
            show={diff > 0}
        >
            <span>
                {diff} new {diff === 1 ? "post" : "posts"}, load more!
            </span>
            <IoReloadCircleSharp className="reload-icon" />
        </NotificationBar>
    );
}

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
    totalPosts,
    setTotalPosts,
}) {
    const [newPosts, setNewPosts] = useState([]);
    const [diff, setDiff] = useState(0);
    console.log(newPosts.length, totalPosts.length);
    console.log("Diff ", diff);

    useInterval(() => {
        const promise = api.getPosts(route + "?noLimit=true", token);
        promise.then((res) => {
            console.log(res.data);
            setNewPosts(res.data);
            setDiff(res.data?.length - totalPosts.length);
        });
        promise.catch(() => setDiff(0));
    }, 15000);

    function handleClickNotification() {
        const totalPostsUpdated = [...newPosts];
        const itemsToUpdate = newPosts?.splice(0, diff);
        console.log("itemsToUpdate", itemsToUpdate);
        setTotalPosts(totalPostsUpdated);
        setPostsArray([...itemsToUpdate, ...postsArray]);
        setDiff(0);
    }

    return (
        <NotificationBar onClick={handleClickNotification} show={diff > 0}>
            <span>
                {diff} new {diff === 1 ? "post" : "posts"}, load more!
            </span>
            <IoReloadCircleSharp className="reload-icon" />
        </NotificationBar>
    );
}

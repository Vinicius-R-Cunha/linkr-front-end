import Header from "../../components/Header";
import Timeline from "../../components/Timeline";
import HashtagBox from "../../components/HashtagBox";
import { Container } from "../HashtagTimeline/style";
import { useParams } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
export default function UserTimeline() {
    const { token } = useContext(UserContext);

    const [hashtags, setHashtags] = useState([]);
    const [isValidUser, setIsValidUser] = useState(false);

    const [user, setUser] = useState();
    const { id } = useParams();
    useEffect(() => {
        if (token) {
            const promise = axios.get(
                process.env.REACT_APP_BACK_URL + "user/" + id,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            promise.then((response) => {
                setUser(response.data);
            });
            promise.catch((error) => {
                console.log(error);
            });
        }
    }, [id, token]);

    return (
        <Container>
            <Header />
            <Timeline
                showPublish={false}
                route={`users/${id}`}
                mainTitle={`${user?.name}'s posts`}
                setHashtags={setHashtags}
                setIsValidUser={setIsValidUser}
            />
            <HashtagBox
                hashtags={hashtags}
                setHashtags={setHashtags}
                isValidUser={isValidUser}
                setIsValidUser={setIsValidUser}
            />
        </Container>
    );
}

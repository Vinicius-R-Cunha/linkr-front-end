import ReactHashtag from "@mdnm/react-hashtag";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { Container, HashtagList, Title, Divider } from "./style";

export default function HashtagBox({ hashtags, setHashtags, isValidUser, setIsValidUser }) {
    const { token } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            const promise = api.getHashtags(token);
            promise.then((response) => {
                setHashtags([...response.data]);
                setIsValidUser(true);
            });
            promise.catch((error) => navigate("/"));
        }
        // eslint-disable-next-line
    }, [token, setHashtags, setIsValidUser]);

    function handleHashtagClick(hashtag) {
        navigate(`/hashtag/${hashtag.replace("#", "")}`);
    }

    return (
        <Container none={isValidUser} className="sidebar">
            <Title>trending</Title>
            <Divider />
            <HashtagList>
                {hashtags?.map((hashtag) => (
                    <li key={hashtag.id}>
                        <ReactHashtag
                            onHashtagClick={(value) =>
                                handleHashtagClick(value)
                            }
                        >
                            {"#" + hashtag.name}
                        </ReactHashtag>
                    </li>
                ))}
            </HashtagList>
        </Container>
    );
};

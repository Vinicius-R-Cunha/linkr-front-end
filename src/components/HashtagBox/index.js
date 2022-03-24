import ReactHashtag from "@mdnm/react-hashtag";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Container, HashtagList, Title, Divider } from "./style";

export default function HashtagBox() {
    const navigate = useNavigate();
    const [hashtags, setHashtags] = useState([]);
    const [isValidUser, setIsValidUser] = useState(false);

    useEffect(() => {
        const promise = api.getHashtags("meu-lindo-token");
        promise.then((response) => {
            setHashtags([...response.data]);
            setIsValidUser(true);
        });
        promise.catch((error) => console.log("Error"));
    }, [isValidUser]);

    function handleHashtagClick(hashtag) {
        navigate(`/hashtag/${hashtag.replace("#", "")}`);
    }

    return (
        <Container none={isValidUser} className="sidebar">
            <Title>trending</Title>
            <Divider />
            <HashtagList>
                {hashtags.map((hashtag) => (
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
}

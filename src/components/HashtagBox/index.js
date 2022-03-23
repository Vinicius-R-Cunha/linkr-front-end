import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, HashtagList, Title, Divider } from "./style";

export default function HashtagBox() {
    const [hashtags, setHashtags] = useState([]);
    const [isValidUser, setIsValidUser] = useState(false);
    console.log(isValidUser);

    useEffect(() => {
        const promise = api.getHashtags("meu-lindo-token");
        promise.then((response) => {
            setHashtags([...response.data]);
            setIsValidUser(true);
        });
        promise.catch((error) => console.log("Error"));
    }, [isValidUser]);

    return (
        <Container none={isValidUser} className="sidebar">
            <Title>trending</Title>
            <Divider />
            <HashtagList>
                {hashtags.map((hashtag) => (
                    <li key={hashtag.id}># {hashtag.name}</li>
                ))}
            </HashtagList>
        </Container>
    );
}

import Header from "../../components/Header";
import Timeline from "../../components/Timeline";
import HashtagBox from "../../components/HashtagBox";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function HashtagTimeline() {
    const { hashtag } = useParams();

    const [hashtags, setHashtags] = useState([]);
    const [isValidUser, setIsValidUser] = useState(false);

    return (
        <Container>
            <Header />
            <Timeline
                showPublish={false}
                route={`hashtag/${hashtag}`}
                mainTitle={`#${hashtag}`}
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

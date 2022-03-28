import Header from "../../components/Header";
import Timeline from "../../components/Timeline";
import HashtagBox from "../../components/HashtagBox";
import { HomeContainer } from "./style";
import { useState } from "react";

export default function Home() {
    const [hashtags, setHashtags] = useState([]);
    const [isValidUser, setIsValidUser] = useState(false);

    return (
        <HomeContainer>
            <Header />
            <Timeline
                showPublish={true}
                route="posts"
                mainTitle="timeline"
                setHashtags={setHashtags}
                setIsValidUser={setIsValidUser}
            />
            <HashtagBox
                hashtags={hashtags}
                setHashtags={setHashtags}
                isValidUser={isValidUser}
                setIsValidUser={setIsValidUser}
            />
        </HomeContainer>
    );
}

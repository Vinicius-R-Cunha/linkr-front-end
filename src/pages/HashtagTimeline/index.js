import Header from "../../components/Header";
import Timeline from "../../components/Timeline";
import HashtagBox from "../../components/HashtagBox";
import { Container } from "./style";
import { useParams } from "react-router-dom";

export default function HashtagTimeline() {
    const { hashtag } = useParams();

    return (
        <Container>
            <Header />
            <Timeline
                showPublish={false}
                route={`hashtag/${hashtag}`}
                mainTitle={hashtag}
            />
            <HashtagBox />
        </Container>
    );
}

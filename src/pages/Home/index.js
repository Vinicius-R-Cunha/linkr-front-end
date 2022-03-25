import Header from "../../components/Header";
import Timeline from "../../components/Timeline";
import HashtagBox from "../../components/HashtagBox";
import { HomeContainer } from "./style";

export default function Home() {
    return (
        <HomeContainer>
            <Header />
            <Timeline showPublish={true} route="posts" mainTitle="timeline" />
            <HashtagBox />
        </HomeContainer>
    );
}

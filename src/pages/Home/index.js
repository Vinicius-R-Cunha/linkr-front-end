import Header from "../../components/Header";
import Timeline from "../../components/Timeline";
import HashtagBox from "../../components/HashtagBox";
import { TimelineContainer } from "./style";

export default function Home() {
    return (
        <TimelineContainer>
            <Header />
            <Timeline />
            <HashtagBox />
        </TimelineContainer>
    );
}

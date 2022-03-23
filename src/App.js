import "./styles/reset.css";
import "./styles/style.css";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import HashtagBox from "./components/HashtagBox";

export default function App() {
    return (
        <>
            <Header />
            <Timeline />
            <HashtagBox />
        </>
    );
}

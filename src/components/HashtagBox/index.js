import { Container, HashtagList, Title, Divider } from "./style";

export default function HashtagBox() {
    return (
        <Container className="sidebar">
            <Title>trending</Title>
            <Divider />
            <HashtagList>
                <li># javascript</li>
                <li># react</li>
                <li># react-native</li>
                <li># material</li>
                <li># web-dev</li>
                <li># mobile</li>
                <li># css</li>
                <li># html</li>
                <li># node</li>
                <li># sql</li>
            </HashtagList>
        </Container>
    );
}

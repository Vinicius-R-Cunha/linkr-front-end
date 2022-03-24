import styled from "styled-components";

const Container = styled.aside`
    display: ${(props) => (props.none ? "flex" : "none")};
    flex-direction: column;

    min-height: 400px;
    width: 300px;

    position: fixed;
    left: 877px;
    top: 232px;

    border-radius: 16px;
    background-color: #171717;
`;

const Title = styled.h2`
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.688rem;

    padding: 20px 15px;

    color: #ffffff;
`;

const Divider = styled.hr`
    border-right: 0;
    border-left: 0;

    width: 100%;
    border-top: 1px solid #484848;
`;

const HashtagList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-style: normal;
    font-weight: 700;
    font-size: 1.188rem;
    letter-spacing: 0.05em;

    padding: 15px 15px;

    color: #ffffff;

    li:hover {
        cursor: pointer;
    }
`;
export { Container, Title, Divider, HashtagList };

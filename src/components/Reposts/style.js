import styled from "styled-components";

const RepostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10px;

    @media (max-width: 630px) {
        margin-top: 6px;
    }
`

export { RepostsContainer }
import styled from "styled-components";

const LikesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 15px;

    .tooltip-style {
        font-family: "Lato";
        font-weight: 700;
        font-size: 11px;
        line-height: 13px;
    }

    @media (max-width: 630px) {
        margin-top: 8px;
    }
`

export { LikesContainer }
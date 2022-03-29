import styled from "styled-components";

const RepostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10px;

    .repost-icon {
        font-size: 25px;
        color: #FFFFFF;
        margin-bottom: 3px;

        cursor: pointer;
    }

    .repost-quantity {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        text-align: center;

        color: #FFFFFF;
    }
`

export { RepostContainer }
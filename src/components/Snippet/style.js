import styled from "styled-components";

const SnippetContainer = styled.div`
    width: 503px;
    height: 155px;

    display: flex;

    margin-top: 13px;

    box-sizing: border-box;
    border-radius: 11px;
    border: 1px solid #4d4d4d;

    cursor: pointer;

    .snippet-data {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        box-sizing: border-box;
        padding: 0 19px;

        .title {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            color: #cecece;
        }

        .description {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            color: #9b9595;
        }

        .link {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 15px;

            color: #cecece;

            word-break: break-all;
        }
    }

    img {
        width: 153.44px;
        height: 153px;

        border-radius: 0px 12px 13px 0px;

        object-fit: cover;
    }

    @media (max-width: 630px) {
        width: 100%;
        height: 115px;

        .snippet-data {
            padding: 0 7px;

            .title {
                font-size: 11px;
                line-height: 13px;
            }

            .description {
                font-size: 9px;
                line-height: 11px;
            }

            .link {
                font-size: 9px;
                line-height: 11px;
            }
        }

        img {
            width: 95px;
            height: 113px;
        }
    }

    @media (max-width: 330px) {
        .snippet-data {

            .title {
                font-size: 10px;
                line-height: 13px;
            }

            .description {
                font-size: 8px;
                line-height: 11px;
            }

            .link {
                font-size: 8px;
                line-height: 11px;
            }
        }
    }
`;

export { SnippetContainer }
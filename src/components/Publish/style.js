import styled from "styled-components";

const PublishContainer = styled.div`
    width: 100%;
    height: 209px;

    display: flex;

    background-color: #ffffff;

    padding-top: 16px;
    margin-bottom: 29px;

    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .inputs {
        width: 525px;

        display: flex;
        flex-direction: column;

        .inputs-title {
            font-family: "Lato";
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            color: #707070;

            margin-top: 5px;
            margin-bottom: 18px;
        }

        .input-link {
            all: unset;

            width: 503px;
            height: 30px;

            font-family: "Lato";
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            text-indent: 13px;

            margin-bottom: 5px;

            background-color: #efefef;
            border-radius: 5px;

            ::placeholder {
                color: #949494;
            }
        }

        .input-article {
            width: 502px;
            height: 66px;

            font-family: "Lato";
            font-style: normal;
            font-weight: 300;
            font-size: 15px;

            resize: none;

            box-sizing: border-box;
            padding: 8px 13px 0 13px;
            margin-bottom: 8px;

            background-color: #efefef;
            border-radius: 5px;
            border: hidden;

            :focus {
                outline: none;
            }

            ::placeholder {
                color: #949494;
            }
        }

        .error-message {
            font-size: 13px;

            color: red;
        }

        button {
            all: unset;

            width: 112px;
            height: 31px;

            font-family: "Lato";
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #ffffff;

            background: #1877f2;

            margin: 0 22px 0 0;

            align-self: flex-end;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 5px;

            cursor: pointer;

            :hover {
                background-color: #3286f3;
            }
        }

        .disabled {
            background-color: #3286f3;
        }
    }

    @media (max-width: 630px) {
        height: 164px;

        border-radius: 0;

        margin-bottom: 16px;

        .image-likes-publish {
            display: none;
        }

        .inputs {
            width: 100%;

            padding: 0 15px;

            .inputs-title {
                font-size: 17px;
                text-align: center;

                margin-top: 10px;
            }

            .input-link {
                width: 100%;

                font-size: 13px;
                text-indent: 11px;
            }

            .input-article {
                width: 100%;
                height: 47px;

                font-size: 13px;

                margin-bottom: 5px;

                padding: 10px;
            }

            button {
                height: 22px;

                font-size: 13px;

                margin: 0;
            }
        }
    }
`;

const ImageLikes = styled.div`
    width: 86px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .profile-image {
        width: 50px;
        height: 50px;

        border-radius: 26.5px;

        margin-bottom: 18px;

        &:hover {
            cursor: pointer;
        }
    }

    .like-icon {
        font-size: 25px;
        cursor: pointer;
    }

    .likes-quantity {
        font-family: "Lato";
        font-weight: 400;
        font-size: 11px;
        text-align: center;
        color: #ffffff;
        cursor: pointer;
        margin-top: 4px;
    }

    @media (max-width: 630px) {
        .profile-image {
            width: 40px;
            height: 40px;
        }
    }
`;

export { PublishContainer, ImageLikes }
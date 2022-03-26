import styled from "styled-components";

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

export { ImageLikes }
import styled from "styled-components";

const TimelineContainer = styled.main`
    width: 100%;

    padding-top: 72px;
    margin-top: 78px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 630px) {
        margin-top: 22px;
    }
`

const PostsContainer = styled.div`
    width: 611px;

    .timeline-title {
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 43px;
        color: #FFFFFF;

        margin-bottom: 43px;
    }

    @media (max-width: 630px) {
        width: 100%;

        .timeline-title {
            font-size: 33px;

            margin-left: 17px;
            margin-bottom: 26px;
        }
    }
`

const Publish = styled.div`
    width: 100%;
    height: 209px;

    display: flex;

    background-color: #FFFFFF;

    padding-top: 16px;
    margin-bottom: 29px;

    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .inputs {
        width: 525px;

        display: flex;
        flex-direction: column;

        .inputs-title {
            font-family: 'Lato';
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

            font-family: 'Lato';
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            text-indent: 13px;
            
            margin-bottom: 5px;

            background-color: #EFEFEF;
            border-radius: 5px;
            
            ::placeholder {
                color: #949494;
            }
        }

        .input-article {
            width: 502px;
            height: 66px;

            font-family: 'Lato';
            font-style: normal;
            font-weight: 300;
            font-size: 15px;

            resize: none;
            
            box-sizing: border-box;
            padding: 8px 13px 0 13px;
            
            background-color: #EFEFEF;
            border-radius: 5px;
            border: hidden;
            
            :focus {
                outline: none;
            }

            ::placeholder {
                color: #949494;
            }   
        }

        button {
            all: unset;

            width: 112px;
            height: 31px;

            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #FFFFFF;

            background: #1877F2;

            margin: 8px 22px 0 0;

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

                padding: 10px;
            }

            button {
                height: 22px;

                font-size: 13px;

                margin: 5px 0 0 0;
            }
        }
    }
`

const Post = styled.div`
    width: 100%;

    padding: 20px 0;

    display: flex;

    margin-bottom: 16px;

    background: #171717;

    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 630px) {
        padding: 10px 0 15px 0;

        border-radius: 0;
    }
`

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

        padding-bottom: 18px;
    }

    .like-icon {
        font-size: 20px;
        color: #FFFFFF;
    }

    .likes-quantity {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 11px;
        text-align: center;
        color: #FFFFFF;

        margin-top: 4px;
    }

    @media (max-width: 630px) {
        .profile-image {
            width: 40px;
            height: 40px;
        }
    }
`

const PostContent = styled.div`
    width: 525px;
    height: 100%;

    display: flex;
    flex-direction: column;

    .profile-name {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        color: #FFFFFF;

        margin-bottom: 9px;
    }

    .article-text {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #B7B7B7;
    }

    @media (max-width: 630px) {
        width: 100%;

        padding-right: 18px;

        .profile-name {
            font-size: 17px;
        }

        .article-text {
            font-size: 15px;
            line-height: 18px;
        }
    }
`

const Snippet = styled.div`
    width: 503px;
    height: 155px;

    display: flex;

    margin-top: 13px;

    box-sizing: border-box;
    border-radius: 11px;
    border: 1px solid #4D4D4D;

    .snippet-data {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        box-sizing: border-box;
        padding: 23px 19px;

        .title {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            color: #CECECE;
        }

        .description {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            color: #9B9595;
        }

        .link {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;

            color: #CECECE;
        }
    }

    img {
        width: 153.44px;
        height: 155px;

        border-radius: 0px 12px 13px 0px;
    }

    @media (max-width: 630px) {
        width: 100%;
        height: 115px;

        .snippet-data {
            padding: 5px 9px;
            
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
            height: 115px;
        }
    }
`

export { TimelineContainer, PostsContainer, Publish, Post, ImageLikes, PostContent, Snippet }
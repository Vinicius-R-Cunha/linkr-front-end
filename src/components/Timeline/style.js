import styled from "styled-components";

const PostsContainer = styled.div`
    width: 611px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-right: 25px;

  .input-icon-mobile {
    width: 100%;
    position: relative;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;

    display: none;
    justify-content: center;
    align-items: center;

    margin-bottom: 22px;

    .search-icon-mobile {
      font-size: 23px;
      color: #c6c6c6;

      position: absolute;
      right: 20px;
      z-index: 3;
    }
  }

  .timeline-title {
    width: 100%;


        font-family: "Oswald";
        font-weight: 700;
        font-size: 43px;
        color: #ffffff;

        margin-bottom: 43px;
    }

    .loading-message {
        font-size: 30px;
        color: #ffffff;
    }

    .get-error-message {
        font-size: 36px;
        line-height: 45px;
        text-align: center;

        color: #ffffff;
    }

  @media (max-width: 960px) {
    margin-right: 0;

    .input-icon-mobile {
      display: flex;
    }
  }

    @media (max-width: 630px) {
        width: 100%;

        .timeline-title {
            font-size: 33px;
            text-indent: 17px;

            margin-bottom: 26px;
        }

        .get-error-message {
            font-size: 20px;
            line-height: 25px;
        }
    }
`;

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

const PostContent = styled.div`
    width: 525px;
    height: 100%;

    display: flex;
    flex-direction: column;

    .profile-name {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 9px;

        font-size: 19px;
        color: #ffffff;

        &:hover {
            cursor: pointer;
        }

        p {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 19px;
        }

        .remove-edit-icons {
            display: flex;
            align-items: center;

            padding-right: 22px;

            .edit-icon {
                font-size: 18px;
                cursor: pointer;
            }
            
            .remove-icon {
                font-size: 16px;
                margin-left: 8px;
                cursor: pointer;
            }
        }
    }
            
  .edit-input {
    width: 502px;
    height: 44px;
    
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4c4c4c;
    
    resize: none;
    
    box-sizing: border-box;
    padding: 3px 7px 3px 7px;
    
    border: 1px solid #4d4d4d;
    background-color: #ffffff;
    border-radius: 7px;

    :focus {
      outline: none;
    }
  }
  
  .article-text {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #b7b7b7;
  }
  
    @media (max-width: 630px) {
        width: 100%;

        padding-right: 18px;

        .profile-name {
            font-size: 17px;

            .remove-edit-icons {
                padding-right: 0;
            }
        }

        .edit-input {
            width: 100%;
            height: 47px;

            font-size: 13px;

            padding: 10px;
          }

        .article-text {
            font-size: 15px;
            line-height: 18px;
        }
    }
`;

const Snippet = styled.div`
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
        justify-content: space-between;

        box-sizing: border-box;
        padding: 23px 19px;

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
            line-height: 13px;

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
            height: 113px;
        }
    }
`;


const StyledHashtag = styled.b`
    font-weight: 700;
    color: #ffffff;
    &:hover {
        cursor: pointer;
    }
`;

export {
    PostsContainer,
    Post,
    ImageLikes,
    PostContent,
    Snippet,
    StyledHashtag
};

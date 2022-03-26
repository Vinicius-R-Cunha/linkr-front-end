import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import Modal from "react-modal";
import { Link } from "react-router-dom";

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

const Debounce = styled(DebounceInput)`
  all: unset;

  width: 97%;
  height: 45px;

  display: none;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  text-indent: 14px;

  background: #ffffff;
  border-radius: 8px;
  
  z-index: 2;
  ::placeholder {
    color: #c6c6c6;
  }

  @media (max-width: 960px) {
    display: flex;
  }
`;

const SearchBar = styled.div`
  display: none;
  flex-direction: column;
  width: 592.67px;
  max-height: 400px;
  position: absolute;
  top: 188px;
  box-sizing: border-box;
  padding-top: 24px;
  padding-left: 17px;
  background-color: #e7e7e7;
  border-radius: 0 0 8px 8px;
  overflow-y: auto;
  overflow-x: auto;
  
  cursor: default;

  @media (max-width: 960px) {
    display: flex;
  }

  @media (max-width: 620px) {
    width: 97%;
    position: absolute;
    margin-top: -10px;
    top: 143px;
    z-index: 1;
  }

  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 2px solid #8f96a3;
    background-color: #2f3237;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 20px 20px 25px 3px;
    color: #515151;
  }
  h3 {
    padding-top: 14px;
    padding-left: 12px;
    color: #515151;
    font-weight: 400;
    font-size: 19px;
  }
  h4 {
    padding-top: 14px;
    padding-left: 8px;
    color: #c5c5c5;
    font-weight: 400;
    font-size: 19px;
  }
`;

const LinkStyle = styled(Link)`
  all: unset;
`;

const SearchedUser = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const Img = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Publish = styled.div`
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
        font-size: 20px;
        color: #ffffff;
    }

    .likes-quantity {
        font-family: "Lato";
        font-weight: 400;
        font-size: 11px;
        text-align: center;
        color: #ffffff;

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
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        color: #ffffff;

        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 9px;

        &:hover {
            cursor: pointer;
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

const StyledModal = styled(Modal)`
    p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 41px;
        text-align: center;
        color: #ffffff;

        margin: 39px 0;
    }

    div {
        display: flex;
        gap: 25px;

        button {
            all: unset;

            width: 134px;
            height: 37px;

            font-family: "Lato";
            font-style: normal;
            font-weight: 700;
            font-size: 18px;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 5px;

            cursor: pointer;

            :first-child {
                color: #1877f2;
                background: #ffffff;
            }

            :last-child {
                color: #ffffff;
                background: #1877f2;
            }
        }
    }
`;

const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
    content: {
        width: "597px",
        height: "262px",
        position: "fixed",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#333333",
        borderRadius: "50px",
    },
};

const StyledHashtag = styled.b`
    font-weight: 700;
    color: #ffffff;
    &:hover {
        cursor: pointer;
    }
`;

export {
  PostsContainer,
  Publish,
  Post,
  ImageLikes,
  PostContent,
  Snippet,
  StyledHashtag,
  StyledModal,
  modalStyles,
  Debounce,
  SearchBar,
  LinkStyle,
  SearchedUser,
  Img
};

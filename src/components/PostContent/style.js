import styled from "styled-components";

const PostContentDiv = styled.div`
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

const StyledHashtag = styled.b`
    font-weight: 700;
    color: #ffffff;
    &:hover {
        cursor: pointer;
    }
`;

export { PostContentDiv, StyledHashtag }
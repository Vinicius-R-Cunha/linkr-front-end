import styled from "styled-components";

const PostsContainer = styled.div`
  width: 611px;

  display: flex;
  flex-direction: column;
  align-items: center;

    margin-right: 25px;
    overflow: auto;

    .input-icon-mobile {
        width: 100%;
        position: relative;


    font-family: "Lato";
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
const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  background: #1e1e1e;
  margin-top: 16px;
  border-radius: 16px;
`;
const Post = styled.div`
  width: 100%;

  padding: 20px 0;
  display: flex;

  background: #171717;

  border-radius: 16px;
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 630px) {
    padding: 10px 0 15px 0;

    border-radius: 0;
  }
`;
export { PostsContainer, Post, ContainerComments };
import styled from "styled-components";

const CommentsContainer = styled.div`
  width: 611px;

  //margin-top: -8px;

  background: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0 0 16px 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 630px) {
    padding: 10px 0 15px 0;

    border-radius: 0;
  }
  .inputComment {
    height: 80px;
    width: 93.45%;
    display: flex;
    gap: 14px;
    align-items: center;
    position: relative;
    .icone {
      height: 15px;
      width: 14px;
      color: #f3f3f3;
      position: absolute;
      right: 12px;
    }
    img {
      height: 39px;
      width: 39px;
      border-radius: 304px;
    }
    input {
      all: unset;
      height: 39px;
      width: 510px;
      left: 319px;
      top: 741px;
      border-radius: 8px;
      background-color: #252525;
      font-family: "Lato";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      text-indent: 10px;
      color: #acacac;
      ::placeholder {
        color: #575757;
        font-family: "Lato";
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0.05em;
        text-align: left;
      }
    }
  }
`;

const CommentContainer = styled.div`
  height: 71px;
  width: 93.45%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #353535;
  gap: 18px;

  img {
    height: 39px;
    width: 39px;
    border-radius: 304px;
  }
  .corpo {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 5px;
    .titulo {
      display: flex;
      gap: 4px;
      h1 {
        font-family: "Lato";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;

        color: #f3f3f3;
      }
      span {
        color: #565656;
        font-family: "Lato";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    p {
      font-family: "Lato";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: #acacac;
    }
  }
`;
export { CommentsContainer, CommentContainer };

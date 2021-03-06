import styled from "styled-components";

const LeftContentContainer = styled.div`
  width: 86px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .profile-image {
    width: 50px;
    height: 50px;

    border-radius: 26.5px;

    &:hover {
      cursor: pointer;
    }
  }

  .left-icon {
    font-size: 20px;
    color: #ffffff;
    cursor: pointer;
  }

  .left-quantity {
    font-family: "Lato";
    font-weight: 400;
    font-size: 11px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    margin-top: 4px;
    margin-bottom: 8px;
  }

  @media (max-width: 630px) {
    .profile-image {
      width: 40px;
      height: 40px;
    }

    .left-icon {
      font-size: 15px;
    }

    .left-quantity {
      font-size: 9px;
    }
  }
`;

export { LeftContentContainer };

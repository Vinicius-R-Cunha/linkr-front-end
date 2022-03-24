import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;
const DescriptionContainer = styled.div`
  width: 55%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding-left: 10%;

  background-color: #151515;

  h1 {
    margin-top: 22%;
    font-family: "Passion One", cursive;
    font-size: 6.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 117px;
    letter-spacing: 0.05em;
    text-align: left;
    color: #ffffff;
  }
  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 2.688rem;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
  @media (max-width: 630px) {
    width: 100%;
    height: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    h1 {
      margin-top: 4%;
      font-size: 4.75rem;
      line-height: 54px;
    }
    h2 {
      font-size: 1.438rem;
      line-height: 34px;
    }
  }
`;

const DataContainer = styled.form`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
  padding-top: 9%;
  input {
    height: 9%;
    width: 80%;
    border: none;
    border-radius: 6px;
    background-color: #ffffff;
    margin-bottom: 1.4%;
    text-indent: 10px;
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.688rem;
    ::placeholder {
      color: #9f9f9f;
    }
  }

  button {
    box-sizing: border-box;
    padding: 0;
    height: 9%;
    width: 81%;
    border: none;
    border-radius: 6px;
    background-color: #1877f2;
    font-family: "Oswald", sans-serif;
    color: #ffffff;
    font-size: 1.688rem;
    font-style: normal;
    font-weight: 700;

    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 22px;
  }
  .error-message {
    margin-bottom: 12px;
    color: red;
  }

  @media (max-width: 630px) {
    width: 100%;
    height: 73.76%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;

    input {
      height: 9%;
      font-size: 1.375rem;
    }

    button {
      height: 9%;
      width: 82%;
      font-size: 1.375rem;
      margin-bottom: 21px;
    }
  }
`;
const StyledLink = styled(Link)`
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: underline;
  color: #ffffff;
`;
export { SignUpContainer, DescriptionContainer, DataContainer, StyledLink };

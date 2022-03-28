import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { Link } from "react-router-dom";

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
  top: 120px;
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

  @media (max-width: 630px) {
    width: 97%;
    position: absolute;
    margin-top: -10px;
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

  cursor: pointer;
`;

const Img = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export {
  Debounce,
  SearchBar,
  LinkStyle,
  SearchedUser,
  Img
}
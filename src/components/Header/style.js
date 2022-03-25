import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { Link } from "react-router-dom";

const LinkStyle = styled(Link)`
  all: unset;
`;
const HeaderDiv = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #151515;
  z-index:10;
  position: fixed;
  top: 0;


  .logo-name {
    font-family: "Passion One", cursive;
    font-weight: 700;
    font-size: 49px;
    letter-spacing: 0.05em;
    color: #ffffff;

    margin-left: 28px;

    cursor: pointer;
  }
  .search {
    position: relative;

    .input-icon {
      position: relative;

      display: flex;
      align-items: center;

      z-index: 10;

      input {
        all: unset;

        width: 563px;
        height: 45px;

        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        text-indent: 14px;

        background: #ffffff;
        border-radius: 8px;

        ::placeholder {
          color: #c6c6c6;
        }
      }

      .search-icon {
        font-size: 23px;
        color: #c6c6c6;

        position: absolute;
        right: 11px;
      }
    }
    .searchContainer {
      position: absolute;
      top: 40px;
      width: 563px;
      height: 200px;
      background-color: green;
    }
  }

  .icon-image {
    display: flex;
    align-items: center;

    margin-right: 17px;

        z-index: 9;

        .chevron-icon{
            font-size: 27px;
            color: #FFFFFF;

      margin-right: 12px;

            cursor: pointer;

            z-index: 9;      
                      
            animation: fadeIn 0.6s;

            @keyframes fadeIn {
                0% {opacity:0;}
                100% {opacity:1;}
            }
        }

    img {
      width: 53px;
      height: 53px;

      border-radius: 26.5px;

            cursor: pointer;

            z-index: 9;
        }

    .logout-button {
      width: 150px;
      height: 47px;

      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      letter-spacing: 0.05em;
      color: #ffffff;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 72px;
      right: -17px;

      background: #171717;
      border-radius: 0px 0px 20px 20px;

            cursor: pointer;
            
            z-index: 9;

            animation: go-down 0.3s;

            @keyframes go-down {
                0% {
                    background-color: #171717;
                    color: #171717;
                    transform: translateY(-30px);
                }
                100% {
                    transform: translateY(0px);
                }
            }   
        }
  }

  @media (max-width: 1200px) {
    .search {
      display: none;
    }

    .logo-name {
      font-size: 45px;

      margin-left: 17px;
    }
  }
`;
const OverLay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 7;
`;

const Debounce = styled(DebounceInput)`
  all: unset;

  width: 563px;
  height: 45px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  text-indent: 14px;

  background: #ffffff;
  border-radius: 8px;

  ::placeholder {
    color: #c6c6c6;
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  width: 563px;
  max-height: 400px;
  position: absolute;
  top: 38px;
  box-sizing: border-box;
  padding-top: 24px;
  padding-left: 17px;
  background-color: #e7e7e7;
  border-radius: 0 0 8px 8px;
  overflow-y: auto;
  overflow-x: auto;
  @media (max-width: 620px) {
    width: 95vw;
    position: absolute;
    margin-top: -10px;
    top: 147px;
    z-index: 5;
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

export {
  HeaderDiv,
  OverLay,
  Debounce,
  Img,
  SearchedUser,
  SearchBar,
  LinkStyle,
};

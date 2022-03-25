import styled from "styled-components";

const HeaderDiv = styled.div`
    width: 100%;
    height: 72px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #151515;

    position: fixed;
    top: 0;

    .logo-name {
        font-family: 'Passion One', cursive;
        font-weight: 700;
        font-size: 49px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        
        margin-left: 28px;

        cursor: pointer;

        z-index: 10;
    }

    .input-icon {
        position: relative;

        display: flex;
        align-items: center;

        input {
            all: unset;

            width: 563px;
            height: 45px;

            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 19px;
            text-indent: 14px;

            background: #FFFFFF;
            border-radius: 8px;

            ::placeholder {
                color: #C6C6C6;
            }
        }

        .search-icon {
            font-size: 23px;
            color: #C6C6C6;

            position: absolute;
            right: 11px;
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

            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            letter-spacing: 0.05em;
            color: #FFFFFF;

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
        .input-icon {
            display: none;
        }
        
        .logo-name {
            font-size: 45px;

            margin-left: 17px;
        }

        .icon-image {
            margin-right: 14px;
        }
    }
`

const OverLay = styled.div`
    width: 100%;
    height: 100%;
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 7;
`

export { HeaderDiv, OverLay };
import styled from "styled-components";
import Modal from "react-modal";

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

export {
    StyledModal,
    modalStyles
}
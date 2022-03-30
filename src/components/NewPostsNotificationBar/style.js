import styled from "styled-components";

const NotificationBar = styled.div`
    display: ${(props) => (props.show ? "flex" : "none")};
    justify-content: center;
    align-items: center;

    transition: 0.4s;

    gap: 10px;

    width: 100%;
    height: 60px;
    margin-bottom: 16px;

    border-radius: 16px;
    background-color: #1877f2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    span {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;

        color: #ffffff;
    }

    .reload-icon {
        font-size: 1.25rem;
        color: #ffffff;
    }

    :hover {
        transition: 0.4s;
        background-color: #0c66dc;
        cursor: pointer;
    }
`;

export default NotificationBar;

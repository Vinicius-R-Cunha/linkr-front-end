import {
    StyledModal,
    modalStyles
} from "./style";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function ConfirmationModal({ postId, closeModal, renderPage, route, modalIsOpen }) {

    const { token } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    StyledModal.setAppElement(document.getElementById("#home"));

    async function handleDeletion() {
        setLoading(true);
        try {
            await axios.delete(
                process.env.REACT_APP_BACK_URL + `posts/${postId}`,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            closeModal();
            renderPage(route);
        } catch (error) {
            toast.error("Could not delete this post", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
            closeModal();
        }
        setLoading(false);
    }


    return (
        <StyledModal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={closeModal}
            style={modalStyles}
        >
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>
                        Are you sure you want <br /> to delete this
                        post?
                    </p>
                    <div>
                        <button onClick={closeModal}>
                            No, go back
                        </button>
                        <button onClick={handleDeletion}>
                            Yes, delete it
                        </button>
                    </div>
                </>
            )}
        </StyledModal>
    );
}
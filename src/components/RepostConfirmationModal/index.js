import {
    StyledModal,
    modalStyles
} from "./style";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

export default function RepostConfirmationModal({ postId, closeModal, renderPage, route, modalIsOpen }) {

    const { token } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    async function handleRepost() {
        setLoading(true);

        try {
            await api.publishRepost(postId, token);

            closeModal();
            renderPage(route);
        } catch (error) {
            console.log(error.response)
            toast.error("Could not repost this post", {
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
                        Do you want to re-post <br /> this link?
                    </p>
                    <div>
                        <button onClick={closeModal}>
                            No, cancel
                        </button>
                        <button onClick={handleRepost}>
                            Yes, share!
                        </button>
                    </div>
                </>
            )}
        </StyledModal>
    );
}
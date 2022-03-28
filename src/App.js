import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import { HashtagTimeline, Home, Login, SignUp, UserTimeline } from "./pages";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

export default function App() {
    const tokenOnLocalStorage = localStorage.getItem("token");

    const [token, setToken] = useState(tokenOnLocalStorage);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const [users, setUsers] = useState();

    function setAndPersistToken(token) {
        setToken(token);
        localStorage.setItem("token", token);
    }
    return (
        <UserContext.Provider
            value={{
                token,
                setToken,
                setAndPersistToken,
                name,
                setName,
                image,
                setImage,
                id,
                setId,
                users,
                setUsers,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/timeline" element={<Home />} />
                    <Route
                        path="/hashtag/:hashtag"
                        element={<HashtagTimeline />}
                    />
                    <Route path="/users/:id" element={<UserTimeline />} />
                </Routes>
                <GlobalStyles />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

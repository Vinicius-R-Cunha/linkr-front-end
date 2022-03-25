import "./styles/reset.css";
import "./styles/style.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import { HashtagTimeline, Home } from "./pages";

export default function App() {
    const tokenOnLocalStorage = localStorage.getItem("token");

    const [token, setToken] = useState(tokenOnLocalStorage);
    const [image, setImage] = useState('');
    const [name, setName] = useState('');

    function setAndPersistToken(token) {
        setToken(token);
        localStorage.setItem("token", token);
    }
    return (
        <UserContext.Provider value={{ token, setToken, setAndPersistToken, name, setName, image, setImage }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/timeline" element={<Home />} />
                    <Route
                        path="/hashtag/:hashtag"
                        element={<HashtagTimeline />}
                    />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

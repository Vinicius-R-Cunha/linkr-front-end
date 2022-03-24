import "./styles/reset.css";
import "./styles/style.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

export default function App() {
    const tokenOnLocalStorage = localStorage.getItem("token");

    const [token, setToken] = useState(tokenOnLocalStorage);

    function setAndPersistToken(token) {
        setToken(token);
        localStorage.setItem("token", token);
    }
    return (
        <UserContext.Provider value={{ token, setToken, setAndPersistToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/timeline" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

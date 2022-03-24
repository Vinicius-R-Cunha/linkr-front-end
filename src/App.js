import "./styles/reset.css";
import "./styles/style.css";
import Timeline from "./components/Timeline";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useEffect, useState } from "react";

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
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

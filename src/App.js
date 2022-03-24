import "./styles/reset.css";
import "./styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/timeline" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

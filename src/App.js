import "./styles/reset.css";
import "./styles/style.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/timeline" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

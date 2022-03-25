import { HeaderDiv, OverLay } from "./style"
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { HiOutlineSearch } from 'react-icons/hi'
import api from "../../services/api";
import UserContext from "../../contexts/UserContext";

export default function Header() {

    const { token, image } = useContext(UserContext);

    const navigate = useNavigate();

    const [showLogout, setShowLogout] = useState(false);

    async function signOut(){
        try{ 
            await api.signOut(token);
            localStorage.removeItem("token");
            setShowLogout(false);
            navigate('/');

        } catch(error) {
            console.log(error);
        };
    };

    return (
        <HeaderDiv>
            <p className="logo-name">linkr</p>
            <div className="input-icon">
                <input type="text" placeholder="Search for people" />
                <HiOutlineSearch className="search-icon" />
            </div>
            <div className="icon-image">
                {showLogout &&
                    <>

                    <BsChevronUp className="chevron-icon" onClick={() => setShowLogout(false)} />
                        <div onClick={signOut} className="logout-button">Logout</div>
                        <OverLay onClick={() => setShowLogout(false)}/>
                    </>
                }
                {!showLogout &&
                   <BsChevronDown className="chevron-icon" onClick={() => setShowLogout(true)} />
                }
                
                <img src={image} alt="loading..." />
                
            </div>
        </HeaderDiv>
    );
}
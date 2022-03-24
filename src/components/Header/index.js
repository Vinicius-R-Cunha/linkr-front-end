// import { useNavigate } from 'react-router-dom';
import { HeaderDiv, OverLay } from "./style"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import temp from "../../assets/perfil-temp.png"
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { HiOutlineSearch } from 'react-icons/hi'

export default function Header() {

    const navigate = useNavigate();

    const [showLogout, setShowLogout] = useState(false);

    function signOut(){
        console.log('saiu')
        setShowLogout(false);
        navigate('/');
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
                
                <img src={temp} alt="" />
                
            </div>
        </HeaderDiv>
    );
}
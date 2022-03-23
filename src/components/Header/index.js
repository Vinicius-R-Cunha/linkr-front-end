import { HeaderDiv } from "./style"
import { useState } from "react";
import temp from "../../assets/perfil-temp.png"
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { HiOutlineSearch } from 'react-icons/hi'

export default function Header() {
    const [showLogout, setShowLogout] = useState(false);

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
                        <div className="logout-button">Logout</div>
                    </>
                }
                {!showLogout && <BsChevronDown className="chevron-icon" onClick={() => setShowLogout(true)} />}
                <img src={temp} alt="" />
            </div>
        </HeaderDiv>
    );
}
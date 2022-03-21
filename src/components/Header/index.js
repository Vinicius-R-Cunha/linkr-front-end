import { HeaderDiv } from "./style"
import { useState } from "react";
import temp from "../../assets/perfil-temp.png"

export default function Header() {
    const [showLogout, setShowLogout] = useState(false);

    return (
        <HeaderDiv>
            <p className="logo-name">linkr</p>
            <div className="input-icon">
                <input type="text" placeholder="Search for people" />
                <ion-icon name="search-sharp"></ion-icon>
            </div>
            <div className="icon-image">
                {showLogout &&
                    <>
                        <ion-icon onClick={() => setShowLogout(false)} name="chevron-up-outline"></ion-icon>
                        <div className="logout-button">Logout</div>
                    </>
                }
                {!showLogout && <ion-icon onClick={() => setShowLogout(true)} name="chevron-down-outline"></ion-icon>}
                <img src={temp} alt="" />
            </div>
        </HeaderDiv>
    );
}
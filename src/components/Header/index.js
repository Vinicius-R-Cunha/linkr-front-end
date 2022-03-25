import { HeaderDiv, Debounce, OverLay } from "./style";
import { useState, useEffect } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import api from "../../services/api";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Header() {
  const [showLogout, setShowLogout] = useState(false);
  const [users, setUsers] = useState();
  const [search, setSearch] = useState();
  const token = localStorage.getItem("token");
  const { image } = useContext(UserContext);

  const navigate = useNavigate();

  async function signOut() {
    try {
      await api.signOut(token);
      localStorage.removeItem("token");
      setShowLogout(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const promise = axios.get(process.env.REACT_APP_BACK_URL + "users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    promise.then((response) => {
      setUsers(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  const getFilteredItems = (query, users) => {
    if (!query) {
      return;
    }
    return users.filter((user) => user.name.includes(query));
  };

  const filteredItems = getFilteredItems(search, users);
  console.log(filteredItems);
  return (
    <HeaderDiv>
      <p onClick={() => navigate("/timeline")} className="logo-name">
        linkr
      </p>
      <div className="search">
        <div className="input-icon">
          <Debounce
            minLength={3}
            debounceTimeout={300}
            type="text"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for people"
          />
          <HiOutlineSearch className="search-icon" />
        </div>

        <div className="searchContainer"></div>
      </div>
      <div className="icon-image">
        {showLogout && (
          <>
            <BsChevronUp
              className="chevron-icon"
              onClick={() => setShowLogout(false)}
            />
            <div onClick={signOut} className="logout-button">
              Logout
            </div>
            <OverLay onClick={() => setShowLogout(false)} />
          </>
        )}
        {!showLogout && (
          <BsChevronDown
            className="chevron-icon"
            onClick={() => setShowLogout(true)}
          />
        )}

        <img src={image} alt="loading..." />
      </div>
    </HeaderDiv>
  );
}

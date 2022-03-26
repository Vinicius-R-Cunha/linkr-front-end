import {
  HeaderDiv,
  OverLay,
  Debounce,
  Img,
  SearchedUser,
  SearchBar,
  LinkStyle,
} from "./style";
import { useState, useEffect, useContext } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import api from "../../services/api";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import { v4 as uuid } from "uuid";

export default function Header() {

  const [showLogout, setShowLogout] = useState(false);
  const [search, setSearch] = useState();
  const { token, image, users, setUsers } = useContext(UserContext);

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
  }, [token]);

  const getFilteredItems = (query, users) => {
    if (!query) {
      return;
    }
    return users.filter((user) => user.name.includes(query));
  };

  const filteredItems = getFilteredItems(search, users);

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
        {filteredItems === undefined || search.length <= 2 ? null : (
          <SearchBar>
            {filteredItems.length === 0 ? (
              <h2>Nenhum usuário encontrado</h2>
            ) : (
              filteredItems
                .sort(function (x, y) {
                  return x.isFollowingLoggedUser === y.isFollowingLoggedUser
                    ? 0
                    : x.isFollowingLoggedUser
                      ? -1
                      : 1;
                })
                .map((user) => (
                  <LinkStyle
                    key={uuid()}
                    onClick={() => setSearch("")}
                    to={`/users/${user.id}`}
                  >
                    <SearchedUser>
                      <Img src={user.image} alt="" />
                      <h3>{user.name}</h3>{" "}
                      {user.isFollowingLoggedUser ? <h4>• following</h4> : null}
                    </SearchedUser>
                  </LinkStyle>
                ))
            )}
          </SearchBar>
        )}
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

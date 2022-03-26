import {
    Debounce,
    SearchBar,
    LinkStyle,
    SearchedUser,
    Img
} from "./style";
import { useContext, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { v4 as uuid } from "uuid";
import UserContext from "../../contexts/UserContext";

export default function SearchBarMobile() {

    const { users } = useContext(UserContext);

    const [search, setSearch] = useState();

    const getFilteredItems = (query, users) => {
        if (!query) {
            return;
        }
        return users.filter((user) => user.name.includes(query));
    };

    const filteredItems = getFilteredItems(search, users);

    return (
        <>
            <div className="input-icon-mobile">
                <Debounce
                    minLength={3}
                    debounceTimeout={300}
                    type="text"
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search for people and friends"
                />
                <HiOutlineSearch className="search-icon-mobile" />
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
        </>
    );
}
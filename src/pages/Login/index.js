import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  LoginContainer,
  DescriptionContainer,
  DataContainer,
  StyledLink,
} from "./style";
import UserContext from "../../contexts/UserContext";

export default function Login() {
  const { setAndPersistToken } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    const promise = axios.post(process.env.REACT_APP_BACK_URL + "sign-in", {
      email,
      password,
    });

    promise.then((response) => {
      setAndPersistToken(response.data.token);
      navigate("/timeline");
    });
    promise.catch((error) => {
      console.log(error.response);
      setEmail("");
      setPassword("");
    });
  }
  return (
    <LoginContainer>
      <DescriptionContainer>
        <h1>linkr</h1>
        <h2>
          save, share and discover<br></br>
          the best links on the web
        </h2>
      </DescriptionContainer>
      <DataContainer>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={() => handleLogin()}>Log In</button>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </DataContainer>
    </LoginContainer>
  );
}

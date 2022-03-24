import {
  SignUpContainer,
  DescriptionContainer,
  DataContainer,
  StyledLink,
} from "./style";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  function handleSignUp() {
    const promise = axios.post(process.env.REACT_APP_BACK_URL + "sign-up", {
      name,
      email,
      password,
      image,
    });

    promise.then((response) => {
      navigate("/");
    });
    promise.catch((error) => {
      console.log(error.response);
      setEmail("");
      setPassword("");
      setName("");
      setImage("");
    });
  }
  return (
    <SignUpContainer>
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
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="username"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="picture url"
        />
        <button onClick={() => handleSignUp()}>Sign Up</button>
        <StyledLink to="/">Switch back to log in</StyledLink>
      </DataContainer>
    </SignUpContainer>
  );
}

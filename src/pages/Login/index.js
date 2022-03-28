import { useState, useContext, useEffect } from "react";
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const navigate = useNavigate();

  const { token } = useContext(UserContext);

  // useEffect(() => {
  //   if (token) {
  //     navigate('/timeline');
  //   }
  //   // eslint-disable-next-line
  // }, [token])

  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {

    e.preventDefault();

    setDisabledButton(true);

    const emailNotEmpty = formData.email !== "";
    const passwordNotEmpty = formData.password !== "";

    if (emailNotEmpty && passwordNotEmpty) {
      const promise = axios.post(
        process.env.REACT_APP_BACK_URL + "sign-in",
        formData
      );
      promise.then((response) => {
        setAndPersistToken(response.data);
        navigate("/timeline");
      });
      promise.catch(handleError);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
    setDisabledButton(false);
    return;
  }

  function handleError() {
    setError(true);
    setTimeout(() => setError(false), 2500);
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
          name="email"
          placeholder="e-mail"
          onChange={(e) => handleInput(e)}
          value={formData.email}
        />

        <input
          type="password"
          name="password"
          onChange={(e) => handleInput(e)}
          value={formData.password}
          placeholder="password"
        />
        {error && (
          <p className="error-message">Usuário e/ou senha incorretos</p>
        )}
        <button
          type="submit"
          disabled={disabledButton}
          onClick={(e) => handleSubmit(e)}
        >
          Log In
        </button>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </DataContainer>
    </LoginContainer>
  );
}

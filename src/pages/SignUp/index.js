import {
  SignUpContainer,
  DescriptionContainer,
  DataContainer,
  StyledLink,
} from "./style";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });
  const [errorData, setErrorData] = useState();
  const [disabledButton, setDisabledButton] = useState(false);

  const { token } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/timeline');
    }
  }, [token, navigate])

  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setDisabledButton(true);
    setErrorData({ ...formData });
    setTimeout(() => setErrorData(), 3500);

    const imageNotEmpty = formData.image !== "";
    const nameNotEmpty = formData.name !== "";
    const emailNotEmpty = formData.email !== "";
    const emailIsLowerCased = formData.email === formData.email.toLowerCase();
    const passwordNotEmpty = formData.password !== "";

    if (
      imageNotEmpty &&
      nameNotEmpty &&
      emailNotEmpty &&
      passwordNotEmpty &&
      emailIsLowerCased
    ) {
      const promise = axios.post(
        process.env.REACT_APP_BACK_URL + "sign-up",
        formData
      );
      promise.then((response) => {
        navigate("/");
      });
      promise.catch((error) => {
        console.log(error.response);
        if (error.response.status === 409) {
          return Swal.fire({
            icon: "error",
            title: "Ops...",
            text: "Este e-mail ja está cadastrado!",
          });
        }
      });
      setDisabledButton(false);
    } else {
      return;
    }
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
          name="email"
          placeholder="e-mail"
          onChange={(e) => handleInput(e)}
          value={formData.email}
        />
        {errorData?.email === "" && (
          <p className="error-message">digite seu email</p>
        )}
        <input
          type="password"
          name="password"
          onChange={(e) => handleInput(e)}
          value={formData.password}
          placeholder="password"
        />
        {errorData?.password === "" && (
          <p className="error-message">digite sua senha</p>
        )}
        <input
          type="text"
          name="name"
          onChange={(e) => handleInput(e)}
          value={formData.name}
          placeholder="username"
        />
        {errorData?.name === "" && (
          <p className="error-message">digite seu usuario</p>
        )}
        <input
          type="text"
          name="image"
          onChange={(e) => handleInput(e)}
          value={formData.image}
          placeholder="picture url"
        />
        {errorData?.image === "" && (
          <p className="error-message">digite a url da imagem</p>
        )}
        <button
          type="submit"
          disabled={disabledButton}
          onClick={(e) => handleSubmit(e)}
        >
          Sign Up
        </button>

        <StyledLink to="/">Switch back to log in</StyledLink>
      </DataContainer>
    </SignUpContainer>
  );
}

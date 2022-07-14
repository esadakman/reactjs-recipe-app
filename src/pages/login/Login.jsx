import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginStyled,
  FormContainer,
  Header,
  InputStyled,
  FormStyled,
  IMGStyled,
  ButtonStyled,
} from "./Login.styled";
import meal2 from "../../assets/meal2.svg";

const Login = () => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = {
    username: `${username}`,
    password: `${password}`,
  };
  // localStorage.setItem("navbar", false);
  // console.log(userInfo);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    // localStorage.setItem("navbar", true);

    Navigate("/home");
  };
  return (
    <LoginStyled>
      <FormContainer>
        <IMGStyled src={meal2} />
        <Header>{`<esad/>`}Recipe</Header>
        <FormStyled onSubmit={handleSubmit}>
          <InputStyled
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <InputStyled
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ButtonStyled type="submit">Login</ButtonStyled>
        </FormStyled>
      </FormContainer>
    </LoginStyled>
  );
};

export default Login;

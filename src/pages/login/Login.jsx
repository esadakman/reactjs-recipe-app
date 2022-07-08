// import React from "react";
// import LoginStyled from "./Login.styled";

// const Login = () => {
//   return (
//     <LoginStyled>
//       <h1>LOGIN</h1>
//     </LoginStyled>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginStyled,
  FormContainer,
  Header,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    Navigate("/home");
    // window.location.href = "/home";
  };
  return (
    <LoginStyled>
      <FormContainer>
        <StyledImg src={meal2} />
        <Header>{`<esad/>`}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <StyledInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginStyled>
  );
};

export default Login;

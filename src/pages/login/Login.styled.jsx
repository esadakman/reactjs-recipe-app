// import styled from "styled-components";

// const LoginStyled = styled.div`
//   /* ... */
// `;

// export default LoginStyled;

import styled from "styled-components";

export const LoginStyled = styled.div`
  background-image: linear-gradient(to right, #0098f795, #f116129e);
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  transition: all 1s;
`;

export const FormContainer = styled.div`
  transition: all 1s;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: #fffbfb1d;
  letter-spacing: 0.2rem;
  padding: 2rem;
  gap: 0.5rem;
  width: 23rem;
`;

export const Header = styled.h1`
  color: white;
  font-size: 2rem;
`;

export const StyledInput = styled.input`
  border-radius: 0.3rem;
  background-color: #050f24af;
  color: #f8f8f8;
  width: 10rem;
  height: 2rem;
  text-indent: 10px;
  outline: none;
  border: inherit;
  transition: all 0.4s;
  ::placeholder {
    color: #ffffffa5;
  }
  &:focus {
    transition: all 0.1s;
    outline: none;
    border: 1px solid white;
    transform: scale(1.05);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledButton = styled.button`
  margin: 0.5 rem;
  border-radius: 2rem;
  border: none;
  height: 2rem;
  width: auto;
  background: #e53835;
  opacity: 0.8;

  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
    opacity: 0.9;
  }
  :active {
    opacity: 1;
  }
`;

export const StyledImg = styled.img`
  width: 9rem;
  /* margin: 1rem; */
`;

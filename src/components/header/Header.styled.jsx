// export default HeaderContainer;
import styled from "styled-components";

export const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  /* height: 100vh; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  font-family: Montserrat, sans-serif;
  gap: 1rem;
`;

export const H1 = styled.h1`
  font-weight: bolder;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #050f24;
  border-radius: 1rem;
  /* min-width: 25rem; */
  min-height: 4rem;
`;

export const ButtonStyle = styled.button`
  padding: 1rem;
  background-color: #03bfcb;
  border: 1px solid #090325;
  border-radius: 1rem;
  color: #050f24;
  text-decoration: none;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  font-size: 1.1rem;
  :hover {
    opacity: 0.9;
    color: #03bfcb;
    background-color: #090325;
    border: 2px solid #03bfcb;
  }
  :active {
    opacity: 1;
  }
`;

export const Input = styled.input`
  text-indent: 0.3rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  color: #090325;
  caret-color: #090325;
  transition: all 0.5s;
  border: 2px solid #090325;

  /* height: 3rem; */
  ::placeholder {
    font-weight: bold;
    font-family: Montserrat, sans-serif;
  }
  &:focus {
    border: 2px solid #03bfcb;
    outline: none;
  }
`;

export const Select = styled.select`
  font-family: Montserrat, sans-serif;
  /* width: fit-content; */
  padding: 0 10px;
  font-size: 1.1rem;
  transition: all 0.7s ease-in-out;
  border: 1px solid #090325;
  border-radius: 1rem;
  font-weight: 600;
  option {
    color: #090325;
  }
`;

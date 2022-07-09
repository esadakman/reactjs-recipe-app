import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #050f24;
  display: flex;
  color: black;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  height: 11vh;
  font-family: "Roboto", sans-serif;
  padding: 0 1rem;
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  & > a {
    transition: all 0.3s linear;
    color: white;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
export const TextStyle = styled.div`
  font-size: 0.7rem;
  color: white;
  & > p {
    color: white;
  }
`;

export default FooterStyle;

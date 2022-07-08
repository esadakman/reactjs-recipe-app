import styled from "styled-components";

const SectionStyled = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;
  position: relative;
  font-family: "Roboto", sans-serif;
`;

export const DivStyled = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  & > img {
    height: 20rem;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  & > h1 {
    font-size: 10rem;
    font-weight: 100;
  }
`;

export default SectionStyled;

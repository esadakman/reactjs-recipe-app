import styled from "styled-components";

const CardArea = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
  /* background-color: #c4d7ed; */
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  overflow-x: hidden;
  background-color: #c4d7ed;
`;

export const LoadingDiv = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const ImgContainer = styled.div`
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HomeImg = styled.img`
  width: 30rem;
  /* max-width: 750px; */
`;

export default CardArea;

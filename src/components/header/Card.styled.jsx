import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 20%;
  height: 20rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  cursor: pointer;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  transition: z-index 500ms, transform 500ms;
  z-index: 0;
  perspective: 1000px;
  transform-style: preserve-3d;
  justify-content: center;
  width: 15%;
  max-width: 15%;
  min-width: 13rem;
  height: 15rem;
  max-height: 15rem;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  &.flipped {
    z-index: 1;
  }
`;

const CardSide = css`
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
`;

export const CardFront = styled.div`
  ${CardSide};
  z-index: 0;
  background-color: white;
  width: 100%;
  overflow: hidden;
  /* padding: 0.8rem; */
  /* & > h2 {
    font-size: 1rem;
    text-align: center;
  }
  */
`;
export const TextDiv = styled.div`
  border-radius: 1rem 1rem 0 0;
  height: 3rem;
  padding: 0.5rem;
  background-color: #0a7373;
  color: #eaf2f3;
  overflow: hidden;
  text-align: center;
  font-family: Montserrat, sans-serif;
  & > h2 {
    font-size: 1rem;
  }
`;

export const IMGContainer = styled.div`
  width: 10rem;
  height: 10rem;
  margin: auto;
  & > img {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    border: 1px solid blue;
  }
`;

export const CardBack = styled.div`
  ${CardSide};
  transform: rotateY(-180deg) translate(100%, 0);
  border-radius: 1rem;
  background-color: #090a3be9;
  z-index: 1;
  width: 100%;
`;

export const CardInner = styled.div`
  flex: 1;
  display: flex;
  transition: transform 500ms;
  transform-style: preserve-3d;
  &.flipped {
    transform: rotateY(180deg);
  }
`;

export const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 8rem;
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 1rem;
  gap: 0.5rem;
  & > p {
    /* white-space: pre-line; */
    text-transform: capitalize;
    & > span {
      color: #80e2e9;
    }
  }
`;

export const ButtonStyleCard = styled.button`
  padding: 1rem;
  background-color: #03bfcb;
  border: 2px solid #090325;
  border-radius: 0.7rem;
  color: #050f24;
  text-decoration: none;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  font-size: 1.1rem;
  width: 8rem;
  margin: 1rem auto;
  :hover {
    opacity: 0.9;
    color: #03bfcb;
    background-color: #09032563;
    border: 2px solid #03bfcb;
  }
  :active {
    opacity: 1;
  }
`;

export default CardContainer;

// {/* <palette>
//   <color  #012030 />
//   <color  #13678A />
//   <color  #45C4B0 />
//   <color:  #9AEBA3; />
//   <color  #DAFDBA />
// </palette>; */}

//  <palette>
//  < color: #011526 />
//  < color: #012E40 />
//  < color: #025959 />
//  < color: #02735E />
//  < color: #038C65 />
//  </palette>

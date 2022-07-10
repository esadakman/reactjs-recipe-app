import styled, { css } from "styled-components";

const CardContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  transition: z-index 500ms, transform 500ms;
  z-index: 0;
  perspective: 1000px;
  transform-style: preserve-3d;
  width: 10rem;
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
  border: 2px solid #0d0d0d;
`;

export const CardFront = styled.div`
  ${CardSide};
  z-index: 0;
  background-color: white;
`;

export const CardBack = styled.div`
  ${CardSide};
  transform: rotateY(-180deg) translate(100%, 0);
  background-color: #d7d7d7;
  z-index: 1;
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

// export const ButtonStyle = styled.button`
//   cursor: pointer;
// `;

export default CardContainer;

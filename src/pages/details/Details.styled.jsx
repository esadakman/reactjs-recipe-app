import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const LabelDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 90%;
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  & > p {
    width: 38rem;
    font-size: 1.5rem !important;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      width: fit-content;
      min-width: 19rem;
    }
  }
  & > div {
    text-align: center;
    height: fit-content;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.navColor};
  border-radius: 1rem;
  width: 90vw;
  gap: 1rem;
  margin: 1rem 0 3rem 0;

  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.cardText};
  @media (max-width: ${({ theme }) => theme.size.mdl}) {
    flex-direction: column;
    width: fit-content;
    gap: 2rem;
  }
`;

export const MealInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 30%;
  min-width: 13rem;

  & > p {
    font-size: 1.1rem;
    text-align: right;
    font-family: "Patrick Hand", cursive;
    line-height: 1.5rem;
    letter-spacing: 0.5px;
    & > span {
      margin-left: 0.3rem;
      color: #c44a4a;
    }
  }
`;

export const IMGDiv = styled.div`
  width: 30%;
  min-width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    border: 2px solid ${({ theme }) => theme.colors.navColor};
    border-radius: 1rem;
    width: 14rem;
    padding: 0.5rem;
  }
`;

export const MealIngredients = styled.div`
  width: 30%;
  min-width: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  /* border: 2px red solid; */
  /* align-items: center; */
  justify-content: center;
  & > p {
    /* text-indent: 2rem; */
    text-align: left;
    font-size: 1rem;
    font-family: "Patrick Hand", cursive;
    & > span {
      color: #c44a4a;
    }
  }
`;

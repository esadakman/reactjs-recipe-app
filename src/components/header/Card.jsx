import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer, {
  ButtonStyleCard,
  CardBack,
  CardFront,
  CardInner,
  DescDiv,
  IMGContainer,
  // Section,
  TextDiv,
} from "./Card.styled";

const Card = ({ recipe }) => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();
  const handleMore = () => {
    console.log(recipe);
  };
  return (
    // <Section>
    <CardContainer
      onMouseEnter={() => setFlipped(true)}
      // onMouseLeave={() => setFlipped(false)}
    >
      <CardInner className={flipped ? "flipped" : ""}>
        <CardFront>
          <TextDiv>
            <h2 title={recipe.label}>{recipe.label}</h2>
          </TextDiv>
          <IMGContainer>
            <img src={recipe.image} alt="food images" />
          </IMGContainer>
        </CardFront>
        <CardBack>
          <TextDiv>
            <h2 title={recipe.label}>{recipe.label}</h2>
          </TextDiv>
          <DescDiv>
            <p>
              Dish Type: <span>{recipe.dishType[0]}</span>
            </p>
            <p>
              Meal Type: <span>{recipe.mealType[0]}</span>{" "}
            </p>
            <p>
              Cuisine Type: <span>{recipe.cuisineType[0]}</span>
            </p>
          </DescDiv>
          <ButtonStyleCard onClick={handleMore}>View More</ButtonStyleCard>
        </CardBack>
      </CardInner>
    </CardContainer>
    // </Section>
  );
};

export default Card;

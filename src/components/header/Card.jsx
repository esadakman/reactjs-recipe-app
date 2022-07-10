import { Button } from "@mui/material";
import React, { useState } from "react";
import CardContainer, { CardBack, CardFront, CardInner } from "./Card.styled";

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div>
      <CardContainer>
        <CardInner className={flipped ? "flipped" : ""}>
          <CardFront>
            <h2>Front Side</h2>
            <p>Content Front</p>
            <Button onMouseEnter={() => setFlipped(true)}>Flip</Button>
          </CardFront>
          <CardBack>
            <h2>BackSide</h2>
            <p>Content Back</p>
            <Button onMouseLeave={() => setFlipped(false)}>Flip</Button>
          </CardBack>
        </CardInner>
      </CardContainer>
    </div>
  );
};

export default Card;

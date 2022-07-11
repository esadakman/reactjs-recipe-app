import React from "react";
import { useLocation } from "react-router-dom";
const Details = () => {
  const recipe = useLocation();
  console.log(recipe.state);
  return <div>Details</div>;
};

export default Details;

// import React, { useState } from "react";
// import { useEffect } from "react";
import {
  ButtonStyle,
  FormContainer,
  H1,
  Input,
  Main,
  Select,
} from "./Header.styled";

const Header = ({ mealTypes, setQuery, setMeal, getRecipes, query }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.clear();
    getRecipes();
    // setQuery("");
  };
  // useEffect(() => {
  //   localStorage.setItem("query", JSON.stringify(query));
  // }, [query]);
  return (
    <Main>
      <H1>Food App</H1>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></Input>
        <ButtonStyle type="submit" value="Submit">
          Search
        </ButtonStyle>
        <Select
          name="mealTypes"
          id="mealTypes"
          onChange={(e) => setMeal(e.target.value)}
        >
          {mealTypes.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </Select>
      </FormContainer>
    </Main>
  );
};

export default Header;

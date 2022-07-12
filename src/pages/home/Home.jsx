import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/header/Card";
import CardArea, { Section } from "./Home.styled";
// import NotFound from "../notfound/NotFound";

const APP_ID = "dec1c9ef";
const APP_KEY = "8973ca575935d18beea52f4ab0a61a59";

const Home = () => {
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState(
    // ""
    JSON.parse(localStorage.getItem("query")) || ""
  );
  const [meal, setMeal] = useState(
    JSON.parse(localStorage.getItem("query")) || mealTypes[0]
  );
  const [cardInfos, setCardInfos] = useState("");

  // const [error, setError] = useState(false);
  // ! API URL --------------------
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getRecipes = async () => {
    const { data } = await axios.get(url);
    // console.log(data.hits);
    query ? setCardInfos(data.hits) : console.log("fill the area");
  };
  useEffect(() => {
    getRecipes();
    // localStorage.setItem("query", JSON.stringify(query));
    // localStorage.setItem("meal", JSON.stringify(meal));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section>
      <Header
        query={query}
        mealTypes={mealTypes}
        meal={meal}
        setQuery={setQuery}
        setMeal={setMeal}
        getRecipes={getRecipes}
      ></Header>
      <CardArea>
        {cardInfos ? (
          cardInfos.map((liste) => (
            <Card key={liste.recipe.calories} recipe={liste.recipe}></Card>
          ))
        ) : (
          <p>Search Something</p>
        )}
      </CardArea>
    </Section>
  );
};
// };

export default Home;

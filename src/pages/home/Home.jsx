import React, { useEffect, useState } from "react";
// import Card from "../../components/card/Card";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/header/Card";

const APP_ID = "dec1c9ef";
const APP_KEY = "8973ca575935d18beea52f4ab0a61a59";

const Home = () => {
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState(mealTypes[0]);
  // ! API URL --------------------
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getRecipes = async () => {
    const { data } = await axios.get(url);
    console.log(data);
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header
        query={query}
        mealTypes={mealTypes}
        setQuery={setQuery}
        setMeal={setMeal}
        getRecipes={getRecipes}
      ></Header>
      <Card></Card>
    </div>
  );
};

export default Home;

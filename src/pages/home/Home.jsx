import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/header/Card";
import CardArea, { LoadingDiv, Section } from "./Home.styled";
// import NotFound from "../notfound/NotFound";
import loading from "../../assets/loading.svg";
import { AboutTitle } from "../about/About.styled";

const Home = () => {
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState(
    ""
    // JSON.parse(localStorage.getItem("query")) || ""
  );
  const [meal, setMeal] = useState(
    // JSON.parse(localStorage.getItem("query")) ||
    mealTypes[0]
  );
  const [cardInfos, setCardInfos] = useState(null);
  const [gif, setGif] = useState(false);

  // const [error, setError] = useState(false);
  // ! API URL --------------------

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&mealType=${meal}`;

  // let info = "Start Searching";
  const getRecipes = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setCardInfos(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please Enter your meal");
    }
  };

  return (
    <Section>
      <Header
        query={query}
        mealTypes={mealTypes}
        meal={meal}
        setQuery={setQuery}
        setMeal={setMeal}
        getRecipes={getRecipes}
        setGif={setGif}
      ></Header>
      {!gif ? (
        <CardArea>
          {!cardInfos && <AboutTitle>Start Searching</AboutTitle>}

          {cardInfos?.length === 0 && (
            <AboutTitle>The Food can not be found</AboutTitle>
          )}

          {cardInfos?.length > 0 &&
            cardInfos.map((liste) => (
              // ! index yerine caloriyi key verdim
              <Card key={liste.recipe.calories} recipe={liste.recipe}>
                {" "}
              </Card>
            ))}
        </CardArea>
      ) : (
        <LoadingDiv>
          <img src={loading} alt="loading" />
        </LoadingDiv>
      )}
    </Section>
  );
};
// };

export default Home;

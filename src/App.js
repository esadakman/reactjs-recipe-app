import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
function App() {
  const theme = {
    colors: {
      navColor: "#050f24",
      turqo: "#03bfcb",
      cardBack: "#183152",
      cardText: "#ABC8E2",
      buttonBg: "#090325",
      Bloggy1: "#E1E6FA",
      Bloggy2: "#C4D7ED",
      Bloggy4: "#375D81",
    },
    size: {
      xs: "560px",
      sm: "640px",
      md: "768px",
      mdl: "810px",
      lg: "1024px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;

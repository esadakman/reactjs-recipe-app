import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";

import About from "../pages/about/About";
import Details from "../pages/details/Contact";

import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Details />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

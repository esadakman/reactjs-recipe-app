import React from "react";
import AboutContainer, {
  AboutIMG,
  AboutTextContainer,
  AboutTitle,
} from "./About.styled";
import coding from "../../assets/coding.svg";
import { Link } from "@mui/material";
const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutIMG src={coding}></AboutIMG>
        <AboutTitle>
          About Software Developer
          <span> {/* {`<esad/>`} */} Esad</span>
        </AboutTitle>
        <AboutTextContainer>
          <p>I'm Esad.</p>
          <p>I'm currently learning Full-Stack Development Languages.</p>
          <p>I've already known JS,HTML,CSS,ReactJS,Python,SQL,Linux.</p>

          <p>
            Send Email:
            <Link
              onClick={() => (window.location = "mailto:esadd26@gmail.com")}
            >
              {" "}
              esadd26@gmail.com
            </Link>
          </p>
        </AboutTextContainer>
      </AboutContainer>
    </>
  );
};

export default About;

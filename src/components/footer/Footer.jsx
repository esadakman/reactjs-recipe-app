import React from "react";
import FooterStyle, { Logos, TextStyle } from "./Footer.styled";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <FooterStyle>
      <TextStyle>
        <p> Copyright &#169;
            {new Date().getFullYear()} Esad Akman</p>
      </TextStyle>
      <Logos>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://github.com/esadakman" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/esadakman/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </Logos>
    </FooterStyle>
  );
};

export default Footer;

import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import vincent from "../../assets/vincent.gif";
import SectionStyled, { DivStyled } from "./NotFound.styled";
// import { grey } from "@mui/material/colors";

const NotFound = () => {
  // const colors = grey[800];
  return (
    <SectionStyled>
      <DivStyled>
        <img src={vincent} alt="" />
        <h1>404</h1>
        {/* <p>Something went wrong</p> */}
        <Button
          style={{ background: "#0d1e43" }}
          variant="contained"
          sx={{ mt: 4 }}
          component={Link}
          to="/"
        >
          GO TO HOMEPAGE
        </Button>
      </DivStyled>
    </SectionStyled>
  );
};

export default NotFound;

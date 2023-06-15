import React from "react";
import Box from "@mui/material/Box";
import { Button } from "../custom_components/Styled";
import "../index.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";

const Calendar = () => {
  return (
    <Box
      sx={{
        height: "1000px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.light",
      }}
    >
      <InlineWidget
        url="https://calendly.com/petersonedvania"
        styles={{ width: "50%", height: "700px" }}
      />
    </Box>
  );
};

export default Calendar;

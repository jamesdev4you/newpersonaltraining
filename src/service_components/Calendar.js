import React from "react";
import Box from "@mui/material/Box";
import { Button } from "../custom_components/Styled";
import "../index.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";

const Calendar = (props) => {
  let calendarUrl = "";

  if (props.count === 1) {
    calendarUrl =
      "https://calendly.com/petersonedvania/nutrition-and-dieting-bronze";
  } else if (props.count === 2) {
    calendarUrl =
      "https://calendly.com/petersonedvania/nutrition-and-dieting-silver";
  } else if (props.count === 3) {
    calendarUrl =
      "https://calendly.com/petersonedvania/nutrition-and-dieting-gold";
  } else if (props.count === 4) {
    calendarUrl =
      "https://calendly.com/petersonedvania/strength-training-bronze";
  } else if (props.count === 5) {
    calendarUrl =
      "https://calendly.com/petersonedvania/strength-training-silver";
  } else if (props.count === 6) {
    calendarUrl = "https://calendly.com/petersonedvania/strength-training-gold";
  } else if (props.count === 7) {
    calendarUrl =
      "https://calendly.com/petersonedvania/yoga-and-flexibility-bronze";
  } else if (props.count === 8) {
    calendarUrl =
      "https://calendly.com/petersonedvania/yoga-and-flexibility-silver";
  } else if (props.count === 9) {
    calendarUrl =
      "https://calendly.com/petersonedvania/yoga-and-flexibility-gold";
  }

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
      {calendarUrl && (
        <InlineWidget
          url={calendarUrl}
          styles={{ width: "50%", height: "700px" }}
        />
      )}
    </Box>
  );
};

export default Calendar;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "../custom_components/Styled";
import { Link } from "react-router-dom";
import "../index.css";

const yogaDescriptions = [
  {
    name: "Bronze 🥉",
    color: "#DD9449",
    price: "FROM $35/WEEK",
    plan: "All plans start with a consultation followed by an initial one month commitment, after which there is the opportunity to make longer commitments and save money",
    description:
      "Couples Coaching is ideal if you work harder and feel more motivated training with your partner/friend and want to make huge savings on personal training costs. You'll work through the individualised nutrition program I create for you, and exercise alongside your partner to accomplish your health and fitness goals.",
    pointOne: "Monthly Health & Fitness Testing",
    pointTwo: "Monthly Health & Fitness Testing",
    pointThree: "Monthly Health & Fitness Testing",
    pointFour: "Monthly Health & Fitness Testing",
    pointFive: "Monthly Health & Fitness Testing",
    pointSix: "Monthly Health & Fitness Testing",
    pointSeven: "Monthly Health & Fitness Testing",
    number: 7,
  },
  {
    name: "Silver 🥈",
    color: "#aaa9ad",
    price: "FROM $35/WEEK",
    plan: "All plans start with a consultation followed by an initial one month commitment, after which there is the opportunity to make longer commitments and save money",
    description:
      "Couples Coaching is ideal if you work harder and feel more motivated training with your partner/friend and want to make huge savings on personal training costs. You'll work through the individualised nutrition program I create for you, and exercise alongside your partner to accomplish your health and fitness goals.",
    pointOne: "Monthly Health & Fitness Testing",
    pointTwo: "Monthly Health & Fitness Testing",
    pointThree: "Monthly Health & Fitness Testing",
    pointFour: "Monthly Health & Fitness Testing",
    pointFive: "Monthly Health & Fitness Testing",
    pointSix: "Monthly Health & Fitness Testing",
    pointSeven: "Monthly Health & Fitness Testing",
    number: 8,
  },
  {
    name: "Gold 🥇",
    color: "#FFD700",
    price: "FROM $35/WEEK",
    plan: "All plans start with a consultation followed by an initial one month commitment, after which there is the opportunity to make longer commitments and save money",
    description:
      "Couples Coaching is ideal if you work harder and feel more motivated training with your partner/friend and want to make huge savings on personal training costs. You'll work through the individualised nutrition program I create for you, and exercise alongside your partner to accomplish your health and fitness goals.",
    pointOne: "Monthly Health & Fitness Testing",
    pointTwo: "Monthly Health & Fitness Testing",
    pointThree: "Monthly Health & Fitness Testing",
    pointFour: "Monthly Health & Fitness Testing",
    pointFive: "Monthly Health & Fitness Testing",
    pointSix: "Monthly Health & Fitness Testing",
    pointSeven: "Monthly Health & Fitness Testing",
    number: 9,
  },
];

const Yoga = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.light",
      }}
    >
      <Box
        sx={{
          width: {
            xl: "90%",
            lg: "90%",
            md: "90%",
            sm: "90%",
            xs: "100%",
          },
          height: "auto",
          display: "flex",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          },
          margin: "auto",
          padding: {
            xl: "100px",
            lg: "100px",
            md: "50px 0px",
            sm: "50px 0px",
            xs: "50px 0px",
          },
          justifyContent: "space-evenly",
          alignItems: {
            xl: "none",
            lg: "none",
            md: "center",
            sm: "center",
            xs: "center",
          },
          gap: {
            xl: "none",
            lg: "none",
            md: "50px",
            sm: "50px",
            xs: "50px",
          },

          backgroundColor: "primary.light",
        }}
      >
        {yogaDescriptions.map(
          ({
            name,
            color,
            price,
            plan,
            description,
            pointOne,
            pointTwo,
            pointThree,
            pointFour,
            pointFive,
            pointSix,
            pointSeven,
            number,
          }) => {
            return (
              <Box
                sx={{
                  width: {
                    xl: "30%",
                    lg: "30%",
                    md: "80%",
                    sm: "80%",
                    xs: "80%",
                  },
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Typography
                  sx={{
                    padding: "30px 0px",
                    fontSize: "46px",
                    borderBottom: "1px solid white",
                    fontFamily: "Ubuntu",
                    textAlign: "center",
                    color: { color },
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    padding: "20px 0px",
                    fontSize: "36px",
                    fontFamily: "Ubuntu",
                  }}
                >
                  {price}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid white ",
                    fontFamily: "Normal",
                  }}
                >
                  {plan}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "18px",
                      lg: "18px",
                      md: "18px",
                      sm: "18px",
                      xs: "16px",
                    },
                    padding: "20px 0",
                    fontFamily: "Normal",
                    display: {
                      xl: "inline",
                      lg: "inline",
                      md: "inline",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  {description}
                </Typography>
                <ul
                  style={{
                    paddingBottom: "20px",
                    borderBottom: "1px solid white",
                  }}
                >
                  <li>
                    <Typography sx={{ fontFamily: "Ubuntu" }}>
                      {pointOne}
                    </Typography>
                  </li>
                  <li>
                    <Typography sx={{ fontFamily: "Ubuntu" }}>
                      {pointTwo}
                    </Typography>
                  </li>
                  <li>
                    <Typography sx={{ fontFamily: "Ubuntu" }}>
                      {pointThree}
                    </Typography>
                  </li>
                  <li>
                    <Typography sx={{ fontFamily: "Ubuntu" }}>
                      {pointFour}
                    </Typography>
                  </li>
                  <li>
                    <Typography sx={{ fontFamily: "Ubuntu" }}>
                      {pointFive}
                    </Typography>
                  </li>
                  <li>
                    <Typography sx={{ fontFamily: "Ubuntu" }}>
                      {pointSix}
                    </Typography>
                  </li>
                  <li>
                    <Typography sx={{ fontFamily: "Ubuntu" }}>
                      {pointSeven}
                    </Typography>
                  </li>
                </ul>
                <Button
                  sx={{ margin: "30px auto auto auto" }}
                  component={Link}
                  to="/Calendar"
                  onClick={() => props.setCount(number)}
                >
                  Start Now
                </Button>
              </Box>
            );
          }
        )}
      </Box>
    </Box>
  );
};

export default Yoga;

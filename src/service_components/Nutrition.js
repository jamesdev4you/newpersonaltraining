import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "../custom_components/Styled";
import { Link } from "react-router-dom";
import "../index.css";

const nutritionDescriptions = [
  {
    name: "Bronze 🥉",
    color: "#DD9449",
    price: "$150 - 1 MONTH",
    plan: "Every journey begins with an initial consultation call, paving the way for a commitment tailored to your needs. Upon completion, you'll have the option to extend your commitment for greater savings and continued progress.",
    description:
      "Transform your health with personalized nutrition planning guided by our expert personal trainer. Optimize your diet, achieve your goals, and unlock your full potential through a tailored approach to fueling your body for success.",
    pointOne: "Energy Boost: Enhances vitality levels.",
    pointTwo: "Weight Management: Facilitates healthy weight.",
    pointThree: "Nutrient Optimization: Maximizes essential nutrients.",
    pointFour: "Digestive Health: Improves gut function.",
    pointFive: "Disease Prevention: Reduces health risks.",
    pointSix: "Mood Enhancement: Supports emotional well-being.",
    pointSeven: "Longevity Promotion: Fosters longevity.",
    number: 1,
  },
  {
    name: "Silver 🥈",
    color: "#aaa9ad",
    price: "$200 - 2 MONTHS",
    plan: "Every journey begins with an initial consultation call, paving the way for a commitment tailored to your needs. Upon completion, you'll have the option to extend your commitment for greater savings and continued progress.",
    description:
      "Transform your health with personalized nutrition planning guided by our expert personal trainer. Optimize your diet, achieve your goals, and unlock your full potential through a tailored approach to fueling your body for success.",
    pointOne: "Energy Boost: Enhances vitality levels.",
    pointTwo: "Weight Management: Facilitates healthy weight.",
    pointThree: "Nutrient Optimization: Maximizes essential nutrients.",
    pointFour: "Digestive Health: Improves gut function.",
    pointFive: "Disease Prevention: Reduces health risks.",
    pointSix: "Mood Enhancement: Supports emotional well-being.",
    pointSeven: "Longevity Promotion: Fosters longevity.",
    number: 2,
  },
  {
    name: "Gold 🥇",
    color: "#FFD700",
    price: "$250 - 3 MONTHS",
    plan: "Every journey begins with an initial consultation call, paving the way for a commitment tailored to your needs. Upon completion, you'll have the option to extend your commitment for greater savings and continued progress.",
    description:
      "Transform your health with personalized nutrition planning guided by our expert personal trainer. Optimize your diet, achieve your goals, and unlock your full potential through a tailored approach to fueling your body for success.",
    pointOne: "Energy Boost: Enhances vitality levels.",
    pointTwo: "Weight Management: Facilitates healthy weight.",
    pointThree: "Nutrient Optimization: Maximizes essential nutrients.",
    pointFour: "Digestive Health: Improves gut function.",
    pointFive: "Disease Prevention: Reduces health risks.",
    pointSix: "Mood Enhancement: Supports emotional well-being.",
    pointSeven: "Longevity Promotion: Fosters longevity.",
    number: 3,
  },
];

const Nutrition = (props) => {
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
        {nutritionDescriptions.map(
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

export default Nutrition;

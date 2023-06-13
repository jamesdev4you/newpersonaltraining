import React from "react";
import Box from "@mui/material/Box";
import PersonalTraining from "../assets/personaltraining.jpg";
import { Button } from "../custom_components/Styled";
import Typography from "@mui/material/Typography";
import "../index.css";

const HomeAbout = () => {
  return (
    <Box
      sx={{
        height: "800px",
        width: "100%",
        backgroundColor: "primary.dark",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "800px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: "45%",
            height: "600px",

            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "30px",
          }}
        >
          <Typography color="white" variant="h4" sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Online & Individual Personal Trainer in Fareham
          </Typography>
          <Typography
            color="white"
            variant="h6"
            sx={{ fontFamily: "Normal", fontSize: { xl: "20px", lg: "16px" } }}
          >
            {" "}
            Throughout my fitness journey, I’ve helped hundreds of people to
            improve their relationship with food and their bodies. But more than
            that, they've extended their lives and put the spark back into their
            training. While variety is essential to keep you interested - too
            much variety might inhibit your progress. That's why, as a personal
            trainer in Fareham, I want to help you stick with a training
            programme long enough that you see real results.
          </Typography>
          <Typography
            color="white"
            variant="h6"
            sx={{ fontFamily: "Normal", fontSize: { xl: "20px", lg: "16px" } }}
          >
            {" "}
            Throughout my fitness journey, I’ve helped hundreds of people to
            improve their relationship with food and their bodies. But more than
            that, they've extended their lives and put the spark back into their
            training. But they soon learn that the flexibility, nutritional
            coaching and support they receive has a positive knock-on effect
            into the rest of their lives. They're more productive at work.
          </Typography>
          <Button variant="outlined" pill>
            About Me
          </Button>
        </Box>
        <Box
          sx={{
            width: "45%",
            height: "600px",
            backgroundImage: `url(${PersonalTraining})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default HomeAbout;

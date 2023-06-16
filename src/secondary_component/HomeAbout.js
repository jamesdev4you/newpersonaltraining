import React from "react";
import Box from "@mui/material/Box";
import PersonalTraining from "../assets/personaltraining.jpg";
import { Button } from "../custom_components/Styled";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "../index.css";

const HomeAbout = () => {
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        backgroundColor: "primary.dark",
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "auto",
          display: "flex",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "reverse-row",
            xs: "reverse-row",
          },
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "45%",
              lg: "45%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
            height: "",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "30px",
          }}
        >
          <Typography
            color="white"
            sx={{
              fontFamily: "Ubuntu",
              fontSize: {
                xl: "50px",
                lg: "30px",
                md: "34px",
                sm: "34px",
                xs: "24px",
              },
            }}
          >
            {" "}
            Online & Individual Personal Trainer in Fareham
          </Typography>
          <Typography
            color="white"
            sx={{
              fontFamily: "Normal",
              fontSize: {
                xl: "20px",
                lg: "20px",
                md: "16px",
                sm: "16px",
                xs: "16px",
              },
            }}
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
            sx={{
              fontFamily: "Normal",
              fontSize: {
                xl: "20px",
                lg: "20px",
                md: "16px",
                sm: "16px",
                xs: "16px",
              },
            }}
          >
            {" "}
            Throughout my fitness journey, I’ve helped hundreds of people to
            improve their relationship with food and their bodies. But more than
            that, they've extended their lives and put the spark back into their
            training. But they soon learn that the flexibility, nutritional
            coaching and support they receive has a positive knock-on effect
            into the rest of their lives. They're more productive at work.
          </Typography>
          <Button variant="outlined" pill component={Link} to="/about">
            Find out more!
          </Button>
        </Box>
        <Box
          sx={{
            width: {
              xl: "45%",
              lg: "45%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
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

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "../custom_components/Styled";
import { Link } from "react-router-dom";
import Header from "../assets/header.jpg";

const AboutTestimonial = () => {
  const aboutPictures = [Header, Header, Header, Header, Header, Header];

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "auto",
        backgroundColor: "primary.light",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        padding: "50px 0",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xl: "50px",
            lg: "30px",
            md: "34px",
            sm: "34px",
            xs: "24px",
          },
          textAlign: "center",
          width: "90%",
          color: "white",
        }}
      >
        Why choose Edvania for Personal Training?
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xl: "28px",
            lg: "26px",
            md: "22px",
            sm: "20px",
            xs: "18px",
          },
          textAlign: "center",
          width: {
            xl: "80%",
            lg: "80%",
            md: "80%",
            sm: "95%",
            xs: "95%",
          },
          color: "white",
          marginTop: "50px",
        }}
      >
        At RCotterill PT, I want to help men and women that have felt like
        they've been spinning their wheels with their fitness and health. I
        grasp that different diets can seem attractive and trying various
        solutions to find the style of eating that's right for you seems
        essential - but it can also slow your progress down while you are
        spending time on trial and error. ​​
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: {
            xl: "80%",
            lg: "80%",
            md: "80%",
            sm: "100%",
            xs: "100%",
          },
          height: {
            xl: "800px",
            lg: "640px",
            md: "640px",
            sm: "640px",
            xs: "1300px",
          },
          flexWrap: "wrap",
          flexDirection: {
            xl: "column",
            lg: "column",
            md: "column",
            sm: "row",
            xs: "row",
          },

          alignItems: "center",
          justifyContent: "center",

          rowGap: "5px",
          columnGap: "5px",
        }}
      >
        {aboutPictures.map((item) => {
          return (
            <Box
              sx={{
                width: {
                  xl: "33%",
                  lg: "33%",
                  md: "33%",
                  sm: "48%",
                  xs: "95%",
                },
                height: {
                  xl: "45%",
                  lg: "45%",
                  md: "45%",
                  sm: "33%",
                  xs: "200px",
                },
                backgroundImage: `url(${Header})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            ></Box>
          );
        })}
      </Box>
      <Typography
        sx={{
          fontSize: {
            xl: "28px",
            lg: "26px",
            md: "22px",
            sm: "20px",
            xs: "18px",
          },
          textAlign: "center",
          width: {
            xl: "80%",
            lg: "80%",
            md: "80%",
            sm: "95%",
            xs: "95%",
          },
          color: "white",

          margin: "20px 0",
        }}
      >
        At RCotterill PT, I want to help men and women that have felt like
        they've been spinning their wheels with their fitness and health. I
        grasp that different diets can seem attractive and trying various
        solutions to find the style of eating that's right for you seems
        essential - but it can also slow your progress down while you are
        spending time on trial and error. ​​
      </Typography>
      <Button variant="outlined" pill component={Link} to="/services">
        Let's Begin!
      </Button>
    </Box>
  );
};

export default AboutTestimonial;

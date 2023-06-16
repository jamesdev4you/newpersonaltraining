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
        height: { xl: "1400px", lg: "800px" },
        backgroundColor: "primary.light",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        paddingTop: "50px",
      }}
    >
      <Typography
        sx={{
          fontSize: "38px",
          textAlign: "center",
          width: "100%",
          color: "white",
        }}
      >
        Why choose Edvania for Personal Training?
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          textAlign: "center",
          width: "60%",
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
          width: "60%",
          height: "60%",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          paddingTop: "50px",
          rowGap: "5px",
        }}
      >
        {aboutPictures.map((item) => {
          return (
            <Box
              sx={{
                width: "33%",
                height: "45%",
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
          fontSize: "24px",
          textAlign: "center",
          width: "60%",
          color: "white",

          marginBottom: "20px",
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

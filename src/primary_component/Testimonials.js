import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header2 from "../assets/header.jpg";
import Header from "../secondary_component/Header";
import HomeContact from "../secondary_component/HomeContact";

const Testimonials = (props) => {
  const testimonialInformation = [
    {
      image: Header2,
      testimonial:
        "At RCotterill PT, I want to help men and women that have felt like they've been spinning their wheels with their fitness and health. I grasp that different diets can seem attractive and trying various solutions to find the style of eating that's right for you seems essential - but it can also slow your progress down while you are spending time on trial and error.",
      name: "- James Boyle",
    },
    {
      image: Header2,
      testimonial:
        "At RCotterill PT, I want to help men and women that have felt like they've been spinning their wheels with their fitness and health. I grasp that different diets can seem attractive and trying various solutions to find the style of eating that's right for you seems essential - but it can also slow your progress down while you are spending time on trial and error.",
      name: "- James Boyle",
    },
    {
      image: Header2,
      testimonial:
        "At RCotterill PT, I want to help men and women that have felt like they've been spinning their wheels with their fitness and health. I grasp that different diets can seem attractive and trying various solutions to find the style of eating that's right for you seems essential - but it can also slow your progress down while you are spending time on trial and error.",
      name: "- James Boyle",
    },
    {
      image: Header2,
      testimonial:
        "At RCotterill PT, I want to help men and women that have felt like they've been spinning their wheels with their fitness and health. I grasp that different diets can seem attractive and trying various solutions to find the style of eating that's right for you seems essential - but it can also slow your progress down while you are spending time on trial and error.",
      name: "- James Boyle",
    },
    {
      image: Header2,
      testimonial:
        "At RCotterill PT, I want to help men and women that have felt like they've been spinning their wheels with their fitness and health. I grasp that different diets can seem attractive and trying various solutions to find the style of eating that's right for you seems essential - but it can also slow your progress down while you are spending time on trial and error.",
      name: "- James Boyle",
    },
  ];

  return (
    <>
      <Header headerOp={props.headerOp} />
      <Box
        sx={{
          width: "100%",
          height: "2000px",
          backgroundColor: "primary.light",
          padding: "50px 0px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {testimonialInformation.map(({ image, testimonial, name }) => {
            return (
              <Box
                sx={{
                  height: "300px",
                  width: "80%",
                  borderRadius: "15px",
                  backgroundColor: "primary.dark",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <Box
                  sx={{
                    height: "240px",
                    width: "240px",
                    borderRadius: "50%",
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                    border: "5px solid",
                    borderColor: "error.light",
                  }}
                ></Box>
                <Box sx={{ width: "70%" }}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      textAlign: "center",

                      color: "white",
                    }}
                  >
                    {testimonial}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "28px",
                      textAlign: "right",
                      paddingTop: "15px",
                      color: "error.light",
                    }}
                  >
                    {name}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <HomeContact />
    </>
  );
};

export default Testimonials;

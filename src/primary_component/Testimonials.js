import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header2 from "../assets/header.jpg";
import Header from "../secondary_component/Header";
import HomeContact from "../secondary_component/HomeContact";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SingleTestimonial from "../secondary_component/SingleTestimonial";

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
          height: "100%",
          backgroundColor: "primary.light",
          padding: "50px 0px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <SingleTestimonial
            image={testimonialInformation[0].image}
            testimonial={testimonialInformation[0].testimonial}
            name={testimonialInformation[0].name}
          />
          <SingleTestimonial
            image={testimonialInformation[1].image}
            testimonial={testimonialInformation[1].testimonial}
            name={testimonialInformation[1].name}
          />
          <SingleTestimonial
            image={testimonialInformation[2].image}
            testimonial={testimonialInformation[2].testimonial}
            name={testimonialInformation[2].name}
          />
          <SingleTestimonial
            image={testimonialInformation[3].image}
            testimonial={testimonialInformation[3].testimonial}
            name={testimonialInformation[3].name}
          />
          <SingleTestimonial
            image={testimonialInformation[4].image}
            testimonial={testimonialInformation[4].testimonial}
            name={testimonialInformation[4].name}
          />
        </Box>
      </Box>
      <HomeContact />
    </>
  );
};

export default Testimonials;

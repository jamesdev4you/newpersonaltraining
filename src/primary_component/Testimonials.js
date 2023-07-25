import React from "react";
import Box from "@mui/material/Box";

import Header2 from "../assets/header.jpg";
import Header from "../secondary_component/Header";
import HomeContact from "../secondary_component/HomeContact";
import SingleTestimonial from "../secondary_component/SingleTestimonial";
import after1 from "../assets/after1.jpg";
import after2 from "../assets/after2.jpg";
import james from "../assets/james.jpg";
import testimonialPic3 from "../assets/testimonial3.jpg";

const Testimonials = (props) => {
  const testimonialInformation = [
    {
      image: after1,
      testimonial:
        "Just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. I never have any problem at all.",
      name: "- Nanda",
    },
    {
      image: after2,
      testimonial:
        "I worked with Edgy all through Covid on my strength and eating habits and now feel extemely confident! I loved her and especially her ability to care about others! ",
      name: "- Julia Harris",
    },
    {
      image: testimonialPic3,
      testimonial:
        "Edvania is simply the best! My results were astonishing: chest, biceps, tricepts, robust with waist trimmed down by four inches. Better than I ever imagined possible!",
      name: "- Ron Felber",
    },
    {
      image: Header2,
      testimonial:
        "I've completed 10 sessions with Edvania and am amazed by her enthusiasm and dedication! After working out for 20 years without results, I've finally started to see some after my short time with Edvania!",
      name: "- Tom Miller",
    },
    {
      image: james,
      testimonial:
        "I've been having intense shoulder pain throughout my workouts for a couple months, but after a quick short yoga session all of the tension and pain went away!",
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

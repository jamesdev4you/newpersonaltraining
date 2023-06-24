import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "../custom_components/Styled";
import { Link } from "react-router-dom";
import Header from "../assets/header.jpg";
import gympic6 from "../assets/picture-38.jpg";
import gympic5 from "../assets/picture-27.jpg";
import gympic4 from "../assets/picture-48.jpg";
import gympic3 from "../assets/picture-30.jpg";
import gympic1 from "../assets/picture-22.jpg";
import gympic2 from "../assets/picture-52.jpg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const AboutTestimonial = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const aboutPictures = [gympic6, gympic5, gympic4, gympic3, gympic1, gympic2];

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
      <motion.div
        ref={ref}
        animate={controls}
        variants={squareVariants}
        initial="hidden"
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
            width: "93%",
            color: "white",
            margin: "auto",
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
              xs: "16px",
            },
            textAlign: "center",
            width: {
              xl: "80%",
              lg: "80%",
              md: "80%",
              sm: "95%",
              xs: "90%",
            },
            color: "white",
            margin: "auto",
          }}
        >
          Driven by my own transformation and armed with extensive knowledge and
          expertise, I'm committed to empowering others to fulfill their fitness
          dreams. Whether you seek to boost your strength, shed unwanted pounds,
          or enhance your overall well-being, I'll be your unwavering ally,
          motivating you every step of the way on your path to success.
        </Typography>
      </motion.div>
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
                  xs: "15%",
                },
                backgroundImage: `url(${item})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
          );
        })}
      </Box>

      <Button variant="outlined" pill component={Link} to="/services">
        Let's Begin!
      </Button>
    </Box>
  );
};

export default AboutTestimonial;

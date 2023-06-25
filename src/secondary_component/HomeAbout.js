import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import PersonalTraining from "../assets/personaltraining.jpg";
import { Button } from "../custom_components/Styled";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typography from "@mui/material/Typography";
import "../index.css";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const HomeAbout = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
          alignItems: "start",
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
          <motion.div
            animate={controls}
            variants={squareVariants}
            initial="hidden"
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
              Online & Real Life Personal Trainer in Tampa
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
                padding: {
                  xl: "20px 0px",
                  lg: "20px 0px",
                  md: "0px",
                  sm: "0px",
                  xs: "0px",
                },
              }}
              ref={ref}
            >
              {" "}
              During my experience in the realm of fitness, I have had the
              privilege of assisting numerous individuals in enhancing their
              connection with nourishment and their physical well-being.
              However, the impact of my guidance goes beyond that—it has
              revitalized their training and extended their lifespans. Although
              incorporating diversity is crucial for maintaining enthusiasm,
              excessive variation can impede progress. This is precisely why, as
              a personal trainer situated in Tampa, I am dedicated to supporting
              you in adhering to a training regimen for a significant duration,
              enabling you to witness tangible outcomes.
            </Typography>

            <Button variant="outlined" pill component={Link} to="/about">
              Find out more!
            </Button>
          </motion.div>
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
            backgroundPosition: "70%",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default HomeAbout;

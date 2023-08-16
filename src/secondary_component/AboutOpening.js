import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "../custom_components/Styled";
import nutrition from "../assets/nutrition.jpg";
import About from "../assets/About.jpg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../index.css";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const AboutOpening = (props) => {
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
        display: "flex",
        width: "100%",
        height: "auto",
        backgroundColor: "primary.light",
        flexWrap: "wrap",
        alignItems: "start",
        justifyContent: "center",
        padding: "100px 0",
      }}
    >
      <Box
        sx={{
          height: "100%",
          borderRadius: "50%",
          width: {
            xl: "40%",
            lg: "40%",
            md: "40%",
            sm: "100%",
            xs: "100%",
          },
          display: "flex",

          justifyContent: "start",
          flexDirection: "column",

          gap: "50px",
          paddingBottom: "40px",
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
                xs: "34px",
              },
              margin: "auto",
              textAlign: "center",
              width: "100%",
              color: "white",
              fontFamily: "Ubuntu",
            }}
          >
            {props.aboutOptions.name}
          </Typography>

          <Box
            sx={{
              height: {
                xl: "400px",
                lg: "400px",
                md: "250px",
                sm: "250px",
                xs: "250px",
              },
              borderRadius: "50%",
              width: {
                xl: "400px",
                lg: "400px",
                md: "250px",
                sm: "250px",
                xs: "250px",
              },
              margin: "50px auto",
              backgroundImage: `url(${props.aboutOptions.picture})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right",
              border: "5px solid",
              borderColor: "white",
            }}
          ></Box>
        </motion.div>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          width: {
            xl: "50%",
            lg: "50%",
            md: "50%",
            sm: "90%",
            xs: "90%",
          },
          alignItems: "center",
          justifyContent: "center",

          gap: "30px",
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
              textAlign: "left",
              width: "100%",
              color: "white",
              fontFamily: "Ubuntu",
            }}
          >
            {props.aboutOptions.title}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xl: "20px",
                lg: "20px",
                md: "16px",
                sm: "16px",
                xs: "16px",
              },
              textAlign: "left",
              width: "100%",
              color: "white",
              fontFamily: "Normal",
              paddingTop: "50px",
            }}
          >
            {props.aboutOptions.paraOne}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xl: "20px",
                lg: "20px",
                md: "16px",
                sm: "16px",
                xs: "16px",
              },
              textAlign: "left",
              width: "100%",
              color: "white",
              fontFamily: "Normal",
              paddingTop: "5px",
            }}
          >
            {props.aboutOptions.paraTwo}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xl: "20px",
                lg: "20px",
                md: "16px",
                sm: "16px",
                xs: "16px",
              },
              textAlign: "left",
              width: "100%",
              color: "white",
              fontFamily: "Normal",
              paddingTop: "5px",
            }}
          >
            {props.aboutOptions.paraThree}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutOpening;

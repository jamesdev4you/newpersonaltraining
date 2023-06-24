import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const AboutQuote = () => {
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: {
          xl: "50px 0",
          lg: "50px 0",
          md: "50px 0",
          sm: "30px 0",
          xs: "20px 0",
        },
      }}
    >
      <motion.div animate={controls} variants={squareVariants} initial="hidden">
        <Typography
          ref={ref}
          sx={{
            width: {
              xl: "70%",
              lg: "70%",
              md: "70%",
              sm: "90%",
              xs: "98%",
            },

            fontFamily: "Ubuntu",
            color: "error.main",
            textAlign: "center",
            fontSize: {
              xl: "38px",
              lg: "30px",
              md: "26px",
              sm: "24px",
              xs: "20px",
            },
            margin: "auto",
          }}
        >
          "Harness the power of your mind, and watch your body effortlessly
          follow suit, unveiling the astonishing achievements you are capable
          of."
        </Typography>
      </motion.div>

      <Typography
        sx={{
          width: "100%",
          margin: "0 20px",
          fontFamily: "Ubuntu",
          color: "white",
          textAlign: "center",
          fontSize: {
            xl: "38px",
            lg: "30px",
            md: "26px",
            sm: "24px",
            xs: "20px",
          },
        }}
      >
        - Edvania
      </Typography>
    </Box>
  );
};

export default AboutQuote;

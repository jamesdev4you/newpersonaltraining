import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "../custom_components/Styled";
import About from "../assets/About.jpg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../index.css";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const AboutOpening = () => {
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
            Edvania Peterson
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
              backgroundImage: `url(${About})`,
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
          margin: "auto",
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
              paddingTop: "5px",
            }}
          >
            Meet your trainer
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
            Hey I'm Edvania! Thanks for stopping by this website! I'm originally
            hailing from Brazil, but made a bold decision to chase my dreams and
            relocate to America. However, as I immersed myself in a newfound
            corporate job, I quickly realized that it didn't align with my true
            self. Searching for solace and an outlet for my mental well-being, I
            turned to the world of fitness.
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
            Little did I know, this exploration would ignite an unyielding
            passion within me. I discovered that not only did working out
            positively impact my mental health, but it also became my driving
            force. It awakened a profound desire to assist others in achieving
            their fitness aspirations and unlocking their full potential. This
            passion transformed me into a dedicated personal trainer, devoted to
            guiding my clients along their unique fitness journeys.
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
            With my Brazilian background, I bring a vibrant energy and a unique
            perspective to my training approach. My experiences of cultural
            fusion have cultivated a deep understanding of diverse body types,
            motivations, and aspirations. I embrace the power of personalized
            fitness solutions, tailored to each individual's needs, ensuring
            that every client receives a customized program designed for optimal
            results.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutOpening;

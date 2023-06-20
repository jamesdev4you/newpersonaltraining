import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import NoFoodIcon from "@mui/icons-material/NoFood";
import { Button } from "../custom_components/Styled";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../index.css";

const CertificationList = [];

const Options = [
  {
    logo: <SelfImprovementIcon sx={{ width: "100px", height: "100px" }} />,
    title: "Find your Chi",
    desc: "Yoga offers numerous benefits such as increased flexibility, improved strength, reduced stress, enhanced mental clarity, and a profound sense of relaxation, making it practice for overall well-being.",
  },
  {
    logo: <FitnessCenterIcon sx={{ width: "100px", height: "100px" }} />,
    title: "Get Massive",
    desc: "Weightlifting provides a range of advantages, including increased muscular strength, enhanced metabolic function, heightened body composition, and increased confidence. ",
  },
  {
    logo: <NoFoodIcon sx={{ width: "100px", height: "100px" }} />,
    title: "Dieting for Health",
    desc: "Dieting for health offers a myriad of advantages, including improved nutrition, weight management, increased energy levels, reduced risk of chronic diseases, and enhanced overall well-being.",
  },
];

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const HomeOptions = () => {
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        background: "linear-gradient(to bottom, #33518E 90%, #001A4F 10%)",
      }}
    >
      <Box
        sx={{
          height: {
            xl: "440px",
            lg: "440px",
            md: "450px",
            sm: "auto",
            xs: "auto",
          },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: { xl: "20px", lg: "20px", md: "30px", sm: "20px", xs: "20px" },
          margin: "100px 0px",
          backgroundColor: "primary.light",
        }}
      >
        <motion.div
          ref={ref}
          animate={controls}
          variants={squareVariants}
          initial="hidden"
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontFamily: "Ubuntu",
              width: "100%",
              color: "white",
              fontSize: {
                xl: "70px",
                lg: "70px",
                md: "60px",
                sm: "54px",
                xs: "33px",
              },
            }}
          >
            Achieve Greatness
          </Typography>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          variants={squareVariants}
          initial="hidden"
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontFamily: "Ubuntu",
              width: "100%",
              color: "error.main",
              fontSize: {
                xl: "60px",
                lg: "60px",
                md: "50px",
                sm: "44px",
                xs: "23px",
              },
            }}
          >
            Personal Training in Westchase
          </Typography>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          variants={squareVariants}
          initial="hidden"
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              width: {
                xl: "60%",
                lg: "60%",
                md: "70%",
                sm: "90%",
                xs: "95%",
              },
              color: "white",
              fontSize: {
                xl: "30px",
                lg: "28px",
                md: "28px",
                sm: "24px",
                xs: "20px",
              },
              margin: "auto",
              textAlign: "center",
            }}
          >
            Welcome to Edvania PT, your ultimate destination for achieving your
            fitness goals and embracing a healthier lifestyle. Whether you're
            determined to shed those extra pounds, tone your body, build lean
            muscle, or simply enhance your overall well-being, our comprehensive
            range of programs is tailored to meet your unique needs and
            aspirations.
          </Typography>
        </motion.div>
      </Box>
      <Box
        sx={{
          height: { xl: "550px", md: "auto", sm: "auto", xs: "auto" },
          width: { xl: "90%", sm: "90%" },
          display: "flex",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          },
          alignItems: "center",
          justifyContent: "space-around",
          gap: { xl: "0px", lg: "0px", md: "60px", sm: "50px", xs: "50px" },
          marginTop: {
            xl: "0px",
            lg: "0px",
            md: "30px",
            sm: "30px",
            xs: "0px",
          },
        }}
      >
        {Options.map((item) => (
          <Box
            sx={{
              height: { xl: "550px", lg: "500px", md: "550px", sm: "650px" },
              width: { xl: "28%", lg: "30%", md: "50%", sm: "70%", xs: "80%" },
              zIndex: "1",
              paddingBottom: "50px",
              paddingTop: "50px",
              gap: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid grey",
              backgroundColor: "black",
              color: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            {item.logo}
            <Typography
              align="center"
              variant="h4"
              sx={{ fontFamily: "Ubuntu", color: "white" }}
            >
              {item.title}
            </Typography>
            <Typography
              align="center"
              variant="h6"
              sx={{
                fontFamily: "Normal",
                padding: "20px",
                fontSize: {
                  xl: "20px",
                  lg: "16px",
                  md: "20px",
                  sm: "20px",
                  xs: "14px",
                },
                color: "white",
                height: "50%",
              }}
            >
              {item.desc}
            </Typography>
            <Button variant="outlined" pill component={Link} to="/services">
              {" "}
              Learn More
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeOptions;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import NoFoodIcon from "@mui/icons-material/NoFood";
import { Button } from "../custom_components/Styled";
import { Link } from "react-router-dom";
import "../index.css";

const Options = [
  {
    logo: <SelfImprovementIcon sx={{ width: "100px", height: "100px" }} />,
    title: "Find your Chi",
    desc: "Yoga offers numerous benefits such as increased flexibility, improved strength, reduced stress, enhanced mental clarity, and a profound sense of relaxation, making it practice for overall well-being.",
  },
  {
    logo: <FitnessCenterIcon sx={{ width: "100px", height: "100px" }} />,
    title: "Get Massive",
    desc: "Weightlifting provides a range of advantages, including increased muscular strength, improved bone density, enhanced metabolic function, a heightened body composition, and increased confidence. ",
  },
  {
    logo: <NoFoodIcon sx={{ width: "100px", height: "100px" }} />,
    title: "Dieting for Health",
    desc: "Dieting for health offers a myriad of advantages, including improved nutrition, weight management, increased energy levels, reduced risk of chronic diseases, and enhanced overall well-being.",
  },
];

const Certifications = [];

const HomeOptions = () => {
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
          height: "300px",
          width: "100%",
          backgroundColor: "primary.light",
        }}
      ></Box>
      <Box
        sx={{
          height: "400px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: "20px",
          marginBottom: "50px",
          backgroundColor: "primary.light",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontFamily: "Ubuntu", width: "50%", color: "white" }}
        >
          Achieve Greatness
        </Typography>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontFamily: "Ubuntu", width: "60%", color: "error.main" }}
        >
          Personal Training in Westchase
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ fontFamily: "Ubuntu", width: "60%", color: "white" }}
        >
          Welcome to Edvania PT, your ultimate destination for achieving your
          fitness goals and embracing a healthier lifestyle. Whether you're
          determined to shed those extra pounds, tone your body, build lean
          muscle, or simply enhance your overall well-being, our comprehensive
          range of programs is tailored to meet your unique needs and
          aspirations.
        </Typography>
      </Box>
      <Box
        sx={{
          height: "550px",
          width: { lg: "80%", sm: "90%" },
          display: "flex",
          alignItems: "start",
          justifyContent: "space-around",
        }}
      >
        {Options.map((item) => (
          <Box
            sx={{
              height: "550px",
              width: { lg: "28%", sm: "30%" },
              zIndex: "1",

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
                fontSize: { xl: "20px", lg: "16px" },
                color: "white",
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

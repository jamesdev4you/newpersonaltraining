import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import NoFoodIcon from "@mui/icons-material/NoFood";
import { WhiteButton } from "../custom_components/Styled";
import '../index.css';

const Options = [
  {
    logo: <SelfImprovementIcon sx={{ width: "100px", height: "100px" }} />,
    title: "Find your Chi",
    desc: "Yoga offers numerous benefits such as increased flexibility, improved strength, reduced stress, enhanced mental clarity, and a profound sense of relaxation, making it practice for overall well-being.",
  },
  {
    logo: <FitnessCenterIcon sx={{ width: "100px", height: "100px" }} />,
    title: "Get Massive",
    desc: "Weightlifting provides a range of advantages, including increased muscular strength, improved bone density, enhanced metabolic function, and a heightened body composition. ",
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
        background: "linear-gradient(to bottom, white 90%, black 10%)",
      }}
    >
      <Box sx={{ height: "300px", width: "100%" }}></Box>
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
        }}
      >
        <Typography variant="h3" align="center" sx={{ fontFamily: "Ubuntu",width: "50%" }}>
          Achieve Greatness
        </Typography>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontFamily: "Ubuntu", width: "60%", color: "error.dark" }}
        >
          Personal Training in Westchase
        </Typography>
        <Typography variant="h5" align="center" sx={{ fontFamily: "Normal",width: "60%" }}>
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
          width: {lg: "80%", sm: "90%"},
          display: "flex",
          alignItems: "start",
          justifyContent: "space-around",
        }}
      >
        {Options.map((item) => (
          <Box
            sx={{
              height: "550px",
              width: {lg: "31%", sm: "30%"},
              zIndex: "1",

              paddingTop: "50px",
              gap: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid grey",
              backgroundColor: "white",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
          >
            {item.logo}
            <Typography align="center" variant="h4" sx={{fontFamily: "Ubuntu"}}>
              {item.title}
            </Typography>
            <Typography align="center" variant="h6" sx={{ fontFamily: "Normal", padding: "10px", fontSize: {xl: '20px', lg: '16px'} }}>
              {item.desc}
            </Typography>
            <WhiteButton variant="outlined" pill >
              {" "}
              Learn More
            </WhiteButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeOptions;

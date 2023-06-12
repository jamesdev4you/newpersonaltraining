import React from "react";
import Box from "@mui/material/Box";
import { Button } from "../custom_components/Styled";
import Header2 from "../assets/header.jpg";
import Typography from "@mui/material/Typography";
import "../index.css";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { xl: "100vh", lg: "800px" },
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "70px",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Ubuntu",
            width: { xl: "100%", lg: "440px" },
            alignText: "left",
            color: "error.main",
            fontSize: { xl: "68px", lg: "40px", sm: "24px" },
          }}
        >
          Transform yourself
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Ubuntu",
            width: { xl: "100%", lg: "440px" },
            alignText: "left",
            color: "#fff",
            fontSize: { xl: "68px", lg: "40px", sm: "24px" },
          }}
        >
          into the Perfect you
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Ubuntu",
            width: { xl: "60%", lg: "380px", sm: "150px" },
            color: "#fff",
            fontSize: { xl: "28px", lg: "16px", sm: "10px" },
          }}
        >
          Providing services in Yoga, Body Building, Personal Training, and
          Nutrition
        </Typography>
        <Button variant="outlined" pill>
          Learn more
        </Button>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          backgroundImage: `url(${Header2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          filter: "grayscale()",
        }}
      ></Box>
    </Box>
  );
}

import React from "react";
import Box from "@mui/material/Box";
import { Button } from "../custom_components/Styled";
import Header2 from "../assets/header.jpg";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "800px" }}>
      <Box
        sx={{
          width: "40%",
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
          sx={{ width: "440px", alignText: "left", color: "error.main" }}
        >
          Transform yourself
        </Typography>
        <Typography
          variant="h3"
          sx={{
            width: "440px",
            alignText: "left",
            color: "#fff",
          }}
        >
          into the Perfect you
        </Typography>
        <Typography variant="h6" sx={{ width: "440px", color: "#fff" }}>
          Providing services in Yoga, Body Building, Personal Training, and
          Nutrition
        </Typography>
        <Button variant="outlined" pill>
          Learn more
        </Button>
      </Box>
      <Box
        sx={{
          width: "60%",
          height: "100%",
          backgroundImage: `url(${Header2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
    </Box>
  );
}

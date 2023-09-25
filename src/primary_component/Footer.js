import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import "../index.css";
import "../navlink.css";

export default function Footer() {
  return (
    <Box sx={{ width: "100%", height: "100%", backgroundColor: "lightgrey" }}>
      <Box
        sx={{
          width: "90%",
          height: "auto",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "start",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              marginBottom: "20px",
              borderBottom: "1px solid black",
            }}
          >
            {" "}
            Pages{" "}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
            }}
          >
            <NavLink to="/home" className="nav_link">
              {" "}
              Home{" "}
            </NavLink>
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink to="/about" className="nav_link">
              About
            </NavLink>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink to="/services" className="nav_link">
              Services
            </NavLink>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink to="/testimonials" className="nav_link">
              Testimonials
            </NavLink>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink to="/contact" className="nav_link">
              Contact
            </NavLink>{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              marginBottom: "20px",
              borderBottom: "1px solid black",
            }}
          >
            {" "}
            Services{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink to="/personaltraining" className="nav_link">
              Body Building
            </NavLink>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink to="/nutrition" className="nav_link">
              Nutrition
            </NavLink>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink to="/yoga" className="nav_link">
              Yoga
            </NavLink>{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              marginBottom: "20px",
              borderBottom: "1px solid black",
            }}
          >
            {" "}
            Contact{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}> #727-487-9698 </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            brazilianfitnessus@email.com{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: "20%",
              lg: "20%",
              md: "50%",
              sm: "50%",
              xs: "90%",
            },
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              marginBottom: "20px",
              borderBottom: "1px solid black",
            }}
          >
            {" "}
            Hours{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            M: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Tu: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Wed: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Th: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Fri: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Sat: 10:00am-10:00pm{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Sun: 10:00am-10:00pm{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

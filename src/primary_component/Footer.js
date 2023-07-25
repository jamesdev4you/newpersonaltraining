import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import "../index.css";

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
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            <NavLink to="/home" sx={{ textDecoration: "none", color: "black" }}>
              {" "}
              Home{" "}
            </NavLink>
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink
              to="/about"
              sx={{ textDecoration: "none", color: "black" }}
            >
              About
            </NavLink>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink
              to="/services"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Services
            </NavLink>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink
              to="/testimonials"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Testimonials
            </NavLink>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink
              to="/contact"
              sx={{ textDecoration: "none", color: "black" }}
            >
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
            <NavLink
              to="/personaltraining"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Body Building
            </NavLink>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink
              to="/nutrition"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Nutrition
            </NavLink>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <NavLink to="/yoga" sx={{ textDecoration: "none", color: "black" }}>
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
          <Typography sx={{ fontFamily: "Ubuntu" }}> #555-555-5555 </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            Yoga@email.com{" "}
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

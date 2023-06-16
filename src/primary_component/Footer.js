import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "../index.css";

export default function Footer() {
  return (
    <Box sx={{ width: "100%", height: "auto", backgroundColor: "lightgrey" }}>
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
            <Link href="/home" sx={{ textDecoration: "none", color: "black" }}>
              {" "}
              Home{" "}
            </Link>
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link href="/about" sx={{ textDecoration: "none", color: "black" }}>
              About
            </Link>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/services"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Services
            </Link>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/testimonials"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Testimonials
            </Link>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/contact"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>{" "}
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
            <Link
              href="/services"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Body Building
            </Link>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/services"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Nutrition
            </Link>{" "}
          </Typography>
          <Typography sx={{ fontFamily: "Ubuntu" }}>
            {" "}
            <Link
              href="/services"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Yoga
            </Link>{" "}
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
        </Box>
      </Box>
    </Box>
  );
}

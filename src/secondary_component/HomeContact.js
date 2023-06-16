import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import "../index.css";

export default function HomeContact() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingBottom: "50px",
        backgroundColor: "primary.dark",
        display: "flex",
        flexDirection: "column",
        justifyCotent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: {
            xl: "80px",
            lg: "80px",
            md: "60px",
            sm: "60px",
            xs: "40px",
          },
          paddingTop: {
            xl: "0px",
            lg: "0px",
            md: "0px",
            sm: "30px",
            xs: "30px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xl: "36px",
              lg: "36px",
              md: "28px",
              sm: "28px",
              xs: "28px",
            },
            fontFamily: "Ubuntu",
            color: "gold",
          }}
        >
          Let's Connect!
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "150px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="#">
          <Box
            sx={{
              height: {
                xl: "120px",
                lg: "120px",
                md: "60px",
                sm: "60px",
                xs: "40px",
              },
              width: {
                xl: "120px",
                lg: "120px",
                md: "60px",
                sm: "60px",
                xs: "40px",
              },
              backgroundImage: `url(${Facebook})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right",
              cursor: "pointer",
            }}
          ></Box>
        </Link>
        <Link to="#">
          <Box
            sx={{
              height: {
                xl: "120px",
                lg: "120px",
                md: "60px",
                sm: "60px",
                xs: "40px",
              },
              width: {
                xl: "120px",
                lg: "120px",
                md: "60px",
                sm: "60px",
                xs: "40px",
              },
              backgroundImage: `url(${Instagram})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right",
              cursor: "pointer",
            }}
          ></Box>
        </Link>
        <Link to="#">
          <Box
            sx={{
              height: {
                xl: "120px",
                lg: "120px",
                md: "60px",
                sm: "60px",
                xs: "40px",
              },
              width: {
                xl: "120px",
                lg: "120px",
                md: "60px",
                sm: "60px",
                xs: "40px",
              },
              backgroundImage: `url(${Twitter})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right",
              cursor: "pointer",
            }}
            src="#"
          ></Box>
        </Link>
        <Link to="#">
          <Box
            sx={{
              height: {
                xl: "120px",
                lg: "120px",
                md: "60px",
                sm: "60px",
                xs: "40px",
              },
              width: {
                xl: "120px",
                lg: "120px",
                md: "60px",
                sm: "60px",
                xs: "40px",
              },
              backgroundImage: `url(${Youtube})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "right",
              cursor: "pointer",
            }}
            src="#"
          ></Box>
        </Link>
      </Box>
    </Box>
  );
}

import React from "react";
import Box from "@mui/material/Box";
import { Button } from "../custom_components/Styled";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "../index.css";

export default function Header(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xl: "row", lg: "row", md: "column" },
        justifyContent: { xs: "center" },
        alignContent: { xs: "center" },
        width: "100%",
        height: {
          xl: "100vh",
          lg: "100vh",
          md: "100vh",
          sm: "100vh",
          xs: "100vh",
        },
      }}
    >
      <Box
        sx={{
          width: { xl: "50%", lg: "50%", md: "100%" },
          height: { xl: "100%", lg: "100%", md: "40%" },
          backgroundColor: "primary.dark",
          display: {
            xl: "flex",
            lg: "flex",
            md: "none",
            sm: "none",
            xs: "none",
          },
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
            width: { xl: "100%" },
            alignText: "left",
            color: "error.main",
            fontSize: { xl: "68px", lg: "50px", sm: "24px" },
          }}
        >
          {props.headerOp.firstSen}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Ubuntu",
            width: { xl: "100%" },
            alignText: "left",
            color: "#fff",
            fontSize: { xl: "68px", lg: "50px", sm: "24px" },
          }}
        >
          {props.headerOp.secondSen}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Ubuntu",
            width: { xl: "80%", lg: "70%" },
            color: "#fff",
            fontSize: { xl: "28px", lg: "24px", md: "20px", sm: "10px" },
          }}
        >
          {props.headerOp.thirdParagraph}
        </Typography>
        <Button component={Link} variant="outlined" pill to={props.headerOp.to}>
          {props.headerOp.buttonSen}
        </Button>
      </Box>
      <Box
        sx={{
          width: { xl: "50%", lg: "50%", md: "100%", sm: "100%", xs: "100%" },
          height: {
            xl: "100%",
            lg: "100%",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },
          backgroundImage: `url(${props.headerOp.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xl: "50%", lg: "50%", md: "100%", sm: "100%", xs: "70%" },
            height: {
              xl: "100%",
              lg: "100%",
              md: "100%",
              sm: "100%",
              xs: "40%",
            },
            display: {
              xl: "none",
              lg: "none",
              md: "flex",
              sm: "flex",
              xs: "flex",
            },
            flexDirection: "column",
            paddingLeft: { md: "70px", sm: "70px", xs: "0px" },
            paddingTop: { md: "0px", sm: "0px", xs: "10px" },
            paddingBottom: { md: "0px", sm: "0px", xs: "10px" },
            justifyContent: "center",
            alignItems: { md: "start", sm: "start", xs: "center" },
            gap: "5px",
            backgroundColor: {
              xl: "none",
              lg: "none",
              md: "none",
              sm: "none",
              xs: "rgba(0, 0, 0, 0.7)",
            },
            borderRadius: "20px",
            border: {
              xl: "none",
              lg: "none",
              md: "none",
              sm: "none",
              xs: "3px solid white",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Ubuntu",
              width: { xl: "100%" },
              alignText: "center",
              color: "error.main",
              fontSize: { md: "48px", sm: "36px", xs: "20px" },
            }}
          >
            {props.headerOp.firstSen}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Ubuntu",
              width: { xl: "100%" },
              alignText: "left",
              color: "#fff",
              fontSize: { md: "48px", sm: "36px", xs: "20px" },
            }}
          >
            {props.headerOp.secondSen}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: { md: "left", sm: "left", xs: "center" },
              fontFamily: "Ubuntu",
              width: { md: "50%", sm: "50%", xs: "90%" },
              color: "#fff",
              fontSize: { md: "28px", sm: "20px", xs: "16px" },
            }}
          >
            {props.headerOp.thirdParagraph}
          </Typography>
          <Button
            component={Link}
            variant="outlined"
            pill
            to={props.headerOp.to}
          >
            {props.headerOp.buttonSen}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

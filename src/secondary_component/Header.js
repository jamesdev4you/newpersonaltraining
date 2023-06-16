import React from "react";
import Box from "@mui/material/Box";
import { Button } from "../custom_components/Styled";
import Typography from "@mui/material/Typography";
import "../index.css";

export default function Header(props) {
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
          backgroundColor: "primary.dark",
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
          {props.headerOp.firstSen}
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
          {props.headerOp.secondSen}
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
          {props.headerOp.thirdParagraph}
        </Typography>
        <Button variant="outlined" pill>
          {props.headerOp.buttonSen}
        </Button>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          backgroundImage: `url(${props.headerOp.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          filter: "grayscale()",
        }}
      ></Box>
    </Box>
  );
}

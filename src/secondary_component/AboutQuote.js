import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AboutQuote = () => {
  return (
    <Box
      sx={{
        height: "300px",
        width: "100%",
        backgroundColor: "primary.dark",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          width: "50%",

          fontFamily: "Ubuntu",
          color: "error.main",
          textAlign: "center",
          fontSize: "34px",
        }}
      >
        "Mind over matter – focus your mind, your body will follow and you’ll be
        amazed at what you actually achieve."
      </Typography>
      <Typography
        sx={{
          width: "100%",
          margin: "0 20px",
          fontFamily: "Ubuntu",
          color: "white",
          textAlign: "center",
          fontSize: "28px",
        }}
      >
        - Edvania
      </Typography>
    </Box>
  );
};

export default AboutQuote;

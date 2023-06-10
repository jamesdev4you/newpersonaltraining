import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomeTestimonial = () => {
  return (
    <Box sx={{ height: "1500px", width: "100%" }}>
      <Box
        sx={{
          width: "70%",
          paddingTop: "100px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Typography variant="h3">The Results You Can Expect</Typography>
          <Typography variant="h5">
            The Armoury would be nothing without the men and women that have put
            their trust in us over the last 10 years, and working together we've
            had the privilege of seeing some truly tremendous accomplishments.
            Whether that means gaining the confidence to wear a two-piece at the
            beach after having their first child, fitting into the suit they
            always imagined they'd wear for their daughters wedding, or the
            everyday confidence that permeates everything they do, installed
            through the effort they've put in at the studio.{" "}
          </Typography>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default HomeTestimonial;

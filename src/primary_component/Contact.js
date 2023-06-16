import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header2 from "../assets/header.jpg";
import Header from "../secondary_component/Header";
import ContactForm from "../secondary_component/ContactForm";
import HomeContact from "../secondary_component/HomeContact";

const Contact = (props) => {
  return (
    <>
      <Header headerOp={props.headerOp} />
      <Box
        sx={{ height: "800px", width: "100%", backgroundColor: "primary.main" }}
      >
        <Box
          sx={{
            height: "800px",
            width: "60%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              height: "700px",
              width: "40%",
              marginRight: "30px",
              marginTop: "50px",
            }}
          >
            <ContactForm />
          </Box>
          <Box sx={{ height: "800px", width: "60%", marginTop: "50px" }}>
            <Box
              sx={{
                height: "200px",
                width: "100%",
                borderBottom: "1px solid grey",
              }}
            >
              <Typography
                sx={{ fontSize: "36px", color: "white", fontStyle: "italic" }}
              >
                ADDRESS
              </Typography>
              <Typography
                sx={{ fontSize: "20px", color: "white", paddingTop: "30px" }}
              >
                9602 W Linebaugh Ave, Westchase, FL 33626
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "white" }}>
                Get in touch for more info!
              </Typography>
            </Box>
            <Box
              sx={{
                height: "300px",
                width: "100%",
                display: "flex",
                paddingTop: "30px",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "36px", color: "white", fontStyle: "italic" }}
                >
                  Telephone
                </Typography>
                <Typography
                  sx={{ fontSize: "20px", color: "white", paddingTop: "30px" }}
                >
                  555-555-5555
                </Typography>
              </Box>
              <Box sx={{ marginLeft: "30%" }}>
                <Typography
                  sx={{ fontSize: "36px", color: "white", fontStyle: "italic" }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{ fontSize: "20px", color: "white", paddingTop: "30px" }}
                >
                  jamesdev4you@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <HomeContact />
    </>
  );
};

export default Contact;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../secondary_component/Header";
import ContactForm from "../secondary_component/ContactForm";
import HomeContact from "../secondary_component/HomeContact";

const Contact = (props) => {
  return (
    <>
      <Header headerOp={props.headerOp} />
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "primary.main",
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: "80%",
            margin: "auto",
            display: "flex",
            gap: "35px",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              height: "auto",
              width: {
                xl: "40%",
                lg: "100%",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },

              margin: "50px auto",
            }}
          >
            <ContactForm />
          </Box>
          <Box
            sx={{
              height: "auto",
              width: {
                xl: "60%",
                lg: "60%",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
              marginTop: {
                xl: "50px",
                lg: "50px",
                md: "30px",
                sm: "0px",
                xs: "0px",
              },
              marginBottom: "50px",
            }}
          >
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
                height: "auto",
                width: "100%",
                display: "flex",
                paddingTop: "30px",
                flexDirection: {
                  xl: "row",
                  lg: "column",
                  md: "column",
                  sm: "column",
                  xs: "column",
                },
              }}
            >
              <Box
                sx={{
                  height: "170px",
                  width: "100%",
                  borderBottom: {
                    xl: "none",
                    lg: "1px solid grey",
                    md: "1px solid grey",
                    sm: "1px solid grey",
                    xs: "1px solid grey",
                  },
                }}
              >
                <Typography
                  sx={{ fontSize: "36px", color: "white", fontStyle: "italic" }}
                >
                  Telephone
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    paddingTop: "30px",
                  }}
                >
                  #727-487-9698
                </Typography>
              </Box>
              <Box
                sx={{
                  marginLeft: {
                    xl: "30%",
                    lg: "0%",
                    md: "0%",
                    sm: "0%",
                    xs: "0%",
                  },
                  marginTop: {
                    xl: "0%",
                    lg: "30px",
                    md: "30px",
                    sm: "30px",
                    xs: "30px",
                  },
                }}
              >
                <Typography
                  sx={{ fontSize: "36px", color: "white", fontStyle: "italic" }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{ fontSize: "20px", color: "white", paddingTop: "30px" }}
                >
                  brazilianfitnessus@email.com
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

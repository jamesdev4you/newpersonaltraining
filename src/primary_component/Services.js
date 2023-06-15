import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header2 from "../assets/header.jpg";
import Header from "../secondary_component/Header";
import AboutQuote from "../secondary_component/AboutQuote";
import AboutTestimonial from "../secondary_component/AboutTestimonial";
import HomeContact from "../secondary_component/HomeContact";
import { Link } from "react-router-dom";
import { Button } from "../custom_components/Styled";
import "../index.css";

const Services = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "primary.light",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "auto",
            display: "flex",
            margin: "auto",
            padding: "100px",
            justifyContent: "space-evenly",
            backgroundColor: "primary.light",
          }}
        >
          <Box
            sx={{
              width: "30%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            <Box
              sx={{
                height: "240px",
                width: "100%",

                backgroundImage: `url(${Header2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            />
            <Typography
              sx={{
                padding: "30px 0px",
                fontSize: "26px",
                borderBottom: "1px solid white",
                fontFamily: "Ubuntu",
              }}
            >
              Yoga
            </Typography>
            <Typography
              sx={{
                padding: "20px 0px",
                fontSize: "36px",
                fontFamily: "Ubuntu",
              }}
            >
              FROM $35/WEEK
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                paddingBottom: "20px",
                borderBottom: "1px solid white ",
                fontFamily: "Normal",
              }}
            >
              All plans start with a consultation followed by an initial one
              month commitment, after which there is the opportunity to make
              longer commitments and save money
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                padding: "20px 0",
                fontFamily: "Normal",
              }}
            >
              Couples Coaching is ideal if you work harder and feel more
              motivated training with your partner/friend and want to make huge
              savings on personal training costs. You'll work through the
              individualised nutrition program I create for you, and exercise
              alongside your partner to accomplish your health and fitness
              goals.
            </Typography>
            <ul
              style={{
                paddingBottom: "20px",
                borderBottom: "1px solid white",
              }}
            >
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
            </ul>
            <Button
              component={Link}
              sx={{ margin: "30px auto auto auto" }}
              to="/yoga"
            >
              Start Now
            </Button>
          </Box>
          <Box
            sx={{
              width: "30%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            <Box
              sx={{
                height: "240px",
                width: "100%",

                backgroundImage: `url(${Header2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            />
            <Typography
              sx={{
                padding: "30px 0px",
                fontSize: "26px",
                borderBottom: "1px solid white",
                fontFamily: "Ubuntu",
              }}
            >
              Strength Training
            </Typography>
            <Typography
              sx={{
                padding: "20px 0px",
                fontSize: "36px",
                fontFamily: "Ubuntu",
              }}
            >
              FROM $35/WEEK
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                paddingBottom: "20px",
                borderBottom: "1px solid white ",
                fontFamily: "Normal",
              }}
            >
              All plans start with a consultation followed by an initial one
              month commitment, after which there is the opportunity to make
              longer commitments and save money
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                padding: "20px 0",
                fontFamily: "Normal",
              }}
            >
              Couples Coaching is ideal if you work harder and feel more
              motivated training with your partner/friend and want to make huge
              savings on personal training costs. You'll work through the
              individualised nutrition program I create for you, and exercise
              alongside your partner to accomplish your health and fitness
              goals.
            </Typography>
            <ul
              style={{
                paddingBottom: "20px",
                borderBottom: "1px solid white",
              }}
            >
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
            </ul>
            <Button
              component={Link}
              sx={{ margin: "30px auto auto auto" }}
              to="/personaltraining"
            >
              Start Now
            </Button>
          </Box>
          <Box
            sx={{
              width: "30%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
          >
            <Box
              sx={{
                height: "240px",
                width: "100%",

                backgroundImage: `url(${Header2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            />
            <Typography
              sx={{
                padding: "30px 0px",
                fontSize: "26px",
                borderBottom: "1px solid white",
                fontFamily: "Ubuntu",
              }}
            >
              Nutrition
            </Typography>
            <Typography
              sx={{
                padding: "20px 0px",
                fontSize: "36px",
                fontFamily: "Ubuntu",
              }}
            >
              FROM $35/WEEK
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                paddingBottom: "20px",
                borderBottom: "1px solid white ",
                fontFamily: "Normal",
              }}
            >
              All plans start with a consultation followed by an initial one
              month commitment, after which there is the opportunity to make
              longer commitments and save money
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                padding: "20px 0",
                fontFamily: "Normal",
              }}
            >
              Couples Coaching is ideal if you work harder and feel more
              motivated training with your partner/friend and want to make huge
              savings on personal training costs. You'll work through the
              individualised nutrition program I create for you, and exercise
              alongside your partner to accomplish your health and fitness
              goals.
            </Typography>
            <ul
              style={{
                paddingBottom: "20px",
                borderBottom: "1px solid white",
              }}
            >
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontFamily: "Ubuntu" }}>
                  Monthly Health & Fitness Testing
                </Typography>
              </li>
            </ul>
            <Button
              component={Link}
              sx={{ margin: "30px auto auto auto" }}
              to="/nutrition"
            >
              Start Now
            </Button>
          </Box>
        </Box>
      </Box>
      <AboutQuote />
      <AboutTestimonial />
      <HomeContact />
    </>
  );
};

export default Services;

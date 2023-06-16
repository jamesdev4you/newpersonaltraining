import React, { useState } from "react";
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

const Services = (props) => {
  const serviceOptions = [
    {
      image: Header2,
      title: "Yoga",
      price: "FROM $35/WEEK",
      plan: "All plans start with a consultation followed by an initial one month commitment, after which there is the opportunity to make longer commitments and save money",
      description:
        "Couples Coaching is ideal if you work harder and feel more motivated training with your partner/friend and want to make huge savings on personal training costs. You'll work through the individualised nutrition program I create for you, and exercise alongside your partner to accomplish your health and fitness goals.",
      pointOne: "Monthly Health & Fitness Testing",
      pointTwo: "Monthly Health & Fitness Testing",
      pointThree: "Monthly Health & Fitness Testing",
      pointFour: "Monthly Health & Fitness Testing",
      pointFive: "Monthly Health & Fitness Testing",
      pointSix: "Monthly Health & Fitness Testing",
      pointSeven: "Monthly Health & Fitness Testing",
      href: "/Yoga",
    },
    {
      image: Header2,
      title: "Strength Training",
      price: "FROM $35/WEEK",
      plan: "All plans start with a consultation followed by an initial one month commitment, after which there is the opportunity to make longer commitments and save money",
      description:
        "Couples Coaching is ideal if you work harder and feel more motivated training with your partner/friend and want to make huge savings on personal training costs. You'll work through the individualised nutrition program I create for you, and exercise alongside your partner to accomplish your health and fitness goals.",
      pointOne: "Monthly Health & Fitness Testing",
      pointTwo: "Monthly Health & Fitness Testing",
      pointThree: "Monthly Health & Fitness Testing",
      pointFour: "Monthly Health & Fitness Testing",
      pointFive: "Monthly Health & Fitness Testing",
      pointSix: "Monthly Health & Fitness Testing",
      pointSeven: "Monthly Health & Fitness Testing",
      href: "/PersonalTraining",
    },
    {
      image: Header2,
      title: "Nutrition",
      price: "FROM $35/WEEK",
      plan: "All plans start with a consultation followed by an initial one month commitment, after which there is the opportunity to make longer commitments and save money",
      description:
        "Couples Coaching is ideal if you work harder and feel more motivated training with your partner/friend and want to make huge savings on personal training costs. You'll work through the individualised nutrition program I create for you, and exercise alongside your partner to accomplish your health and fitness goals.",
      pointOne: "Monthly Health & Fitness Testing",
      pointTwo: "Monthly Health & Fitness Testing",
      pointThree: "Monthly Health & Fitness Testing",
      pointFour: "Monthly Health & Fitness Testing",
      pointFive: "Monthly Health & Fitness Testing",
      pointSix: "Monthly Health & Fitness Testing",
      pointSeven: "Monthly Health & Fitness Testing",
      href: "/Nutrition",
    },
  ];

  return (
    <>
      <Header headerOp={props.headerOp} />
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
          {serviceOptions.map(
            ({
              image,
              title,
              price,
              plan,
              description,
              pointOne,
              pointTwo,
              pointThree,
              pointFour,
              pointFive,
              pointSix,
              pointSeven,
              href,
            }) => {
              return (
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

                      backgroundImage: `url(${image})`,
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
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      padding: "20px 0px",
                      fontSize: "36px",
                      fontFamily: "Ubuntu",
                    }}
                  >
                    {price}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      paddingBottom: "20px",
                      borderBottom: "1px solid white ",
                      fontFamily: "Normal",
                    }}
                  >
                    {plan}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      padding: "20px 0",
                      fontFamily: "Normal",
                    }}
                  >
                    {description}
                  </Typography>
                  <ul
                    style={{
                      paddingBottom: "20px",
                      borderBottom: "1px solid white",
                    }}
                  >
                    <li>
                      <Typography sx={{ fontFamily: "Ubuntu" }}>
                        {pointOne}
                      </Typography>
                    </li>
                    <li>
                      <Typography sx={{ fontFamily: "Ubuntu" }}>
                        {pointTwo}
                      </Typography>
                    </li>
                    <li>
                      <Typography sx={{ fontFamily: "Ubuntu" }}>
                        {pointThree}
                      </Typography>
                    </li>
                    <li>
                      <Typography sx={{ fontFamily: "Ubuntu" }}>
                        {pointFour}
                      </Typography>
                    </li>
                    <li>
                      <Typography sx={{ fontFamily: "Ubuntu" }}>
                        {pointFive}
                      </Typography>
                    </li>
                    <li>
                      <Typography sx={{ fontFamily: "Ubuntu" }}>
                        {pointSix}
                      </Typography>
                    </li>
                    <li>
                      <Typography sx={{ fontFamily: "Ubuntu" }}>
                        {pointSeven}
                      </Typography>
                    </li>
                  </ul>
                  <Button
                    component={Link}
                    sx={{ margin: "30px auto auto auto" }}
                    to={href}
                  >
                    Start Now
                  </Button>
                </Box>
              );
            }
          )}
        </Box>
      </Box>
      <HomeContact />
    </>
  );
};

export default Services;

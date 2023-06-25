import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header2 from "../assets/header.jpg";
import Header from "../secondary_component/Header";
import barbells from "../assets/barbells.jpg";
import stretching from "../assets/picture-18.jpg";
import food from "../assets/pexels-sam-lion-5709296.jpg";
import AboutQuote from "../secondary_component/AboutQuote";
import AboutTestimonial from "../secondary_component/AboutTestimonial";
import HomeContact from "../secondary_component/HomeContact";
import { Link } from "react-router-dom";
import { Button } from "../custom_components/Styled";
import "../index.css";

const Services = (props) => {
  const serviceOptions = [
    {
      image: stretching,
      title: "Yoga",
      price: "FROM $40/WEEK",
      plan: "Every journey begins with an initial consultation call, paving the way for a one-week commitment tailored to your needs. Upon completion, you'll have the option to extend your commitment for greater savings and continued progress.",
      description:
        "Discover the transformative power of yoga with our dedicated personal trainer. Enhance flexibility, strength, and inner balance while experiencing relaxation, stress relief, and improved overall well-being through our tailored yoga sessions.",
      pointOne: "Flexibility: Enhances body's suppleness.",
      pointTwo: "Strength: Builds physical resilience.",
      pointThree: "Balance: Improves overall stability.",
      pointFour: "Stress Relief: Calms and relaxes.",
      pointFive: "Focus: Enhances mental concentration.",
      pointSix: "Posture: Corrects body alignment.",
      pointSeven: "Well-being: Promotes holistic health.",
      href: "/Yoga",
    },
    {
      image: barbells,
      title: "Strength Training",
      price: "FROM $20/WEEK",
      plan: "Every journey begins with an initial consultation call, paving the way for a one-week commitment tailored to your needs. Upon completion, you'll have the option to extend your commitment for greater savings and continued progress.",
      description:
        "Unleash your strength potential with our experienced personal trainer. Build muscle, increase power, and achieve your weight lifting goals through customized training programs designed to optimize results and elevate your fitness journey.",
      pointOne: "Muscle Growth: Promotes muscular development.",
      pointTwo: "Strength Gain: Increases physical power.",
      pointThree: "Bone Health: Enhances skeletal density.",
      pointFour: "Fat Loss: Burns excess fat.",
      pointFive: "Metabolism Boost: Accelerates calorie-burning.",
      pointSix: "Injury Prevention: Reduces injury risk.",
      pointSeven: "Functional Fitness: Improves everyday abilities.",
      href: "/PersonalTraining",
    },
    {
      image: food,
      title: "Nutrition",
      price: "FROM $21/WEEK",
      plan: "Every journey begins with an initial consultation call, paving the way for a commitment tailored to your needs. Upon completion, you'll have the option to extend your commitment for greater savings and continued progress.",
      description:
        "Transform your health with personalized nutrition planning guided by our expert personal trainer. Optimize your diet, achieve your goals, and unlock your full potential through a tailored approach to fueling your body for success.",
      pointOne: "Energy Boost: Enhances vitality levels.",
      pointTwo: "Weight Management: Facilitates healthy weight.",
      pointThree: "Nutrient Optimization: Maximizes essential nutrients.",
      pointFour: "Digestive Health: Improves gut function.",
      pointFive: "Disease Prevention: Reduces health risks.",
      pointSix: "Mood Enhancement: Supports emotional well-being.",
      pointSeven: "Longevity Promotion: Fosters longevity.",
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
            width: {
              xl: "90%",
              lg: "90%",
              md: "90%",
              sm: "90%",
              xs: "100%",
            },
            height: "auto",
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
            margin: "auto",
            padding: {
              xl: "50px",
              lg: "50px",
              md: "50px 0px",
              sm: "50px 0px",
              xs: "50px 0px",
            },
            justifyContent: "space-evenly",
            alignItems: {
              xl: "none",
              lg: "none",
              md: "center",
              sm: "center",
              xs: "center",
            },
            gap: {
              xl: "none",
              lg: "none",
              md: "50px",
              sm: "50px",
              xs: "50px",
            },

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
                    width: {
                      xl: "30%",
                      lg: "30%",
                      md: "80%",
                      sm: "80%",
                      xs: "80%",
                    },
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
                      fontSize: {
                        xl: "26px",
                        lg: "26px",
                        md: "20px",
                        sm: "20px",
                        xs: "18px",
                      },
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
                      fontSize: {
                        xl: "18px",
                        lg: "18px",
                        md: "18px",
                        sm: "18px",
                        xs: "16px",
                      },
                      padding: "20px 0",
                      fontFamily: "Normal",
                      display: {
                        xl: "inline",
                        lg: "inline",
                        md: "inline",
                        sm: "none",
                        xs: "none",
                      },
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

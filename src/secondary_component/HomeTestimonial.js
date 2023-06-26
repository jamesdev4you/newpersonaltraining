import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import before1 from "../assets/before1.jpg";
import after1 from "../assets/after1.jpg";
import before2 from "../assets/before2.jpg";
import after2 from "../assets/after2.jpg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../index.css";
import { Button } from "../custom_components/Styled";
import { Link } from "react-router-dom";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const HomeTestimonial = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const beforeAfterTestimonials = [
    {
      before: before1,
      after: after1,
      testimonial:
        "❝ Just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. I never have any problem at all. ❞",
      name: "- Nanda",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      before: before2,
      after: after2,
      testimonial:
        "❝ I worked with Edgy all through Covid on my strength and eating habits and now feel extemely confident! I loved her ability to care about others! ❞",
      name: "- Julia Harris",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  const testimonials = [
    {
      testimonial:
        "❝Results were astronomical! Chest, Bicepts, Triceps, robust with waist trimmed down by four inches!❞",
      name: "- Ron Felber",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      testimonial:
        "❝Just wanted to share a quick note and let you know that you guys do a really good job.❞",
      name: "- James Boyle",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      testimonial:
        "❝Just wanted to share a quick note and let you know that you guys do a really good job.❞",
      name: "- James Boyle",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      testimonial:
        "❝Just wanted to share a quick note and let you know that you guys do a really good job.❞",
      name: "- James Boyle",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        backgroundColor: "primary.light",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "90%",
          paddingTop: "50px",
          paddingBottom: "50px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "primary.light",
        }}
      >
        {" "}
        <Box
          sx={{
            width: "95%",
            backgroundColor: "primary.light",
            margin: "auto",
          }}
        >
          <motion.div
            ref={ref}
            animate={controls}
            variants={squareVariants}
            initial="hidden"
          >
            <Typography
              sx={{
                fontFamily: "Ubuntu",
                color: "error.main",
                textAlign: "center",
                fontSize: {
                  xl: "60px",
                  lg: "50px",
                  md: "50px",
                  sm: "44px",
                  xs: "23px",
                },
              }}
            >
              Your Dreams Will Come True!
            </Typography>
            <Typography
              sx={{
                fontFamily: "Normal",
                color: "white",
                textAlign: "center",
                padding: "50px 0",
                fontSize: {
                  xl: "20px",
                  lg: "20px",
                  md: "16px",
                  sm: "16px",
                  xs: "16px",
                },
              }}
            >
              The success of Brazilian Fitness is deeply intertwined with the
              individuals who have placed their faith in us throughout the past
              four years. Through our collaborative efforts, we have been
              fortunate to witness remarkable achievements. These triumphs range
              from empowering women to confidently don a two-piece swimsuit,
              fulfilling the dream of reducing a long-standing battle against a
              waistline, to instilling a daily sense of confidence that
              permeates every aspect of their lives, a direct result of their
              unwavering dedication and hard work.
            </Typography>
          </motion.div>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {beforeAfterTestimonials.map(
            ({ before, after, testimonial, name, rating }) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: {
                      xl: "47%",
                      lg: "47%",
                      md: "47%",
                      sm: "90%",
                      xs: "90%",
                    },
                    height: "auto",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "space-between",
                    marginBottom: "30px",
                    backgroundColor: "primary.light",
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xl: "48.2%",
                        lg: "47.5%",
                        md: "48.2%",
                        sm: "48.2%",
                        xs: "48.2%",
                      },

                      height: {
                        xl: "500px",
                        lg: "300px",
                        md: "300px",
                        sm: "300px",
                        xs: "300px",
                      },
                      backgroundImage: `url(${before})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                      marginBottom: "15px",
                      borderRadius: "15px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: {
                        xl: "48.2%",
                        lg: "47.5%",
                        md: "48.2%",
                        sm: "48.2%",
                        xs: "48.2%",
                      },
                      height: {
                        xl: "500px",
                        lg: "300px",
                        md: "300px",
                        sm: "300px",
                        xs: "300px",
                      },
                      backgroundImage: `url(${after})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                      marginBottom: "15px",
                      borderRadius: "15px",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      padding: "10px",
                      backgroundColor: "primary.dark",

                      borderRadius: "15px",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xl: "20px",
                          lg: "20px",
                          md: "16px",
                          sm: "16px",
                          xs: "16px",
                        },
                        fontFamily: "Ubuntu",
                        color: "white",
                      }}
                    >
                      {testimonial}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontFamily: "Ubuntu",
                        color: "white",
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontFamily: "Ubuntu",
                        color: "white",
                      }}
                    >
                      {rating}
                    </Typography>
                  </Box>
                </Box>
              );
            }
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            height: "auto",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            gap: "30px",
          }}
        >
          {testimonials.map(({ testimonial, name, rating }) => {
            return (
              <Box
                sx={{
                  width: {
                    xl: "22.8%",
                    lg: "22.3%",
                    md: "45%",
                    sm: "45%",
                    xs: "90%",
                  },
                  height: {
                    xl: "200px",
                    lg: "200px",
                    md: "auto",
                    sm: "auto",
                    xs: "auto",
                  },
                  backgroundColor: "primary.dark",
                  padding: "15px",

                  borderRadius: "15px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Normal",
                    color: "white",
                  }}
                >
                  {testimonial}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Ubuntu",
                    color: "white",
                  }}
                >
                  {name}
                </Typography>
                <Typography sx={{ fontSize: "18px", fontFamily: "Ubuntu" }}>
                  {rating}
                </Typography>
              </Box>
            );
          })}
          <Button variant="outlined" pill component={Link} to="/about">
            Start Today!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeTestimonial;

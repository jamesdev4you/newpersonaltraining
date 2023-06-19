import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonalTraining from "../assets/personaltraining.jpg";
import "../index.css";

const HomeTestimonial = () => {
  const beforeAfterTestimonials = [
    {
      before: PersonalTraining,
      after: PersonalTraining,
      testimonial:
        "❝ Just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. I never have any problem at all. ❞",
      name: "- James Boyle",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      before: PersonalTraining,
      after: PersonalTraining,
      testimonial:
        "❝ Just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. I never have any problem at all. ❞",
      name: "- James Boyle",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  const testimonials = [
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
            backgroundColor: "primary.light",
          }}
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
            The Results You Can Expect
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
            The Armoury would be nothing without the men and women that have put
            their trust in us over the last 10 years, and working together we've
            had the privilege of seeing some truly tremendous accomplishments.
            Whether that means gaining the confidence to wear a two-piece at the
            beach after having their first child, fitting into the suit they
            always imagined they'd wear for their daughters wedding, or the
            everyday confidence that permeates everything they do, installed
            through the effort they've put in.{" "}
          </Typography>
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
                      width: "48%",

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
                      backgroundPosition: "right",
                      marginBottom: "15px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "49%",
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
                      backgroundPosition: "right",
                      marginBottom: "15px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      padding: "10px",
                      backgroundColor: "primary.dark",
                      border: "1px solid black",
                      borderRadius: "15px",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
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
                    lg: "21%",
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
                  backgroundColor: "black",
                  padding: "15px",
                  border: "1px solid black",
                  borderRadius: "15px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
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
        </Box>
      </Box>
    </Box>
  );
};

export default HomeTestimonial;

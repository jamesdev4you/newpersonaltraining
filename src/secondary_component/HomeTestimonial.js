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
        height: "1500px",
        width: "100%",
        backgroundColor: "primary.light",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "70%",
          paddingTop: "50px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "primary.light",
        }}
      >
        {" "}
        <Box
          sx={{
            marginBottom: "50px",
            backgroundColor: "primary.light",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Ubuntu",
              color: "error.main",
              textAlign: "center",
            }}
          >
            The Results You Can Expect
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Normal",
              color: "white",
              textAlign: "center",
              padding: "50px 0",
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
            height: "800px",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {beforeAfterTestimonials.map(
            ({ before, after, testimonial, name, rating }) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "50%",
                    height: { xl: "800px" },
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "space-between",
                    gap: "30px",
                    backgroundColor: "primary.light",
                  }}
                >
                  <Box
                    sx={{
                      width: "47%",
                      height: { xl: "500px", lg: "300px" },
                      backgroundImage: `url(${before})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "right",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "47%",
                      height: { xl: "500px", lg: "300px" },
                      backgroundImage: `url(${after})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "right",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "180px",
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
                        fontSize: "18px",
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
            width: "100%",
            height: "200px",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {testimonials.map(({ testimonial, name, rating }) => {
            return (
              <Box
                sx={{
                  width: "24.5%",
                  height: "200px",
                  backgroundColor: "black",
                  padding: "5px",
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

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "../custom_components/Styled";
import Header from "../assets/header.jpg";
import "../index.css";

const AboutOpening = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { xl: "1100px", lg: "800px" },
        backgroundColor: "primary.light",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <Box
        sx={{
          height: "100%",
          borderRadius: "50%",
          width: "30%",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: "38px",
            textAlign: "center",
            width: "100%",
            color: "white",
            fontFamily: "Ubuntu",
          }}
        >
          Edvania Peterson
        </Typography>

        <Box
          sx={{
            height: "420px",
            borderRadius: "50%",
            width: "420px",
            margin: "0px auto",
            backgroundImage: `url(${Header})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right",
            border: "5px solid",
            borderColor: "white",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginLeft: "50px",
          gap: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "38px",
            textAlign: "left",
            width: "100%",
            color: "white",
            fontFamily: "Ubuntu",
          }}
        >
          Meet your trainer
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            textAlign: "left",
            width: "100%",
            color: "white",
            fontFamily: "Normal",
          }}
        >
          There was a time where I felt uncomfortable in my clothes and my skin.
          I knew that I was carrying a little bit of extra weight compared to my
          friends around my age, and looking back now, it wasn't even that much.
          But it was enough at the time to knock my confidence - it got me down
          and I tried to diet.
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            textAlign: "left",
            width: "100%",
            color: "white",
            fontFamily: "Normal",
          }}
        >
          I didn't know what I was doing. I had no direction and without a plan,
          I made a lot of mistakes. I started to learn about nutrition and
          making slightly better food choices. I learned about training plans
          and making sure that the time I was spending in the gym was effective.
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            textAlign: "left",
            width: "100%",
            color: "white",
            fontFamily: "Normal",
          }}
        >
          Then, in 2002 I joined the military. That was a pivotal time in my
          life because now my fitness wasn't just about how I looked and felt,
          it could have meant life or death for myself, my friends and
          colleagues in my Company. I took it seriously and got military fit. It
          was a life-changing journey and for the first time, I felt like I
          fitted in. Throughout my career I completed a number of arduous
          courses, including P-Company and even finished three back to back
          ultra-marathons which tested my mental and physical ability. In 2011,
          I then became a Physical Training Instructor within the Army.
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            textAlign: "left",
            width: "100%",
            color: "white",
            fontFamily: "Normal",
          }}
        >
          I was in the military for over 15 years. When I left, I took a
          high-profile management position with a lot of responsibility and
          stress. This led me away from my core passion of fitness and helping
          others achieve their health and wellbeing goals. I was in that job for
          two years, where the long and demanding hours meant my health took a
          back seat again. I knew that I didn't want to live that life and
          wanted to do something I have always been passionate about -
          ultimately leading me back into the fitness industry.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutOpening;

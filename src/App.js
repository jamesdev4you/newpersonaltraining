import React, { useState } from "react";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Menu from "./primary_component/Menu";
import Home from "./primary_component/Home";
import Footer from "./primary_component/Footer";
import About from "./primary_component/About";
import Services from "./primary_component/Services";
import Testimonials from "./primary_component/Testimonials";
import Contact from "./primary_component/Contact";
import Nutrition from "./service_components/Nutrition";
import PersonalTraining from "./service_components/PersonalTraining";
import Yoga from "./service_components/Yoga";
import Calendar from "./service_components/Calendar";
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import HeaderImg from "./assets/header.jpg";

const theme = createTheme({
  shape: {
    pillRadius: 50,
  },
  palette: {
    primary: { main: "#002672" },
    secondary: {
      main: "#FFFFFF",
    },
    error: { main: "#ffd700" },
  },
});

function App() {
  const [count, setCount] = useState(0);

  const headerOptions = [
    {
      firstSen: "Transform yourself",
      secondSen: "into the Perfect you",
      thirdParagraph:
        "Providing services in Yoga, Body Building, Personal Training, and Nutrition",
      buttonSen: "Learn More",
      image: HeaderImg,
    },
    {
      firstSen: "Transform yourself",
      secondSen: "into the Perfect you",
      thirdParagraph:
        "Providing services in Yoga, Body Building, Personal Training, and Nutrition",
      buttonSen: "Learn More",
      image: HeaderImg,
    },
    {
      firstSen: "Transform yourself",
      secondSen: "into the Perfect you",
      thirdParagraph:
        "Providing services in Yoga, Body Building, Personal Training, and Nutrition",
      buttonSen: "Learn More",
      image: HeaderImg,
    },
    {
      firstSen: "Transform yourself",
      secondSen: "into the Perfect you",
      thirdParagraph:
        "Providing services in Yoga, Body Building, Personal Training, and Nutrition",
      buttonSen: "Learn More",
      image: HeaderImg,
    },
    {
      firstSen: "Transform yourself",
      secondSen: "into the Perfect you",
      thirdParagraph:
        "Providing services in Yoga, Body Building, Personal Training, and Nutrition",
      buttonSen: "Learn More",
      image: HeaderImg,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/" element={<Home headerOp={headerOptions[0]} />} />
          <Route
            path="/about"
            element={<About headerOp={headerOptions[1]} />}
          />
          <Route
            path="/services"
            element={<Services headerOp={headerOptions[2]} />}
          />
          <Route
            path="/testimonials"
            element={<Testimonials headerOp={headerOptions[3]} />}
          />
          <Route
            path="/contact"
            element={<Contact headerOp={headerOptions[4]} />}
          />
          <Route
            path="/nutrition"
            element={<Nutrition setCount={setCount} />}
          />
          <Route
            path="/personaltraining"
            element={<PersonalTraining setCount={setCount} />}
          />
          <Route path="/yoga" element={<Yoga setCount={setCount} />} />

          <Route path="/calendar" element={<Calendar count={count} />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

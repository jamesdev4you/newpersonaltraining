import React from "react";
import Header from "../secondary_component/Header";
import AboutOpening from "../secondary_component/AboutOpening";
import AboutQuote from "../secondary_component/AboutQuote";
import AboutTestimonial from "../secondary_component/AboutTestimonial";
import "../index.css";

const About = () => {
  return (
    <div>
      <Header />
      <AboutOpening />
      <AboutQuote />
      <AboutTestimonial />
    </div>
  );
};

export default About;

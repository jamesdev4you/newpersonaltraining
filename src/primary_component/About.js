import React from "react";
import Header from "../secondary_component/Header";
import AboutOpening from "../secondary_component/AboutOpening";
import AboutQuote from "../secondary_component/AboutQuote";
import AboutTestimonial from "../secondary_component/AboutTestimonial";
import HomeContact from "../secondary_component/HomeContact";
import "../index.css";

const About = (props) => {
  return (
    <div>
      <Header headerOp={props.headerOp} />
      <AboutOpening />
      <AboutQuote />
      <AboutTestimonial />
      <HomeContact />
    </div>
  );
};

export default About;

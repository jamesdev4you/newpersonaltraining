import React from "react";
import Header from "../secondary_component/Header";
import AboutOpening from "../secondary_component/AboutOpening";
import AboutQuote from "../secondary_component/AboutQuote";
import AboutTestimonial from "../secondary_component/AboutTestimonial";
import HomeContact from "../secondary_component/HomeContact";
import NutritionPicture from "../assets/nutrition.jpg";
import EdvaniaPicture from "../assets/About.jpg";
import "../index.css";

const aboutOptions = [
  {
    name: "Edvania Peterson",
    picture: EdvaniaPicture,
    title: "Meet your trainer",
    paraOne:
      "Hey I'm Edvania! Thanks for stopping by this website! I'm originally hailing from Brazil, but made a bold decision to chase my dreams and relocate to America. However, as I immersed myself in a newfound corporate job, I quickly realized that it didn't align with my true self. Searching for solace and an outlet for my mental well-being, I turned to the world of fitness.",
    paraTwo:
      "Little did I know, this exploration would ignite an unyielding passion within me. I discovered that not only did working out positively impact my mental health, but it also became my driving force. It awakened a profound desire to assist others in achieving their fitness aspirations and unlocking their full potential. This passion transformed me into a dedicated personal trainer, devoted to guiding my clients along their unique fitness journeys.",
    paraThree:
      "With my Brazilian background, I bring a vibrant energy and a unique perspective to my training approach. My experiences of cultural fusion have cultivated a deep understanding of diverse body types, motivations, and aspirations. I embrace the power of personalized fitness solutions, tailored to each individual's needs, ensuring that every client receives a customized program designed for optimal results.",
  },
  {
    name: "Vivi Pashiown",
    picture: NutritionPicture,
    title: "Meet your nutritionist",
    paraOne:
      "Hey I'm Vivi! Thanks for stopping by this website! I'm originally hailing from Brazil, but made a bold decision to chase my dreams and relocate to America. However, as I immersed myself in a newfound corporate job, I quickly realized that it didn't align with my true self. Searching for solace and an outlet for my mental well-being, I turned to the world of fitness.",
    paraTwo:
      "Little did I know, this exploration would ignite an unyielding passion within me. I discovered that not only did working out positively impact my mental health, but it also became my driving force. It awakened a profound desire to assist others in achieving their fitness aspirations and unlocking their full potential. This passion transformed me into a dedicated personal trainer, devoted to guiding my clients along their unique fitness journeys.",
    paraThree:
      "With my Brazilian background, I bring a vibrant energy and a unique perspective to my training approach. My experiences of cultural fusion have cultivated a deep understanding of diverse body types, motivations, and aspirations. I embrace the power of personalized fitness solutions, tailored to each individual's needs, ensuring that every client receives a customized program designed for optimal results.",
  },
];

const About = (props) => {
  return (
    <div>
      <Header headerOp={props.headerOp} />
      <AboutOpening aboutOptions={aboutOptions[0]} />
      <AboutOpening aboutOptions={aboutOptions[1]} />
      <AboutQuote />
      <AboutTestimonial />
      <HomeContact />
    </div>
  );
};

export default About;

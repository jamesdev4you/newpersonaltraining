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
      "My name is Edvania. I'm originally from Brazil and am a mother of 2 kids, and I'm 41 years old. Eight years ago, I was going through a severe depression during the dark time. I figured that I would change my life completely, so I decided to move to America with my two kids. I lived with my sister for a short period in Chicago, and I decided to go to the gym with her. I took Yoga classes, and I fell in love. After a couple of months, I didn't feel depressed anymore. I started eating healthy food and giving up my bad habits, and I began to see all the results of caring for myself, which made me want to change even more. ",
    paraTwo:
      "Little by little, I included good habits in my routine, and for the first time in my life, I started to believe in myself. Finally, I got cured of the depression that almost took my life away. I tried suicide. Thank God it didn't succeed. After a couple of months, I married and had a great relationship, but I divorced five years later. I struggled, but at the time, my mindset was strong, and I survived the hard time I did give up on my fitness journey. I decided to go even further to take a class and become a Personal Trainer in San Diego.",
    paraThree:
      "I also decided to become Bodybuild since I'm living my dreams of helping people conquer their confidence and get mentally and physically healthy. It is a pleasure to help all those people, and I am sure that I can help you as with all my experience, let's do it together is not easy, but I am sure a God with you committed to yourself and looking for the right tools you can find the Paradise. I have what you are looking for let me help you Brazilian fitness brings the confidence and mental and physical health that you seek in comfort at your home. You will not regret it!",
  },
  {
    name: "Viviane Paixao",
    picture: NutritionPicture,
    title: "Meet your nutritionist",
    paraOne:
      "Meet Viviane Paixao, our vibrant and dedicated nutritionist based in the sunny heart of Brazil. With a passion as radiant as the tropical sunsets of her homeland, Viviane brings more than two decades of expertise to the world of nutrition. Her love for her job is contagious; every consultation with her feels like a personalized journey towards better health. Viviane is not just knowledgeable; she's a true aficionado of nutrition, weaving science and passion together seamlessly. Her extensive education in the field equips her with the wisdom to craft tailored dietary plans, ensuring her clients embark on a transformative wellness adventure.",
    paraTwo:
      "In the bustling world of fitness, Viviane stands out as a beacon of professionalism and warmth. Her approach combines fun and seriousness, making the pursuit of a healthier lifestyle an enjoyable experience. Imagine strolling through the vibrant markets of Brazil, tasting exotic fruits and learning about their nutritional benefits—all part of Viviane's engaging sessions. Her deep understanding of nutrition isn't just a profession; it's a way of life. With her guidance, you'll embark on a journey where each meal is a step toward vitality, and every snack is a choice for a better you.",
    paraThree:
      "Viviane's charisma is as impressive as her credentials. In her company, you'll find a friend who listens, a mentor who educates, and a guide who inspires. So, whether you're looking to shed a few pounds, embrace a wholesome diet, or simply enhance your overall well-being, Viviane Paixao is the name to trust. Let her passion for nutrition and wealth of knowledge light the path to your fittest, healthiest self. Welcome to a world where health meets happiness, and where Viviane is ready to accompany you every step of the way.",
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

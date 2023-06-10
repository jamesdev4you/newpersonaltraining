import React from "react";
import Header from "../secondary_component/Header";
import HomeOptions from "../secondary_component/HomeOptions";
import HomeAbout from "../secondary_component/HomeAbout";
import HomeTestimonial from "../secondary_component/HomeTestimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeOptions />
      <HomeAbout />
      <HomeTestimonial />
    </div>
  );
}

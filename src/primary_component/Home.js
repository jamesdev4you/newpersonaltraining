import React from "react";
import Header from "../secondary_component/Header";
import HomeOptions from "../secondary_component/HomeOptions";
import HomeAbout from "../secondary_component/HomeAbout";
import HomeTestimonial from "../secondary_component/HomeTestimonial";
import HomeContact from "../secondary_component/HomeContact";
import "../index.css";

export default function Home(props) {
  return (
    <div>
      <Header headerOp={props.headerOp} />
      <HomeOptions />
      <HomeAbout />
      <HomeTestimonial />
      <HomeContact />
    </div>
  );
}

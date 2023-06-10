import React from "react";
import Header from "../secondary_component/Header";
import HomeOptions from "../secondary_component/HomeOptions";
import HomeAbout from "../secondary_component/HomeAbout";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeOptions />
      <HomeAbout />
    </div>
  );
}

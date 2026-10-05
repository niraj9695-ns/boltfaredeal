import React from "react";
import AboutIntro from "./AboutUs/AboutIntro";
import AboutVision from "./AboutUs/AboutVision_Mission";
import AboutValues from "./AboutUs/AboutValues";
import AboutGoal from "./AboutUs/AboutGoal";

const AboutUs = () => {
  return (
    <main className="about-us">
      <AboutIntro />
      <AboutVision />
      <AboutValues />
      <AboutGoal />
    </main>
  );
};

export default AboutUs;
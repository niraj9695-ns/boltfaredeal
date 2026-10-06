import React from "react";
import AboutIntro from "./AboutUs/AboutIntro";
import AboutVision from "./AboutUs/AboutVision_Mission";
import AboutValues from "./AboutUs/AboutValues";
import AboutGoal from "./AboutUs/AboutGoal";
import FounderStory from "./AboutUs/FounderStory";

const AboutUs = () => {
  return (
    <main className="about-us">
      <AboutIntro />
      <AboutVision />
      <AboutValues />
      <AboutGoal />
      <FounderStory />
    </main>
  );
};

export default AboutUs;
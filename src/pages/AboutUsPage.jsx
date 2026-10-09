import React from "react";
import AboutIntro from "./AboutUs/AboutIntro";
import AboutVision from "./AboutUs/AboutVision";
import AboutMission from "./AboutUs/AboutMission";
import AboutValues from "./AboutUs/AboutValues";
import AboutGoal from "./AboutUs/AboutGoal";
import FounderStory from "./AboutUs/FounderStory";
import TeamApproach from "./AboutUs/TeamApproach";

const AboutUs = () => {
  return (
    <main className="about-us">
      <AboutIntro />
      <FounderStory />
      <TeamApproach />
      <AboutVision />
      <AboutMission />
      <AboutValues />
      <AboutGoal />
    </main>
  );
};

export default AboutUs;
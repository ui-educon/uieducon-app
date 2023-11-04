import React from "react";
import Hero from "../Hero/Hero";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Courses from "../Courses/Courses";
import HowItWorks from "../HowItWorks/HowItWorks";
import Certificates from "../Certificates/Certificates";
import Achievers from "../Achievers/Achievers";
import Career from "../Career/Career";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Courses />
      <HowItWorks />
      <Certificates />
      <Achievers />
      <Career />
    </div>
  );
};

export default HomePage;

import React from 'react'
import Layout from '../Layout';
import Achievers from "../Achievers/Achievers";
import Career from "../Career/Career";
import Certificates from "../Certificates/Certificates";
import Hero from '../Hero/Hero';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Courses from '../Courses/Courses';
import HowItWorks from "../HowItWorks/HowItWorks";

const Home = () => {
  return (
    <>
        <Layout>
        
       <Hero />
       <WhoWeAre />
       <Courses />
       <HowItWorks />
       <Certificates />
       <Achievers />
       <Career />
        </Layout>
    </>
  )
}

export default Home